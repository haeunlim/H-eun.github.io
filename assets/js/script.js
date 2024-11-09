$(document).ready(function () {
  // 스플리팅 호출

  const audio = $("audio").get(0);
  audio.pause();
  audio.volume = 0.2;

  document.querySelector("#viewport").addEventListener("mouseover", () => {
    if ($("body").hasClass("music_off")) {
      audio.pause();
    } else {
      audio.play();
    }
  });

  $(".music_control").on("click", function () {
    if ($("body").hasClass("music_off")) {
      $("body").removeClass("music_off");
      $("audio").get(0).play();
    } else {
      $("body").addClass("music_off");
      $("audio").get(0).pause();
    }
  });
  // splitting
  Splitting();
  // gsap
  gsap.registerPlugin(ScrollTrigger);
  // scoller
  const scroller = document.querySelector(".scroller");

  let bodyScrollBar = Scrollbar.init(scroller, {
    damping: 0.1,
    mobile: {
      speed: 2,
    },
  });
  bodyScrollBar.setPosition(0, 0);
  bodyScrollBar.track.xAxis.element.remove();
  ScrollTrigger.scrollerProxy(scroller, {
    scrollTop(value) {
      if (arguments.length) {
        bodyScrollBar.scrollTop = value;
      }
      return bodyScrollBar.scrollTop;
    },
    getBoundingClientRect() {
      return {
        top: 0,
        left: 0,
        width: window.innerWidth,
        height: window.innerHeight,
      };
    },
    // 스크롤바의 위치를 업데이트할 수 있도록 설정
    fixedMarkers: true,
  });
  bodyScrollBar.addListener(ScrollTrigger.update);
  ScrollTrigger.defaults({ scroller: scroller });

  // gnb click event
  document.querySelectorAll(".gnb a").forEach((link) => {
    link.addEventListener("click", (event) => {
      event.preventDefault();

      const targetId = link.getAttribute("href"); // 링크의 href 속성에서 타겟 섹션 ID 가져오기
      const targetSection = document.querySelector(targetId); // 해당 섹션 요소 선택
      if (window.innerWidth < 769) {
        $("body").removeClass("gnbOpen");
      }
      if (targetSection) {
        gsap.to(bodyScrollBar, {
          duration: 1,
          scrollTo: targetSection.offsetTop,
          ease: "power2.out",
        });
      }
    });
  });

  document
    .querySelector(".scroll_move_btn a")
    .addEventListener("click", (event) => {
      event.preventDefault();
      gsap.to(bodyScrollBar, {
        duration: 1,
        scrollTo: 0,
        ease: "power2.out",
      });
    });
  // header active
  let prevScrollTop = 0;
  bodyScrollBar.addListener(() => {
    let nowScrollTop = bodyScrollBar.scrollTop;

    if (nowScrollTop > prevScrollTop) {
      $(".header").addClass("active");
    } else {
      $(".header").removeClass("active");
    }
    prevScrollTop = nowScrollTop;

    if (nowScrollTop > 0) {
      $("body").addClass("scroll");
    } else {
      $("body").removeClass("scroll");
    }
  });

  $(".menu_open").on("click", function () {
    if ($("body").hasClass("gnbOpen")) {
      $("body").removeClass("gnbOpen");
    } else {
      $("body").addClass("gnbOpen");
    }
  });

  let allImages = $("img");
  let totalImages = allImages.length;
  let loadedImages = 0;
  let isTimeoutReached = false;
  // 5초 타임아웃 설정
  let loadTimeout = setTimeout(function () {
    isTimeoutReached = true;
    console.log("Timeout reached. Forcing gsap.refresh()");

    loadingComplete();
  }, 5000); // 타임아웃 시간(밀리초)

  allImages.each(function (index) {
    let $img = $(this);
    let imgSrc = $img.attr("src");

    // 로드 이벤트
    $img
      .on("load", function () {
        loadedImages++;
        console.log(`Image loaded: ${imgSrc} (${loadedImages}/${totalImages})`);

        if (loadedImages === totalImages && !isTimeoutReached) {
          clearTimeout(loadTimeout);
          console.log("All images loaded. Running gsap.refresh()");
          loadingComplete();
        }
      })
      .on("error", function () {
        loadedImages++;
        console.warn(
          `Error loading image: ${imgSrc} (${loadedImages}/${totalImages})`
        );

        if (loadedImages === totalImages && !isTimeoutReached) {
          clearTimeout(loadTimeout);
          console.log("All images loaded or failed. Running gsap.refresh()");
          loadingComplete();
        }
      });

    // 캐시된 이미지도 로드 완료 이벤트 발생시키기 위한 트릭
    if ($img[0].complete) {
      $img.trigger("load");
    }
  });

  ScrollTrigger.config({
    ignoreMobileResize: true,
  });

  // together tyed
  let typetext = new Typed(".typed", {
    strings: [
      "mood maker",
      " troubles hooter",
      "bug hunter",
      "human vitamin ",
      " friendly neighbor",
    ],
    typeSpeed: 50,
    backSpeed: 50,
    loop: true,
  });

  //for ios vh
  let vh = window.innerHeight * 0.01;
  document.documentElement.style.setProperty("--vh", `${vh}px`);

  $(".main_tit").addClass("active");
  if ($(".main_tit").hasClass("active")) {
    setTimeout(function () {
      $(".loading .bg").animate({ width: "100%" }, 3000, function () {});
    }, 2000);
  }

  const viewport = document.querySelector(".viewport");
  // visual animation
  const visualSection = document.querySelector(".visual_sec");
  //visualVideo;
  gsap
    .timeline({
      scrollTrigger: {
        trigger: visualSection, //트리거 대상
        start: "bottom 20%", //트리거 대상의 0%와 브라우저의 80%가 만날때 애니메이션이 시작됨.
        end: "bottom top",
        scrub: 2, //gsap scrollTrigger 의 이벤트는 스크롤이 사용될 때만 재생되도록 만들어주는 속성
        duration: 2,
        onEnter: function () {
          $("body").addClass("white");
        },
        onLeaveBack: function () {
          $("body").removeClass("white");
        },
      },
    })
    .to(".scroll", { opacity: "0", ease: "none" }, 0)
    .fromTo(
      visualSection,
      { "clip-path": "inset(0% 0% 0% 0% round 0%)" },
      { "clip-path": "inset(60% 60% 60% 60% round 30%)" },
      0
    )
    .fromTo(
      viewport,
      { backgroundColor: "#080808" },
      { backgroundColor: "#fff", duration: 0.1 },
      0
    );
  // about Animation
  // 3D MOTION - DIAMOND
  const diamond3d_canvas = document.getElementById("diamond");
  const diamond3d_context = diamond3d_canvas.getContext("2d");
  diamond3d_canvas.width = 500;
  diamond3d_canvas.height = 333;
  const diamond3d_frameCount = 90;

  const diamond3d_currentFrame = (index) =>
    `https://haeunlim.github.io/portfolio/assets/img/f0${index
      .toString()
      .padStart(3, "0")}.png`;
  const diamond3d_images = [];
  const diamond3d_clubbys = {
    frame: 0,
  };

  for (let i = 0; i < diamond3d_frameCount; i++) {
    const diamond3d_img = new Image();
    diamond3d_img.src = diamond3d_currentFrame(i);
    diamond3d_images.push(diamond3d_img);
  }

  function diamond3d_render() {
    diamond3d_context.clearRect(
      0,
      0,
      diamond3d_canvas.width,
      diamond3d_canvas.height
    );
    diamond3d_context.drawImage(
      diamond3d_images[diamond3d_clubbys.frame],
      0,
      0
    );
  }

  const aboutSection = document.querySelector(".about_sec");
  const DOM = {
    fixTxt: aboutSection.querySelector(".fix_txt"),
    about2Fix1: aboutSection.querySelectorAll(".about2_fix_txt.fix1"),
    about2Fix2: aboutSection.querySelectorAll(".about2_fix_txt.fix2"),
    box1: aboutSection.querySelectorAll(".about_box1 .wave_txt_box"),
    txt1: aboutSection.querySelectorAll(".about_box1 .wave_txt_box span"),
    box2: aboutSection.querySelectorAll(".about_box2 .wave_txt_box"),
    txt2: aboutSection.querySelectorAll(".about_box2 .wave_txt_box span"),
    diamond: aboutSection.querySelector(".diamond_wrap"),
    skills: aboutSection.querySelectorAll(".skill_logos li"),
  };

  // const yPercent_vh = (coef) => window.innerHeight * (coef / 100);
  const fixTxtWidth = DOM.fixTxt.clientWidth + window.innerWidth;

  ScrollTrigger.matchMedia({
    "(min-width: 769px)": function () {
      let aboutTl1 = gsap
        .timeline({
          scrollTrigger: {
            scrub: 3,
            trigger: aboutSection,
            start: "top 30%",
            ease: "power4.in",
            onUpdate: function () {
              const progress = aboutTl1.progress(); // 0 ~ 1
              diamond3d_clubbys.frame = Math.floor(
                progress * diamond3d_frameCount
              );

              // 프레임을 0 ~ 89 사이로 유지하여 반복
              diamond3d_clubbys.frame =
                diamond3d_clubbys.frame % diamond3d_frameCount;
              diamond3d_render();
            },
          },
        })
        .set(DOM.diamond, { autoAlpha: 1 })
        .to(DOM.diamond, {
          transformOrigin: "50% 50%",
          keyframes: {
            "0%": { scale: 2, opacity: 0, ease: "power2.out" },
            "30%": { scale: 1, opacity: 1, ease: "power2.out" },
            "50%": { x: 0, y: 0, ease: "power2.inOut" }, // 부드러운 이징
            "70%": { y: 0, x: "60%", ease: "power2.inOut" },
          },
          duration: 5,
        })
        .to(
          DOM.fixTxt,
          {
            x: -fixTxtWidth,
            duration: 3,
          },
          "<"
        )
        .to(DOM.fixTxt, { opacity: 1 }, 0.4);
    },

    "(max-width: 768px)": function () {
      let aboutTlMo1 = gsap
        .timeline({
          scrollTrigger: {
            scrub: 2,
            trigger: aboutSection,
            start: "top 30%",
            ease: "power4.in",
            onUpdate: function () {
              const progress = aboutTlMo1.progress(); // 0 ~ 1
              diamond3d_clubbys.frame = Math.floor(
                progress * diamond3d_frameCount
              );

              // 프레임을 0 ~ 89 사이로 유지하여 반복
              diamond3d_clubbys.frame =
                diamond3d_clubbys.frame % diamond3d_frameCount;
              diamond3d_render();
            },
          },
        })
        .set(DOM.diamond, { autoAlpha: 1 })
        .to(DOM.diamond, {
          transformOrigin: "50% 50%",
          keyframes: {
            "0%": { scale: 2, y: "-50%", opacity: 0, ease: "power2.out" },
            "30%": { scale: 1, opacity: 1, ease: "power2.out" },
            "50%": { y: 0, ease: "power2.inOut" },
            "70%": { ease: "power2.inOut" },
          },
          duration: 3,
        })
        .to(
          DOM.fixTxt,
          {
            x: -fixTxtWidth,
            duration: 2,
          },
          "<"
        )
        .to(DOM.fixTxt, { opacity: 0.3 }, 0.4);
    },
  });

  let aboutTl2 = gsap.timeline({
    scrollTrigger: {
      scrub: 3,
      trigger: aboutSection,
      pin: true,
      pinSpacing: true,
      start: "top top",
      ease: "power4.out",
      end: "+=250%",
      onUpdate: function () {
        const progress = aboutTl2.progress(); // 0 ~ 1
        diamond3d_clubbys.frame = Math.floor(progress * diamond3d_frameCount);

        // 프레임을 0 ~ 89 사이로 유지하여 반복
        diamond3d_clubbys.frame =
          diamond3d_clubbys.frame % diamond3d_frameCount;
        diamond3d_render();
      },
    },
  });

  aboutTl2
    .fromTo(
      DOM.txt1,
      {
        opacity: 0,
        transform: "translate3d(0, -90px, 0) skewY(-10deg)",
        transformOrigin: "top left",
      },
      {
        opacity: 1,
        transform: "translate3d(0, 0, 0) skewY(0deg)",
        transformOrigin: "top left",
        duration: 5,
        delay: 0.5,
        stagger: {
          each: 1,
        },
      },
      1
    )
    .to(diamond3d_clubbys, { opacity: 0, duration: 0.5 }, "-=0.5")
    .to(DOM.box1, {
      opacity: 0,
      delay: 3,
      duration: 3,
    })

    .fromTo(
      DOM.txt2,
      {
        opacity: 0,
        transform: "translate3d(0, -90px, 0) skewY(-10deg)",
      },
      {
        opacity: 1,
        transform: "translate3d(0, 0, 0) skewY(0deg)",
        transformOrigin: "top left",
        duration: 5,
        delay: 1,
        stagger: {
          each: 1,
        },
      },
      "-=0.5"
    )

    .fromTo(
      DOM.diamond,
      {
        opacity: 1,
      },
      {
        opacity: 0,
        duration: 3,
      },
      "<"
    )
    .fromTo(
      DOM.about2Fix1,
      { x: "-100%", opacity: 0 },
      { x: "0%", opacity: 1, ease: "none", duration: 5 },
      "<"
    )
    .fromTo(
      DOM.about2Fix2,
      { x: "100%", opacity: 0 },
      { x: "0%", opacity: 1, ease: "none", duration: 5 },
      "<"
    )
    .fromTo(
      DOM.skills,
      {
        opacity: 0,
        scale: 0.8,
      },
      {
        opacity: 1,
        scale: 1,
        duration: 1,
        stagger: {
          each: 0.5,
        },
      }
    );

  // project Intro Animation
  const ProjectIntroSection = document.querySelector(".project_intro_sec");

  gsap
    .timeline({
      scrollTrigger: {
        trigger: ProjectIntroSection,
        scrub: 1,
        ease: "none",
        duration: 1,
        start: "top 60%",
        end: "top 40%",
        onEnter: function () {
          $("body").removeClass("white");
          $(".project_intro_sec").addClass("move");
        },
        onLeaveBack: function () {
          $("body").addClass("white");
          $(".project_intro_sec").removeClass("move");
        },
      },
    })
    .to(viewport, { backgroundColor: "#080808", color: "#fff" });
  // project item Animation
  const projectItems = gsap.utils.toArray(".project_list .project_item");
  projectItems.forEach((item, index) => {
    const img = item.querySelector(".img_box a> img");
    img.addEventListener("load", function () {
      ScrollTrigger.refresh();
    });
    ScrollTrigger.matchMedia({
      "(min-width: 769px)": function () {
        gsap.set(item, {
          yPercent: 10,
        });
        gsap.set(img, {
          scale: 1,
        });
        let projectItemTl = gsap.timeline({
          scrollTrigger: {
            trigger: item,
            scrub: 2,
            start: "top 80%",
            end: "bottom bottom",
            ease: "power2.out",
            invalidateOnRefresh: true,
          },
        });
        projectItemTl
          .to(
            item,
            {
              yPercent: 0,
              duration: 2,
            },
            0
          )
          .to(
            img,
            {
              scale: 0.95,
              duration: 2,
            },
            0
          );
      },
      "(max-width: 950px)": function () {
        gsap.set(item, {
          yPercent: 3,
        });
        gsap.set(img, {
          scale: 1,
        });
        let projectItemTl = gsap.timeline({
          scrollTrigger: {
            trigger: item,
            scrub: 2,
            start: "top 80%",
            end: "bottom bottom",
            ease: "power2.out",
            invalidateOnRefresh: true,
          },
        });
        projectItemTl
          .to(
            item,
            {
              yPercent: 0,
              duration: 2,
            },
            0
          )
          .to(
            img,
            {
              scale: 0.95,
              duration: 2,
            },
            0
          );
      },
      "(max-width: 768px)": function () {
        gsap.set(item, {
          yPercent: 0,
        });
        gsap.set(img, {
          scale: 1,
        });
        let projectItemMoTl = gsap.timeline({
          scrollTrigger: {
            trigger: item,
            scrub: 2,
            start: "top 50%",
            end: "center 50%",
            ease: "power2.out",
            invalidateOnRefresh: true,
          },
        });
        projectItemMoTl.to(
          img,
          {
            scale: 0.95,
            duration: 0.5,
            scrub: 1,
            ease: "power2.out",
          },
          0
        );
      },
    });
  });

  // other section Animatnion
  const otherSection = document.querySelector(".other_project");
  const otherItem = gsap.utils.toArray(".other_pj_item a");

  gsap
    .timeline({
      scrollTrigger: {
        trigger: otherSection,
        scrub: 1,
        start: "top 80%",
        end: "top 60%",
        ease: "power2.out",
        invalidateOnRefresh: true,
      },
    })
    .to(viewport, { duration: 0.2, backgroundColor: "#000e35" });

  otherItem.forEach((item, index) => {
    ScrollTrigger.matchMedia({
      "(min-width: 769px)": function () {
        let otherTl = gsap.timeline({
          scrollTrigger: {
            trigger: item,
            scrub: 2,
            start: "top 80%",
            end: "bottom bottom",
            ease: "power2.out",
            invalidateOnRefresh: true,
          },
        });
        otherTl.to(item, {
          paddingTop: "3rem",
          paddingBottom: "3rem",
        });
      },
      "(max-width: 768px)": function () {
        let otherTlMo = gsap.timeline({
          scrollTrigger: {
            trigger: item,
            scrub: 2,
            start: "top 80%",
            end: "bottom bottom",
            ease: "power2.out",
            invalidateOnRefresh: true,
          },
        });
        otherTlMo.to(item, {
          paddingTop: "2rem",
          paddingBottom: "2rem",
        });
      },
    });
  });

  // together Animation
  const togetherSection = document.querySelector(".together_sec");

  gsap
    .timeline({
      scrollTrigger: {
        trigger: togetherSection,
        scrub: 1,
        start: "top 80%",
        end: "top 60%",
        ease: "power2.out",
        invalidateOnRefresh: true,
        onEnter: function () {
          $("body").addClass("white");
        },
        onLeaveBack: function () {
          $("body").removeClass("white");
        },
      },
    })
    .to(viewport, {
      duration: 0.2,
      backgroundColor: "#dbefff",
      color: "#111",
    });

  const contactSec = document.querySelector(".contact_sec");
  gsap.timeline({
    scrollTrigger: {
      trigger: contactSec,
      scrub: 1,
      start: "top 90%",
      ease: "power2.out",
      invalidateOnRefresh: true,
      onEnter: function () {
        $(".scroll_move_btn").addClass("chg");
      },
      onLeaveBack: function () {
        $(".scroll_move_btn").removeClass("chg");
      },
    },
  });
});

window.addEventListener("resize", () => {
  ScrollTrigger.refresh();
});
function loadingComplete() {
  $(".loading").hide();
  $(".visual_sec").addClass("motion");
  ScrollTrigger.refresh();
}
