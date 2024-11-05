console.log("app");

gsap.registerPlugin(ScrollTrigger);

import { delay } from "./helpers/func.js?v=240926123";
import {
  Transition,
  mainAnimation,
  aboutAnimation,
  marqueeAnimation,
  serviceAnimation,
  contactAnimation,
} from "./animations/index.js?v=240926123";
import {
  ButtonCtrl,
  Cursor,
  Tooltip,
  ImageCtrl,
  FormProcess,
  FaqItem,
} from "./components/index.js?v=240926123";

let prjOffsetTop = 0;

function setWithExpiry(key, value, ttl) {
  const now = new Date();

  const item = {
    value: value,
    expiry: now.getTime() + ttl,
  };

  localStorage.setItem(key, JSON.stringify(item));
}

function getWithExpiry(key) {
  const itemStr = localStorage.getItem(key);

  if (!itemStr) {
    return null;
  }
  const item = JSON.parse(itemStr);
  const now = new Date();

  if (now.getTime() > item.expiry) {
    localStorage.removeItem(key);
    return null;
  }

  return item.value;
}

async function initProject() {
  // 240612 edit ==============================
  const projectModal = document.querySelector("#project-modal");

  if (!projectModal) return;

  const scrollbar = Scrollbar.init(projectModal, {
    damping: 0.2,
    alwaysShowTracks: true,
  });

  let currentId;
  const LOAD_MORE_URL = "./ajax/board.process.php";
  const MIN_LOADER_TIME = 1000;
  const DOM = {
    listHook: document.querySelector("#project-gallery-list"),
    modalHook: projectModal.querySelector("#project-modal-hook"),
    tags: projectModal.querySelector(".project-modal__tags"),
    client: projectModal.querySelector("dd"),
    img: projectModal.querySelector("picture img"),
    title: projectModal.querySelector("h4"),
    contents: projectModal.querySelector(".project-modal__text"),
    detail: projectModal.querySelector(".project-modal__detail"),
    iframe: projectModal.querySelector(".project-modal__block--iframe"),
    tabContainer: projectModal.querySelector(".project-modal__tabs"),
    tabs: projectModal.querySelectorAll(".project-modal__tabs button"),
    blocks: projectModal.querySelectorAll(".project-modal__block"),
    closeBtn: projectModal.querySelector(".project-modal__action button"),
    prjBtn: projectModal.querySelector(".project-modal__footer__inner a"),
    loadBtn: document.querySelector("#load-btn"),
    loader: document.querySelector("#loader"),
    prevBtn: projectModal.querySelector(
      ".project-modal__footer__inner button:first-of-type"
    ),
    nextBtn: projectModal.querySelector(
      ".project-modal__footer__inner button:last-of-type"
    ),
    endText: document.querySelector("#end-text"),
    link: projectModal.querySelector(".project-modal__link"),
    copy: projectModal.querySelector(".project-modal__copy"),
  };

  DOM.copy.addEventListener("click", function () {
    const url = DOM.copy.dataset.url;

    if (!url) return;
    window.navigator.clipboard.writeText(url);
    alert("�ъ씠�� 二쇱냼媛� 蹂듭궗�섏뿀�듬땲��.");
  });

  function getItems() {
    if (!DOM.listHook) return;
    return [...DOM.listHook.children];
  }

  function hideModal() {
    currentId = null;
    projectModal.classList.remove("active");
    setTimeout(() => {
      DOM.img.src = "";
      DOM.client.textContent = "";
      DOM.contents.innerHTML = null;
      DOM.detail.innerHTML = null;
      DOM.iframe.innerHTML = null;
    }, 300);
  }
  function showModal() {
    scrollbar.setPosition(0, 0);
    projectModal.classList.add("active");
  }

  function resetTabs() {
    DOM.tabs.forEach((btn) => {
      btn.classList.remove("active");
    });
  }

  function resetBlocks() {
    DOM.blocks.forEach((block) => {
      block.classList.remove("active");
    });
  }

  function initTab() {
    resetTabs();
    resetBlocks();
    DOM.tabs[0].classList.add("active");
    DOM.blocks[0].classList.add("active");
  }

  function visibleElement(el, hidden = true) {
    if (hidden) {
      el.style.visibility = "visible";
      el.style.opacity = 1;
    } else {
      el.style.visibility = "hidden";
      el.style.opacity = 0;
    }
  }

  function displayElement(el, hidden = true, flex = false) {
    if (!el) return;
    el.style.display = hidden ? (flex ? "flex" : "block") : "none";
  }

  async function showProject(prjId) {
    if (!prjId) return;

    currentId = prjId;
    const time1 = performance.now();
    const { data } = await (
      await fetch(`/module/ajax/project.php?no=${prjId}`)
    ).json();
    // console.log(data);

    DOM.img.src = "/uploads/board/" + data.thumb_image;
    DOM.client.textContent = data.extra4;
    DOM.title.textContent = data.title;
    DOM.contents.innerHTML = data.contents;
    initTab();

    // tags
    const tagFragment = document.createDocumentFragment();
    const tags = data.extra1.split(",");
    for (const tag of tags) {
      const li = document.createElement("li");
      li.textContent = tag;
      tagFragment.append(li);
    }

    DOM.tags.innerHTML = null;
    DOM.tags.append(tagFragment);

    // detail image
    DOM.detail.innerHTML = null;
    const details = [
      data.file_attach_1,
      data.file_attach_2,
      data.file_attach_3,
      data.file_attach_4,
      data.file_attach_5,
    ]
      .filter((file) => file)
      .map((file) => `/uploads/board/${file}`);
    const detailFragment = document.createDocumentFragment();
    details.forEach((item) => {
      const img = document.createElement("img");
      img.src = item;
      detailFragment.append(img);
    });
    DOM.detail.append(detailFragment);

    if (data.extra3) {
      // link url
      DOM.iframe.innerHTML = null;
      DOM.link.href = data.extra3;
      DOM.copy.dataset.url = data.extra3;
      /*
			DOM.link.addEventListener('click', e => {
				window.open(e.currentTarget.href, "_blank");
			});
			*/
      const iframe = document.createElement("iframe");
      let src = data.extra3;

      if (src.startsWith("https:")) {
        src = src.replace("https:", "");
        iframe.src = src;
        iframe.allowfullscreen = true;
        iframe.frameborder = "0";
        iframe.sandbox =
          "allow-same-origin allow-scripts allow-popups allow-forms";

        DOM.iframe.append(iframe);
        displayElement(DOM.tabContainer, true, true);
      } else {
        displayElement(DOM.tabContainer, false);
      }
    } else {
      DOM.link.href = "javascript:void(0);";
      DOM.copy.dataset.url = "";
    }

    const time2 = performance.now();
    const diff = time2 - time1;

    const curIdx = getItems().findIndex(
      (item) => +item.dataset.no === +currentId
    );
    if (getItems()[curIdx - 1]) {
      visibleElement(DOM.prevBtn, true);
    } else {
      visibleElement(DOM.prevBtn, false);
    }
    if (getItems()[curIdx + 1]) {
      visibleElement(DOM.nextBtn, true);
    } else {
      visibleElement(DOM.nextBtn, false);
    }

    showModal();
  }

  async function showNextProject() {
    const idx = getItems().findIndex((item) => +item.dataset.no === +currentId);
    if (idx === -1) return;
    if (!getItems()[idx + 1]) return;

    const nextId = getItems()[idx + 1].dataset.no;
    showProject(nextId);
  }

  async function showPrevProject() {
    const idx = getItems().findIndex((item) => +item.dataset.no === +currentId);
    if (idx === -1) return;
    if (!getItems()[idx - 1]) return;

    const prevId = getItems()[idx - 1].dataset.no;
    showProject(prevId);
  }

  async function loadMore() {
    displayElement(DOM.loader);
    displayElement(DOM.loadBtn, false);

    const params = new URLSearchParams({
      mode: "more.paging",
      category_no: $("#category_no").val(),
      board_no: $("#board_no").val(),
      sort_no: DOM.listHook.lastElementChild.dataset.sort,
    });

    const time1 = performance.now();

    const resp = await fetch(LOAD_MORE_URL, {
      method: "POST",
      body: params,
    });
    const result = await resp.json();

    console.log(result);

    if (result.rows && result.rows.length === 0) {
      displayElement(DOM.loader, false);
      displayElement(DOM.loadBtn, false);
      displayElement(DOM.endText, true);
      return;
    }

    const fragment = document.createDocumentFragment();
    result.rows.forEach((item) => {
      const tags = item.tag ? item.tag.split(",") : [];
      let tagsHTML = "";
      if (tags && tags.length > 0) {
        tags.forEach((t) => (tagsHTML += `<li><span>${t}</span></li>`));
      }

      const li = document.createElement("li");
      li.dataset.no = item.no;
      li.dataset.sort = item.sort_no;
      li.className = "no-prjPage-galleryItem";

      li.innerHTML = `
				<a href="javascript:void(0);">
				  <figure data-cursor="-project" data-cursor-text="See Project">
					<img src="/uploads/board/${item.thumb_image}" alt="${item.title}">
				  </figure>
				  <figcaption>
					<div>
						<h3 class="no-prjPage-galleryItem__title">${item.title}</h3>
					  <ul class="no-prjPage-galleryItem__tags">${tagsHTML}</ul>
					</div>
					<div class="no-prjPage-galleryItem__arrow">
					  <span><i class="fa-solid fa-chevron-right"></i></span>
					</div>
				  </figcaption>
				</a>
			`;

      li.addEventListener("click", () => showProject(item.no));
      fragment.append(li);
    });

    const time2 = performance.now();
    const diff = time2 - time1;

    if (diff < MIN_LOADER_TIME) {
      await new Promise((resolve) => {
        setTimeout(resolve, MIN_LOADER_TIME - diff);
      });
    }

    DOM.listHook.append(fragment);
    displayElement(DOM.loader, false);
    displayElement(DOM.loadBtn);
    ScrollTrigger.refresh();
  }

  function initEvents() {
    const items = getItems();
    if (items && items.length === 0) return;

    scrollbar.addListener(function (e) {
      gsap.set(".project-modal__action", {
        y: `${e.offset.y}`,
      });
    });

    DOM.nextBtn.addEventListener("click", showNextProject);
    DOM.prevBtn.addEventListener("click", showPrevProject);

    DOM.prjBtn.addEventListener("click", hideModal);

    DOM.closeBtn.addEventListener("click", hideModal);

    if (DOM.loadBtn) {
      DOM.loadBtn.addEventListener("click", loadMore);
    }

    // tab
    DOM.tabs.forEach((btn, idx) => {
      btn.addEventListener("click", function () {
        resetTabs();
        resetBlocks();
        btn.classList.add("active");
        DOM.blocks[idx].classList.add("active");
      });
    });

    if (items && items.length > 0) {
      items.forEach((prj) => {
        prj.addEventListener("click", (e) => {
          e.preventDefault();
          showProject(prj.dataset.no);
        });
      });
    }
  }

  initEvents();
  initTab();
  displayElement(DOM.loader, false);
}

async function App() {
  Transition.initTransition();
  const globalState = await Transition.initTransition();
  ButtonCtrl.init();
  Cursor.setCursor();
  // Header.init();
  ImageCtrl.init();
  FaqItem.init();
  Tooltip.init();

  FormProcess.init(globalState);

  if (document.querySelector(".no-prjPage-galleryItem")) {
    const prjList = document.querySelectorAll(".no-prjPage-galleryItem");
    prjList.forEach((item) => {
      item.addEventListener("click", () => {
        prjOffsetTop = globalState.scrollbar.offset.y;
      });
    });

    if (prjOffsetTop) {
      globalState.scrollbar.scrollTo(0, prjOffsetTop, 500);
    }
  }

  if (document.querySelector(".no-catg__inner")) {
    const projectCategorySwiper = new Swiper(".no-catg__inner", {
      slidesPerView: "auto",
      spaceBetween: 8,
      scrollbar: {
        el: ".no-catg__scrollbar",
      },
    });
  }

  mainAnimation();
  aboutAnimation();
  serviceAnimation();
  marqueeAnimation();
  contactAnimation();
  initProject(); // -- 240612 edit =======

  gsap.to("#load-btn i", {
    duration: 2.5,
    repeat: -1,
    rotation: 360,
  });

  /*
  if(document.getElementById('#project-category')) {

	  const projectSwiper = new Swiper('.project-category', {
		 slidesPerView: 'auto',
		 spaceBetween: 8,
		 navigation: {
			nextEl: '.project-next',
			prevEl: '.project-prev',
		  },
	  });
  }
  */
}

App();

// BARBA =========================================================

// barba.use(barbaRouter, {
//   routes: routes,
// });

barba.hooks.after(() => {
  App();
});

barba.init({
  sync: true,
  transitions: [
    {
      to: {
        namespace: ["home"],
      },
      async once(data) {
        const date = new Date();
        // 1000 = 1珥�

        if (getWithExpiry("mainIntro")) {
          Transition.pageOnce(data);
        } else {
          setWithExpiry("mainIntro", true, 1000 * 60 * 30);
          Transition.introMain(data);
        }
      },
    },
    {
      to: {
        namespace: ["company"],
      },
      async enter(data) {
        if (getWithExpiry("companyIntro")) {
          Transition.pageEnter(data);

          // check lord icon
          const icons = data.next.container.querySelectorAll("lord-icon");

          if (icons) {
            icons.forEach((icon) => {
              icon.addEventListener("ready", () => {
                const svgElements = icon.shadowRoot.querySelectorAll("svg");
                console.log(svgElements);
                if (svgElements.length > 1) {
                  svgElements[0].remove();
                }
              });
            });
          }
          // end
        } else {
          setWithExpiry("companyIntro", true, 1000 * 60 * 30);
          const done = this.async();
          Transition.companyEnter(data);
          await delay(3000);
          done();

          // check lord icon
          const icons = data.next.container.querySelectorAll("lord-icon");

          if (icons) {
            icons.forEach((icon) => {
              icon.addEventListener("ready", () => {
                const svgElements = icon.shadowRoot.querySelectorAll("svg");
                if (svgElements.length > 1) {
                  svgElements[0].remove();
                }
              });
            });
          }
        }
      },
      async once(data) {
        if (getWithExpiry("companyIntro")) {
          Transition.pageOnce(data);

          // check lord icon
          const icons = data.next.container.querySelectorAll("lord-icon");

          if (icons) {
            icons.forEach((icon) => {
              icon.addEventListener("ready", () => {
                const svgElements = icon.shadowRoot.querySelectorAll("svg");
                if (svgElements.length > 1) {
                  svgElements[0].remove();
                }
              });
            });
          }
        } else {
          setWithExpiry("companyIntro", true, 1000 * 60 * 30);
          const done = this.async();
          Transition.companyEnter(data);
          await delay(3000);
          done();

          // check lord icon
          const icons = data.next.container.querySelectorAll("lord-icon");

          if (icons) {
            icons.forEach((icon) => {
              icon.addEventListener("ready", () => {
                const svgElements = icon.shadowRoot.querySelectorAll("svg");
                if (svgElements.length > 1) {
                  svgElements[0].remove();
                }
              });
            });
          }
        }
      },
      async leave(data) {
        const done = this.async();
        Transition.pageLeave(data);
        await delay(1000);
        done();
      },
    },

    {
      name: "default-transition",
      async leave(data) {
        const done = this.async();
        Transition.pageLeave(data);
        await delay(1000);

        done();
      },
      async enter(data) {
        Transition.pageEnter(data);

        // check lord icon
        const icons = data.next.container.querySelectorAll("lord-icon");
        if (icons) {
          icons.forEach((icon) => {
            icon.addEventListener("ready", () => {
              const svgElements = icon.shadowRoot.querySelectorAll("svg");
              if (svgElements.length > 1) {
                svgElements[0].remove();
              }
            });
          });
        }
        // end
      },
      async once(data) {
        Transition.pageOnce(data);
      },
    },
  ],
});
