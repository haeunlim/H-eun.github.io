jQuery(function () {
	gsap.registerPlugin(ScrollTrigger);

	const introCharacter_canvas = document.getElementById("characterAni");
	const introCharacter_context = introCharacter_canvas.getContext("2d");
	introCharacter_canvas.width = 1516;
	introCharacter_canvas.height = 500;
	const introCharacter_frameCount = 40;
	const introCharacter_currentFrame = index => (
		`http://pub.hanbom.com/hanbom_7th/@resource/images/intro/intro-loop_${(index + 1).toString()}.png`
	);
	const introCharacter_images = []
	const introCharacter_clubbys = {
		frame: 0
	};
	for (let i = 0; i < introCharacter_frameCount; i++) {
		const introCharacter_img = new Image();
		introCharacter_img.src = introCharacter_currentFrame(i);
		introCharacter_images.push(introCharacter_img);
	}
	function introCharacter_render() {
		introCharacter_context.clearRect(0, 0, introCharacter_canvas.width, introCharacter_canvas.height);
		introCharacter_context.drawImage(introCharacter_images[introCharacter_clubbys.frame], 0, 0);
	}

	// 3D MOTION - INTRO (start)
	const intro_canvas = document.getElementById("introCanvas");
	const intro_context = intro_canvas.getContext("2d");
	intro_canvas.width = 1516;
	intro_canvas.height = 500;
	const intro_frameCount = 74;
	const intro_currentFrame = index => (
		`http://pub.hanbom.com/hanbom_7th/@resource/images/intro/intro_${(index + 1).toString()}.png`
	);
	const intro_images = []
	const intro_clubbys = {
		frame: 0
	};
	for (let i = 0; i < intro_frameCount; i++) {
		const intro_img = new Image();
		intro_img.src = intro_currentFrame(i);
		intro_images.push(intro_img);
	}
	function intro_render() {
		intro_context.clearRect(0, 0, intro_canvas.width, intro_canvas.height);
		intro_context.drawImage(intro_images[intro_clubbys.frame], 0, 0);
	}

	// 3D MOTION - INTRO (loop)
	const introCharacter_canvas_mo = document.getElementById("characterAniMo");
	const introCharacter_context_mo = introCharacter_canvas_mo.getContext("2d");
	introCharacter_canvas_mo.width = 742;
	introCharacter_canvas_mo.height = 1194;
	const introCharacter_frameCount_mo = 40;
	const introCharacter_currentFrame_mo = index => (
		`http://pub.hanbom.com/hanbom_7th/@resource/images/intro/mo/intro-loop_${(index + 1).toString()}.png`
	);
	const introCharacter_images_mo = []
	const introCharacter_clubbys_mo = {
		frame: 0
	};
	for (let i = 0; i < introCharacter_frameCount_mo; i++) {
		const introCharacter_img_mo = new Image();
		introCharacter_img_mo.src = introCharacter_currentFrame_mo(i);
		introCharacter_images_mo.push(introCharacter_img_mo);
	}
	function introCharacter_render_mo() {
		introCharacter_context_mo.clearRect(0, 0, introCharacter_canvas_mo.width, introCharacter_canvas_mo.height);
		introCharacter_context_mo.drawImage(introCharacter_images_mo[introCharacter_clubbys_mo.frame], 0, 0);
	}

	// 3D MOTION - INTRO (start)
	const intro_canvas_mo = document.getElementById("introCanvasMo");
	const intro_context_mo = intro_canvas_mo.getContext("2d");
	intro_canvas_mo.width = 742;
	intro_canvas_mo.height = 1194;
	const intro_frameCount_mo = 89;
	const intro_currentFrame_mo = index => (
		`http://pub.hanbom.com/hanbom_7th/@resource/images/intro/mo/intro_${(index + 1).toString()}.png`
	);
	const intro_images_mo = []
	const intro_clubbys_mo = {
		frame: 0
	};
	for (let i = 0; i < intro_frameCount_mo; i++) {
		const intro_img_mo = new Image();
		intro_img_mo.src = intro_currentFrame_mo(i);
		intro_images_mo.push(intro_img_mo);
	}
	function intro_render_mo() {
		intro_context_mo.clearRect(0, 0, intro_canvas_mo.width, intro_canvas_mo.height);
		intro_context_mo.drawImage(intro_images_mo[intro_clubbys_mo.frame], 0, 0);
	}
	

	// 3D MOTION - HEALTH
	const health3d_canvas = document.getElementById("3d_Health");
	const health3d_context = health3d_canvas.getContext("2d");
	health3d_canvas.width = 800;
	health3d_canvas.height = 800;
	const health3d_frameCount = 10;
	const health3d_currentFrame = index => (
		`http://pub.hanbom.com/hanbom_7th/@resource/images/3d/health/health_${(index + 1).toString()}.png`
	);
	const health3d_images = []
	const health3d_clubbys = {
		frame: 0
	};
	for (let i = 0; i < health3d_frameCount; i++) {
		const health3d_img = new Image();
		health3d_img.src = health3d_currentFrame(i);
		health3d_images.push(health3d_img);
	}
	function health3d_render() {
		health3d_context.clearRect(0, 0, health3d_canvas.width, health3d_canvas.height);
		health3d_context.drawImage(health3d_images[health3d_clubbys.frame], 0, 0);
	}


	// 3D MOTION - STUDY
	const study3d_canvas = document.getElementById("3d_Study");
	const study3d_context = study3d_canvas.getContext("2d");
	study3d_canvas.width = 800;
	study3d_canvas.height = 800;
	const study3d_frameCount = 10;
	const study3d_currentFrame = index => (
		`http://pub.hanbom.com/hanbom_7th/@resource/images/3d/study/study_${(index + 1).toString()}.png`
	);
	const study3d_images = []
	const study3d_clubbys = {
		frame: 0
	};
	for (let i = 0; i < study3d_frameCount; i++) {
		const study3d_img = new Image();
		study3d_img.src = study3d_currentFrame(i);
		study3d_images.push(study3d_img);
	}
	function study3d_render() {
		study3d_context.clearRect(0, 0, study3d_canvas.width, study3d_canvas.height);
		study3d_context.drawImage(study3d_images[study3d_clubbys.frame], 0, 0);
	}	

	// 3D MOTION - TRAVEL
	const travel3d_canvas = document.getElementById("3d_Travel");
	const travel3d_context = travel3d_canvas.getContext("2d");
	travel3d_canvas.width = 800;
	travel3d_canvas.height = 800;
	const travel3d_frameCount = 10;
	const travel3d_currentFrame = index => (
		`http://pub.hanbom.com/hanbom_7th/@resource/images/3d/travel/travel_${(index + 1).toString()}.png`
	);
	const travel3d_images = []
	const travel3d_clubbys = {
		frame: 0
	};
	for (let i = 0; i < travel3d_frameCount; i++) {
		const travel3d_img = new Image();
		travel3d_img.src = travel3d_currentFrame(i);
		travel3d_images.push(travel3d_img);
	}
	function travel3d_render() {
		travel3d_context.clearRect(0, 0, travel3d_canvas.width, travel3d_canvas.height);
		travel3d_context.drawImage(travel3d_images[travel3d_clubbys.frame], 0, 0);
	}

	// 3D MOTION - MOENY
	const money3d_canvas = document.getElementById("3d_Money");
	const money3d_context = money3d_canvas.getContext("2d");
	money3d_canvas.width = 800;
	money3d_canvas.height = 800;
	const money3d_frameCount = 10;
	const money3d_currentFrame = index => (
		`http://pub.hanbom.com/hanbom_7th/@resource/images/3d/finance/finance_${(index + 1).toString()}.png`
	);
	const money3d_images = []
	const money3d_clubbys = {
		frame: 0
	};
	for (let i = 0; i < money3d_frameCount; i++) {
		const money3d_img = new Image();
		money3d_img.src = money3d_currentFrame(i);
		money3d_images.push(money3d_img);
	}
	function money3d_render() {
		money3d_context.clearRect(0, 0, money3d_canvas.width, money3d_canvas.height);
		money3d_context.drawImage(money3d_images[money3d_clubbys.frame], 0, 0);
	}

	// 3D MOTION - HAPPY
	const happy3d_canvas = document.getElementById("3d_Happy");
	const happy3d_context = happy3d_canvas.getContext("2d");
	happy3d_canvas.width = 800;
	happy3d_canvas.height = 800;
	const happy3d_frameCount = 10;
	const happy3d_currentFrame = index => (
		`http://pub.hanbom.com/hanbom_7th/@resource/images/3d/happy/happy_${(index + 1).toString()}.png`
	);
	const happy3d_images = []
	const happy3d_clubbys = {
		frame: 0
	};
	for (let i = 0; i < happy3d_frameCount; i++) {
		const happy3d_img = new Image();
		happy3d_img.src = happy3d_currentFrame(i);
		happy3d_images.push(happy3d_img);
	}
	function happy3d_render() {
		happy3d_context.clearRect(0, 0, happy3d_canvas.width, happy3d_canvas.height);
		happy3d_context.drawImage(happy3d_images[happy3d_clubbys.frame], 0, 0);
	}

	// 3D MOTION - PEN
	const pen3d_canvas = document.getElementById("3d_Pen");
	const pen3d_context = pen3d_canvas?.getContext("2d");
	pen3d_canvas.width = 1300;
	pen3d_canvas.height = 850;
	const pen3d_frameCount = 50;
	const pen3d_currentFrame = (index) =>
		`http://pub.hanbom.com/hanbom_7th/@resource/images/3d/pen/pen_${(index).toString()}.png`

	const pen3d_images = [];
	const pen3d_clubbys = {
		frame: 0
	};
	for (let i = 0; i < pen3d_frameCount; i++) {
		const pen3d_img = new Image();
		pen3d_img.src = pen3d_currentFrame(i);
		pen3d_images.push(pen3d_img);
	}
	pen3d_images[0].onload = pen3d_render;
	function pen3d_render() {
		pen3d_context.clearRect(0, 0, pen3d_canvas.width, pen3d_canvas.height);
		pen3d_context.drawImage(pen3d_images[pen3d_clubbys.frame], 0, 0);
	}

	// 3D MOTION - CHARACTER
	const character3d_canvas = document.getElementById("3d_Character");
	const character3d_context = character3d_canvas.getContext("2d");
	character3d_canvas.width = 640;
	character3d_canvas.height = 640;
	const character3d_frameCount = 10;
	const character3d_currentFrame = index => (
		`http://pub.hanbom.com/hanbom_7th/@resource/images/3d/character/character_${(index + 1).toString()}.png`
	);
	const character3d_images = []
	const character3d_clubbys = {
		frame: 0
	};
	for (let i = 0; i < character3d_frameCount; i++) {
		const character3d_img = new Image();
		character3d_img.src = character3d_currentFrame(i);
		character3d_images.push(character3d_img);
	}
	function character3d_render() {
		character3d_context.clearRect(0, 0, character3d_canvas.width, character3d_canvas.height);
		character3d_context.drawImage(character3d_images[character3d_clubbys.frame], 0, 0);
	} 

	// 3D MOTION - SMILEY
	const smiley3d_canvas = document.getElementById("3d_Smiley");
	const smiley3d_context = smiley3d_canvas.getContext("2d");
	smiley3d_canvas.width = 400;
	smiley3d_canvas.height = 400;
	const smiley3d_frameCount = 40;
	const smiley3d_currentFrame = index => (
		`http://pub.hanbom.com/hanbom_7th/@resource/images/3d/smiley/smiley_${(index + 1).toString()}.png`
	);
	const smiley3d_images = []
	const smiley3d_clubbys = {
		frame: 0
	};
	for (let i = 0; i < smiley3d_frameCount; i++) {
		const smiley3d_img = new Image();
		smiley3d_img.src = smiley3d_currentFrame(i);
		smiley3d_images.push(smiley3d_img);
	}
	function smiley3d_render() {
		smiley3d_context.clearRect(0, 0, smiley3d_canvas.width, smiley3d_canvas.height);
		smiley3d_context.drawImage(smiley3d_images[smiley3d_clubbys.frame], 0, 0);
	}

	setTimeout(function() {
		const scroller = document.querySelector('.scroller');
		let bodyScrollBar = Scrollbar.init(scroller, {
			damping: 0.1,
			mobile: {
				speed: 2
			}
		});
		bodyScrollBar.setPosition(0, 0);
		bodyScrollBar.track.xAxis.element.remove();
		ScrollTrigger.scrollerProxy(scroller, {
			scrollTop(value) {
				if (arguments.length) {
					bodyScrollBar.scrollTop = value;
				}
				return bodyScrollBar.scrollTop;
			}
		});
		bodyScrollBar.addListener(ScrollTrigger.update);
		ScrollTrigger.defaults({ scroller: scroller });

	
		ScrollTrigger.matchMedia({
			"(min-width: 769px)": function () {
				// 3D MOTION - INTRO (loop)
				let introCharacter_animation = gsap.to(introCharacter_clubbys, {
					frame: introCharacter_frameCount - 1,
					snap: "frame",
					paused: false,
					repeat: -1,
					ease: "none",
					duration: 1.7,
					delay: 2.8,
					onUpdate: introCharacter_render
				});
					
				// 3D MOTION - INTRO (start)
				let intro_animation = gsap.to(intro_clubbys, {
					frame: intro_frameCount - 1,
					snap: "frame",
					paused: false,
					repeat: 0,
					ease: 'none',
					duration: 2.5,
					onUpdate: intro_render
				});
			},
			"(max-width: 768px)": function () {
				// 3D MOTION - INTRO (loop)
				let introCharacter_animation_mo = gsap.to(introCharacter_clubbys_mo, {
					frame: introCharacter_frameCount_mo - 1,
					snap: "frame",
					paused: false,
					repeat: -1,
					//yoyo: true,
					ease: "none",
					duration: 1.8,
					delay: 2.8,
					onUpdate: introCharacter_render_mo
				});

				let intro_animation_mo = gsap.to(intro_clubbys_mo, {
					frame: intro_frameCount_mo - 1,
					snap: "frame",
					paused: false,
					repeat: 0,
					ease: 'none',
					duration: 2.5,
					onUpdate: intro_render_mo
				});
			}
		})
	
		gsap.to(".welcome", {
			scrollTrigger: {
				trigger: ".welcome",
				start: "bottom top",
				onEnter: function () {
					$(".welcome").addClass("stop")
				},
				onEnterBack: function () {
					$(".welcome").removeClass("stop")
				},
			}
		})
		//header logo
		gsap.set(".header", {
			top: "3%",
		});
		gsap.timeline({
			ease: "none",
			scrollTrigger: {
				trigger: ".anniversary",
				start: "top 3%",
				end: "top bottom",
				scrub: !0,
				pinType: "transform",
				invalidateOnRefresh: true,
				onEnter: function () {
					$(".header").addClass("show")
				},
				onEnterBack: function () {
					$(".header").removeClass("show")
				},
			}
		});
		gsap.timeline({
			ease: "none",
			scrollTrigger: {
				trigger: ".anniversary",
				start: "top 3%",
				end: "top bottom",
				scrub: !0,
				pinType: "transform",
				invalidateOnRefresh: true,
				onEnter: function () {
					$(".header").addClass("change")
				},
				onEnterBack: function () {
					$(".header").removeClass("change")
				},
			}
		});
		gsap.timeline({
			scrollTrigger: {
				trigger: '.anniversary',
				//start: "top 160px",
				start: "bottom 0%",
				end: "top bottom",
				pinType: "transform",
				invalidateOnRefresh: true,
				onEnter: function () {
					$('.header').addClass('sticky')
				},
				onEnterBack: function () {
					$('.header').removeClass('sticky')
				},
			}
		});
		gsap.utils.toArray(".anniversary .scroll-title").forEach((scrollTitle, index) => {
			const w = scrollTitle.querySelector(".title");
			const [x, xEnd] = (index % 2) ? ['100%', (w.scrollWidth - scrollTitle.offsetWidth) * -1] : [w.scrollWidth / 1, 0
			];
			gsap.fromTo(w, {
				x
			}, {
				x: xEnd,
				scrollTrigger: {
					trigger: scrollTitle,
					start: "top 100%",
					end: "top 3%",
					scrub: 1,
					invalidateOnRefresh: true,
					scroller: scroller,
					pinType: "transform",
				}
			});
		});
		gsap.timeline({
			scrollTrigger: {
				trigger: ".anniversary",
				start: "top 3%",
				end: "top bottom",
				invalidateOnRefresh: true,
				onEnter: function () {
					$(".anniversary").addClass("hide")
				},
				onEnterBack: function () {
					$(".anniversary").removeClass("hide")
				},
			}
		});

		ScrollTrigger.matchMedia({
			"(min-width: 769px)": function () {
				//header logo
				gsap.timeline({
					ease: "none",
					scrollTrigger: {
						trigger: ".anniversary",
						start: "top 3%",
						scrub: !0,
						pinType: "transform",
						invalidateOnRefresh: true,
					}
				}).to(".header .logo", {
					fontSize: "24px",
				});
				gsap.timeline({
					ease: "none",
					scrollTrigger: {
						trigger: ".anniversary",
						start: "top 3%",
						scrub: !0,
						invalidateOnRefresh: true,
					}
				}).to(".header", {
					top: "24px",
				});
			},
			"(max-width: 768px)": function () {
				//header logo
				gsap.timeline({
					ease: "none",
					scrollTrigger: {
						trigger: ".anniversary",
						start: "top 3%",
						scrub: 1,
						invalidateOnRefresh: true,
					}
				}).to(".header .logo", {
					fontSize: "18px",
				});
				gsap.timeline({
					ease: "none",
					scrollTrigger: {
						trigger: ".anniversary",
						start: "top 3%",
						scrub: !0,
						invalidateOnRefresh: true,
						//markers: true,
					}
				}).to(".header", {
					top: "20px",
				});
			}
		});
				
		let tag = gsap.utils.toArray(".tag");
		gsap.utils.toArray(".tag").forEach(function (t) {
			gsap.set(t, {
				autoAlpha: 1,
			});
			t.addEventListener('mouseover', (e) => {
				moving();
			});
			function moving() {
				gsap.to(t, {
					scale: 1.5,
					autoAlpha: 0,
					duration: 0.5,
					ease: "power2.out",
					invalidateOnRefresh: true,
				});
			}
		});

		gsap.to(".cat", {
			autoAlpha: 1,
			scale: 1,
			scrollTrigger: {
				trigger: ".cat",
				start: "top 80%",
				end: "bottom 100%",
				scrub: 1,
				onEnter: function () {
					$(".cat").addClass("show")
				},
				onEnterBack: function () {
					$(".cat").removeClass("show")
				},
			}
		});
	
		let goal_container = document.querySelector(".goal .h-scroll");
		let goal_panel = gsap.utils.toArray(".goal .h-scroll > div");
		let goal_scroll = gsap.timeline({
			scrollTrigger: {
				pin: true,
				scrub: 1,
				start: "top top",
				trigger: ".goal .h-scroll",
				invalidateOnRefresh: true,
				scroller: scroller,
				pinType: "transform",
				end: () => "+=" + (goal_container.scrollWidth - document.documentElement.clientWidth),
			}
		});
		goal_scroll.to(goal_panel, {
			x: () => -(goal_container.scrollWidth - document.documentElement.clientWidth) + "px",
			duration: 1,
			ease: "none",
		});
		goal_scroll.to({}, {
			duration: 0.2
		});
		
		
		let health3d_animation = gsap.to(health3d_clubbys, {
			frame: health3d_frameCount - 1,
			snap: "frame",
			paused: false,
			repeat: -1,
			ease: "none",
			duration: 0.8,
			scrollTrigger: {
				trigger: ".goal-list",
				start: "top 100%",
				onEnter: function () {
					$(".health").addClass("on")
				},
				onEnterBack: function () {
					$(".health").addClass("on")
				},
				onLeave: function () {
					$(".health").removeClass("on")
				},
				onLeaveBack: function () {
					$(".health").removeClass("on")
				},
			},
			onUpdate: health3d_render
		});
	
		let study3d_animation = gsap.to(study3d_clubbys, {
			frame: study3d_frameCount - 1,
			snap: "frame",
			repeat: -1,
			ease: "none",
			duration: 0.8,
			scrollTrigger: {
				trigger: ".study",
				start: "left 120%",
				end: "right -10%",
				containerAnimation: goal_scroll,
				onEnter: function () {
					$(".study").addClass("on")
				},
				onEnterBack: function () {
					$(".study").addClass("on")
				},
				onLeave: function () {
					$(".study").removeClass("on")
				},
				onLeaveBack: function () {
					$(".study").removeClass("on")
				},
			},
			onUpdate: study3d_render
		});
			
		let travel3d_animation = gsap.to(travel3d_clubbys, {
			frame: travel3d_frameCount - 1,
			snap: "frame",
			paused: false,
			repeat: -1,
			ease: "none",
			duration: 0.8,
			scrollTrigger: {
				trigger: ".travel",
				start: "left 120%",
				end: "right -10%",
				containerAnimation: goal_scroll,
				onEnter: function () {
					$(".travel").addClass("on")
				},
				onEnterBack: function () {
					$(".travel").addClass("on")
				},
				onLeave: function () {
					$(".travel").removeClass("on")
				},
				onLeaveBack: function () {
					$(".travel").removeClass("on")
				},
			},
			onUpdate: travel3d_render
		});
			
		let money3d_animation = gsap.to(money3d_clubbys, {
			frame: money3d_frameCount - 1,
			snap: "frame",
			paused: false,
			repeat: -1,
			//yoyo: true,
			ease: "none",
			duration: 0.8,
			scrollTrigger: {
				trigger: ".money",
				start: "left 120%",
				end: "right -10%",
				containerAnimation: goal_scroll,
				onEnter: function () {
					$(".money").addClass("on")
				},
				onEnterBack: function () {
					$(".money").addClass("on")
				},
				onLeave: function () {
					$(".money").removeClass("on")
				},
				onLeaveBack: function () {
					$(".money").removeClass("on")
				},
			},
			onUpdate: money3d_render
		});
			
		let happy3d_animation = gsap.to(happy3d_clubbys, {
			frame: happy3d_frameCount - 1,
			snap: "frame",
			paused: false,
			repeat: -1,
			//yoyo: true,
			ease: "none",
			duration: 0.8,
			scrollTrigger: {
				trigger: ".happy",
				start: "left 150%",
				end: "right -10%",
				containerAnimation: goal_scroll,
				onEnter: function () {
					$(".happy").addClass("on")
				},
				onEnterBack: function () {
					$(".happy").addClass("on")
				},
				onLeave: function () {
					$(".happy").removeClass("on")
				},
				onLeaveBack: function () {
					$(".happy").removeClass("on")
				},
			},
			onUpdate: happy3d_render
		});	

		ScrollTrigger.matchMedia({
			"(min-width: 769px)": function () {
				let penTl = gsap.timeline({
					scrollTrigger: {
						scrub: 1,
						trigger: "section.pen",
						pin: true,
						pinSpacing: true,
						start: "top 0%",
						end: "+=150%",
					}
				});
				penTl.to(pen3d_clubbys, {
					frame: pen3d_frameCount - 1,
					snap: "frame",
					ease: "none",
					//duration: 3,
					onUpdate: pen3d_render
				});
				gsap.utils.toArray(".pen .scroll-title").forEach((penTitle, index) => {
					const w = penTitle.querySelector(".title");
					const [x, xEnd] = (index % 1) ? ['100%', (w.scrollWidth - section.offsetWidth) * 1] : [w.scrollWidth * 0.6, 0];
					gsap.fromTo(w, {
						x
					}, {
						x: xEnd,
						scrollTrigger: {
							trigger: "section.pen",
							start: "top 0%",
							//end: "top 100%",
							scrub: 2,
							invalidateOnRefresh: true,
						}
					});
				});
				gsap.to(".click-to-contact", {
					rotation: 360,
					duration: 3.5,
					repeat: -1,
					ease: "none"
				});
			},
			"(max-width: 768px)": function () {
				let penTl = gsap.timeline({
					scrollTrigger: {
						scrub: 1,
						trigger: "section.pen",
						pin: true,
						pinSpacing: true,
						start: "top 0%",
					}
				});
				penTl.to(pen3d_clubbys, {
					frame: pen3d_frameCount - 1,
					snap: "frame",
					ease: "none",
					duration: 3,
					onUpdate: pen3d_render
				});
				gsap.utils.toArray(".pen .scroll-title").forEach((penTitle, index) => {
					const w = penTitle.querySelector(".title");
					const [x, xEnd] = (index % 2) ? ['100%', (w.scrollWidth - section.offsetWidth) * 1] : [w.scrollWidth * 0.85, 0];
					gsap.fromTo(w, {
						x
					}, {
						x: xEnd,
						scrollTrigger: {
							trigger: "section.pen",
							start: "top 0%",
							end: "top 80%",
							scrub: 4.5,
							duration: 1,
							invalidateOnRefresh: true,
						}
					});
				});

				gsap.to(".contact .title-wrap .ico", {
					rotation: 360,
					duration: 2.5,
					repeat: -1,
					ease: "none"
				});

				gsap.to(".click-to-contact", {
					rotation: 360,
					duration: 2.5,
					repeat: -1,
					ease: "none"
				});

				gsap.to(".click-to-contact", {
					scrollTrigger: {
						trigger: ".anniversary",
						start: "top 80%",
						end: "top 80%",
						scrub: 0.3,
						onEnter: function () {
							$(".click-to-contact").addClass("show")
						},
						onEnterBack: function () {
							$(".click-to-contact").removeClass("show")
						},
					}
				});
			}
		});

		let kit_container = document.querySelector(".kit .h-scroll");
		let kit_panel = gsap.utils.toArray(".kit .h-scroll > div");
		let kit_scroll = gsap.timeline({
			scrollTrigger: {
				pin: true,
				scrub: 2,
				start: "top top",
				trigger: ".kit .h-scroll",
				invalidateOnRefresh: true,
				scroller: scroller,
				pinType: "transform",
				end: () => "+=" + (kit_container.scrollWidth - document.documentElement.clientWidth),
			}
		});
		kit_scroll.to(kit_panel, {
			x: () => -(kit_container.scrollWidth - document.documentElement.clientWidth) +
				"px",
			duration: 1,
			ease: "none",
		});
		kit_scroll.to({}, {
			duration: 0.2
		});

		gsap.utils.toArray(".scroll-title.long").forEach((section, index) => {
			const w = section.querySelector(".title");
			const [x, xEnd] = (index % 2) ? ['100%', (w.scrollWidth - section.offsetWidth) * -1] : [w
				.scrollWidth / 1, 0
			];
			gsap.fromTo(w, {
				x
			}, {
				x: xEnd,
				scrollTrigger: {
					trigger: section,
					start: "top 100%",
					end: "top 10%",
					scrub: 2,
					invalidateOnRefresh: true,
				}
			});
		});

		gsap.utils.toArray(".scroll-title.short").forEach((section2, index) => {
			const w = section2.querySelector(".title");
			const [x, xEnd] = (index % 2) ? ['100%', (w.scrollWidth - section.offsetWidth) * - 10] : [w.scrollWidth / 1, 0
			];
					
			gsap.fromTo(w, {
				x
			}, {
				x: xEnd,
				scrollTrigger: {
					trigger: section2,
					start: "top 100%",
					end: "top 10%",
					scrub: 2,
				}
			});
		});

		gsap.set(".tags .gutter", {
			yPercent: 80,
		})
		let tagTl = gsap.timeline({
			scrollTrigger: {
				trigger: ".tags .gutter",
				scrub: 3,
				start: "top bottom",
				end: "top 0%",
				ease: "power2.out",
			}
		});
		tagTl.to(".tags .gutter", {
			yPercent: 0,
			duration: 1,
		});
		
		gsap.timeline({
			scrollTrigger: {
				trigger: ".tags",
				start: "top top",
				end: "100% top",
				scrub: .5,
			}
		})
		.to(".bg-gradient", {
			yPercent: -85,
			duration: 1
		}, 0);
	
		// 3D MOTION - CHARACTER
		let smiley3d_animation = gsap.to(smiley3d_clubbys, {
			frame: smiley3d_frameCount - 1,
			snap: "frame",
			paused: false,
			repeat: -1,
			ease: "none",
			duration: 1.5,
			scrollTrigger: {
				trigger: ".make .card",
				start: "top bottom",
				onEnter: function () {
					$(".make .card").addClass("on")
				},
				onLeaveBack: function () {
					$(".make .card").removeClass("on")
				},
			},
			onUpdate: smiley3d_render
		});

		gsap.set(".plan-b .text-wrap", {
			yPercent: 60,
		})
		let planTl = gsap.timeline({
			scrollTrigger: {
				trigger: ".plan-b .text-wrap",
				scrub: 2,
				start: "top bottom",
				end: "top 0%",
				ease: "power2.out",
			}
		});
		planTl.to(".plan-b .text-wrap", {
			yPercent: 0,
			duration: 1,
		});

		gsap.set(".plan-b .img-wrap", {
			yPercent: 20,
		})
		let planTl2 = gsap.timeline({
			scrollTrigger: {
				trigger: ".plan-b .img-wrap",
				scrub: 3,
				start: "top bottom",
				end: "top 15%",
				ease: "power2.out",
			}
		});
		planTl2.to(".plan-b .img-wrap", {
			yPercent: 0,
			duration: 1,
		});

		gsap.set(".kit-list > li", {
			yPercent: 0,
		})
		
		const yPercent_vh = (coef) => window.innerHeight * (coef/100);
		ScrollTrigger.matchMedia({
			"(min-width: 769px)": function () {
				let dKit = gsap.timeline({
					scrollTrigger: {
						scrub: 1.5,
						trigger: ".digital-kit",
						pin: true,
						pinSpacing: true,
						start: "top 0%",
						end: "+=230%",
					}
				});
				dKit.to(".kit-list > li.fc-yellow", {
					yPercent: yPercent_vh(-40),
					duration: 1.5,
				},"-=1")
				.to(".kit-list > li.fc-skyblue", {
					yPercent: yPercent_vh(-40),
					duration: 1.5,
				},"-=1")
				.to(".kit-list > li.fc-green", {
					yPercent: yPercent_vh(-40),
					duration: 1.5,
				}, "-=1");
			},
			"(max-width: 768px)": function () {
				let dKit = gsap.timeline({
					scrollTrigger: {
						scrub: 1.5,
						trigger: ".digital-kit",
						pin: true,
						pinSpacing: true,
						start: "top 0%",
						end: "+=230%",
					}
				});
				dKit.to(".kit-list > li.fc-yellow", {
					yPercent: yPercent_vh(-200),
					duration: 1.5,
				},"-=1")
				.to(".kit-list > li.fc-skyblue", {
					yPercent: yPercent_vh(-200),
					duration: 1.5,
				},"-=1")
				.to(".kit-list > li.fc-green", {
					yPercent: yPercent_vh(-200),
					duration: 1.5,
				}, "-=1");
			}
		});
		
		// const kitList = gsap.utils.toArray(".kit-list > li")
		// kitList.forEach((item, index) => {
		// 	gsap.set(kitList, {
		// 		yPercent: 60,
		// 	})
		// 	let kitTl = gsap.timeline({
		// 		scrollTrigger: {
		// 			trigger: item,
		// 			scrub: 2,
		// 			start: "top 100%",
		// 			end: "top 40%",
		// 			ease: "power2.out",
		// 		}
		// 	});
		// 	kitTl.to(item, {
		// 		yPercent: 0,
		// 		duration: 0.5,
		// 	});
		// });

		// gsap.set(".kit-list", {
		// 	yPercent: 0,
		// })
		// let kitTl2 = gsap.timeline({
		// 	scrollTrigger: {
		// 		trigger: ".kit-list",
		// 		scrub: 2,
		// 		start: "top top",
		// 		//end: "top top",
		// 		ease: "power2.out",
		// 	}
		// });
		// kitTl2.to(".kit-list", {
		// 	yPercent: -100,
		// 	duration: 0.5,
		// });

		gsap.set(".download .bg", {
			yPercent: 0,
		});
		gsap.timeline({
			defaults: {
				ease: "none"
			},
			scrollTrigger: {
				trigger: ".download .bg",
				start: "top 70%",
				end: "+top 10%",
				scrub: 1,
			}
		})
			.to(".download .bg", {
				duration: 0.5,
				yPercent: -80,
			});
				
		gsap.set(".download .text-wrap", {
			yPercent: 0,
		});
		gsap.set(".download .form-area", {
			yPercent: 120,
		});
		gsap.timeline({
			defaults: {
				ease: "none"
			},
			scrollTrigger: {
				trigger: ".download-wrap",
				start: "top top",
				end: "+=120%",
				pin: true,
				scrub: 0.3,
				pinType: "transform",
			}
		}).to(".download .form-area", {
			duration: 1,
			yPercent: 0,
		});

			gsap.set(".make .text-wrap", {
					yPercent: 60,
				})
				let makeTl = gsap.timeline({
					scrollTrigger: {
						trigger: ".make .text-wrap",
						scrub: 2,
						start: "top bottom",
						end: "top 0%",
						ease: "power2.out",
					}
				});
				makeTl.to(".make .text-wrap", {
					yPercent: 0,
					duration: 1,
				});
	
			ScrollTrigger.matchMedia({
				"(min-width: 769px)": function () {
					gsap.set(".kit .text-wrap", {
						yPercent: 0,
					})
					let kitTextTl = gsap.timeline({
						scrollTrigger: {
							trigger: ".kit .text-wrap",
							scrub: 2,
							start: "top 150%",
							end: "top 70%",
							ease: "power2.out",
						}
					});
					kitTextTl.to(".kit .text-wrap", {
						yPercent: -10,
						duration: 1,
					});
				},
				"(max-width: 768px)": function () {
					gsap.set(".kit .text-wrap", {
						yPercent: 30,
					})
					let kitTextTl = gsap.timeline({
						scrollTrigger: {
							trigger: ".kit .text-wrap",
							scrub: 2,
							start: "top bottom",
							end: "top top",
							ease: "power2.out",
						}
					});
					kitTextTl.to(".kit .text-wrap", {
						yPercent: 0,
						duration: 1,
					});
	
				}
			})

				
				gsap.set(".contact .text-wrap", {
					yPercent: 20,
				})
				let contactTextTl = gsap.timeline({
					scrollTrigger: {
						trigger: ".contact .text-wrap",
						scrub: 2,
						start: "top bottom",
						end: "top top",
						ease: "power2.out",
					}
				});
				contactTextTl.to(".contact .text-wrap", {
					yPercent: -20,
					duration: 1,
				});
			
				gsap.set(".contact .title-wrap", {
					yPercent: 20,
				})
				let contactTitleTl = gsap.timeline({
					scrollTrigger: {
						trigger: ".contact .title-wrap",
						scrub: 2,
						start: "top bottom",
						end: "top top",
						ease: "power2.out",
					}
				});
				contactTitleTl.to(".contact .title-wrap", {
					yPercent: -20,
					duration: 1,
				});

		gsap.to(".click-to-contact", {
			scrollTrigger: {
				trigger: ".contact .title-wrap",
				start: "top bottom",
				end: "top bottom",
				scrub: 0.3,
				onEnter: function () {
					$(".click-to-contact").removeClass("show").addClass("hide")
				},
				onEnterBack: function () {
					$(".click-to-contact").addClass("show").removeClass("hide")
				},
			}
		});

		gsap.set(".layer-content > section", {
			zIndex: (i, target, targets) => targets.length - i
		});

		gsap.to(".kit .img-wrap.ani", {
			rotation: 360,
			duration: 3.5,
			repeat: -1,
			ease: "none"
		});

		// 3D MOTION - CHARACTER
		let character3d_animation = gsap.to(character3d_clubbys, {
			frame: character3d_frameCount - 1,
			snap: "frame",
			paused: false,
			repeat: -1,
			ease: "power2.out",
			duration: 1.5,
			scrollTrigger: {
				trigger: ".together .gutter-100",
				start: "top top",
				onEnter: function () {
					$(".together").addClass("on")
				},
				onLeaveBack: function () {
					$(".together").removeClass("on")
				},
			},
			onUpdate: character3d_render
		});
		
		ScrollTrigger.matchMedia({
			"(min-width: 769px)": function () {
				gsap.to(".layer-content > section", {
					yPercent: -100,
					ease: "none",
					stagger: 0.5,
					scrollTrigger: {
						trigger: ".layer-content",
						end: "+=200%",
						scrub: 1.5,
						pin: true,
						pinType: "transform",
						invalidateOnRefresh: true
					}
				});
			},
			"(max-width: 768px)": function () {
				gsap.to(".layer-content > section", {
					yPercent: -140,
					ease: "none",
					stagger: 0.5,
					scrollTrigger: {
						trigger: ".layer-content",
						end: "+=200%",
						scrub: 2.5,
						pin: true,
						pinType: "transform",
						invalidateOnRefresh: true
					}
				});
			}
		});
		// mouse cursor
		entryPointer();
		function entryPointer() {
			const cursor = document.querySelector('#cursorContact');
			const cursorCircle = cursor.querySelector('.cursor__circle');
			const mouse = {
				x: -100,
				y: -100
			};
			const pos = {
				x: 0,
				y: 0
			};
			const speed = 0.1;
			const updateCoordinates = e => {
				mouse.x = e.clientX;
				mouse.y = e.clientY;
			}
			window.addEventListener('mousemove', updateCoordinates);
			function getAngle(diffX, diffY) {
				return Math.atan2(diffY, diffX) * 180 / Math.PI;
			}
			function getSqueeze(diffX, diffY) {
				const distance = Math.sqrt(
					Math.pow(diffX, 2) + Math.pow(diffY, 2)
				);
				const maxSqueeze = 0.15;
				const accelerator = 1500;
				return Math.min(distance / accelerator, maxSqueeze);
			}
			const updateCursor = () => {
				const diffX = Math.round(mouse.x - pos.x);
				const diffY = Math.round(mouse.y - pos.y);
				pos.x += diffX * speed;
				pos.y += diffY * speed;
				const angle = getAngle(diffX, diffY);
				const squeeze = getSqueeze(diffX, diffY);
				const translate = 'translate3d(' + pos.x + 'px ,' + pos.y + 'px, 0)';
				cursor.style.transform = translate;
			};
			function loop() {
				updateCursor();
				requestAnimationFrame(loop);
			}
			requestAnimationFrame(loop);
			const cursorModifiers = document.querySelectorAll('[cursor-class]');
			cursorModifiers.forEach(curosrModifier => {
				curosrModifier.addEventListener('mouseenter', function () {
					const attribute = this.getAttribute('cursor-class');
					cursor.classList.add(attribute);
				});
				curosrModifier.addEventListener('mouseleave', function () {
					const attribute = this.getAttribute('cursor-class');
					cursor.classList.remove(attribute);
				});
			});
		}
	}, 5500);
	
	ScrollTrigger.refresh();
	ScrollTrigger.config({
		ignoreMobileResize: true
	});
});