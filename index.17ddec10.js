!function(){function e(e){return e&&e.__esModule?e.default:e}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},r={},o=t.parcelRequired7c6;null==o&&((o=function(e){if(e in n)return n[e].exports;if(e in r){var t=r[e];delete r[e];var o={id:e,exports:{}};return n[e]=o,t.call(o.exports,o,o.exports),o.exports}var a=new Error("Cannot find module '"+e+"'");throw a.code="MODULE_NOT_FOUND",a}).register=function(e,t){r[e]=t},t.parcelRequired7c6=o),o.register("bWgPh",(function(t,n){var r,a,i,l;r=t.exports,a="handlerLearnMore",i=function(){return O},Object.defineProperty(r,a,{get:i,set:l,enumerable:!0,configurable:!0});var c=o("bpxeT"),s=o("dDDEV"),d=o("2TvXO"),u=o("dIxxU"),y=o("2emMu"),p=o("4WCXd"),f=o("iBguk"),m=o("6ia3e"),v=o("2iLY8"),h="https://www.thecocktaildb.com/api/json/v1/1/random.php",g=document.querySelector(".div-icon-heart1"),b=document.querySelector(".div-icon-heart2"),k=document.querySelector(".div-icon-close"),S=g.href.baseVal,w=b.href.baseVal,L=k.href.baseVal,q=function(e){return u.default.get("".concat("https://www.thecocktaildb.com/api/json/v1/1/search.php","?s=").concat(e))},E=function(e){return u.default.get("".concat("https://www.thecocktaildb.com/api/json/v1/1/search.php","?i=").concat(e))};function x(){return(x=e(c)(e(d).mark((function t(n){var r,o,a,i,l,c,s,p,f,m,v,g,b,k,S,w,L,q,E;return e(d).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:r=[],window.innerWidth<768?(o=u.default.get(h),a=u.default.get(h),i=u.default.get(h),Promise.all([o,a,i]).then((function(e){r.push(e[0].data.drinks[0]),r.push(e[1].data.drinks[0]),r.push(e[2].data.drinks[0]);var t=(0,y.default)(r);_.cardsCaption.style.display="block",_.cardsContainerEl.innerHTML=t;var n=document.querySelectorAll(".card-btn__remove"),o=!0,a=!1,i=void 0;try{for(var l,c=n[Symbol.iterator]();!(o=(l=c.next()).done);o=!0){l.value.style.display="none"}}catch(e){a=!0,i=e}finally{try{o||null==c.return||c.return()}finally{if(a)throw i}}F()}))):window.innerWidth>=768&&window.innerWidth<1280?(l=u.default.get(h),c=u.default.get(h),s=u.default.get(h),p=u.default.get(h),f=u.default.get(h),m=u.default.get(h),Promise.all([l,c,s,p,f,m]).then((function(e){r.push(e[0].data.drinks[0]),r.push(e[1].data.drinks[0]),r.push(e[2].data.drinks[0]),r.push(e[3].data.drinks[0]),r.push(e[4].data.drinks[0]),r.push(e[5].data.drinks[0]);var t=(0,y.default)(r);_.cardsCaption.style.display="block",_.cardsContainerEl.innerHTML=t;var n=document.querySelectorAll(".card-btn__remove"),o=!0,a=!1,i=void 0;try{for(var l,c=n[Symbol.iterator]();!(o=(l=c.next()).done);o=!0){l.value.style.display="none"}}catch(e){a=!0,i=e}finally{try{o||null==c.return||c.return()}finally{if(a)throw i}}F()}))):window.innerWidth>=1280&&(v=u.default.get(h),g=u.default.get(h),b=u.default.get(h),k=u.default.get(h),S=u.default.get(h),w=u.default.get(h),L=u.default.get(h),q=u.default.get(h),E=u.default.get(h),Promise.all([v,g,b,k,S,w,L,q,E]).then((function(e){r.push(e[0].data.drinks[0]),r.push(e[1].data.drinks[0]),r.push(e[2].data.drinks[0]),r.push(e[3].data.drinks[0]),r.push(e[4].data.drinks[0]),r.push(e[5].data.drinks[0]),r.push(e[6].data.drinks[0]),r.push(e[7].data.drinks[0]),r.push(e[8].data.drinks[0]);var t=(0,y.default)(r);document.body.style.display="block",_.cardsCaption.style.display="block",_.cardsContainerEl.innerHTML=t;var n=document.querySelectorAll(".card-btn__remove"),o=!0,a=!1,i=void 0;try{for(var l,c=n[Symbol.iterator]();!(o=(l=c.next()).done);o=!0){l.value.style.display="none"}}catch(e){a=!0,i=e}finally{try{o||null==c.return||c.return()}finally{if(a)throw i}}F()})));case 2:case"end":return e.stop()}}),t)})))).apply(this,arguments)}window.addEventListener("load",(function(e){!function(e){x.apply(this,arguments)}(e)}));var _={menu:document.querySelector("[data-menu]"),formEl:document.querySelector(".search-form"),mobileFormEl:document.querySelector(".search-form-mobile"),siteFavoriteHeaderWrapper:document.querySelector(".site-nav-favorite-wrapper"),favoriteHeaderWrapper:document.querySelector(".favorite-wrapper"),mobileFavorite:document.querySelector(".mobile-favorite"),mobileFavorites:document.querySelector(".mobile-favorites"),iconArrow:document.querySelector(".mobile-arrow"),cardsContainerEl:document.querySelector(".cards-container"),cardsCaption:document.querySelector(".cards-title"),errorEl:document.querySelector(".not-found-markup"),modalIngr:document.querySelector(".modal-ingr"),paginationContainer:document.querySelector(".pagination-container"),paginationListContainer:document.querySelector(".pagination")};function C(e){return H.apply(this,arguments)}function H(){return H=e(c)(e(d).mark((function t(n){var r,o,a,i,l,c,s,u,p,f,m,v,h,g;return e(d).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return v=function(e,t,n){document.querySelector(".pagination-container").innerHTML="";var r=t*--n,o=r+t,a=e.slice(r,o);_.cardsContainerEl.innerHTML=(0,y.default)(a),F(),document.body.style.display="block";var i=document.querySelectorAll(".card-btn__remove"),l=!0,c=!1,s=void 0;try{for(var d,u=i[Symbol.iterator]();!(l=(d=u.next()).done);l=!0){d.value.style.display="none"}}catch(e){c=!0,s=e}finally{try{l||null==u.return||u.return()}finally{if(c)throw s}}a.forEach((function(e){document.createElement("div").innerHTML=e.strDrink}))},h=function(e,t){var n=document.querySelector(".pagination"),r=Math.ceil(e.length/t),o=document.createElement("ul");o.classList.add("pagination-list");for(var a=0;a<r;a++){var i=g(a+1);o.appendChild(i)}n.appendChild(o)},g=function(e){var t=document.createElement("li"),n=document.createElement("span");return n.classList.add("pagination-btn-page"),t.classList.add("pagination-btn"),t.appendChild(n),n.textContent=e,f===e&&t.classList.add("pagination-btn-active"),t.addEventListener("click",(function(){v(p,m,f=e),document.querySelector("li.pagination-btn-active").classList.remove("pagination-btn-active"),t.classList.add("pagination-btn-active")})),t},n.preventDefault(),n.target[0].classList.contains("mobile-btn-search")&&(_.menu.classList.toggle("is-open"),window.scrollTo({top:800,behavior:"smooth"})),_.paginationContainer.innerHTML="",_.paginationListContainer.innerHTML="",e.prev=7,r=n.target.drink.value,e.next=11,q(r);case 11:if(o=e.sent.data,console.log(o.drinks),null!==o.drinks){e.next=17;break}return _.cardsCaption.style.display="none",_.cardsContainerEl.innerHTML=_.errorEl.innerHTML,e.abrupt("return");case 17:for(_.cardsCaption.style.display="block",a=document.querySelectorAll(".card-btn__remove"),i=!0,l=!1,c=void 0,e.prev=20,s=a[Symbol.iterator]();!(i=(u=s.next()).done);i=!0)u.value.style.display="none";e.next=28;break;case 24:e.prev=24,e.t0=e.catch(20),l=!0,c=e.t0;case 28:e.prev=28,e.prev=29,i||null==s.return||s.return();case 31:if(e.prev=31,!l){e.next=34;break}throw c;case 34:return e.finish(31);case 35:return e.finish(28);case 36:p=o.drinks,f=1,window.innerWidth<768?m=3:window.innerWidth>=768&&window.innerWidth<1280?m=6:window.innerWidth>=1280&&(m=9),v(p,m,f),p.length>m&&h(p,m),e.next=50;break;case 47:e.prev=47,e.t1=e.catch(7),console.log(e.t1);case 50:case"end":return e.stop()}}),t,null,[[7,47],[20,24,28,36],[29,,31,35]])}))),H.apply(this,arguments)}_.favoriteHeaderWrapper.style.display="none",_.siteFavoriteHeaderWrapper.addEventListener("mouseover",(function(){_.favoriteHeaderWrapper.style.display="block"})),_.siteFavoriteHeaderWrapper.addEventListener("mouseout",(function(){_.favoriteHeaderWrapper.style.display="none"})),_.mobileFavorite.addEventListener("click",(function(){_.mobileFavorites.classList.toggle("hide-show"),_.iconArrow.classList.toggle("rotate180")})),_.errorEl.style.display="none",_.cardsCaption.style.display="none",_.formEl.addEventListener("submit",C),_.mobileFormEl.addEventListener("submit",C),_.cardsContainerEl.addEventListener("click",(function(e){return W.apply(this,arguments)})),_.cardsContainerEl.addEventListener("click",(function(e){var t=e.target.closest(".card");if(e.target.classList.contains("card-btn__remove")){T=T.filter((function(e){return e.idDrink!==t.id})),localStorage.setItem("favorites",JSON.stringify(T)),t.children[2].children[2].style.display="none",t.children[2].children[1].style.display="block"}})),_.cardsContainerEl.addEventListener("click",O);var T=[],M=[];function W(){return W=e(c)(e(d).mark((function t(n){var r,o,a,i;return e(d).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(r=n.target.closest(".card"),!n.target.classList.contains("card-btn__add")){t.next=15;break}return o=r.children[1].textContent,console.dir(r.children[1].textContent),t.next=6,q(o);case 6:a=t.sent.data,console.log(a.drinks[0]),i=e(s)({},a.drinks[0]),T.push(i),localStorage.setItem("favorites",JSON.stringify(T)),r.children[2].children[2].style.display="block",r.children[2].children[1].style.display="none";case 15:case"end":return t.stop()}}),t)}))),W.apply(this,arguments)}var I=document.querySelector(".modal-cocktail");function O(e){return N.apply(this,arguments)}function N(){return N=e(c)(e(d).mark((function t(n){var r,o,a,i,l,u,y,h,g,b,k,S,w;return e(d).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(r=n.target.closest(".card"),!n.target.classList.contains("card-btn__learn")){t.next=15;break}return o=r.children[1].textContent,t.next=5,q(o);case 5:for(u in a=t.sent.data,console.log(a),i=e(s)({},a.drinks[0]),l=[],i)u.includes("strIngredient")&&null!==i[u]&&l.push(i[u]);i.ingridients=l,y=[e(s)({},i)],console.log(i),console.log(window.innerWidth),window.innerWidth>768?(I.innerHTML=(0,f.default)(y),document.querySelector(".cocktail-icon-close").innerHTML='<use class="use-heart1" href=\''.concat(L,"'></use>"),document.querySelector(".cocktail-ingridients-list").addEventListener("click",function(){var t=e(c)(e(d).mark((function t(n){var r,o,a,i,l,c;return e(d).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if("LI"!==n.target.nodeName){t.next=19;break}return r=n.target.textContent,console.log(r),t.next=5,E(r);case 5:o=t.sent,console.log(o.data.ingredients[0]),a=[e(s)({},o.data.ingredients[0])],_.modalIngr.innerHTML=(0,m.default)(a),document.querySelector(".ingr-icon-close").innerHTML='<use class="use-heart1" href=\''.concat(L,"'></use>"),(i=document.querySelector(".ingr-backdrop")).classList.remove("is-hidden"),document.querySelector(".ingr-icon-close").addEventListener("click",(function(e){i.classList.add("is-hidden")})),l=document.querySelector(".ingr-btn__remove"),c=document.querySelector(".ingr-btn__add"),l.style.display="none",c.addEventListener("click",(function(){M.push(o.data.ingredients[0]),localStorage.setItem("ingridients",JSON.stringify(M)),c.style.display="none",l.style.display="block"})),l.addEventListener("click",(function(){M.pop(),localStorage.setItem("ingridients",JSON.stringify(M)),l.style.display="none",c.style.display="block"}));case 19:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()),(h=document.querySelector(".backdrop")).classList.remove("is-hidden"),document.body.style.overflow="hidden",g=document.querySelector(".tablet-btn-add"),(b=document.querySelector(".tablet-btn-remove")).style.display="none",g.addEventListener("click",(function(){T.push(a.drinks[0]),localStorage.setItem("favorites",JSON.stringify(T)),b.style.display="block",g.style.display="none"})),b.addEventListener("click",(function(){T.pop(),localStorage.setItem("favorites",JSON.stringify(T)),b.style.display="none",g.style.display="block"})),h.addEventListener("click",(function(e){e.target.classList.contains("backdrop")&&(h.classList.add("is-hidden"),document.body.style.overflow="auto")})),document.querySelector(".cocktail-icon-close").addEventListener("click",(function(){h.classList.add("is-hidden"),document.body.style.overflow="auto"}))):window.innerWidth<768&&(I.innerHTML=(0,p.default)(y),k=document.querySelector(".coctail"),console.log(k),document.querySelector(".mobile-icon-close").innerHTML='<use class="use-heart1" href=\''.concat(L,"'></use>"),document.body.style.overflow="hidden",document.querySelector(".cocktail-ingridients-list").addEventListener("click",function(){var t=e(c)(e(d).mark((function t(n){var r,o,a,i,l,c;return e(d).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if("LI"!==n.target.nodeName){t.next=20;break}return r=n.target.textContent,console.log(r),t.next=5,E(r);case 5:o=t.sent,console.log(o.data.ingredients[0]),a=[e(s)({},o.data.ingredients[0])],_.modalIngr.innerHTML=(0,v.default)(a),document.querySelector(".mobile-ingr-icon-close").innerHTML='<use class="use-heart1" href=\''.concat(L,"'></use>"),(i=document.querySelector(".ingr-backdrop")).classList.remove("is-hidden"),document.body.style.overflow="hidden",document.querySelector(".ingr-icon-close").addEventListener("click",(function(){i.classList.add("is-hidden"),document.body.style.overflow="auto"})),l=document.querySelector(".ingr-btn__remove"),c=document.querySelector(".ingr-btn__add"),l.style.display="none",c.addEventListener("click",(function(){M.push(o.data.ingredients[0]),localStorage.setItem("ingridients",JSON.stringify(M)),c.style.display="none",l.style.display="block"})),l.addEventListener("click",(function(){M.pop(),localStorage.setItem("ingridients",JSON.stringify(M)),l.style.display="none",c.style.display="block"}));case 20:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()),k.style.transform="translateX(0%)",document.querySelector(".mobile-icon-close").addEventListener("click",(function(){k.style.transform="translateX(-150%)",document.body.style.overflow="auto"})),S=document.querySelector(".modal-btn-add"),(w=document.querySelector(".modal-btn-remove")).style.display="none",S.addEventListener("click",(function(){console.log("me add"),T.push(a.drinks[0]),localStorage.setItem("favorites",JSON.stringify(T)),w.style.display="block",S.style.display="none"})),w.addEventListener("click",(function(){T.pop(),localStorage.setItem("favorites",JSON.stringify(T)),w.style.display="none",S.style.display="block"})));case 15:case"end":return t.stop()}}),t)}))),N.apply(this,arguments)}function F(){var e=document.querySelectorAll(".card-btn__add svg"),t=!0,n=!1,r=void 0;try{for(var o,a=e[Symbol.iterator]();!(t=(o=a.next()).done);t=!0){o.value.innerHTML='<use class="use-heart1" href=\''.concat(S,"'></use>")}}catch(e){n=!0,r=e}finally{try{t||null==a.return||a.return()}finally{if(n)throw r}}var i=document.querySelectorAll(".card-btn__remove svg"),l=!0,c=!1,s=void 0;try{for(var d,u=i[Symbol.iterator]();!(l=(d=u.next()).done);l=!0){d.value.innerHTML='<use class="use-heart1" href=\''.concat(w,"'></use>")}}catch(e){c=!0,s=e}finally{try{l||null==u.return||u.return()}finally{if(c)throw s}}}})),o("bWgPh")}();
//# sourceMappingURL=index.17ddec10.js.map
