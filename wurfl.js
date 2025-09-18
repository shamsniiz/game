// This file is generated dynamically per-request and cannot be used directly.
// To use WURFL.js, please see the documentation at https://web.wurfl.io/#wurfl-js
//
// Copyright 2025 - ScientiaMobile, Inc., Reston, VA
// WURFL Device Detection
// Terms of service:
// https://www.scientiamobile.com/terms-of-service-wurfl-js-lite/
//
// For improved iPhone/iPad detection, upgrade to WURFL.js Business Edition:
// https://www.scientiamobile.com/products/wurfl-js/

/*! WURFL.js-BE 2025-06-11  [29db46e] */
var WURFL = {
    complete_device_name: "Google Chrome",
    form_factor: "Desktop",
    is_mobile: !1
}
  , wurfl_debug = !1
  , wurfljs_host = "https://wurfl.io"
  , wurfljs_cache_ttl = 6048e5
  , WurflJsUACHResolver = function(e, t, n, s) {
    function c() {
        m("WurflJSDetectionComplete", f())
    }
    function v(e) {
        e instanceof SecurityPolicyViolationEvent && e.blockedURI === l && (e = new URL(l).origin,
        console.warn('WURFL.js was blocked by your Content-Security-Policy, please allow: "connect-src ' + e + '"'))
    }
    var h = t + "/29db46e"
      , o = e
      , u = s
      , a = o.document
      , e = new URL(t + "/async-detect")
      , l = (0 [0 ] !== o.WURFL.wurfl_id && e.searchParams.set("wurfl_id", "true"),
    s && e.searchParams.set("mode", "prebid"),
    e.toString())
      , p = ["architecture", "bitness", "model", "platformVersion", "uaFullVersion", "fullVersionList"]
      , d = {
        key: "wurfljs_cache",
        enabled: !n,
        prefix: "can"
    }
      , i = function(e, t) {
        try {
            return o.localStorage.setItem(e, t),
            !0
        } catch (e) {
            return !1
        }
    }
      , g = function(e, t) {
        !o.localStorage || t < 2 || (i("wjs-version", h),
        i("wjs-ua", o.navigator.userAgent),
        i("wjs-confidence", t),
        i("wjs-data", JSON.stringify(e)),
        null === o.localStorage.getItem("wjs-expires") && (t = new Date,
        e = 6048e5,
        o.wurfljs_cache_ttl && (e = o.wurfljs_cache_ttl),
        t.setTime(t.getTime() + e),
        i("wjs-expires", t.getTime())))
    }
      , r = (this.clearCache = function() {
        try {
            o.localStorage.removeItem("wjs-version"),
            o.localStorage.removeItem("wjs-expires"),
            o.localStorage.removeItem("wjs-ua"),
            o.localStorage.removeItem("wjs-data"),
            o.localStorage.removeItem("wjs-confidence")
        } catch (e) {}
    }
    ,
    this.clearCache)
      , m = function(e, t) {
        var n;
        "CustomEvent"in o ? a.dispatchEvent(new o.CustomEvent(e,{
            bubbles: !0,
            detail: t
        })) : ((n = a.createEvent("CustomEvent")).initCustomEvent(e, !0, !0, t),
        a.dispatchEvent(n))
    }
      , f = function() {
        return u ? {
            WURFL: o.WURFL,
            wurfl_pbjs: u
        } : {
            WURFL: o.WURFL
        }
    }
      , b = function(e) {
        var t, n = [];
        for (t in e)
            n.push('"' + e[t].brand + '";v="' + e[t].version + '"');
        return n.join(", ")
    }
      , j = function(e) {
        var t, n = {};
        for (t in e)
            switch (typeof e[t]) {
            case "object":
                n[t] = b(e[t]);
                break;
            case "boolean":
                n[t] = e.k ? "?1" : "?0";
                break;
            default:
                n[t] = '"' + e[t].toString() + '"'
            }
        return n
    };
    this.main = function() {
        if ("Promise"in o && (o.WURFLPromises = {
            init: new Promise(function(e) {
                a.addEventListener("WurflJSInitComplete", function(t) {
                    e(t.detail)
                }, {
                    passive: !0,
                    once: !0
                })
            }
            ),
            complete: new Promise(function(e) {
                a.addEventListener("WurflJSDetectionComplete", function(t) {
                    e(t.detail)
                }, {
                    passive: !0,
                    once: !0
                })
            }
            )
        }),
        m("WurflJSInitComplete", f()),
        0 [0 ] !== o.WurflJSNavigatorUAData && 0 [0 ] !== o.navigator.userAgentData && navigator.userAgentData instanceof o.WurflJSNavigatorUAData)
            c();
        else if ("userAgentData"in o.navigator && "getHighEntropyValues"in o.navigator.userAgentData) {
            if (d.enabled) {
                var e = function() {
                    if (!o.localStorage)
                        return null;
                    var t = o.localStorage.getItem("wjs-version")
                      , n = o.localStorage.getItem("wjs-expires")
                      , s = o.localStorage.getItem("wjs-ua")
                      , e = o.localStorage.getItem("wjs-data");
                    if (null === t || null === n || null === e)
                        return null;
                    if (t !== h || s !== o.navigator.userAgent)
                        return r(),
                        null;
                    if (o.WURFL && !e.wurfl_id != !o.WURFL.wurfl_id)
                        return r(),
                        null;
                    if (parseInt(n, 10) < (new Date).getTime())
                        return r(),
                        null;
                    try {
                        return JSON.parse(e)
                    } catch (e) {
                        return r(),
                        null
                    }
                }();
                if (null !== e && "complete_device_name"in e && !e.complete_device_name.match(/^Generic Android$/))
                    return o.WURFL = e,
                    c(),
                    o.WURFL
            }
            "SecurityPolicyViolationEvent"in o && document.addEventListener("securitypolicyviolation", v, {
                passive: !0
            }),
            new Promise(function(e, t) {
                try {
                    o.navigator.userAgentData.getHighEntropyValues(p).then(function(n) {
                        o.fetch(l, {
                            method: "post",
                            body: JSON.stringify({
                                uach: j(n)
                            }),
                            headers: {
                                accept: "application/json",
                                "content-type": "application/json"
                            }
                        }).then(function(e) {
                            return e.json()
                        }).then(function(n) {
                            "WURFL"in n && "object" == typeof n.WURFL ? (d.enabled && g(n.WURFL, n.confidence),
                            e(n.WURFL)) : t("WURFL.js UA-CH detection failed: corrupt UA-CH response")
                        }).catch(function(e) {
                            t("WURFL.js UA-CH detection failed: " + e)
                        })
                    }).catch(function(e) {
                        t("WURFL.js UA-CH detection failed: " + e)
                    })
                } catch (e) {
                    t("WURFL.js UA-CH detection failed: " + e)
                }
            }
            ).then(function(e) {
                o.WURFL = e
            }).catch(function(e) {
                console.warn(e)
            }).finally(function() {
                c()
            })
        } else
            c()
    }
};
!function() {
    if (!("object" != typeof window || "__wurfljs_NORUN"in window)) {
        var e = "wurfl_debug"in window && window.wurfl_debug || "__wurfljs_DEBUG"in window && window.__wurfljs_DEBUG
          , t = "wurfl_pbjs"in window ? window.wurfl_pbjs : 0 [0 ]
          , e = new WurflJsUACHResolver(window,wurfljs_host,e,t);
        try {
            e.main()
        } catch (e) {
            console.error(e)
        }
    }
}()
