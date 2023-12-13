document
  .querySelector(".transition_wrapper__loading")
  .classList.add("transition_loading");

function navAnimation() {
  document.querySelector(".header_logo--link").style = "--delay:0.65s";
  document.querySelector(".animation_moveUp_mobi--label").style = `--delay:.7s`;
  document
    .querySelectorAll(".header_nav--links li .header_nav--label")
    .forEach(function (elm, index) {
      const delay = ((index + 1) * 0.05 + 0.65).toFixed(2) + "s";
      elm.style = `--delay: ${delay}`;
    });

  // Nav Animation
  let O = false;
  let P = false;

  const M = gsap.timeline({
    paused: true,
    onStart: () => {
      O = true;
    },
    onComplete: () => {
      P = false;
      O = false;
    },
  });

  const L = gsap.timeline({
    paused: true,
    onStart: () => {
      O = true;
    },
    onComplete: () => {
      P = true;
      O = false;
    },
  });

  const btnMenu = document.querySelector(".nav_menuBtn");

  if (window.innerWidth > 480) {
    btnMenu.style.pointerEvents = "none";
    const menu = document.querySelector(".header_nav--links");
    const link = document.querySelectorAll(".header_nav--text");
    const toggle = document.querySelectorAll(".nav_menuBtn--label");
    M.to(link, {
      y: "-120%",
      duration: 0.3,
      stagger: 0.05,
      ease: "quartOut",
      onStart: () => {
        menu.style.pointerEvents = "none";
      },
    }).to(
      toggle,
      {
        y: "0%",
        duration: 0.3,
        delay: 0.4,
        ease: "quartOut",
        onComplete: () => {
          btnMenu.style.pointerEvents = "all";
        },
      },
      "<"
    ),
      L.to(toggle, {
        y: "120%",
        duration: 0.3,
        ease: "quartOut",
        onStart: () => {
          O = true;
          btnMenu.style.pointerEvents = "none";
        },
      }).to(
        link,
        {
          y: "0%",
          duration: 0.3,
          stagger: -0.05,
          delay: 0.1,
          ease: "quartOut",
          onComplete: () => {
            P = true;
            O = false;
            menu.style.pointerEvents = "all";
          },
        },
        "<"
      ),
      ScrollTrigger.create({
        start: "clamp(0% 0%-=2px)",
        onEnter: () => {
          if (window.innerWidth > 480) {
            if (!O) {
              P = true;
              M.play(0);
            } else {
              setTimeout(function () {
                if (!O && P) {
                  M.play(0);
                }
              }, 700);
            }
          }
        },
        onLeaveBack: () => {
          if (window.innerWidth > 480) {
            if (!O) {
              if (!P) {
                L.play(0);
              } else {
                if (!O && !P) {
                  L.play(0);
                }
              }
            }
          }
        },
      }),
      ScrollTrigger.addEventListener("scrollStart", () => {
        if (window.innerWidth > 480) {
          if (window.scrollY > 2 && !O && P) {
            M.play(0);
          }
        }
      });
  }

  if (window.innerWidth < 481) {
    btnMenu.style.pointerEvents = "all";
    const bgMenu = document.querySelector(".nav_bg--sp");
    const closeMenu = document.querySelector(".nav_menuBtn--close");
    const openMenu = document.querySelector(".nav_menuBtn--label");
    const link = document.querySelectorAll(".header_nav--text");
    const tagline = document.querySelectorAll(".header_nav--tagline");

    L.to(bgMenu, {
      y: 0,
      duration: 1,
      ease: "quartOut",
      onStart: () => {
        console.log("onStart menu");
        //null == y || y.stop(),
        //t.style.pointerEvents = "all"
      },
    })
      .to(
        closeMenu,
        {
          y: "0%",
          duration: 0.3,
          ease: "quartOut",
        },
        "<"
      )
      .to(
        openMenu,
        {
          y: "0%",
          duration: 0.3,
          ease: "quartOut",
        },
        "<"
      )
      .to(
        link,
        {
          y: "0%",
          duration: 0.3,
          stagger: 0.05,
          ease: "quartOut",
        },
        "<.2"
      )
      .to(
        tagline,
        {
          y: "0%",
          opacity: 1,
          duration: 0.3,
          ease: "quartOut",
        },
        "<70%"
      ),
      M.to(tagline, {
        y: "-100%",
        opacity: 0,
        duration: 0.3,
        ease: "linear",
      })
        .to(
          link,
          {
            y: "-120%",
            duration: 0.3,
            stagger: -0.05,
            ease: "quartOut",
          },
          "<60%"
        )
        .to(
          bgMenu,
          {
            y: "-100%",
            duration: 1.2,
            ease: "quartOut",
          },
          "<20%"
        )
        .to(
          closeMenu,
          {
            y: "-100%",
            duration: 0.3,
            ease: "quartOut",
          },
          "<50%"
        )
        .to(
          openMenu,
          {
            y: "-100%",
            duration: 0.3,
            ease: "quartOut",
            onComplete: () => {
              //null == y || y.start(),
              //t.style.pointerEvents = "none"
              console.log("onEnd menu");
            },
          },
          "<"
        )
        .revert();
  }

  btnMenu.addEventListener("click", () => {
    if (!O && !P) {
      console.log("aaa");
      L.play(0);
    } else {
      if (!O && P) {
        console.log("bbb");
        M.play(0);
      }
    }
  });
}

function faqAnimation() {
  function getElement(e) {
    const line = e.querySelector(".acc_line--dark");
    return { line };
  }
  function handleEnter(e) {
    const { line } = getElement(e.target);
    let faqTimelineEnter = gsap.timeline({});
    faqTimelineEnter.fromTo(
      line,
      {
        x: "-100%",
      },
      {
        x: "0%",
        duration: 1.4,
        ease: "expo.out",
      }
    );
  }
  function handleLeave(e) {
    const { line } = getElement(e.target);
    let faqTimelineLeave = gsap.timeline({});
    faqTimelineLeave.fromTo(
      line,
      {
        x: "0%",
      },
      {
        x: "110%",
        duration: 1.6,
        ease: "expo.out",
      }
    );
  }

  function handleClick(e) {
    const button = e;
    const bodyNext = button.nextElementSibling;
    const bodyH = bodyNext.querySelector(".client_brand--detail").offsetHeight;
    if (button.getAttribute("aria-expanded") === "false") {
      const btnActive = document.querySelector(
        '.client_brand button[aria-expanded="true"]'
      );
      const bodyActive = document.querySelector(
        '.client_brand--body[aria-hidden="false"]'
      );

      btnActive && btnActive.setAttribute("aria-expanded", "false");
      bodyActive && bodyActive.setAttribute("aria-hidden", "true");
      bodyActive && (bodyActive.style.height = "0px");

      button.setAttribute("aria-expanded", "true");
      bodyNext.setAttribute("aria-hidden", "false");
      bodyNext.style.height = bodyH + "px";
    } else {
      button.setAttribute("aria-expanded", "false");
      bodyNext.setAttribute("aria-hidden", "true");
      bodyNext.style.height = "0px";
    }
  }

  document.querySelectorAll(".client_brand li").forEach((e) => {
    e.querySelector("button").addEventListener("click", () => {
      handleClick(e.querySelector("button"));
    });
    e.addEventListener("mouseenter", handleEnter),
      e.addEventListener("mouseleave", handleLeave);
  }),
    () => {
      document.querySelectorAll(".client_brand li").forEach((e) => {
        e.removeEventListener("mouseenter", handleEnter),
          e.removeEventListener("mouseleave", handleLeave);
      });
    };
}

function buttonAnimation() {
  const topclipPath =
    "clip-path: inset(var(--pad) var(--dot) var(--pad) var(--pad) round 999px)";
  const botclipPath = "clip-path: inset(1px var(--diff) 1px 1px round 999px)";
  function getElement(e) {
    const btnTop = e.querySelector(".button_post--top");
    const btnBot = e.querySelector(".button_post--bot");
    const btnTxt = e.querySelector(".button_post--top .button_text--size");
    const diff = Math.ceil(btnBot.clientWidth - btnTop.clientWidth) + 1;
    return { btnTop, btnBot, btnTxt, diff };
  }
  function handleEnter(e) {
    const { btnTop, btnBot, btnTxt, diff } = getElement(e.target);
    const dot = Math.round(btnTop.clientWidth - 16);
    const pad = 6;
    const tlEnter = gsap.timeline({});
    tlEnter
      .to(btnBot, {
        "--diff": "0px",
        duration: 0.3,
        ease: "inOut",
      })
      .to(
        btnTop,
        {
          "--pad": pad,
          "--dot": dot,
          duration: 0.3,
          ease: "inOut",
        },
        "<"
      )
      .to(
        btnTxt,
        {
          transform: "translate3d(16px, 0px, 0px)",
          duration: 0.3,
          ease: "inOut",
        },
        "<"
      );
  }
  function handleLeave(e) {
    const { btnTop, btnBot, btnTxt, diff } = getElement(e.target);
    const tlLeave = gsap.timeline({});
    tlLeave
      .to(btnBot, {
        "--diff": diff + "px",
        duration: 0.3,
        ease: "inOut",
      })
      .to(
        btnTop,
        {
          "--pad": "0px",
          "--dot": "0px",
          duration: 0.3,
          ease: "inOut",
        },
        "<"
      )
      .to(
        btnTxt,
        {
          transform: "translate3d(0px, 0px, 0px)",
          duration: 0.3,
          ease: "inOut",
        },
        "<"
      );
  }
  document.querySelectorAll(".button_inner").forEach((e) => {
    const { btnTop, btnBot, btnTxt, diff } = getElement(e);
    const mashTop = `${topclipPath}; --dot: 0px; --pad:0px;`;
    const mashBot = `${botclipPath}; --diff: ${diff}px;`;
    btnTop.setAttribute("style", mashTop);
    btnBot.setAttribute("style", mashBot);
    e.addEventListener("mouseenter", handleEnter),
      e.addEventListener("mouseleave", handleLeave);
  }),
    () => {
      document.querySelectorAll(".button_inner").forEach((e) => {
        e.removeEventListener("mouseenter", handleEnter),
          e.removeEventListener("mouseleave", handleLeave);
      });
    };
}

function cursorAnimation() {
  const cursor = document.querySelector(".cursor_container");
  const cursorText = document.querySelector(".cursor_text div");
  function setCursor(value) {
    cursorText.textContent = value;
  }
  function movecursor(e) {
    gsap.to(cursor, {
      duration: 0.001,
      x: e.clientX + 20,
      y: e.clientY + 20,
      ease: "customInOut",
    });
  }
  function handleEnter(e) {
    setCursor(e.target.getAttribute("data-hover"));
    cursor.classList.add("cursor_hover");
  }
  function handleLeave(e) {
    cursor.classList.remove("cursor_hover");
  }
  addEventListener("pointermove", movecursor),
    document.querySelectorAll("[data-hover]").forEach((e) => {
      e.addEventListener("mouseenter", handleEnter),
        e.addEventListener("mouseleave", handleLeave);
    }),
    () => {
      removeEventListener("pointermove", movecursor),
        document.querySelectorAll("[data-hover]").forEach((e) => {
          e.removeEventListener("mouseenter", handleEnter),
            e.removeEventListener("mouseleave", handleLeave);
        });
    };
}

function splitText() {
  if (document.querySelector(".hero_intro")) {
    let mainText = document
      .querySelector(".split")
      .innerHTML.replace(/\t/g, " ")
      .replace(/\r/g, " ")
      .replace(/\n/g, " ")
      .replace(/\s+/g, " ");
    mainText = mainText.trim().split("<br>");
    let count = 0;
    let headingHtml = "";
    for (let key of mainText) {
      headingHtml += '<div class="wrap" aria-hidden="true"><div class="line">';
      const items = key.trim().split(" ");
      for (let i = 0; i < items.length; i++) {
        const space = i < items.length - 1 ? `&nbsp;` : "";
        const delay = ((count + 1) * 0.05 + 0.7).toFixed(2) + "s";
        headingHtml += `<div class="wrap"><div class="word animation_moveUp" style='--delay: ${delay}'>${items[i]}${space}</div></div>`;
        count++;
      }
      headingHtml += "</div></div>";
    }
    document.querySelector(".split").innerHTML = headingHtml;
    document.querySelector(".split").classList.add("done");

    if (document.querySelectorAll(".hero_heading--sub")) {
      count--;
      let subText = document
        .querySelector(".hero_heading--sub")
        .innerHTML.replace(/\t/g, " ")
        .replace(/\r/g, " ")
        .replace(/\n/g, " ")
        .replace(/\s+/g, " ");
      subText = subText.split("<br>");
      let subHtml = "";
      for (let i = 0; i < subText.length; i++) {
        const delay = ((count + 1) * 0.05 + 0.7).toFixed(2) + "s";
        subHtml += `<div><div class="animation_moveUp" style='--delay: ${delay}'>${subText[i]}</div></div>`;
        count++;
      }
      document.querySelector(".hero_heading--sub").innerHTML = subHtml;
    }
    if (document.querySelector(".hero_description .text_normal")) {
      document
        .querySelector(".hero_description .text_normal")
        .setAttribute("style", "--delay:1.05s");
    }
  }
}

function aboutAnimation() {
  let listWrap = document.querySelectorAll(".pillar_list");

  if (listWrap) {
    listWrap.forEach((wrap, r) => {
      if (wrap) {
        let listItem = wrap.querySelectorAll(".pillar_list--item"),
          separator = wrap.querySelector(".pillar_separator--bg");
        if (listItem.length > 0) {
          if (ScrollTrigger.create({
                trigger: wrap,
                start: "clamp(top 80px)",
                end: "clamp(bottom 80px)",
                scrub: !0,
                animation: gsap.fromTo(document.querySelector('.pillar_progress--bg'), {
                    x: "-100%"
                }, {
                    x: "100%"
                })
            }),
            window.innerWidth > 480) {
            let r = gsap.timeline({
              scrollTrigger: {
                trigger: wrap,
                start: "clamp(0% 100%)",
                end: "clamp(100% 20%)",
                scrub: !0,
              },
            });
            r.to(listItem, {
              x: 0,
              ease: "quartOut",
              stagger: 0.03,
            }),
              separator &&
                r.to(
                  separator,
                  {
                    x: 0,
                    ease: "quartOut",
                  },
                  "<55%"
                );
          } else {
            let r = gsap.timeline({
              scrollTrigger: {
                trigger: listItem,
                start: "clamp(0% 120%)",
                end: "clamp(100% 0%)",
                scrub: !0,
              },
            });
            r.to(listItem, {
              x: 0,
              ease: "quartOut",
              stagger: 0.02,
            }),
              separator &&
                r.to(
                  separator,
                  {
                    x: 0,
                    ease: "quartOut",
                  },
                  "<30%"
                );
          }
        }
      }
    });

    let heading = document.querySelector('.pillar_col--heading');
    let item = document.querySelector('.pillar_col--item');
    let x = { current: 0 };

    let r = gsap.timeline({
      scrollTrigger: {
        trigger: item,
        start: () =>
          window.innerWidth > 480
            ? "clamp(top 80px)"
            : "clamp(top " + (heading.clientHeight + 56) + "px)",
        end: () => (
          (x.current = 0),
          null == item || item.querySelectorAll(".pillar_list").forEach((e, r) => {
                r < (null == item ? void 0 : item.querySelectorAll(".pillar_list").length) - 1 && (x.current = x.current + e.clientHeight);
          }),
          window.innerWidth > 480 ? x.current + "px 80px" : x.current + (window.innerWidth / 100) * 4 + "px " + (heading.clientHeight + 56) + "px"
        ),
        scrub: !0,
        ease: "none",
        invalidateOnRefresh: !0,
      },
    });
    r.addLabel("0").to(".pillar_heading--items", {
          y: -(100 / listWrap.length) + "%",
          duration: 0.01 * 100
    }).to(".pillar_number--list", {
        y: -(100 / listWrap.length) + "%",
        duration: 0.01 * 100
    }, "<").addLabel("1").to(".pillar_heading--items", {
        y: -(100 / listWrap.length * 2) + "%",
        duration: 0.02 * 100
    }).to(".pillar_number--list", {
        y: -(100 / listWrap.length * 2) + "%",
        duration: 0.002 * 100
    }, "<").addLabel("2").to(".pillar_heading--items", {
        y: -(100 / listWrap.length * 3) + "%",
        duration: 0.03 * 100
    }).to(".pillar_number--list", {
        y: -(100 / listWrap.length * 3) + "%",
        duration: 0.03 * 100
    }, "<").addLabel("3").to(".pillar_heading--items", {
        y: -(100 / listWrap.length * 4) + "%",
        duration: 0.04 * 100
    }).to(".pillar_number--list", {
        y: -(100 / listWrap.length * 4) + "%",
        duration: 0.04 * 100
    }, "<").addLabel("4");

  }
}

function gallerySlider() {
  if (document.querySelector(".gallerySwiper")) {
    new Swiper(".gallerySwiper", {
      loopAdditionalSlides: 7,
      loopedSlides: 7,
      loop: true,
      slidesPerView: "auto",
      grabCursor: true,
      freeMode: true,
      freeModeMomentumBounce: false,
      freeModeMomentumRatio: 0.1,
      freeModeMomentumVelocityRatio: 0.8,
    });
  }
}

function cardSlider() {
  if (document.querySelector(".client_card--container")) {
    new Swiper(".client_card--container", {
      loop: false,
      slidesPerView: "auto",
      grabCursor: true,
      freeMode: true,
      freeModeMomentumBounce: false,
      freeModeMomentumRatio: 0.1,
      freeModeMomentumVelocityRatio: 0.8,
    });
  }
}

(function () {
  const lenis = new Lenis({
    duration: 1.2,
    easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
  });
  lenis.on("scroll", (e) => {});

  function raf(time) {
    lenis.raf(time);
    requestAnimationFrame(raf);
  }

  requestAnimationFrame(raf);

  setTimeout(function () {
    const videoBox = document.querySelector(".video_box");
    const heroImg = document.querySelector(".hero_banner img");
    const footerBox = document.querySelector(".footer_box ");

    const timeLineHero = gsap.timeline({ paused: true });
    const timelineFooter = gsap.timeline({ paused: true });

    if (window.innerWidth > 480 && videoBox) {
      const timelineVideo = gsap.timeline({ paused: true });
      timelineVideo.fromTo(
        videoBox,
        { width: "47vw" },
        { width: "100vw", duration: 1.2, ease: "linear" }
      );
      ScrollTrigger.create({
        animation: timelineVideo,
        trigger: videoBox,
        start: "clamp(0% 100%)",
        end: "clamp(0% 0%+=56px)",
        scrub: true,
      });
    }

    timeLineHero.fromTo(heroImg, { y: "-14%" }, { y: "0%", ease: "none" });

    timelineFooter.fromTo(
      footerBox,
      { y: "-20%" },
      {
        y: "0%",
        ease: "linear",
        onUpdate: () => {
          const total = timelineFooter.totalProgress();
          if (total > 0.8) {
            document.querySelector(".header").classList.add("nav_hide");
          } else {
            document.querySelector(".header").classList.remove("nav_hide");
          }
        },
      }
    );

    ScrollTrigger.create({
      animation: timeLineHero,
      trigger: heroImg,
      start: "clamp(0% 100%)",
      end: "clamp(100% 0%)",
      scrub: true,
    });

    ScrollTrigger.create({
      animation: timelineFooter,
      trigger: footerBox,
      start: "clamp(0% 100%)",
      end: "clamp(100% 0%)",
      scrub: true,
    });

    // End Video home anim

    // Nav
    navAnimation();

    // Split text
    splitText();

    // Faq
    faqAnimation();

    // Button
    buttonAnimation();

    // Cursor
    cursorAnimation();

    // Slider
    gallerySlider();
    cardSlider();

    document
      .querySelector(".transition_wrapper__loading")
      .classList.add("transition_loaded");
    document.querySelector("html").classList.add("animation_ready");
    setTimeout(function () {
      document
        .querySelector(".transition_wrapper__loading")
        .classList.remove("transition_loading");
    }, 800);
  }, 3000);

  aboutAnimation();

  // Gotop
  if (document.querySelector(".footer_totop")) {
    document.querySelector(".footer_totop").addEventListener("click", () => {
      lenis.scrollTo(0);
    });
  }
})();
