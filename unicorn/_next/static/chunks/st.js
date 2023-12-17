(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([[9407], {
    4423: function(e, l, t) {
        (window.__NEXT_P = window.__NEXT_P || []).push(["/case-studies", function() {
            return t(3657)
        }
        ])
    },
    7530: function(e, l, t) {
        "use strict";
        t.d(l, {
            Z: function() {
                return CustomHead
            }
        });
        var i = t(5893)
          , d = t(9008)
          , n = t.n(d);
        function CustomHead(e) {
            var l, t, d, s, a, r, o, u, c;
            let {page: v} = e;
            return (0,
            i.jsxs)(n(), {
                children: [(0,
                i.jsx)("title", {
                    children: null == v ? void 0 : null === (l = v.data) || void 0 === l ? void 0 : l.meta_title
                }), (0,
                i.jsx)("meta", {
                    name: "Description",
                    content: null == v ? void 0 : null === (t = v.data) || void 0 === t ? void 0 : t.meta_description
                }), (0,
                i.jsx)("meta", {
                    name: "Keywords",
                    content: null == v ? void 0 : null === (d = v.data) || void 0 === d ? void 0 : d.meta_keywords
                }), (0,
                i.jsx)("meta", {
                    property: "og:type",
                    content: "website"
                }), (0,
                i.jsx)("meta", {
                    property: "og:title",
                    content: null == v ? void 0 : null === (s = v.data) || void 0 === s ? void 0 : s.meta_title
                }), (0,
                i.jsx)("meta", {
                    property: "og:description",
                    content: null == v ? void 0 : null === (a = v.data) || void 0 === a ? void 0 : a.meta_description
                }), (0,
                i.jsx)("meta", {
                    property: "og:image",
                    content: null == v ? void 0 : null === (r = v.data) || void 0 === r ? void 0 : r.meta_image.url
                }), (0,
                i.jsx)("meta", {
                    name: "twitter:card",
                    content: "summary"
                }), (0,
                i.jsx)("meta", {
                    name: "twitter:title",
                    content: null == v ? void 0 : null === (o = v.data) || void 0 === o ? void 0 : o.meta_title
                }), (0,
                i.jsx)("meta", {
                    name: "twitter:description",
                    content: null == v ? void 0 : null === (u = v.data) || void 0 === u ? void 0 : u.meta_description
                }), (0,
                i.jsx)("meta", {
                    name: "twitter:image",
                    content: null == v ? void 0 : null === (c = v.data) || void 0 === c ? void 0 : c.meta_image.url
                })]
            })
        }
    },
    2856: function(e, l, t) {
        "use strict";
        var i = t(5893)
          , d = t(7294)
          , n = t(5755)
          , s = t(5562)
          , a = t(2470);
        let r = (0,
        d.forwardRef)((e,l)=>{
            let[t,r] = (0,
            d.useState)(0)
              , o = (0,
            d.useRef)(null)
              , [u,c] = (0,
            d.useState)([]);
            (0,
            d.useRef)(0);
            let[v,m] = (0,
            d.useState)(!1)
              , h = ""
              , _ = ["h1", "h2", "h3", "h4", "h5", "h6", "p"].includes(e.type) ? e.type : "div";
            function debounce(e, l) {
                var t, l = l || 100;
                return function(i) {
                    t && clearTimeout(t),
                    t = setTimeout(e, l, i)
                }
            }
            (0,
            d.useImperativeHandle)(l, ()=>({
                splitDone: ()=>v
            })),
            d.Children.map(e.children, e=>{
                if ("string" == typeof e || "number" == typeof e)
                    h += String(e);
                else
                    throw Error("SplitText expects text as children")
            }
            );
            let makeLines = ()=>{
                let e;
                let l = o.current;
                if (!l)
                    return;
                let t = []
                  , i = [];
                for (let d of Array.from(l.children)) {
                    let l = d.getBoundingClientRect().top;
                    null == e && (e = l),
                    l != e && (t.push(i.join(" ")),
                    i = []),
                    e = l,
                    i.push(d.textContent)
                }
                if (i.length > 0) {
                    let e = i[i.length - 1]
                      , l = e.trim();
                    i[i.length - 1] = l,
                    t.push(i.join(" "))
                }
                c(t)
            }
              , refreshLines = ()=>{
                var e, l;
                let t;
                r(e=>e + 1);
                let i = ""
                  , d = []
                  , n = []
                  , s = null == o ? void 0 : null === (e = o.current) || void 0 === e ? void 0 : e.querySelectorAll(".word");
                if (null == s || s.forEach(e=>{
                    i = i.concat(e.outerHTML)
                }
                ),
                null != o.current) {
                    for (let e of (o.current.innerHTML = i,
                    Array.from(null == o ? void 0 : null === (l = o.current) || void 0 === l ? void 0 : l.children))) {
                        let l = e.getBoundingClientRect().top;
                        null == t && (t = l),
                        l != t && (d.push(n.join(" ")),
                        n = []),
                        t = l,
                        n.push(e.textContent)
                    }
                    d.push(n.join("")),
                    c(d)
                }
            }
            ;
            (0,
            n.Z)(()=>{
                makeLines()
            }
            , [h]),
            (0,
            n.Z)(()=>{
                document.fonts.ready.then(()=>{
                    refreshLines(),
                    m(!0)
                }
                )
            }
            , []),
            (0,
            n.Z)(()=>{
                if (!s.Z && !e.once)
                    return window.addEventListener("resize", debounce(refreshLines, 150)),
                    ()=>window.removeEventListener("resize", debounce(refreshLines, 150))
            }
            , []);
            let[y,g] = (0,
            d.useState)(!1);
            (0,
            n.Z)(()=>{
                if (void 0 != window) {
                    let e = document.querySelectorAll(".fadeinup")
                      , l = new IntersectionObserver(function(e) {
                        e.map(e=>{
                            e.isIntersecting && e.target.classList.add("visible")
                        }
                        )
                    }
                    ,{
                        threshold: .3
                    });
                    return e.forEach(e=>l.observe(e)),
                    ()=>{
                        e.forEach(e=>l.unobserve(e))
                    }
                }
            }
            , [y, u]),
            (0,
            n.Z)(()=>{
                if (!s.Z && !e.once)
                    return window.addEventListener("resize", debounce(g, 200)),
                    ()=>window.removeEventListener("resize", debounce(g, 200))
            }
            , []);
            let f = 0;
            return u.length && e.wrap ? (0,
            i.jsx)(_, {
                className: (0,
                a.Z)(e.className, "split", v ? "done" : ""),
                style: e.style,
                ref: o,
                "aria-label": o.current.textContent,
                children: u.map((l,t)=>{
                    let d = l.split(" ")
                      , n = d.filter(e=>"" !== e);
                    return n = n.map((e,l)=>l === d.length - 1 ? e : e + " "),
                    (0,
                    i.jsx)("div", {
                        className: (0,
                        a.Z)("wrap", e.lineWrapClass),
                        "aria-hidden": !0,
                        children: (0,
                        i.jsx)("div", {
                            className: (0,
                            a.Z)("line", e.lineClass),
                            style: (null == e ? void 0 : e.trType) == "line" ? {
                                "--delay": ((t + 1) * .05 + (null == e ? void 0 : e.trDelayStart)).toFixed(2) + "s"
                            } : void 0,
                            children: n.map((l,t)=>(f++,
                            (0,
                            i.jsx)("div", {
                                className: (0,
                                a.Z)("wrap", e.wordWrapClass),
                                children: (0,
                                i.jsx)("div", {
                                    className: (0,
                                    a.Z)("word", e.wordClass),
                                    style: (null == e ? void 0 : e.trType) == "word" ? {
                                        "--delay": (.05 * f + (null == e ? void 0 : e.trDelayStart)).toFixed(2) + "s"
                                    } : void 0,
                                    children: l
                                })
                            }, t)))
                        })
                    }, t)
                }
                )
            }, t) : u.length ? (0,
            i.jsx)(_, {
                className: (0,
                a.Z)(e.className, "split", v ? "done" : ""),
                style: e.style,
                ref: o,
                "aria-label": o.current.textContent,
                children: u.map((l,t)=>{
                    let d = l.split(" ")
                      , n = d.filter(e=>"" !== e);
                    return n = n.map((e,l)=>l === d.length - 1 ? e : e + " "),
                    (0,
                    i.jsx)("div", {
                        className: (0,
                        a.Z)("line", e.lineClass),
                        "aria-hidden": !0,
                        children: n.map((l,t)=>(0,
                        i.jsx)("div", {
                            className: (0,
                            a.Z)("word", e.wordClass),
                            children: l
                        }, t))
                    }, t)
                }
                )
            }, t) : (0,
            i.jsx)(_, {
                className: (0,
                a.Z)(e.className, "split"),
                ref: o,
                style: e.style,
                children: h.split(" ").map((e,l)=>(0,
                i.jsx)("div", {
                    className: "word",
                    children: e + " "
                }, l))
            })
        }
        );
        l.Z = r,
        r.displayName = "SplitText"
    },
    5755: function(e, l, t) {
        "use strict";
        var i = t(7294);
        l.Z = "undefined" != typeof document ? i.useLayoutEffect : i.useEffect
    },
    3657: function(e, l, t) {
        "use strict";
        t.r(l),
        t.d(l, {
            __N_SSG: function() {
                return x
            },
            default: function() {
                return CaseStudies
            }
        });
        var i = t(5893)
          , d = t(7294)
          , n = t(7530)
          , s = t(1664)
          , a = t.n(s)
          , r = t(1754)
          , o = t.n(r)
          , u = t(1583)
          , c = t(6038)
          , v = t(9583)
          , m = t(2856)
          , h = t(2470)
          , _ = t(2548)
          , y = t.n(_)
          , g = t(9349)
          , f = t.n(g)
          , p = t(1270)
          , w = t.n(p)
          , x = !0;
        function CaseStudies(e) {
            var l, t, s, r, _, g, p, x, S, j, C, N, L, E;
            let {page: b, cases: A} = e
              , Z = (0,
            u.LZ)()
              , q = (0,
            d.useRef)()
              , [W,I] = (0,
            d.useState)(0)
              , R = (0,
            d.useRef)(W)
              , O = (0,
            d.useRef)()
              , T = (0,
            d.useRef)(!1)
              , X = (0,
            d.useRef)()
              , k = (0,
            d.useRef)()
              , z = (0,
            d.useRef)()
              , U = (0,
            d.useRef)()
              , [D,F] = (0,
            d.useState)("full")
              , H = (0,
            d.useRef)()
              , M = c.p8.timeline({
                overwrite: !0,
                onComplete: ()=>{
                    T.current = !1
                }
            });
            (0,
            d.useEffect)(()=>{
                var e, l, t, i, d, n, s, a;
                T.current = !0,
                M.to(k.current, {
                    y: "-" + 100 / (null == b ? void 0 : null === (l = b.data) || void 0 === l ? void 0 : null === (e = l.case_studies) || void 0 === e ? void 0 : e.length) * W + "%",
                    duration: 1.25,
                    ease: "customOut"
                }),
                M.to(X.current, {
                    y: "-" + 100 / (null == b ? void 0 : null === (i = b.data) || void 0 === i ? void 0 : null === (t = i.case_studies) || void 0 === t ? void 0 : t.length) * W + "%",
                    duration: 1.25,
                    ease: "customOut"
                }, "<"),
                M.to(z.current, {
                    y: "-" + 100 / (null == b ? void 0 : null === (n = b.data) || void 0 === n ? void 0 : null === (d = n.case_studies) || void 0 === d ? void 0 : d.length) * W + "%",
                    duration: 1.25,
                    ease: "customOut"
                }, "<"),
                z.current.querySelectorAll("img")[W - 1] && M.to(z.current.querySelectorAll("img")[W - 1], {
                    scale: 1.5,
                    duration: 1.25,
                    ease: "customOut"
                }, "<"),
                M.to(z.current.querySelectorAll("img")[W], {
                    scale: 1,
                    duration: 1.25,
                    ease: "customOut"
                }, "<"),
                z.current.querySelectorAll("img")[W + 1] && M.to(z.current.querySelectorAll("img")[W + 1], {
                    scale: 1.5,
                    duration: 1.25,
                    ease: "customOut"
                }, "<"),
                M.to(U.current, {
                    y: "-" + 100 / (null == b ? void 0 : null === (a = b.data) || void 0 === a ? void 0 : null === (s = a.case_studies) || void 0 === s ? void 0 : s.length) * W + "%",
                    duration: 1.25,
                    ease: "customOut"
                }, "<"),
                R.current = W
            }
            , [W]),
            (0,
            d.useEffect)(()=>(O.current = v.Observer.create({
                type: "wheel, touch",
                tolerance: 10,
                target: q.current,
                wheelSpeed: -1,
                onUp: ()=>!T.current && void (R.current < b.data.case_studies.length - 1 && I(e=>e + 1)),
                onDown: ()=>!T.current && void (R.current > 0 && I(e=>e - 1))
            }),
            ()=>O.current.kill()), [q.current]),
            (0,
            d.useEffect)(()=>{
                var e, l;
                "full" == D ? (null === (e = O.current) || void 0 === e || e.enable(),
                null == Z || Z.stop()) : (null === (l = O.current) || void 0 === l || l.disable(),
                null == Z || Z.start())
            }
            , [D, Z]),
            (0,
            d.useEffect)(()=>{
                var e, l, t, i, d, n;
                let s = null == H ? void 0 : null === (e = H.current) || void 0 === e ? void 0 : e.querySelector("." + w().hover);
                function handleEnter(e) {
                    if (s.style.width = e.target.clientWidth + "px",
                    e.target.hasAttribute("data-full"))
                        s.style.transform = "translateX(0px)",
                        H.current.querySelectorAll("." + w().switch)[0].style.color = "#2a2a2a",
                        H.current.querySelectorAll("." + w().switch)[1].style.color = "#fff";
                    else {
                        var l;
                        s.style.transform = "translateX(" + (null == H ? void 0 : null === (l = H.current) || void 0 === l ? void 0 : l.querySelectorAll("." + w().switch)[0].clientWidth) + "px)",
                        H.current.querySelectorAll("." + w().switch)[0].style.color = "#fff",
                        H.current.querySelectorAll("." + w().switch)[1].style.color = "#2a2a2a"
                    }
                }
                function handleLeave(e) {
                    if (!e.target.classList.contains(w().active)) {
                        var l, t, i;
                        e.target.hasAttribute("data-full") ? (s.style.width = (null == H ? void 0 : null === (l = H.current) || void 0 === l ? void 0 : l.querySelectorAll("." + w().switch)[1].clientWidth) + "px",
                        s.style.transform = "translateX(" + (null == H ? void 0 : null === (t = H.current) || void 0 === t ? void 0 : t.querySelectorAll("." + w().switch)[0].clientWidth) + "px)",
                        H.current.querySelectorAll("." + w().switch)[0].style.color = "#fff",
                        H.current.querySelectorAll("." + w().switch)[1].style.color = "#2a2a2a") : (s.style.width = (null == H ? void 0 : null === (i = H.current) || void 0 === i ? void 0 : i.querySelectorAll("." + w().switch)[0].clientWidth) + "px",
                        s.style.transform = "translateX(0px)",
                        H.current.querySelectorAll("." + w().switch)[0].style.color = "#2a2a2a",
                        H.current.querySelectorAll("." + w().switch)[1].style.color = "#fff")
                    }
                }
                return s.style.width = (null == H ? void 0 : null === (l = H.current) || void 0 === l ? void 0 : l.querySelectorAll("." + w().switch)[0].clientWidth) + "px",
                null == H || null === (t = H.current) || void 0 === t || t.querySelectorAll("." + w().switch)[0].addEventListener("mouseenter", handleEnter),
                null == H || null === (i = H.current) || void 0 === i || i.querySelectorAll("." + w().switch)[1].addEventListener("mouseenter", handleEnter),
                null == H || null === (d = H.current) || void 0 === d || d.querySelectorAll("." + w().switch)[0].addEventListener("mouseleave", handleLeave),
                null == H || null === (n = H.current) || void 0 === n || n.querySelectorAll("." + w().switch)[1].addEventListener("mouseleave", handleLeave),
                ()=>{
                    var e, l, t, i;
                    null == H || null === (e = H.current) || void 0 === e || e.querySelectorAll("." + w().switch)[0].removeEventListener("mouseenter", handleEnter),
                    null == H || null === (l = H.current) || void 0 === l || l.querySelectorAll("." + w().switch)[1].removeEventListener("mouseenter", handleEnter),
                    null == H || null === (t = H.current) || void 0 === t || t.querySelectorAll("." + w().switch)[0].removeEventListener("mouseleave", handleLeave),
                    null == H || null === (i = H.current) || void 0 === i || i.querySelectorAll("." + w().switch)[1].removeEventListener("mouseleave", handleLeave)
                }
            }
            , [H.current]);
            let[Y,B] = (0,
            d.useState)();
            return (0,
            d.useEffect)(()=>{
                if (window.innerWidth < 481) {
                    function handleResize() {
                        B(window.innerHeight + "px")
                    }
                    return addEventListener("resize", handleResize),
                    ()=>removeEventListener("resize", handleResize)
                }
            }
            , []),
            (0,
            i.jsxs)(i.Fragment, {
                children: [(0,
                i.jsx)(n.Z, {
                    page: b
                }), (0,
                i.jsxs)("section", {
                    className: w().section,
                    style: {
                        "--height": Y
                    },
                    ref: q,
                    children: [(null == b ? void 0 : null === (l = b.data) || void 0 === l ? void 0 : l.heading) ? (0,
                    i.jsx)("h1", {
                        className: w().hidden,
                        children: null == b ? void 0 : null === (t = b.data) || void 0 === t ? void 0 : t.heading
                    }) : null, (0,
                    i.jsxs)("div", {
                        className: w().layout,
                        children: [(0,
                        i.jsxs)("div", {
                            className: w().count,
                            children: [(0,
                            i.jsx)("div", {
                                className: (0,
                                h.Z)(w().countWrap, f().moveUp),
                                style: {
                                    "--delay": "0.8s"
                                },
                                children: (0,
                                i.jsx)("div", {
                                    className: w().countList,
                                    ref: X,
                                    children: null == b ? void 0 : null === (r = b.data) || void 0 === r ? void 0 : null === (s = r.case_studies) || void 0 === s ? void 0 : s.map((e,l)=>(0,
                                    i.jsx)("div", {
                                        className: y().XS,
                                        children: "00-" + (l + 1)
                                    }, l))
                                })
                            }), (0,
                            i.jsx)("div", {
                                className: (0,
                                h.Z)(f().moveUp, y().XS),
                                style: {
                                    "--delay": "0.85s"
                                },
                                children: "—"
                            }), (0,
                            i.jsx)("div", {
                                className: (0,
                                h.Z)(f().moveUp, y().XS),
                                style: {
                                    "--delay": "0.9s"
                                },
                                children: "00-" + (null == b ? void 0 : null === (g = b.data) || void 0 === g ? void 0 : null === (_ = g.case_studies) || void 0 === _ ? void 0 : _.length)
                            })]
                        }), (0,
                        i.jsx)("div", {
                            className: w().headingWrap,
                            children: (0,
                            i.jsx)("div", {
                                className: w().headingList,
                                ref: k,
                                children: null == b ? void 0 : null === (x = b.data) || void 0 === x ? void 0 : null === (p = x.case_studies) || void 0 === p ? void 0 : p.map((e,l)=>{
                                    var t, d, n, s, r, o;
                                    return (null == e ? void 0 : null === (d = e.case_study) || void 0 === d ? void 0 : null === (t = d.data) || void 0 === t ? void 0 : t.title) ? (0,
                                    i.jsx)(a(), {
                                        "data-hover": null == e ? void 0 : null === (s = e.case_study) || void 0 === s ? void 0 : null === (n = s.data) || void 0 === n ? void 0 : n.title,
                                        href: e.case_study.url ? e.case_study.url : "",
                                        target: e.case_study.target ? e.case_study.target : "",
                                        scroll: !1,
                                        children: (0,
                                        i.jsx)(m.Z, {
                                            type: "h2",
                                            className: y().XL,
                                            once: !0,
                                            wrap: !0,
                                            wordClass: 0 == l ? f().moveUp : "",
                                            trType: "word",
                                            trDelayStart: .5,
                                            children: null == e ? void 0 : null === (o = e.case_study) || void 0 === o ? void 0 : null === (r = o.data) || void 0 === r ? void 0 : r.title
                                        })
                                    }, l) : null
                                }
                                )
                            })
                        }), (0,
                        i.jsx)("div", {
                            className: w().bgImgContainer,
                            children: (0,
                            i.jsx)("div", {
                                className: (0,
                                h.Z)(w().bgimgWrap, "grid" == D ? w().gridOpen : ""),
                                children: (0,
                                i.jsx)("div", {
                                    ref: z,
                                    children: null == b ? void 0 : null === (j = b.data) || void 0 === j ? void 0 : null === (S = j.case_studies) || void 0 === S ? void 0 : S.map((e,l)=>{
                                        var t, d, n, s, r, u, c, v, m, h, _, y, g, f, p, x, S, j, C;
                                        return (null == e ? void 0 : null === (d = e.case_study) || void 0 === d ? void 0 : null === (t = d.data) || void 0 === t ? void 0 : t.cover_image) ? (0,
                                        i.jsx)(a(), {
                                            className: w().img,
                                            "data-hover": null == e ? void 0 : null === (s = e.case_study) || void 0 === s ? void 0 : null === (n = s.data) || void 0 === n ? void 0 : n.title,
                                            href: e.case_study.url ? e.case_study.url : "",
                                            target: e.case_study.target ? e.case_study.target : "",
                                            scroll: !1,
                                            children: (0,
                                            i.jsx)(o(), {
                                                src: null == e ? void 0 : null === (c = e.case_study) || void 0 === c ? void 0 : null === (u = c.data) || void 0 === u ? void 0 : null === (r = u.cover_image) || void 0 === r ? void 0 : r.url,
                                                width: null == e ? void 0 : null === (h = e.case_study) || void 0 === h ? void 0 : null === (m = h.data) || void 0 === m ? void 0 : null === (v = m.cover_image) || void 0 === v ? void 0 : v.dimensions.width,
                                                height: null == e ? void 0 : null === (g = e.case_study) || void 0 === g ? void 0 : null === (y = g.data) || void 0 === y ? void 0 : null === (_ = y.cover_image) || void 0 === _ ? void 0 : _.dimensions.height,
                                                sizes: "100vw",
                                                alt: (null == e ? void 0 : null === (x = e.case_study) || void 0 === x ? void 0 : null === (p = x.data) || void 0 === p ? void 0 : null === (f = p.cover_image) || void 0 === f ? void 0 : f.alt) ? null == e ? void 0 : null === (C = e.case_study) || void 0 === C ? void 0 : null === (j = C.data) || void 0 === j ? void 0 : null === (S = j.cover_image) || void 0 === S ? void 0 : S.alt : "",
                                                priority: 0 == l,
                                                loading: "eager"
                                            })
                                        }, l) : null
                                    }
                                    )
                                })
                            })
                        }), (0,
                        i.jsx)("div", {
                            className: w().csImgContainer,
                            children: (0,
                            i.jsx)("div", {
                                className: w().caseImgWrap,
                                children: (0,
                                i.jsx)("div", {
                                    className: f().moveUp,
                                    style: {
                                        "--delay": "0.5s"
                                    },
                                    children: (0,
                                    i.jsx)("div", {
                                        className: (0,
                                        h.Z)(w().caseImgInner, "grid" == D ? w().gridOpen : ""),
                                        ref: U,
                                        children: null == b ? void 0 : null === (N = b.data) || void 0 === N ? void 0 : null === (C = N.case_studies) || void 0 === C ? void 0 : C.map((e,l)=>{
                                            var t, d, n, s, r, u, c, v, m, h, _, y, g, f, p, x, S, j, C;
                                            return (null == e ? void 0 : null === (d = e.case_study) || void 0 === d ? void 0 : null === (t = d.data) || void 0 === t ? void 0 : t.case_image) ? (0,
                                            i.jsx)(a(), {
                                                "data-hover": null == e ? void 0 : null === (s = e.case_study) || void 0 === s ? void 0 : null === (n = s.data) || void 0 === n ? void 0 : n.title,
                                                href: e.case_study.url ? e.case_study.url : "",
                                                target: e.case_study.target ? e.case_study.target : "",
                                                scroll: !1,
                                                children: (0,
                                                i.jsx)("div", {
                                                    className: w().caseImg,
                                                    children: (0,
                                                    i.jsx)(o(), {
                                                        src: null == e ? void 0 : null === (c = e.case_study) || void 0 === c ? void 0 : null === (u = c.data) || void 0 === u ? void 0 : null === (r = u.case_image) || void 0 === r ? void 0 : r.url,
                                                        width: null == e ? void 0 : null === (h = e.case_study) || void 0 === h ? void 0 : null === (m = h.data) || void 0 === m ? void 0 : null === (v = m.case_image) || void 0 === v ? void 0 : v.dimensions.width,
                                                        height: null == e ? void 0 : null === (g = e.case_study) || void 0 === g ? void 0 : null === (y = g.data) || void 0 === y ? void 0 : null === (_ = y.case_image) || void 0 === _ ? void 0 : _.dimensions.height,
                                                        sizes: "47vw",
                                                        alt: (null == e ? void 0 : null === (x = e.case_study) || void 0 === x ? void 0 : null === (p = x.data) || void 0 === p ? void 0 : null === (f = p.case_image) || void 0 === f ? void 0 : f.alt) ? null == e ? void 0 : null === (C = e.case_study) || void 0 === C ? void 0 : null === (j = C.data) || void 0 === j ? void 0 : null === (S = j.case_image) || void 0 === S ? void 0 : S.alt : "",
                                                        priority: 0 == l,
                                                        loading: "eager"
                                                    })
                                                }, l)
                                            }, l) : null
                                        }
                                        )
                                    })
                                })
                            })
                        })]
                    }), (0,
                    i.jsx)("div", {
                        className: w().gridContainer,
                        children: (0,
                        i.jsx)("div", {
                            className: (0,
                            h.Z)(w().gridList, "grid" == D ? w().gridOpen : ""),
                            children: null == b ? void 0 : null === (E = b.data) || void 0 === E ? void 0 : null === (L = E.case_studies) || void 0 === L ? void 0 : L.filter((e,l)=>l != W).map((e,l)=>{
                                var t, n, s, r, u, v, m, h, _, g, f, p, x, S, j, C, N, L, E, Z, q, W, I, R, O, T;
                                let X;
                                null == A || null === (n = A.data) || void 0 === n || null === (t = n.case_studies) || void 0 === t || t.forEach((l,t)=>{
                                    var i, d;
                                    (null == l ? void 0 : null === (i = l.case_study) || void 0 === i ? void 0 : i.uid) == (null == e ? void 0 : null === (d = e.case_study) || void 0 === d ? void 0 : d.uid) && (X = "00-" + (t + 1))
                                }
                                );
                                let k = (0,
                                d.useRef)();
                                return (0,
                                d.useEffect)(()=>{
                                    if ("grid" == D && window.innerWidth > 480) {
                                        let e = c.p8.context(()=>{
                                            c.p8.to(k.current.querySelector("img"), {
                                                y: "-12%",
                                                ease: "linear",
                                                scrollTrigger: {
                                                    trigger: k.current,
                                                    start: "clamp(0% 100%)",
                                                    end: "clamp(100% 0%)",
                                                    scrub: !0
                                                }
                                            })
                                        }
                                        );
                                        return ()=>e.revert()
                                    }
                                }
                                , [D, k.current]),
                                (0,
                                i.jsxs)(a(), {
                                    className: w().gridItem,
                                    "data-hover": null == e ? void 0 : null === (r = e.case_study) || void 0 === r ? void 0 : null === (s = r.data) || void 0 === s ? void 0 : s.title,
                                    href: e.case_study.url ? e.case_study.url : "",
                                    target: e.case_study.target ? e.case_study.target : "",
                                    scroll: !1,
                                    children: [(0,
                                    i.jsxs)("div", {
                                        className: w().countWrap,
                                        children: [(0,
                                        i.jsx)("div", {
                                            className: y().XS,
                                            children: X
                                        }, l), (0,
                                        i.jsx)("div", {
                                            className: y().XS,
                                            children: "—"
                                        }), (0,
                                        i.jsx)("div", {
                                            className: y().XS,
                                            children: "00-" + (null == b ? void 0 : null === (v = b.data) || void 0 === v ? void 0 : null === (u = v.case_studies) || void 0 === u ? void 0 : u.length)
                                        })]
                                    }), (null == e ? void 0 : null === (h = e.case_study) || void 0 === h ? void 0 : null === (m = h.data) || void 0 === m ? void 0 : m.title) ? (0,
                                    i.jsx)("h2", {
                                        className: y().M,
                                        children: null == e ? void 0 : null === (g = e.case_study) || void 0 === g ? void 0 : null === (_ = g.data) || void 0 === _ ? void 0 : _.title
                                    }, l) : null, (null == e ? void 0 : null === (p = e.case_study) || void 0 === p ? void 0 : null === (f = p.data) || void 0 === f ? void 0 : f.cover_image) ? (0,
                                    i.jsx)("div", {
                                        className: w().img,
                                        ref: k,
                                        children: (0,
                                        i.jsx)(o(), {
                                            src: null == e ? void 0 : null === (j = e.case_study) || void 0 === j ? void 0 : null === (S = j.data) || void 0 === S ? void 0 : null === (x = S.cover_image) || void 0 === x ? void 0 : x.url,
                                            width: null == e ? void 0 : null === (L = e.case_study) || void 0 === L ? void 0 : null === (N = L.data) || void 0 === N ? void 0 : null === (C = N.cover_image) || void 0 === C ? void 0 : C.dimensions.width,
                                            height: null == e ? void 0 : null === (Z = e.case_study) || void 0 === Z ? void 0 : null === (E = Z.data) || void 0 === E ? void 0 : E.cover_image.dimensions.height,
                                            sizes: "100vw",
                                            alt: (null == e ? void 0 : null === (I = e.case_study) || void 0 === I ? void 0 : null === (W = I.data) || void 0 === W ? void 0 : null === (q = W.cover_image) || void 0 === q ? void 0 : q.alt) ? null == e ? void 0 : null === (T = e.case_study) || void 0 === T ? void 0 : null === (O = T.data) || void 0 === O ? void 0 : null === (R = O.cover_image) || void 0 === R ? void 0 : R.alt : ""
                                        })
                                    }) : null]
                                }, l)
                            }
                            )
                        })
                    }), (0,
                    i.jsx)("div", {
                        className: w().viewWrap,
                        children: (0,
                        i.jsxs)("div", {
                            className: (0,
                            h.Z)(w().view, f().moveUp),
                            style: {
                                "--delay": "1s"
                            },
                            ref: H,
                            children: [(0,
                            i.jsx)("div", {
                                className: w().hover
                            }), (0,
                            i.jsx)("button", {
                                className: (0,
                                h.Z)(w().switch, "full" == D ? w().active : ""),
                                onClick: function() {
                                    T.current || F("full")
                                },
                                "data-full": !0,
                                children: "FULL"
                            }), (0,
                            i.jsx)("button", {
                                className: (0,
                                h.Z)(w().switch, "grid" == D ? w().active : ""),
                                onClick: function() {
                                    T.current || F("grid")
                                },
                                "data-grid": !0,
                                children: "GRID"
                            })]
                        })
                    })]
                })]
            })
        }
    },
    1270: function(e) {
        e.exports = {
            section: "section_studies",
            hidden: "caseStudies_title",
            layout: "caseStudies_layout--main",
            countWrap: "caseStudies_count--wrap",
            count: "caseStudies_count--box",
            headingWrap: "caseStudies_heading--wrap",
            headingList: "caseStudies_heading--list",
            bgImgContainer: "caseStudies_bgImg--container",
            bgimgWrap: "caseStudies_bgImg--wrap",
            img: "caseStudies_img--link",
            link: "CaseStudies_link__4SmFN",
            gridOpen: "caseStudies_gridOpen",
            csImgContainer: "caseStudies_csImg--container",
            caseImgWrap: "caseStudies_csImg--wrap",
            caseImgInner: "caseStudies_csImg--list",
            caseImg: "CaseStudies_caseImg__YChLu",
            gridContainer: "caseStudies_grid--container",
            gridList: "caseStudies_grid--list",
            gridItem: "caseStudies_grid--item",
            viewWrap: "caseStudies_viewWrap--action",
            view: "caseStudies_view--action",
            switch: "caseStudies_view--but",
            hover: "caseStudies_view--hover",
            active: "caseStudies_view--acitve",
            mobile: "CaseStudies_mobile__Tfky5"
        }
    }
}, function(e) {
    e.O(0, [1754, 9774, 2888, 179], function() {
        return e(e.s = 4423)
    }),
    _N_E = e.O()
}
]);
