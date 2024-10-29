// 스플리팅 호출
jQuery(function () {
  //about sec diamond
  // 3D MOTION - DIAMOND
  const diamond3d_canvas = document.getElementById("diamond");
  const diamond3d_context = diamond3d_canvas.getContext("2d");
  diamond3d_canvas.width = 1000;
  diamond3d_canvas.height = 1000;
  const diamond3d_frameCount = 90;

  const diamond3d_currentFrame = (index) =>
    `https://haeunlim.github.io/portfolio/assets/img/f00${index.toString()}.png`;
  const diamond3d_images = [];
  const diamond3d_clubbys = {
    frame: 0,
  };

  for (let i = 0; i < diamond3d_frameCount; i++) {
    const diamond3d_img = new Image();
    if (i < 10) {
      i = "0" + i;
    }
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

  setTimeout(function () {
    gsap.registerPlugin(ScrollTrigger);
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
    });
    bodyScrollBar.addListener(ScrollTrigger.update);
    ScrollTrigger.defaults({ scroller: scroller });

    $(".animate").scrolla({
      mobile: true,
      once: false,
    });
    //visualVideo;
    gsap
      .timeline({
        scrollTrigger: {
          trigger: ".about_sec", //트리거 대상
          start: "top 20%", //트리거 대상의 0%와 브라우저의 80%가 만날때 애니메이션이 시작됨.
          end: "bottom top",
          // pin: ".visual_sec",
          scrub: 1, //gsap scrollTrigger 의 이벤트는 스크롤이 사용될 때만 재생되도록 만들어주는 속성
        },
      })
      .to(".scroll", { opacity: "0", ease: "none", duration: 5 }, 0)
      .fromTo(
        ".visual_sec video, .visual_sec .dim",
        { "clip-path": "inset(0% 0% 0% 0% round 0%)" },
        { "clip-path": "inset(60% 60% 60% 60% round 30%)" },
        0
      );
    // .fromTo(
    //   "header",
    //   {
    //     backgroundColor: "transparent",
    //     borderBottom: "1px solid #fff2",
    //     color: "#fff",
    //   },
    //   {
    //     backgroundColor: "#fff",
    //     borderBottom: "1px solid #eee",
    //     color: "#111",
    //   },
    //   0
    // )

    // 3D MOTION - DIAMOND
    gsap.set(".about_sec .wave_txt_box span", {
      yPercent: 0,
    });
    const yPercent_vh = (coef) => window.innerHeight * (coef / 100);
    console.log(yPercent_vh);
    let dKit = gsap.timeline({
      scrollTrigger: {
        scrub: 1.5,
        trigger: ".about_sec",
        pin: true,
        pinSpacing: true,
        start: "top 0%",
        end: "+=200%",
      },
    });
    dKit

      .fromTo(
        ".about_sec .wave_txt_box span",
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
      .fromTo(
        ".my_skill img",
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
      .fromTo(
        diamond3d_canvas,
        {
          yPercent: yPercent_vh(10),
          duration: 1.5,
        },
        {
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
          ease: "none",
          duration: 5,
          onUpdate: diamond3d_render,
        },
        "<"
      )
      .to(".about_sec .txt_box", { opacity: 0 })
      .to(".about_sec #diamond", { opacity: 0 }, "<")
      .to(".wrap", { backgroundColor: "#111", duration: 0.5 })
      .to(".project_intro_sec, .project_list_sec", { color: "#fff" });

    gsap.timeline({
      scrollTrigger: {
        trigger: ".project_intro_sec", //트리거 대상
        start: "top 30%", //트리거 대상의 0%와 브라우저의 30%가 만날때 애니메이션이 시작됨.
        scrub: 1, //gsap scrollTrigger 의 이벤트는 스크롤이 사용될 때만 재생되도록 만들어주는 속성
      },
    });

    gsap
      .timeline({
        scrollTrigger: {
          trigger: ".together",
          start: "top 20%",
          end: "bottom 20%",
          scrub: 1,
          markers: true,
        },
      })
      .to(".wrap", { backgroundColor: "#fdfdfd", duration: 0.5 }, 0);
  }, 100);
  // setTimeOut

  ScrollTrigger.refresh();
  ScrollTrigger.config({
    ignoreMobileResize: true,
  });
});
