(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([[986], {
    4868: function(e, r, t) {
        "use strict";
        var s = t(5893)
          , l = t(7294)
          , a = t(6038)
          , n = t(5562)
          , i = t(4068)
          , c = t.n(i);
        function Tab(e) {
            let {tabClass: r, index: t, activeTab: i, activateTab: o, header: d, body: u} = e
              , _ = (0,
            l.useRef)()
              , v = (0,
            l.useRef)()
              , m = (0,
            l.useRef)()
              , [h,p] = (0,
            l.useState)(0);
            (0,
            l.useEffect)(()=>{
                let e = _.current.querySelector(".".concat(c().inner)).scrollHeight;
                p(e)
            }
            , []);
            let x = i === t;
            return (0,
            l.useEffect)(()=>{
                let e = _.current.querySelector(".".concat(c().inner)).scrollHeight;
                p(e)
            }
            , [x]),
            (0,
            l.useEffect)(()=>{
                if (!(0,
                n.Z)()) {
                    var e, r;
                    function enter() {
                        a.p8.fromTo(m.current, {
                            x: "-100%"
                        }, {
                            x: "0%",
                            duration: 1.4,
                            ease: "expo.out"
                        })
                    }
                    function leave() {
                        a.p8.fromTo(m.current, {
                            x: "0%"
                        }, {
                            x: "100%",
                            duration: 1.6,
                            ease: "expo.out"
                        })
                    }
                    return null == v || null === (e = v.current) || void 0 === e || e.addEventListener("mouseenter", enter),
                    null == v || null === (r = v.current) || void 0 === r || r.addEventListener("mouseleave", leave),
                    ()=>{
                        var e, r;
                        null == v || null === (e = v.current) || void 0 === e || e.removeEventListener("mouseenter", enter),
                        null == v || null === (r = v.current) || void 0 === r || r.removeEventListener("mouseleave", leave)
                    }
                }
            }
            , [v.current, m.current]),
            (0,
            s.jsxs)("li", {
                className: r,
                role: "tab",
                ref: _,
                children: [(0,
                s.jsx)("button", {
                    id: "acc-control-" + t,
                    onClick: o,
                    "aria-expanded": x,
                    "aria-controls": "acc-content-" + t,
                    ref: v,
                    children: d
                }), (0,
                s.jsx)("div", {
                    id: "acc-content-" + t,
                    className: c().inner,
                    style: {
                        height: x ? "".concat(h, "px") : 0
                    },
                    "aria-hidden": !x,
                    children: u
                }), (0,
                s.jsx)("div", {
                    className: c().lineMask,
                    children: (0,
                    s.jsx)("div", {
                        className: c().lineLite,
                        children: (0,
                        s.jsx)("div", {
                            className: c().lineDark,
                            ref: m
                        })
                    })
                })]
            })
        }
        r.Z = function(e) {
            let {children: r, className: t, tabClass: a, tabs: n, openTab: i, setActiveIndex: c} = e
              , [o,d] = (0,
            l.useState)(i ? 0 : null)
              , activateTab = e=>{
                d(r=>r === e ? -1 : e),
                c && c(r=>r === e ? -1 : e)
            }
            ;
            return (0,
            s.jsx)("ol", {
                className: t,
                "aria-label": "Accordion Buttons",
                role: "tablist",
                children: n.map((e,t)=>e ? (0,
                s.jsx)(Tab, {
                    children: r,
                    tabClass: a,
                    activeTab: o,
                    index: t,
                    ...e,
                    activateTab: ()=>activateTab(t)
                }, t) : null)
            })
        }
    },
    1549: function(e, r, t) {
        "use strict";
        t.d(r, {
            Z: function() {
                return Slider
            }
        });
        var s = t(5893)
          , l = t(7294)
          , a = t(5585)
          , n = t(9635)
          , i = t(2470)
          , c = t(5044)
          , o = t.n(c);
        function Slider(e) {
            let {className: r, viewportClass: t, containerClass: c, slideClass: d, activeClass: u, arrowsClass: _, slideIndex: v, setSlideIndex: m, autoScroll: h, wheel: p, keyboardSupport: x, arrows: f, slideRefs: g, emblaApi: b, enabled: C=!0, reInit: k, children: w} = e
              , N = (0,
            l.useRef)()
              , [j,L] = (0,
            l.useState)(!1)
              , [S,Z] = (0,
            l.useState)([])
              , [E,y] = (0,
            l.useState)(0)
              , [M,A] = (0,
            l.useState)(!1)
              , [W,P] = (0,
            l.useState)(0)
              , [T,D] = (0,
            l.useState)(!1)
              , [I,X] = (0,
            l.useState)(!1)
              , B = (0,
            n.Z)({
                selected: "selected",
                draggable: "draggable",
                dragging: "dragging"
            })
              , [F,R] = (0,
            a.Z)(b, [B])
              , q = (0,
            l.useCallback)(()=>{
                R && R.scrollPrev()
            }
            , [R])
              , H = (0,
            l.useCallback)(()=>{
                R && R.scrollNext()
            }
            , [R])
              , V = (0,
            l.useCallback)((e,r)=>{
                R && R && R.scrollTo(e, r)
            }
            , [R])
              , Y = (0,
            l.useRef)(0)
              , z = (0,
            l.useCallback)(()=>{
                if (!R || !Y.current)
                    return;
                let e = R.internalEngine();
                e.location.add(-.2),
                e.target.set(e.location),
                e.scrollLooper.loop(-.2),
                e.slideLooper.loop(),
                e.translate.to(e.location),
                Y.current = requestAnimationFrame(z)
            }
            , [R])
              , O = (0,
            l.useCallback)(()=>{
                Y.current = requestAnimationFrame(z)
            }
            , [z])
              , J = (0,
            l.useCallback)(()=>{
                Y.current = cancelAnimationFrame(Y.current) || 0
            }
            , []);
            (0,
            l.useEffect)(()=>{
                if (R && h)
                    return R.on("pointerDown", J),
                    R.on("settle", O),
                    V(0, !0),
                    O(),
                    ()=>J()
            }
            , [R, h, O, J]);
            let U = (0,
            l.useCallback)(e=>{
                if (!R)
                    return;
                e.preventDefault();
                let r = e.deltaY || e.deltaX || e.wheelDelta
                  , t = r > 0 ? -1 : 1
                  , s = R.internalEngine()
                  , l = s.scrollBody
                  , a = Math.abs(r);
                l.useSpeed(16),
                l.useMass(1),
                s.scrollTo.distance(t * a, !1)
            }
            , [R]);
            (0,
            l.useEffect)(()=>{
                if (R && p)
                    return N.current && N.current.addEventListener("wheel", U),
                    ()=>{
                        var e;
                        return null === (e = N.current) || void 0 === e ? void 0 : e.removeEventListener("wheel", U)
                    }
            }
            , [R, N]),
            (0,
            l.useEffect)(()=>{
                if (void 0 == F.current)
                    return;
                let e = new IntersectionObserver(function(e) {
                    e[0].isIntersecting ? A(!0) : A(!1)
                }
                ,{
                    threshold: 0
                });
                return e.observe(F.current),
                ()=>e.unobserve(F.current)
            }
            , [F]),
            (0,
            l.useEffect)(()=>{
                if (!R && !x)
                    return;
                let keyboard = e=>{
                    switch (e.code) {
                    case "ArrowLeft":
                    case "ArrowUp":
                        e.stopPropagation(),
                        R.scrollPrev();
                        break;
                    case "ArrowRight":
                    case "ArrowDown":
                        e.stopPropagation(),
                        R.scrollNext()
                    }
                }
                ;
                return M ? document.addEventListener("keydown", keyboard) : document.removeEventListener("keydown", keyboard),
                ()=>document.removeEventListener("keydown", keyboard)
            }
            , [R, M]);
            let G = (0,
            l.useCallback)(()=>{
                R && (y(R.selectedScrollSnap()),
                m && m(R.selectedScrollSnap() + 1),
                D(!R.canScrollPrev()),
                X(!R.canScrollNext()))
            }
            , [R])
              , K = (0,
            l.useCallback)(()=>{
                if (!R)
                    return;
                let e = Math.max(0, Math.min(1, R.scrollProgress()));
                P(100 * e)
            }
            , [R, P]);
            return (0,
            l.useEffect)(()=>{
                console.log(v),
                y(v)
            }
            , [v]),
            (0,
            l.useEffect)(()=>{
                R && (Z(R.scrollSnapList()),
                G(),
                K(),
                R.on("select", G),
                R.on("scroll", K),
                R.on("resize", K))
            }
            , [R, G, K]),
            (0,
            l.useEffect)(()=>{
                if (R && R.slidesNotInView().length > 0) {
                    var e;
                    null === (e = N.current) || void 0 === e || e.parentElement.setAttribute("data-hover", "Drag")
                }
            }
            , [R, N.current]),
            (0,
            l.useEffect)(()=>{
                k || L(!0)
            }
            , []),
            (0,
            l.useEffect)(()=>{
                !0 == k ? L(!0) : !1 == k && setTimeout(()=>{
                    L(!1)
                }
                , 600)
            }
            , [k]),
            (0,
            l.useEffect)(()=>{
                !C && R && R.destroy()
            }
            , [R, C]),
            (0,
            s.jsxs)("div", {
                className: (0,
                i.Z)(r || "", o().slider),
                children: [(0,
                s.jsx)("div", {
                    className: (0,
                    i.Z)(t || "", o().viewport),
                    ref: j ? F : null,
                    children: (0,
                    s.jsx)("div", {
                        className: (0,
                        i.Z)(c || "", o().container),
                        ref: N,
                        children: null == w ? void 0 : w.map((e,r)=>e ? (0,
                        s.jsx)("div", {
                            ref: g ? e=>g[r] = e : null,
                            className: (0,
                            i.Z)(d || "", o().slide, E == r && u || ""),
                            children: e
                        }, r) : null)
                    })
                }), f ? (0,
                s.jsxs)("div", {
                    className: (0,
                    i.Z)(_ || "", o().arrows),
                    children: [(0,
                    s.jsx)("button", {
                        onClick: q,
                        disabled: T,
                        children: "<"
                    }), (0,
                    s.jsx)("button", {
                        onClick: H,
                        disabled: I,
                        children: ">"
                    })]
                }) : null]
            })
        }
    },
    8986: function(e, r, t) {
        "use strict";
        t.r(r);
        var s = t(5893)
          , l = t(7294);
        t(1754);
        var a = t(1549)
          , n = t(7126)
          , i = t(4868)
          , c = t(2470)
          , o = t(539)
          , d = t.n(o)
          , u = t(2548)
          , _ = t.n(u)
          , v = t(6001)
          , m = t.n(v);
        r.default = e=>{
            let {slice: r} = e
              , t = r.items.map(e=>e.featured_toggle ? null : {
                header: (0,
                s.jsxs)("div", {
                    className: d().tabHead,
                    children: [(0,
                    s.jsx)("div", {
                        className: (0,
                        c.Z)(d().nameWrap, d().wrap),
                        children: (0,
                        s.jsx)("h4", {
                            className: (0,
                            c.Z)(d().name, _().XS),
                            children: e.name
                        })
                    }), (0,
                    s.jsx)("div", {
                        className: (0,
                        c.Z)(d().tagsWrap, d().wrap, m().desktop),
                        children: (0,
                        s.jsx)("div", {
                            className: (0,
                            c.Z)(d().tags, _().XXS),
                            children: e.tags
                        })
                    }), (0,
                    s.jsxs)("div", {
                        className: (0,
                        c.Z)(d().moreLessWrap, d().wrap),
                        children: [(0,
                        s.jsx)("div", {
                            className: (0,
                            c.Z)(d().more, _().XXS, _().link),
                            children: "More +"
                        }), (0,
                        s.jsx)("div", {
                            className: (0,
                            c.Z)(d().less, _().XXS, _().link),
                            children: "Less —"
                        })]
                    })]
                }),
                body: (0,
                s.jsxs)("div", {
                    className: d().tabBody,
                    children: [(0,
                    s.jsx)("div", {
                        className: (0,
                        c.Z)(_().XS, m().mobile),
                        children: e.tags
                    }), (0,
                    s.jsx)("p", {
                        className: (0,
                        c.Z)(d().bodyP, _().p),
                        children: e.paragraph
                    })]
                })
            });
            return (0,
            s.jsxs)("section", {
                className: d().section,
                children: [(0,
                s.jsx)("header", {
                    className: (0,
                    c.Z)(d().header, d().wrap),
                    children: (0,
                    s.jsxs)("h2", {
                        className: _().L,
                        children: [" ", r.primary.heading]
                    })
                }), (0,
                s.jsx)("div", {
                    className: d().clientCards,
                    children: (0,
                    s.jsx)(a.Z, {
                        emblaApi: {
                            active: !1,
                            axis: "x",
                            align: 0,
                            startIndex: 0,
                            slidesToScroll: 1,
                            speed: 8,
                            skipSnaps: !0,
                            breakpoints: {
                                "(max-width: 768px)": {
                                    active: !0
                                }
                            }
                        },
                        className: d().slider,
                        viewportClass: d().sliderViewport,
                        containerClass: d().sliderContainer,
                        slideClass: d().sliderSlide,
                        activeClass: d().activeSlide,
                        arrowsClass: d().sliderArrows,
                        gap: "2vw",
                        children: r.items.map((e,r)=>{
                            if (e.featured_toggle) {
                                var t, a, i, o, u;
                                return (0,
                                s.jsxs)(l.Fragment, {
                                    children: [(0,
                                    s.jsx)("div", {
                                        className: d().logoWrap,
                                        children: (0,
                                        s.jsx)("img", {
                                            className: d().logo,
                                            src: null === (t = e.logo) || void 0 === t ? void 0 : t.url,
                                            width: null === (a = e.logo) || void 0 === a ? void 0 : a.dimensions.width,
                                            height: null === (i = e.logo) || void 0 === i ? void 0 : i.dimensions.height,
                                            alt: (null === (o = e.logo) || void 0 === o ? void 0 : o.alt) ? null === (u = e.logo) || void 0 === u ? void 0 : u.alt : "",
                                            loading: "eager"
                                        })
                                    }), (0,
                                    s.jsxs)("div", {
                                        className: d().cardInner,
                                        children: [(0,
                                        s.jsx)("p", {
                                            className: (0,
                                            c.Z)(d().paragraph, _().p),
                                            children: e.paragraph
                                        }), e.work_anchor ? (0,
                                        s.jsx)(n.Z, {
                                            anchor: e.work_anchor,
                                            text: e.cta_text,
                                            subtext: e.cta_subtext
                                        }) : (0,
                                        s.jsx)(n.Z, {
                                            link: e.cta_link,
                                            text: e.cta_text,
                                            subtext: e.cta_subtext
                                        })]
                                    })]
                                }, r)
                            }
                        }
                        )
                    })
                }), (0,
                s.jsx)("div", {
                    className: (0,
                    c.Z)(d().header, d().wrap),
                    children: (0,
                    s.jsxs)("h3", {
                        className: _().M,
                        children: [r.primary.sub_heading, " "]
                    })
                }), (0,
                s.jsx)(i.Z, {
                    className: d().list,
                    tabs: t
                })]
            })
        }
    },
    4068: function(e) {
        e.exports = {
            inner: "client_brand--body",
            lineMask: "acc_line",
            work: "Accordion_work__IgFMS",
            lineLite: "acc_line--lite",
            lineDark: "acc_line--dark"
        }
    },
    5044: function(e) {
        e.exports = {
            slider: "gallery_box",
            viewport: "gallery_container",
            container: "swiper-wrapper",
            slide: "gallery_item",
            arrows: "slider_arrows__l9BS9",
            mobile: "slider_mobile___3Y4z"
        }
    },
    539: function(e) {
        e.exports = {
            section: "section_client",
            wrap: "client_heading--wrap",
            header: "client_heading",
            clientCards: "client_card",
            sliderViewport: "ClientList_sliderViewport__TI7Wn",
            sliderContainer: "client_card--swiper",
            sliderSlide: "swiper-slide",
            logoWrap: "client_logo",
            logo: "client_logo",
            cardInner: "client_card_detail",
            paragraph: "client_card_text",
            list: "client_brand",
            less: "acc_action--less",
            more: "acc_action--more",
            tabHead: "client_brand--head",
            nameWrap: "client_name",
            tagsWrap: "client_tag",
            moreLessWrap: "acc_action",
            tabBody: "client_brand--detail",
            bodyP: "ClientList_bodyP__q_cS1",
            lineDark: "ClientList_lineDark__qB_Mt"
        }
    }
}]);
