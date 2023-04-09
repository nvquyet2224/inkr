// Detect Mobile
var ua = navigator.userAgent;
var isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
	ua
);

// Events Common
function fsEvent() {

	$('.menu_toggler').on('click', function () {
		if ($('.nav-menu').hasClass('show')) {
			$('.nav-menu').removeClass('show');
			$('body').removeClass('fs-no-scroll');
		} else {
			$('.nav-menu').addClass('show');
			$('body').addClass('fs-no-scroll');
		}
	});

	$('.close-menu').on('click', function () {
		$('.nav-menu').removeClass('show');
		$('body').removeClass('fs-no-scroll');
	});

}

// Variables for Scroll
var isCroll = false,
	scrollPos = 0,
	threshold = 500;

// LazyLoad
function ImgLazyLoad() {

	lazyImages = window.innerWidth > 840 ? document.querySelectorAll('.cmPic.fs-lazy, .pcPic.fs-lazy') : document.querySelectorAll('.cmPic.fs-lazy, .spPic.fs-lazy');

	// Lazy images
	[].slice.call(lazyImages).forEach(function (elm) {
		elm.setAttribute('src', elm.getAttribute('data-src'));
		elm.classList.remove('fs-lazy');
	});
}


var oldPost = 0;

var documentHeight,
	windowHeight,
	scrollTop;

var timeline;
timeline = new TimelineMax({ paused: true });

if ((window.innerWidth > 1000 && window.innerHeight > 1300) || (window.innerWidth < 1380 && window.innerHeight > 960)) {
	timeline.staggerFromTo('.fs-card-2 .pcPic.card2-human', 0.8, { width: '90%', y: 0 }, { width: '300%', y: 0 }, 0.2, 'start');
} else if (window.innerWidth < 840) {
	timeline.staggerFromTo('.fs-card-2 .spPic.card2-human', 1, { scale: 0.9, y: -30 }, { scale: 2, y: 200 }, 0.2, 'start');
	timeline.staggerFromTo('.fs-card-2 .card2-shadow', 0.5, { opacity: 0 }, { opacity: 1 }, 0.2, 'start');
} else {
	timeline.staggerFromTo('.pcPic.card2-human', 2, { width: '90%', y: 0 }, { width: '300%', y: 0 }, 0.2, 'start');
}


// Func Scroll
var speed = 10;

var ellipse,
	ellipseMin,
	ellipseMax;

var discover,
	discoverMin,
	discoverMax,
	discoverFade,
	discoverFadeMin,
	discoverFadeMax;

var card2Fade,
	card2FadeMin,
	card2FadeMax;

var fireHuman,
	fireMin,
	fireMax;

var wolf,
	wolfMin,
	wolfMax;

var cherryHero,
	cherryHeroMin,
	cherryHeroMax,
	sakuraX,
	sakuraXMax,
	sakuraXMin,
	sakuraY,
	sakuraYMax,
	sakuraYMin;

var skeleton,
	skeletonMin,
	skeletonMax;

var phone,
	phoneMax,
	phoneMin;

var cardClock2,
	cardClock2Max,
	cardClock2Min;

var cardClock3,
	cardClock3Max,
	cardClock3Min;

var curl,
	curlMax,
	curlMin;

var opacityTop1,
	card1Top,
	card1TopMove,
	opacityTop2,
	card2Top,
	card2TopMove,
	opacityTop3,
	card3Top,
	card3TopMove;


function initAni() {

	if (window.innerWidth < 840) {
		speed = 1;
	}
	ellipse = 0;
	ellipseMin = -100;
	ellipseMax = 0;

	if (window.innerWidth < 840) {
		ellipseMin = -150;
	}
	$('.ellipse-point-1, .ellipse-point-2').css({ 'transform': 'translateY(' + ellipse + 'px)' });

	discover = 0;
	discoverMin = 0;
	discoverMax = 150;
	discoverFade = 0.3;
	discoverFadeMin = 0.3;
	discoverFadeMax = 1;
	$('.img-discover-sp').css({ 'transform': 'translateY(' + discover + 'px)', 'opacity': discoverFade });

	card2Fade = 0;
	card2FadeMin = 0;
	card2FadeMax = 1;

	fireHuman = 0;
	fireMin = -20;
	fireMax = 60;
	if (window.innerWidth > 840) {
		fireHuman = 80;
		fireMin = 0;
		fireMax = 80;
	}
	//$('.item-await-1 .human-pic').css({ 'transform': 'translateY(' + fireHuman + 'px)' });


	wolf = -100;
	wolfMin = -100;
	wolfMax = 100;

	$('.wolf-sp').css({ 'transform': 'translateY(' + wolf + 'px)' });

	cherryHero = 100;
	cherryHeroMin = -20;
	cherryHeroMax = 100;
	sakuraX = 0;
	sakuraXMax = 0;
	sakuraXMin = -800;
	sakuraY = 0;
	sakuraYMax = 100;
	sakuraYMin = 0;

	if (window.innerWidth > 840) {
		cherryHero = 120;
		cherryHeroMin = 0;
		cherryHeroMax = 120;
	}

	if (window.innerWidth < 840) {
		sakuraXMin = -800;
		sakuraYMax = 50;
	}

	$('.item-await-2 .sakura').css({ 'transform': 'translate(' + sakuraX + 'px, ' + sakuraY + 'px)' });
	//$('.cherry-herro').css({ 'transform': 'translateY(' + cherryHero + 'px)' });

	skeleton = 80;
	skeletonMin = -20;
	skeletonMax = 80;
	$('.skeleton img').css({ 'transform': 'translateY(' + skeleton + 'px)' });

	phone = 0;
	phoneMax = 0;
	phoneMin = -170;
	if (window.innerWidth < 840) {
		phoneMin = -140;
	}
	$('.fs-phone-inr img').css({ 'transform': 'translateY(' + phone + 'px)' });

	cardClock2 = 0;
	cardClock2Max = 0;
	cardClock2Min = -480;
	cardClock3 = 0;
	cardClock3Max = 0;
	cardClock3Min = -466;

	curl = 0;
	curlMax = 1;
	curlMin = 0;

	$('.conner-book').css({ 'transform': 'scale(' + curl + ')' });

}

function fadeObject() {
	[].slice.call(document.querySelectorAll('.fs-card-8, .fs-card-3 .outer-txt, .fs-card-3 .fs-banner-box, .fs-card-1, .fs-card-9, .fs-section-content-lineup, .fs-section-awaits, .fs-card.fs-card-1 .outer-txt, .fs-card.fs-card-2 .outer-txt, .fs-card.fs-card-4 .outer-txt, .fs-card.fs-card-5 .outer-txt, .fs-card.fs-card-6 .outer-txt, .fs-card.fs-card-7 .outer-txt')).forEach(function (elm) {
		if (Math.abs(elm.getBoundingClientRect().top) <= $(window).height()) {
			$(elm).addClass('fs-ani');
		}
	});

	[].slice.call(document.querySelectorAll('.fs-card-1, .fs-card-2, .fs-card-3, .fs-card-4, .fs-card-5, .fs-card-6, .fs-card-7, .fs-card-8, .fs-card-9')).forEach(function (elm) {
		if (elm.getBoundingClientRect().top <= $(window).height()) {
			$(elm).addClass('fs-ani');
		} else {
			$(elm).removeClass('fs-ani');
		}
	});

	[].slice.call(document.querySelectorAll('.item-await-1, .item-await-2, .item-await-3')).forEach(function (elm) {
		if (elm.getBoundingClientRect().top < 4 / 5 * $(window).height()) {
			$(elm).addClass('fs-ani');
		} else {
			$(elm).removeClass('fs-ani');
		}
	});
	[].slice.call(document.querySelectorAll('.item-await-1 .box, .item-await-2 .box, .item-await-3 .box')).forEach(function (elm) {
		if (elm.getBoundingClientRect().top < $(window).height() - 70) {
			$(elm).addClass('fs-ani');
		} else {
			$(elm).removeClass('fs-ani');
		}
	});

	[].slice.call(document.querySelectorAll('.fs-section-content-lineup, .fs-intro .fs-box, .fs-card-1 .outer-txt, .fs-card-2 .outer-txt, .fs-card-3 .fs-box, .fs-card-4 .outer-txt, .fs-card-5 .outer-txt, .fs-card-6 .outer-txt, .fs-card-7 .outer-txt, .fs-card-8 .outer-txt, .fs-card-9 .fs-area-txt , .fs-card-9 .outer-txt, .fs-section-awaits .fs-title')).forEach(function (elm) {
		if (Math.abs(elm.getBoundingClientRect().top) <= $(window).height()) {
			$(elm).addClass('fs-ani');
		}
	});


}

var scrollPercent = 0;

function onScroll() {

	if (isCroll) {
		scrollTop = $(window).scrollTop();
		scrollPercent = ((scrollTop) / (documentHeight - windowHeight)) * speed;

		var documentH = $(document).height() - $(window).height();
		var windowH = $(window).height();
		var percent = scrollTop / documentH;



		fadeObject();

		[].slice.call(document.querySelectorAll('.fs-intro')).forEach(function (elm) {
			var ellipseSpeed = 10;
			if (window.innerWidth > 840) {
				ellipseSpeed = 5;
			}
			if (oldPost < scrollTop) {
				ellipse = ellipse - scrollPercent * ellipseSpeed;
			} else {
				ellipse = ellipse + scrollPercent * ellipseSpeed;
			}
			ellipse = ellipse > ellipseMax ? ellipseMax : ellipse;
			ellipse = ellipse < ellipseMin ? ellipseMin : ellipse;
			$('.ellipse-point-1, .ellipse-point-2').css({ 'transform': 'translateY(' + ellipse + 'px)' });
		});

		[].slice.call(document.querySelectorAll('.fs-card-1')).forEach(function (elm) {

			if (window.innerWidth > 840) {
				if (Math.abs(elm.getBoundingClientRect().top) <= $(window).height()) {
					var discoverSp = 2;
					var discoverH = (windowH - $('.fs-card-1').height());
					var discoverT = discoverH * percent * discoverSp;
					var discoverF = 0.3 + 7 * (scrollTop / documentH) * discoverSp;
					$('.img-discover').css({ 'transform': 'translateY(' + discoverT + 'px)', 'opacity': discoverF });
				}

			} else {

				var discoverSpeed = 1.5;
				var discoverFadeSpeed = 10;
				if (window.innerWidth < 840) {
					discoverSpeed = 3;
					discoverFadeSpeed = 1;
				}

				if (Math.abs(elm.getBoundingClientRect().top) <= $(window).height() - 200) {

					if (oldPost <= scrollTop) {
						discover = discover + scrollPercent * discoverSpeed;
						discoverFade = discoverFade + scrollPercent * discoverFadeSpeed;

					} else {
						discover = discover - scrollPercent * discoverSpeed;
					}

					discover = discover > discoverMax ? discoverMax : discover;
					discover = discover < discoverMin ? discoverMin : discover;

					discoverFade = discoverFade > discoverFadeMax ? discoverFadeMax : discoverFade;

					$('.img-discover-sp').css({ 'transform': 'translateY(' + discover + 'px)', 'opacity': discoverFade });

				}

				//Reset
				if (oldPost > scrollTop) {
					if (scrollTop <= 20) {
						while (discoverFade >= 0.3) {
							discoverFade = discoverFade - 0.03990142002112428;
							$('.img-discover-sp').css({ 'opacity': discoverFade });
						}
					}
				}
			}

		});

		[].slice.call(document.querySelectorAll('.fs-card-2')).forEach(function (elm) {

			if (Math.abs(elm.getBoundingClientRect().top) <= $(window).height() + 100) {
				timeline.progress(scrollPercent / speed).pause();
			}

			if (Math.abs(elm.getBoundingClientRect().top) <= $(window).height()) {
				var card2FadeSpeed = 10;
				if (window.innerWidth < 840) {
					card2FadeSpeed = 0.3;
				}
				if (oldPost <= scrollTop) {
					card2Fade = card2Fade + scrollPercent * card2FadeSpeed;
				} else {
					card2Fade = card2Fade - scrollPercent * card2FadeSpeed;
				}

				card2Fade = card2Fade > card2FadeMax ? card2FadeMax : card2Fade;
				card2Fade = card2Fade < card2FadeMin ? card2FadeMin : card2Fade;
			}

		});

		[].slice.call(document.querySelectorAll('.fs-card-3')).forEach(function (elm) {
			if (Math.abs(elm.getBoundingClientRect().top) <= $(window).height() - 100) {
				$(elm).addClass('fs-ani');
			}
		});

		[].slice.call(document.querySelectorAll('.fs-card-4')).forEach(function (elm) {

			if (Math.abs(elm.getBoundingClientRect().top) <= windowH) {
				var per = ((windowH - elm.getBoundingClientRect().top) / windowH) * 8;
				$('.wolf').css({ 'transform': 'translateY(' + -per + '%)' });
			}

			if (Math.abs(elm.getBoundingClientRect().top) <= $(window).height()) {

				$(elm).addClass('fs-ani');

				if (window.innerWidth < 840) {
					if (Math.abs(elm.getBoundingClientRect().top) <= $(window).height() + 200) {
						if (oldPost <= scrollTop) {
							wolf = wolf + scrollPercent * 0.5;
						} else {
							wolf = wolf - scrollPercent * 0.5;
						}
						wolf = wolf > wolfMax ? wolfMax : wolf;
						wolf = wolf < wolfMin ? wolfMin : wolf;

						$('.wolf-sp').css({ 'transform': 'translateY(' + wolf + 'px)' });
					}
				}

			}

		});

		[].slice.call(document.querySelectorAll('.fs-card-5')).forEach(function (elm) {

			if (Math.abs(elm.getBoundingClientRect().top) <= $(window).height()) {
				$(elm).addClass('fs-ani');
			}

			var adapDelta = -100;
			if (window.innerWidth >= 840) {
				adapDelta = 0;
			}

			var phoneSpeed = 1;
			var curlSpeed = 0.005;

			if (window.innerWidth < 840) {
				phoneSpeed = 0.5;
				curlSpeed = 0.01;

				if (Math.abs(elm.getBoundingClientRect().top) <= $(window).height() + adapDelta) {

					if (oldPost <= scrollTop) {
						phone = phone - scrollPercent * phoneSpeed;
						curl = curl + scrollPercent * curlSpeed;
					} else {
						phone = phone + scrollPercent * phoneSpeed;
						curl = curl - scrollPercent * curlSpeed;
					}

					phone = phone > phoneMax ? phoneMax : phone;
					phone = phone < phoneMin ? phoneMin : phone;

					curl = curl > curlMax ? curlMax : curl;
					curl = curl < curlMin ? curlMin : curl;

					$('.fs-phone-inr img').css({ 'transform': 'translateY(' + phone + 'px)' });
					$('.conner-book').css({ 'transform': 'scale(' + curl + ')' });

				}

			} else {

				if (Math.abs(elm.getBoundingClientRect().top) <= $(window).height() + adapDelta) {

					if (elm.getBoundingClientRect().top <= (windowH - 100)) {
						var perCurl = ((windowH - elm.getBoundingClientRect().top) / (windowH - 100));
						perCurl = perCurl > 1.2 ? 1.2 : perCurl;
						perCurl = perCurl < 0 ? 0 : perCurl;
						$('.conner-book').css({ 'transform': 'scale(' + perCurl + ')' });
					}
				}
				if (elm.getBoundingClientRect().top <= (windowH - 0.25 * windowH)) {
					var per = ((windowH - elm.getBoundingClientRect().top) / (0.25 * windowH)) * 28;
					per = per > 150 ? 150 : per;
					$('.fs-phone-inr img').css({ 'transform': 'translateY(' + -per + 'px)' });
				}

			}


		});

		[].slice.call(document.querySelectorAll('.fs-card-7')).forEach(function (elm) {
			if (Math.abs(elm.getBoundingClientRect().top) <= $(window).height()) {
				$(elm).addClass('fs-ani');
			}
			if (Math.abs(elm.getBoundingClientRect().top) <= (windowH - (0.45 * windowH))) {
				var per = ((0.8 * windowH) - elm.getBoundingClientRect().top) / (0.45 * windowH);

				var scalePer = window.innerWidth > 840 ? 0.8 : 0.7;
				var scaleMax = window.innerWidth > 840 ? 1.1 : 1;
				var scaleMin = window.innerWidth > 840 ? 0.9 : 0.8;

				//var scale = 0.2 * per + 0.8;
				var scale = 0.2 * per + scalePer;
				scale = scale >= scaleMax ? scaleMax : scale;
				scale = scale <= scaleMin ? scaleMin : scale;

				var moveX = 30 * (1 - (per - 1 / 2));

				moveX = moveX > 30 ? 30 : moveX;
				moveX = moveX <= 0 ? 0 : moveX;

				$('.fs-add-title').css({ 'transform': 'translateX(' + moveX + 'px) scale(' + scale + ')' });

				$('.wei-lan').css({ 'transform': 'scale(' + scale + ')' });

			}

		});

		[].slice.call(document.querySelectorAll('.item-await-1')).forEach(function (elm) {

			var elmH = $('.item-await-1').height();
			var x = elm.getBoundingClientRect().top;
			var windowScrollPercent = 1 - ((x + elmH) / (windowH + elmH)); // [0->1]

			// if (Math.abs(elm.getBoundingClientRect().top) <= $(window).height() - 100) {
			// 	$(elm).addClass('fs-ani');
			// }


			// human animation
			if (window.innerWidth < 840) {
				if (Math.abs(elm.getBoundingClientRect().top) <= $(window).height() + 100) {
					var fireHuman = 120 * windowScrollPercent;
					$('.item-await-1 .human-pic').css({ 'transform': 'translateY(' + -fireHuman + 'px)' });
				}
			} else {
				if (Math.abs(elm.getBoundingClientRect().top) <= $(window).height()) {
					var fireHuman = 80 * windowScrollPercent;
					$('.item-await-1 .human-pic').css({ 'transform': 'translateY(' + -fireHuman + 'px)' });
				}
			}

			// fire animation
			if (window.innerWidth < 840) {
				if (Math.abs(elm.getBoundingClientRect().top) <= $(window).height() + 100) {
					var rotate = 25 * windowScrollPercent; // rorate 0->25 deg
					var scale = 0.12 * windowScrollPercent + 0.88; // scale 0.88->1
					$('.fire-rotate img').css({ 'transform': 'rotate(' + rotate + 'deg) scale(' + scale + ')' });
				}
			} else {
				if (Math.abs(elm.getBoundingClientRect().top) <= $(window).height()) {
					var rotate = 20 * windowScrollPercent;
					$('.img-fire-pc img').css({ 'transform': 'rotate(' + rotate + 'deg)' });
				}
			}

		});

		[].slice.call(document.querySelectorAll('.item-await-2')).forEach(function (elm) {

			var elmH = $('.item-await-2').height();
			var x = elm.getBoundingClientRect().top;
			var windowScrollPercent = 1 - ((x + elmH) / (windowH + elmH)); // [0->1]

			if (window.innerWidth < 840) {
				if (Math.abs(elm.getBoundingClientRect().top) <= $(window).height()) {
					var cherryHero = 95 * windowScrollPercent; // translateY 0->75 px
					var sakuraX = 250 * windowScrollPercent; // translateX 0->250 px
					var sakuraY = 170 * windowScrollPercent; // translateY 0->170 px
					$('.cherry-herro').css({ 'transform': 'translateY(' + -cherryHero + 'px)' });
					$('.item-await-2 .sakura').css({ 'transform': 'translate(' + -sakuraX + 'px, ' + sakuraY + 'px)' });
				}
			} else {
				if (Math.abs(elm.getBoundingClientRect().top) <= $(window).height()) {
					var cherryHero = 80 * windowScrollPercent; // translateY 0->80 px
					var sakuraX = 150 * windowScrollPercent; // translateX 0->80 px
					var sakuraY = 100 * windowScrollPercent; // translateY 0->80 px
					$('.cherry-herro').css({ 'transform': 'translateY(' + -cherryHero + 'px)' });
					$('.item-await-2 .sakura').css({ 'transform': 'translate(' + -sakuraX + 'px, ' + sakuraY + 'px)' });
				}
			}

		});

		[].slice.call(document.querySelectorAll('.item-await-3')).forEach(function (elm) {

			var elmH = $('.item-await-3').height();
			var x = elm.getBoundingClientRect().top;
			var windowScrollPercent = 1 - ((x + elmH) / (windowH + elmH));

			if (window.innerWidth < 840) {
				if (Math.abs(elm.getBoundingClientRect().top) <= $(window).height() - 100) {
					var skeleton = 80 * windowScrollPercent;
					$('.skeleton img').css({ 'transform': 'translateY(' + -skeleton + 'px)' });
				}
			} else {
				if (Math.abs(elm.getBoundingClientRect().top) <= $(window).height()) {
					var skeleton = 80 * windowScrollPercent;
					$('.skeleton img').css({ 'transform': 'translateY(' + -skeleton + 'px)' });
				}
			}

			
			if (elm.getBoundingClientRect().top <= windowH) {

				var batXMax = 100;
				var batYMax = 740;
				var batZmax = 30;

				batYMax = window.innerWidth > 840 ? 740 : 520;
				batZmax = window.innerWidth > 840 ? 30 : 80;


				var batX = batXMax * windowScrollPercent;
				var batY = batYMax * windowScrollPercent;
				var batZ = batZmax * windowScrollPercent;

				if (window.innerWidth < 840) {
					$('.item-await-3 .bat').css({ 'transform': 'translateX(' + batX + 'px) translateY(' + -batY + 'px) rotateZ(' + batZ + 'deg)' });
				} else {
					$('.item-await-3 .bat').css({ 'transform': 'translateY(' + -batY + 'px) rotateZ(' + batZ + 'deg)' });
				}
			}

		});

		[].slice.call(document.querySelectorAll('.fs-card-6')).forEach(function (elm) {

			if (Math.abs(elm.getBoundingClientRect().top) <= $(window).height()) {


				card1TopMove = $('.card-img-01').offset().top;
				card2TopMove = $('.card-img-02').offset().top;

				var delTop1 = card1Top / card1TopMove;
				var delTop2 = card2Top / card2TopMove;

				var translateX1 = -(delTop1 * 100) + 100;
				var translateY1 = -(delTop1 * 300) + 300;
				var translateX2 = -(delTop2 * 100) + 100;
				var translateY2 = -(delTop2 * 280) + 280;

				if (card1TopMove > card1Top) {
					$('.card-img-01 img').css({ 'transform': 'scale(' + delTop1 + ') translate(' + translateX1 + 'px,' + -translateY1 + 'px)' });
				}
				if (card2TopMove > card2Top) {
					$('.card-img-02 img').css({ 'transform': 'scale(' + delTop2 + ') translate(' + translateX2 + 'px,' + -translateY2 + 'px)' });
				}


			}


		});

		[].slice.call(document.querySelectorAll('.fs-card-6')).forEach(function (elm) {

			// Card2
			if (Math.abs(elm.getBoundingClientRect().top) <= windowH) {

				var card1X = 0;
				var card1Y = 0;
				var scale1 = 1;

				var card2X = 0;
				var card2Y = 0;
				var scale2 = 1;

				//Card2
				if (elm.getBoundingClientRect().top <= windowH / 2) {

					var per = (((windowH / 2) / elm.getBoundingClientRect().top) - 1) * 100;
					per = Math.abs(per);

					cardClock2 = per // > 0 ? per : cardClock2;

					cardClock2 = cardClock2 >= 104 ? 104 : cardClock2;
					cardClock2 = cardClock2 <= 0 ? 0 : cardClock2;

					$('.card-img-pc-02').css({ 'transform': 'translate(0, ' + -cardClock2 + '%)' });
					$('.card-img-pc-03').css({ 'transform': 'translate(0, ' + -cardClock2 + '%)' });


					//Image1 move
					card1X = (per * 8) / 100;
					card1Y = (per * 12) / 100;

					card1X = card1X >= 8 ? 8 : card1X;
					card1Y = card1Y >= 12 ? 12 : card1Y;

					$('.card-img-pc-01 img').css({ 'transform': 'scale(' + scale1 + ') translate(' + card1X + 'px,' + -card1Y + 'px)' });


				}

				// Card3
				if (elm.getBoundingClientRect().top < windowH / 4) {

					var per = (((windowH / 4) / elm.getBoundingClientRect().top) - 1) * 100;

					per = Math.abs(per);

					cardClock3 = per; //> 0 ? per : cardClock3;

					cardClock3 = cardClock3 >= 108 ? 108 : cardClock3;
					cardClock3 = cardClock3 <= 0 ? 0 : cardClock3;

					$('.card-img-pc-03').css({ 'transform': 'translate(0, ' + -(cardClock3 + 100) + '%)' });

					card1X = 8 + (per * 16) / 100;
					card1Y = 12 + (per * 12) / 100;


					card1X = card1X > 24 ? 24 : card1X;
					card1Y = card1Y > 24 ? 24 : card1Y;


					$('.card-img-pc-01 img').css({ 'transform': 'scale(' + scale1 + ') translate(' + card1X + 'px,' + -card1Y + 'px)' });

					card2X = (per * 8) / 100;
					card2Y = (per * 12) / 100;

					card2X = card2X >= 8 ? 8 : card2X;
					card2Y = card2Y >= 12 ? 12 : card2Y;

					$('.card-img-pc-02 img').css({ 'transform': 'scale(' + scale2 + ') translate(' + card2X + 'px,' + -card2Y + 'px)' });

				}

			}

		});


		if ($(window).scrollTop() > 150) {
			$('.header_fixed').addClass('fixed');
		} else {
			$('.header_fixed').removeClass('fixed');
		}

		oldPost = scrollTop;

	}

	ImgLazyLoad();


}

var playing = false;
// Func Resize
function Resize() {

	// Need detect not mobile when resize because in mobile scrolling call resize
	if (!isMobile) {
		if (isCroll) {
			setTimeout(function () {
				initAni();
			}, 100);
			ImgLazyLoad();
		}
	}

}

function Rotate() {
	setTimeout(function () {
		initAni();
	}, 100);
	ImgLazyLoad();
}

// Set Scroll for Page
$(window).on('scroll', onScroll);

// Page Rezize
$(window).on('resize', Resize);

// Page Rotate
$(window).on('orientationchange', Rotate);

var loading = true;
function starPage() {

	if (loading) {
		loading = false;
		fadeObject();
		initAni();
		$('html,body').scrollTop(0);
		$('.fs-loading').fadeOut(500, function () {
			isCroll = true;
			onScroll();
			setTimeout(function () {
				card1Top = $('.card-img-01').offset().top;
				card2Top = $('.card-img-02').offset().top;
				card3Top = $('.card-img-03').offset().top;
			}, 1500);
			$('.fs-loading').remove();
		});
	}
}

//  Page load
$(window).on('load', function () {
	if (loading) {
		starPage();
	}

});

$(window).on('beforeunload', function () {
	$(window).scrollTop(0);
});


// Page Ready
(function () {
	documentHeight = $(document).height();
	windowHeight = $(window).height();
	scrollTop = $(window).scrollTop();
	$('html,body').scrollTop(0);

	ImgLazyLoad(); // must be call here fisrt
	fsEvent();

	setTimeout(function () {
		if (loading) {
			starPage();
		}
	}, 2000);

})();
