let productScrollTriggers = [];
function product() {
  gsap.registerPlugin(ScrollTrigger);
  productScrollTriggers.forEach((trigger) => trigger.kill());
  productScrollTriggers = [];

  let mediaQuery = window.matchMedia("(min-width: 1024px)");

  if (mediaQuery.matches) {
    gsap.set(".section--product .effect-text--1", { scale: 2 });

    const trigger1 = ScrollTrigger.create({
      trigger: ".section--product .effect-wrap--1",
      start: "top top",
      endTrigger: ".section--product .product-wrap",
      end: "bottom bottom",
      pin: true,
      pinSpacing: false,
    });
    productScrollTriggers.push(trigger1);

    const trigger2 = ScrollTrigger.create({
      trigger: ".section--product .effect-text--2",
      start: "top top",
      endTrigger: ".section--product .product-wrap",
      end: "bottom bottom",
      pin: true,
      pinSpacing: false,
    });
    productScrollTriggers.push(trigger2);

    gsap.to(".section--product .effect-text--1", {
      scrollTrigger: {
        trigger: ".main-visual",
        start: "bottom top",
        endTrigger: ".section--product .product-wrap",
        end: "bottom-=90% bottom",
        scrub: 1,
      },
      scale: 1,
    });

    $(".section--product .product-item .content-bx a").mouseover(function () {
      $("#cursor").addClass("pointer");
    });

    $(".section--product .product-item .content-bx a").mouseleave(function () {
      $("#cursor").removeClass("pointer");
    });

    let se03imgs = ".section--product .img";
    gsap.set(se03imgs, { scale: 1.2 });

    let se03imgsM1 = gsap.timeline();
    se03imgsM1.to($(se03imgs).eq(0), { scale: 1, duration: 1 });
    se03imgsM1.pause();

    const triggerM1 = ScrollTrigger.create({
      trigger: ".section--product .product-item1",
      start: "top center",
      onEnter: function () {
        se03imgsM1.play();
      },
      onLeaveBack: function () {
        se03imgsM1.reverse();
      },
    });
    productScrollTriggers.push(triggerM1);

    let se03imgsM2 = gsap.timeline();
    se03imgsM2.to($(se03imgs).eq(1), { scale: 1, duration: 1 });
    se03imgsM2.pause();

    const triggerM2 = ScrollTrigger.create({
      trigger: ".section--product .product-item2",
      start: "top center",
      onEnter: function () {
        se03imgsM2.play();
      },
      onLeaveBack: function () {
        se03imgsM2.reverse();
      },
    });
    productScrollTriggers.push(triggerM2);

    let se03imgsM3 = gsap.timeline();
    se03imgsM3.to($(se03imgs).eq(2), { scale: 1, duration: 1 });
    se03imgsM3.pause();

    const triggerM3 = ScrollTrigger.create({
      trigger: ".section--product .product-item3",
      start: "top center",
      onEnter: function () {
        se03imgsM3.play();
      },
      onLeaveBack: function () {
        se03imgsM3.reverse();
      },
    });
    productScrollTriggers.push(triggerM3);
  } else {
    document.querySelectorAll(".product-item").forEach((item, index) => {
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

product();
