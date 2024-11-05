// Global State =====================================
const MAIN_COLOR = "rgba(102, 54, 239)";
const TRANSPARENT_COLOR = "transparent";
let scrollContainer;

const globalState = {
  isDrawerOpen: false,
  isScrolling: false,
  isTransitioning: false,
  scrollbar: null,
};

async function initTransition() {
  const scrollbar = await getScrollbar();
  globalState.scrollbar = scrollbar;
  return globalState;
}

// Header ===============================================================

const headerElement = document.getElementById("site-menu");
let headerDOM = null;
if (headerElement) {
  headerDOM = {
    header: headerElement.querySelector("header"),
    drawer: headerElement.querySelector("aside"),
    hamburger: headerElement.querySelector("#hamburger"),
    drawerMenu: headerElement.querySelectorAll(".no-drawer__menu-div"),
    addrMenu: headerElement.querySelectorAll(".no-drawer__address__block"),
    projectBtn: headerElement.querySelector(".no-drawer__project-count"),
    gnb: [...headerElement.querySelectorAll(".no-gnb__menu")],
  };
}

const mobileMenu = gsap.utils.toArray(".no-drawer__menu-link");
mobileMenu.forEach((el) => {
  const { chars } = new SplitType(el);
  const newLine = document.createElement("div");
  newLine.innerHTML = el.innerHTML;
  el.append(newLine);
  newLine.className = "clone";
  const newChars = el.querySelectorAll(".clone .char");
  gsap.set(newChars, {
    y: "100%",
  });

  const tl = gsap.timeline({ paused: true });
  tl.to(chars, {
    y: "-100%",
    stagger: 0.015,
  }).to(
    newChars,
    {
      y: "0%",
      stagger: 0.015,
    },
    "<"
  );

  el.addEventListener("mouseenter", () => {
    tl.play();
  });
  el.addEventListener("mouseleave", () => {
    tl.reverse();
  });
});

const getHeaderTL = function () {
  if (!headerElement) {
    return;
  }

  /*
	const bookMark = headerDOM.header.querySelector('.award-mark');
	
	
	gsap.fromTo(bookMark,  {
      x: -1,
     rotate: '-5deg'
    }, {
      x: 1,
	  rotate: '5deg',
      repeat: -1,
      yoyo: true,
      ease: 'power3.inOut',
    });
	*/

  const headerTL = gsap
    .timeline({ paused: true })
    .set(headerDOM.drawer, {
      autoAlpha: 1,
    })
    .fromTo(
      headerDOM.drawer,
      {
        x: "100%",
        ease: "power4.in",
        duration: 0.2,
      },
      {
        x: "0%",
        ease: "power4.out",
        duration: 0.2,
      }
    )
    .from(
      headerDOM.drawerMenu,
      {
        y: "100%",
        stagger: {
          amount: 0.7,
        },
      },
      "+=0.1"
    )
    .from(
      headerDOM.addrMenu,
      {
        opacity: 0,
        x: "10%",
        duration: 1,
        stagger: {
          amount: 0.5,
        },
        ease: "power4.in",
      },
      "<-0.5"
    )
    .from(headerDOM.projectBtn, {
      opacity: 0,
      duration: 0.2,
      y: "100%",
      ease: "power4.inOut",
    });

  return headerTL;
};
const headerTL = getHeaderTL();

function checkIsHeaderDark() {
  if (!headerElement) {
    return;
  }
  const darkNames = ["service", "complete", "company2"];

  if (darkNames.includes(scrollContainer.dataset.barbaNamespace)) {
    headerDOM.header.classList.add("-dark");
  } else {
    headerDOM.header.classList.remove("-dark");
  }
}

async function openMobileMenu() {
  if (!headerElement) {
    return;
  }
  headerDOM.header.classList.add("-open");
  await headerTL.play();
  globalState.isDrawerOpen = true;
  return headerTL;
}

async function closeMobileMenu() {
  if (!headerElement) {
    return;
  }
  await headerTL.reverse();
  globalState.isDrawerOpen = false;
  headerDOM.header.classList.remove("-open");
  return headerTL;
}

async function toggleMobileMenu() {
  globalState.isDrawerOpen = !globalState.isDrawerOpen;

  if (globalState.isDrawerOpen) {
    return openMobileMenu();
  }

  return closeMobileMenu();
}
if (headerElement) {
  headerDOM.hamburger.addEventListener("click", toggleMobileMenu);
}

// Scrollbar ==========================================================
const goToTopButton = document.querySelector(".go-to-top button");
const goToTopText = goToTopButton.querySelector("span");
const goToTopArrow = goToTopButton.querySelector("i");

async function getScrollbar() {
  scrollContainer = document.getElementById("scroll-wrap");
  const scrollbar = Scrollbar.init(scrollContainer, {
    damping: 0.05,
    delegateTo: document,
    alwaysShowTracks: true,
  });

  ScrollTrigger.scrollerProxy(scrollContainer, {
    scrollTop(value) {
      if (arguments.length) {
        scrollbar.scrollTop = value;
      }
      return scrollbar.scrollTop;
    },
  });

  goToTopButton.addEventListener("click", () => {
    scrollbar.scrollTo(0, 0, 750);
  });

  const goTopTL = gsap.timeline({ paused: true });
  goTopTL
    .to(goToTopText, {
      y: "-100%",
      opacity: 0,
      duration: 0.25,
      ease: "power3.inOut",
    })
    .fromTo(
      goToTopArrow,
      {
        opacity: 0,
        y: "100%",
        duration: 0.25,
        ease: "power3.inOut",
      },
      {
        opacity: 1,
        y: "0",
        duration: 0.25,
        ease: "power3.inOut",
      },
      "<"
    )
    .to(goToTopArrow, {
      yoyo: true,
      repeat: -1,
      y: "-30%",
      ease: "none",
    });

  goToTopButton.addEventListener("mouseenter", () => {
    goTopTL.play();
  });
  goToTopButton.addEventListener("mouseleave", () => {
    goTopTL.reverse();
  });

  scrollbar.addListener((e) => {
    ScrollTrigger.update();
    globalState.offset = e.offset;

    let footerHeight = document.querySelector(".no-footer").offsetHeight * 2;

    // console.log(e.offset.y, e.limit.y - footerHeight);
    if (e.limit.y - footerHeight < e.offset.y) {
      goToTopButton.classList.add("-active");
    } else {
      goToTopButton.classList.remove("-active");
    }

    if (e.offset.y > 0) {
      globalState.isScrolling = true;
      if (headerElement) {
        headerDOM.header.classList.add("-scrolling");
      }
    } else {
      globalState.isScrolling = false;
      if (headerElement) {
        headerDOM.header.classList.remove("-scrolling");
      }
    }

    if (window.innerWidth > 768) {
      if (e.offset.y > 0) {
        gsap.to(goToTopButton, { scale: 1 });
      } else {
        gsap.to(goToTopButton, { scale: 0 });
      }
    } else {
      if (e.limit.y * 0.8 < e.offset.y) {
        gsap.to(goToTopButton, { scale: 1 });
      } else {
        gsap.to(goToTopButton, { scale: 0 });
      }
    }
  });
  ScrollTrigger.defaults({ scroller: scrollContainer });

  checkIsHeaderDark();
  showMarkers();
  return scrollbar;
}

function showMarkers() {
  if (document.querySelector(".gsap-marker-scroller-start")) {
    const markers = gsap.utils.toArray('[class *= "gsap-marker"]');
    bodyScrollBar.addListener(({ offset }) =>
      gsap.set(markers, { marginTop: -offset.y })
    );
  }
}

// Transition ======================================

const tranElement = document.querySelector(".transition");
const tranDOM = {
  screen: tranElement.querySelector(".transition__screen"),
  title: tranElement.querySelector(".transition__title"),
  background: tranElement.querySelector(".transition__background"),
  svg: tranElement.querySelector(".transition__background svg"),
  path: tranElement.querySelector(".transition__background path"),
  intro: tranElement.querySelector(".transition__intro"),
};

function calcWinDirection() {
  if (window.innerWidth > window.innerHeight) {
    console.log("resize");
    gsap.set(tranDOM.background, {
      width: "100vw",
      height: "auto",
    });
  } else {
    gsap.set(tranDOM.background, {
      width: "auto",
      height: "100vh",
    });
  }
}
window.addEventListener("resize", () => {
  calcWinDirection();
});
calcWinDirection();

const enterQ = 25;
const leaveQ = 75;

const d = [
  "M0,100 V100 Q50,100 100,100 V100 Q50,100 0,100 z",
  `M0,100, V50 Q50,${enterQ} 100,50 V100 Q50,100 0,100 z`,
  "M0,0 V0 Q50,0 100,0 V100 Q50,100 0,100 z",
  `M0,0 V0 Q50,0 100,0 V50 Q50,${leaveQ} 0,50 z`,
  "M0,0 V0 Q50,0 100,0 V0 Q50,0 0,0 z",
];

function getPathScene(i) {
  tranDOM.background.setAttribute("data-scene", i);
  const ease = i % 2 === 0 ? "power3.out" : "power3.in";
  return {
    attr: { d: d[i] },
    ease: ease,
  };
}

function resetTransitionPath() {
  gsap.set(tranDOM.path, getPathScene(0));
}

function inTransition() {
  document.documentElement.classList.add("is-transitioning");
}
function outTransition() {
  document.documentElement.classList.remove("is-transitioning");
  setTimeout(() => {
    gsap.set(".transition__background path", {
      fill: "#6635f0",
    });
  }, 2000);
}

function pageLeave(data) {
  inTransition();
  checkScrollIcon(data);
  gsap
    .timeline()
    .add(closeMobileMenu)
    .to(tranDOM.path, getPathScene(1))
    .to(tranDOM.path, getPathScene(2));
}

function pageEnter(data) {
  outTransition();

  const viewSection = document.querySelector(".no-view-section");

  if (viewSection) {
    const viewImages = viewSection.querySelectorAll("img");

    viewImages.forEach((img) => {
      if (img.width > 1200) {
        gsap.set(img, { width: "100%" });
      } else {
        gsap.set(img, { width: "auto" });
      }
    });
  }

  if (data && data.next && data.next.namespace === "home") {
    const videoEl = document.querySelector(".no-main-vis__player video");
    console.log(videoEl);
    videoEl.play();
  }

  let textElements = [...document.querySelectorAll("[data-text-effect]")];

  // text effect
  if (textElements.length > 0) {
    textElements = textElements.map((text) => {
      const { lines, chars, words } = new SplitType(text);
      gsap.set(lines, {
        overflow: "hidden",
      });
      gsap.set(chars, {
        y: "100%",
      });
      return { text, chars: chars, words: words };
    });
  }

  // timeline
  const tl = gsap
    .timeline()
    .to(tranDOM.path, getPathScene(3))
    .to(tranDOM.path, getPathScene(4))
    .call(() => {
      resetTransitionPath();
    });

  if (!textElements || textElements.length === 0) {
    return;
  }

  tl.eventCallback("onComplete", () => {
    if (textElements) {
      textElements.forEach((obj) => {
        gsap.to(obj.chars, {
          stagger: {
            amount: 0.5,
          },
          y: "0%",
          scrollTrigger: {
            trigger: obj.text,
          },
        });
      });

      const aboutCircle = document.querySelector(".no-comVis__title span");
      if (aboutCircle) {
        gsap.to(aboutCircle, {
          scale: 1,
          transformOrigin: "center center",
          scrollTrigger: {
            trigger: ".no-comVis",
          },
        });
      }
      checkScrollIcon(data);

      // rollback to contact page.
    }
  });

  return tl;
}

function checkScrollIcon(data) {
  if (
    data &&
    data.next &&
    data.next.namespace &&
    data.next.namespace === "home"
  ) {
    if (document.querySelector(".no-scroll-view")) {
      document.querySelector(".no-scroll-view").classList.remove("disabled");
    }
  } else {
    if (document.querySelector(".no-scroll-view")) {
      document.querySelector(".no-scroll-view").classList.add("disabled");
    }
  }
}

function pageOnce(data) {
  inTransition();

  gsap.set(tranDOM.screen, {
    backgroundColor: TRANSPARENT_COLOR,
  });
  pageEnter(data);
}

// �ㅻ뜑 泥섎━
// 1. �ㅻ뜑 -> �щ씪�ㅻ뒗嫄� + 臾쇨껐��
// 2. �꾨━濡쒕뜑
// 3. 臾쇨껐�ㅼ슫
// 4. �띿뒪�몄븷�덈찓�댁뀡

function introMain(data) {
  inTransition();
  gsap.set(tranDOM.intro, {
    pointerEvents: "all",
  });

  const svg = document.querySelector(".transition__intro");
  const path = gsap.utils.toArray(".transition__intro path");
  const tl = gsap.timeline();

  tl.to(svg, {
    opacity: 1,
  })
    .to(".transition__background path", {
      fill: "#000",
    })
    .from(path, {
      fill: "rgba(255,255,255, 0)",
      stagger: {
        each: 0.025,
        ease: "power3.inOut",
      },
      y: "120%",
    })
    .to(path, {
      delay: 0.5,
      fill: "rgba(255,255,255, 0)",
      stagger: {
        each: 0.025,
        ease: "power3.inOut",
      },
      y: "-150%",
    })
    .call(() => {
      gsap.set(tranDOM.screen, {
        backgroundColor: TRANSPARENT_COLOR,
      });
      gsap.set(tranDOM.intro, {
        pointerEvents: "none",
      });
      pageEnter(data);
    });

  // const repeatCount = 10;
  // const tl = gsap.timeline({ paused: true });

  // const introPath = gsap.utils.toArray('.transition__intro path');
  // const introSvg = document.querySelector('.transition__intro svg');

  // introPath.forEach((el, i, arr) => {
  //   const clonePath = el.cloneNode(true);
  //   clonePath.setAttribute('data-clone', '');
  //   el.insertAdjacentElement('afterend', clonePath);

  //   gsap.set(clonePath, {
  //     yPercent: i % 2 === 0 ? -145 : 145,
  //   });

  //   let tween = gsap.to([el, clonePath], {
  //     repeat: repeatCount,
  //     ease: 'none',
  //     yPercent: i % 2 === 0 ? '+=145' : '-=145',
  //   });
  //   tl.add(tween, 0);
  // });

  // gsap
  //   .timeline()
  //   .to(tranDOM.intro, {
  //     opacity: 1,
  //     duration: 2,
  //   })
  //   .to(tl, { progress: 1, duration: 4, ease: 'power4.inOut' }, '<')
  //   .to(introSvg, { scale: 1, duration: 4 }, '<')
  //   .to(introSvg, {
  //     backdropFilter: 'blur(4px)',
  //     opacity: 0,
  //   })
  // .call(() => {
  //   gsap.set(tranDOM.screen, {
  //     backgroundColor: TRANSPARENT_COLOR,
  //   });
  //   gsap.set(tranDOM.intro, {
  //     pointerEvents: 'none',
  //   });
  //   pageEnter(data);
  // });
}

function introCompany() {
  inTransition();
  gsap.set(tranDOM.path, getPathScene(2));

  const wrapper = document.querySelector(".no-about-intro");
  if (!wrapper) return;

  const lines = gsap.utils.toArray(".no-about-intro__lines > span");
  const circles = gsap.utils.toArray(".no-about-intro__circles > div");
  const texts = circles.map((el) => el.querySelector("span"));

  gsap.set(wrapper, { backgroundColor: MAIN_COLOR, pointerEvents: "all" });

  const tl = gsap.timeline();
  tl.to(wrapper, {
    backgroundColor: "rgba(0,0,0)",
    duration: 0.5,
  })
    .to(lines, {
      "--line-width": "25%",
      delay: 0.15,
      stagger: {
        each: 0.15,
        from: "edge",
      },
    })
    .to(
      lines,
      {
        "--line-width": "10%",
      },
      "-=0.25"
    );

  circles.forEach((el, i) => {
    const { chars } = new SplitType(texts[i]);
    tl.to(el, {
      scale: 1,
      duration: 0.45,
      ease: "power3.inOut",
    }).from(
      chars,
      {
        yPercent: 125,
        rotate: 10,
        stagger: {
          amount: 0.45,
        },
        ease: "back.out(1.7)",
      },
      "-=0.25"
    );
  });

  tl.call(() => {
    gsap.set(wrapper, {
      pointerEvents: "none",
      backgroundColor: TRANSPARENT_COLOR,
    });
    gsap.set(tranDOM.screen, {
      backgroundColor: TRANSPARENT_COLOR,
    });
    gsap.set(lines, {
      "--line-width": "0%",
    });
    gsap.set(circles, {
      scale: 0,
    });
    pageEnter();
  });
}

function companyEnter() {
  inTransition();
  introCompany();
  // const tl = gsap.timeline();
  // tl.to(tranDOM.path, getPathScene(1))
  //   .to(tranDOM.path, getPathScene(2))
  //   .call(() => {
  //     introCompany();
  //   });
}

export default {
  initTransition,
  pageLeave,
  pageEnter,
  pageOnce,
  introMain,
  introCompany,
  companyEnter,
};
