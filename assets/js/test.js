$(function () {
  gsap.registerPlugin(ScrollTrigger, ScrollSmoother, MotionPathPlugin);

  ScrollTrigger.normalizeScroll(true);
  ScrollTrigger.config({
    autoRefreshEvents: "visibilitychange,DOMContentLoaded,load",
  });

  const smoother = ScrollSmoother.create({
    wrapper: "#smoother-wrapper",
    content: "#smoother-content",
    smooth: 2,
    normalizeScroll: true,
    ignoreMobileResize: true,
    effects: true,

    preventDefault: true,
  });

  let test = gsap.timeline({
    scrollTrigger: {
      trigger: ".wrap",
      start: "0%",
      //                  end: '+=' + ((window.innerHeight * 4.7) + 500),
      //                  end: '+=' + ((window.innerHeight) * 5),
      end: "bottom 40%",
      scrub: true,
    },
  });

  test.fromTo(
    ".svgWrap",
    { x: "-798.793px", y: "-614.05px" },
    {
      ease: "none",
      motionPath: {
        path: "#back_path",
        align: "#back_path",
        alignOrigin: [0.5, 0.5],
      },
    }
  );

  let test2 = gsap.timeline({
    scrollTrigger: {
      trigger: ".wrap",
      start: "0%",
      end: "25%",
      scrub: true,
    },
  });

  let test3 = gsap.timeline({
    scrollTrigger: {
      trigger: ".wrap",
      start: "25%",
      end: "50%",
      scrub: true,
    },
  });

  let test4 = gsap.timeline({
    scrollTrigger: {
      trigger: ".wrap",
      start: "50%",
      end: "70%",
      scrub: true,
    },
  });
  let test5 = gsap.timeline({
    scrollTrigger: {
      trigger: ".wrap",
      start: "70%",
      end: "100%",
      scrub: true,
    },
  });

  test2.to(".svgAni", {
    scale: 1,
    duration: 3,
  });
  test3.to(".svgAni", {
    scale: 0.6,
    duration: 3,
  });
  test4.to(".svgAni", {
    scale: 0.5,
    duration: 3,
  });
  test5.to(".svgAni", {
    scale: 0.95,
    duration: 3,
  });

  let main_con01 = gsap.timeline({
    scrollTrigger: {
      trigger: ".main_con01",
      scrub: 1,
      start: "top 900px",
      end: "bottom 0%",
      ease: "power2.out",
      onEnter: function () {
        $(".main_con01").addClass("on");
        $(".sc_down").addClass("on");
        $(".btn_top").addClass("on");
      },
      onLeaveBack: function () {
        $(".main_con01").removeClass("on");
        $(".sc_down").removeClass("on");
        $(".btn_top").removeClass("on");
      },
    },
  });

  let main_con02 = gsap.timeline({
    scrollTrigger: {
      trigger: ".main_con02",
      scrub: 1,
      start: "top 700px",
      end: "bottom 0%",
      ease: "power2.out",
      onEnter: function () {
        $(".main_con02").addClass("on");
      },
      onLeaveBack: function () {
        $(".main_con02").removeClass("on");
      },
    },
  });

  let main_con03 = gsap.timeline({
    scrollTrigger: {
      trigger: ".main_con03",
      scrub: 1,
      start: "top 700px",
      end: "bottom 0%",
      ease: "power2.out",
      onEnter: function () {
        $(".main_con03").addClass("on");
      },
      onLeaveBack: function () {
        $(".main_con03").removeClass("on");
      },
    },
  });

  let main_con04 = gsap.timeline({
    scrollTrigger: {
      trigger: ".main_con04",
      scrub: 1,
      start: "top 700px",
      end: "bottom 0%",
      ease: "power2.out",
      onEnter: function () {
        $(".main_con04").addClass("on");
      },
      onLeaveBack: function () {
        $(".main_con04").removeClass("on");
      },
    },
  });

  let m_con = gsap.timeline({
    scrollTrigger: {
      trigger: ".m_con",
      scrub: 1,
      start: "top top",
      end: "bottom bottom",
      ease: "power2.out",
      onEnter: function () {
        //
      },
      onLeaveBack: function () {},
    },
  });

  m_con.to(".bg_color02", {
    opacity: 1,
    duration: 2,
  });

  document.querySelector(".btn_skip").addEventListener("click", (e) => {
    gsap.to(smoother, {
      // don't let it go beyond the maximum scrollable area
      scrollTop: Math.min(
        ScrollTrigger.maxScroll(window),
        smoother.offset(".main_visual", "top -0px")
      ),
      duration: 2,
    });
  });
});
