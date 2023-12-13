(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([[261], {
    1549: function(e, r, l) {
        "use strict";
        l.d(r, {
            Z: function() {
                return Slider
            }
        });
        var s = l(5893)
          , t = l(7294)
          , i = l(5585)
          , n = l(9635)
          , a = l(2470)
          , o = l(5044)
          , d = l.n(o);
        function Slider(e) {
            let {className: r, viewportClass: l, containerClass: o, slideClass: c, activeClass: u, arrowsClass: v, slideIndex: m, setSlideIndex: f, autoScroll: g, wheel: _, keyboardSupport: h, arrows: p, slideRefs: w, emblaApi: b, enabled: S=!0, reInit: x, children: k} = e
              , C = (0,
            t.useRef)()
              , [E,N] = (0,
            t.useState)(!1)
              , [y,j] = (0,
            t.useState)([])
              , [A,Z] = (0,
            t.useState)(0)
              , [I,L] = (0,
            t.useState)(!1)
              , [M,P] = (0,
            t.useState)(0)
              , [D,F] = (0,
            t.useState)(!1)
              , [V,q] = (0,
            t.useState)(!1)
              , z = (0,
            n.Z)({
                selected: "selected",
                draggable: "draggable",
                dragging: "dragging"
            })
              , [O,R] = (0,
            i.Z)(b, [z])
              , T = (0,
            t.useCallback)(()=>{
                R && R.scrollPrev()
            }
            , [R])
              , X = (0,
            t.useCallback)(()=>{
                R && R.scrollNext()
            }
            , [R])
              , Y = (0,
            t.useCallback)((e,r)=>{
                R && R && R.scrollTo(e, r)
            }
            , [R])
              , B = (0,
            t.useRef)(0)
              , H = (0,
            t.useCallback)(()=>{
                if (!R || !B.current)
                    return;
                let e = R.internalEngine();
                e.location.add(-.2),
                e.target.set(e.location),
                e.scrollLooper.loop(-.2),
                e.slideLooper.loop(),
                e.translate.to(e.location),
                B.current = requestAnimationFrame(H)
            }
            , [R])
              , Q = (0,
            t.useCallback)(()=>{
                B.current = requestAnimationFrame(H)
            }
            , [H])
              , U = (0,
            t.useCallback)(()=>{
                B.current = cancelAnimationFrame(B.current) || 0
            }
            , []);
            (0,
            t.useEffect)(()=>{
                if (R && g)
                    return R.on("pointerDown", U),
                    R.on("settle", Q),
                    Y(0, !0),
                    Q(),
                    ()=>U()
            }
            , [R, g, Q, U]);
            let W = (0,
            t.useCallback)(e=>{
                if (!R)
                    return;
                e.preventDefault();
                let r = e.deltaY || e.deltaX || e.wheelDelta
                  , l = r > 0 ? -1 : 1
                  , s = R.internalEngine()
                  , t = s.scrollBody
                  , i = Math.abs(r);
                t.useSpeed(16),
                t.useMass(1),
                s.scrollTo.distance(l * i, !1)
            }
            , [R]);
            (0,
            t.useEffect)(()=>{
                if (R && _)
                    return C.current && C.current.addEventListener("wheel", W),
                    ()=>{
                        var e;
                        return null === (e = C.current) || void 0 === e ? void 0 : e.removeEventListener("wheel", W)
                    }
            }
            , [R, C]),
            (0,
            t.useEffect)(()=>{
                if (void 0 == O.current)
                    return;
                let e = new IntersectionObserver(function(e) {
                    e[0].isIntersecting ? L(!0) : L(!1)
                }
                ,{
                    threshold: 0
                });
                return e.observe(O.current),
                ()=>e.unobserve(O.current)
            }
            , [O]),
            (0,
            t.useEffect)(()=>{
                if (!R && !h)
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
                return I ? document.addEventListener("keydown", keyboard) : document.removeEventListener("keydown", keyboard),
                ()=>document.removeEventListener("keydown", keyboard)
            }
            , [R, I]);
            let G = (0,
            t.useCallback)(()=>{
                R && (Z(R.selectedScrollSnap()),
                f && f(R.selectedScrollSnap() + 1),
                F(!R.canScrollPrev()),
                q(!R.canScrollNext()))
            }
            , [R])
              , J = (0,
            t.useCallback)(()=>{
                if (!R)
                    return;
                let e = Math.max(0, Math.min(1, R.scrollProgress()));
                P(100 * e)
            }
            , [R, P]);
            return (0,
            t.useEffect)(()=>{
                console.log(m),
                Z(m)
            }
            , [m]),
            (0,
            t.useEffect)(()=>{
                R && (j(R.scrollSnapList()),
                G(),
                J(),
                R.on("select", G),
                R.on("scroll", J),
                R.on("resize", J))
            }
            , [R, G, J]),
            (0,
            t.useEffect)(()=>{
                if (R && R.slidesNotInView().length > 0) {
                    var e;
                    null === (e = C.current) || void 0 === e || e.parentElement.setAttribute("data-hover", "Drag")
                }
            }
            , [R, C.current]),
            (0,
            t.useEffect)(()=>{
                x || N(!0)
            }
            , []),
            (0,
            t.useEffect)(()=>{
                !0 == x ? N(!0) : !1 == x && setTimeout(()=>{
                    N(!1)
                }
                , 600)
            }
            , [x]),
            (0,
            t.useEffect)(()=>{
                !S && R && R.destroy()
            }
            , [R, S]),
            (0,
            s.jsxs)("div", {
                className: (0,
                a.Z)(r || "", d().slider),
                children: [(0,
                s.jsx)("div", {
                    className: (0,
                    a.Z)(l || "", d().viewport),
                    ref: E ? O : null,
                    children: (0,
                    s.jsx)("div", {
                        className: (0,
                        a.Z)(o || "", d().container),
                        ref: C,
                        children: null == k ? void 0 : k.map((e,r)=>e ? (0,
                        s.jsx)("div", {
                            ref: w ? e=>w[r] = e : null,
                            className: (0,
                            a.Z)(c || "", d().slide, A == r && u || ""),
                            children: e
                        }, r) : null)
                    })
                }), p ? (0,
                s.jsxs)("div", {
                    className: (0,
                    a.Z)(v || "", d().arrows),
                    children: [(0,
                    s.jsx)("button", {
                        onClick: T,
                        disabled: D,
                        children: "<"
                    }), (0,
                    s.jsx)("button", {
                        onClick: X,
                        disabled: V,
                        children: ">"
                    })]
                }) : null]
            })
        }
    },
    261: function(e, r, l) {
        "use strict";
        l.r(r);
        var s = l(5893);
        l(7294);
        var t = l(1754)
          , i = l.n(t)
          , n = l(1549)
          , a = l(4252)
          , o = l.n(a);
        r.default = e=>{
            let {slice: r} = e;
            return (0,
            s.jsx)("section", {
                className: o().section,
                children: (0,
                s.jsx)(n.Z, {
                    emblaApi: {
                        axis: "x",
                        align: 0,
                        startIndex: 0,
                        speed: 8,
                        skipSnaps: !0,
                        dragFree: !0,
                        loop: !0
                    },
                    className: o().slider,
                    viewportClass: o().sliderViewport,
                    containerClass: o().sliderContainer,
                    slideClass: o().sliderSlide,
                    activeClass: o().activeSlide,
                    arrowsClass: o().sliderArrows,
                    children: r.items.map((e,r)=>{
                        var l, t, n, a, d, c, u;
                        return (0,
                        s.jsx)("div", {
                            className: o().inner,
                            children: (0,
                            s.jsx)(i(), {
                                className: o().img,
                                src: null === (l = e.image) || void 0 === l ? void 0 : l.url,
                                width: null === (t = e.image) || void 0 === t ? void 0 : t.dimensions.width,
                                height: null === (n = e.image) || void 0 === n ? void 0 : n.dimensions.height,
                                sizes: (null === (a = e.image) || void 0 === a ? void 0 : a.dimensions.width) > (null === (d = e.image) || void 0 === d ? void 0 : d.dimensions.height) ? "(max-width: 480px) 72vw, 42.8vw" : "(max-width: 480px) 40vw, 20.5vw",
                                alt: (null === (c = e.image) || void 0 === c ? void 0 : c.alt) ? null === (u = e.image) || void 0 === u ? void 0 : u.alt : "",
                                loading: "eager"
                            })
                        }, r)
                    }
                    )
                })
            })
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
    4252: function(e) {
        e.exports = {
            section: "section_gallery",
            sliderViewport: "swiper-container",
            sliderContainer: "gallery_swiper",
            sliderSlide: "swiper-slide",
            inner: "gallery_item--img"
        }
    }
}]);
