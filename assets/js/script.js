// 스플리팅 호출
$(document).ready(function () {
  setTimeout(function () {
    $("#loading").addClass("hide");
  }, 3000);

  $(document).on("click", 'a[href="#"]', function (e) {
    e.preventDefault();
  });

  // header scroll
  let prevScrollTop = 0;
  document.addEventListener("scroll", function () {
    let nowScrollTop = $(window).scrollTop();

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

  //mobile menu open
  $(".menu_open").on("click", function () {
    $(".gnb").toggleClass("on");
    $(this).toggleClass("on");
    $("body").toggleClass("on");
  });
  //together sec
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
  //about sec diamond
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

  gsap.registerPlugin(ScrollTrigger);

  setTimeout(function () {
    $(".visual_sec ").addClass("motion");

    // const scroller = document.querySelector(".scroller");
    // let bodyScrollBar = Scrollbar.init(scroller, {
    //   damping: 0.1,
    //   mobile: {
    //     speed: 2,
    //   },
    // });
    // bodyScrollBar.setPosition(0, 0);
    // bodyScrollBar.track.xAxis.element.remove();
    // ScrollTrigger.scrollerProxy(scroller, {
    //   scrollTop(value) {
    //     if (arguments.length) {
    //       bodyScrollBar.scrollTop = value;
    //     }
    //     return bodyScrollBar.scrollTop;
    //   },
    // });
    // bodyScrollBar.addListener(ScrollTrigger.update);
    // ScrollTrigger.defaults({ scroller: scroller });

    //visualVideo;
    gsap
      .timeline({
        scrollTrigger: {
          trigger: ".about_sec", //트리거 대상
          start: "top 20%", //트리거 대상의 0%와 브라우저의 80%가 만날때 애니메이션이 시작됨.
          end: "bottom top",
          scrub: 1, //gsap scrollTrigger 의 이벤트는 스크롤이 사용될 때만 재생되도록 만들어주는 속성
        },
      })
      .to(".scroll", { opacity: "0", ease: "none", duration: 5 }, 0)
      .fromTo(
        ".visual_sec video, .visual_sec .dim",
        { "clip-path": "inset(0% 0% 0% 0% round 0%)" },
        { "clip-path": "inset(60% 60% 60% 60% round 30%)" },
        0
      )
      .to(
        ".header",
        {
          backgroundColor: "#fff",
          borderBottom: "1px solid #eee",
          color: "#111",
        },
        0
      );

    // 3D MOTION - DIAMOND
    gsap
      .timeline({
        scrollTrigger: {
          scrub: 1,
          trigger: ".about_sec",
          start: "top 60%",
        },
      })
      .to(".about_sec .fix_txt", {
        x: "-200%",
        duration: 4,
      });

    const yPercent_vh = (coef) => window.innerHeight * (coef / 100);
    console.log(yPercent_vh);

    let aboutSecTl = gsap.timeline({
      scrollTrigger: {
        scrub: 1,
        trigger: ".about_sec",
        pin: true,
        pinSpacing: true,
        start: "top 0%",
        end: "+=250%",
      },
    });

    aboutSecTl

      .fromTo(
        ".about_sec .about_box1 .wave_txt_box span",
        {
          opacity: 0,
          transform: "translate3d(0, -90px, 0) skewY(-10deg)",
          transformOrigin: "top left",
          duration: 1.5,
        },
        {
          opacity: 1,
          transform: "translate3d(0, 0, 0) skewY(0deg)",
          transformOrigin: "top left",
          duration: 1.5,
          stagger: {
            each: 0.2,
          },
        },
        1
      )
      .to(".about_sec .about_box1 .wave_txt_box", {
        opacity: 0,
      })
      .fromTo(
        ".about_sec .about_box2 .wave_txt_box span",
        {
          opacity: 0,
          transform: "translate3d(0, -90px, 0) skewY(-10deg)",
          transformOrigin: "top left",
          duration: 1.5,
        },
        {
          opacity: 1,
          transform: "translate3d(0, 0, 0) skewY(0deg)",
          transformOrigin: "top left",
          duration: 1.5,
          stagger: {
            each: 0.2,
          },
        },
        "-=0.5"
      )
      .fromTo(
        diamond3d_canvas,
        {
          opacity: 0,
          yPercent: yPercent_vh(10),
        },
        {
          opacity: 1,
          yPercent: yPercent_vh(0),
          duration: 1.5,
        },
        0
      )
      .to(
        diamond3d_clubbys,
        {
          frame: diamond3d_frameCount - 1,
          snap: "frame",
          paused: false,

          ease: "power2.out",
          duration: 5,
          onUpdate: diamond3d_render,
        },
        "<"
      )
      .to(
        ".about_sec #diamond",
        {
          opacity: 0,
          duration: 1,
        },
        "-=2"
      )
      .fromTo(
        ".skill_logos li",
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
            each: 0.2,
          },
        },
        "<"
      );

    // project bg text color
    gsap
      .timeline({
        scrollTrigger: {
          trigger: ".project_intro_sec",
          scrub: 1,
          ease: "none",
          duration: 1,
          start: "top 60%",
          end: "top 40%",
        },
      })
      .to(".wrap", { backgroundColor: "#111" })
      .to(".project_intro_sec, .project_list_sec", { color: "#fff" }, "<")
      .to(
        ".header",

        {
          backgroundColor: "transparent",
          borderBottom: "1px solid #fff2",
          color: "#fff",
        },

        0
      );
    // gsap
    //   .timeline({
    //     scrollTrigger: {
    //       trigger: ".change_ani_box",
    //       scrub: 1,
    //       ease: "none",
    //       duration: 2,
    //       start: "top 60%",
    //       end: "bottom 30%",
    //     },
    //   })
    //   .to(".change_ani_box", {
    //     keyframes: {
    //       "0%": { y: 0 },
    //       "33.333%": { y: "-33.333%" },
    //       "66.666%": { y: "-66.6666%" },
    //       "80%": { y: "0%" },
    //       "100%": { y: "0" },
    //     },
    //   });
    // project item
    const projectItems = gsap.utils.toArray(".project_list .project_item");
    projectItems.forEach((item, index) => {
      const img = item.querySelector(".img_box img");
      gsap.set(item, {
        yPercent: 20,
      });
      gsap.set(img, {
        scale: 1,
      });
      let projectItemTl = gsap.timeline({
        scrollTrigger: {
          trigger: item,
          scrub: 3,
          start: "top 80%",
          end: "top 50%",
          ease: "power2.out",
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
      // setTimeout(() => {
      //   projectItemTl.scrollTrigger.refresh();
      //   console.log("object");
      // }, 500);
    });

    setTimeout(() => {
      ScrollTrigger.refresh();
    }, 100);
  }, 3000);
  // setTimeOut

  ScrollTrigger.config({
    ignoreMobileResize: true,
  });
});
