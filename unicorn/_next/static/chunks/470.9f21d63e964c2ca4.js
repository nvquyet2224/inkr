(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([[470], {
    4470: function(e, r, t) {
        "use strict";
        t.r(r);
        var s = t(5893)
          , a = t(7294)
          , c = t(6038)
          , n = t(6546)
          , o = t(406)
          , i = t.n(o);
        r.default = e=>{
            let {slice: r} = e
              , t = (0,
            a.useRef)()
              , o = (0,
            a.useRef)()
              , [l,d] = (0,
            a.useState)(!1)
              , [u,p] = (0,
            a.useState)(!1);
            return (0,
            a.useEffect)(()=>{
                if (void 0 != o.current) {
                    let e;
                    function preload() {
                        o.current.addEventListener("canplaythrough", d(!0)),
                        o.current.setAttribute("src", e),
                        o.current.load(),
                        o.current.pause()
                    }
                    return e = window.outerWidth <= 480 ? o.current.querySelector(".source-sm").getAttribute("data-src") : o.current.querySelector(".source-lg").getAttribute("data-src"),
                    document.addEventListener("scroll", preload, {
                        once: !0
                    }),
                    ()=>{
                        document.removeEventListener("scroll", preload)
                    }
                }
            }
            , []),
            (0,
            a.useEffect)(()=>{
                if (l) {
                    if (u) {
                        let e = o.current.play();
                        void 0 !== e && e.then().catch(e=>{}
                        )
                    } else
                        o.current.pause()
                }
            }
            , [u, l]),
            (0,
            a.useEffect)(()=>{
                if (void 0 != o.current) {
                    let e = new IntersectionObserver(function(e) {
                        e[0].isIntersecting ? p(!0) : p(!1)
                    }
                    ,{
                        threshold: 0
                    });
                    return e.observe(o.current),
                    ()=>{
                        e.disconnect()
                    }
                }
            }
            , []),
            (0,
            a.useEffect)(()=>{
                if (matchMedia("all and (orientation:landscape)").matches) {
                    let e = c.ZP.context(()=>{
                        n.ScrollTrigger.create({
                            trigger: t.current,
                            start: "clamp(0% 100%)",
                            end: "clamp(0% 0%+=56px)",
                            scrub: !0,
                            animation: c.ZP.fromTo(t.current, {
                                width: "47vw"
                            }, {
                                width: "100vw",
                                ease: "linear"
                            })
                        })
                    }
                    );
                    return ()=>{
                        e.revert()
                    }
                }
            }
            , [t]),
            (0,
            s.jsx)("section", {
                className: i().section,
                children: (0,
                s.jsxs)("div", {
                    className: i().inner,
                    ref: t,
                    children: [(0,
                    s.jsx)("div", {
                        className: i().loader,
                        children: (0,
                        s.jsx)("div", {
                            className: i().progressWrap,
                            children: (0,
                            s.jsx)("div", {
                                className: i().progress
                            })
                        })
                    }), (0,
                    s.jsx)("div", {
                        className: i().expand,
                        children: (0,
                        s.jsxs)("video", {
                            autoPlay: !0,
                            loop: !0,
                            muted: !0,
                            playsInline: !0,
                            preload: "metadata",
                            ref: o,
                            children: [(0,
                            s.jsx)("source", {
                                className: "source-lg",
                                "data-src": r.primary.source_large.url
                            }), (0,
                            s.jsx)("source", {
                                className: "source-sm",
                                "data-src": r.primary.source_small.url
                            })]
                        })
                    })]
                })
            })
        }
    },
    406: function(e) {
        e.exports = {
            section: "section_video",
            inner: "video_box",
            loader: "video_loader",
            progressWrap: "video_progress_wrap",
            progress: "video_progress_bar",
            "video-load": "Video_video-load__I0LnL",
            expand: "video_expand--box"
        }
    }
}]);
