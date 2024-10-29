// 스플리팅 호출
$(document).ready(function () {
  HeaderScrollChange();
  DiamondAnimation();
  project();
  typeTextAnimation();
  Splitting();

  $(".animate").scrolla({
    mobile: true,
    once: false,
  });
  $(document).on("click", 'a[href="#"]', function (e) {
    e.preventDefault();
  });
});

function HeaderScrollChange() {
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
}
function DiamondAnimation() {
  gsap.registerPlugin(ScrollTrigger);

  // 3D MOTION - CHARACTER
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
  // 3D MOTION - CHARACTER
  const diamond3d_animation = gsap.timeline();
  diamond3d_animation
    .from("#diamond", { scale: 0, opacity: 0, x: 50, y: 50 })
    .to(diamond3d_clubbys, {
      frame: diamond3d_frameCount - 1,
      snap: "frame",
      scrub: 1,
      paused: false,
      ease: "none",
      duration: 5,
      onUpdate: diamond3d_render,
    })
    .to("#diamond", { scale: 0, opacity: 0, x: 50, y: 50 });

  gsap
    .timeline({
      scrollTrigger: {
        trigger: ".video_sec", //트리거 대상
        start: "0% 50%", //트리거 대상의 0%와 브라우저의 80%가 만날때 애니메이션이 시작됨.
        end: "100% 100%", //트리거 대상의 100%와 브라우저의 100%가 만날때 애니메이션이 시작됨.
        scrub: 1, //gsap scrollTrigger 의 이벤트는 스크롤이 사용될 때만 재생되도록 만들어주는 속성
      },
    })
    .to(".scroll", { opacity: "0", ease: "none", duration: 5 }, 0)
    .fromTo(
      ".video_inner video, .video_inner .dim",
      { "clip-path": "inset(60% 60% 60% 60% round 30%)" },
      { "clip-path": "inset(0% 0% 0% 0% round 0%)", duration: 10 },
      0
    );

  // const boxes = gsap.utils.toArray(".pj_item_img img");
  // boxes.forEach((box) => {
  //   gsap.from(box, {
  //     scale: 0.8,
  //     scrollTrigger: {
  //       trigger: box,
  //       scrub: true,
  //     },
  //   });
  // });
}

let productScrollTriggers = [];
function project() {
  gsap.registerPlugin(ScrollTrigger);
  productScrollTriggers.forEach((trigger) => trigger.kill());
  productScrollTriggers = [];

  let mediaQuery = window.matchMedia("(min-width: 1024px)");

  if (mediaQuery.matches) {
    document.querySelectorAll(".pj_item").forEach((item, index) => {
      gsap.set(item, {
        autoAlpha: 0,
        y: 50,
      });

      const trigger = ScrollTrigger.create({
        trigger: item,
        start: "top bottom",
        end: "top center",
        onEnter: function () {
          gsap.to(item, {
            autoAlpha: 1,
            y: 0,
            duration: 0.5,
            ease: "power2.out",
            delay: index * 0.1,
          });
        },
      });
      productScrollTriggers.push(trigger);
    });
  }
}
function menuOpen() {
  $(".menu_open").on("click", function () {
    $(".gnb").toggleClass("on");
    $(this).toggleClass("on");
    $("body").toggleClass("on");
  });
}
function loading() {
  setTimeout(function () {
    $("#loading").addClass("hide");
  }, 4500);
}

function typeTextAnimation() {
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
