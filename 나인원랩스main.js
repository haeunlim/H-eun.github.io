function mainAnimation() {
  if (document.querySelector(".no-main-vis")) {
    console.log("hero");

    spotlightAnimation();
    heroAnimation();
    galleryAnimation();
    prjAnimation();
    stickScrollIcon();
  }
}

function spotlightAnimation() {
  const mainVis = document.querySelector(".no-main-vis");

  if (!mainVis) return;
  gsap.fromTo(
    ".no-main-vis__spotlight div",
    {
      x: "-75%",
    },
    {
      x: "75%",
      repeat: -1,
      yoyo: true,
      duration: 2.5,
      ease: "none",
    }
  );
  // const mouseMoveHandler = (e) => {
  //     const mouseX = e.clientX;
  //     const mouseY = e.clientY;

  //     gsap.to('.no-main-vis__spotlight div', {
  //         x: mouseX,
  //         y: mouseY,
  //         stagger: -0.1,
  //     });
  // };

  // if (mainVis) {
  //     mainVis.addEventListener('mousemove', mouseMoveHandler);
  // } else {
  //     mainVis.removeEventListener('mousemove', mouseMoveHandler);
  // }
}

function stickScrollIcon() {
  gsap.to(".no-scroll-inner", {
    top: "88vh",
    scrollTrigger: {
      trigger: ".no-main-vis__hero",
      start: "center center",
      scrub: true,
    },
  });

  gsap.fromTo(
    ".no-scroll-inner",
    {
      opacity: 1,
    },
    {
      opacity: 0,
      scrollTrigger: {
        trigger: ".no-footer",
        start: "top bottom",
        toggleActions: "restart pause resume reverse",
      },
    }
  );
}

function galleryAnimation() {
  const section = document.querySelector(".no-prjIntro");
  const DOM = {
    inner: section.querySelector(".no-prjIntro__inner"),
    boxes: section.querySelectorAll(".no-prjIntro__inner div"),
    title: section.querySelector(".no-prjIntro__box1 h2 span"),
    columns: section.querySelectorAll(".no-prjIntro__col"),
    box1: section.querySelector(".no-prjIntro__box1"),
    box2: section.querySelector(".no-prjIntro__box2"),
    cols: section.querySelectorAll(".no-prjIntro__col"),
    gal: section.querySelector(".no-prjIntro__gal"),
    wrap: section.querySelector(".no-prjIntro__wrap"),
    // overlay: section.querySelector('.no-prjIntro__overlay'),
    // circleLg: section.querySelector('.no-prjIntro__circle-lg'),
    // circleMd: section.querySelector('.no-prjIntro__circle-md'),
    // circleSm: section.querySelector('.no-prjIntro__circle-sm'),
  };
  // projects title text

  const titleText = new SplitType(DOM.title);
  const prjText = new SplitType(
    document.querySelector(".no-prjIntro__highlight span")
  );
  // const counter3 = document.querySelector('.no-counter-3');
  // for (let i = 0; i < 2; i++) {
  //     for (let j = 0; j < 10; j++) {
  //         const div = document.createElement('div');
  //         div.className = 'no-num';
  //         div.textContent = j;
  //         counter3.appendChild(div);
  //     }
  // }
  // const finalDiv = document.createElement('div');
  // finalDiv.className = 'no-num';
  // finalDiv.textContent = '0';
  // counter3.appendChild(finalDiv);

  ScrollTrigger.matchMedia({
    "(min-width: 769px)": function () {
      // const numTL = gsap.timeline({ paused: true });
      // function animate(counter, duration = 0.5, delay = 0) {
      //     const numHeight = counter.querySelector('.no-num').clientHeight;
      //     const totalDistance =
      //         (counter.querySelectorAll('.no-num').length - 1) *
      //         numHeight;
      //     numTL.to(
      //         counter,
      //         {
      //             y: -totalDistance,
      //             duration,
      //             delay,
      //             ease: 'power2.inOut',
      //         },
      //         '<'
      //     );
      // }

      // animate(counter3, 3);
      // animate(document.querySelector('.no-counter-2'), 3);
      // animate(document.querySelector('.no-counter-1'), 0.5, 2);

      // numTL.to('.digit', {
      //     top: '-100%',
      //     color: 'rgba(252,240,18)',
      //     stagger: {
      //         amount: 0.25,
      //     },
      //     // delay: 6,
      //     duration: 0.5,
      //     ease: 'power4.inOut',
      // });

      // gsap.from(titleText.chars, {
      //     y: '100%',
      //     rotate: 25,
      //     ease: 'back.out(1.7)',
      //     stagger: 0.025,
      //     scrollTrigger: {
      //         trigger: section,
      //         start: '-30% top',
      //         toggleActions: 'play none none reverse',
      //         // markers: true,
      //     },
      // });

      const galTL = gsap
        .timeline({
          scrollTrigger: {
            trigger: section,
            start: "top top",
            end: "+=450%",
            pin: true,
            scrub: true,
          },
          defaults: {
            duration: 2,
          },
        })
        .to(DOM.box1, {
          x: "-65vw",
          duration: 3.5,
        })
        .to(
          DOM.box2,
          {
            x: "-65vw",
            duration: 3.5,
          },
          "<"
        )
        .to(
          DOM.cols[0],
          {
            y: "25%",
            duration: 3.5,
          },
          "<"
        )
        .to(
          DOM.cols[1],
          {
            y: "45%",
            duration: 3.5,
          },
          "<"
        )
        .to(
          DOM.cols[2],
          {
            y: "15%",
            duration: 3.5,
          },
          "<"
        )
        .to(
          DOM.cols[3],
          {
            y: "60%",
            duration: 3.5,
          },
          "<"
        );
      // .to(DOM.overlay, {
      //     opacity: 0.9,
      // })
      // .to(DOM.circleLg, {
      //     scale: 1,
      // })
      // .from('.no-prjIntro__highlight h2', {
      //     y: '100%',
      //     opacity: 0,
      //     ease: 'back.out(1.7)',
      //     onComplete() {
      //         numTL.play();
      //     },
      // })
      // .from(prjText.chars, {
      //     stagger: 0.025,
      //     y: '100%',
      //     opacity: 0,
      //     ease: 'back.out(1.7)',
      // });
    },
    "(max-width: 768px)": function () {
      // const numTL = gsap.timeline({
      //     paused: true,
      //     scrollTrigger: {
      //         trigger: '.no-prjIntro__highlight',
      //         start: 'top 85%',
      //     },
      // });
      // function animate(counter, duration = 0.5, delay = 0) {
      //     const numHeight = counter.querySelector('.no-num').clientHeight;
      //     const totalDistance =
      //         (counter.querySelectorAll('.no-num').length - 1) *
      //         numHeight;
      //     numTL.to(
      //         counter,
      //         {
      //             y: -totalDistance,
      //             duration,
      //             delay,
      //             ease: 'power2.inOut',
      //         },
      //         '<'
      //     );
      // }
      // animate(counter3, 3);
      // animate(document.querySelector('.no-counter-2'), 3);
      // animate(document.querySelector('.no-counter-1'), 0.5, 2);
      // numTL.to('.digit', {
      //     top: '-100%',
      //     color: 'rgba(252,240,18)',
      //     stagger: {
      //         amount: 0.25,
      //     },
      //     // delay: 6,
      //     duration: 0.5,
      //     ease: 'power4.inOut',
      // });
    },
  });
}

function heroAnimation() {
  const DOM = {
    area: document.querySelector(".no-main-area"),
    video: document.querySelector(".no-main-vis__video"),
    overlay: document.querySelector(".no-main-vis__overlay"),
    title: gsap.utils.toArray(".no-main-vis__intro-title > div"),
    desc: document.querySelector(".no-main-vis__intro-desc"),
  };

  const videoTitle = new SplitType(DOM.title);
  const videoDesc = new SplitType(DOM.desc);
  let tl;
  gsap.set(videoTitle.lines, { overflow: "hidden" });
  gsap.set(videoDesc.lines, { overflow: "hidden" });
  gsap.set(videoTitle.words, { y: "100%" });
  gsap.set(videoDesc.chars, { y: "100%" });

  ScrollTrigger.create({
    id: "main-vis",
    trigger: DOM.area,
    start: "top top",
    end: "+=300%",
    pin: true,
    pinSpacing: false,
    invalidateOnRefresh: true,
    anticipatePin: 1,
  });

  ScrollTrigger.matchMedia({
    "(min-width: 769px)": function () {
      tl = gsap
        .timeline({
          scrollTrigger: {
            trigger: DOM.area,
            start: "20% bottom",
            end: "100% bottom",
            scrub: 1,
            id: "main-ani",
            // markers: true,
          },
        })
        .to(DOM.video, {
          clipPath: "circle(10% at 50% 50%)",
          duration: 1,
        })
        .to(DOM.video, {
          clipPath: "circle(100% at 50% 50%)",
          duration: 1.5,
        });
    },
    "(max-width: 768px)": function () {
      tl = gsap
        .timeline({
          scrollTrigger: {
            trigger: DOM.area,
            start: "20% bottom",
            end: "100% bottom",
            scrub: 1,
            id: "main-ani",
            // markers: true,
          },
        })
        .to(DOM.video, {
          clipPath: "circle(20% at 50% 50%)",
          duration: 1,
        })
        .to(DOM.video, {
          clipPath: "circle(100% at 50% 50%)",
          duration: 1.5,
        });
    },
  });

  tl.to(
    DOM.overlay,
    {
      opacity: 0,
    },
    "<"
  )
    .to(
      videoTitle.lines,
      {
        opacity: 1,
        duration: 0.5,
      },
      "-=1"
    )
    .to(
      videoTitle.words,
      {
        y: "0%",
        duration: 0.5,
      },
      "<"
    )
    .to(
      ".no-main-vis__intro-desc",
      {
        opacity: 1,
      },
      "-=0.5"
    )
    .to(
      videoDesc.chars,
      {
        y: "0%",
        opacity: 1,
        stagger: 0.05,
      },
      "<"
    );
}

function prjAnimation() {
  ScrollTrigger.matchMedia({
    "(min-width: 769px)": function () {
      const prjWrap = document.querySelector(".no-prjList__wrap");
      const prjList = document.querySelector(".no-prjList__ul");
      const prjItems = gsap.utils.toArray(".no-prjList__li");

      if (!prjWrap) return;

      function getScrollAmount() {
        let prjListWidth = prjList.scrollWidth;
        return -(prjListWidth - window.innerWidth);
      }

      const prjListTween = gsap.to(prjList, {
        x: getScrollAmount,
        duration: 3,
        ease: "none",
      });

      ScrollTrigger.create({
        id: "prj",
        trigger: prjWrap,
        start: "top top",
        end: () => `+=${getScrollAmount() * 2.2 * -1}`,
        pin: true,
        animation: prjListTween,
        scrub: true,
        invalidateOnRefresh: true,
        // markers: true,
        // snap: {
        //     snapTo: 1 / (prjItems.length - 1),
        //     duration: 1,
        //     ease: 'expo.out',
        // },
      });

      prjItems.forEach((prjItem, index) => {
        const tags = Array.from(
          prjItem.querySelectorAll(".no-prjList__tags li")
        );
        const desc = prjItem.querySelector(".no-prjList__content span");
        const title = prjItem.querySelector(".no-prjList__name span");

        const { words: descChars } = new SplitType(desc);
        const { chars: titleChars } = new SplitType(title);

        const start = index === 0 ? "left left" : "left center";

        ScrollTrigger.create({
          trigger: prjItem,
          start: start,
          toggleClass: "active",
          toggleActions: "restart none none reverse",
          // markers: index === 0 ? true : false,
          containerAnimation: prjListTween,
          animation: gsap
            .timeline()
            .to(prjItem.querySelector("a"), {
              "--overlay-opacity": 0.25,
            })
            .from(
              descChars,
              {
                y: "100%",
                stagger: 0.025,
                ease: "back.out(1.7)",
              },
              "<"
            )
            .from(
              titleChars,
              {
                y: "100%",
                stagger: 0.025,
                ease: "back.out(1.7)",
              },
              "<"
            )
            .from(
              tags,
              {
                y: "150%",
                stagger: 0.1,
                ease: "back.out(1.7)",
              },
              "<"
            ),
        });
      });
    },
    "(max-width: 768px)": function () {
      const columns = gsap.utils.toArray(".no-prjIntro__col");
      const style = [
        { start: -50, end: 50 },
        { start: 50, end: -50 },
        { start: -50, end: 50 },
        { start: 50, end: -50 },
      ];

      if (!columns) return;

      columns.forEach((col, i) => {
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: ".no-prjIntro__gal",
            start: "top 75%",
            end: "bottom 25%",
            scrub: true,
            // markers: true,
          },
        });

        tl.fromTo(
          col,
          { x: i % 2 === 0 ? 50 : -50 },
          { x: i % 2 === 0 ? -50 : 50 }
        );
      });
      // let mobileTL = gsap.timeline({
      //     scrollTrigger: {
      //         trigger: marqueeContainer,
      //         start: '-80% bottom',
      //         scrub: 0.2,
      //     },
      // });

      // mobileTL.to(marqueeInner, { duration: 4, xPercent: -60 });
    },
  });
}

export default mainAnimation;
