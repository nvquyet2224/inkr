//document.addEventListener('touchstart', ()=>{}, { passive: true });

document
  .querySelector(".transition_wrapper__loading")
  .classList.add("transition_loading");

function loadingImg() {
  const observer = lozad(".lozad", {
    rootMargin: "200px 0px",
    threshold: 0.1,
    enableAutoReload: true,
  });
  observer.observe();
}

loadingImg();

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

function heroStudiesDelay() {
  const items = document.querySelectorAll(".hero_studie_item");
  let delay = 1.15;
  items.forEach((elm, index) => {
    const img = elm.querySelector(".hero_studie_img--wrap");
    const number = elm.querySelector(".hero_studie_number--value");
    img.style = `--delay:${delay + 0.05 * index}s`;
    number.style = `--delay:${delay + 0.05 * index}s`;
  });
}

function faqAnimation(obj) {
  let { items, activeBtn, activeBody, detail } = obj;
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
    const bodyH = bodyNext.querySelector(detail).offsetHeight;
    if (button.getAttribute("aria-expanded") === "false") {
      const btnActive = document.querySelector(activeBtn);
      const bodyActive = document.querySelector(activeBody);

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

  document.querySelectorAll(items).forEach((e) => {
    e.querySelector("button").addEventListener("click", () => {
      handleClick(e.querySelector("button"));
    });
    e.addEventListener("mouseenter", handleEnter),
      e.addEventListener("mouseleave", handleLeave);
  }),
    () => {
      document.querySelectorAll(items).forEach((e) => {
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

function fullImgSlider() {
  if (document.querySelector(".fullSliderSwiper")) {
    document.querySelectorAll(".fullSliderSwiper").forEach((elm, index)=>{
      new Swiper(elm, {
        loop: false,
        slidesPerView: "auto",
        grabCursor: true,
        freeMode: true,
        freeModeMomentumBounce: false,
        freeModeMomentumRatio: 0.1,
        freeModeMomentumVelocityRatio: 0.8,
      });
    });
  }
}

function studiesSlider() {
  if (document.querySelector(".studies--container")) {
    new Swiper(".studies--container", {
      direction: "vertical",
      slidesPerView: 1,
      speed: 1000,
      on: {
        transitionStart: (swiper) => {
          const index = swiper.activeIndex;
          const heading = document.querySelector(".caseStudies_heading--list");
          const numbers = heading.querySelectorAll("a").length;
          const csImg = document.querySelector(".caseStudies_csImg--list");
          const counters = document.querySelector(".caseStudies_count--items");

          const y = -((100 / numbers) * index) + "%";
          gsap.to(csImg, {
            y: y,
            duration: 1,
          });
          gsap.to(heading, {
            y: y,
            duration: 1,
          });
          gsap.to(counters, {
            y: y,
            duration: 0.8,
          });
        },
      },
      mousewheel: {
        invert: false,
        passive: false,
      },
    });
  }
}

function footerAnimation() {
  const footerBox = document.querySelector(".footer_box");
  const timelineFooter = gsap.timeline({ paused: true });
  if (footerBox) {
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
      animation: timelineFooter,
      trigger: footerBox,
      start: "clamp(0% 100%)",
      end: "clamp(100% 0%)",
      scrub: true,
    });
  }
}

function homeVideoAnimation() {
  heroStudiesDelay();
  const videoBox = document.querySelector(".video_box");
  if (videoBox) {
    if (window.innerWidth > 480) {
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
  }
}

function heroBannerAnimation() {
  const heroImg = document.querySelector(".hero_banner img");
  if (heroImg) {
    document.querySelector(".hero_banner .animation_fadeRotate").style =
      "--delay:1s";
    const timeLineHero = gsap.timeline({ paused: true });
    timeLineHero.fromTo(heroImg, { y: "-14%" }, { y: "0%", ease: "none" });
    ScrollTrigger.create({
      animation: timeLineHero,
      trigger: heroImg,
      start: "clamp(0% 100%)",
      end: "clamp(100% 0%)",
      scrub: true,
    });
  }
}

function switchAnimation(obj) {
  let { swith, hover, active, color, colorActive, dataClass } = obj;
  function handleEnter(e) {
    hover.style.width = e.target.clientWidth + "px";
    if (e.target.hasAttribute(dataClass)) {
      hover.style.width = swith[0].clientWidth + "px";
      hover.style.transform = "translateX(0px)";
      swith[0].style.color = colorActive;
      swith[1].style.color = color;
    } else {
      hover.style.width = swith[1].clientWidth + "px";
      hover.style.transform = `translateX(${swith[1].clientWidth}px)`;
      swith[0].style.color = color;
      swith[1].style.color = colorActive;
    }
  }
  function handleLeave(e) {
    if (!e.target.classList.contains(active)) {
      if (e.target.hasAttribute(dataClass)) {
        hover.style.width = swith[1].clientWidth + "px";
        swith[0].style.color = color;
        swith[1].style.color = colorActive;
        hover.style.transform = `translateX(${swith[1].clientWidth}px)`;
      } else {
        hover.style.width = swith[0].clientWidth + "px";
        hover.style.transform = `translateX(0px)`;
        swith[0].style.color = colorActive;
        swith[1].style.color = color;
      }
    }
  }
  swith[0].addEventListener("mouseenter", handleEnter);
  swith[0].addEventListener("mouseleave", handleLeave);
  swith[1].addEventListener("mouseenter", handleEnter);
  swith[1].addEventListener("mouseleave", handleLeave);

  hover.style.width = swith[0].clientWidth + "px";
  hover.style.transform = "translateX(0px)";
  swith[0].style.color = colorActive;
  swith[1].style.color = color;
  swith[0].classList.add(active);
}

function switcCaseStudiesClick(obj) {
  let { swith, active } = obj;
  const openClass = "caseStudies_gridOpen";
  let caseBg = document.querySelector(".caseStudies_bgImg--wrap");
  let caseThumb = document.querySelector(".caseStudies_csImg--list");
  let caseGrid = document.querySelector(".caseStudies_grid--list");
  let caseGridItems = document.querySelectorAll(
    ".caseStudies_grid--list .caseStudies_grid--item"
  );

  swith[0].addEventListener("click", (e) => {
    if (!e.target.classList.contains(active)) {
      swith[1].classList.remove(active);
      swith[0].classList.add(active);
      caseBg.classList.remove(openClass);
      caseThumb.classList.remove(openClass);
      caseGrid.classList.remove(openClass);
    }
  });

  swith[1].addEventListener("click", (e) => {
    if (!e.target.classList.contains(active)) {
      swith[1].classList.add(active);
      swith[0].classList.remove(active);
      caseBg.classList.add(openClass);
      caseThumb.classList.add(openClass);
      caseGrid.classList.add(openClass);
    }
  });

  caseGridItems.forEach((elm, _i) => {
    gsap.to(elm.querySelector("img"), {
      y: "-12%",
      ease: "linear",
      scrollTrigger: {
        trigger: elm,
        start: "clamp(0% 100%)",
        end: "clamp(100% 0%)",
        scrub: true,
      },
    });
  });
}

function switchWorkClick(obj) {}

function splitWorkBlock() {
  const headings = document.querySelectorAll(".workBlock_name--heading");
  headings.forEach((elm, index) => {
    let mainText = elm.innerHTML
      .replace(/\t/g, " ")
      .replace(/\r/g, " ")
      .replace(/\n/g, " ")
      .replace(/\s+/g, " ");
    mainText = mainText.trim().split("<br>");
    let count = 0;
    let headingHtml = "";
    headingHtml += '<div class="wrap" aria-hidden="true"><div class="line">';
    for (let key of mainText) {
      const items = key.trim().split(" ");
      for (let i = 0; i < items.length; i++) {
        const space = `&nbsp;`;
        const delay = ((count + 1) * 0.05 + 0.7).toFixed(2) + "s";
        headingHtml += `<div class="wrap"><div class="word animation_moveUp" style='--delay: ${delay}'>${items[i]}${space}</div></div>`;
        count++;
      }
    }
    headingHtml += "</div></div>";
    elm.innerHTML = headingHtml;
    elm.classList.add("done");
  });
}

function appAnimation() {
  navAnimation();
  splitText();
  buttonAnimation();
  cursorAnimation();
  footerAnimation();
}

function homePageAnimation() {
  gallerySlider();
  cardSlider();
  homeVideoAnimation();
  const faq = {
    items: ".client_brand li",
    activeBtn: '.client_brand button[aria-expanded="true"]',
    activeBody: '.client_brand--body[aria-hidden="false"]',
    detail: ".client_brand--detail",
  };
  faqAnimation(faq);
}

function workSplitTag() {
  let tags = document.querySelectorAll(".workGrid_tag");
  if (tags) {
    tags.forEach((elm, _index) => {
      let tagHtml = "";
      let tagText = elm.innerHTML
        .replace(/\t/g, " ")
        .replace(/\r/g, " ")
        .replace(/\n/g, " ")
        .replace(/\s+/g, " ");
      tagText = tagText.split("-");
      for (let i = 0; i < tagText.length; i++) {
        let txt = `<div class="text_xxs__co--size">${tagText[i]}</div>`;
        let spr = `<div class="workGrid_tag--dash text_xxs__co--size"> - </div>`;
        if (i === tagText.length - 1) {
          spr = "";
        }
        tagHtml += `
          <div class="workGrid_tag--item">
            <div class="workGrid_tag--move animation_moveUp">
              ${txt}
              ${spr}
            </div>
          </div>
        `;
      }
      elm.innerHTML = tagHtml;
    });
  }
}

function workBlockDelay() {
  let blocks = document.querySelectorAll(".workGrid_item");
  if (blocks) {
    let delay = 1.2;
    blocks.forEach((elm, index) => {
      const img = elm.querySelector(".workGrid_img");
      const line = elm.querySelector(".workGrid_border__line");
      const words = elm.querySelectorAll(".word");
      const moves = elm.querySelectorAll(".workGrid_tag--move");
      const year = elm.querySelector(".workGrid_year .text_xxs__co--size");

      let moveDelay = 1.4;
      let wordDelay = 1.85;
      img.style = `--delay:${delay + index / 10}s`;
      line.style = `--delay:1.6s`;
      words.forEach((word, i) => {
        word.style = `--delay:${wordDelay + 0.05 * i}s`;
      });

      let yearCount = 0;
      moves.forEach((move, i) => {
        move.style = `--delay:${moveDelay + 0.05 * i}s`;
        yearCount++;
      });
      year.style = `--delay:${moveDelay + 0.05 * yearCount}s`;
    });
  }
}

function loadLightBox(url) {
  let lighBox = document.querySelector("#__lightbox");
  let html = document.querySelector("html");
  html.classList.add("lenis-stopped");

  const xhttp = new XMLHttpRequest();
  xhttp.onload = function () {
    lighBox.innerHTML = this.responseText;
  };
  xhttp.open("GET", url);
  xhttp.send();
  let direction = 'horizontal';
  if(window.innerWidth <= 480 )  {
    direction = 'vertical';
  }
  setTimeout(function () {
    new Swiper(".slider_viewport", {
      direction: direction,
      slidesPerView: "auto",
      grabCursor: true,
      freeMode: {
        enabled: true,
        momentumBounce: true,
      },
      mousewheel: {
        invert: false,
        releaseOnEdges: true,
        sensitivity: 1,
        thresholdDelta: 150,
        thresholdTime: 0.2,
      },
    });
    loadingImg();
    document.querySelector(".modals").classList.add("modals_enterDone");
    document
      .querySelector(".lightbox_bar--close")
      .addEventListener("click", () => {
        document.querySelector(".modals").classList.remove("modals_enterDone");
        html.classList.remove("lenis-stopped");
        setTimeout(() => {
          lighBox.innerHTML = "";
        }, 1100);
      });
  }, 100);
}

function workAnimation() {
  const obj = {
    swith: document.querySelectorAll(".work_switch--but"),
    hover: document.querySelector(".work_switch--hover"),
    active: "work_switch--active",
    color: "initial",
    colorActive: "#fff",
    dataClass: "data-grid",
  };
  switchAnimation(obj);
  workSplitTag();
  splitWorkBlock();
  workBlockDelay();

  // Album
  document.querySelectorAll(".workGrid_item").forEach((elm, index) => {
    elm.addEventListener("click", () => {
      loadLightBox("services/banyana-ba-style.html");
    });
  });

}

function caseStudiesAnimation() {
  const obj = {
    swith: document.querySelectorAll(".caseStudies_view--but"),
    hover: document.querySelector(".caseStudies_view--hover"),
    active: "caseStudies_view--acitve",
    color: "#fff",
    colorActive: "#2a2a2a",
    dataClass: "data-full",
  };
  studiesSlider();
  switchAnimation(obj);
  switcCaseStudiesClick(obj);
}

function caseDetailAnimation() {
  fullImgSlider();
}

function serviceAnimation() {
  workSplitTag();
  splitWorkBlock();
  workBlockDelay();
  heroBannerAnimation();

  const faq = {
    items: ".services_accordion .services_accordion--item",
    activeBtn: '.services_accordion button[aria-expanded="true"]',
    activeBody: '.client_brand--body[aria-hidden="false"]',
    detail: ".services_accordion--body",
  };
  faqAnimation(faq);

  document.querySelectorAll(".workGrid_item").forEach((elm, index) => {
    elm.addEventListener("click", () => {
      loadLightBox("services/banyana-ba-style.html");
    });
  });
}

function aboutAnimation() {
  heroBannerAnimation();
  gallerySlider();
  let listWrap = document.querySelectorAll(".pillar_list");
  if (listWrap) {
    listWrap.forEach((wrap, r) => {
      if (wrap) {
        let listItem = wrap.querySelectorAll(".pillar_list--item"),
          separator = wrap.querySelector(".pillar_separator--bg");
        if (listItem.length > 0) {
          ScrollTrigger.create({
            trigger: wrap,
            start: "clamp(top 80px)",
            end: "clamp(bottom 80px)",
            scrub: true,
            animation: gsap.fromTo(
              document.querySelector(".pillar_progress--bg"),
              {
                x: "-100%",
              },
              {
                x: "100%",
              }
            ),
          });
          if (window.innerWidth > 480) {
            let r = gsap.timeline({
              scrollTrigger: {
                trigger: wrap,
                start: "clamp(0% 100%)",
                end: "clamp(100% 20%)",
                scrub: true,
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
                scrub: true,
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

    ScrollTrigger.create({
      trigger: document.querySelector(".pillar_wrap"),
      start: "clamp(top 80px)",
      end: "clamp(bottom 120px)",
      scrub: true,
      animation: gsap.fromTo(
        document.querySelector(".pillar_heading--items"),
        {
          y: 0,
        },
        {
          y: -((100 / listWrap.length) * (listWrap.length - 1)) + "%",
        }
      ),
    });

    ScrollTrigger.create({
      trigger: document.querySelector(".pillar_wrap"),
      start: "clamp(top 80px)",
      end: "clamp(bottom 200px)",
      scrub: true,
      animation: gsap.fromTo(
        document.querySelector(".pillar_number--list"),
        {
          y: 0,
        },
        {
          y: -((100 / listWrap.length) * (listWrap.length - 1)) + "%",
        }
      ),
    });
  }
}

function insightsAnimation() {}

function contactAnimation() {}

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

  // Common animation
  appAnimation();
  
  // Before loaded
  if (document.querySelector("#homePage")) {
    homePageAnimation();
  } else if (document.querySelector("#workPage")) {
    workAnimation();
  } else if (document.querySelector("#studiesPage")) {
    caseStudiesAnimation();
  } else if (document.querySelector("#caseDetail")) {
    caseDetailAnimation();
  } else if (document.querySelector("#servicePage")) {
    serviceAnimation();
  } else if (document.querySelector("#aboutPage")) {
    aboutAnimation();
  } else if (document.querySelector("#insightsPage")) {
    insightsAnimation();
  } else if (document.querySelector("#contactPage")) {
    contactAnimation();
  }

  setTimeout(function () {
    document
      .querySelector(".transition_wrapper__loading")
      .classList.add("transition_loaded");
    if (document.querySelector("#studiesPage")) {
      document.querySelector("html").classList.add("lenis-stopped");
    }
    document.querySelector("html").classList.add("animation_ready");
    setTimeout(function () {
      document
        .querySelector(".transition_wrapper__loading")
        .classList.remove("transition_loading");
    }, 800);
  }, 3000);

  // Gotop
  if (document.querySelector(".footer_totop")) {
    document.querySelector(".footer_totop").addEventListener("click", () => {
      lenis.scrollTo(0);
    });
  }
})();
