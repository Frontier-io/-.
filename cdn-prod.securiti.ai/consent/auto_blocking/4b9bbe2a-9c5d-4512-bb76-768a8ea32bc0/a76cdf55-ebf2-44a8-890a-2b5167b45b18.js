"use strict";

function _typeof(t) {
    return (_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
        return typeof t
    } : function(t) {
        return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
    })(t)
}
window.addEventListener("error", function(t) {
    utilities && utilities.handleSdkErrorGlobally(t)
}), window.addEventListener("unhandledrejection", function(t) {
    utilities && utilities.handleSdkErrorGlobally(t)
});
var authDetails = {},
    utilities = null,
    autoBlocking = function(i) {
        if (!(!i || "object" !== _typeof(i) || function() {
                var t = [/Googlebot/, /bingbot/, /YandexBot/, /Twitterbot/, /LinkedInBot/, /Slackbot/, /Discordbot/, /Baiduspider/, /DuckDuckBot/, /S[eE][mM]rushBot/];
                if (!i.is_bot_detection_enabled) return;
                var e, r = navigator.userAgent,
                    o = !1;
                for (e in t)
                    if (t[e].test(r)) {
                        console.log("Bot detected skipping the autoblocking", t[e]), o = !0;
                        break
                    }
                return o
            }() || i && i.hide_cookie_categories_tab)) {
            i && i.app_url && i.auth_token && (authDetails = {
                authToken: i.auth_token,
                url: i.app_url
            }, commonUtilites) && (utilities = commonUtilites({
                info: authDetails,
                fileName: "auto_blocking",
                key: "ab"
            })), i && i.ENV && (CURRENT_ENV = i.ENV);
            var e, r, a = ["embed", "iframe", "script", "img"],
                o = "data-cookiecategory",
                t = function(t) {
                    t = ("; " + document.cookie).split("; " + t + "=");
                    if (t.length < 2) return 0;
                    t = t.pop().split(";").shift();
                    return t && function(e) {
                        try {
                            return /^(?:[A-Za-z0-9+/]{4})*(?:[A-Za-z0-9+/]{2}==|[A-Za-z0-9+/]{3}=)?$/.test(e) ? atob(e) : e
                        } catch (t) {
                            return e
                        }
                    }(t)
                }("__privaci_cookie_consents"),
                n = new RegExp("^cdn-(.*).securiti.(xyz|ai)$"),
                c = [];
            if (i.blockUnpublishedCookies = i.auto_block_unpublished_cookies || !1, t) try {
                e = JSON.parse(t).consents, Object.keys(e).forEach(function(t) {
                    t = parseInt(t), e[t] && -1 === i.non_optout_categories.indexOf(t) && c.push(t)
                })
            } catch (t) {}
            i.initiators && i.initiators.length && (r = window.location.hostname, i.initiators = i.initiators.map(function(t) {
                return t.initiator = t.initiator.split(":").slice(0, 2).join(":"), t
            }).filter(function(t) {
                return t.initiator && t.initiator.trim && "" !== t.initiator.trim() && !u(t.initiator)
            }), i.blockUnpublishedCookies || (i.initiators = i.initiators.map(function(t) {
                return t.initiator = t.initiator.split(":").slice(0, 2).join(":"), t
            }).filter(function(t) {
                t = l(t.initiator && t.initiator.trim && t.initiator.trim() || "");
                return i.securiti_cookie_domain_enabled ? !("." + t).endsWith(i.securiti_cookie_domain) : t !== r
            })));
            new MutationObserver(function(t) {
                for (var e = 0; e < t.length; e++) {
                    for (var r = t[e].addedNodes, o = 0; o < r.length; o++) {
                        var n = r[o];
                        n.nodeType === Node.ELEMENT_NODE && -1 < a.indexOf(n.tagName.toLowerCase()) && !f(n) && ("script" === n.tagName.toLowerCase() ? y : g)(n)
                    }
                    var i = t[e].target;
                    f(i) || ("script" === i.tagName.toLowerCase() ? y(i) : -1 !== a.indexOf(i.nodeName.toLowerCase()) && g(i))
                }
            }).observe(document.documentElement, {
                childList: !0,
                subtree: !0,
                attributes: !0,
                attributeFilter: ["src"]
            }), window.scrt_c_elm_ab = window.scrt_c_elm_ab || document.createElement;
            var s = {
                src: Object.getOwnPropertyDescriptor(HTMLScriptElement.prototype, "src"),
                type: Object.getOwnPropertyDescriptor(HTMLScriptElement.prototype, "type")
            };
            try {
                document.createElement = function() {
                    for (var r, o, t = arguments.length, n = new Array(t), e = 0; e < t; e++) n[e] = arguments[e];
                    return "script" !== n[0].toLowerCase() && -1 == a.indexOf(n[0].toLowerCase()) ? window.scrt_c_elm_ab.bind(document).apply(void 0, n) : (r = window.scrt_c_elm_ab.bind(document).apply(void 0, n), o = r.setAttribute.bind(r), Object.defineProperties(r, {
                        src: {
                            get: function() {
                                return "script" === this.tagName.toLowerCase() ? s.src.get.call(this) : r.getAttribute("src")
                            },
                            set: function(t) {
                                var e = m(t);
                                (!(0 < e.length) || h(e) || f(r)) && (0 !== e.length || !i.blockUnpublishedCookies || f(r) || u(t)) ? o("src", t): "script" === n[0].toLowerCase() ? (s.type.set.call(this, "text/plain"), s.src.set.call(this, t)) : -1 !== a.indexOf(n[0].toLowerCase()) && (r.removeAttribute("src"), o("data-src", t))
                            }
                        },
                        type: {
                            set: function(t) {
                                var e;
                                r.src && (0 < (e = m(r.src)).length && !h(e) || 0 === e.length && i.blockUnpublishedCookies && !u(r.src)) && (t = "text/plain"), this && this.tagName && "embed" === this.tagName.toLowerCase() ? s.type = Object.getOwnPropertyDescriptor(HTMLEmbedElement.prototype, "type") : s.type.set.call(this, t)
                            }
                        }
                    }), r.setAttribute = function(t, e) {
                        "type" === t || "src" === t ? r[t] = e : HTMLScriptElement.prototype.setAttribute.call(r, t, e)
                    }, r)
                }
            } catch (t) {
                return void console.log(t, "Error captured in assigning fn to readOnly prop createElement")
            }
            window.setConsentedCategories = function(t) {
                t.forEach(function(t) {
                    -1 === c.indexOf(t) && c.push(t)
                })
            }, window.postMessage("SECURITI_AB_LOADED", window.location.origin)
        }

        function u(t) {
            if (t && t.toString) return t = l(t = t.toString() && t.toString().trim()), n.test(t)
        }

        function l(e) {
            try {
                return new URL(e).hostname
            } catch (t) {
                return (-1 < e.indexOf("//") ? e.split("/")[2] : e.split("/")[0]).split(":")[0].split("?")[0]
            }
        }

        function f(t) {
            return t.getAttribute(o) && "" != t.getAttribute(o) || null != t.getAttribute("data-skip-blocking")
        }

        function p(r, t) {
            r.setAttribute(o, t.join("|")), h(t) || (r.type = "text/plain"), r.addEventListener("beforescriptexecute", function t(e) {
                "text/plain" === r.getAttribute("type") && e.preventDefault(), r.removeEventListener("beforescriptexecute", t)
            })
        }

        function d(t) {
            return t && t.toString && 0 < (t = t.toString()).trim().length
        }

        function y(t) {
            var e = t.src,
                r = m(e);
            0 < r.length ? p(t, r) : d(e) && 0 === r.length && i.blockUnpublishedCookies && !u(e) && p(t, ["unpublished"])
        }

        function b(t, e) {
            var r = t.src;
            t.setAttribute(o, e.join("|")), h(e) || (t.removeAttribute("src"), t.setAttribute("data-src", r))
        }

        function g(t) {
            var e = t.src;
            if (d(e)) {
                var r = e.indexOf("data:image"),
                    o = e.indexOf("base64");
                if (-1 < r || -1 < o) return
            }
            r = m(e);
            0 < r.length ? b(t, r) : d(e) && 0 === r.length && i.blockUnpublishedCookies && !u(e) && b(t, ["unpublished"])
        }

        function m(o) {
            o && "object" === _typeof(o) && (o = o.toString());
            var n = [];
            if (d(o)) {
                var t = window.skipAutoBlocking || [];
                if (t && 0 < t.length && -1 < t.indexOf(o)) return [];
                i.configured_initiators && i.configured_initiators.length && i.configured_initiators.some(function(e) {
                    o.startsWith("data:") && (o = o.substring(0, 255));
                    try {
                        if (o.match(e.initiator)) return n = e.categories, !0
                    } catch (t) {
                        console.log(t, o, e.initiator)
                    }
                    return !1
                }), 0 == n.length && i.initiators.some(function(t) {
                    r = t.initiator, (e = document.createElement("a")).href = 0 == r.indexOf("http") ? r : "https://".concat(r);
                    var e, r = -1 !== (r = e.hostname + e.pathname).indexOf("http:") ? r.replace("http:", "") : r.replace("https:", "");
                    return (t.initiator === o || 0 < r.length && -1 < o.indexOf(r)) && (n = t.categories, !0)
                })
            }
            return n
        }

        function h(e) {
            var t = c.concat(i.non_optout_categories);
            return t.length && e && e.length && t.some(function(t) {
                return -1 < e.indexOf(t)
            })
        }
    };

function printEleToConsole(t) {
    var e, r;
    t && ("script" === (e = t.tagName || "unknown") ? console.log("Script: ", t) : "img" === e ? ((r = t.getAttribute("data-src") || "").indexOf("data:image"), r.indexOf("base64") ? ((r = JSON.parse(JSON.stringify(t))).setAttribute("data-src", "data:image...."), console.log("Image: Base64 ", r)) : console.log("Image: ", t)) : console.log("".concat(e, ": "), t))
}

function printScrtUnknownResources() {
    var r = "data-cookiecategory",
        t = document.querySelectorAll("[".concat(r, "]"));
    console.group("Unknown Resources:"), t.forEach(function(t) {
        var e = t.getAttribute(r) || "";
        e && -1 < e.indexOf("unpublished") && printEleToConsole(t)
    }), console.groupEnd()
}

function printScrtBlockedResources() {
    var t = document.querySelectorAll("[".concat("data-cookiecategory", "]"));
    console.group("Blocked Resources:"), t.forEach(function(t) {
        isElementBlocked(t) && printEleToConsole(t)
    }), console.groupEnd()
}

function isElementBlocked(t) {
    if (t) return t.hasAttribute("type") && "text/plain" === t.getAttribute("type") || t.hasAttribute("data-src")
}

function _typeof(t) {
    return (_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
        return typeof t
    } : function(t) {
        return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
    })(t)
}

function ownKeys(e, t) {
    var r, o = Object.keys(e);
    return Object.getOwnPropertySymbols && (r = Object.getOwnPropertySymbols(e), t && (r = r.filter(function(t) {
        return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), o.push.apply(o, r)), o
}

function _objectSpread(e) {
    for (var t = 1; t < arguments.length; t++) {
        var r = null != arguments[t] ? arguments[t] : {};
        t % 2 ? ownKeys(Object(r), !0).forEach(function(t) {
            _defineProperty(e, t, r[t])
        }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : ownKeys(Object(r)).forEach(function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
        })
    }
    return e
}

function _defineProperty(t, e, r) {
    return (e = _toPropertyKey(e)) in t ? Object.defineProperty(t, e, {
        value: r,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : t[e] = r, t
}

function _toPropertyKey(t) {
    t = _toPrimitive(t, "string");
    return "symbol" === _typeof(t) ? t : String(t)
}

function _toPrimitive(t, e) {
    if ("object" !== _typeof(t) || null === t) return t;
    var r = t[Symbol.toPrimitive];
    if (void 0 === r) return ("string" === e ? String : Number)(t);
    r = r.call(t, e || "default");
    if ("object" !== _typeof(r)) return r;
    throw new TypeError("@@toPrimitive must return a primitive value.")
}

function _slicedToArray(t, e) {
    return _arrayWithHoles(t) || _iterableToArrayLimit(t, e) || _unsupportedIterableToArray(t, e) || _nonIterableRest()
}

function _nonIterableRest() {
    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
}

function _unsupportedIterableToArray(t, e) {
    var r;
    if (t) return "string" == typeof t ? _arrayLikeToArray(t, e) : "Map" === (r = "Object" === (r = Object.prototype.toString.call(t).slice(8, -1)) && t.constructor ? t.constructor.name : r) || "Set" === r ? Array.from(t) : "Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r) ? _arrayLikeToArray(t, e) : void 0
}

function _arrayLikeToArray(t, e) {
    (null == e || e > t.length) && (e = t.length);
    for (var r = 0, o = new Array(e); r < e; r++) o[r] = t[r];
    return o
}

function _iterableToArrayLimit(t, e) {
    var r = null == t ? null : "undefined" != typeof Symbol && t[Symbol.iterator] || t["@@iterator"];
    if (null != r) {
        var o, n, i, a, c = [],
            s = !0,
            u = !1;
        try {
            if (i = (r = r.call(t)).next, 0 === e) {
                if (Object(r) !== r) return;
                s = !1
            } else
                for (; !(s = (o = i.call(r)).done) && (c.push(o.value), c.length !== e); s = !0);
        } catch (t) {
            u = !0, n = t
        } finally {
            try {
                if (!s && null != r.return && (a = r.return(), Object(a) !== a)) return
            } finally {
                if (u) throw n
            }
        }
        return c
    }
}

function _arrayWithHoles(t) {
    if (Array.isArray(t)) return t
}
null != ("undefined" == typeof window ? "undefined" : _typeof(window)) && (window.autoBlocking = autoBlocking, window.printScrtBlockedResources = printScrtBlockedResources, window.printScrtUnknownResources = printScrtUnknownResources), autoBlocking({
    "initiators": [{
        "initiator": "https://my.xfinity.com/assets/oauth.umd.min-1a880f61190ca5a759decc3c57d0d249.js",
        "initiator_type": "network",
        "categories": [77, 78, 80, 79]
    }, {
        "initiator": "https://assets.xfinity.com/assets/dotcom/adrum/adrum22603859.js",
        "initiator_type": "network",
        "categories": [78, 79, 80, 77]
    }, {
        "initiator": "https://referafriend.xfinity.com/Comcast.Services.Web.Mvc/Content/normalize.css",
        "initiator_type": "network",
        "categories": [78, 77, 79, 80]
    }, {
        "initiator": "https://www.xfinity.com/mobile/polyfills.6e0f3caf1fd0ceac.js",
        "initiator_type": "network",
        "categories": [77]
    }, {
        "initiator": "https://assets.adobedtm.com/extensions/EPbde2f7ca14e540399dcc1f8208860b7b/AppMeasurement_Module_AudienceManagement.min.js",
        "initiator_type": "script",
        "categories": [80, 79, 77]
    }, {
        "initiator": "https://aa.agkn.com/adscores/g.pixel",
        "initiator_type": "network",
        "categories": [77]
    }, {
        "initiator": "https://apps.bazaarvoice.com/bv.js",
        "initiator_type": "script",
        "categories": [80, 77]
    }, {
        "initiator": "https://sync.adotmob.com/cookie/indexexchange",
        "initiator_type": "network",
        "categories": [77]
    }, {
        "initiator": "https://www.youtube.com/s/player/02208bb4/www-embed-player.vflset/www-embed-player.js",
        "initiator_type": "script",
        "categories": [80]
    }, {
        "initiator": "https://c2shb.pubgw.yahoo.com/bidRequest",
        "initiator_type": "network",
        "categories": [79]
    }, {
        "initiator": "https://idsync.rlcdn.com/362358.gif",
        "initiator_type": "network",
        "categories": [77, 80]
    }, {
        "initiator": "https://assets.xfinity.com/assets/dotcom/hub/Hub_x40p.html",
        "initiator_type": "network",
        "categories": [77]
    }, {
        "initiator": "https://ad.360yield.com/match",
        "initiator_type": "network",
        "categories": [77]
    }, {
        "initiator": "https://c.tvpixel.com/js/current/dpm_pixel_min.js",
        "initiator_type": "script",
        "categories": [77, 80]
    }, {
        "initiator": "https://assets.bounceexchange.com/assets/smart-tag/versioned/br-ijs_all_modules_cjs_min_a42debcb92d1f9574782090ebd15ee31.js",
        "initiator_type": "script",
        "categories": [79, 80, 77]
    }, {
        "initiator": "https://www.xfinity.com/xfinityassistant/main.80cc38559563f990afbc.bundle.js",
        "initiator_type": "script",
        "categories": [80]
    }, {
        "initiator": "https://cs.emxdgt.com/um",
        "initiator_type": "network",
        "categories": [77]
    }, {
        "initiator": "https://c.amazon-adsystem.com/aat/amzn.js",
        "initiator_type": "network",
        "categories": [77]
    }, {
        "initiator": "https://d.agkn.com/pixel/10690/",
        "initiator_type": "network",
        "categories": [79]
    }, {
        "initiator": "https://www.xfinity.com/national/xfinity-learn-ui/534.8dd6fb8e4e686571c4a8.js",
        "initiator_type": "network",
        "categories": [77]
    }, {
        "initiator": "https://fastlane.rubiconproject.com/a/api/fastlane.json",
        "initiator_type": "network",
        "categories": [77, 78]
    }, {
        "initiator": "https://beacon.lynx.cognitivlabs.com/ix.gif",
        "initiator_type": "network",
        "categories": [77]
    }, {
        "initiator": "https://contextual.media.net/smtr",
        "initiator_type": "\u0026startTime=1666706901397\u0026l2type=sca\u0026vgd_l1rakh=1666706900153927423\u0026l1ch=1\u0026sttm=1666706901404\u0026upk=1666706901.27631\u0026hvsid=00001666706901404025010629659472\u0026acid=9979ea99c8d84f838db4652425842796\u0026verid=3111299\u0026vgd_bdata=sd2%253Dnull~iurl_l%253D50~ogerpm%253D0.08~vw_exc%253D0.18~smm_bid%253D0.07~vis_sd%253D596~dom_b%253D1.05~dc2%253D1~scd%253Dnj~v_asn%253D396253~dom_l%253D40~vl2r_sd%253D2022102505~iurl_b%253D2582.98~url_tkc%253D3286~std%253D20613005~last%253D~cvog%253D7.2~vis_url_b%253D0.41~vl2r_i_sd%253D2022102500~ip%253D2JgcJf~fbb%253D0~vis_url_l%253D30~riipua%253D288%252C289~et%253D11~rc%253D1~vl2r_i_b%253D0.01~rps_sd%253D2022102505~vis_b%253D266.61~radv%253D0.379%252C50~irps_url_b%253D0~url_b%253D0.39~vl2r_url_b%253D0.01~vl2r_url_vi%253D630000~url_tvi%253D578155~smm_wr%253D21.8556~ecp_eer%253D15.63~url_l%253D50~gcat%253D500881~bb%253D186~vv%253D0~irps_url_l%253D50~cvl2r_sd%253D605~l2r_b%253D1000~erpm%253D0.08~vl2r_url_kc%253D4500~vl2r_up_l%253D20~bm%253D1~smm_sd%253D2022102504~sid%253Dbf10032aefacf070f1210d5472f8f9f4~sd%253D0~uid%253Dh8M2lyXUXkNt2HEx5~cvl2r_b%253D2.12~btd%253D32077591644109367192844948606946057798114959858752863656911192979019966673672794686362112~d2p_l%253D60~cvl2%253D7.2~3pcf%253D995.21~uim%253D2141954~dmm_strg%253Dsmm_migration_test~vl2r_up_b%253D0.01~d2p_b%253D1~ogd2p_b%253D0.97~ss%253DNA~uiw%253D100~ce%253D0~rps_b%253D212.13~rps_url_b%253D238.42~CI%253D2762~nts%253D1~tb%253D-1~ct%253Dweehawken~rkwd%253D0.177%252C50~basis2%253D196~basis1%253D196~isRef%253D0~isif%253D0~lc%253D1~bmtid%253D15063~bid%253D0.07~rps_url_l%253D50~dc%253D8~vl2r_b%253D1.39~supply_tag_id%253D20613005%257Eviewability%253D0.182412%257Ecbdp%253D0.070%257Edmm%253Dsmm_migration_test%257Esuid%253D%257Einsl%253D0%257Edtc%253Deast_sc%257Edalg%253Dsmm%257Ehtml%253D1%257Esobp%253D%257Ebdpcapd%253D0%257Edmm_erpm%253Dfalse%257Ebflr%253D0.059%257Eogbid%253D0.080%257Eitype_id%253D16%257Eseller_tag_id%253D20613005%257EcarrierId%253D0%257Esmm_api%253Dv1~ibc%253D1~ddt%253D-1~nsz%253D1~tgs%253D300x250~bsb%253D3~bsp%253D2~tmx%253D75\u0026matchstring=hr%253D0%257Cbcat%253Dq%252Ca%252Cb%252C3%252C4%252Cf%252Ch%252Ci%252Ci2%252C9%252Ck7%257Ccsh%253D1\u0026vgd_matchstr=hr%253D0%257Cbcat%253Dq%252Ca%252Cb%252C3%252C4%252Cf%252Ch%252Ci%252Ci2%252C9%252Ck7%257Ccsh%253D1\u0026vgd_sc=NY\u0026sbdrId=186\u0026lineitemid=4\u0026infr=1\u0026dma=501\u0026stime=1666706901152\u0026vgd_ecrid=327368544\u0026l1hcsd=l1!A31%7C7134\u0026vgd_l1rhst=contextual.media.net\u0026vgd_uspa=0\u0026vgd_isiolc=1\u0026l3c=%257B%2522ntv%2522%253A%25220%2522%252C%2522matchstring%2522%253A%2522hr%253D0%257Cbcat%253Dq%252Ca%252Cb%252C3%252C4%252Cf%252Ch%252Ci%252Ci2%252C9%252Ck7%257Ccsh%253D1%2522%257D\u0026l3d=%257B%2522csip%2522%253A%2522rtb-appnexus-859d4fc74c-nqgbj.SC%2522%252C%2522l2host%2522%253A%2522https%253A%252F%252Fcontextual.media.net%2522%252C%2522cntrdt%2522%253A%2522SL%257CBODY%257CHTML%2522%252C%2522pgid%2522%253A%2522p02104178357t202210251408%2522%257D\u0026pvl=%257B%2522dtc%2522%253A%2522east_sc%2522%252C%2522mbr%2522%253A1%252C%2522l1rpth%2522%253A%2522%252Fnmedianet.js%2522%252C%2522pgids%2522%253A1%257D\u0026vgd_fcm_enc_mis=1:0:0",
        "categories": [78]
    }, {
        "initiator": "https://assets.bounceexchange.com/assets/bounce/local_storage_frame16.min.html",
        "initiator_type": "script",
        "categories": [80, 79]
    }, {
        "initiator": "https://www.googletagmanager.com/gtag/js",
        "initiator_type": "script",
        "categories": [80, 77, 78]
    }, {
        "initiator": "https://www.xfinity.com/support/node_modules/@dotcom/oauthjs/dist/oauth.umd.js",
        "initiator_type": "network",
        "categories": [79]
    }, {
        "initiator": "https://cm.adgrx.com/bridge",
        "initiator_type": "network",
        "categories": [77]
    }, {
        "initiator": "https://scripts.webcontentassessor.com/scripts/b4be7e7b6b352605a1ac84e1c5b4df5dd6407a83c34cfd33ff1cc7345cf246a3",
        "initiator_type": "network",
        "categories": [77, 80]
    }, {
        "initiator": "https://googleads.g.doubleclick.net/pagead/viewthroughconversion/1023869955/",
        "initiator_type": "network",
        "categories": [77]
    }, {
        "initiator": "https://assets.bounceexchange.com/assets/smart-tag/versioned/cjs_min_93e18f8d92a3704ae302522cde927999.js",
        "initiator_type": "script",
        "categories": [79]
    }, {
        "initiator": "https://internetsecurity.xfinity.com/css/app.css",
        "initiator_type": "network",
        "categories": [77, 78]
    }, {
        "initiator": "https://sdx.xfinity.com/cms/data/aiq/xachatwidget/js/cht.js",
        "initiator_type": "network",
        "categories": [79, 77, 78]
    }, {
        "initiator": "https://comcast.demdex.net/dest5.html",
        "initiator_type": "network",
        "categories": [80, 78, 77]
    }, {
        "initiator": "https://www.xfinity.com/support/shared/1.706d0031feda6435dc2d.js",
        "initiator_type": "network",
        "categories": [77, 78]
    }, {
        "initiator": "https://xchat.xfinity.com/tagserver/incrementality/onEvent",
        "initiator_type": "network",
        "categories": [77]
    }, {
        "initiator": "https://idm.xfinity.com/myaccount/static/js/comcast-common.js",
        "initiator_type": "network",
        "categories": [77, 78, 79]
    }, {
        "initiator": "https://ce.lijit.com/merge",
        "initiator_type": "network",
        "categories": [77]
    }, {
        "initiator": "https://sync.teads.tv/um",
        "initiator_type": "network",
        "categories": [77]
    }, {
        "initiator": "https://www.xfinity.com/support/",
        "initiator_type": "network",
        "categories": [79, 80, 77, 78]
    }, {
        "initiator": "https://4053494.fls.doubleclick.net/activityi;dc_pre=CPvs6JXv5_sCFQRiYgodqzIKeQ;src=4053494;type=comca517;cat=xfini00_;ord=8180090559090;gtm=2odbu0;auiddc=1405335493.1670428523;~oref=https%3A%2F%2Fwww.xfinity.com%2Flearn%2Fhome-security",
        "initiator_type": "network",
        "categories": [77, 80]
    }, {
        "initiator": "https://register.xfinity.com/favicon.ico",
        "initiator_type": "network",
        "categories": [78, 79, 80, 77]
    }, {
        "initiator": "https://sync.targeting.unrulymedia.com/csync/RX-41125a70-2063-4a06-9e21-17730bc9d186-005",
        "initiator_type": "network",
        "categories": [77]
    }, {
        "initiator": "https://p.rfihub.com/cm",
        "initiator_type": "network",
        "categories": [77]
    }, {
        "initiator": "https://payments.xfinity.com/",
        "initiator_type": "network",
        "categories": [79, 80]
    }, {
        "initiator": "https://tr.snapchat.com/cm/i",
        "initiator_type": "network",
        "categories": [80]
    }, {
        "initiator": "https://sa-cs.deliverimp.com/iframe",
        "initiator_type": "network",
        "categories": [77]
    }, {
        "initiator": "https://acdn.adnxs.com/ast/ast.js",
        "initiator_type": "network",
        "categories": [77]
    }, {
        "initiator": "https://x.bidswitch.net/ul_cb/sync_a9/https%3A%2F%2Fs.amazon-adsystem.com%2Fecm3%3Fex%3Dbidswitch.com%26id%3D%24%7BUUID%7D",
        "initiator_type": "network",
        "categories": [77]
    }, {
        "initiator": "https://dsp.adfarm1.adition.com/cookie/",
        "initiator_type": "network",
        "categories": [78]
    }, {
        "initiator": "https://apex.go.sonobi.com/trinity.json",
        "initiator_type": "network",
        "categories": [77]
    }, {
        "initiator": "https://assets.xfinity.com/assets/dotcom/adrum/adrumext9d5121275ace25922553697e145d6bf1.js",
        "initiator_type": "script",
        "categories": [80]
    }, {
        "initiator": "https://d.impactradius-event.com/A1254507-10e8-4d34-ad4d-60c59f4b18101.js",
        "initiator_type": "script",
        "categories": [77, 80]
    }, {
        "initiator": "https://dmp.brand-display.com/cm/api/index",
        "initiator_type": "network",
        "categories": [77]
    }, {
        "initiator": "https://tr.blismedia.com/v1/api/sync/rubicon",
        "initiator_type": "network",
        "categories": [77]
    }, {
        "initiator": "https://cm.smadex.com/sync",
        "initiator_type": "network",
        "categories": [77]
    }, {
        "initiator": "https://www.xfinity.com/privacy",
        "initiator_type": "network",
        "categories": [78, 80]
    }, {
        "initiator": "https://image8.pubmatic.com/AdServer/ImgSync",
        "initiator_type": "network",
        "categories": [77]
    }, {
        "initiator": "https://assets.bounceexchange.com/assets/smart-tag/versioned/cjs_min_d6ffd30d93001e4f3792cd31d56f5f8e.js",
        "initiator_type": "script",
        "categories": [80, 79]
    }, {
        "initiator": "https://eb2.3lift.com/xuid",
        "initiator_type": "network",
        "categories": [77]
    }, {
        "initiator": "https://px.ads.linkedin.com/setuid",
        "initiator_type": "network",
        "categories": [79]
    }, {
        "initiator": "https://loadus.exelator.com/load/",
        "initiator_type": "network",
        "categories": [77]
    }, {
        "initiator": "https://tr.blismedia.com/v1/api/sync/enginemx",
        "initiator_type": "network",
        "categories": [77]
    }, {
        "initiator": "https://sync.technoratimedia.com/services",
        "initiator_type": "network",
        "categories": [77]
    }, {
        "initiator": "https://polaris.xfinity.com/images/svgs/xfinity_logo.svg",
        "initiator_type": "network",
        "categories": [77, 78]
    }, {
        "initiator": "https://id5-sync.com/c/434/434/9/1.gif",
        "initiator_type": "network",
        "categories": [77]
    }, {
        "initiator": "https://military.xfinity.com/ISI.DynamicPages/e1e17992a31749b9b08b5ce3c91c687e/combined.js",
        "initiator_type": "script",
        "categories": [79, 80]
    }, {
        "initiator": "https://match.adsrvr.org/track/cmf/generic",
        "initiator_type": "network",
        "categories": [77]
    }, {
        "initiator": "https://polaris.xfinity.com/orc.html",
        "initiator_type": "network",
        "categories": [77, 79, 80]
    }, {
        "initiator": "https://cdn.comcast.com/-/media/Common/adrum/adrumext4a8dd0f950e3f613a821c330eb081cdc.js",
        "initiator_type": "script",
        "categories": [80]
    }, {
        "initiator": "https://sync.search.spotxchange.com/partner",
        "initiator_type": "network",
        "categories": [80]
    }, {
        "initiator": "https://ads.samba.tv/cookie_sync",
        "initiator_type": "network",
        "categories": [77]
    }, {
        "initiator": "https://bcp.crwdcntrl.net/map/ct=y/tpid=CAESEN4RoEq_nNgo3elM9CUD73k\u0026cver=1/c=899/tp=GDDP",
        "initiator_type": "network",
        "categories": [77]
    }, {
        "initiator": "https://match.360yield.com/match",
        "initiator_type": "network",
        "categories": [77]
    }, {
        "initiator": "https://js.adsrvr.org/universal_pixel.1.1.3.js",
        "initiator_type": "network",
        "categories": [77, 78, 79, 80]
    }, {
        "initiator": "https://www.google.com/pagead/1p-user-list/1023869955/",
        "initiator_type": "network",
        "categories": [79, 80, 77, 78]
    }, {
        "initiator": "https://pm.w55c.net/ping_match.gif",
        "initiator_type": "network",
        "categories": [77]
    }, {
        "initiator": "https://speedtest.xfinity.com/",
        "initiator_type": "network",
        "categories": [78, 80, 77, 79]
    }, {
        "initiator": "https://cdn-prod.securiti.ai/consent/auto_blocking/4b9bbe2a-9c5d-4512-bb76-768a8ea32bc0/cc730d05-9ec1-4ce6-9756-57f0eb653650.js",
        "initiator_type": "network",
        "categories": [77]
    }, {
        "initiator": "https://xchat.xfinity.com/tagserver/js/ads-blocking-detector.min.js",
        "initiator_type": "network",
        "categories": [77, 79]
    }, {
        "initiator": "https://sync-adform.ads.yieldmo.com/sync",
        "initiator_type": "network",
        "categories": [78]
    }, {
        "initiator": "https://api.bounceexchange.com/bounce/reloadCampaigns.js",
        "initiator_type": "network",
        "categories": [80]
    }, {
        "initiator": "https://bh.contextweb.com/bh/rtset",
        "initiator_type": "network",
        "categories": [77, 79]
    }, {
        "initiator": "https://ssum-sec.casalemedia.com/usermatch",
        "initiator_type": "network",
        "categories": [77, 79]
    }, {
        "initiator": "https://www.youtube.com/s/player/96163992/player_ias.vflset/en_US/base.js",
        "initiator_type": "script",
        "categories": [77, 80]
    }, {
        "initiator": "https://www.youtube.com/s/player/02208bb4/player_ias.vflset/en_US/base.js",
        "initiator_type": "script",
        "categories": [77, 80]
    }, {
        "initiator": "https://4053494.fls.doubleclick.net/activityi;dc_pre=CIDikcy5kfgCFQ6CYgodqEIPjw;src=4053494;type=comca517;cat=xfini00_;ord=6987015062810;gtm=2od610;auiddc=215295196.1654265064;~oref=https%3A%2F%2Fwww.xfinity.com%2Flearn%2Fhome-security",
        "initiator_type": "network",
        "categories": [77, 80]
    }, {
        "initiator": "https://connect.xfinity.com/cvpWebResource/favicon.ico",
        "initiator_type": "network",
        "categories": [77, 78]
    }, {
        "initiator": "https://prebid.a-mo.net/isyn",
        "initiator_type": "network",
        "categories": [77]
    }, {
        "initiator": "https://www.xfinity.com/digital/offers/assets/styles.998cb350381d1516b482.css",
        "initiator_type": "network",
        "categories": [78, 77, 79, 80]
    }, {
        "initiator": "https://assets.bounceexchange.com/assets/smart-tag/versioned/main_4b11936e0444014bb98b15d19af08440.br.js",
        "initiator_type": "script",
        "categories": [77]
    }, {
        "initiator": "https://stags.bluekai.com/site/23178",
        "initiator_type": "network",
        "categories": [80]
    }, {
        "initiator": "https://rtb.adentifi.com/CookieSyncPubMatic\u0026gdpr=0\u0026gdpr_consent=",
        "initiator_type": "network",
        "categories": [79]
    }, {
        "initiator": "https://metrics.xfinity.com/b/ss/comcastdotcomprod/10/JS-2.22.0-LCUM/s34170135384443",
        "initiator_type": "network",
        "categories": [78, 77, 79, 80]
    }, {
        "initiator": "https://pix.cdnwidget.com/redirect",
        "initiator_type": "network",
        "categories": [77]
    }, {
        "initiator": "https://ads.stickyadstv.com/user-matching",
        "initiator_type": "network",
        "categories": [80]
    }, {
        "initiator": "https://x.bidswitch.net/sync_a9/https%3A%2F%2Fs.amazon-adsystem.com%2Fecm3%3Fex%3Dbidswitch.com%26id%3D%24%7BUUID%7D",
        "initiator_type": "network",
        "categories": [77]
    }, {
        "initiator": "https://4053494.fls.doubleclick.net/activityi;dc_pre=CIfexNW9-_oCFd-DfwQdiJMHWg;src=4053494;type=comca517;cat=xfini00_;ord=997063724713;gtm=2odaj0;auiddc=57878845.1666704383;~oref=https%3A%2F%2Fwww.xfinity.com%2Flearn%2Fhome-security",
        "initiator_type": "network",
        "categories": [77, 80]
    }, {
        "initiator": "https://assets.adobedtm.com/43896e740dcedef854392e0be6ea80deb8eb2ba5/satelliteLib-773f1d685076ba02ef9dd20f568cce9a6f1991dd.js",
        "initiator_type": "script",
        "categories": [80]
    }, {
        "initiator": "https://ssp.disqus.com/redirectuser",
        "initiator_type": "network",
        "categories": [77]
    }, {
        "initiator": "https://prebid.a-mo.net/a/c",
        "initiator_type": "network",
        "categories": [77]
    }, {
        "initiator": "https://servedby.flashtalking.com/container/12345;91797;9487;iframe/",
        "initiator_type": "network",
        "categories": [77]
    }, {
        "initiator": "https://xchat.xfinity.com/tagserver/postToServer.min.htm",
        "initiator_type": "script",
        "categories": [77, 79, 80]
    }, {
        "initiator": "https://global.ib-ibi.com/image.sbxx",
        "initiator_type": "network",
        "categories": [79]
    }, {
        "initiator": "https://metrics.xfinity.com/b/ss/comcastdotcomprod/10/JS-2.22.0-LDQM/s03347714464120",
        "initiator_type": "network",
        "categories": [78, 79]
    }, {
        "initiator": "https://evt.undertone.com/u",
        "initiator_type": "network",
        "categories": [77]
    }, {
        "initiator": "https://www.xfinity.com/xfinityassistant/main.bff03f98d85fca1efe7d.bundle.js",
        "initiator_type": "script",
        "categories": [80, 77]
    }, {
        "initiator": "https://military.xfinity.com/ISI.DynamicPages/0d85ef6d0bf14f63b2ffc8ca45e3d698/combined.js",
        "initiator_type": "network",
        "categories": [79, 80]
    }, {
        "initiator": "https://metrics.xfinity.com/b/ss/comcastdotcomprod/10/JS-2.22.0-LCXS/s72139386917116",
        "initiator_type": "network",
        "categories": [80, 77]
    }, {
        "initiator": "https://b.adnxs.com/vevent",
        "initiator_type": "network",
        "categories": [77]
    }, {
        "initiator": "https://www.xfinity.com/learn/nuance/xfinityChat.html",
        "initiator_type": "network",
        "categories": [78]
    }, {
        "initiator": "https://www.xfinity.com/xfinityassistant/main.99764ab205b3ef79a395.bundle.js",
        "initiator_type": "network",
        "categories": [80]
    }, {
        "initiator": "https://www.youtube.com/s/player/4bbf8bdb/www-embed-player.vflset/www-embed-player.js",
        "initiator_type": "script",
        "categories": [80]
    }, {
        "initiator": "https://match.deepintent.com/usersync/143",
        "initiator_type": "network",
        "categories": [78]
    }, {
        "initiator": "https://s.company-target.com/s/ix",
        "initiator_type": "network",
        "categories": [77]
    }, {
        "initiator": "https://assets.bounceexchange.com/assets/smart-tag/versioned/main-v2_cfaedeb0e60c3d199599b2cef65b14ab.br.js",
        "initiator_type": "script",
        "categories": [77]
    }, {
        "initiator": "https://assets.adobedtm.com/331fbea29f79/a1677ef86d87/launch-d7f43fab9698.min.js",
        "initiator_type": "script",
        "categories": [78, 77]
    }, {
        "initiator": "https://ips-invite.iperceptions.com/wUniversal.aspx",
        "initiator_type": "script",
        "categories": [80]
    }, {
        "initiator": "https://www.xfinity.com/-/media/5BF28DC6EBA54E929173CC7B0D9B6E69",
        "initiator_type": "network",
        "categories": [77, 80, 78]
    }, {
        "initiator": "https://lm.serving-sys.com/lm/acs",
        "initiator_type": "network",
        "categories": [77]
    }, {
        "initiator": "https://bcp.crwdcntrl.net/gmap/",
        "initiator_type": "network",
        "categories": [77]
    }, {
        "initiator": "https://www.xfinity.com/dss-privacy-xpc/22.112931656de3309bfd1c.js",
        "initiator_type": "network",
        "categories": [77]
    }, {
        "initiator": "https://u.openx.net/w/1.0/cm",
        "initiator_type": "network",
        "categories": [77]
    }, {
        "initiator": "https://px.owneriq.net/eucm/p/cc",
        "initiator_type": "network",
        "categories": [77]
    }, {
        "initiator": "https://sync.rfp.fout.jp/sync",
        "initiator_type": "network",
        "categories": [77]
    }, {
        "initiator": "https://assets.adobedtm.com/43896e740dcedef854392e0be6ea80deb8eb2ba5/s-code-contents-11c8f38a44853a1fa459e08fd609da47c7ce7efd.js",
        "initiator_type": "script",
        "categories": [80, 77]
    }, {
        "initiator": "https://offers.sheerid.com/xfinity/teacher/static/js/2.b9252da6.chunk.js",
        "initiator_type": "script",
        "categories": [77]
    }, {
        "initiator": "https://referafriend.xfinity.com/ISI.DynamicPages/95e884b5d5074aefbf23aab01d126549/combined.js",
        "initiator_type": "network",
        "categories": [80]
    }, {
        "initiator": "https://polaris.xfinity.com/globalnav/orc.html",
        "initiator_type": "network",
        "categories": [79]
    }, {
        "initiator": "https://www.xfinity.com/support/articles/about-xfinity-wifi-internet",
        "initiator_type": "network",
        "categories": [80]
    }, {
        "initiator": "https://4053494.fls.doubleclick.net/activityi;dc_pre=CIzG0-a5kfgCFYEefQodLvQGrQ;src=4053494;type=comca517;cat=18_3_0;ord=7987812581168;gtm=2od610;auiddc=610823861.1654265110;~oref=https%3A%2F%2Fwww.xfinity.com%2Fstudent",
        "initiator_type": "network",
        "categories": [77, 80]
    }, {
        "initiator": "https://ums.acuityplatform.com/tum",
        "initiator_type": "network",
        "categories": [77]
    }, {
        "initiator": "https://internet.xfinity.com/",
        "initiator_type": "network",
        "categories": [77, 78, 79]
    }, {
        "initiator": "https://amazon.partners.tremorhub.com/sync",
        "initiator_type": "network",
        "categories": [77]
    }, {
        "initiator": "https://www.google-analytics.com/analytics.js",
        "initiator_type": "script",
        "categories": [78, 77, 80]
    }, {
        "initiator": "https://speedtest.xfinity.com/static/js/styles.2a7ccf66.chunk.js",
        "initiator_type": "network",
        "categories": [78, 77]
    }, {
        "initiator": "https://ext.chtbl.com/trackable.js",
        "initiator_type": "script",
        "categories": [77]
    }, {
        "initiator": "https://odr.mookie1.com/t/v2",
        "initiator_type": "network",
        "categories": [77]
    }, {
        "initiator": "https://syncv4.intentiq.com/profiles_engine/ProfilesEngineServlet",
        "initiator_type": "network",
        "categories": [80, 77]
    }, {
        "initiator": "https://sync.go.sonobi.com/us.gif",
        "initiator_type": "network",
        "categories": [77]
    }, {
        "initiator": "https://www.xfinity.com/mobile/fetch-options.js",
        "initiator_type": "network",
        "categories": [80, 77, 79]
    }, {
        "initiator": "https://sync.ipredictive.com/d/sync/cookie/generic",
        "initiator_type": "network",
        "categories": [77]
    }, {
        "initiator": "https://lciapi.ninthdecimal.com/v1/lci/sync/adv-amzn/c-23445/",
        "initiator_type": "network",
        "categories": [77]
    }, {
        "initiator": "https://customer.xfinity.com/apis/csp/account/me/user/d4800333-64f9-49d0-89a1-793277fff58d001/twoFactorAuth",
        "initiator_type": "network",
        "categories": [77, 78, 79]
    }, {
        "initiator": "https://match.prod.bidr.io/cookie-sync/adobe",
        "initiator_type": "network",
        "categories": [77]
    }, {
        "initiator": "https://www.xfinity.com/support/node_modules/@xfinity-web/oauthjs/dist/oauth.umd.js",
        "initiator_type": "network",
        "categories": [80, 77]
    }, {
        "initiator": "https://sync.1rx.io/usersync2/emx",
        "initiator_type": "network",
        "categories": [80]
    }, {
        "initiator": "https://assets.adobedtm.com/331fbea29f79/8f42148123cf/launch-19300f6b92a2.min.js",
        "initiator_type": "script",
        "categories": [80, 77]
    }, {
        "initiator": "https://internetsecurity.xfinity.com/help/report-abuse",
        "initiator_type": "network",
        "categories": [80, 78, 77, 79]
    }, {
        "initiator": "https://connect.xfinity.com/appsuite/api/account",
        "initiator_type": "network",
        "categories": [78, 80]
    }, {
        "initiator": "https://comcast-app.quantummetric.com/",
        "initiator_type": "network",
        "categories": [77]
    }, {
        "initiator": "https://comcastresidentialservices.tt.omtrdc.net/rest/v1/delivery",
        "initiator_type": "network",
        "categories": [78, 80, 77]
    }, {
        "initiator": "https://dpm.demdex.net/ibs",
        "initiator_type": "network",
        "categories": [77, 78, 79]
    }, {
        "initiator": "https://cs.media.net/cksync",
        "initiator_type": "network",
        "categories": [78]
    }, {
        "initiator": "https://s.amazon-adsystem.com/v3/pr",
        "initiator_type": "network",
        "categories": [77, 78, 79, 80]
    }, {
        "initiator": "https://x.bidswitch.net/sync",
        "initiator_type": "network",
        "categories": [77]
    }, {
        "initiator": "https://partners.tremorhub.com/sync",
        "initiator_type": "network",
        "categories": [77]
    }, {
        "initiator": "https://ads.yieldmo.com/exchange/prebid",
        "initiator_type": "network",
        "categories": [77, 78]
    }, {
        "initiator": "https://xchat.xfinity.com/chatskins/launch/inqChatLaunch10006690.js",
        "initiator_type": "network",
        "categories": [77, 79]
    }, {
        "initiator": "https://customer.xfinity.com/Overview/",
        "initiator_type": "network",
        "categories": [79]
    }, {
        "initiator": "https://www.xfinity.com/xfinity-learn-ui/favicon.ico",
        "initiator_type": "network",
        "categories": [78]
    }, {
        "initiator": "https://xchat.xfinity.com/tagserver/launch/agentAvailability",
        "initiator_type": "network",
        "categories": [78, 79, 77, 80]
    }, {
        "initiator": "https://spa.xfinity.com/assets/index.f16db080.js",
        "initiator_type": "network",
        "categories": [77, 78, 79, 80]
    }, {
        "initiator": "https://bat.bing.com/actionp/0",
        "initiator_type": "network",
        "categories": [77, 80]
    }, {
        "initiator": "https://loadm.exelator.com/load/",
        "initiator_type": "network",
        "categories": [77]
    }, {
        "initiator": "https://rtb-csync.smartadserver.com/redir/",
        "initiator_type": "network",
        "categories": [80]
    }, {
        "initiator": "https://id5-sync.com/cq/434/124/8/2.gif",
        "initiator_type": "network",
        "categories": [77]
    }, {
        "initiator": "https://cdn.quantummetric.com/qscripts/quantum-comcast.js",
        "initiator_type": "script",
        "categories": [80, 79]
    }, {
        "initiator": "https://cdn.comcast.com/cmp/css/cookie-consent.css",
        "initiator_type": "network",
        "categories": [78, 80]
    }, {
        "initiator": "https://connect.facebook.net/en_US/fbevents.js",
        "initiator_type": "script",
        "categories": [77]
    }, {
        "initiator": "https://www.redditstatic.com/ads/pixel.js",
        "initiator_type": "script",
        "categories": [77]
    }, {
        "initiator": "https://www.xfinity.com/xfinityassistant/snow-plow-tracker.js",
        "initiator_type": "script",
        "categories": [77]
    }, {
        "initiator": "https://tag.bounceexchange.com/1369/i.js",
        "initiator_type": "network",
        "categories": [80]
    }, {
        "initiator": "https://nym1-ib.adnxs.com/vevent",
        "initiator_type": "network",
        "categories": [77, 78]
    }, {
        "initiator": "https://oauth.xfinity.com/oauth/authorize",
        "initiator_type": "network",
        "categories": [79, 80]
    }, {
        "initiator": "https://www.youtube.com/s/player/96163992/www-embed-player.vflset/www-embed-player.js",
        "initiator_type": "script",
        "categories": [80]
    }, {
        "initiator": "https://sync-tm.everesttech.net/upi/pid/ZMAwryCI",
        "initiator_type": "network",
        "categories": [77]
    }, {
        "initiator": "https://tr.snapchat.com/p",
        "initiator_type": "network",
        "categories": [80]
    }, {
        "initiator": "https://rtb-csync.smartadserver.com/redir",
        "initiator_type": "network",
        "categories": [77]
    }, {
        "initiator": "https://d.turn.com/r/dd/id/L2NzaWQvMS9jaWQvMjM2NTYzMjkvdC8y/url/https%3A%2F%2Fdpm.demdex.net%2Fibs%3Adpid%3D470%26dpuuid%3D%24!%7BTURN_UUID%7D",
        "initiator_type": "network",
        "categories": [80]
    }, {
        "initiator": "https://gum.criteo.com/syncframe",
        "initiator_type": "network",
        "categories": [77]
    }, {
        "initiator": "https://sync.mathtag.com/sync/img",
        "initiator_type": "network",
        "categories": [77]
    }, {
        "initiator": "https://analytics.twitter.com/i/adsct",
        "initiator_type": "network",
        "categories": [77, 78]
    }, {
        "initiator": "https://eb2.3lift.com/r",
        "initiator_type": "network",
        "categories": [77]
    }, {
        "initiator": "",
        "initiator_type": "script",
        "categories": [80, 77, 79, 78]
    }, {
        "initiator": "https://assets.bounceexchange.com/assets/smart-tag/versioned/main_e2d6c32b895aee0a3860d165f6afbb7b.br.js",
        "initiator_type": "network",
        "categories": [77, 80]
    }, {
        "initiator": "https://pixel.tapad.com/idsync/ex/receive",
        "initiator_type": "network",
        "categories": [77]
    }, {
        "initiator": "https://pi.ispot.tv/v2/TC-3673-1.gif",
        "initiator_type": "network",
        "categories": [77]
    }, {
        "initiator": "https://b1sync.zemanta.com/usersync/emx/",
        "initiator_type": "network",
        "categories": [77]
    }, {
        "initiator": "https://login-ds.dotomi.com/ucm/DMCSuccessLogger",
        "initiator_type": "network",
        "categories": [77]
    }, {
        "initiator": "https://www.youtube.com/s/player/34f9b71c/player_ias.vflset/en_US/base.js",
        "initiator_type": "script",
        "categories": [80, 77]
    }, {
        "initiator": "https://sync-amazon.ads.yieldmo.com/sync",
        "initiator_type": "network",
        "categories": [77]
    }, {
        "initiator": "https://ad.as.amanad.adtdp.com/v1/sync",
        "initiator_type": "network",
        "categories": [77]
    }, {
        "initiator": "https://bmwmini.demdex.net/event",
        "initiator_type": "network",
        "categories": [78, 79]
    }, {
        "initiator": "https://d.agkn.com/pixel/10533/",
        "initiator_type": "network",
        "categories": [77, 79]
    }, {
        "initiator": "https://www.xfinity.com/digital/offers/plan-builder",
        "initiator_type": "network",
        "categories": [80, 79]
    }, {
        "initiator": "https://carriers.xfinity.com/",
        "initiator_type": "network",
        "categories": [77, 78, 79, 80]
    }, {
        "initiator": "https://idr.cdnwidget.com/graph",
        "initiator_type": "network",
        "categories": [79, 77]
    }, {
        "initiator": "https://ib.mookie1.com/image.sbxx",
        "initiator_type": "network",
        "categories": [79, 77]
    }, {
        "initiator": "https://t.co/i/adsct",
        "initiator_type": "network",
        "categories": [80, 77, 82]
    }, {
        "initiator": "https://ums.acuityplatform.com/bum",
        "initiator_type": "network",
        "categories": [77]
    }, {
        "initiator": "https://mid.rkdms.com/bct",
        "initiator_type": "network",
        "categories": [77]
    }, {
        "initiator": "https://polaris.xfinity.com/polaris.wc.js",
        "initiator_type": "network",
        "categories": [77, 78, 80, 79]
    }, {
        "initiator": "https://ib.adnxs.com/getuid",
        "initiator_type": "network",
        "categories": [77, 78]
    }, {
        "initiator": "https://www.xfinity.com/EI6IGI/ntWw/P2/l6gb/us1RDdAMwH4/7GNaGcwf/VDFFfg/KjRvB/1sJcgkC",
        "initiator_type": "network",
        "categories": [77, 78, 80]
    }, {
        "initiator": "https://prg.smartadserver.com/prebid/v1",
        "initiator_type": "network",
        "categories": [80]
    }, {
        "initiator": "https://match.deepintent.com/usersync/141",
        "initiator_type": "network",
        "categories": [78]
    }, {
        "initiator": "https://www.xfinity.com/xfinity-learn-ui/469.f31941b3fd5cceb20a10.css",
        "initiator_type": "network",
        "categories": [77]
    }, {
        "initiator": "https://login.dotomi.com/profile/visit/js/1_0",
        "initiator_type": "network",
        "categories": [77, 78, 80]
    }, {
        "initiator": "https://dpm.demdex.net/id",
        "initiator_type": "network",
        "categories": [77, 78, 79]
    }, {
        "initiator": "https://e1.emxdgt.com/hb_sync/",
        "initiator_type": "network",
        "categories": [79]
    }, {
        "initiator": "https://image2.pubmatic.com/AdServer/Pug",
        "initiator_type": "network",
        "categories": [77]
    }, {
        "initiator": "https://customer.xfinity.com/layouts/system/VIChecker.aspx",
        "initiator_type": "network",
        "categories": [79]
    }, {
        "initiator": "https://www.xfinity.com/local/",
        "initiator_type": "network",
        "categories": [77]
    }, {
        "initiator": "https://gu.dyntrk.com/adx/rbcn/us.php",
        "initiator_type": "network",
        "categories": [77]
    }, {
        "initiator": "https://www.xfinity.com/xfinityassistant/main.60e4131c7f6ba7b6910d.bundle.js",
        "initiator_type": "script",
        "categories": [80]
    }, {
        "initiator": "https://beacon.krxd.net/usermatch.gif",
        "initiator_type": "network",
        "categories": [77]
    }, {
        "initiator": "https://www.youtube.com/s/player/34f9b71c/www-embed-player.vflset/www-embed-player.js",
        "initiator_type": "script",
        "categories": [80]
    }, {
        "initiator": "https://www.xfinity.com/support/articles/list-of-approved-cable-modems",
        "initiator_type": "network",
        "categories": [80]
    }, {
        "initiator": "https://www.youtube.com/s/player/4bbf8bdb/player_ias.vflset/en_US/base.js",
        "initiator_type": "script",
        "categories": [80, 77]
    }, {
        "initiator": "https://htlb.casalemedia.com/openrtb/pbjs",
        "initiator_type": "network",
        "categories": [77]
    }, {
        "initiator": "https://www.youtube.com/s/player/ac058a09/www-embed-player.vflset/www-embed-player.js",
        "initiator_type": "script",
        "categories": [80]
    }, {
        "initiator": "https://match.sharethrough.com/sync/v1",
        "initiator_type": "network",
        "categories": [77]
    }, {
        "initiator": "https://locations.xfinity.com/custom-elements-es5-adapter.js",
        "initiator_type": "network",
        "categories": [77, 78]
    }, {
        "initiator": "https://servedby.flashtalking.com/map/",
        "initiator_type": "network",
        "categories": [77]
    }, {
        "initiator": "https://ads.stickyadstv.com/user-registering",
        "initiator_type": "network",
        "categories": [80, 77]
    }, {
        "initiator": "https://login.xfinity.com/login",
        "initiator_type": "network",
        "categories": [77, 80, 79]
    }, {
        "initiator": "https://assets.bounceexchange.com/assets/smart-tag/versioned/main_b6a74068bc81cd45e49db31bf4479993.br.js",
        "initiator_type": "script",
        "categories": [77]
    }, {
        "initiator": "https://app.securiti.ai/core/v1/utils/geo/location",
        "initiator_type": "network",
        "categories": [79, 80]
    }, {
        "initiator": "https://image4.pubmatic.com/AdServer/SPug",
        "initiator_type": "network",
        "categories": [77]
    }, {
        "initiator": "https://cms.analytics.yahoo.com/cms",
        "initiator_type": "network",
        "categories": [77]
    }, {
        "initiator": "https://comcastcom.d1.sc.omtrdc.net/id",
        "initiator_type": "network",
        "categories": [80, 78]
    }, {
        "initiator": "https://military.xfinity.com/ISI.DynamicPages/5f797c75fb2845f081728bad94e7777d/combined.css",
        "initiator_type": "network",
        "categories": [77, 78, 79, 80]
    }, {
        "initiator": "https://secure-gg.imrworldwide.com/cgi-bin/m",
        "initiator_type": "network",
        "categories": [77]
    }, {
        "initiator": "https://internet.xfinity.com/sunset-block-page.0ce8bbff809f99bfeff3.css",
        "initiator_type": "network",
        "categories": [78, 80]
    }, {
        "initiator": "https://oauth.xfinity.com/oauth/userinfo",
        "initiator_type": "network",
        "categories": [79, 80]
    }, {
        "initiator": "https://openrtb-us-east-1.axonix.com/syn",
        "initiator_type": "network",
        "categories": [77]
    }, {
        "initiator": "https://pippio.com/api/sync",
        "initiator_type": "network",
        "categories": [77, 79]
    }, {
        "initiator": "https://px.owneriq.net/ecc",
        "initiator_type": "network",
        "categories": [77]
    }, {
        "initiator": "https://www.xfinity.com/support/shared/1.aa5f97b2127d21e3f7c6.js",
        "initiator_type": "network",
        "categories": [77, 78]
    }, {
        "initiator": "https://ups.analytics.yahoo.com/ups/58292/sync",
        "initiator_type": "network",
        "categories": [77]
    }, {
        "initiator": "https://simage2.pubmatic.com/AdServer/Pug",
        "initiator_type": "network",
        "categories": [77, 79, 78]
    }, {
        "initiator": "https://a.tribalfusion.com/i.match",
        "initiator_type": "network",
        "categories": [77]
    }, {
        "initiator": "https://beacon.lynx.cognitivlabs.com/pbmtc.gif",
        "initiator_type": "network",
        "categories": [80]
    }, {
        "initiator": "https://assets.adobedtm.com/331fbea29f79/8ae378df34a6/launch-cc1b3681205e.min.js",
        "initiator_type": "script",
        "categories": [80]
    }, {
        "initiator": "https://ad.turn.com/r/cs",
        "initiator_type": "network",
        "categories": [80]
    }, {
        "initiator": "https://sync.taboola.com/sg/indexscod/1/cm/",
        "initiator_type": "network",
        "categories": [77]
    }, {
        "initiator": "https://analytics.google.com/g/collect",
        "initiator_type": "network",
        "categories": [79, 77, 78, 80]
    }, {
        "initiator": "https://ad.mrtnsvr.com/sync/pubmatic",
        "initiator_type": "network",
        "categories": [77]
    }, {
        "initiator": "https://cdn.pdc.comcast.com/buy/plan/includes/dist/bundle.js",
        "initiator_type": "network",
        "categories": [77, 79, 80]
    }, {
        "initiator": "https://pixel.advertising.com/ups/58365/sync",
        "initiator_type": "network",
        "categories": [77]
    }, {
        "initiator": "https://universal.iperceptions.com/wrapper.js",
        "initiator_type": "script",
        "categories": [80, 77]
    }, {
        "initiator": "https://mweb.ck.inmobi.com/sync/10",
        "initiator_type": "network",
        "categories": [77]
    }, {
        "initiator": "https://e.serverbid.com/api/v2",
        "initiator_type": "network",
        "categories": [80]
    }, {
        "initiator": "https://i.liadm.com/s/30576",
        "initiator_type": "network",
        "categories": [77]
    }, {
        "initiator": "https://melee.sed.dh.comcast.net/v2/event/sic",
        "initiator_type": "network",
        "categories": [78]
    }, {
        "initiator": "https://apps.bazaarvoice.com/analytics/bv-analytics.js",
        "initiator_type": "script",
        "categories": [78]
    }, {
        "initiator": "https://match.sharethrough.com/E4rooAtA/v1",
        "initiator_type": "network",
        "categories": [77]
    }, {
        "initiator": "https://idm.xfinity.com/myaccount/reset",
        "initiator_type": "network",
        "categories": [79]
    }, {
        "initiator": "https://4053494.fls.doubleclick.net/activityi;dc_pre=CMitre_AhvwCFRKcYgodfucDrQ;src=4053494;type=comca517;cat=xfini00_;ord=2828887352851;gtm=2odbu0;auiddc=1106321392.1671481246;~oref=https%3A%2F%2Fwww.xfinity.com%2Flearn%2Fhome-security",
        "initiator_type": "network",
        "categories": [77, 80]
    }, {
        "initiator": "https://spa.xfinity.com/advanced-security",
        "initiator_type": "network",
        "categories": [78]
    }, {
        "initiator": "https://military.xfinity.com/",
        "initiator_type": "network",
        "categories": [78, 79]
    }, {
        "initiator": "https://static.cimcontent.net/data-layer/",
        "initiator_type": "network",
        "categories": [77, 79, 80, 78]
    }, {
        "initiator": "https://cdn.comcast.com/-/media/Common/adrum/adrum45162845.js",
        "initiator_type": "network",
        "categories": [78, 79, 77, 80]
    }, {
        "initiator": "https://sync.srv.stackadapt.com/sync",
        "initiator_type": "network",
        "categories": [78]
    }, {
        "initiator": "https://use1.smartadserver.com/h/aip",
        "initiator_type": "network",
        "categories": [78]
    }, {
        "initiator": "https://ib.adnxs.com/async_usersync",
        "initiator_type": "network",
        "categories": [78]
    }, {
        "initiator": "https://assets.adobedtm.com/331fbea29f79/a5b25a446515/launch-e80baf9c0255.min.js",
        "initiator_type": "script",
        "categories": [80, 78, 77]
    }, {
        "initiator": "https://bat.bing.com/bat.js",
        "initiator_type": "script",
        "categories": [77, 80]
    }, {
        "initiator": "https://dsum-sec.casalemedia.com/rrum",
        "initiator_type": "network",
        "categories": [77]
    }, {
        "initiator": "https://um.simpli.fi/pubmatic",
        "initiator_type": "network",
        "categories": [77]
    }, {
        "initiator": "https://xchat.xfinity.com/tagserver/logging/logline",
        "initiator_type": "network",
        "categories": [77, 79]
    }, {
        "initiator": "https://www.xfinity.com/support/shared/1.b408829ec8aae91f2b07.js",
        "initiator_type": "network",
        "categories": [80, 77, 78]
    }, {
        "initiator": "https://bat.bing.com/action/0",
        "initiator_type": "network",
        "categories": [77]
    }, {
        "initiator": "https://ssbsync-global.smartadserver.com/api/sync",
        "initiator_type": "network",
        "categories": [77, 80]
    }, {
        "initiator": "https://uipglob.semasio.net/amazon/1/get",
        "initiator_type": "network",
        "categories": [77]
    }, {
        "initiator": "https://www.youtube.com/s/player/ac058a09/player_ias.vflset/en_US/base.js",
        "initiator_type": "script",
        "categories": [80, 77]
    }, {
        "initiator": "https://sync-tm.everesttech.net/upi/pid/1522",
        "initiator_type": "network",
        "categories": [77]
    }, {
        "initiator": "https://carriers.xfinity.com/css/theme_carrier.css",
        "initiator_type": "network",
        "categories": [77, 80, 78, 79]
    }, {
        "initiator": "https://cdn.adnxs.com/v/s/231/trk.js",
        "initiator_type": "network",
        "categories": [77, 78]
    }, {
        "initiator": "https://www.facebook.com/tr",
        "initiator_type": "network",
        "categories": [77, 79, 80]
    }, {
        "initiator": "https://www.xfinity.com/national/xfinity-learn-ui/269.aa02f6de8c00d2abd7f0.js",
        "initiator_type": "network",
        "categories": [79]
    }, {
        "initiator": "https://www.xfinity.com/support/shared/1.503a3d07a60eb3ec39e7.js",
        "initiator_type": "network",
        "categories": [77, 78]
    }, {
        "initiator": "https://s.amazon-adsystem.com/dcm",
        "initiator_type": "network",
        "categories": [77]
    }, {
        "initiator": "https://ib.adnxs.com/prebid/setuid",
        "initiator_type": "network",
        "categories": [78]
    }, {
        "initiator": "https://www.xfinity.com/national/xfinity-learn-ui/main.81b212098b2d4f602a0b.js",
        "initiator_type": "script",
        "categories": [79]
    }, {
        "initiator": "https://cm.g.doubleclick.net/pixel",
        "initiator_type": "network",
        "categories": [77]
    }, {
        "initiator": "https://www.xfinity.com/xfinity-learn-ui/469.35cbe374f11b93af7804.js",
        "initiator_type": "network",
        "categories": [77, 78]
    }, {
        "initiator": "https://sync.crwdcntrl.net/qmap",
        "initiator_type": "network",
        "categories": [77]
    }, {
        "initiator": "https://pixel.tapad.com/idsync/ex/push",
        "initiator_type": "network",
        "categories": [77]
    }, {
        "initiator": "https://register.be.xfinity.com/css/fonts-local.min.css",
        "initiator_type": "network",
        "categories": [78]
    }, {
        "initiator": "https://bs.serving-sys.com/Serving",
        "initiator_type": "network",
        "categories": [77]
    }, {
        "initiator": "https://ps.eyeota.net/match",
        "initiator_type": "network",
        "categories": [77]
    }, {
        "initiator": "https://fls.doubleclick.net/json",
        "initiator_type": "network",
        "categories": [77]
    }, {
        "initiator": "https://www.xfinity.com/overview",
        "initiator_type": "network",
        "categories": [80, 77, 78]
    }, {
        "initiator": "https://ag.innovid.com/dv/sync",
        "initiator_type": "network",
        "categories": [77]
    }, {
        "initiator": "https://bttrack.com/pixel/cookiesync",
        "initiator_type": "network",
        "categories": [77]
    }, {
        "initiator": "https://tg.socdm.com/aux/idsync",
        "initiator_type": "network",
        "categories": [77]
    }, {
        "initiator": "https://d.adroll.com/cm/index/tp_out",
        "initiator_type": "network",
        "categories": [77]
    }, {
        "initiator": "https://cdn.stg.comcast.com/cmp/css/cookie-consent.css",
        "initiator_type": "network",
        "categories": [78, 80]
    }, {
        "initiator": "https://universal.iperceptions.com/core/IpEngine_v78.0.js",
        "initiator_type": "script",
        "categories": [78]
    }, {
        "initiator": "https://www.xfinity.com/stream/js/helpers/iframe-redirect.js",
        "initiator_type": "network",
        "categories": [78, 79]
    }, {
        "initiator": "https://aorta.clickagy.com/pixel.gif",
        "initiator_type": "network",
        "categories": [77]
    }, {
        "initiator": "https://assets.adobedtm.com/331fbea29f79/c45f53b40264/launch-27c33353fd63.min.js",
        "initiator_type": "script",
        "categories": [80]
    }, {
        "initiator": "https://dis.eu.criteo.com/dis/usersync.aspx",
        "initiator_type": "network",
        "categories": [77]
    }, {
        "initiator": "https://dl.cws.xfinity.com/event/",
        "initiator_type": "network",
        "categories": [80, 78, 77, 79]
    }, {
        "initiator": "https://js.adsrvr.org/universal_pixel.1.1.0.js",
        "initiator_type": "network",
        "categories": [77]
    }, {
        "initiator": "https://pmp.mxptint.net/sn.ashx",
        "initiator_type": "network",
        "categories": [77]
    }, {
        "initiator": "https://hb-api.omnitagjs.com/hb-api/prebid/v1",
        "initiator_type": "network",
        "categories": [77]
    }, {
        "initiator": "https://ads.yieldmo.com/sync",
        "initiator_type": "network",
        "categories": [77]
    }, {
        "initiator": "https://register.be.xfinity.com/activate",
        "initiator_type": "network",
        "categories": [78, 79]
    }, {
        "initiator": "https://b1sync.zemanta.com/usersync/index/",
        "initiator_type": "network",
        "categories": [77]
    }, {
        "initiator": "https://sync.taboola.com/sg/amazon-a9-network/1/rtb",
        "initiator_type": "network",
        "categories": [80]
    }, {
        "initiator": "https://ice.360yield.com/ul_cb/match",
        "initiator_type": "network",
        "categories": [77]
    }, {
        "initiator": "https://match.prod.bidr.io/cookie-sync/cri",
        "initiator_type": "network",
        "categories": [77]
    }, {
        "initiator": "https://ib.adnxs.com/ut/v3/prebid",
        "initiator_type": "network",
        "categories": [77]
    }, {
        "initiator": "https://secure.insightexpressai.com/adServer/adServerESI.aspx",
        "initiator_type": "network",
        "categories": [77, 80]
    }, {
        "initiator": "https://metrics.xfinity.com/b/ss/comcastdotcomprod/10/JS-2.22.0-LDQM/s2977501424317",
        "initiator_type": "network",
        "categories": [78, 79, 77]
    }, {
        "initiator": "https://pixel-sync.sitescout.com/dmp/pixelSync",
        "initiator_type": "network",
        "categories": [77]
    }, {
        "initiator": "https://idsync.rlcdn.com/365868.gif",
        "initiator_type": "network",
        "categories": [77]
    }, {
        "initiator": "https://native.sharethrough.com/assets/sfp.js",
        "initiator_type": "network",
        "categories": [77]
    }, {
        "initiator": "https://cms.quantserve.com/pixel/p-vj4AYjBqd6VJ2.gif",
        "initiator_type": "network",
        "categories": [77]
    }, {
        "initiator": "https://ads.yieldmo.com/v000/sync",
        "initiator_type": "network",
        "categories": [77]
    }, {
        "initiator": "https://sc-static.net/scevent.min.js",
        "initiator_type": "network",
        "categories": [77, 80]
    }, {
        "initiator": "https://internet.xfinity.com/sunset-block-page.055b838af7b24d13d03d.css",
        "initiator_type": "network",
        "categories": [78, 77]
    }, {
        "initiator": "https://csync.loopme.me/",
        "initiator_type": "network",
        "categories": [77]
    }, {
        "initiator": "https://ap.lijit.com/pixel",
        "initiator_type": "network",
        "categories": [77]
    }, {
        "initiator": "https://military.xfinity.com/ISI.DynamicPages/f9d1753bedd8411ea3b3e3b4e33e100f/combined.css",
        "initiator_type": "network",
        "categories": [77, 80, 78, 79]
    }, {
        "initiator": "https://xchat.xfinity.com/chatskins/sites/10006690/flash/XFN-CIV2-Standard-FAB-Black/uiconfig.json",
        "initiator_type": "network",
        "categories": [77]
    }, {
        "initiator": "https://static.criteo.net/js/ld/publishertag.prebid.135.js",
        "initiator_type": "script",
        "categories": [77]
    }, {
        "initiator": "https://ice.360yield.com/match",
        "initiator_type": "network",
        "categories": [77]
    }, {
        "initiator": "https://media.xchat.xfinity.com/media/launch/tcFramework.min.js",
        "initiator_type": "network",
        "categories": [77]
    }, {
        "initiator": "https://assets.adobedtm.com/331fbea29f79/b89b840626b5/launch-dfc187a05ec1.min.js",
        "initiator_type": "script",
        "categories": [77, 78, 80]
    }, {
        "initiator": "https://cookie-matching.mediarithmics.com/input",
        "initiator_type": "network",
        "categories": [77]
    }, {
        "initiator": "https://c1.adform.net/serving/cookie/match",
        "initiator_type": "network",
        "categories": [80]
    }, {
        "initiator": "https://assets.bounceexchange.com/assets/smart-tag/versioned/cjs_min_62f4846d97d6cffa05fd709123de3ea8.js",
        "initiator_type": "script",
        "categories": [79]
    }, {
        "initiator": "https://um2.eqads.com/um/cs",
        "initiator_type": "network",
        "categories": [77]
    }, {
        "initiator": "https://military.xfinity.com/ISI.DynamicPages/5e60cabfae5b43de84f67c61c42c7571/combined.js",
        "initiator_type": "script",
        "categories": [80, 79]
    }, {
        "initiator": "https://connect.xfinity.com/appsuite/apps/ads/minified/mini-msglistAds-right.html",
        "initiator_type": "network",
        "categories": [78]
    }, {
        "initiator": "https://cdn-prod.securiti.ai/consent/auto_blocking/4b9bbe2a-9c5d-4512-bb76-768a8ea32bc0/a76cdf55-ebf2-44a8-890a-2b5167b45b18.js",
        "initiator_type": "network",
        "categories": [79, 80]
    }, {
        "initiator": "https://match.prod.bidr.io/cookie-sync/ie",
        "initiator_type": "network",
        "categories": [77]
    }, {
        "initiator": "https://crb.kargo.com/api/v1/dsync/DBM",
        "initiator_type": "network",
        "categories": [77]
    }, {
        "initiator": "https://ups.analytics.yahoo.com/ups/58570/occ",
        "initiator_type": "network",
        "categories": [79]
    }, {
        "initiator": "https://www.xfinity.com/learn/internet-service",
        "initiator_type": "network",
        "categories": [77]
    }, {
        "initiator": "https://match.360yield.com/ul_cb/match",
        "initiator_type": "network",
        "categories": [77]
    }, {
        "initiator": "https://universal.iperceptions.com/harvest/harvest_22299.js",
        "initiator_type": "script",
        "categories": [80]
    }, {
        "initiator": "https://i.liadm.com/s/52164",
        "initiator_type": "network",
        "categories": [77]
    }, {
        "initiator": "https://connect.xfinity.com/voice/voicemail",
        "initiator_type": "network",
        "categories": [79, 78]
    }, {
        "initiator": "https://www.google.com/ads/ga-audiences",
        "initiator_type": "network",
        "categories": [80]
    }, {
        "initiator": "https://onetag-sys.com/prebid-request",
        "initiator_type": "network",
        "categories": [77]
    }, {
        "initiator": "https://www.xfinity.com/support/articles/xfinity-rewards-faq",
        "initiator_type": "network",
        "categories": [80]
    }, {
        "initiator": "https://sync.1rx.io/usersync/conversant/AQEAz5fAXdCs6wFDAC5bAQA4ugE",
        "initiator_type": "network",
        "categories": [80]
    }, {
        "initiator": "https://www.xfinity.com/national/",
        "initiator_type": "network",
        "categories": [79]
    }, {
        "initiator": "https://p.tvpixel.com/com.snowplowanalytics.iglu/v1",
        "initiator_type": "network",
        "categories": [77]
    }, {
        "initiator": "https://eb2.3lift.com/sync/google/demand",
        "initiator_type": "network",
        "categories": [77]
    }, {
        "initiator": "https://www.xfinity.com/xfinityassistant/main.efb8ee96b918ab8497e4.bundle.js",
        "initiator_type": "script",
        "categories": [80]
    }, {
        "initiator": "https://assets.bounceexchange.com/assets/bounce/local_storage_frame17.min.html",
        "initiator_type": "script",
        "categories": [80]
    }, {
        "initiator": "https://www.xfinity.com/~/media/BA46D12B-17F5-4E39-B847-513F7C2481D9",
        "initiator_type": "network",
        "categories": [80]
    }, {
        "initiator": "https://hbopenbid.pubmatic.com/translator",
        "initiator_type": "network",
        "categories": [77, 80]
    }, {
        "initiator": "https://brightcom-d.openx.net/w/1.0/arj",
        "initiator_type": "network",
        "categories": [77]
    }, {
        "initiator": "https://sync.resetdigital.co/csync",
        "initiator_type": "network",
        "categories": [77]
    }, {
        "initiator": "https://www.xfinity.com/support/shared/1.0defc0bd9b0d61cf1f51.js",
        "initiator_type": "network",
        "categories": [77, 78]
    }, {
        "initiator": "https://inv-nets.admixer.net/adxcm.aspx",
        "initiator_type": "network",
        "categories": [80]
    }, {
        "initiator": "https://sb.scorecardresearch.com/p",
        "initiator_type": "network",
        "categories": [80]
    }, {
        "initiator": "https://ap.lijit.com/dsp/google/cookiematch/dv",
        "initiator_type": "network",
        "categories": [77]
    }, {
        "initiator": "https://www.xfinity.com/stream/",
        "initiator_type": "network",
        "categories": [77, 78, 80]
    }, {
        "initiator": "https://s.amazon-adsystem.com/iu3",
        "initiator_type": "network",
        "categories": [77]
    }],
    "non_optout_categories": [79],
    "configured_initiators": [{
        "initiator": ".*/quantum-comcast-worker.html",
        "categories": [78]
    }, {
        "initiator": "https://cdn.quantummetric.com/qscripts/quantum-comcast.js",
        "categories": [79]
    }, {
        "initiator": "https://comcast-app.quantummetric.com/",
        "categories": [79]
    }, {
        "initiator": "https://www.xfinity.com/dss-privacy-xpc",
        "categories": [79]
    }, {
        "initiator": "https://polaris.xfinity.com/globalnav/polaris.wc.js",
        "categories": [79]
    }, {
        "initiator": "https://xfn-cart-release.np.dig.xfinity.com/",
        "categories": [79]
    }, {
        "initiator": "https://www.xfinity.com/digital",
        "categories": [79]
    }, {
        "initiator": "https://digital.xfinity.com/cart",
        "categories": [79]
    }, {
        "initiator": ".*assets.xfinity.com/.*",
        "categories": [79]
    }, {
        "initiator": "cdn.comcast.com.*",
        "categories": [79]
    }, {
        "initiator": "https://www.youtube.com/s/player/041a7965/www-widgetapi.vflset/www-widgetapi.js",
        "categories": [79]
    }, {
        "initiator": ".*xmobile-d2c.xfinity.com/digital-buy/.*",
        "categories": [79]
    }, {
        "initiator": " .*-/jssmedia/.*",
        "categories": [79]
    }, {
        "initiator": ".*.xfinity.com/stream/.*",
        "categories": [79]
    }, {
        "initiator": "img.xfinitymobile.com/image",
        "categories": [79]
    }, {
        "initiator": "https://z.moatads.com/.*",
        "categories": [79]
    }, {
        "initiator": ".*xfinity.com/dss-privacy-xpc/.*",
        "categories": [79]
    }, {
        "initiator": "https://static.cimcontent.net/.*",
        "categories": [77]
    }, {
        "initiator": "https://www.google.com/recaptcha/api.js ",
        "categories": [79]
    }, {
        "initiator": "digital.xfinity.com/.*",
        "categories": [79]
    }, {
        "initiator": "https://cdn.jsdelivr.net/.*",
        "categories": [79]
    }, {
        "initiator": "https://comcast.inq.com/.*",
        "categories": [79]
    }, {
        "initiator": "https://cdn-prod.securiti.ai/consent/auto_blocking/4b9bbe2a-9c5d-4512-bb76-768a8ea32bc0/a76cdf55-ebf2-44a8-890a-2b5167b45b18.js",
        "categories": [79]
    }, {
        "initiator": "https://www.xfinity.com/-/media/",
        "categories": [79]
    }, {
        "initiator": ".*.cws.xfinity.com/.*",
        "categories": [79]
    }, {
        "initiator": "https://wjs.wurflcloud.com/wurfl.js",
        "categories": [79]
    }, {
        "initiator": "/static/js/.*chunk.js",
        "categories": [79]
    }, {
        "initiator": "https://www.gstatic.com/.*",
        "categories": [79]
    }, {
        "initiator": "/static/js/bundle.js",
        "categories": [79]
    }, {
        "initiator": "https://static.cimcontent.net/data-layer/.*",
        "categories": [79]
    }, {
        "initiator": "https://static.cimcontent.net/data-layer/",
        "categories": [78]
    }, {
        "initiator": "https://static.cimcontent.net/common-web-assets/.*",
        "categories": [79]
    }, {
        "initiator": "https://sdx.xfinity.com/cms/data/myxfinity/",
        "categories": [79]
    }, {
        "initiator": "https://sdx.xfinity.com/fonts/",
        "categories": [80]
    }, {
        "initiator": ".*assets.adobedtm.*",
        "categories": [79]
    }, {
        "initiator": "https://dl.cws.xfinity.com/nonprod/",
        "categories": [77]
    }, {
        "initiator": "https://polaris.xfinity.com/polaris.wc.js",
        "categories": [79]
    }, {
        "initiator": "https://auth.xfinity.com/oauth/login",
        "categories": [80]
    }, {
        "initiator": "https://oauth.xfinity.com/oauth/authorize.*",
        "categories": [80, 79]
    }, {
        "initiator": "https://login.xfinity.com/login",
        "categories": [80]
    }, {
        "initiator": "https://edge.myriad-xcr.xcr.comcast.net/",
        "categories": [77]
    }, {
        "initiator": "https://melee.sed.dh.comcast.net/v2/",
        "categories": [77]
    }, {
        "initiator": "https://universal.iperceptions.com/",
        "categories": [78]
    }, {
        "initiator": "https://qa-sdx.cms.xfinity.com/",
        "categories": [79]
    }, {
        "initiator": "https://acdn.adnxs.com/.*",
        "categories": [77, 79]
    }, {
        "initiator": "https://fastlane.rubiconproject.com/a/api/fastlane.json",
        "categories": [77]
    }, {
        "initiator": "https://tlx.3lift.com/header/auction",
        "categories": [77]
    }, {
        "initiator": "https://e.serverbid.com/api/v2",
        "categories": [77]
    }, {
        "initiator": "https://bidder.criteo.com/cdb",
        "categories": [77]
    }, {
        "initiator": "https://ib.adnxs.com/.*",
        "categories": [77]
    }, {
        "initiator": "https://z.moatads.com/comcastappnexusdisplay765226596515/moatad.js",
        "categories": [77]
    }, {
        "initiator": "https://cdn.adnxs.com/v/s/",
        "categories": [77]
    }, {
        "initiator": "https://comcastresidentialservices.tt.omtrdc.net/rest/v1/delivery",
        "categories": [77]
    }, {
        "initiator": "https://es.xfinity.com/sdcustomerpreprod/dss-dotcom/.*.js",
        "categories": [79]
    }, {
        "initiator": "https://metrics.xfinity.com/b/ss/comcastdotcomprod/.*",
        "categories": [78]
    }, {
        "initiator": "https://ib.3lift.com/rev/.*/dist/bundle.js",
        "categories": [77]
    }, {
        "initiator": "https://geo.moatads.com/.*",
        "categories": [77]
    }, {
        "initiator": "https://s.update.sharethru.com/.*",
        "categories": [77]
    }, {
        "initiator": ".*/xfinity-learn-ui/images/.*",
        "categories": [79]
    }, {
        "initiator": ".*-/jssmedia/.*",
        "categories": [79]
    }, {
        "initiator": "www.xfinity.com/mobile/shop/.*",
        "categories": [79]
    }, {
        "initiator": ".*sdx.xfinity.com/cms/data/aiq/xachatwidget.*",
        "categories": [79]
    }, {
        "initiator": "https://media.xchat.xfinity.com/media/launch/chatLoader.min.js",
        "categories": [79]
    }, {
        "initiator": "https://qa-sdx.cms.xfinity.com/cms/data/aiq/xachatwidget/js/cht.js",
        "categories": [79]
    }, {
        "initiator": "https://www.xfinity.com/learn/nuance/xfinityChat.html",
        "categories": [79]
    }, {
        "initiator": "media.xchat.xfinity.com/media/.*",
        "categories": [79]
    }, {
        "initiator": ".*img/.*",
        "categories": [79]
    }, {
        "initiator": ".*//edge.myriad-xcr.xcr.comcast.net/.*",
        "categories": [79]
    }, {
        "initiator": "https://google-analytics.com/.*",
        "categories": [78]
    }, {
        "initiator": ".*//maps.googleapis.com/maps.*",
        "categories": [79]
    }, {
        "initiator": "prod-mdi-device-images.s3.amazonaws.com/device_images/.*",
        "categories": [79]
    }, {
        "initiator": "https://maps.gstatic.com/mapfiles/.*",
        "categories": [79]
    }, {
        "initiator": ".*data:image/svg.*",
        "categories": [79]
    }, {
        "initiator": "https://comcast.demdex.net/.*",
        "categories": [78]
    }, {
        "initiator": "https://www.googletagmanager.com/.*",
        "categories": [78]
    }, {
        "initiator": ".*.xfinity.com/akam.*",
        "categories": [79]
    }, {
        "initiator": ".*cdnwidget.com",
        "categories": [80]
    }, {
        "initiator": ".*cdnbasket.net",
        "categories": [80]
    }, {
        "initiator": "tag.wknd.ai",
        "categories": [80]
    }, {
        "initiator": "https://www.google.com/recaptcha/.*",
        "categories": [79]
    }, {
        "initiator": "https://partner.googleadservices.com/gampad/cookie.js.*",
        "categories": [79]
    }, {
        "initiator": "referafriend.xfinity.com/ISI.DynamicPages/*",
        "categories": [79]
    }, {
        "initiator": "www.google-analytics.com/.*",
        "categories": [78]
    }, {
        "initiator": ".*.referafriend.xfinity.com/.*",
        "categories": [79]
    }, {
        "initiator": ".*.xfinity.com/referafriend/.*",
        "categories": [79]
    }, {
        "initiator": "https://prod-care-community-cdn.sprinklr.com",
        "categories": [80]
    }, {
        "initiator": "https://sprcdn-assets.sprinklr.com/",
        "categories": [80]
    }, {
        "initiator": "https://www.facebook.com/tr",
        "categories": [78]
    }, {
        "initiator": "https://connect.facebook.net/signals/config/.*",
        "categories": [78]
    }, {
        "initiator": "https://publicis-.*-adswizz.attribution.adswizz.com/fire",
        "categories": [78]
    }, {
        "initiator": ".*universal.iperceptions.com/iFrame.html",
        "categories": [78]
    }, {
        "initiator": "https://bat.bing.com/action/.*",
        "categories": [78]
    }, {
        "initiator": "https://connect.facebook.net/signals/config/",
        "categories": [78]
    }, {
        "initiator": "https://bat.bing.com/p/action/.*",
        "categories": [78]
    }, {
        "initiator": ".*.fls.doubleclick.net/activityi",
        "categories": [78]
    }, {
        "initiator": "https://tr.snapchat.com/cm/.*",
        "categories": [78]
    }, {
        "initiator": "https://tr.snapchat.com/config/com/.*",
        "categories": [78]
    }, {
        "initiator": "https://www.redditstatic.com/ads/pixel.js",
        "categories": [78, 79]
    }, {
        "initiator": ".*static.ads-twitter.com/uwt.js",
        "categories": [78]
    }, {
        "initiator": "https://login-ds.dotomi.com/profile/visit/final/js",
        "categories": [78]
    }, {
        "initiator": "https://www.google.com/afs/ads?.*",
        "categories": [78]
    }, {
        "initiator": "https://www.google.com/afs/ads/i/iframe.html",
        "categories": [78]
    }, {
        "initiator": "https://www.google.com/adsense/search/ads.js",
        "categories": [78]
    }, {
        "initiator": "https://gum.criteo.com/syncframe?.*",
        "categories": [78]
    }, {
        "initiator": ".*googleads.g.doubleclick.net/.*",
        "categories": [78]
    }, {
        "initiator": ".*/layouts/system/VisitorIdentification.js",
        "categories": [79]
    }, {
        "initiator": ".*sd.iperceptions.com.*",
        "categories": [78]
    }, {
        "initiator": ".*js.pulseinsights.com/surveys.*",
        "categories": [80]
    }, {
        "initiator": ".*survey.pulseinsights.com/serve.*",
        "categories": [79]
    }, {
        "initiator": ".*cj.dotomi.com/.*",
        "categories": [78]
    }, {
        "initiator": ".*.sjwoe.com/.*",
        "categories": [78]
    }, {
        "initiator": ".*mczbf.com/.*",
        "categories": [78]
    }, {
        "initiator": "https://cdn.adnxs.com.*",
        "categories": [78]
    }, {
        "initiator": "https://dl.cws.xfinity.com.*",
        "categories": [78]
    }, {
        "initiator": "https://z.moatads.com.*",
        "categories": [79]
    }, {
        "initiator": "https://products.gobankingrates.com.*",
        "categories": [79]
    }, {
        "initiator": "https://www.googletagmanager.com/gtm.js.*",
        "categories": [79]
    }, {
        "initiator": "https://www.google-analytics.com/analytics.js.*",
        "categories": [79]
    }, {
        "initiator": "https://connect.facebook.net/.*",
        "categories": [79]
    }, {
        "initiator": ".*assets.adobedtm.com/extensions/.*",
        "categories": [79]
    }, {
        "initiator": "https://.*.v.fwmrm.net/ad/.*",
        "categories": [79]
    }, {
        "initiator": "https://xfinitydigital.demdex.net/.*",
        "categories": [79]
    }, {
        "initiator": "data:text/javascript;.*",
        "categories": [79]
    }, {
        "initiator": ".*.xfinity.com/_static_cimcontent_net/common-web-assets/.*",
        "categories": [79]
    }, {
        "initiator": ".*data:image/gif;base64.*",
        "categories": [79]
    }, {
        "initiator": "universal.iperceptions.com",
        "categories": [79]
    }, {
        "initiator": "https://edge.myriad.top.comcast.net/select/.*",
        "categories": [79]
    }, {
        "initiator": "https://static.criteo.net/js/ld/publishertag.js/.*",
        "categories": [79]
    }, {
        "initiator": "https://static.criteo.net/js/ld/publishertag.js?_=1671039665905",
        "categories": [79]
    }, {
        "initiator": ".*/apps/3rd.party/tinymce/tinymce.min.js/.*",
        "categories": [79]
    }, {
        "initiator": "/dss-dotcom/.*",
        "categories": [79]
    }, {
        "initiator": "/device_images/.*",
        "categories": [79]
    }, {
        "initiator": "/assets/js/.*",
        "categories": [79]
    }, {
        "initiator": "/assets/js/chart.*",
        "categories": [79]
    }, {
        "initiator": "^(\\d{2,4}(-es2015)?|[a-z]+)\\.[a-z0-9]+\\.js$",
        "categories": [79]
    }, {
        "initiator": "/assets/britebill/.*",
        "categories": [79]
    }, {
        "initiator": "oauth.xfinity.com/oauth/.*",
        "categories": [79]
    }, {
        "initiator": "customer.xfinity.com/oauth/.*",
        "categories": [79]
    }, {
        "initiator": "https://customer.xfinity.com/dss-dotcom/.*",
        "categories": [79]
    }, {
        "initiator": "https://assets.adobedtm.com/extensions/EPbde2f7ca14e540399dcc1f8208860b7b/AppMeasurement.min.js",
        "categories": [79]
    }, {
        "initiator": "https://static.criteo.net/.*",
        "categories": [79]
    }, {
        "initiator": "https://a.espncdn.com/.*",
        "categories": [79]
    }, {
        "initiator": "https://players.brightcove.net/.*",
        "categories": [79]
    }, {
        "initiator": "https://www.xfinity.com/espn.*",
        "categories": [79]
    }, {
        "initiator": ".*espn.com/.*",
        "categories": [79]
    }, {
        "initiator": "/stream/.*",
        "categories": [79]
    }, {
        "initiator": ".*//edge.myriad-gn-xcr.xcr.comcast.net/.*",
        "categories": [79]
    }, {
        "initiator": "//assets.bounceexchange.com/assets/smart-tag/versioned/.*",
        "categories": [79]
    }, {
        "initiator": "https://edge.myriad-gn-xcr.xcr.comcast.net/.*",
        "categories": [79]
    }, {
        "initiator": " https://analytics.xcal.tv/comcast/v3/player/.*",
        "categories": [79]
    }, {
        "initiator": "https://www.xfinity.com/.*",
        "categories": [79]
    }, {
        "initiator": "https://www.xfinity.com/hrN1uyPtzP/*",
        "categories": [79]
    }, {
        "initiator": ".*/hrN1uyPtzP.*",
        "categories": [79]
    }, {
        "initiator": "https://www.xfinity.com/akam/.*",
        "categories": [79]
    }, {
        "initiator": "https://ipds.adrta.com/.*",
        "categories": [79]
    }, {
        "initiator": "xchat.xfinity.com/.*",
        "categories": [79]
    }, {
        "initiator": ".*inqChatLaunch.*",
        "categories": [79]
    }, {
        "initiator": "https://assets.xfinity.com/assets/.*",
        "categories": [79]
    }, {
        "initiator": "https://xchat.xfinity.com/chatskins/launch/inqChatLaunch10006690.js",
        "categories": [79]
    }, {
        "initiator": ".*/apps/3rd.party/tinymce/tinymce.min.js",
        "categories": [79]
    }, {
        "initiator": "https://connect.xfinity.com/appsuite/.*",
        "categories": [79]
    }, {
        "initiator": ".*.googletagmanager.com/.*",
        "categories": [79]
    }, {
        "initiator": "polaris.xfinity.com/.*",
        "categories": [79]
    }, {
        "initiator": "/cvpWebResource/static/media/.*",
        "categories": [79]
    }, {
        "initiator": "https://cdn.appdynamics.com/adrum/.*.js",
        "categories": [79]
    }, {
        "initiator": "//c.amazon-adsystem.com/aax2/apstag.js",
        "categories": [77]
    }, {
        "initiator": ".*static.cimcontent.net/common-web-assets/ad-assets/prebid/prebid.js.*",
        "categories": [79]
    }, {
        "initiator": "https://7468.v.fwmrm.net/.*",
        "categories": [77]
    }, {
        "initiator": "customer.xfinity.com/oauth/passive_connect.*",
        "categories": [79]
    }, {
        "initiator": "customer.xfinity.com/oauth/callback.*",
        "categories": [79]
    }, {
        "initiator": "customer.xfinity.com/dss-dotcom/mawPostMessage.html.*",
        "categories": [79]
    }, {
        "initiator": "login.xfinity.com/login.*",
        "categories": [79]
    }, {
        "initiator": "https://finder.wifi.xfinity.com.*",
        "categories": [79]
    }, {
        "initiator": "https://verify.sheerid.com/.*",
        "categories": [79]
    }, {
        "initiator": "https://offers.sheerid.com/.*",
        "categories": [79]
    }, {
        "initiator": "https://verify-demo.sheerid.com/.*",
        "categories": [79]
    }, {
        "initiator": "https://services.sheerid.com/.*",
        "categories": [79]
    }, {
        "initiator": ".*military.xfinity.com/ISI.Libraries.Web.Mvc/.*",
        "categories": [79]
    }, {
        "initiator": "https://military.xfinity.com/Content/images/.*",
        "categories": [79]
    }, {
        "initiator": ".*/ISI.DynamicPages/.*",
        "categories": [79]
    }, {
        "initiator": "https://customer.xfinity.com/assets/.*",
        "categories": [79]
    }, {
        "initiator": "https://verify.sheerid.com/xfinity-student/.*",
        "categories": [79]
    }, {
        "initiator": "https://offers.sheerid.com/xfinity/call-center/student/.*",
        "categories": [79]
    }, {
        "initiator": "https://sdx.xfinity.com/cms/data/myaccount/.*",
        "categories": [79]
    }, {
        "initiator": "https://survey.pulseinsights/com/surveys/.*",
        "categories": [80]
    }, {
        "initiator": "https://xapi.xfinity.com/api/xact/webevents",
        "categories": [78]
    }, {
        "initiator": "/xfinity-learn-ui/.*",
        "categories": [79]
    }, {
        "initiator": "https://h.online-metrix.net/.*",
        "categories": [78]
    }, {
        "initiator": "https://comcastcom.d1.sc.omtrdc.net/.*",
        "categories": [78]
    }, {
        "initiator": "https://static.customersaas.com/.*",
        "categories": [79]
    }, {
        "initiator": "https://d35v9wsdymy32b.cloudfront.net/.*",
        "categories": [79]
    }, {
        "initiator": "https://www.xfinity.com/mobile/network/.*",
        "categories": [79]
    }, {
        "initiator": " https://customer.xfinity.com/oauth/.*",
        "categories": [79]
    }, {
        "initiator": ".*acdn.adnxs.com/ast/ast.js.*",
        "categories": [79]
    }, {
        "initiator": "https://aax-dtb-cf.amazon-adsystem.com.*",
        "categories": [77]
    }, {
        "initiator": "https://bidder.criteo.com.*",
        "categories": [77]
    }, {
        "initiator": "https://browser.events.data.msn.com/OneCollector/.*",
        "categories": [78]
    }, {
        "initiator": "https://c.amazon-adsystem.com.*",
        "categories": [77]
    }, {
        "initiator": "https://comcast-d.openx.net.*",
        "categories": [77]
    }, {
        "initiator": "https://crcdn01.adnxs-simple.com/Creative/.*",
        "categories": [77]
    }, {
        "initiator": "https://dl.cws.xfinity.com/Event/.*",
        "categories": [78]
    }, {
        "initiator": "https://dpm.demdex.net.*",
        "categories": [77]
    }, {
        "initiator": "https://e.serverbid.com.*",
        "categories": [77]
    }, {
        "initiator": "https://fastlane.rubiconproject.com/a/api/fastlane.json.*",
        "categories": [77]
    }, {
        "initiator": "https://fls.doubleclick.net/json.*",
        "categories": [77]
    }, {
        "initiator": "https://lax1-ib.adnxs.com/.*",
        "categories": [77]
    }, {
        "initiator": "https://login.xfinity.com/static.*",
        "categories": [79]
    }, {
        "initiator": "https://s.amazon-adsystem.com.*",
        "categories": [77]
    }, {
        "initiator": "https://ssp-sync.criteo.com/user-sync/pixels?countrycode=US",
        "categories": [77]
    }, {
        "initiator": "https://static.criteo.net/js/ld/publishertag.prebid.js",
        "categories": [77]
    }, {
        "initiator": "//mobile.wifi.xfinity.com.*",
        "categories": [79]
    }, {
        "initiator": "https://vcdn.adnxs.com/p/creative-html/.*",
        "categories": [77]
    }, {
        "initiator": "https://www.google.com/pagead/.*",
        "categories": [77]
    }, {
        "initiator": ".*.mixpo.com/.*",
        "categories": [77]
    }, {
        "initiator": ".*oauth/.*",
        "categories": [79]
    }, {
        "initiator": "https://customer.xfinity.com/oauth/passive_connect.*",
        "categories": [79]
    }, {
        "initiator": "https://customer.xfinity.com/oauth/force_connect.*",
        "categories": [79]
    }, {
        "initiator": "https://customer.xfinity.com/oauth/disconnect.*",
        "categories": [79]
    }, {
        "initiator": "https://customer.xfinity.com/oauth/callback.*",
        "categories": [79]
    }, {
        "initiator": "https://customer.xfinity.com/token.html.*",
        "categories": [79]
    }, {
        "initiator": "https://polaris.xfinity.com/globalnav/polaris.wc.es.js",
        "categories": [79]
    }, {
        "initiator": "https://analytics.convertlanguage.com/mpwat.js",
        "categories": [78]
    }, {
        "initiator": "https://static.cimcontent.net/common-web-assets/favicon/site.webmanifest.*",
        "categories": [79]
    }, {
        "initiator": "https://polaris.xfinity.com/globalnav/polaris.wc.es.js.*",
        "categories": [79]
    }, {
        "initiator": "https://servedby.flashtalking.com/.*",
        "categories": [79]
    }, {
        "initiator": "https://www.xfinity.com/mobile/network/map.*",
        "categories": [79]
    }, {
        "initiator": "https://melee.sed.dh.comcast.net/.*",
        "categories": [79]
    }, {
        "initiator": "https://www.google.com/recaptcha/api.js",
        "categories": [79]
    }, {
        "initiator": "commission-junction.com.*",
        "categories": [80]
    }, {
        "initiator": "https://js.adsrvr.org/up_loader.1.1.0.js",
        "categories": [77]
    }, {
        "initiator": ".*/appsuite/api/mail/.*",
        "categories": [79]
    }, {
        "initiator": ".*/mobile/learn/savings-calculator/static/media/.*",
        "categories": [79]
    }, {
        "initiator": ".*/mobile/learn/savings-calculator/static/media/xm-white.ede1f0db.svg",
        "categories": [79]
    }, {
        "initiator": ".*/mobile/learn/savings-calculator/static/media/banner-desktop.c273f96f.jpg",
        "categories": [79]
    }, {
        "initiator": ".*afcyhf.com.*",
        "categories": [78]
    }, {
        "initiator": ".*anrdoezrs.net.*",
        "categories": [78]
    }, {
        "initiator": ".*apmebf.com.*",
        "categories": [78]
    }, {
        "initiator": ".*awltovhc.com.*",
        "categories": [78]
    }, {
        "initiator": ".*awxibrm.com.*",
        "categories": [78]
    }, {
        "initiator": ".*cj.dotomi.com.*",
        "categories": [78]
    }, {
        "initiator": ".*dpbolvw.net.*",
        "categories": [78]
    }, {
        "initiator": ".*emjcd.com.*",
        "categories": [78]
    }, {
        "initiator": ".*ftjcfx.com.*",
        "categories": [78]
    }, {
        "initiator": ".*jdoqocy.com.*",
        "categories": [78]
    }, {
        "initiator": ".*kqzyfj.com.*",
        "categories": [78]
    }, {
        "initiator": ".*lduhtrp.net.*",
        "categories": [78]
    }, {
        "initiator": ".*mjbpab.com.*",
        "categories": [78]
    }, {
        "initiator": ".*qksrv.net.*",
        "categories": [78]
    }, {
        "initiator": ".*qksz.net.*",
        "categories": [78]
    }, {
        "initiator": ".*tkqlhce.com.*",
        "categories": [78]
    }, {
        "initiator": ".*tqlkg.com.*",
        "categories": [78]
    }, {
        "initiator": ".*cj.com.*",
        "categories": [78]
    }, {
        "initiator": ".*cj.mplxtms.com.*",
        "categories": [78]
    }, {
        "initiator": ".*commission-junction.com.*",
        "categories": [78]
    }, {
        "initiator": ".*cualbr.com.*",
        "categories": [78]
    }, {
        "initiator": ".*kdukvh.com.*",
        "categories": [78]
    }, {
        "initiator": ".*mczbf.com.*",
        "categories": [78]
    }, {
        "initiator": ".*pkracv.com.*",
        "categories": [78]
    }, {
        "initiator": ".*rnsfpw.net.*",
        "categories": [78]
    }, {
        "initiator": ".*sjwoe.com.*",
        "categories": [78]
    }, {
        "initiator": ".*vofzpwh.com.*",
        "categories": [78]
    }, {
        "initiator": ".*yceml.net.*",
        "categories": [78]
    }, {
        "initiator": ".*p.zjptg.com.*",
        "categories": [78]
    }, {
        "initiator": ".*data:image/.*",
        "categories": [79]
    }, {
        "initiator": "https://s.yimg.com/wi/ytc.js",
        "categories": [78]
    }, {
        "initiator": ".*yahoo.com",
        "categories": [78]
    }, {
        "initiator": ".*yahoodns.net",
        "categories": [78]
    }, {
        "initiator": ".*yimg.com",
        "categories": [78]
    }, {
        "initiator": ".*sp.analytics.yahoo.com",
        "categories": [78]
    }, {
        "initiator": ".*s.yimg.com",
        "categories": [78]
    }, {
        "initiator": ".*js.pulseinsights.com.*",
        "categories": [78]
    }, {
        "initiator": "https://r.turn.com/server/beacon_call.js.*",
        "categories": [78]
    }, {
        "initiator": "https://r.turn.com/r/beacon.*",
        "categories": [78]
    }, {
        "initiator": "https://sdx.xfinity.com/.*",
        "categories": [79]
    }, {
        "initiator": ".*/appsuite/api/export.*",
        "categories": [79]
    }, {
        "initiator": "https://external.quantummetric.com/visible/latest/.*",
        "categories": [79]
    }, {
        "initiator": "https://comcast.quantummetric.com/qm-visible/.*",
        "categories": [79]
    }, {
        "initiator": "https://d.agkn.com/pixel/.*",
        "categories": [78]
    }, {
        "initiator": ".*youtube.com.*",
        "categories": [80]
    }, {
        "initiator": "verify-dev.identity.xfinity.com/static/.*",
        "categories": [79]
    }, {
        "initiator": "verify-qa.identity.xfinity.com/static/.*",
        "categories": [79]
    }, {
        "initiator": "verify-st.identity.xfinity.com/static/.*",
        "categories": [79]
    }, {
        "initiator": "verify.identity.xfinity.com/static/.*",
        "categories": [79]
    }, {
        "initiator": "http://localhost:8080/static/.*",
        "categories": [79]
    }, {
        "initiator": "https://preview.www.xfinity.com/digital",
        "categories": [79]
    }, {
        "initiator": "https://s.pinimg.com/ct/core.js",
        "categories": [77]
    }, {
        "initiator": "https://ct.pinterest.com/v3/.*",
        "categories": [77]
    }, {
        "initiator": "https://www.xfinity.com/mobile/my-account/.*",
        "categories": [79]
    }, {
        "initiator": "https://www.xfinity.com/mobile/my-account/271-es2015.cfdc107f3c11289ad80e.js",
        "categories": [79]
    }, {
        "initiator": "https://www.xfinity.com/mobile/my-account/279-es2015.9bd20e3eb88c2b13b2fe.js",
        "categories": [79]
    }, {
        "initiator": "https://www.xfinity.com/mobile/my-account/390-es2015.ec65b03c99448fd5c1c2.js",
        "categories": [79]
    }, {
        "initiator": "https://www.xfinity.com/mobile/my-account/527-es2015.3fc41640b7b3f178b8c8.js",
        "categories": [79]
    }, {
        "initiator": "https://www.xfinity.com/mobile/my-account/754-es2015.8a762d4ea12c155f7dc4.js",
        "categories": [79]
    }, {
        "initiator": "https://www.xfinity.com/mobile/my-account/991-es2015.0c59b02897b31b42f4fd.js",
        "categories": [79]
    }, {
        "initiator": "https://www.xfinity.com/mobile/my-account/88-es2015.63150a1ce5ca0a595e19.js",
        "categories": [79]
    }, {
        "initiator": "https://www.xfinity.com/mobile/my-account/main.*",
        "categories": [79]
    }, {
        "initiator": "https://www.xfinity.com/mobile/my-account/runtime.*",
        "categories": [79]
    }, {
        "initiator": "https://www.xfinity.com/mobile/my-account/polyfills.*",
        "categories": [79]
    }, {
        "initiator": "https://www.xfinity.com/mobile/my-account/scripts.*",
        "categories": [79]
    }, {
        "initiator": "https://www.xfinity.com/mobile/my-account/vendor.*",
        "categories": [79]
    }, {
        "initiator": "https://www.xfinity.com/mobile/my-account/fetch-options.js",
        "categories": [79]
    }, {
        "initiator": "https://prod-care-community-cdn.sprinklr.com/.*",
        "categories": [79]
    }, {
        "initiator": "https://digital.*.xfinity.com/plan-builder/assets/.*",
        "categories": [79]
    }, {
        "initiator": "xm-api.*.xfinity.com/sitecore/api/.*",
        "categories": [79]
    }, {
        "initiator": "/bundles/sunset-block-page.*",
        "categories": [79]
    }, {
        "initiator": "/bundles/sunset-block-page.0fc7b1fd25c262043562.js",
        "categories": [79]
    }, {
        "initiator": "https://www.xfinity.com/mobile/my-account/common-es2015.de1804d8efbd09a4b8d1.js",
        "categories": [79]
    }, {
        "initiator": "https://connect.xfinity.com/cvpWebResource/static/media/.*",
        "categories": [80]
    }, {
        "initiator": "https://connect.xfinity.com/cvpWebResource/static/js/*.chunk.js",
        "categories": [79]
    }, {
        "initiator": ".*//assets.xfinity.com/.*",
        "categories": [79]
    }, {
        "initiator": " https://internet.xfinity.com/assets/.*",
        "categories": [79]
    }, {
        "initiator": "https://api.quantummetric.com/.*",
        "categories": [79]
    }, {
        "initiator": "plan-builder/assets/images/.*",
        "categories": [79]
    }, {
        "initiator": "https://connect.xfinity.com/cvpWebResource/static/js/main.8e7ec3c1.chunk.js",
        "categories": [79]
    }, {
        "initiator": ".*/assets/.*",
        "categories": [79]
    }, {
        "initiator": ".*/mobile/my-account/polyfills.*",
        "categories": [79]
    }, {
        "initiator": ".*/mobile/my-account/common.*",
        "categories": [79]
    }, {
        "initiator": "https://ct.pinterest.com/*",
        "categories": [77]
    }, {
        "initiator": "https://s.pinimg.com/*",
        "categories": [78]
    }, {
        "initiator": ".*assets.bounceexchange.com.*",
        "categories": [79]
    }, {
        "initiator": "www.wrike.com/.*",
        "categories": [79]
    }, {
        "initiator": ".*api.bounceexchange.com.*",
        "categories": [79]
    }, {
        "initiator": ".*coupons.bounceexchange.com.*",
        "categories": [79]
    }, {
        "initiator": ".*osr.bounceexchange.com.*",
        "categories": [79]
    }, {
        "initiator": ".*events.bouncex.net.*",
        "categories": [79]
    }, {
        "initiator": ".*pixel.cdnwidget.com.*",
        "categories": [79]
    }, {
        "initiator": ".*tag.bounceexchange.com.*",
        "categories": [79]
    }, {
        "initiator": "https://v6-qoecnf-albq-01.speedtest-web.sys.comcast.net:.*",
        "categories": [79]
    }, {
        "initiator": "https://api.staging01.xfinityspeedtest.comcast.net/.*",
        "categories": [79]
    }, {
        "initiator": "https://polaris.xfinity.com/globalnav/orc.*",
        "categories": [79]
    }, {
        "initiator": "https://speedtest.staging.xfinity.com/.*",
        "categories": [79]
    }, {
        "initiator": "https://oauth.xfinity.com/.*",
        "categories": [79]
    }, {
        "initiator": "https://www.google-analytics.com/.*",
        "categories": [78]
    }, {
        "initiator": "https://cdn-prod.securiti.ai/.*",
        "categories": [79]
    }, {
        "initiator": ".*data:image/png.*",
        "categories": [79]
    }, {
        "initiator": "https://v6-qoecnf-albq-01.speedtest-web.sys.comcast.net:.*/.*",
        "categories": [79]
    }, {
        "initiator": "/static/media/.*",
        "categories": [79]
    }, {
        "initiator": "https://survey.pulseinsights.com.*",
        "categories": [79]
    }, {
        "initiator": "https://js.pulseinsights.com.*",
        "categories": [79]
    }, {
        "initiator": "http://survey.pulseinsights.com.*",
        "categories": [79]
    }, {
        "initiator": "https://digital-qa.xfinity.com/.*",
        "categories": [79]
    }, {
        "initiator": "https://digital-perf.xfinity.com/.*",
        "categories": [79]
    }, {
        "initiator": ".*default-src_xm_.*",
        "categories": [79]
    }, {
        "initiator": ".*src_xm_.*",
        "categories": [79]
    }, {
        "initiator": ".*b.videoamp.com.*",
        "categories": [79]
    }, {
        "initiator": ".*//secure.intranext.com.*",
        "categories": [79]
    }, {
        "initiator": ".*//iguardxm-1p.gslb2.comcast.com.*",
        "categories": [79]
    }, {
        "initiator": "https://secure.intranext.com/smartcti.api/intranext.smartcti.js ",
        "categories": [79]
    }, {
        "initiator": "https://iguardxm-1p.gslb2.comcast.com/intranext.smartcti.js",
        "categories": [79]
    }, {
        "initiator": ".*a.innovid.com.*",
        "categories": [78]
    }, {
        "initiator": ".*s-a.innovid.com.*",
        "categories": [78]
    }, {
        "initiator": ".*sc-static.net.*",
        "categories": [78]
    }, {
        "initiator": ".*tr-shadow.snapchat.com.*",
        "categories": [78]
    }, {
        "initiator": ".*www.facebook.com.*",
        "categories": [78]
    }, {
        "initiator": ".*s.yimg.com.*",
        "categories": [78]
    }, {
        "initiator": ".*login.dotomi.com.*",
        "categories": [78]
    }, {
        "initiator": ".*js.adsrvr.org.*",
        "categories": [78]
    }, {
        "initiator": ".*insight.adsrvr.org.*",
        "categories": [78]
    }, {
        "initiator": ".*static.ads-twitter.com.*",
        "categories": [78]
    }, {
        "initiator": ".*analytics.twitter.com.*",
        "categories": [78]
    }, {
        "initiator": ".*api.twitter.com.*",
        "categories": [78]
    }, {
        "initiator": ".*pagead2.googlesyndication.com.*",
        "categories": [78]
    }, {
        "initiator": ".*tagassistant.google.com.*",
        "categories": [78]
    }, {
        "initiator": ".*td.doubleclick.net.*",
        "categories": [78]
    }, {
        "initiator": ".*bat.bing.com.*",
        "categories": [78]
    }, {
        "initiator": ".*clarity.microsoft.com.* ",
        "categories": [78]
    }, {
        "initiator": ".*s.amazon-adsystem.com .*",
        "categories": [78]
    }, {
        "initiator": ".* pixel.everesttech.net.*",
        "categories": [78]
    }, {
        "initiator": ".*www.everestjs.net.*",
        "categories": [78]
    }, {
        "initiator": ".*cm.everesttech.net.*",
        "categories": [78]
    }, {
        "initiator": "https://idm-dev.xfinity.com/static/images/global/xfinity-logo-black.svg",
        "categories": [79]
    }, {
        "initiator": "https://idm-qa.xfinity.com/static/images/global/xfinity-logo-black.svg",
        "categories": [79]
    }, {
        "initiator": "https://idm-st.xfinity.com/static/images/global/xfinity-logo-black.svg ",
        "categories": [79]
    }, {
        "initiator": "https://idm.xfinity.com/static/images/global/xfinity-logo-black.svg",
        "categories": [79]
    }, {
        "initiator": ".*//fn9gvofb.micpn.com/.*",
        "categories": [79]
    }, {
        "initiator": "https://xmobile-d2c.xfinity.com/xfinityChat.html.*",
        "categories": [79]
    }, {
        "initiator": "https://xmobile-d2c.xfinity.com/mcx-web-account/.*",
        "categories": [79]
    }, {
        "initiator": ".*-es2015.*",
        "categories": [79]
    }, {
        "initiator": ".*/ComcastPrefCenter/Scripts/.* ",
        "categories": [79]
    }, {
        "initiator": ".*idm-st.xfinity.com/static/images/global/xfinity-logo-black.svg.*",
        "categories": [79]
    }, {
        "initiator": ",*idm-st.xfinity.com/static/images/global/.* ",
        "categories": [79]
    }, {
        "initiator": ".*idm-dev.xfinity.com/static/images/global/.*",
        "categories": [79]
    }, {
        "initiator": ".*idm-qa.xfinity.com/static/images/global/.*",
        "categories": [79]
    }, {
        "initiator": ".*idm.xfinity.com/static/images/global/.*",
        "categories": [79]
    }, {
        "initiator": "en_US.LandingPageList_efe3590bf8cef009af58.131.js",
        "categories": [80]
    }, {
        "initiator": "https://comcast-finder.bsg-staging.com.*",
        "categories": [79]
    }, {
        "initiator": ".*comcast-finder.bsg-staging.com.*",
        "categories": [79]
    }, {
        "initiator": "https://cnv.event.prod.bidr.io/log/cnv",
        "categories": [77]
    }, {
        "initiator": ".*//cnv.event.prod.bidr.io/log/cnv.*",
        "categories": [77]
    }, {
        "initiator": ".*login.xfinity.com/static/images/global/.*﻿",
        "categories": [79]
    }, {
        "initiator": ".*login-qa.xfinity.com/static/images/global/.*",
        "categories": [79]
    }, {
        "initiator": ".*login-dev.xfinity.com/static/images/global/.*  ",
        "categories": [79]
    }, {
        "initiator": ".*login-st.xfinity.com/static/images/global/.* ",
        "categories": [79]
    }, {
        "initiator": "https://comcastdotcom.experiencecloud.adobe.com/.*",
        "categories": [78]
    }, {
        "initiator": ".*/standalone-cpc.*",
        "categories": [79]
    }, {
        "initiator": "https://preferences.trustarc.com/webservices/.*",
        "categories": [79]
    }, {
        "initiator": "https://preferences-mgr.trustarc.com/.*",
        "categories": [79]
    }, {
        "initiator": "https://choices.trustarc.com/.*",
        "categories": [79]
    }, {
        "initiator": "https://preferences.trustarc.com/images/.*",
        "categories": [79]
    }, {
        "initiator": ".*/ComcastPrefCenter/Scripts/preferences.js",
        "categories": [79]
    }, {
        "initiator": ".*/ComcastPrefCenter/Scripts/jquery.validate.min.js",
        "categories": [79]
    }, {
        "initiator": ".*/ComcastPrefCenter/Scripts/sessionStorageManager.js",
        "categories": [79]
    }, {
        "initiator": ".*/ComcastPrefCenter/Scripts/bootstrap.js",
        "categories": [79]
    }, {
        "initiator": ".*/ComcastPrefCenter/Scripts/jquery-3.3.1.js",
        "categories": [79]
    }, {
        "initiator": ".*preferences.trustarc.com/images/.*",
        "categories": [79]
    }, {
        "initiator": ".*/checkout/.*.chunk.js",
        "categories": [79]
    }, {
        "initiator": "/security-console(-dev|-qa|-st|)\\.identity\\.xfinity\\.com\\/(vendors|library|app\\/index)\\..*\\.js",
        "categories": [79]
    }, {
        "initiator": ".*identity.xfinity.com/.*",
        "categories": [79]
    }, {
        "initiator": ".*.v.fwmrm.net/.*",
        "categories": [79]
    }, {
        "initiator": ".*login-dev.xfinity.com/static/images/global/.*",
        "categories": [79]
    }, {
        "initiator": ".*login-st.xfinity.com/static/images/global/.*",
        "categories": [79]
    }, {
        "initiator": "/static/resi/dist/webauthn-register*.js",
        "categories": [79]
    }, {
        "initiator": "https://external.quantummetric.com/visible/.*",
        "categories": [79]
    }, {
        "initiator": ".*idm.xfinity.com/myaccount/images/.*",
        "categories": [79]
    }, {
        "initiator": ".*idm-st.xfinity.com/myaccount/images/.*",
        "categories": [79]
    }, {
        "initiator": ".*idm-qa.xfinity.com/myaccount/images/.*",
        "categories": [79]
    }, {
        "initiator": ".*idm-dev.xfinity.com/myaccount/images/.*",
        "categories": [79]
    }, {
        "initiator": ".*quantummetric.com/.*",
        "categories": [77]
    }, {
        "initiator": ".*quantummetric.com.*",
        "categories": [77]
    }, {
        "initiator": "https://military.xfinity.com/JavaScripts/.*",
        "categories": [79]
    }, {
        "initiator": "https://military.xfinity.com/Scripts/.*",
        "categories": [79]
    }, {
        "initiator": "https://military.xfinity.com/ISI.Libraries.JQuery.Web/Scripts/.*",
        "categories": [79]
    }, {
        "initiator": "https://military.xfinity.com/ISI.Libraries.Web.Mvc/Areas/Utilities/JavaScripts/.*",
        "categories": [79]
    }, {
        "initiator": "https://military.xfinity.com/scripts-jquery/Scripts/.*",
        "categories": [79]
    }, {
        "initiator": "https://military.xfinity.com/ISI.DynamicPages/.*",
        "categories": [79]
    }, {
        "initiator": "https://military.xfinity.com/assets.adobedtm.com/.*",
        "categories": [77]
    }, {
        "initiator": "https://referafriend.xfinity.com/JavaScripts/.*",
        "categories": [79]
    }, {
        "initiator": "https://referafriend.xfinity.com/Scripts/.*",
        "categories": [79]
    }, {
        "initiator": "https://referafriend.xfinity.com/ISI.Libraries.JQuery.Web/Scripts/.*",
        "categories": [79]
    }, {
        "initiator": "https://referafriend.xfinity.com/ISI.Libraries.Web.Mvc/Areas/Utilities/JavaScripts/.*",
        "categories": [79]
    }, {
        "initiator": "https://referafriend.xfinity.com/scripts-jquery/Scripts/.*",
        "categories": [79]
    }, {
        "initiator": "https://referafriend.xfinity.com/ISI.DynamicPages/.*",
        "categories": [79]
    }, {
        "initiator": "https://referafriend.xfinity.com/Scripts/i18/.*",
        "categories": [79]
    }, {
        "initiator": "https://referafriend.xfinity.com/assets.adobedtm.com/.*",
        "categories": [77]
    }, {
        "initiator": ".*/ComcastPrefCenter/Scripts/manage-email-request.js.*",
        "categories": [79]
    }, {
        "initiator": ".*js/global/preserveInitialRequest.js.*",
        "categories": [79]
    }, {
        "initiator": ".*js/sstTracking.js.*",
        "categories": [79]
    }, {
        "initiator": ".*dist/digitalCart.js.*",
        "categories": [79]
    }, {
        "initiator": ".*adobemc.com.*",
        "categories": [79]
    }, {
        "initiator": ".*adobe.com.*",
        "categories": [79]
    }, {
        "initiator": "https://cc.avidtrak.com/.*",
        "categories": [79]
    }, {
        "initiator": "https://metrics.comcast.com/.*",
        "categories": [79]
    }, {
        "initiator": "https://code.jquery.com/.*",
        "categories": [79]
    }, {
        "initiator": "https://bat.bing.com/.*",
        "categories": [79]
    }, {
        "initiator": "https://api.bounceexchange.com/.*",
        "categories": [79]
    }, {
        "initiator": ".*/shop/mobile/.*",
        "categories": [79]
    }, {
        "initiator": "https://xchat.xfinity.com/.*",
        "categories": [79]
    }, {
        "initiator": ".*imrworldwide.com/.*",
        "categories": [79]
    }, {
        "initiator": "https://cdn-gl.imrworldwide.com/.*",
        "categories": [79]
    }, {
        "initiator": "https://secure-dcr.imrworldwide.com/.*",
        "categories": [79]
    }, {
        "initiator": "connect.facebook.net/.*/all.js.*",
        "categories": [79]
    }, {
        "initiator": ".*/myaccount/resources/nuance/xfinityChat.*",
        "categories": [79]
    }, {
        "initiator": ".*/static/resi/dist/webauthn.*",
        "categories": [79]
    }, {
        "initiator": ".*xfinitydigital.demdex.net/.*",
        "categories": [79]
    }, {
        "initiator": ".*polaris.xfinity.com/globalnav/polaris.*",
        "categories": [79]
    }, {
        "initiator": ".*assets-np.xfinity.com/.*",
        "categories": [79]
    }, {
        "initiator": ".*dev.xfinity.com/.*",
        "categories": [79]
    }, {
        "initiator": "https://es.xfinity.com/mobile/my-account/main.*",
        "categories": [79]
    }, {
        "initiator": "https://es.xfinity.com/mobile/my-account/runtime.*",
        "categories": [79]
    }, {
        "initiator": "https://es.xfinity.com/mobile/my-account/polyfills.*",
        "categories": [79]
    }, {
        "initiator": "https://es.xfinity.com/mobile/my-account/scripts.*",
        "categories": [79]
    }, {
        "initiator": "https://es.xfinity.com/mobile/my-account/vendor.*",
        "categories": [79]
    }, {
        "initiator": "https://es.xfinity.com/mobile/my-account/fetch-options.js",
        "categories": [79]
    }, {
        "initiator": "https://es.xfinity.com/mobile/my-account/common.*",
        "categories": [79]
    }, {
        "initiator": "https://es.xfinity.com/mobile/my-account/.*",
        "categories": [79]
    }, {
        "initiator": ".*omtrdc.net.*",
        "categories": [79]
    }, {
        "initiator": "/get-barcode",
        "categories": [79]
    }, {
        "initiator": "/get-barcode*",
        "categories": [79]
    }, {
        "initiator": ".*.virtualearth.net/REST/v1/Locations.*",
        "categories": [79]
    }, {
        "initiator": "/hub/.*",
        "categories": [79]
    }, {
        "initiator": "www.dev.xfinity.com/hub/main.*.js",
        "categories": [79]
    }, {
        "initiator": "www.dev.xfinity.com/hub/main.*.css",
        "categories": [79]
    }, {
        "initiator": "www.stg.xfinity.com/hub/main.*.js",
        "categories": [79]
    }, {
        "initiator": "www.stg.xfinity.com/hub/main.*.css",
        "categories": [79]
    }, {
        "initiator": "www.xfinity.com/hub/main.*.js",
        "categories": [79]
    }, {
        "initiator": "www.xfinity.com/hub/main.*.css",
        "categories": [79]
    }, {
        "initiator": ".*api.cloudsponge.com.*",
        "categories": [79]
    }, {
        "initiator": ".*cloudsponge.com/.*",
        "categories": [79]
    }, {
        "initiator": "https://www.smartmove.us/Widget/SmartMove/smartmovesearch.js",
        "categories": [79]
    }, {
        "initiator": "https://www.smartmove.us/.*",
        "categories": [80]
    }, {
        "initiator": "https://c.amazon-adsystem.com/aat/amzn.js",
        "categories": [77]
    }, {
        "initiator": "https://nym1-ib.adnxs.com/.*",
        "categories": [79]
    }, {
        "initiator": "https://cdn.walkme.com/.",
        "categories": [80]
    }, {
        "initiator": "https://cdn.walkme.com/.*",
        "categories": [80]
    }, {
        "initiator": "/dss-privacy-xpc/426.f7d96455f61fc0c13d16.js",
        "categories": [80]
    }, {
        "initiator": ".*/dss-privacy-xpc/426.f7d96455f61fc0c13d16.js",
        "categories": [80]
    }, {
        "initiator": "https://www.xfinity.com/dss-privacy-xpc/426.f7d96455f61fc0c13d16.js",
        "categories": [80]
    }, {
        "initiator": "/dss-privacy-xpc/884.f06004d5cc4b6e971423.js",
        "categories": [80]
    }, {
        "initiator": ".*/dss-privacy-xpc/884.f06004d5cc4b6e971423.js",
        "categories": [80]
    }, {
        "initiator": "https://www.xfinity.com/dss-privacy-xpc/884.f06004d5cc4b6e971423.js",
        "categories": [80]
    }, {
        "initiator": "https://nebula-cdn.kampyle.com/us/wu/264073/onsite/embed.js",
        "categories": [77]
    }, {
        "initiator": ".*kampyle.com*",
        "categories": [77]
    }, {
        "initiator": ".*medallia.com* ",
        "categories": [77]
    }, {
        "initiator": "/dss-help-and-support/842.cfd8d4eb92344922158c.js",
        "categories": [80]
    }, {
        "initiator": "/dss-help-and-support/787.c1f2d170d05e05d76edd.js",
        "categories": [80]
    }, {
        "initiator": "/dss-help-and-support/797.4064f68c96689056df35.js",
        "categories": [80]
    }, {
        "initiator": "/dss-help-and-support/639.266f0b6af5b3fe5315cc.js",
        "categories": [80]
    }, {
        "initiator": "/dss-help-and-support/312.93f5892c1302105cff7f.js",
        "categories": [80]
    }, {
        "initiator": "/dss-help-and-support/80.76d237c09e39dbf7c3d7.js",
        "categories": [80]
    }, {
        "initiator": "/dss-help-and-support/.*",
        "categories": [80]
    }, {
        "initiator": "https://common-payment.xfinity.com/*",
        "categories": [79]
    }, {
        "initiator": ".*/ComcastPrefCenter/Bundles/.*",
        "categories": [79]
    }, {
        "initiator": ".*/ComcastPrefCenter/frontend/.*",
        "categories": [79]
    }, {
        "initiator": ".*/ComcastPrefCenter/frontend/dist/js/manage-preferences.min.js",
        "categories": [79]
    }, {
        "initiator": "https://pc2.mypreferences.com/ComcastPrefCenter/.*",
        "categories": [79]
    }, {
        "initiator": "https://es.xfinity.com/digital/.*",
        "categories": [79]
    }, {
        "initiator": "https://www.adsensecustomsearchads.com/.*",
        "categories": [79]
    }, {
        "initiator": "https://es.xfinity.com/sdstatic/dcustomersaas/comcast-us/en-us/webclient.js",
        "categories": [79]
    }],
    "auto_block_unpublished_cookies": true,
    "compliance_type": "opt-in",
    "compliance_types": {
        "Default": "opt-in",
        "United States": "opt-out"
    },
    "securiti_cookie_domain_enabled": true,
    "securiti_cookie_domain": ".xfinity.com",
    "is_bot_detection_enabled": false,
    "is_encode_cookie_value_enabled": false,
    "app_url": "https://app.securiti.ai",
    "auth_token": "a2c1f5b6-8162-4b59-9b2a-bdcb11aab1aa",
    "hide_cookie_categories_tab": false
});
var commonUtilites = function(n) {
    var i;
    if (n && Object.keys(n).length) return i = {
        url: "".concat(n.info.url.includes("/privaci/v1/") ? n.info.url : "".concat(n.info.url, "/privaci/v1/")) || "",
        auth_token: "".concat(n.fileName.includes("cookie-consent-sdk") ? n.info["x-auth-token"] : n.info.authToken) || "",
        file: n.fileName,
        unique_key: n.key
    }, {
        handleSdkErrorGlobally: function(t) {
            var e, r, o;
            i.file && i.url && i.auth_token && !n.localTesting && "mobile" !== a().deviceType && a().isValidBrowserToLogErrs && (e = void 0 === (e = t.type) ? "" : e, r = !1, o = {}, t && t.reason && t.reason.stack && (r = JSON.stringify(t.reason.stack).includes(i.file)), t && t.error && t.error.stack && (o = t.error.stack), o = t && t.filename && t.filename.includes(i.file) || JSON.stringify(o).includes(i.file), "unhandledrejection" === e ? r : o) && ! function() {
                var t = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : {};
                if (t && Object.keys(t).length) {
                    var e = JSON.parse(localStorage.getItem("securitiSdkErrorMessages")) || {},
                        r = {},
                        o = new XMLHttpRequest;
                    if (o.open("POST", "".concat(i.url, "consent/sdk_error")), o.setRequestHeader("Content-type", "application/json"), o.setRequestHeader("X-Auth-Token", i.auth_token), e && Object.keys(e).length && t.message && e["".concat(i.unique_key, "-").concat(t.message)])
                        if (Date.now() - e["".concat(i.unique_key, "-").concat(t.message)] < 1e4) return;
                    _defineProperty(n = {}, "error_occurred_in", i.file), _defineProperty(n, "website", window.location.host), _defineProperty(n, "error", "Error in ".concat(window.navigator.userAgent, " ~ ").concat(JSON.stringify(t, Object.getOwnPropertyNames(t))));
                    var n;
                    t && t.message && (r = _objectSpread(_objectSpread({}, e), {}, _defineProperty({}, "".concat(i.unique_key, "-").concat(t.message), Date.now()))), localStorage.setItem("securitiSdkErrorMessages", JSON.stringify(r)), o.send(JSON.stringify(n))
                }
            }("unhandledrejection" === e ? t.reason : t.error)
        }
    };

    function a() {
        var t = window.navigator.userAgent,
            e = _slicedToArray(t.match(/(chrome|firefox|safari|edge)/i) || [], 3),
            r = (e[0], e[1]),
            r = void 0 === r ? "" : r,
            e = (e[2], t.match(/(iphone|ipad|android|windows phone)/i) ? "mobile" : "desktop"),
            r = r && r.toLowerCase() || "";
        return {
            isValidBrowserToLogErrs: ["chrome", "firefox", "safari", "edge"].includes(r) || !1,
            deviceType: e
        }
    }
};