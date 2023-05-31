(window.webpackJsonp = window.webpackJsonp || []).push([[11], {
  ZEpu: function(l, n, u) {
      "use strict";
      u.r(n);
      var e = u("CcnG")
        , t = function() {
          return function() {}
      }()
        , i = u("pMnS")
        , a = u("gMr2")
        , c = u("QpxQ")
        , d = u("Ip0R")
        , s = u("cMnJ")
        , o = u("26NW")
        , r = u("gIcY")
        , p = u("pKUh")
        , g = u("YAQW")
        , f = u("Tr6M")
        , m = u("YWaA")
        , h = u("P6uZ")
        , v = u("wd/R")
        , x = u("JPqG")
        , I = function() {
          function l(l, n, u, e, t) {
              this.commonService = l,
              this.modalService = n,
              this.DefaultLayoutComponent = u,
              this.router = e,
              this.toastr = t,
              this.selectedEventId = "",
              this.selectedIndex = 0,
              this.androidPhone = !1,
              this.iphone = !1,
              this.mySlideImages = [],
              this.mySlideOptions = {
                  items: 1,
                  dots: !0,
                  nav: !1,
                  autoplay: !0,
                  autoplayTimeout: 5e3,
                  loop: !0
              },
              this.userRole = JSON.parse(localStorage.getItem("currentUserRole"))
          }
          return l.prototype.ngOnInit = function() {
              this.getBannerListURL(),
              this.getSportListNavigation(),
              this.getMarketListData(f.d.CRICKET),
              this.exchangeSetting = f.c.prosports24;
              var l = window.location.origin;
              l.includes("prosports24") && (this.exchangeSetting = f.c.prosports24),
              l.includes("diamondexch9") && (this.exchangeSetting = f.c.diamondexch9),
              l.includes("kexchange") && (this.exchangeSetting = f.c.kexchange),
              l.includes("hotsports") && (this.exchangeSetting = f.c.hotsports),
              l.includes("saphireexch") && (this.exchangeSetting = f.c.saphireexch),
              l.includes("kkrbook2") && (this.exchangeSetting = f.c.kkrbook2),
              l.includes("sports303") && (this.exchangeSetting = f.c.sports303),
              l.includes("dubai1010") && (this.exchangeSetting = f.c.dubai1010),
              l.includes("skyexchindia") && (this.exchangeSetting = f.c.skyexchindia),
              l.includes("reddykings") && (this.exchangeSetting = f.c.reddykings),
              l.includes("exch666") && (this.exchangeSetting = f.c.exch666),
              l.includes("fgexch") && (this.exchangeSetting = f.c.fgexch),
              l.includes("winzoexch") && (this.exchangeSetting = f.c.winzoexch),
              l.includes("fairexch9") && (this.exchangeSetting = f.c.fairexch9),
              l.includes("skyexch666") && (this.exchangeSetting = f.c.skyexch666),
              l.includes("goganeshbook") && (this.exchangeSetting = f.c.goganeshbook),
              l.includes("armaniexch") && (this.exchangeSetting = f.c.armaniexch),
              l.includes("abook9") && (this.exchangeSetting = f.c.abook9),
              l.includes("bullsexch") && (this.exchangeSetting = f.c.bullsexch),
              l.includes("dreem666") && (this.exchangeSetting = f.c.dreem666),
              l.includes("jee247") && (this.exchangeSetting = f.c.jee247),
              l.includes("bigbull247") && (this.exchangeSetting = f.c.bigbull247),
              l.includes("sportsexch247") && (this.exchangeSetting = f.c.sportsexch247),
              l.includes("eagle25") && (this.exchangeSetting = f.c.eagle25),
              l.includes("queenexch") && (this.exchangeSetting = f.c.queenexch),
              l.includes("deltaexch27") && (this.exchangeSetting = f.c.deltaexch27),
              l.includes("abexch") && (this.exchangeSetting = f.c.abexch),
              l.includes("iceexch247") && (this.exchangeSetting = f.c.iceexch247),
              l.includes("goldexch22") && (this.exchangeSetting = f.c.goldexch22),
              l.includes("skygoldexch") && (this.exchangeSetting = f.c.skygoldexch),
              l.includes("cbtf247") && (this.exchangeSetting = f.c.cbtf247),
              l.includes("trumpexch") && (this.exchangeSetting = f.c.trumpexch),
              l.includes("truebet9") && (this.exchangeSetting = f.c.truebet9),
              l.includes("starbet9") && (this.exchangeSetting = f.c.starbet9),
              l.includes("sky7771") && (this.exchangeSetting = f.c.sky7771),
              l.includes("fairdeal777") && (this.exchangeSetting = f.c.fairdeal777),
              l.includes("powerplay9") && (this.exchangeSetting = f.c.powerplay9),
              l.includes("hashexch") && (this.exchangeSetting = f.c.hashexch),
              l.includes("spexch247") && (this.exchangeSetting = f.c.spexch247),
              l.includes("jdexch") && (this.exchangeSetting = f.c.jdexch),
              l.includes("rioexch") && (this.exchangeSetting = f.c.rioexch),
              l.includes("bsfexch247") && (this.exchangeSetting = f.c.bsfexch247),
              l.includes("sky247") && (this.exchangeSetting = f.c.sky247),
              l.includes("dream444") && (this.exchangeSetting = f.c.dream444),
              l.includes("rosebet1") && (this.exchangeSetting = f.c.rosebet1),
              l.includes("allow444") && (this.exchangeSetting = f.c.allow444),
              l.includes("lpexch") && (this.exchangeSetting = f.c.lpexch),
              l.includes("aura024") && (this.exchangeSetting = f.c.aura024),
              l.includes("tradexch247") && (this.exchangeSetting = f.c.tradexch247),
              l.includes("runex365") && (this.exchangeSetting = f.c.runex365),
              l.includes("aura333") && (this.exchangeSetting = f.c.aura333),
              l.includes("allow777") && (this.exchangeSetting = f.c.allow777),
              l.includes("run888") && (this.exchangeSetting = f.c.run888),
              l.includes("pushpa777") && (this.exchangeSetting = f.c.pushpa777),
              l.includes("daddybet7") && (this.exchangeSetting = f.c.daddybet7),
              l.includes("victor007") && (this.exchangeSetting = f.c.victor007),
              l.includes("45sports") && (this.exchangeSetting = f.c.sports45),
              l.includes("100exch") && (this.exchangeSetting = f.c.exch100),
              l.includes("999exch") && (this.exchangeSetting = f.c.exch999),
              l.includes("97sports") && (this.exchangeSetting = f.c.sports97),
              l.includes("22betfair") && (this.exchangeSetting = f.c.betfair22),
              l.includes("sports505") && (this.exchangeSetting = f.c.sports505),
              l.includes("biswasexch") && (this.exchangeSetting = f.c.biswasexch),
              l.includes("sports555") && (this.exchangeSetting = f.c.sports555),
              this.userRole && this.getNews(),
              $(document).ready(function() {
                  $(".mobile-men .menu-item").click(function() {
                      $(this).addClass("active"),
                      $(".mobile-men .menu-item").not(this).removeClass("active")
                  }),
                  $(".overlay-event").click(function(l) {
                      $(".mobile-eventsearch").slideToggle(),
                      $(".overlay-event").slideToggle()
                  })
              });
              var n = navigator.userAgent || navigator.vendor;
              /android/i.test(n) && (this.androidPhone = !0),
              /iPad|iPhone|iPod/.test(n) && (this.iphone = !0)
          }
          ,
          l.prototype.getBannerListURL = function() {
              var l = this;
              $(".promo-banner-loading").css("display", "block"),
              this.commonService.getAllRecordsByPost(f.b.bannerListURL, {}).pipe(Object(h.a)()).subscribe(function(n) {
                  1 == n.meta.status && n.data && (l.mySlideImages = n.data.slider,
                  setTimeout(function() {
                      $(".promo-banner-loading").css("display", "none")
                  }))
              }, function(l) {
                  console.error("ERROR")
              })
          }
          ,
          l.prototype.openSearchEvent = function() {
              var l = this;
              $(".mobile-eventsearch").slideToggle(),
              $(".overlay-event").slideToggle(),
              this.commonService.getAllRecordsByPost(f.b.frontEventURL, {}).pipe(Object(h.a)()).subscribe(function(n) {
                  n.data && (l.eventsList = n.data)
              }, function(n) {
                  n.error ? l.toastr.errorToastr(n.error.meta.message) : console.log(n)
              })
          }
          ,
          l.prototype.eventSelected = function() {
              this.selectedEventId && this.router.navigateByUrl("/fullmarket/" + this.selectedEventId)
          }
          ,
          l.prototype.isMultiMarket = function(l) {
              return this.commonService.isMultiMarket(l)
          }
          ,
          l.prototype.addToMultimarket = function(l) {
              this.userRole ? this.commonService.addToMultimarket(l) : this.DefaultLayoutComponent.openLoginPopup("login")
          }
          ,
          l.prototype.gotomarketbyid = function(l, n) {
              this.router.navigateByUrl("/fullmarket/" + l + "/" + n)
          }
          ,
          l.prototype.getSportListNavigation = function() {
              var l = this;
              this.commonService.getAllRecordsByPost(f.b.getAllSportURL, {}).pipe(Object(h.a)()).subscribe(function(n) {
                  l.sportListNavigation = n.data
              }, function(l) {
                  console.log(l)
              })
          }
          ,
          l.prototype.openModalRules = function(l) {
              this.modalRef = this.modalService.show(l, {
                  class: "modal-lg"
              })
          }
          ,
          l.prototype.decline = function() {
              this.modalRef.hide()
          }
          ,
          l.prototype.getMarketListData = function(l) {
              var n = this;
              if ((6 == l || 5 == l) && !this.userRole)
                  return this.DefaultLayoutComponent.openLoginPopup("login"),
                  void (this.marketList = []);
              this.commonService.getAllRecordsByPost(f.b.getAllEventListURL, {}).pipe(Object(h.a)()).subscribe(function(l) {
                  l.data && (n.allEventData = l.data,
                  n.marketList = l.data[f.d.CRICKET],
                  n.cricketData = l.data[f.d.CRICKET],
                  n.soccerData = l.data[f.d.SOCCER],
                  n.tennisData = l.data[f.d.TENNIS])
              }, function(l) {
                  n.marketList = [],
                  console.log(l)
              })
          }
          ,
          l.prototype.getDataSportUnique = function(l) {}
          ,
          l.prototype.getMarketListDataMenu = function(l, n) {
              66102 != l && 66104 != l && 66101 != l || this.userRole ? 66101 != l ? 66102 != l ? 66104 != l ? ($(".ver-menu a").not(this).removeClass("active"),
              this.selectedIndex = n,
              this.marketList = this.allEventData[l] ? this.allEventData[l] : []) : this.toastr.errorToastr("Coming Soon!", "") : this.router.navigateByUrl("/livecasino") : this.router.navigateByUrl("/virtualsports") : this.DefaultLayoutComponent.openLoginPopup("login")
          }
          ,
          l.prototype.openGeneralRules = function(l, n) {
              var u = this;
              this.commonService.getAllRecordsByPost(f.b.getRulesOfMarketURL, {
                  sportId: n
              }).pipe(Object(h.a)()).subscribe(function(l) {
                  1 == l.meta.status && (u.generalRules = l.data ? l.data.rules : [])
              }, function(l) {
                  l.error ? u.toastr.errorToastr(l.error.meta.message) : console.error(l)
              }),
              this.modalRef = this.modalService.show(l, {
                  class: "modal-md"
              })
          }
          ,
          l.prototype.getNews = function() {
              var l = this;
              this.commonService.getAllRecordsByPost(f.b.getNewsURL, {}).pipe(Object(h.a)()).subscribe(function(n) {
                  1 == n.meta.status && (l.news = n.data ? n.data : null)
              }, function(l) {
                  console.log(l)
              })
          }
          ,
          l.prototype.convertUTCDate = function(l) {
              var n = new Date(l);
              return v(n).format("DD-MM-YYYY HH:mm")
          }
          ,
          l.prototype.iosapp = function() {
              this.toastr.infoToastr("Coming Soon!")
          }
          ,
          l.prototype.ngOnDestroy = function() {
              window.clearInterval(this.intrvlComment)
          }
          ,
          l
      }()
        , R = u("DQlY")
        , b = u("ZYCi")
        , k = u("3EpR")
        , y = e["\u0275crt"]({
          encapsulation: 2,
          styles: [],
          data: {}
      });
      function C(l) {
          return e["\u0275vid"](0, [(l()(),
          e["\u0275eld"](0, 0, null, null, 2, "ng-option", [], null, null, null, a.d, a.b)), e["\u0275did"](1, 573440, [[12, 4]], 0, c.i, [e.ElementRef], {
              value: [0, "value"]
          }, null), (l()(),
          e["\u0275ted"](2, 0, [" ", ""]))], function(l, n) {
              l(n, 1, 0, e["\u0275inlineInterpolate"](1, "", n.parent.context.$implicit.exEventId + "/" + n.parent.context.$implicit.sportId, ""))
          }, function(l, n) {
              l(n, 2, 0, n.parent.context.$implicit.eventName)
          })
      }
      function S(l) {
          return e["\u0275vid"](0, [(l()(),
          e["\u0275eld"](0, 0, null, null, 2, null, null, null, null, null, null, null)), (l()(),
          e["\u0275and"](16777216, null, null, 1, null, C)), e["\u0275did"](2, 16384, null, 0, d.NgIf, [e.ViewContainerRef, e.TemplateRef], {
              ngIf: [0, "ngIf"]
          }, null), (l()(),
          e["\u0275and"](0, null, null, 0))], function(l, n) {
              l(n, 2, 0, 5 != n.context.$implicit.sportId && 6 != n.context.$implicit.sportId)
          }, null)
      }
      function w(l) {
          return e["\u0275vid"](0, [(l()(),
          e["\u0275eld"](0, 0, null, null, 6, "div", [["class", "col-md-12 marquee-text"]], null, null, null, null, null)), (l()(),
          e["\u0275eld"](1, 0, null, null, 5, "div", [["class", "marquee-box"]], null, null, null, null, null)), (l()(),
          e["\u0275eld"](2, 0, null, null, 2, "h4", [], null, null, null, null, null)), (l()(),
          e["\u0275eld"](3, 0, null, null, 0, "i", [["class", "fa fa-microphone"]], null, null, null, null, null)), (l()(),
          e["\u0275ted"](-1, null, [" News "])), (l()(),
          e["\u0275eld"](5, 0, null, null, 1, "marquee", [["scrollamount", "5"]], null, null, null, null, null)), (l()(),
          e["\u0275ted"](6, null, ["", ""]))], null, function(l, n) {
              l(n, 6, 0, n.component.news)
          })
      }
      function T(l) {
          return e["\u0275vid"](0, [(l()(),
          e["\u0275eld"](0, 0, null, null, 2, "div", [["class", "item"]], null, null, null, null, null)), (l()(),
          e["\u0275eld"](1, 0, null, null, 1, "div", [], null, null, null, null, null)), (l()(),
          e["\u0275eld"](2, 0, null, null, 0, "img", [["class", "img img-responsive"]], [[8, "src", 4]], null, null, null, null))], null, function(l, n) {
              l(n, 2, 0, e["\u0275inlineInterpolate"](1, "", n.context.$implicit.url, ""))
          })
      }
      function D(l) {
          return e["\u0275vid"](0, [(l()(),
          e["\u0275eld"](0, 0, null, null, 5, null, null, null, null, null, null, null)), (l()(),
          e["\u0275eld"](1, 0, null, null, 4, "owl-carousel", [], null, null, null, s.b, s.a)), e["\u0275did"](2, 311296, null, 0, o.OwlCarousel, [e.IterableDiffers], {
              carouselClasses: [0, "carouselClasses"],
              options: [1, "options"]
          }, null), e["\u0275pad"](3, 2), (l()(),
          e["\u0275and"](16777216, null, 0, 1, null, T)), e["\u0275did"](5, 278528, null, 0, d.NgForOf, [e.ViewContainerRef, e.TemplateRef, e.IterableDiffers], {
              ngForOf: [0, "ngForOf"]
          }, null)], function(l, n) {
              var u = n.component
                , e = l(n, 3, 0, "owl-theme", "sliding");
              l(n, 2, 0, e, u.mySlideOptions),
              l(n, 5, 0, u.mySlideImages)
          }, null)
      }
      function N(l) {
          return e["\u0275vid"](0, [(l()(),
          e["\u0275eld"](0, 0, null, null, 6, "li", [["class", "menu-item"]], null, null, null, null, null)), e["\u0275did"](1, 278528, null, 0, d.NgClass, [e.IterableDiffers, e.KeyValueDiffers, e.ElementRef, e.Renderer2], {
              klass: [0, "klass"],
              ngClass: [1, "ngClass"]
          }, null), e["\u0275pod"](2, {
              active: 0,
              newlaunch: 1
          }), (l()(),
          e["\u0275eld"](3, 0, null, null, 3, "div", [], null, [[null, "click"]], function(l, n, u) {
              var e = !0;
              return "click" === n && (e = !1 !== l.component.getMarketListDataMenu(l.context.$implicit.sportId, l.context.index) && e),
              e
          }, null, null)), (l()(),
          e["\u0275eld"](4, 0, null, null, 0, "img", [["src", "../../../assets/img/transparent.gif"]], [[8, "className", 0]], null, null, null, null)), (l()(),
          e["\u0275eld"](5, 0, null, null, 1, "span", [["class", "menutext"]], null, null, null, null, null)), (l()(),
          e["\u0275ted"](6, null, ["", ""]))], function(l, n) {
              var u = l(n, 2, 0, n.component.selectedIndex == n.context.index, n.context.$implicit.highlight);
              l(n, 1, 0, "menu-item", u)
          }, function(l, n) {
              l(n, 4, 0, e["\u0275inlineInterpolate"](1, "icon-", n.context.$implicit.sportName, "")),
              l(n, 6, 0, n.context.$implicit.sportName)
          })
      }
      function V(l) {
          return e["\u0275vid"](0, [(l()(),
          e["\u0275eld"](0, 0, null, null, 5, "div", [["class", "mobile-men"]], null, null, null, null, null)), (l()(),
          e["\u0275eld"](1, 0, null, null, 1, "a", [["class", "a-search"], ["href", "javascript:;"]], null, [[null, "click"]], function(l, n, u) {
              var e = !0;
              return "click" === n && (e = !1 !== l.component.openSearchEvent() && e),
              e
          }, null, null)), (l()(),
          e["\u0275ted"](-1, null, ["Search"])), (l()(),
          e["\u0275eld"](3, 0, null, null, 2, "ul", [["class", "menu-list"]], null, null, null, null, null)), (l()(),
          e["\u0275and"](16777216, null, null, 1, null, N)), e["\u0275did"](5, 278528, null, 0, d.NgForOf, [e.ViewContainerRef, e.TemplateRef, e.IterableDiffers], {
              ngForOf: [0, "ngForOf"]
          }, null)], function(l, n) {
              l(n, 5, 0, n.component.sportListNavigation)
          }, null)
      }
      function E(l) {
          return e["\u0275vid"](0, [(l()(),
          e["\u0275eld"](0, 0, null, null, 1, "span", [["class", "in_play"]], null, null, null, null, null)), (l()(),
          e["\u0275ted"](-1, null, ["In-Play"]))], null, null)
      }
      function M(l) {
          return e["\u0275vid"](0, [(l()(),
          e["\u0275eld"](0, 0, null, null, 1, "span", [["class", "in_play"]], null, null, null, null, null)), (l()(),
          e["\u0275eld"](1, 0, null, null, 0, "i", [["class", "fa fa-television"]], null, null, null, null, null))], null, null)
      }
      function P(l) {
          return e["\u0275vid"](0, [(l()(),
          e["\u0275eld"](0, 0, null, null, 1, "p", [["class", "match-time"]], null, null, null, null, null)), (l()(),
          e["\u0275ted"](1, null, ["", ""]))], null, function(l, n) {
              l(n, 1, 0, n.component.convertUTCDate(n.parent.context.$implicit.eventTime))
          })
      }
      function L(l) {
          return e["\u0275vid"](0, [(l()(),
          e["\u0275eld"](0, 0, null, null, 1, "span", [["class", "game-fancy mr-1"]], null, null, null, null, null)), (l()(),
          e["\u0275ted"](-1, null, ["F"]))], null, null)
      }
      function O(l) {
          return e["\u0275vid"](0, [(l()(),
          e["\u0275eld"](0, 0, null, null, 1, "span", [["class", "game-sportbook"]], null, null, null, null, null)), (l()(),
          e["\u0275ted"](-1, null, ["S"]))], null, null)
      }
      function F(l) {
          return e["\u0275vid"](0, [(l()(),
          e["\u0275eld"](0, 0, null, null, 1, "span", [["class", "game-icon"]], null, null, null, null, null)), (l()(),
          e["\u0275eld"](1, 0, null, null, 0, "img", [["src", "../../../assets/img/game-icon.svg"]], null, null, null, null, null))], null, null)
      }
      function U(l) {
          return e["\u0275vid"](0, [(l()(),
          e["\u0275eld"](0, 0, null, null, 1, "span", [["class", "game-icon"]], null, null, null, null, null)), (l()(),
          e["\u0275eld"](1, 0, null, null, 0, "img", [["src", "../../../assets/img/ic_vir.png"]], null, null, null, null, null))], null, null)
      }
      function q(l) {
          return e["\u0275vid"](0, [(l()(),
          e["\u0275eld"](0, 0, null, null, 4, "td", [["class", "count"]], null, null, null, null, null)), (l()(),
          e["\u0275eld"](1, 0, null, null, 1, "span", [["class", "back"]], null, null, null, null, null)), (l()(),
          e["\u0275ted"](2, null, ["", ""])), (l()(),
          e["\u0275eld"](3, 0, null, null, 1, "span", [["class", "lay"]], null, null, null, null, null)), (l()(),
          e["\u0275ted"](4, null, ["", ""]))], null, function(l, n) {
              l(n, 2, 0, n.parent.context.$implicit.oddsData.runners[0].price.back[0] ? n.parent.context.$implicit.oddsData.runners[0].price.back[0].price : "0.0"),
              l(n, 4, 0, n.parent.context.$implicit.oddsData.runners[0].price.lay[0] ? n.parent.context.$implicit.oddsData.runners[0].price.lay[0].price : "0.0")
          })
      }
      function A(l) {
          return e["\u0275vid"](0, [(l()(),
          e["\u0275eld"](0, 0, null, null, 4, "td", [["class", "count"]], null, null, null, null, null)), (l()(),
          e["\u0275eld"](1, 0, null, null, 1, "span", [["class", "back"]], null, null, null, null, null)), (l()(),
          e["\u0275ted"](-1, null, ["0.0"])), (l()(),
          e["\u0275eld"](3, 0, null, null, 1, "span", [["class", "lay"]], null, null, null, null, null)), (l()(),
          e["\u0275ted"](-1, null, ["0.0"]))], null, null)
      }
      function G(l) {
          return e["\u0275vid"](0, [(l()(),
          e["\u0275eld"](0, 0, null, null, 4, "td", [["class", "count"]], null, null, null, null, null)), (l()(),
          e["\u0275eld"](1, 0, null, null, 1, "span", [["class", "back"]], null, null, null, null, null)), (l()(),
          e["\u0275ted"](2, null, ["", ""])), (l()(),
          e["\u0275eld"](3, 0, null, null, 1, "span", [["class", "lay"]], null, null, null, null, null)), (l()(),
          e["\u0275ted"](4, null, ["", ""]))], null, function(l, n) {
              l(n, 2, 0, n.parent.context.$implicit.oddsData.runners[2].price.back[0] ? n.parent.context.$implicit.oddsData.runners[2].price.back[0].price : "0.0"),
              l(n, 4, 0, n.parent.context.$implicit.oddsData.runners[2].price.lay[0] ? n.parent.context.$implicit.oddsData.runners[2].price.lay[0].price : "0.0")
          })
      }
      function _(l) {
          return e["\u0275vid"](0, [(l()(),
          e["\u0275eld"](0, 0, null, null, 4, "td", [["class", "count"]], null, null, null, null, null)), (l()(),
          e["\u0275eld"](1, 0, null, null, 1, "span", [["class", "back"]], null, null, null, null, null)), (l()(),
          e["\u0275ted"](-1, null, ["0.0"])), (l()(),
          e["\u0275eld"](3, 0, null, null, 1, "span", [["class", "lay"]], null, null, null, null, null)), (l()(),
          e["\u0275ted"](-1, null, ["0.0"]))], null, null)
      }
      function K(l) {
          return e["\u0275vid"](0, [(l()(),
          e["\u0275eld"](0, 0, null, null, 4, "td", [["class", "count"]], null, null, null, null, null)), (l()(),
          e["\u0275eld"](1, 0, null, null, 1, "span", [["class", "back"]], null, null, null, null, null)), (l()(),
          e["\u0275ted"](2, null, ["", ""])), (l()(),
          e["\u0275eld"](3, 0, null, null, 1, "span", [["class", "lay"]], null, null, null, null, null)), (l()(),
          e["\u0275ted"](4, null, ["", ""]))], null, function(l, n) {
              l(n, 2, 0, n.parent.context.$implicit.oddsData.runners[1].price.back[0] ? n.parent.context.$implicit.oddsData.runners[1].price.back[0].price : "0.0"),
              l(n, 4, 0, n.parent.context.$implicit.oddsData.runners[1].price.lay[0] ? n.parent.context.$implicit.oddsData.runners[1].price.lay[0].price : "0.0")
          })
      }
      function j(l) {
          return e["\u0275vid"](0, [(l()(),
          e["\u0275eld"](0, 0, null, null, 4, "td", [["class", "count"]], null, null, null, null, null)), (l()(),
          e["\u0275eld"](1, 0, null, null, 1, "span", [["class", "back"]], null, null, null, null, null)), (l()(),
          e["\u0275ted"](-1, null, ["0.0"])), (l()(),
          e["\u0275eld"](3, 0, null, null, 1, "span", [["class", "lay"]], null, null, null, null, null)), (l()(),
          e["\u0275ted"](-1, null, ["0.0"]))], null, null)
      }
      function Y(l) {
          return e["\u0275vid"](0, [(l()(),
          e["\u0275eld"](0, 0, null, null, 36, "tr", [], null, null, null, null, null)), (l()(),
          e["\u0275eld"](1, 0, null, null, 9, "td", [], null, null, null, null, null)), (l()(),
          e["\u0275eld"](2, 0, null, null, 2, "a", [["class", "match-name"]], null, [[null, "click"]], function(l, n, u) {
              var e = !0;
              return "click" === n && (e = !1 !== l.component.gotomarketbyid(l.context.$implicit.exEventId, l.context.$implicit.sportId) && e),
              e
          }, null, null)), (l()(),
          e["\u0275eld"](3, 0, null, null, 1, "span", [], null, null, null, null, null)), (l()(),
          e["\u0275ted"](4, null, ["", ""])), (l()(),
          e["\u0275and"](16777216, null, null, 1, null, E)), e["\u0275did"](6, 16384, null, 0, d.NgIf, [e.ViewContainerRef, e.TemplateRef], {
              ngIf: [0, "ngIf"]
          }, null), (l()(),
          e["\u0275and"](16777216, null, null, 1, null, M)), e["\u0275did"](8, 16384, null, 0, d.NgIf, [e.ViewContainerRef, e.TemplateRef], {
              ngIf: [0, "ngIf"]
          }, null), (l()(),
          e["\u0275and"](16777216, null, null, 1, null, P)), e["\u0275did"](10, 16384, null, 0, d.NgIf, [e.ViewContainerRef, e.TemplateRef], {
              ngIf: [0, "ngIf"]
          }, null), (l()(),
          e["\u0275eld"](11, 0, null, null, 8, "td", [], null, null, null, null, null)), (l()(),
          e["\u0275and"](16777216, null, null, 1, null, L)), e["\u0275did"](13, 16384, null, 0, d.NgIf, [e.ViewContainerRef, e.TemplateRef], {
              ngIf: [0, "ngIf"]
          }, null), (l()(),
          e["\u0275and"](16777216, null, null, 1, null, O)), e["\u0275did"](15, 16384, null, 0, d.NgIf, [e.ViewContainerRef, e.TemplateRef], {
              ngIf: [0, "ngIf"]
          }, null), (l()(),
          e["\u0275and"](16777216, null, null, 1, null, F)), e["\u0275did"](17, 16384, null, 0, d.NgIf, [e.ViewContainerRef, e.TemplateRef], {
              ngIf: [0, "ngIf"]
          }, null), (l()(),
          e["\u0275and"](16777216, null, null, 1, null, U)), e["\u0275did"](19, 16384, null, 0, d.NgIf, [e.ViewContainerRef, e.TemplateRef], {
              ngIf: [0, "ngIf"]
          }, null), (l()(),
          e["\u0275and"](16777216, null, null, 1, null, q)), e["\u0275did"](21, 16384, null, 0, d.NgIf, [e.ViewContainerRef, e.TemplateRef], {
              ngIf: [0, "ngIf"]
          }, null), (l()(),
          e["\u0275and"](16777216, null, null, 1, null, A)), e["\u0275did"](23, 16384, null, 0, d.NgIf, [e.ViewContainerRef, e.TemplateRef], {
              ngIf: [0, "ngIf"]
          }, null), (l()(),
          e["\u0275and"](16777216, null, null, 1, null, G)), e["\u0275did"](25, 16384, null, 0, d.NgIf, [e.ViewContainerRef, e.TemplateRef], {
              ngIf: [0, "ngIf"]
          }, null), (l()(),
          e["\u0275and"](16777216, null, null, 1, null, _)), e["\u0275did"](27, 16384, null, 0, d.NgIf, [e.ViewContainerRef, e.TemplateRef], {
              ngIf: [0, "ngIf"]
          }, null), (l()(),
          e["\u0275and"](16777216, null, null, 1, null, K)), e["\u0275did"](29, 16384, null, 0, d.NgIf, [e.ViewContainerRef, e.TemplateRef], {
              ngIf: [0, "ngIf"]
          }, null), (l()(),
          e["\u0275and"](16777216, null, null, 1, null, j)), e["\u0275did"](31, 16384, null, 0, d.NgIf, [e.ViewContainerRef, e.TemplateRef], {
              ngIf: [0, "ngIf"]
          }, null), (l()(),
          e["\u0275eld"](32, 0, null, null, 4, "td", [["class", "pl-0"]], null, null, null, null, null)), (l()(),
          e["\u0275eld"](33, 0, null, null, 3, "a", [["id", "multiMarketPin"], ["style", "cursor: pointer"], ["title", "Add to Multi Markets"]], null, [[null, "click"]], function(l, n, u) {
              var e = !0;
              return "click" === n && (e = !1 !== l.component.addToMultimarket(l.context.$implicit.exEventId) && e),
              e
          }, null, null)), e["\u0275did"](34, 278528, null, 0, d.NgClass, [e.IterableDiffers, e.KeyValueDiffers, e.ElementRef, e.Renderer2], {
              klass: [0, "klass"],
              ngClass: [1, "ngClass"]
          }, null), e["\u0275pod"](35, {
              "pin-on": 0
          }), (l()(),
          e["\u0275ted"](-1, null, ["Pin"]))], function(l, n) {
              var u = n.component;
              l(n, 6, 0, n.context.$implicit.oddsData.inPlay),
              l(n, 8, 0, n.context.$implicit.isStreaming),
              l(n, 10, 0, !n.context.$implicit.oddsData.inPlay),
              l(n, 13, 0, n.context.$implicit.isFancy),
              l(n, 15, 0, n.context.$implicit.isSportsbook),
              l(n, 17, 0, n.context.$implicit.isVirtual),
              l(n, 19, 0, n.context.$implicit.isCasinoGame),
              l(n, 21, 0, n.context.$implicit.oddsData.runners[0]),
              l(n, 23, 0, !n.context.$implicit.oddsData.runners[0]),
              l(n, 25, 0, n.context.$implicit.oddsData.runners[2]),
              l(n, 27, 0, !n.context.$implicit.oddsData.runners[2]),
              l(n, 29, 0, n.context.$implicit.oddsData.runners[1]),
              l(n, 31, 0, !n.context.$implicit.oddsData.runners[1]);
              var t = e["\u0275inlineInterpolate"](1, "add-pin ", n.context.$implicit.exEventId, "")
                , i = l(n, 35, 0, u.isMultiMarket(n.context.$implicit.exEventId));
              l(n, 34, 0, t, i)
          }, function(l, n) {
              l(n, 4, 0, n.context.$implicit.eventName)
          })
      }
      function B(l) {
          return e["\u0275vid"](0, [(l()(),
          e["\u0275eld"](0, 0, null, null, 2, "tr", [], null, null, null, null, null)), (l()(),
          e["\u0275eld"](1, 0, null, null, 1, "td", [["class", "text-center"], ["colspan", "4"]], null, null, null, null, null)), (l()(),
          e["\u0275ted"](-1, null, ["There are no events to be displayed."]))], null, null)
      }
      function z(l) {
          return e["\u0275vid"](0, [(l()(),
          e["\u0275eld"](0, 0, null, null, 1, "span", [["class", "in_play"]], null, null, null, null, null)), (l()(),
          e["\u0275ted"](-1, null, ["In-Play"]))], null, null)
      }
      function W(l) {
          return e["\u0275vid"](0, [(l()(),
          e["\u0275eld"](0, 0, null, null, 1, "span", [["class", "in_play"]], null, null, null, null, null)), (l()(),
          e["\u0275eld"](1, 0, null, null, 0, "i", [["class", "fa fa-television"]], null, null, null, null, null))], null, null)
      }
      function J(l) {
          return e["\u0275vid"](0, [(l()(),
          e["\u0275eld"](0, 0, null, null, 1, "p", [["class", "match-time"]], null, null, null, null, null)), (l()(),
          e["\u0275ted"](1, null, ["", " "]))], null, function(l, n) {
              l(n, 1, 0, n.component.convertUTCDate(n.parent.context.$implicit.eventTime))
          })
      }
      function Z(l) {
          return e["\u0275vid"](0, [(l()(),
          e["\u0275eld"](0, 0, null, null, 1, "span", [["class", "game-fancy mr-1"]], null, null, null, null, null)), (l()(),
          e["\u0275ted"](-1, null, ["F"]))], null, null)
      }
      function H(l) {
          return e["\u0275vid"](0, [(l()(),
          e["\u0275eld"](0, 0, null, null, 1, "span", [["class", "game-sportbook"]], null, null, null, null, null)), (l()(),
          e["\u0275ted"](-1, null, ["S"]))], null, null)
      }
      function Q(l) {
          return e["\u0275vid"](0, [(l()(),
          e["\u0275eld"](0, 0, null, null, 1, "span", [["class", "game-icon"]], null, null, null, null, null)), (l()(),
          e["\u0275eld"](1, 0, null, null, 0, "img", [["src", "../../../assets/img/game-icon.svg"]], null, null, null, null, null))], null, null)
      }
      function X(l) {
          return e["\u0275vid"](0, [(l()(),
          e["\u0275eld"](0, 0, null, null, 1, "span", [["class", "game-icon"]], null, null, null, null, null)), (l()(),
          e["\u0275eld"](1, 0, null, null, 0, "img", [["src", "../../../assets/img/ic_vir.png"]], null, null, null, null, null))], null, null)
      }
      function ll(l) {
          return e["\u0275vid"](0, [(l()(),
          e["\u0275eld"](0, 0, null, null, 4, "td", [["class", "count"]], null, null, null, null, null)), (l()(),
          e["\u0275eld"](1, 0, null, null, 1, "span", [["class", "back"]], null, null, null, null, null)), (l()(),
          e["\u0275ted"](2, null, ["", ""])), (l()(),
          e["\u0275eld"](3, 0, null, null, 1, "span", [["class", "lay"]], null, null, null, null, null)), (l()(),
          e["\u0275ted"](4, null, ["", ""]))], null, function(l, n) {
              l(n, 2, 0, n.parent.context.$implicit.oddsData.runners[0].price.back[0] ? n.parent.context.$implicit.oddsData.runners[0].price.back[0].price : "0.0"),
              l(n, 4, 0, n.parent.context.$implicit.oddsData.runners[0].price.lay[0] ? n.parent.context.$implicit.oddsData.runners[0].price.lay[0].price : "0.0")
          })
      }
      function nl(l) {
          return e["\u0275vid"](0, [(l()(),
          e["\u0275eld"](0, 0, null, null, 4, "td", [["class", "count"]], null, null, null, null, null)), (l()(),
          e["\u0275eld"](1, 0, null, null, 1, "span", [["class", "back"]], null, null, null, null, null)), (l()(),
          e["\u0275ted"](-1, null, ["0.0"])), (l()(),
          e["\u0275eld"](3, 0, null, null, 1, "span", [["class", "lay"]], null, null, null, null, null)), (l()(),
          e["\u0275ted"](-1, null, ["0.0"]))], null, null)
      }
      function ul(l) {
          return e["\u0275vid"](0, [(l()(),
          e["\u0275eld"](0, 0, null, null, 4, "td", [["class", "count"]], null, null, null, null, null)), (l()(),
          e["\u0275eld"](1, 0, null, null, 1, "span", [["class", "back"]], null, null, null, null, null)), (l()(),
          e["\u0275ted"](2, null, ["", ""])), (l()(),
          e["\u0275eld"](3, 0, null, null, 1, "span", [["class", "lay"]], null, null, null, null, null)), (l()(),
          e["\u0275ted"](4, null, ["", ""]))], null, function(l, n) {
              l(n, 2, 0, n.parent.context.$implicit.oddsData.runners[2].price.back[0] ? n.parent.context.$implicit.oddsData.runners[2].price.back[0].price : "0.0"),
              l(n, 4, 0, n.parent.context.$implicit.oddsData.runners[2].price.lay[0] ? n.parent.context.$implicit.oddsData.runners[2].price.lay[0].price : "0.0")
          })
      }
      function el(l) {
          return e["\u0275vid"](0, [(l()(),
          e["\u0275eld"](0, 0, null, null, 4, "td", [["class", "count"]], null, null, null, null, null)), (l()(),
          e["\u0275eld"](1, 0, null, null, 1, "span", [["class", "back"]], null, null, null, null, null)), (l()(),
          e["\u0275ted"](-1, null, ["0.0"])), (l()(),
          e["\u0275eld"](3, 0, null, null, 1, "span", [["class", "lay"]], null, null, null, null, null)), (l()(),
          e["\u0275ted"](-1, null, ["0.0"]))], null, null)
      }
      function tl(l) {
          return e["\u0275vid"](0, [(l()(),
          e["\u0275eld"](0, 0, null, null, 4, "td", [["class", "count"]], null, null, null, null, null)), (l()(),
          e["\u0275eld"](1, 0, null, null, 1, "span", [["class", "back"]], null, null, null, null, null)), (l()(),
          e["\u0275ted"](2, null, ["", ""])), (l()(),
          e["\u0275eld"](3, 0, null, null, 1, "span", [["class", "lay"]], null, null, null, null, null)), (l()(),
          e["\u0275ted"](4, null, ["", ""]))], null, function(l, n) {
              l(n, 2, 0, n.parent.context.$implicit.oddsData.runners[1].price.back[0] ? n.parent.context.$implicit.oddsData.runners[1].price.back[0].price : "0.0"),
              l(n, 4, 0, n.parent.context.$implicit.oddsData.runners[1].price.lay[0] ? n.parent.context.$implicit.oddsData.runners[1].price.lay[0].price : "0.0")
          })
      }
      function il(l) {
          return e["\u0275vid"](0, [(l()(),
          e["\u0275eld"](0, 0, null, null, 4, "td", [["class", "count"]], null, null, null, null, null)), (l()(),
          e["\u0275eld"](1, 0, null, null, 1, "span", [["class", "back"]], null, null, null, null, null)), (l()(),
          e["\u0275ted"](-1, null, ["0.0"])), (l()(),
          e["\u0275eld"](3, 0, null, null, 1, "span", [["class", "lay"]], null, null, null, null, null)), (l()(),
          e["\u0275ted"](-1, null, ["0.0"]))], null, null)
      }
      function al(l) {
          return e["\u0275vid"](0, [(l()(),
          e["\u0275eld"](0, 0, null, null, 36, "tr", [], null, null, null, null, null)), (l()(),
          e["\u0275eld"](1, 0, null, null, 9, "td", [], null, null, null, null, null)), (l()(),
          e["\u0275eld"](2, 0, null, null, 2, "a", [["class", "match-name"]], null, [[null, "click"]], function(l, n, u) {
              var e = !0;
              return "click" === n && (e = !1 !== l.component.gotomarketbyid(l.context.$implicit.exEventId, l.context.$implicit.sportId) && e),
              e
          }, null, null)), (l()(),
          e["\u0275eld"](3, 0, null, null, 1, "span", [], null, null, null, null, null)), (l()(),
          e["\u0275ted"](4, null, ["", ""])), (l()(),
          e["\u0275and"](16777216, null, null, 1, null, z)), e["\u0275did"](6, 16384, null, 0, d.NgIf, [e.ViewContainerRef, e.TemplateRef], {
              ngIf: [0, "ngIf"]
          }, null), (l()(),
          e["\u0275and"](16777216, null, null, 1, null, W)), e["\u0275did"](8, 16384, null, 0, d.NgIf, [e.ViewContainerRef, e.TemplateRef], {
              ngIf: [0, "ngIf"]
          }, null), (l()(),
          e["\u0275and"](16777216, null, null, 1, null, J)), e["\u0275did"](10, 16384, null, 0, d.NgIf, [e.ViewContainerRef, e.TemplateRef], {
              ngIf: [0, "ngIf"]
          }, null), (l()(),
          e["\u0275eld"](11, 0, null, null, 8, "td", [], null, null, null, null, null)), (l()(),
          e["\u0275and"](16777216, null, null, 1, null, Z)), e["\u0275did"](13, 16384, null, 0, d.NgIf, [e.ViewContainerRef, e.TemplateRef], {
              ngIf: [0, "ngIf"]
          }, null), (l()(),
          e["\u0275and"](16777216, null, null, 1, null, H)), e["\u0275did"](15, 16384, null, 0, d.NgIf, [e.ViewContainerRef, e.TemplateRef], {
              ngIf: [0, "ngIf"]
          }, null), (l()(),
          e["\u0275and"](16777216, null, null, 1, null, Q)), e["\u0275did"](17, 16384, null, 0, d.NgIf, [e.ViewContainerRef, e.TemplateRef], {
              ngIf: [0, "ngIf"]
          }, null), (l()(),
          e["\u0275and"](16777216, null, null, 1, null, X)), e["\u0275did"](19, 16384, null, 0, d.NgIf, [e.ViewContainerRef, e.TemplateRef], {
              ngIf: [0, "ngIf"]
          }, null), (l()(),
          e["\u0275and"](16777216, null, null, 1, null, ll)), e["\u0275did"](21, 16384, null, 0, d.NgIf, [e.ViewContainerRef, e.TemplateRef], {
              ngIf: [0, "ngIf"]
          }, null), (l()(),
          e["\u0275and"](16777216, null, null, 1, null, nl)), e["\u0275did"](23, 16384, null, 0, d.NgIf, [e.ViewContainerRef, e.TemplateRef], {
              ngIf: [0, "ngIf"]
          }, null), (l()(),
          e["\u0275and"](16777216, null, null, 1, null, ul)), e["\u0275did"](25, 16384, null, 0, d.NgIf, [e.ViewContainerRef, e.TemplateRef], {
              ngIf: [0, "ngIf"]
          }, null), (l()(),
          e["\u0275and"](16777216, null, null, 1, null, el)), e["\u0275did"](27, 16384, null, 0, d.NgIf, [e.ViewContainerRef, e.TemplateRef], {
              ngIf: [0, "ngIf"]
          }, null), (l()(),
          e["\u0275and"](16777216, null, null, 1, null, tl)), e["\u0275did"](29, 16384, null, 0, d.NgIf, [e.ViewContainerRef, e.TemplateRef], {
              ngIf: [0, "ngIf"]
          }, null), (l()(),
          e["\u0275and"](16777216, null, null, 1, null, il)), e["\u0275did"](31, 16384, null, 0, d.NgIf, [e.ViewContainerRef, e.TemplateRef], {
              ngIf: [0, "ngIf"]
          }, null), (l()(),
          e["\u0275eld"](32, 0, null, null, 4, "td", [["class", "pl-0"]], null, null, null, null, null)), (l()(),
          e["\u0275eld"](33, 0, null, null, 3, "a", [["id", "multiMarketPin"], ["style", "cursor: pointer"], ["title", "Add to Multi Markets"]], null, [[null, "click"]], function(l, n, u) {
              var e = !0;
              return "click" === n && (e = !1 !== l.component.addToMultimarket(l.context.$implicit.exEventId) && e),
              e
          }, null, null)), e["\u0275did"](34, 278528, null, 0, d.NgClass, [e.IterableDiffers, e.KeyValueDiffers, e.ElementRef, e.Renderer2], {
              klass: [0, "klass"],
              ngClass: [1, "ngClass"]
          }, null), e["\u0275pod"](35, {
              "pin-on": 0
          }), (l()(),
          e["\u0275ted"](-1, null, ["Pin"]))], function(l, n) {
              var u = n.component;
              l(n, 6, 0, n.context.$implicit.oddsData.inPlay),
              l(n, 8, 0, n.context.$implicit.isStreaming),
              l(n, 10, 0, !n.context.$implicit.oddsData.inPlay),
              l(n, 13, 0, n.context.$implicit.isFancy),
              l(n, 15, 0, n.context.$implicit.isSportsbook),
              l(n, 17, 0, n.context.$implicit.isVirtual),
              l(n, 19, 0, n.context.$implicit.isCasinoGame),
              l(n, 21, 0, n.context.$implicit.oddsData.runners[0]),
              l(n, 23, 0, !n.context.$implicit.oddsData.runners[0]),
              l(n, 25, 0, n.context.$implicit.oddsData.runners[2]),
              l(n, 27, 0, !n.context.$implicit.oddsData.runners[2]),
              l(n, 29, 0, n.context.$implicit.oddsData.runners[1]),
              l(n, 31, 0, !n.context.$implicit.oddsData.runners[1]);
              var t = e["\u0275inlineInterpolate"](1, "add-pin ", n.context.$implicit.exEventId, "")
                , i = l(n, 35, 0, u.isMultiMarket(n.context.$implicit.exEventId));
              l(n, 34, 0, t, i)
          }, function(l, n) {
              l(n, 4, 0, n.context.$implicit.eventName)
          })
      }
      function cl(l) {
          return e["\u0275vid"](0, [(l()(),
          e["\u0275eld"](0, 0, null, null, 2, "tr", [], null, null, null, null, null)), (l()(),
          e["\u0275eld"](1, 0, null, null, 1, "td", [["class", "text-center"], ["colspan", "4"]], null, null, null, null, null)), (l()(),
          e["\u0275ted"](-1, null, ["There are no events to be displayed."]))], null, null)
      }
      function dl(l) {
          return e["\u0275vid"](0, [(l()(),
          e["\u0275eld"](0, 0, null, null, 1, "span", [["class", "in_play"]], null, null, null, null, null)), (l()(),
          e["\u0275ted"](-1, null, ["In-Play"]))], null, null)
      }
      function sl(l) {
          return e["\u0275vid"](0, [(l()(),
          e["\u0275eld"](0, 0, null, null, 1, "span", [["class", "in_play"]], null, null, null, null, null)), (l()(),
          e["\u0275eld"](1, 0, null, null, 0, "i", [["class", "fa fa-television"]], null, null, null, null, null))], null, null)
      }
      function ol(l) {
          return e["\u0275vid"](0, [(l()(),
          e["\u0275eld"](0, 0, null, null, 1, "p", [["class", "match-time"]], null, null, null, null, null)), (l()(),
          e["\u0275ted"](1, null, ["", ""]))], null, function(l, n) {
              l(n, 1, 0, n.component.convertUTCDate(n.parent.context.$implicit.eventTime))
          })
      }
      function rl(l) {
          return e["\u0275vid"](0, [(l()(),
          e["\u0275eld"](0, 0, null, null, 1, "span", [["class", "game-fancy mr-1"]], null, null, null, null, null)), (l()(),
          e["\u0275ted"](-1, null, ["F"]))], null, null)
      }
      function pl(l) {
          return e["\u0275vid"](0, [(l()(),
          e["\u0275eld"](0, 0, null, null, 1, "span", [["class", "game-sportbook"]], null, null, null, null, null)), (l()(),
          e["\u0275ted"](-1, null, ["S"]))], null, null)
      }
      function gl(l) {
          return e["\u0275vid"](0, [(l()(),
          e["\u0275eld"](0, 0, null, null, 1, "span", [["class", "game-icon"]], null, null, null, null, null)), (l()(),
          e["\u0275eld"](1, 0, null, null, 0, "img", [["src", "../../../assets/img/game-icon.svg"]], null, null, null, null, null))], null, null)
      }
      function fl(l) {
          return e["\u0275vid"](0, [(l()(),
          e["\u0275eld"](0, 0, null, null, 1, "span", [["class", "game-icon"]], null, null, null, null, null)), (l()(),
          e["\u0275eld"](1, 0, null, null, 0, "img", [["src", "../../../assets/img/ic_vir.png"]], null, null, null, null, null))], null, null)
      }
      function ml(l) {
          return e["\u0275vid"](0, [(l()(),
          e["\u0275eld"](0, 0, null, null, 4, "td", [["class", "count"]], null, null, null, null, null)), (l()(),
          e["\u0275eld"](1, 0, null, null, 1, "span", [["class", "back"]], null, null, null, null, null)), (l()(),
          e["\u0275ted"](2, null, ["", ""])), (l()(),
          e["\u0275eld"](3, 0, null, null, 1, "span", [["class", "lay"]], null, null, null, null, null)), (l()(),
          e["\u0275ted"](4, null, ["", ""]))], null, function(l, n) {
              l(n, 2, 0, n.parent.context.$implicit.oddsData.runners[0].price.back[0] ? n.parent.context.$implicit.oddsData.runners[0].price.back[0].price : "0.0"),
              l(n, 4, 0, n.parent.context.$implicit.oddsData.runners[0].price.lay[0] ? n.parent.context.$implicit.oddsData.runners[0].price.lay[0].price : "0.0")
          })
      }
      function hl(l) {
          return e["\u0275vid"](0, [(l()(),
          e["\u0275eld"](0, 0, null, null, 4, "td", [["class", "count"]], null, null, null, null, null)), (l()(),
          e["\u0275eld"](1, 0, null, null, 1, "span", [["class", "back"]], null, null, null, null, null)), (l()(),
          e["\u0275ted"](-1, null, ["0.0"])), (l()(),
          e["\u0275eld"](3, 0, null, null, 1, "span", [["class", "lay"]], null, null, null, null, null)), (l()(),
          e["\u0275ted"](-1, null, ["0.0"]))], null, null)
      }
      function vl(l) {
          return e["\u0275vid"](0, [(l()(),
          e["\u0275eld"](0, 0, null, null, 4, "td", [["class", "count"]], null, null, null, null, null)), (l()(),
          e["\u0275eld"](1, 0, null, null, 1, "span", [["class", "back"]], null, null, null, null, null)), (l()(),
          e["\u0275ted"](2, null, ["", ""])), (l()(),
          e["\u0275eld"](3, 0, null, null, 1, "span", [["class", "lay"]], null, null, null, null, null)), (l()(),
          e["\u0275ted"](4, null, ["", ""]))], null, function(l, n) {
              l(n, 2, 0, n.parent.context.$implicit.oddsData.runners[2].price.back[0] ? n.parent.context.$implicit.oddsData.runners[2].price.back[0].price : "0.0"),
              l(n, 4, 0, n.parent.context.$implicit.oddsData.runners[2].price.lay[0] ? n.parent.context.$implicit.oddsData.runners[2].price.lay[0].price : "0.0")
          })
      }
      function xl(l) {
          return e["\u0275vid"](0, [(l()(),
          e["\u0275eld"](0, 0, null, null, 4, "td", [["class", "count"]], null, null, null, null, null)), (l()(),
          e["\u0275eld"](1, 0, null, null, 1, "span", [["class", "back"]], null, null, null, null, null)), (l()(),
          e["\u0275ted"](-1, null, ["0.0"])), (l()(),
          e["\u0275eld"](3, 0, null, null, 1, "span", [["class", "lay"]], null, null, null, null, null)), (l()(),
          e["\u0275ted"](-1, null, ["0.0"]))], null, null)
      }
      function Il(l) {
          return e["\u0275vid"](0, [(l()(),
          e["\u0275eld"](0, 0, null, null, 4, "td", [["class", "count"]], null, null, null, null, null)), (l()(),
          e["\u0275eld"](1, 0, null, null, 1, "span", [["class", "back"]], null, null, null, null, null)), (l()(),
          e["\u0275ted"](2, null, ["", ""])), (l()(),
          e["\u0275eld"](3, 0, null, null, 1, "span", [["class", "lay"]], null, null, null, null, null)), (l()(),
          e["\u0275ted"](4, null, ["", ""]))], null, function(l, n) {
              l(n, 2, 0, n.parent.context.$implicit.oddsData.runners[1].price.back[0] ? n.parent.context.$implicit.oddsData.runners[1].price.back[0].price : "0.0"),
              l(n, 4, 0, n.parent.context.$implicit.oddsData.runners[1].price.lay[0] ? n.parent.context.$implicit.oddsData.runners[1].price.lay[0].price : "0.0")
          })
      }
      function Rl(l) {
          return e["\u0275vid"](0, [(l()(),
          e["\u0275eld"](0, 0, null, null, 4, "td", [["class", "count"]], null, null, null, null, null)), (l()(),
          e["\u0275eld"](1, 0, null, null, 1, "span", [["class", "back"]], null, null, null, null, null)), (l()(),
          e["\u0275ted"](-1, null, ["0.0"])), (l()(),
          e["\u0275eld"](3, 0, null, null, 1, "span", [["class", "lay"]], null, null, null, null, null)), (l()(),
          e["\u0275ted"](-1, null, ["0.0"]))], null, null)
      }
      function bl(l) {
          return e["\u0275vid"](0, [(l()(),
          e["\u0275eld"](0, 0, null, null, 36, "tr", [], null, null, null, null, null)), (l()(),
          e["\u0275eld"](1, 0, null, null, 9, "td", [], null, null, null, null, null)), (l()(),
          e["\u0275eld"](2, 0, null, null, 2, "a", [["class", "match-name"]], null, [[null, "click"]], function(l, n, u) {
              var e = !0;
              return "click" === n && (e = !1 !== l.component.gotomarketbyid(l.context.$implicit.exEventId, l.context.$implicit.sportId) && e),
              e
          }, null, null)), (l()(),
          e["\u0275eld"](3, 0, null, null, 1, "span", [], null, null, null, null, null)), (l()(),
          e["\u0275ted"](4, null, ["", ""])), (l()(),
          e["\u0275and"](16777216, null, null, 1, null, dl)), e["\u0275did"](6, 16384, null, 0, d.NgIf, [e.ViewContainerRef, e.TemplateRef], {
              ngIf: [0, "ngIf"]
          }, null), (l()(),
          e["\u0275and"](16777216, null, null, 1, null, sl)), e["\u0275did"](8, 16384, null, 0, d.NgIf, [e.ViewContainerRef, e.TemplateRef], {
              ngIf: [0, "ngIf"]
          }, null), (l()(),
          e["\u0275and"](16777216, null, null, 1, null, ol)), e["\u0275did"](10, 16384, null, 0, d.NgIf, [e.ViewContainerRef, e.TemplateRef], {
              ngIf: [0, "ngIf"]
          }, null), (l()(),
          e["\u0275eld"](11, 0, null, null, 8, "td", [], null, null, null, null, null)), (l()(),
          e["\u0275and"](16777216, null, null, 1, null, rl)), e["\u0275did"](13, 16384, null, 0, d.NgIf, [e.ViewContainerRef, e.TemplateRef], {
              ngIf: [0, "ngIf"]
          }, null), (l()(),
          e["\u0275and"](16777216, null, null, 1, null, pl)), e["\u0275did"](15, 16384, null, 0, d.NgIf, [e.ViewContainerRef, e.TemplateRef], {
              ngIf: [0, "ngIf"]
          }, null), (l()(),
          e["\u0275and"](16777216, null, null, 1, null, gl)), e["\u0275did"](17, 16384, null, 0, d.NgIf, [e.ViewContainerRef, e.TemplateRef], {
              ngIf: [0, "ngIf"]
          }, null), (l()(),
          e["\u0275and"](16777216, null, null, 1, null, fl)), e["\u0275did"](19, 16384, null, 0, d.NgIf, [e.ViewContainerRef, e.TemplateRef], {
              ngIf: [0, "ngIf"]
          }, null), (l()(),
          e["\u0275and"](16777216, null, null, 1, null, ml)), e["\u0275did"](21, 16384, null, 0, d.NgIf, [e.ViewContainerRef, e.TemplateRef], {
              ngIf: [0, "ngIf"]
          }, null), (l()(),
          e["\u0275and"](16777216, null, null, 1, null, hl)), e["\u0275did"](23, 16384, null, 0, d.NgIf, [e.ViewContainerRef, e.TemplateRef], {
              ngIf: [0, "ngIf"]
          }, null), (l()(),
          e["\u0275and"](16777216, null, null, 1, null, vl)), e["\u0275did"](25, 16384, null, 0, d.NgIf, [e.ViewContainerRef, e.TemplateRef], {
              ngIf: [0, "ngIf"]
          }, null), (l()(),
          e["\u0275and"](16777216, null, null, 1, null, xl)), e["\u0275did"](27, 16384, null, 0, d.NgIf, [e.ViewContainerRef, e.TemplateRef], {
              ngIf: [0, "ngIf"]
          }, null), (l()(),
          e["\u0275and"](16777216, null, null, 1, null, Il)), e["\u0275did"](29, 16384, null, 0, d.NgIf, [e.ViewContainerRef, e.TemplateRef], {
              ngIf: [0, "ngIf"]
          }, null), (l()(),
          e["\u0275and"](16777216, null, null, 1, null, Rl)), e["\u0275did"](31, 16384, null, 0, d.NgIf, [e.ViewContainerRef, e.TemplateRef], {
              ngIf: [0, "ngIf"]
          }, null), (l()(),
          e["\u0275eld"](32, 0, null, null, 4, "td", [["class", "pl-0"]], null, null, null, null, null)), (l()(),
          e["\u0275eld"](33, 0, null, null, 3, "a", [["id", "multiMarketPin"], ["style", "cursor: pointer"], ["title", "Add to Multi Markets"]], null, [[null, "click"]], function(l, n, u) {
              var e = !0;
              return "click" === n && (e = !1 !== l.component.addToMultimarket(l.context.$implicit.exEventId) && e),
              e
          }, null, null)), e["\u0275did"](34, 278528, null, 0, d.NgClass, [e.IterableDiffers, e.KeyValueDiffers, e.ElementRef, e.Renderer2], {
              klass: [0, "klass"],
              ngClass: [1, "ngClass"]
          }, null), e["\u0275pod"](35, {
              "pin-on": 0
          }), (l()(),
          e["\u0275ted"](-1, null, ["Pin"]))], function(l, n) {
              var u = n.component;
              l(n, 6, 0, n.context.$implicit.oddsData.inPlay),
              l(n, 8, 0, n.context.$implicit.isStreaming),
              l(n, 10, 0, !n.context.$implicit.oddsData.inPlay),
              l(n, 13, 0, n.context.$implicit.isFancy),
              l(n, 15, 0, n.context.$implicit.isSportsbook),
              l(n, 17, 0, n.context.$implicit.isVirtual),
              l(n, 19, 0, n.context.$implicit.isCasinoGame),
              l(n, 21, 0, n.context.$implicit.oddsData.runners[0]),
              l(n, 23, 0, !n.context.$implicit.oddsData.runners[0]),
              l(n, 25, 0, n.context.$implicit.oddsData.runners[2]),
              l(n, 27, 0, !n.context.$implicit.oddsData.runners[2]),
              l(n, 29, 0, n.context.$implicit.oddsData.runners[1]),
              l(n, 31, 0, !n.context.$implicit.oddsData.runners[1]);
              var t = e["\u0275inlineInterpolate"](1, "add-pin ", n.context.$implicit.exEventId, "")
                , i = l(n, 35, 0, u.isMultiMarket(n.context.$implicit.exEventId));
              l(n, 34, 0, t, i)
          }, function(l, n) {
              l(n, 4, 0, n.context.$implicit.eventName)
          })
      }
      function kl(l) {
          return e["\u0275vid"](0, [(l()(),
          e["\u0275eld"](0, 0, null, null, 2, "tr", [], null, null, null, null, null)), (l()(),
          e["\u0275eld"](1, 0, null, null, 1, "td", [["class", "text-center"], ["colspan", "4"]], null, null, null, null, null)), (l()(),
          e["\u0275ted"](-1, null, ["There are no events to be displayed."]))], null, null)
      }
      function yl(l) {
          return e["\u0275vid"](0, [(l()(),
          e["\u0275eld"](0, 0, null, null, 1, "span", [["class", "in_play"]], null, null, null, null, null)), (l()(),
          e["\u0275ted"](-1, null, ["In-Play"]))], null, null)
      }
      function Cl(l) {
          return e["\u0275vid"](0, [(l()(),
          e["\u0275eld"](0, 0, null, null, 1, "span", [["class", "in_play"]], null, null, null, null, null)), (l()(),
          e["\u0275eld"](1, 0, null, null, 0, "i", [["class", "fa fa-television"]], null, null, null, null, null))], null, null)
      }
      function Sl(l) {
          return e["\u0275vid"](0, [(l()(),
          e["\u0275eld"](0, 0, null, null, 1, "span", [["class", "game-fancy mr-1"]], null, null, null, null, null)), (l()(),
          e["\u0275ted"](-1, null, ["F"]))], null, null)
      }
      function wl(l) {
          return e["\u0275vid"](0, [(l()(),
          e["\u0275eld"](0, 0, null, null, 1, "span", [["class", "game-sportbook"]], null, null, null, null, null)), (l()(),
          e["\u0275ted"](-1, null, ["S"]))], null, null)
      }
      function $l(l) {
          return e["\u0275vid"](0, [(l()(),
          e["\u0275eld"](0, 0, null, null, 1, "span", [["class", "game-icon"]], null, null, null, null, null)), (l()(),
          e["\u0275eld"](1, 0, null, null, 0, "img", [["src", "../../../assets/img/game-icon.svg"]], null, null, null, null, null))], null, null)
      }
      function Tl(l) {
          return e["\u0275vid"](0, [(l()(),
          e["\u0275eld"](0, 0, null, null, 1, "span", [["class", "game-icon"]], null, null, null, null, null)), (l()(),
          e["\u0275eld"](1, 0, null, null, 0, "img", [["src", "../../../assets/img/ic_vir.png"]], null, null, null, null, null))], null, null)
      }
      function Dl(l) {
          return e["\u0275vid"](0, [(l()(),
          e["\u0275eld"](0, 0, null, null, 28, "tr", [], null, null, null, null, null)), (l()(),
          e["\u0275eld"](1, 0, null, null, 11, "td", [], null, null, null, null, null)), (l()(),
          e["\u0275eld"](2, 0, null, null, 2, "a", [["class", "match-name"]], null, [[null, "click"]], function(l, n, u) {
              var e = !0;
              return "click" === n && (e = !1 !== l.component.gotomarketbyid(l.context.$implicit.exEventId, l.context.$implicit.sportId) && e),
              e
          }, null, null)), (l()(),
          e["\u0275eld"](3, 0, null, null, 1, "span", [], null, null, null, null, null)), (l()(),
          e["\u0275ted"](4, null, ["", ""])), (l()(),
          e["\u0275and"](16777216, null, null, 1, null, yl)), e["\u0275did"](6, 16384, null, 0, d.NgIf, [e.ViewContainerRef, e.TemplateRef], {
              ngIf: [0, "ngIf"]
          }, null), (l()(),
          e["\u0275and"](16777216, null, null, 1, null, Cl)), e["\u0275did"](8, 16384, null, 0, d.NgIf, [e.ViewContainerRef, e.TemplateRef], {
              ngIf: [0, "ngIf"]
          }, null), (l()(),
          e["\u0275eld"](9, 0, null, null, 3, "p", [["class", "match-time"]], null, null, null, null, null)), e["\u0275did"](10, 278528, null, 0, d.NgClass, [e.IterableDiffers, e.KeyValueDiffers, e.ElementRef, e.Renderer2], {
              klass: [0, "klass"],
              ngClass: [1, "ngClass"]
          }, null), e["\u0275pod"](11, {
              hidedate: 0
          }), (l()(),
          e["\u0275ted"](12, null, [" ", ""])), (l()(),
          e["\u0275eld"](13, 0, null, null, 8, "td", [], null, null, null, null, null)), (l()(),
          e["\u0275and"](16777216, null, null, 1, null, Sl)), e["\u0275did"](15, 16384, null, 0, d.NgIf, [e.ViewContainerRef, e.TemplateRef], {
              ngIf: [0, "ngIf"]
          }, null), (l()(),
          e["\u0275and"](16777216, null, null, 1, null, wl)), e["\u0275did"](17, 16384, null, 0, d.NgIf, [e.ViewContainerRef, e.TemplateRef], {
              ngIf: [0, "ngIf"]
          }, null), (l()(),
          e["\u0275and"](16777216, null, null, 1, null, $l)), e["\u0275did"](19, 16384, null, 0, d.NgIf, [e.ViewContainerRef, e.TemplateRef], {
              ngIf: [0, "ngIf"]
          }, null), (l()(),
          e["\u0275and"](16777216, null, null, 1, null, Tl)), e["\u0275did"](21, 16384, null, 0, d.NgIf, [e.ViewContainerRef, e.TemplateRef], {
              ngIf: [0, "ngIf"]
          }, null), (l()(),
          e["\u0275eld"](22, 0, null, null, 6, "td", [["class", "pl-0 v-mid"]], null, null, null, null, null)), e["\u0275did"](23, 278528, null, 0, d.NgClass, [e.IterableDiffers, e.KeyValueDiffers, e.ElementRef, e.Renderer2], {
              klass: [0, "klass"],
              ngClass: [1, "ngClass"]
          }, null), e["\u0275pod"](24, {
              "hidden-xs": 0
          }), (l()(),
          e["\u0275eld"](25, 0, null, null, 3, "a", [["class", "pin-off-mobile"], ["id", "multiMarketPin"], ["style", "cursor: pointer"], ["title", "Add to Multi Markets"]], null, [[null, "click"]], function(l, n, u) {
              var e = !0;
              return "click" === n && (e = !1 !== l.component.addToMultimarket(l.context.$implicit.exEventId) && e),
              e
          }, null, null)), e["\u0275did"](26, 278528, null, 0, d.NgClass, [e.IterableDiffers, e.KeyValueDiffers, e.ElementRef, e.Renderer2], {
              klass: [0, "klass"],
              ngClass: [1, "ngClass"]
          }, null), e["\u0275pod"](27, {
              "pin-on-mobile": 0
          }), (l()(),
          e["\u0275ted"](-1, null, ["Pin"]))], function(l, n) {
              var u = n.component;
              l(n, 6, 0, n.context.$implicit.oddsData.inPlay),
              l(n, 8, 0, n.context.$implicit.isStreaming);
              var e = l(n, 11, 0, "6" == n.context.$implicit.sportId || "5" == n.context.$implicit.sportId || n.context.$implicit.oddsData.inPlay);
              l(n, 10, 0, "match-time", e),
              l(n, 15, 0, n.context.$implicit.isFancy),
              l(n, 17, 0, n.context.$implicit.isSportsbook),
              l(n, 19, 0, n.context.$implicit.isVirtual),
              l(n, 21, 0, n.context.$implicit.isCasinoGame);
              var t = l(n, 24, 0, "6" == n.context.$implicit.sportId || "5" == n.context.$implicit.sportId);
              l(n, 23, 0, "pl-0 v-mid", t);
              var i = l(n, 27, 0, u.isMultiMarket(n.context.$implicit.exEventId));
              l(n, 26, 0, "pin-off-mobile", i)
          }, function(l, n) {
              var u = n.component;
              l(n, 4, 0, n.context.$implicit.eventName),
              l(n, 12, 0, u.convertUTCDate(n.context.$implicit.eventTime))
          })
      }
      function Nl(l) {
          return e["\u0275vid"](0, [(l()(),
          e["\u0275eld"](0, 0, null, null, 2, "tr", [], null, null, null, null, null)), (l()(),
          e["\u0275eld"](1, 0, null, null, 1, "td", [["class", "text-center"], ["colspan", "4"]], null, null, null, null, null)), (l()(),
          e["\u0275ted"](-1, null, ["There are no events to be displayed."]))], null, null)
      }
      function Vl(l) {
          return e["\u0275vid"](0, [(l()(),
          e["\u0275eld"](0, 0, null, null, 5, "dl", [["class", "support-mail"]], null, null, null, null, null)), (l()(),
          e["\u0275eld"](1, 0, null, null, 1, "dt", [], null, null, null, null, null)), (l()(),
          e["\u0275eld"](2, 0, null, null, 0, "img", [["src", "../../../assets/img/transparent.gif"], ["title", "Email"]], null, null, null, null, null)), (l()(),
          e["\u0275eld"](3, 0, null, null, 2, "dd", [], null, null, null, null, null)), (l()(),
          e["\u0275eld"](4, 0, null, null, 1, "a", [], [[8, "href", 4]], null, null, null, null)), (l()(),
          e["\u0275ted"](5, null, ["", ""]))], null, function(l, n) {
              var u = n.component;
              l(n, 4, 0, e["\u0275inlineInterpolate"](1, "mailto:", u.exchangeSetting.email, "")),
              l(n, 5, 0, u.exchangeSetting.email)
          })
      }
      function El(l) {
          return e["\u0275vid"](0, [(l()(),
          e["\u0275eld"](0, 0, null, null, 7, "dl", [["class", "support-app"]], null, null, null, null, null)), (l()(),
          e["\u0275eld"](1, 0, null, null, 1, "dt", [], null, null, null, null, null)), (l()(),
          e["\u0275eld"](2, 0, null, null, 0, "i", [["aria-hidden", "true"], ["class", "fa fa-phone"], ["style", " font-size: 22px; line-height: 24px;"]], null, null, null, null, null)), (l()(),
          e["\u0275eld"](3, 0, null, null, 4, "dd", [], null, null, null, null, null)), (l()(),
          e["\u0275eld"](4, 0, null, null, 3, "a", [], [[8, "href", 4]], null, null, null, null)), (l()(),
          e["\u0275eld"](5, 0, null, null, 1, "span", [], null, null, null, null, null)), (l()(),
          e["\u0275ted"](-1, null, ["Calling"])), (l()(),
          e["\u0275ted"](7, null, [" ", ""]))], null, function(l, n) {
              var u = n.component;
              l(n, 4, 0, e["\u0275inlineInterpolate"](1, "tel:", u.exchangeSetting.phone, "")),
              l(n, 7, 0, u.exchangeSetting.phone)
          })
      }
      function Ml(l) {
          return e["\u0275vid"](0, [(l()(),
          e["\u0275eld"](0, 0, null, null, 7, "dl", [["class", "support-app"]], null, null, null, null, null)), (l()(),
          e["\u0275eld"](1, 0, null, null, 1, "dt", [], null, null, null, null, null)), (l()(),
          e["\u0275eld"](2, 0, null, null, 0, "img", [["src", "../../../assets/img/transparent.gif"], ["title", "WhatsApp"]], null, null, null, null, null)), (l()(),
          e["\u0275eld"](3, 0, null, null, 4, "dd", [], null, null, null, null, null)), (l()(),
          e["\u0275eld"](4, 0, null, null, 3, "a", [], [[8, "href", 4]], null, null, null, null)), (l()(),
          e["\u0275eld"](5, 0, null, null, 1, "span", [], null, null, null, null, null)), (l()(),
          e["\u0275ted"](-1, null, ["WhatsApp"])), (l()(),
          e["\u0275ted"](7, null, [" +", ""]))], null, function(l, n) {
              var u = n.component;
              l(n, 4, 0, e["\u0275inlineInterpolate"](1, "https://api.whatsapp.com/send?phone=", u.exchangeSetting.whatsapp, "")),
              l(n, 7, 0, u.exchangeSetting.whatsapp)
          })
      }
      function Pl(l) {
          return e["\u0275vid"](0, [(l()(),
          e["\u0275eld"](0, 0, null, null, 7, "dl", [["class", "support-telegram"]], null, null, null, null, null)), (l()(),
          e["\u0275eld"](1, 0, null, null, 1, "dt", [], null, null, null, null, null)), (l()(),
          e["\u0275eld"](2, 0, null, null, 0, "img", [["src", "../../../assets/img/transparent.gif"], ["title", "Telegram"]], null, null, null, null, null)), (l()(),
          e["\u0275eld"](3, 0, null, null, 4, "dd", [], null, null, null, null, null)), (l()(),
          e["\u0275eld"](4, 0, null, null, 1, "span", [], null, null, null, null, null)), (l()(),
          e["\u0275ted"](-1, null, ["Telegram"])), (l()(),
          e["\u0275eld"](6, 0, null, null, 1, "a", [], [[8, "href", 4]], null, null, null, null)), (l()(),
          e["\u0275ted"](7, null, [" ", " "]))], null, function(l, n) {
              var u = n.component;
              l(n, 6, 0, e["\u0275inlineInterpolate"](1, "http://", u.exchangeSetting.telegram, "")),
              l(n, 7, 0, u.exchangeSetting.telegram)
          })
      }
      function Ll(l) {
          return e["\u0275vid"](0, [(l()(),
          e["\u0275eld"](0, 0, null, null, 10, "div", [["class", "support-wrap"]], null, null, null, null, null)), (l()(),
          e["\u0275eld"](1, 0, null, null, 1, "h3", [], null, null, null, null, null)), (l()(),
          e["\u0275ted"](-1, null, ["Support"])), (l()(),
          e["\u0275and"](16777216, null, null, 1, null, Vl)), e["\u0275did"](4, 16384, null, 0, d.NgIf, [e.ViewContainerRef, e.TemplateRef], {
              ngIf: [0, "ngIf"]
          }, null), (l()(),
          e["\u0275and"](16777216, null, null, 1, null, El)), e["\u0275did"](6, 16384, null, 0, d.NgIf, [e.ViewContainerRef, e.TemplateRef], {
              ngIf: [0, "ngIf"]
          }, null), (l()(),
          e["\u0275and"](16777216, null, null, 1, null, Ml)), e["\u0275did"](8, 16384, null, 0, d.NgIf, [e.ViewContainerRef, e.TemplateRef], {
              ngIf: [0, "ngIf"]
          }, null), (l()(),
          e["\u0275and"](16777216, null, null, 1, null, Pl)), e["\u0275did"](10, 16384, null, 0, d.NgIf, [e.ViewContainerRef, e.TemplateRef], {
              ngIf: [0, "ngIf"]
          }, null)], function(l, n) {
              var u = n.component;
              l(n, 4, 0, u.exchangeSetting.email),
              l(n, 6, 0, u.exchangeSetting.phone),
              l(n, 8, 0, u.exchangeSetting.whatsapp),
              l(n, 10, 0, u.exchangeSetting.telegram)
          }, null)
      }
      function Ol(l) {
          return e["\u0275vid"](0, [(l()(),
          e["\u0275eld"](0, 0, null, null, 11, "div", [["class", "support-wrap"]], null, null, null, null, null)), (l()(),
          e["\u0275eld"](1, 0, null, null, 10, "dl", [["class", "support-mail"]], null, null, null, null, null)), (l()(),
          e["\u0275eld"](2, 0, null, null, 1, "a", [["class", "rules-btn-home"]], null, [[null, "click"]], function(l, n, u) {
              var t = !0;
              return "click" === n && (t = !1 !== l.component.openGeneralRules(e["\u0275nov"](l.parent, 121), "PP") && t),
              t
          }, null, null)), (l()(),
          e["\u0275ted"](-1, null, ["Privacy Policy"])), (l()(),
          e["\u0275eld"](4, 0, null, null, 1, "a", [["class", "rules-btn-home arrow"]], null, [[null, "click"]], function(l, n, u) {
              var t = !0;
              return "click" === n && (t = !1 !== l.component.openGeneralRules(e["\u0275nov"](l.parent, 121), "KYC") && t),
              t
          }, null, null)), (l()(),
          e["\u0275ted"](-1, null, ["KYC"])), (l()(),
          e["\u0275eld"](6, 0, null, null, 1, "a", [["class", "rules-btn-home arrow"]], null, [[null, "click"]], function(l, n, u) {
              var t = !0;
              return "click" === n && (t = !1 !== l.component.openGeneralRules(e["\u0275nov"](l.parent, 121), "TC") && t),
              t
          }, null, null)), (l()(),
          e["\u0275ted"](-1, null, ["Terms and Conditions"])), (l()(),
          e["\u0275eld"](8, 0, null, null, 1, "a", [["class", "rules-btn-home arrow"]], null, [[null, "click"]], function(l, n, u) {
              var t = !0;
              return "click" === n && (t = !1 !== l.component.openGeneralRules(e["\u0275nov"](l.parent, 121), "RR") && t),
              t
          }, null, null)), (l()(),
          e["\u0275ted"](-1, null, ["Rules and Regulations"])), (l()(),
          e["\u0275eld"](10, 0, null, null, 1, "a", [["class", "rules-btn-home arrow"]], null, [[null, "click"]], function(l, n, u) {
              var t = !0;
              return "click" === n && (t = !1 !== l.component.openGeneralRules(e["\u0275nov"](l.parent, 121), "RG") && t),
              t
          }, null, null)), (l()(),
          e["\u0275ted"](-1, null, ["Responsible Gambling"]))], null, null)
      }
      function Fl(l) {
          return e["\u0275vid"](0, [(l()(),
          e["\u0275eld"](0, 0, null, null, 5, "dl", [], null, null, null, null, null)), (l()(),
          e["\u0275eld"](1, 0, null, null, 1, "dt", [], null, null, null, null, null)), (l()(),
          e["\u0275ted"](-1, null, ["Email"])), (l()(),
          e["\u0275eld"](3, 0, null, null, 2, "dd", [], null, null, null, null, null)), (l()(),
          e["\u0275eld"](4, 0, null, null, 1, "a", [], [[8, "href", 4]], null, null, null, null)), (l()(),
          e["\u0275ted"](5, null, ["", ""]))], null, function(l, n) {
              var u = n.component;
              l(n, 4, 0, e["\u0275inlineInterpolate"](1, "mailto:", u.exchangeSetting.email, "")),
              l(n, 5, 0, u.exchangeSetting.email)
          })
      }
      function Ul(l) {
          return e["\u0275vid"](0, [(l()(),
          e["\u0275eld"](0, 0, null, null, 5, "dl", [], null, null, null, null, null)), (l()(),
          e["\u0275eld"](1, 0, null, null, 1, "dt", [], null, null, null, null, null)), (l()(),
          e["\u0275ted"](-1, null, ["Calling"])), (l()(),
          e["\u0275eld"](3, 0, null, null, 2, "dd", [], null, null, null, null, null)), (l()(),
          e["\u0275eld"](4, 0, null, null, 1, "a", [], [[8, "href", 4]], null, null, null, null)), (l()(),
          e["\u0275ted"](5, null, ["", ""]))], null, function(l, n) {
              var u = n.component;
              l(n, 4, 0, e["\u0275inlineInterpolate"](1, "tel:", u.exchangeSetting.phone, "")),
              l(n, 5, 0, u.exchangeSetting.phone)
          })
      }
      function ql(l) {
          return e["\u0275vid"](0, [(l()(),
          e["\u0275eld"](0, 0, null, null, 5, "dl", [], null, null, null, null, null)), (l()(),
          e["\u0275eld"](1, 0, null, null, 1, "dt", [], null, null, null, null, null)), (l()(),
          e["\u0275ted"](-1, null, ["WhatsApp"])), (l()(),
          e["\u0275eld"](3, 0, null, null, 2, "dd", [], null, null, null, null, null)), (l()(),
          e["\u0275eld"](4, 0, null, null, 1, "a", [], [[8, "href", 4]], null, null, null, null)), (l()(),
          e["\u0275ted"](5, null, ["+", ""]))], null, function(l, n) {
              var u = n.component;
              l(n, 4, 0, e["\u0275inlineInterpolate"](1, "https://api.whatsapp.com/send?phone=", u.exchangeSetting.whatsapp, "")),
              l(n, 5, 0, u.exchangeSetting.whatsapp)
          })
      }
      function Al(l) {
          return e["\u0275vid"](0, [(l()(),
          e["\u0275eld"](0, 0, null, null, 5, "dl", [], null, null, null, null, null)), (l()(),
          e["\u0275eld"](1, 0, null, null, 1, "dt", [], null, null, null, null, null)), (l()(),
          e["\u0275ted"](-1, null, ["Telegram"])), (l()(),
          e["\u0275eld"](3, 0, null, null, 2, "dd", [], null, null, null, null, null)), (l()(),
          e["\u0275eld"](4, 0, null, null, 1, "a", [], [[8, "href", 4]], null, null, null, null)), (l()(),
          e["\u0275ted"](5, null, ["", ""]))], null, function(l, n) {
              var u = n.component;
              l(n, 4, 0, e["\u0275inlineInterpolate"](1, "https://", u.exchangeSetting.telegram, "")),
              l(n, 5, 0, u.exchangeSetting.telegram)
          })
      }
      function Gl(l) {
          return e["\u0275vid"](0, [(l()(),
          e["\u0275eld"](0, 0, null, null, 11, "dl", [["class", "support-wrap-mobile"]], null, null, null, null, null)), (l()(),
          e["\u0275eld"](1, 0, null, null, 1, "dt", [], null, null, null, null, null)), (l()(),
          e["\u0275ted"](-1, null, ["Support"])), (l()(),
          e["\u0275eld"](3, 0, null, null, 8, "dd", [], null, null, null, null, null)), (l()(),
          e["\u0275and"](16777216, null, null, 1, null, Fl)), e["\u0275did"](5, 16384, null, 0, d.NgIf, [e.ViewContainerRef, e.TemplateRef], {
              ngIf: [0, "ngIf"]
          }, null), (l()(),
          e["\u0275and"](16777216, null, null, 1, null, Ul)), e["\u0275did"](7, 16384, null, 0, d.NgIf, [e.ViewContainerRef, e.TemplateRef], {
              ngIf: [0, "ngIf"]
          }, null), (l()(),
          e["\u0275and"](16777216, null, null, 1, null, ql)), e["\u0275did"](9, 16384, null, 0, d.NgIf, [e.ViewContainerRef, e.TemplateRef], {
              ngIf: [0, "ngIf"]
          }, null), (l()(),
          e["\u0275and"](16777216, null, null, 1, null, Al)), e["\u0275did"](11, 16384, null, 0, d.NgIf, [e.ViewContainerRef, e.TemplateRef], {
              ngIf: [0, "ngIf"]
          }, null)], function(l, n) {
              var u = n.component;
              l(n, 5, 0, u.exchangeSetting.email),
              l(n, 7, 0, u.exchangeSetting.phone),
              l(n, 9, 0, u.exchangeSetting.whatsapp),
              l(n, 11, 0, u.exchangeSetting.telegram)
          }, null)
      }
      function _l(l) {
          return e["\u0275vid"](0, [(l()(),
          e["\u0275eld"](0, 0, null, null, 11, "div", [["class", "support-wrap"]], null, null, null, null, null)), (l()(),
          e["\u0275eld"](1, 0, null, null, 10, "dl", [["class", "support-mail"]], null, null, null, null, null)), (l()(),
          e["\u0275eld"](2, 0, null, null, 1, "a", [["class", "rules-btn-home"]], null, [[null, "click"]], function(l, n, u) {
              var t = !0;
              return "click" === n && (t = !1 !== l.component.openGeneralRules(e["\u0275nov"](l.parent, 121), "PP") && t),
              t
          }, null, null)), (l()(),
          e["\u0275ted"](-1, null, ["Privacy Policy"])), (l()(),
          e["\u0275eld"](4, 0, null, null, 1, "a", [["class", "rules-btn-home arrow"]], null, [[null, "click"]], function(l, n, u) {
              var t = !0;
              return "click" === n && (t = !1 !== l.component.openGeneralRules(e["\u0275nov"](l.parent, 121), "RR") && t),
              t
          }, null, null)), (l()(),
          e["\u0275ted"](-1, null, ["Rules and Regulations"])), (l()(),
          e["\u0275eld"](6, 0, null, null, 1, "a", [["class", "rules-btn-home arrow"]], null, [[null, "click"]], function(l, n, u) {
              var t = !0;
              return "click" === n && (t = !1 !== l.component.openGeneralRules(e["\u0275nov"](l.parent, 121), "KYC") && t),
              t
          }, null, null)), (l()(),
          e["\u0275ted"](-1, null, ["KYC"])), (l()(),
          e["\u0275eld"](8, 0, null, null, 1, "a", [["class", "rules-btn-home arrow"]], null, [[null, "click"]], function(l, n, u) {
              var t = !0;
              return "click" === n && (t = !1 !== l.component.openGeneralRules(e["\u0275nov"](l.parent, 121), "TC") && t),
              t
          }, null, null)), (l()(),
          e["\u0275ted"](-1, null, ["Terms and Conditions"])), (l()(),
          e["\u0275eld"](10, 0, null, null, 1, "a", [["class", "rules-btn-home arrow"]], null, [[null, "click"]], function(l, n, u) {
              var t = !0;
              return "click" === n && (t = !1 !== l.component.openGeneralRules(e["\u0275nov"](l.parent, 121), "RG") && t),
              t
          }, null, null)), (l()(),
          e["\u0275ted"](-1, null, ["Responsible Gambling"]))], null, null)
      }
      function Kl(l) {
          return e["\u0275vid"](0, [(l()(),
          e["\u0275eld"](0, 0, null, null, 2, "div", [["class", "appdl-link-android"], ["style", "display:block;"]], null, null, null, null, null)), (l()(),
          e["\u0275eld"](1, 0, null, null, 1, "a", [["target", "_blank"]], null, [[null, "click"]], function(l, n, u) {
              var e = !0;
              return "click" === n && (e = !1 !== l.component.iosapp() && e),
              e
          }, null, null)), (l()(),
          e["\u0275eld"](2, 0, null, null, 0, "img", [["alt", ""], ["src", "../../../assets/img/apple-ios.png"]], null, null, null, null, null))], null, null)
      }
      function jl(l) {
          return e["\u0275vid"](0, [(l()(),
          e["\u0275eld"](0, 0, null, null, 2, "div", [["class", "appdl-link-android ml-2"], ["style", "display:block;"]], null, null, null, null, null)), (l()(),
          e["\u0275eld"](1, 0, null, null, 1, "a", [["target", "_blank"]], [[8, "href", 4]], null, null, null, null)), (l()(),
          e["\u0275eld"](2, 0, null, null, 0, "img", [["alt", ""], ["src", "../../../assets/img/androidapk.png"]], null, null, null, null, null))], null, function(l, n) {
              l(n, 1, 0, e["\u0275inlineInterpolate"](1, "https://t20exchange.com/download/", n.component.exchangeSetting.appDownloadName, ".apk"))
          })
      }
      function Yl(l) {
          return e["\u0275vid"](0, [(l()(),
          e["\u0275eld"](0, 0, null, null, 4, "div", [["class", "extra-wrap"]], null, null, null, null, null)), (l()(),
          e["\u0275and"](16777216, null, null, 1, null, Kl)), e["\u0275did"](2, 16384, null, 0, d.NgIf, [e.ViewContainerRef, e.TemplateRef], {
              ngIf: [0, "ngIf"]
          }, null), (l()(),
          e["\u0275and"](16777216, null, null, 1, null, jl)), e["\u0275did"](4, 16384, null, 0, d.NgIf, [e.ViewContainerRef, e.TemplateRef], {
              ngIf: [0, "ngIf"]
          }, null)], function(l, n) {
              var u = n.component;
              l(n, 2, 0, u.iphone),
              l(n, 4, 0, u.androidPhone)
          }, null)
      }
      function Bl(l) {
          return e["\u0275vid"](0, [(l()(),
          e["\u0275eld"](0, 0, null, null, 6, "div", [["class", "modal-content rules-wrap"]], null, null, null, null, null)), (l()(),
          e["\u0275eld"](1, 0, null, null, 1, "div", [["class", "rules-content"]], null, null, null, null, null)), (l()(),
          e["\u0275eld"](2, 0, null, null, 0, "div", [], [[8, "innerHTML", 1]], null, null, null, null)), (l()(),
          e["\u0275eld"](3, 0, null, null, 3, "ul", [["class", "btn-wrap break"]], null, null, null, null, null)), (l()(),
          e["\u0275eld"](4, 0, null, null, 2, "li", [], null, null, null, null, null)), (l()(),
          e["\u0275eld"](5, 0, null, null, 1, "a", [["class", "btnok"]], null, [[null, "click"]], function(l, n, u) {
              var e = !0;
              return "click" === n && (e = !1 !== l.component.decline() && e),
              e
          }, null, null)), (l()(),
          e["\u0275ted"](-1, null, ["OK"]))], null, function(l, n) {
              l(n, 2, 0, n.component.generalRules)
          })
      }
      function zl(l) {
          return e["\u0275vid"](0, [(l()(),
          e["\u0275eld"](0, 0, null, null, 21, "div", [["class", "mobile-eventsearch"]], null, null, null, null, null)), (l()(),
          e["\u0275eld"](1, 0, null, null, 20, "div", [["class", "input-group"]], null, null, null, null, null)), (l()(),
          e["\u0275eld"](2, 0, null, null, 19, "ng-select", [["class", "w-100 ng-select"], ["name", "SearchEvent"], ["placeholder", "Search Events"], ["role", "listbox"]], [[2, "ng-select-single", null], [2, "ng-select-typeahead", null], [2, "ng-select-multiple", null], [2, "ng-select-taggable", null], [2, "ng-select-searchable", null], [2, "ng-select-clearable", null], [2, "ng-select-opened", null], [2, "ng-select-disabled", null], [2, "ng-select-filtered", null], [2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], [[null, "ngModelChange"], [null, "change"], [null, "keydown"]], function(l, n, u) {
              var t = !0
                , i = l.component;
              return "keydown" === n && (t = !1 !== e["\u0275nov"](l, 3).handleKeyDown(u) && t),
              "ngModelChange" === n && (t = !1 !== (i.selectedEventId = u) && t),
              "change" === n && (t = !1 !== i.eventSelected() && t),
              t
          }, a.c, a.a)), e["\u0275did"](3, 4964352, null, 12, c.a, [[8, "w-100"], [8, null], [8, null], c.b, c.d, e.ElementRef, e.ChangeDetectorRef, c.j], {
              placeholder: [0, "placeholder"]
          }, {
              changeEvent: "change"
          }), e["\u0275qud"](335544320, 1, {
              optionTemplate: 0
          }), e["\u0275qud"](335544320, 2, {
              optgroupTemplate: 0
          }), e["\u0275qud"](335544320, 3, {
              labelTemplate: 0
          }), e["\u0275qud"](335544320, 4, {
              multiLabelTemplate: 0
          }), e["\u0275qud"](335544320, 5, {
              headerTemplate: 0
          }), e["\u0275qud"](335544320, 6, {
              footerTemplate: 0
          }), e["\u0275qud"](335544320, 7, {
              notFoundTemplate: 0
          }), e["\u0275qud"](335544320, 8, {
              typeToSearchTemplate: 0
          }), e["\u0275qud"](335544320, 9, {
              loadingTextTemplate: 0
          }), e["\u0275qud"](335544320, 10, {
              tagTemplate: 0
          }), e["\u0275qud"](335544320, 11, {
              loadingSpinnerTemplate: 0
          }), e["\u0275qud"](603979776, 12, {
              ngOptions: 1
          }), e["\u0275prd"](1024, null, r.l, function(l) {
              return [l]
          }, [c.a]), e["\u0275did"](17, 671744, null, 0, r.q, [[8, null], [8, null], [8, null], [6, r.l]], {
              name: [0, "name"],
              model: [1, "model"]
          }, {
              update: "ngModelChange"
          }), e["\u0275prd"](2048, null, r.m, null, [r.q]), e["\u0275did"](19, 16384, null, 0, r.n, [[4, r.m]], null, null), (l()(),
          e["\u0275and"](16777216, null, null, 1, null, S)), e["\u0275did"](21, 278528, null, 0, d.NgForOf, [e.ViewContainerRef, e.TemplateRef, e.IterableDiffers], {
              ngForOf: [0, "ngForOf"]
          }, null), (l()(),
          e["\u0275eld"](22, 0, null, null, 0, "div", [["class", "overlay-event"]], null, null, null, null, null)), (l()(),
          e["\u0275eld"](23, 0, null, null, 97, "div", [["class", "animated fadeIn hideevent-search"]], null, null, null, null, null)), (l()(),
          e["\u0275eld"](24, 0, null, null, 96, "div", [["class", "row"]], null, null, null, null, null)), (l()(),
          e["\u0275and"](16777216, null, null, 1, null, w)), e["\u0275did"](26, 16384, null, 0, d.NgIf, [e.ViewContainerRef, e.TemplateRef], {
              ngIf: [0, "ngIf"]
          }, null), (l()(),
          e["\u0275eld"](27, 0, null, null, 4, "div", [["class", "col-md-12 mobile-display-view"]], null, null, null, null, null)), (l()(),
          e["\u0275eld"](28, 0, null, null, 3, "div", [["class", "sport-img mb-21234"], ["style", "position: relative;"]], null, null, null, null, null)), (l()(),
          e["\u0275and"](16777216, null, null, 1, null, D)), e["\u0275did"](30, 16384, null, 0, d.NgIf, [e.ViewContainerRef, e.TemplateRef], {
              ngIf: [0, "ngIf"]
          }, null), (l()(),
          e["\u0275eld"](31, 0, null, null, 0, "div", [["class", "promo-banner-loading"]], null, null, null, null, null)), (l()(),
          e["\u0275and"](16777216, null, null, 1, null, V)), e["\u0275did"](33, 16384, null, 0, d.NgIf, [e.ViewContainerRef, e.TemplateRef], {
              ngIf: [0, "ngIf"]
          }, null), (l()(),
          e["\u0275eld"](34, 0, null, null, 73, "div", [["class", "col-md-12 mobile-display-view"]], null, null, null, null, null)), (l()(),
          e["\u0275eld"](35, 0, null, null, 72, "div", [["class", "game-highlight-wrap"]], null, null, null, null, null)), (l()(),
          e["\u0275eld"](36, 0, null, null, 1, "h3", [], null, null, null, null, null)), (l()(),
          e["\u0275ted"](-1, null, ["Highlights"])), (l()(),
          e["\u0275eld"](38, 0, null, null, 59, "tabset", [["class", "game-menu-tab hidden-xs homeevent"]], [[2, "tab-container", null]], null, null, p.b, p.a)), e["\u0275did"](39, 180224, null, 0, g.e, [g.f, e.Renderer2], null, null), (l()(),
          e["\u0275eld"](40, 0, null, 0, 18, "tab", [["heading", "Cricket"]], [[1, "id", 0], [2, "active", null], [2, "tab-pane", null]], [[null, "select"]], function(l, n, u) {
              var e = !0;
              return "select" === n && (e = !1 !== l.component.getDataSportUnique(4) && e),
              e
          }, null, null)), e["\u0275did"](41, 212992, null, 0, g.b, [g.e, e.ElementRef, e.Renderer2], {
              heading: [0, "heading"]
          }, {
              select: "select"
          }), (l()(),
          e["\u0275eld"](42, 0, null, null, 16, "div", [["class", "row"]], null, null, null, null, null)), (l()(),
          e["\u0275eld"](43, 0, null, null, 15, "div", [["class", "col-md-12 mobile-width"]], null, null, null, null, null)), (l()(),
          e["\u0275eld"](44, 0, null, null, 14, "table", [["class", "table table-hover"]], null, null, null, null, null)), (l()(),
          e["\u0275eld"](45, 0, null, null, 8, "thead", [], null, null, null, null, null)), (l()(),
          e["\u0275eld"](46, 0, null, null, 0, "th", [["class", "view-mobile"], ["colspan", "2"]], null, null, null, null, null)), (l()(),
          e["\u0275eld"](47, 0, null, null, 1, "th", [["class", "text-center"]], null, null, null, null, null)), (l()(),
          e["\u0275ted"](-1, null, ["1"])), (l()(),
          e["\u0275eld"](49, 0, null, null, 1, "th", [["class", "text-center"]], null, null, null, null, null)), (l()(),
          e["\u0275ted"](-1, null, ["X"])), (l()(),
          e["\u0275eld"](51, 0, null, null, 1, "th", [["class", "text-center"]], null, null, null, null, null)), (l()(),
          e["\u0275ted"](-1, null, ["2"])), (l()(),
          e["\u0275eld"](53, 0, null, null, 0, "th", [["class", "text-center"]], null, null, null, null, null)), (l()(),
          e["\u0275eld"](54, 0, null, null, 4, "tbody", [], null, null, null, null, null)), (l()(),
          e["\u0275and"](16777216, null, null, 1, null, Y)), e["\u0275did"](56, 278528, null, 0, d.NgForOf, [e.ViewContainerRef, e.TemplateRef, e.IterableDiffers], {
              ngForOf: [0, "ngForOf"]
          }, null), (l()(),
          e["\u0275and"](16777216, null, null, 1, null, B)), e["\u0275did"](58, 16384, null, 0, d.NgIf, [e.ViewContainerRef, e.TemplateRef], {
              ngIf: [0, "ngIf"]
          }, null), (l()(),
          e["\u0275eld"](59, 0, null, 0, 19, "tab", [["heading", "Soccer"]], [[1, "id", 0], [2, "active", null], [2, "tab-pane", null]], [[null, "select"]], function(l, n, u) {
              var e = !0;
              return "select" === n && (e = !1 !== l.component.getDataSportUnique(1) && e),
              e
          }, null, null)), e["\u0275did"](60, 212992, null, 0, g.b, [g.e, e.ElementRef, e.Renderer2], {
              heading: [0, "heading"]
          }, {
              select: "select"
          }), (l()(),
          e["\u0275eld"](61, 0, null, null, 17, "div", [["class", "row"]], null, null, null, null, null)), (l()(),
          e["\u0275eld"](62, 0, null, null, 16, "div", [["class", "col-md-12 mobile-width"]], null, null, null, null, null)), (l()(),
          e["\u0275eld"](63, 0, null, null, 15, "div", [["class", "table-responsive"]], null, null, null, null, null)), (l()(),
          e["\u0275eld"](64, 0, null, null, 14, "table", [["class", "table table-hover"]], null, null, null, null, null)), (l()(),
          e["\u0275eld"](65, 0, null, null, 8, "thead", [], null, null, null, null, null)), (l()(),
          e["\u0275eld"](66, 0, null, null, 0, "th", [["class", "view-mobile"], ["colspan", "2"]], null, null, null, null, null)), (l()(),
          e["\u0275eld"](67, 0, null, null, 1, "th", [["class", "text-center"]], null, null, null, null, null)), (l()(),
          e["\u0275ted"](-1, null, ["1"])), (l()(),
          e["\u0275eld"](69, 0, null, null, 1, "th", [["class", "text-center"]], null, null, null, null, null)), (l()(),
          e["\u0275ted"](-1, null, ["X"])), (l()(),
          e["\u0275eld"](71, 0, null, null, 1, "th", [["class", "text-center"]], null, null, null, null, null)), (l()(),
          e["\u0275ted"](-1, null, ["2"])), (l()(),
          e["\u0275eld"](73, 0, null, null, 0, "th", [["class", "text-center"]], null, null, null, null, null)), (l()(),
          e["\u0275eld"](74, 0, null, null, 4, "tbody", [], null, null, null, null, null)), (l()(),
          e["\u0275and"](16777216, null, null, 1, null, al)), e["\u0275did"](76, 278528, null, 0, d.NgForOf, [e.ViewContainerRef, e.TemplateRef, e.IterableDiffers], {
              ngForOf: [0, "ngForOf"]
          }, null), (l()(),
          e["\u0275and"](16777216, null, null, 1, null, cl)), e["\u0275did"](78, 16384, null, 0, d.NgIf, [e.ViewContainerRef, e.TemplateRef], {
              ngIf: [0, "ngIf"]
          }, null), (l()(),
          e["\u0275eld"](79, 0, null, 0, 18, "tab", [["heading", "Tennis"]], [[1, "id", 0], [2, "active", null], [2, "tab-pane", null]], [[null, "select"]], function(l, n, u) {
              var e = !0;
              return "select" === n && (e = !1 !== l.component.getDataSportUnique(2) && e),
              e
          }, null, null)), e["\u0275did"](80, 212992, null, 0, g.b, [g.e, e.ElementRef, e.Renderer2], {
              heading: [0, "heading"]
          }, {
              select: "select"
          }), (l()(),
          e["\u0275eld"](81, 0, null, null, 16, "div", [["class", "row"]], null, null, null, null, null)), (l()(),
          e["\u0275eld"](82, 0, null, null, 15, "div", [["class", "col-md-12 mobile-width"]], null, null, null, null, null)), (l()(),
          e["\u0275eld"](83, 0, null, null, 14, "table", [["class", "table table-hover"]], null, null, null, null, null)), (l()(),
          e["\u0275eld"](84, 0, null, null, 8, "thead", [], null, null, null, null, null)), (l()(),
          e["\u0275eld"](85, 0, null, null, 0, "th", [["class", "view-mobile"], ["colspan", "2"]], null, null, null, null, null)), (l()(),
          e["\u0275eld"](86, 0, null, null, 1, "th", [["class", "text-center"]], null, null, null, null, null)), (l()(),
          e["\u0275ted"](-1, null, ["1"])), (l()(),
          e["\u0275eld"](88, 0, null, null, 1, "th", [["class", "text-center"]], null, null, null, null, null)), (l()(),
          e["\u0275ted"](-1, null, ["X"])), (l()(),
          e["\u0275eld"](90, 0, null, null, 1, "th", [["class", "text-center"]], null, null, null, null, null)), (l()(),
          e["\u0275ted"](-1, null, ["2"])), (l()(),
          e["\u0275eld"](92, 0, null, null, 0, "th", [["class", "text-center"]], null, null, null, null, null)), (l()(),
          e["\u0275eld"](93, 0, null, null, 4, "tbody", [], null, null, null, null, null)), (l()(),
          e["\u0275and"](16777216, null, null, 1, null, bl)), e["\u0275did"](95, 278528, null, 0, d.NgForOf, [e.ViewContainerRef, e.TemplateRef, e.IterableDiffers], {
              ngForOf: [0, "ngForOf"]
          }, null), (l()(),
          e["\u0275and"](16777216, null, null, 1, null, kl)), e["\u0275did"](97, 16384, null, 0, d.NgIf, [e.ViewContainerRef, e.TemplateRef], {
              ngIf: [0, "ngIf"]
          }, null), (l()(),
          e["\u0275eld"](98, 0, null, null, 9, "div", [["class", "events-mobile"]], null, null, null, null, null)), (l()(),
          e["\u0275eld"](99, 0, null, null, 8, "div", [["class", "row"]], null, null, null, null, null)), (l()(),
          e["\u0275eld"](100, 0, null, null, 7, "div", [["class", "col-md-12 mobile-width"]], null, null, null, null, null)), (l()(),
          e["\u0275eld"](101, 0, null, null, 6, "div", [["class", "table-responsive tbl-mobile-event"]], null, null, null, null, null)), (l()(),
          e["\u0275eld"](102, 0, null, null, 5, "table", [["class", "table table-hover"]], null, null, null, null, null)), (l()(),
          e["\u0275eld"](103, 0, null, null, 4, "tbody", [], null, null, null, null, null)), (l()(),
          e["\u0275and"](16777216, null, null, 1, null, Dl)), e["\u0275did"](105, 278528, null, 0, d.NgForOf, [e.ViewContainerRef, e.TemplateRef, e.IterableDiffers], {
              ngForOf: [0, "ngForOf"]
          }, null), (l()(),
          e["\u0275and"](16777216, null, null, 1, null, Nl)), e["\u0275did"](107, 16384, null, 0, d.NgIf, [e.ViewContainerRef, e.TemplateRef], {
              ngIf: [0, "ngIf"]
          }, null), (l()(),
          e["\u0275eld"](108, 0, null, null, 5, "div", [["class", "col-md-12"]], null, null, null, null, null)), (l()(),
          e["\u0275eld"](109, 0, null, null, 4, "div", [["class", "inner-footer"]], null, null, null, null, null)), (l()(),
          e["\u0275and"](16777216, null, null, 1, null, Ll)), e["\u0275did"](111, 16384, null, 0, d.NgIf, [e.ViewContainerRef, e.TemplateRef], {
              ngIf: [0, "ngIf"]
          }, null), (l()(),
          e["\u0275and"](16777216, null, null, 1, null, Ol)), e["\u0275did"](113, 16384, null, 0, d.NgIf, [e.ViewContainerRef, e.TemplateRef], {
              ngIf: [0, "ngIf"]
          }, null), (l()(),
          e["\u0275eld"](114, 0, null, null, 6, "div", [["class", "mobile-footer"]], null, null, null, null, null)), (l()(),
          e["\u0275and"](16777216, null, null, 1, null, Gl)), e["\u0275did"](116, 16384, null, 0, d.NgIf, [e.ViewContainerRef, e.TemplateRef], {
              ngIf: [0, "ngIf"]
          }, null), (l()(),
          e["\u0275and"](16777216, null, null, 1, null, _l)), e["\u0275did"](118, 16384, null, 0, d.NgIf, [e.ViewContainerRef, e.TemplateRef], {
              ngIf: [0, "ngIf"]
          }, null), (l()(),
          e["\u0275and"](16777216, null, null, 1, null, Yl)), e["\u0275did"](120, 16384, null, 0, d.NgIf, [e.ViewContainerRef, e.TemplateRef], {
              ngIf: [0, "ngIf"]
          }, null), (l()(),
          e["\u0275and"](0, [["templateRules", 2]], null, 0, null, Bl))], function(l, n) {
              var u = n.component;
              l(n, 3, 0, "Search Events"),
              l(n, 17, 0, "SearchEvent", u.selectedEventId),
              l(n, 21, 0, u.eventsList),
              l(n, 26, 0, u.news),
              l(n, 30, 0, (null == u.mySlideImages ? null : u.mySlideImages.length) > 0),
              l(n, 33, 0, u.sportListNavigation),
              l(n, 41, 0, "Cricket"),
              l(n, 56, 0, u.cricketData),
              l(n, 58, 0, 0 == (null == u.cricketData ? null : u.cricketData.length)),
              l(n, 60, 0, "Soccer"),
              l(n, 76, 0, u.soccerData),
              l(n, 78, 0, 0 == (null == u.soccerData ? null : u.soccerData.length)),
              l(n, 80, 0, "Tennis"),
              l(n, 95, 0, u.tennisData),
              l(n, 97, 0, 0 == (null == u.tennisData ? null : u.tennisData.length)),
              l(n, 105, 0, u.marketList),
              l(n, 107, 0, 0 == (null == u.marketList ? null : u.marketList.length)),
              l(n, 111, 0, u.exchangeSetting.isSupport && "USER" != u.userRole),
              l(n, 113, 0, u.exchangeSetting.isRules),
              l(n, 116, 0, u.exchangeSetting.isSupport && "USER" != u.userRole),
              l(n, 118, 0, u.exchangeSetting.isRules),
              l(n, 120, 0, !u.userRole && u.exchangeSetting.isApplicationShow)
          }, function(l, n) {
              l(n, 2, 1, [!e["\u0275nov"](n, 3).multiple, e["\u0275nov"](n, 3).typeahead, e["\u0275nov"](n, 3).multiple, e["\u0275nov"](n, 3).addTag, e["\u0275nov"](n, 3).searchable, e["\u0275nov"](n, 3).clearable, e["\u0275nov"](n, 3).isOpen, e["\u0275nov"](n, 3).disabled, e["\u0275nov"](n, 3).filtered, e["\u0275nov"](n, 19).ngClassUntouched, e["\u0275nov"](n, 19).ngClassTouched, e["\u0275nov"](n, 19).ngClassPristine, e["\u0275nov"](n, 19).ngClassDirty, e["\u0275nov"](n, 19).ngClassValid, e["\u0275nov"](n, 19).ngClassInvalid, e["\u0275nov"](n, 19).ngClassPending]),
              l(n, 38, 0, e["\u0275nov"](n, 39).clazz),
              l(n, 40, 0, e["\u0275nov"](n, 41).id, e["\u0275nov"](n, 41).active, e["\u0275nov"](n, 41).addClass),
              l(n, 59, 0, e["\u0275nov"](n, 60).id, e["\u0275nov"](n, 60).active, e["\u0275nov"](n, 60).addClass),
              l(n, 79, 0, e["\u0275nov"](n, 80).id, e["\u0275nov"](n, 80).active, e["\u0275nov"](n, 80).addClass)
          })
      }
      function Wl(l) {
          return e["\u0275vid"](0, [(l()(),
          e["\u0275eld"](0, 0, null, null, 1, "ng-component", [], null, null, null, zl, y)), e["\u0275did"](1, 245760, null, 0, I, [m.a, R.a, x.a, b.l, k.a], null, null)], function(l, n) {
              l(n, 1, 0)
          }, null)
      }
      var Jl = e["\u0275ccf"]("ng-component", I, Wl, {}, {}, [])
        , Zl = u("iutN")
        , Hl = function() {
          return function() {}
      }()
        , Ql = u("bjCr")
        , Xl = u("xtZt")
        , ln = u("9EwZ");
      u.d(n, "DashboardModuleNgFactory", function() {
          return nn
      });
      var nn = e["\u0275cmf"](t, [], function(l) {
          return e["\u0275mod"]([e["\u0275mpd"](512, e.ComponentFactoryResolver, e["\u0275CodegenComponentFactoryResolver"], [[8, [i.a, Jl, Zl.a]], [3, e.ComponentFactoryResolver], e.NgModuleRef]), e["\u0275mpd"](4608, r.A, r.A, []), e["\u0275mpd"](4608, d.NgLocalization, d.NgLocaleLocalization, [e.LOCALE_ID, [2, d["\u0275angular_packages_common_common_a"]]]), e["\u0275mpd"](1073742336, r.x, r.x, []), e["\u0275mpd"](1073742336, r.j, r.j, []), e["\u0275mpd"](1073742336, b.p, b.p, [[2, b.v], [2, b.l]]), e["\u0275mpd"](1073742336, Hl, Hl, []), e["\u0275mpd"](1073742336, d.CommonModule, d.CommonModule, []), e["\u0275mpd"](1073742336, c.c, c.c, []), e["\u0275mpd"](1073742336, Ql.OwlModule, Ql.OwlModule, []), e["\u0275mpd"](1073742336, Xl.e, Xl.e, []), e["\u0275mpd"](1073742336, g.d, g.d, []), e["\u0275mpd"](1073742336, ln.a, ln.a, []), e["\u0275mpd"](1073742336, t, t, []), e["\u0275mpd"](1024, b.j, function() {
              return [[{
                  path: "",
                  component: I
              }]]
          }, []), e["\u0275mpd"](256, c.d, c.e, [])])
      })
  }
}]);
