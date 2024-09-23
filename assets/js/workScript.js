$(function () {
  $(".animate").scrolla({
    mobile: true,
    once: false,
  });
});

$(function () {
  gsap.registerPlugin(ScrollTrigger);

  ScrollTrigger.matchMedia({
    "(min-width: 1024px)": function () {
      let list = gsap.utils.toArray(".work ul li");
      let scrollTween = gsap.to(list, {
        xPercent: -100 * (list.length - 1),
        ease: "none",
        scrollTrigger: {
          trigger: ".work",
          pin: true,
          scrub: 1,
          start: "center center",
          end: "300%",
        },
      });

      gsap.utils.toArray(".imgBox").forEach(function (imgBox) {
        gsap
          .timeline({
            scrollTrigger: {
              trigger: imgBox,
              containerAnimation: scrollTween,
              start: "center right",
              end: "center center",
              scrub: true,
            },
          })
          .to(
            imgBox,
            { "clip-path": "inset(0%)", ease: "none", duration: 1 },
            0
          );
        gsap
          .timeline({
            scrollTrigger: {
              trigger: imgBox,
              containerAnimation: scrollTween,
              start: "center center",
              end: "center left",
              scrub: true,
            },
          })
          .to(
            imgBox,
            { "clip-path": "inset(30%)", ease: "none", duration: 1 },
            0
          );
      });
      gsap.utils.toArray(".textBox").forEach(function (textBox) {
        gsap
          .timeline({
            scrollTrigger: {
              trigger: textBox,
              containerAnimation: scrollTween,
              start: "center 70%",
              end: "center 40%",
              scrub: true,
            },
          })
          .to(textBox, { opacity: "1", x: "-100px" }, 0);
        gsap
          .timeline({
            scrollTrigger: {
              trigger: textBox,
              containerAnimation: scrollTween,
              start: "center 30%",
              end: "center 20%",
              scrub: true,
            },
          })
          .to(textBox, { opacity: "0" }, 0);

        gsap.utils.toArray(".num").forEach(function (text) {
          let num = text.getAttribute("data-text");
          let counter = document.querySelector(".counter .now");

          ScrollTrigger.create({
            trigger: text,
            start: "0% center",
            end: "100% center",
            scrub: true,
            containerAnimation: scrollTween,
            onEnter: (self) => (counter.innerText = num),
            onEnterBack: (self) => (counter.innerText = num),
          });
        });
      });
    },
  });
});
