$(function () {
  gsap.registerPlugin(ScrollTrigger);

  // 01.visual
  gsap
    .timeline({
      scrollTrigger: {
        trigger: ".visual",
        start: "top top",
        end: "bottom top",
        scrub: 1,
        pin: true,
      },
    })
    .to(".visual h1", { opacity: "1", ease: "none", duration: "10" }, 5)
    .to(
      ".visual img",
      { scale: "0.4", ease: "none", duration: "10", opacity: "0.3" },
      5
    );

  gsap.utils.toArray(".imgBox").forEach(function (imgBox) {
    gsap.timeline({
      scrollTrigger: {
        trigger: imgBox,
        start: "50% 100%",
        toggleClass: { targets: imgBox, className: "active" },
        scrub: 1,
      },
    });
  });
  gsap.utils.toArray(".textBox").forEach(function (textBox) {
    gsap.timeline({
      scrollTrigger: {
        trigger: textBox,
        start: "50% 80%",
        end: "100% 0%",
        toggleClass: { targets: textBox, className: "active" },
        scrub: 1,
      },
    });
  });
});
