// 스플리팅 호출
$(document).ready(function () {
  window.addEventListener("resize", () => {
    ScrollTrigger.refresh();
  });

  gsap.registerPlugin(ScrollTrigger);

  loadingHide();
  headerScrollActive();
  scroller();
  gnbScrollAnimation();
  visualMotionOn();
  visualAnimation();
  aboutAnimation();
  projectIntroAnimation();
  projectAnimation();
  typedAnimation();

  ScrollTrigger.refresh();
  ScrollTrigger.config({
    ignoreMobileResize: true,
  });

  mobileGnbOpen();
});

function scroller() {
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

  document.querySelectorAll(".gnb a").forEach((link) => {
    link.addEventListener("click", (event) => {
      event.preventDefault(); // 기본 링크 이동 방지

      const targetId = link.getAttribute("href"); // 링크의 href 속성에서 타겟 섹션 ID 가져오기
      const targetSection = document.querySelector(targetId); // 해당 섹션 요소 선택

      if (targetSection) {
        gsap.to(bodyScrollBar, {
          duration: 1, // 스크롤 이동 시간 (1초)
          scrollTo: targetSection.offsetTop, // 이동할 대상 섹션
          ease: "power2.out", // 부드러운 애니메이션을 위한 easing 적용
        });
      }
    });
  });

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
      $(".header").addClass("scroll");
    } else {
      $(".header").removeClass("scroll");
    }

    let winH = $(window).height() / 3;
    const proejctIntroSecTop = $(".project_intro_sec").offset().top;
    if (nowScrollTop + winH >= proejctIntroSecTop) {
      $(".project_intro_sec").addClass("move");
    } else {
      $(".project_intro_sec").removeClass("move");
    }
  });
}

function loadingHide() {
  setTimeout(function () {
    $("#loading").addClass("hide");
  }, 1000);
}
function headerScrollActive() {}

function mobileGnbOpen() {
  $(".menu_open").on("click", function () {
    $(".gnb").toggleClass("on");
    $(this).toggleClass("on");
    $("body").toggleClass("on");
  });
}
function typedAnimation() {
  let typetext = new Typed(".typed", {
    strings: [
      "amazing",
      "awesome",
      "different",
      "special",
      "fabulous",
      "stunning",
      "brilliant",
      "fantastic",
      "impressive",
      "incredible",
    ],
    typeSpeed: 50,
    backSpeed: 50,
    loop: true,
  });
}
function visualMotionOn() {
  setTimeout(() => {
    $(".visual_sec ").addClass("motion");
  }, 1000);
}
function gnbScrollAnimation() {}
function visualAnimation() {
  const section = document.querySelector(".visual_sec");
  const wrap = document.querySelector(".wrap");
  const header = document.querySelector(".header");
  const DOM = {
    video: section.querySelector("video"),
    dim: section.querySelector(".dim"),
  };
  //visualVideo;
  gsap
    .timeline({
      scrollTrigger: {
        trigger: section, //트리거 대상
        start: "bottom 20%", //트리거 대상의 0%와 브라우저의 80%가 만날때 애니메이션이 시작됨.
        end: "bottom top",
        scrub: 2, //gsap scrollTrigger 의 이벤트는 스크롤이 사용될 때만 재생되도록 만들어주는 속성
        duration: 2,
        onEnter: function () {
          $(".header").addClass("white");
        },
        onLeaveBack: function () {
          $(".header").removeClass("white");
        },
      },
    })
    .to(".scroll", { opacity: "0", ease: "none" }, 0)
    .fromTo(
      section,
      { "clip-path": "inset(0% 0% 0% 0% round 0%)" },
      { "clip-path": "inset(60% 60% 60% 60% round 30%)" },
      0
    )
    // .to(
    //   header,
    //   {
    //     opacity: 1,
    //     backgroundColor: "#fff",
    //     borderBottom: "1px solid #eee",
    //     color: "#111",
    //     duration: 0.1,
    //   },
    //   0
    // )
    .fromTo(
      wrap,
      { backgroundColor: "#080808" },
      { backgroundColor: "#fff", duration: 0.1 },
      0
    );
}

function aboutAnimation() {
  // 3D MOTION - DIAMOND
  const diamond3d_canvas = document.getElementById("diamond");
  const diamond3d_context = diamond3d_canvas.getContext("2d");
  diamond3d_canvas.width = 1000;
  diamond3d_canvas.height = 1000;
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

  const section = document.querySelector(".about_sec");
  const DOM = {
    fixTxt: section.querySelector(".fix_txt"),
    box1: section.querySelectorAll(".about_box1 .wave_txt_box"),
    txt1: section.querySelectorAll(".about_box1 .wave_txt_box span"),
    box2: section.querySelectorAll(".about_box2 .wave_txt_box"),
    txt2: section.querySelectorAll(".about_box2 .wave_txt_box span"),
    diamond: section.querySelector(".diamond_wrap"),
    skills: section.querySelectorAll(".skill_logos li"),
  };

  // const yPercent_vh = (coef) => window.innerHeight * (coef / 100);

  gsap
    .timeline({
      scrollTrigger: {
        scrub: 3,
        trigger: section,
        start: "top 30%",
        ease: "power4.in",
      },
    })
    .to(DOM.diamond, {
      transformOrigin: "50% 50%",
      keyframes: {
        "0%": { scale: 2, opacity: 0 },
        "30%": { scale: 1, opacity: 1 },
        "50%": { x: 0, y: 0 },
        "70%": { y: 0, x: "40%" },
      },
      duration: 1,
    })
    .to(
      DOM.fixTxt,
      {
        x: "-300%",
        duration: 3,
      },
      "<"
    )
    .to(DOM.fixTxt, { opacity: 0.3 }, 0.4);

  let aboutSecTl = gsap.timeline({
    scrollTrigger: {
      scrub: 3,
      trigger: section,
      pin: true,
      pinSpacing: true,
      start: "top top",
      ease: "power4.out",
      end: "+=250%",
      onUpdate: function () {
        const progress = aboutSecTl.progress(); // 0 ~ 1
        diamond3d_clubbys.frame = Math.floor(
          progress * (diamond3d_frameCount * 2)
        ); // 0 ~ 178

        // 프레임을 0 ~ 89 사이로 유지
        diamond3d_clubbys.frame =
          diamond3d_clubbys.frame % diamond3d_frameCount;

        diamond3d_render(); // 렌더링 호출
      },
    },
  });

  aboutSecTl
    .to(diamond3d_clubbys, {
      frame: diamond3d_frameCount - 1,
      snap: "frame",
      paused: false,
      ease: "power2.out",
      // duration: 5,
      // onUpdate: diamond3d_render,
    })

    .to(diamond3d_clubbys, { opacity: 0, duration: 0.5 }, "-=0.5")
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
        delay: 0.5,
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
      DOM.skills,
      {
        opacity: 0,
        transform: "translate3d(0, -90px, 0) skewY(-10deg)",
        transformOrigin: "top left",
      },
      {
        opacity: 1,
        transform: "translate3d(0, 0, 0) skewY(0deg)",
        transformOrigin: "top left",
        duration: 2,
        stagger: {
          each: 0.5,
        },
      }
    );
}

function projectIntroAnimation() {
  const section = document.querySelector(".project_intro_sec");
  const listSection = document.querySelector(".project_list_sec");
  const wrap = document.querySelector(".wrap");
  const header = document.querySelector(".header");
  // project bg text color

  gsap
    .timeline({
      scrollTrigger: {
        trigger: section,
        scrub: 1,
        ease: "none",
        duration: 1,
        start: "top 60%",
        end: "top 40%",
        onEnter: function () {
          $(".header").removeClass("white");
        },
        onLeaveBack: function () {
          $(".header").addClass("white");
        },
      },
    })
    .to(wrap, { backgroundColor: "#111" })
    .to(section, { color: "#fff" }, "<")
    .to(listSection, { color: "#fff" }, "<");
  // .to(
  //   header,
  //   {
  //     opacity: 1,
  //     backgroundColor: "transparent",
  //     borderBottom: "1px solid #fff2",
  //     color: "#fff",
  //     duration: 0.5,
  //   },
  //   0
  // );
}
function projectAnimation() {
  // project item
  const projectItems = gsap.utils.toArray(".project_list .project_item");
  projectItems.forEach((item, index) => {
    const img = item.querySelector(".img_box img");

    // 이미지 로드 이벤트 리스너 추가
    img.addEventListener("load", () => {
      // 이미지가 로드되면 ScrollTrigger를 새로고침하여 정확한 위치를 계산
      ScrollTrigger.refresh();
    });

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
          duration: 0.5,
        },
        0
      )
      .to(
        img,
        {
          scale: 0.95,
          duration: 0.5,
          scrub: 1,
          ease: "power2.out",
        },
        0
      );
  });
}
