// 스플리팅 호출
$(document).on("click", 'a[href="#"]', function (e) {
  e.preventDefault();
});
$(function () {
  Splitting();
});

// header 영역 스클로 방향 이벤트
$(function () {
  var prevScrollTop = 0;
  document.addEventListener("scroll", function () {
    var nowScrollTop = $(window).scrollTop();

    if (nowScrollTop > prevScrollTop) {
      $("header").addClass("active");
    } else {
      $("header").removeClass("active");
    }
    prevScrollTop = nowScrollTop;

    if (nowScrollTop > 0) {
      $("header").addClass("scroll");
    } else {
      $("header").removeClass("scroll");
    }
  });
});

$(function () {
  $(".animate").scrolla({
    mobile: true,
    once: false,
  });
});

// svg path 길이 구하기
// $(function () {
//   $(".svgWrap")
//     .find("#svgAni04")
//     .each(function (i, path) {
//       var length = path.getTotalLength();
//     });
// });

// .con01 gsap 애니메이션
$(function () {
  gsap.registerPlugin(ScrollTrigger, MotionPathPlugin);

  gsap
    .timeline({
      scrollTrigger: {
        trigger: ".con01", //트리거 대상
        start: "0% 80%", //트리거 대상의 0%와 브라우저의 80%가 만날때 애니메이션이 시작됨.
        end: "100% 100%", //트리거 대상의 100%와 브라우저의 100%가 만날때 애니메이션이 시작됨.
        scrub: 1, //gsap scrollTrigger 의 이벤트는 스크롤이 사용될 때만 재생되도록 만들어주는 속성
      },
    })
    .to(
      ".wrap",
      { backgroundColor: "#fff", color: "#000", ease: "none", duration: 5 },
      0
    )

    .to(".visual-sect .img-box", { opacity: 0, duraion: 2 }, 0)
    // .to(
    //   ".visual-sect .svgAni",
    //   {
    //     width: "20px",
    //     top: "-30px",
    //     left: "60px",
    //     position: "fixed",
    //     opacity: 0,
    //     ease: "none",
    //     duration: 7,
    //   },
    //   0
    // )
    // .to("header .svgAni", {
    //   opacity: 1,
    //   ease: "none",
    //   duration: 0.5,
    //   stagger: 0.2,
    // })

    .to(".scroll", { opacity: "0", ease: "none", duration: 5 }, 0)
    .fromTo(
      ".videoWrap video, .videoWrap .dim",
      { "clip-path": "inset(60% 60% 60% 60% round 30%)" },
      { "clip-path": "inset(0% 0% 0% 0% round 0%)", duration: 10 },
      0
    );

  //con02 gsap animation
  //title 글자애니메이션
  gsap
    .timeline({
      scrollTrigger: {
        trigger: ".con02",
        start: "0% 100%",
        end: "0% 20%",
        scrub: 1,
      },
    })
    .fromTo(
      ".con02 .title .a",
      { x: "-100%" },
      { x: "0%", ease: "none", duration: 5 },
      0
    )
    .fromTo(
      ".con02 .title .b",
      { x: "100%" },
      { x: "0%", ease: "none", duration: 5 },
      0
    );
  //workList 나타날때 배경색 검정으로
  gsap
    .timeline({
      scrollTrigger: {
        trigger: ".workList",
        start: "0% 100%",
        end: "0% 100%",
        scrub: 1,
      },
    })
    .to(
      ".wrap",
      { backgroundColor: "#0031b5", color: "#fff", ease: "none", duration: 5 },
      0
    )

    // title 글자 position: fixed 적용
    .to(
      ".con02 .title",
      {
        position: "fixed",
        ease: "none",
        left: "0",
        top: "0",
        width: "100%",
        duration: 5,
      },
      0
    )
    //.workList에 margin-top 을 적용해서 애니를 자연스럽게 작성
    .fromTo(
      ".workList",
      { margin: "0 auto" },
      {
        margin: "100vh auto 0",
        position: "relative",
        zIndex: "10",
        duration: 1,
      },
      0
    );

  gsap
    .timeline({
      scrollTrigger: {
        trigger: ".workList > li:nth-child(1)",
        start: "0% 100%",
        end: "100% 100%",
        scrub: 1,
        markers: true,
      },
    })
    .to(".con02 .title", { opacity: 0.2, ease: "none", duration: 5 }, 0);

  gsap
    .timeline({
      scrollTrigger: {
        trigger: ".workList",
        start: "100% 30%",
        end: "100% 0%",
        scrub: 1,
      },
    })
    .to(".con02 .title", { opacity: 1, ease: "none", duration: 2 }, 0)
    .to(".con02 .title .a", { x: "-100%", ease: "none", duration: 5 }, 2)
    .to(".con02 .title .b", { x: "100%", ease: "none", duration: 5 }, 2);

  gsap
    .timeline({
      scrollTrigger: {
        trigger: ".skillSect",
        start: "0% 100%",
        end: "0% 100%",
        scrub: 1,
      },
    })
    .to(
      ".wrap",
      { backgroundColor: "#000", color: "#fff", ease: "none", duration: 5 },
      0
    );
});
// skill
$(function () {
  $(".chart").each(function () {
    let percent = $(this).data("percent");
    let circle = $(this).find(".outer");

    $(circle).each(function (i, path) {
      var length = path.getTotalLength();
      console.log(length);
      let val = (length * percent) / 100;
      val = length - val + 20;
      $(this).animate({ "stroke-dashoffset": val });
    });
  });

  const container = document.querySelector(".container");
  document.body.addEventListener("mousemove", (e) => {
    const x = e.clientX;
    const y = e.clientY;
    gsap.to(container, {
      y: y,
    });
    gsap.to(".mask", {
      y: -y,
    });
  });
});

$(function () {
  $(".menuOpen").on("click", function () {
    $(".gnb").toggleClass("on");
    $(this).toggleClass("on");
    $("body").toggleClass("on");
  });
});

$(function () {
  setTimeout(function () {
    $("#loading").addClass("hide");
  }, 4500);

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

  // 3D MOTION - CHARACTER
  const character3d_canvas = document.getElementById("3d_Character");
  const character3d_context = character3d_canvas.getContext("2d");
  character3d_canvas.width = 640;
  character3d_canvas.height = 640;
  const character3d_frameCount = 10;
  const character3d_currentFrame = (index) =>
    `https://haeunlim.github.io/portfolio/assets/img/f000${(
      index + 1
    ).toString()}.png`;
  const character3d_images = [];
  const character3d_clubbys = {
    frame: 0,
  };

  for (let i = 0; i < character3d_frameCount; i++) {
    const character3d_img = new Image();
    character3d_img.src = character3d_currentFrame(i);
    character3d_images.push(character3d_img);
  }
  function character3d_render() {
    character3d_context.clearRect(
      0,
      0,
      character3d_canvas.width,
      character3d_canvas.height
    );
    character3d_context.drawImage(
      character3d_images[character3d_clubbys.frame],
      0,
      0
    );
  }
  // 3D MOTION - CHARACTER
  let character3d_animation = gsap.to(character3d_clubbys, {
    frame: character3d_frameCount - 1,
    snap: "frame",
    paused: false,
    repeat: -1,
    ease: "power2.out",
    duration: 1.5,
    scrollTrigger: {
      trigger: ".together .title-wrap",
      start: "top top",
      onEnter: function () {
        $(".together").addClass("on");
      },
      onLeaveBack: function () {
        $(".together").removeClass("on");
      },
    },
    onUpdate: character3d_render,
  });
});
