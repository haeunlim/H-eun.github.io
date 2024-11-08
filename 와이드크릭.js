<script type="text/javascript">
  // // 트랜지션 속도를 PHP 변수로 전달 //
  document.addEventListener('DOMContentLoaded', function(){" "}
  {
    //     // PHP 변수를 JavaScript로 전달
    //     let t = "";
    //     // 숫자인지 확인하고 숫자로 변환
    //     if (!isNaN(t)) {
    //         t = parseFloat(t);
    //     } else {
    //         t = 0.5; // 기본값 설정
    //     }

    //     const elements = document.querySelectorAll('.visual .height strong');
    //     elements.forEach(element => {
    //         element.style.transition = `all ${t}s`;
    //         console.log(element.style.transition); // 디버깅을 위해 콘솔에 출력
    //     });
    // });

    $(function () {
      let tl01 = "";
      let initWidth = "";

      if (window.innerWidth > 1180) {
        initWidth = "PC";
      } else {
        initWidth = "MO";
      }

      console.log("initWidth: ", initWidth);

      // 비주얼 인터렉션, Swiper 슬라이드를 초기화
      var visualSwiper;
      var isSliding = false;
      function initVisualSwiper() {
        visualSwiper = new Swiper(".visual .title", {
          direction: "vertical",
          touchRatio: 0, //드래그 금지
          allowTouchMove: true,
          mouseWheel: false,
          // init
          on: {
            init: function () {
              console.log("init");

              // visualSwiper.autoplay.start();

              // document.querySelector('.visual .height .swiper-wrapper .swiper-slide:first-child strong').style.opacity = '0';
            },
            slideChange: function () {
              console.log("slideChange");
              console.log("this.realIndex", this.realIndex);

              // document.querySelector('.visual .height .swiper-wrapper .swiper-slide:first-child strong').style.opacity = '0';

              if (this.realIndex === 0 || this.realIndex === 4) {
                document.querySelector(
                  ".visual .height .swiper-wrapper .swiper-slide:first-child strong"
                ).style.opacity = "1";
              } else {
                document.querySelector(
                  ".visual .height .swiper-wrapper .swiper-slide:first-child strong"
                ).style.opacity = "0";
              }
            },
            slideChangeTransitionStart: function () {
              // console.log('slideChangeTransitionStart');
              // document.querySelector('.visual .height .swiper-wrapper .swiper-slide:first-child strong').style.opacity = '0';
            },
            slideChangeTransitionEnd: function () {
              // console.log('slideChangeTransitionEnd');
              // document.querySelector('.visual .height .swiper-wrapper .swiper-slide:first-child strong').style.opacity = '0';
            },
          },
        });
        // window.addEventListener('wheel', debounce(handleWheelEvent), { passive: false });
      }

      var visualSwiperTbMo;
      function initVisualSwiperTbMo() {
        visualSwiperTbMo = new Swiper(".visual .title", {
          direction: "vertical",
          effect: "fade", // 페이드 인/아웃 효과 활성화
          fadeEffect: {
            crossFade: true,
            duration: 1000,
          },
          loop: true,
          autoplay: {
            delay: 2000,
            disableOnInteraction: false,
          },
          touchRatio: 0, //드래그 금지
          allowTouchMove: true,
          observer: true,
          observeParents: true,
        });
      }

      function animateVisual() {
        tl01 = gsap
          .timeline()
          .to(".height .inner", { width: "1014px", height: "494px" })
          .to(".height .inner", {
            "margin-top": "5.2rem",
            onComplete: function () {
              // console.log('onComplete');
              // initVisualSwiper();
              if (window.innerWidth > 1180) {
                disableScroll();
                initVisualSwiper();
                // console.log('initVisualSwiper');
              }
            },
          })
          .add("start")
          .to(".visual .relative svg", { "animation-name": "fadeIn" }, "start")

          // .to(".visual .relative svg", { "animation-name": "dash" },'start')

          // .to(".visual .relative svg", {
          //     "animation-name": "fadeIn",
          //     "opacity": "1",  // 최종 불투명도 (1은 완전히 보임)
          //     "duration": "1", // 애니메이션 지속 시간 (초 단위)
          //     // ease: "power1.inOut", // 애니메이션의 이징 (선택 사항)
          //     "delay": "0",  // 애니메이션 지연 시간 (필요에 따라 조정)
          // }, 'start')
          .to(
            ".visual .height",
            {
              className: "height on",
              // onStart: initVisualSwiper,
              // onReverseComplete: function() {
              //     if (visualSwiper) {
              //         visualSwiper.destroy();
              //     }
              // }
              onComplete: function () {
                if (window.innerWidth > 1180) {
                  // disableScroll();
                  // initVisualSwiper();
                }
                // console.log('onComplete');
                // initVisualSwiper();
                // disableScroll();
                // ScrollTrigger.getAll().forEach(trigger => trigger.kill());
                // 화면 스크롤 막기위해 ScrollTrigger를 무력화, config가 아닌 각각의 ScrollTrigger에 대해 kill()을 호출
                // ScrollTrigger.getAll().forEach(trigger => trigger.disable());
              },
            },
            "start"
          )
          // 잠시 멈춤
          .to(".visual .height", {
            duration: 1,
            onComplete: function () {
              // console.log('onComplete#2');
              // disableScroll();
              // initVisualSwiper();
            },
          });
      }

      function disableScroll() {
        console.log("disableScroll");
        // window scroll 막기
        window.addEventListener("wheel", preventDefault, { passive: false });
        window.addEventListener("touchmove", preventDefault, {
          passive: false,
        });
        window.addEventListener("keydown", preventDefaultForScrollKeys, {
          passive: false,
        });
      }
      function enableScroll() {
        console.log("enableScroll");
        // window scroll 풀기
        window.removeEventListener("wheel", preventDefault, { passive: false });
        window.removeEventListener("touchmove", preventDefault, {
          passive: false,
        });
        window.removeEventListener("keydown", preventDefaultForScrollKeys, {
          passive: false,
        });
      }
      function preventDefault(e) {
        console.log("preventDefault");

        // wheel 리스너가 동작하는지 확인

        console.log("visualSwiper", visualSwiper);
        console.log("visualSwiper.destroyed", visualSwiper.destroyed);
        // console.log('visualSwiper.realIndex', visualSwiper.realIndex);
        // console.log('visualSwiper.isBeginning', visualSwiper.isBeginning);
        // console.log('visualSwiper.isEnd', visualSwiper.isEnd);
        console.log(
          "opacity",
          document.querySelector(
            ".visual .height .swiper-wrapper .swiper-slide:first-child strong"
          ).style.opacity
        );

        // if (visualSwiper.realIndex === 0 || visualSwiper.destroyed) {
        //     document.querySelector('.visual .height .swiper-wrapper .swiper-slide:first-child strong').style.opacity = '1';
        // } else {
        //     document.querySelector('.visual .height .swiper-wrapper .swiper-slide:first-child strong').style.opacity = '0';
        // }

        // console.log('preventDefaultScroll');
        e.preventDefault();
        // visualSwiper가 없으면 아무것도 하지 않음
        // if (!visualSwiper) return;
        if (!visualSwiper || visualSwiper.destroyed) {
          enableScroll();
          return;
        }

        // 마지막 슬라이드에서는 return

        if (visualSwiper.isEnd) {
          enableScroll();
          return;
        }
        if (isSliding) return;
        // 스크롤의 위, 아래를 판단해서 스와이프 이동
        if (e.deltaY > 0) {
          if (!visualSwiper.isEnd) visualSwiper.slideNext();
        } else {
          if (!visualSwiper.isBeginning) visualSwiper.slidePrev();
        }
        // 슬라이딩 상태로 설정
        isSliding = true;
        // // 일정 시간 후 슬라이딩 상태 해제
        setTimeout(() => {
          isSliding = false;
        }, 1000); // 슬라이딩 상태를 해제하는 시간 (디바운스 시간과 일치시킴)
      }
      function debounce(func, wait = 500) {
        let timeout;
        return function () {
          const context = this,
            args = arguments;
          const later = function () {
            timeout = null;
            func.apply(context, args);
          };
          clearTimeout(timeout);
          timeout = setTimeout(later, wait);
          if (!timeout) func.apply(context, args);
        };
      }
      window.addEventListener("wheel", debounce(preventDefault), {
        passive: false,
      });
      const keys = { 37: 1, 38: 1, 39: 1, 40: 1 };
      function preventDefaultForScrollKeys(e) {
        // console.log('preventDefaultForScrollKeys');
        if (keys[e.keyCode]) {
          preventDefault(e);
          return false;
        }
      }
      // 스크롤 위치가 현재 윈도우 높이의 2배 이상이면 스크롤 막기
      // function preventScroll() {
      //     // console.log('preventScroll');
      //     if (window.scrollY > window.innerHeight * 2 ) {
      //         disableScroll();
      //     } else {
      //         // enableScroll();
      //     }
      // }

      // 첫로딩
      if (window.innerWidth > 1180) {
        // 로딩 시 스크롤 최상단으로 이동
        $(window).on("beforeunload", function () {
          $(window).scrollTop(0);
        });

        //로딩페이지
        $(".main_title").addClass("on");
        $("html,body").addClass("hidden");
        if ($(".main_title").hasClass("on")) {
          setTimeout(function () {
            $(".loading .bg").animate({ width: "100%" }, 3000, function () {
              setTimeout(function () {
                $(".loading").hide();
                $("html,body").removeClass("hidden");
                $(".main").addClass("on");
                $("header").addClass("on");
              }, 1500); // 500ms = 0.5s
            });
          }, 2000);
        } else {
        }

        animateVisual();

        ScrollTrigger.create({
          trigger: ".visual",
          start: "top top",
          pin: true,
          end: "200%",
          scrub: true,
          // markers: true,
          animation: tl01,
          onEnter: function () {
            console.log("onEnter");
            // 화면 스크롤 막기
            // preventScroll();
            // window.addEventListener("scroll", preventScrollEvent, { passive: false });
          },
          // 스크롤 하는 동안
          onUpdate: function () {
            // console.log('onUpdate');
            // console.log(window.scrollY);
          },
          // 뒤로 스크롤 하는 동안
          onLeave: function () {
            console.log("onLeave");
            visualSwiper.slideTo(0);
            // 스와이프 초기화
            visualSwiper.destroy();
            // document.querySelector('.visual .height .swiper-wrapper .swiper-slide:first-child strong').style.opacity = '1';
          },
          // 다시 되돌아 왔을 때
          onEnterBack: function () {
            console.log("onEnterBack");
            // visualSwiper.slideTo(0);
            // 스와이프 다시 실행
            // document.querySelector('.visual .height .swiper-wrapper .swiper-slide:first-child strong').style.opacity = '1';
            initVisualSwiper();
            visualSwiper.destroy();
          },
        });
      } else {
        $(".loading").hide();
        initVisualSwiperTbMo();
      }

      // resize
      window.addEventListener("resize", function () {
        let currentWidth = "";
        console.log(initWidth);

        if (window.innerWidth > 1180) {
          currentWidth = "PC";
        } else {
          currentWidth = "MO";
        }

        if (initWidth !== currentWidth) {
          console.log("currentWidth: ", currentWidth);
          console.log("initWidth: ", initWidth);
          // 페이지 리로드
          $(window).scrollTop(0);
          location.reload();
        } else {
          console.log("currentWidth: ", currentWidth);
          console.log("initWidth: ", initWidth);
        }

        initWidth = currentWidth;

        // let currentWidth = window.innerWidth;
        // console.log('currentWidth: ', currentWidth);

        // if(window.innerWidth > 1180) $(window).scrollTop(0);
        // // 페이지 리로드
        // location.reload();

        // enableScroll();
        // ScrollTrigger.refresh();
        // if(window.innerWidth > 1180) {
        //     console.log('resize over 1180');

        //     // if(tl01) {
        //     //     tl01.kill();
        //     //     animateVisual();
        //     // } else {
        //     //     animateVisual();
        //     // }

        //     // if(visualSwiperTbMo) {
        //     //     visualSwiperTbMo.destroy();
        //     //     initVisualSwiper();
        //     // }

        // } else {
        //     console.log('resize under 1180');
        //     if(tl01) {
        //         tl01.kill();
        //         console.log('tl01.kill()');
        //     }

        //     if(visualSwiper) {
        //         visualSwiper.destroy();
        //     }

        //     // visualSwiperTbMo.destroy();
        //     initVisualSwiperTbMo();

        // }
      });

      $(window).scroll(function () {
        // established 스크롤시 라인 생성
        var establishedTop =
          $(".established").offset().top - window.innerHeight / 2;
        if ($(window).scrollTop() > establishedTop) {
          $(".established").addClass("on");
        }

        // about 스크롤시 이미지 스케일
        var aboutItem1Top =
          $(".about .item1").offset().top - window.innerHeight / 2;
        if ($(window).scrollTop() > aboutItem1Top) {
          $(".about .item1").addClass("on");
        }
        var aboutP1Top =
          $(".about .item1 .desc p span").offset().top -
          window.innerHeight / 2 -
          200;
        if ($(window).scrollTop() > aboutP1Top) {
          $(".about .item1 .desc p span").addClass("fadeup");
        }

        var aboutItem2Top =
          $(".about .item2").offset().top - window.innerHeight / 2;
        if ($(window).scrollTop() > aboutItem1Top) {
          $(".about .item2").addClass("on");
        }
        var aboutP2Top =
          $(".about .item2 .desc p span").offset().top -
          window.innerHeight / 2 -
          400;
        if ($(window).scrollTop() > aboutP2Top) {
          $(".about .item2 .desc p span").addClass("fadeup");
        }

        // portfolio 스크롤시 down
        var portfolioTop =
          $(".portfolio").offset().top - window.innerHeight / 2;
        if ($(window).scrollTop() > portfolioTop) {
          $(".portfolio").addClass("on");
        }

        if (window.innerWidth < 1181) {
          // .about .item .img
          // about 스크롤시 이미지 스케일
          var aboutItem1img =
            $(".about .item1 .img").offset().top - window.innerHeight / 2;
          if ($(window).scrollTop() > aboutItem1Top) {
            $(".about .item1 .img").addClass("fadeup");
          }
          var aboutItem2img =
            $(".about .item2 .img").offset().top - window.innerHeight / 2;
          if ($(window).scrollTop() > aboutItem2Top) {
            $(".about .item2 .img").addClass("fadeup");
          }
        } else {
        }
      });
    })
  }
</script>;
