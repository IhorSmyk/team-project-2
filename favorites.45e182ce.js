!function(){function e(e){return e&&e.__esModule?e.default:e}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},r={},o=t.parcelRequired7c6;null==o&&((o=function(e){if(e in n)return n[e].exports;if(e in r){var t=r[e];delete r[e];var o={id:e,exports:{}};return n[e]=o,t.call(o.exports,o,o.exports),o.exports}var i=new Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(e,t){r[e]=t},t.parcelRequired7c6=o);var i=o("bpxeT"),a=o("dDDEV"),l=o("2TvXO"),c=o("dIxxU"),d=o("2emMu"),s=e(o("7jKnM")).template({compiler:[8,">= 4.3.0"],main:function(e,t,n,r,o){return'<section class="no-cocktails section">\n\t<div class="no-cocktails-container container">\n\t\t<p class="no-cocktails-title">Favorite cocktails</p>\n\t\t<p class="no-cocktails-subtitle">You haven\'t added any favorite cocktails yet</p>\n\t</div>\n</section>'},useData:!0}),u=o("4WCXd"),y=o("iBguk"),f=o("6ia3e"),p=o("2iLY8"),v={mobileFavorite:document.querySelector(".mobile-favorite"),mobileFavorites:document.querySelector(".mobile-favorites"),iconArrow:document.querySelector(".mobile-arrow"),formEl:document.querySelector(".header-form"),cardsContainerEl:document.querySelector(".cards-container"),cardsCaption:document.querySelector(".cards-title"),modalIngr:document.querySelector(".modal-ingr"),siteFavoriteHeaderWrapper:document.querySelector(".site-nav-favorite-wrapper"),favoriteHeaderWrapper:document.querySelector(".favorite-wrapper")};v.favoriteHeaderWrapper.style.display="none",v.siteFavoriteHeaderWrapper.addEventListener("mouseover",(function(){v.favoriteHeaderWrapper.style.display="block"})),v.siteFavoriteHeaderWrapper.addEventListener("mouseout",(function(){v.favoriteHeaderWrapper.style.display="none"})),v.mobileFavorite.addEventListener("click",(function(){console.log("111"),v.mobileFavorites.classList.toggle("hide-show"),v.iconArrow.classList.toggle("rotate180")}));var m=function(e){return c.default.get("".concat("https://www.thecocktaildb.com/api/json/v1/1/search.php","?s=").concat(e))},g=function(e){return c.default.get("".concat("https://www.thecocktaildb.com/api/json/v1/1/search.php","?i=").concat(e))},S=[];v.cardsCaption.style.display="none",window.addEventListener("load",(function(){if(b&&0!==b.length){var e=(0,d.default)(b);v.cardsCaption.style.display="block",v.cardsContainerEl.innerHTML=e;var t=document.querySelectorAll(".card-btn__add"),n=!0,r=!1,o=void 0;try{for(var i,a=t[Symbol.iterator]();!(n=(i=a.next()).done);n=!0){i.value.style.display="none"}}catch(e){r=!0,o=e}finally{try{n||null==a.return||a.return()}finally{if(r)throw o}}}else v.cardsContainerEl.innerHTML=s()})),v.cardsContainerEl.addEventListener("click",(function(e){var t=e.target.closest(".card");if(e.target.classList.contains("card-btn__remove")){b=b.filter((function(e){return e.idDrink!==t.id})),localStorage.setItem("favorites",JSON.stringify(b)),t.children[2].children[2].style.display="none",t.children[2].children[1].style.display="block";var n=(0,d.default)(b);v.cardsContainerEl.innerHTML=n;var r=document.querySelectorAll(".card-btn__add"),o=!0,i=!1,a=void 0;try{for(var l,c=r[Symbol.iterator]();!(o=(l=c.next()).done);o=!0){l.value.style.display="none"}}catch(e){i=!0,a=e}finally{try{o||null==c.return||c.return()}finally{if(i)throw a}}if(0===b.length)return v.cardsCaption.style.display="none",void(v.cardsContainerEl.innerHTML=s())}})),v.cardsContainerEl.addEventListener("click",(function(e){return k.apply(this,arguments)}));var b=JSON.parse(localStorage.getItem("favorites"));var h=document.querySelector(".modal-cocktail");function k(){return k=e(i)(e(l).mark((function t(n){var r,o,c,b,k,L,w,E,q,_,x,C,I;return e(l).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(r=n.target.closest(".card"),!n.target.classList.contains("card-btn__learn")){t.next=14;break}return o=r.children[1].textContent,t.next=5,m(o);case 5:for(L in c=t.sent.data,console.log(c),b=e(a)({},c.drinks[0]),k=[],b)L.includes("strIngredient")&&null!==b[L]&&k.push(b[L]);b.ingridients=k,w=[e(a)({},b)],console.log(window.innerWidth),window.innerWidth>768?(h.innerHTML=(0,y.default)(w),document.querySelector(".cocktail-ingridients-list").addEventListener("click",function(){var t=e(i)(e(l).mark((function t(n){var r,o,i,c,d,s;return e(l).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if("LI"!==n.target.nodeName){t.next=18;break}return r=n.target.textContent,console.log(r),t.next=5,g(r);case 5:o=t.sent,console.log(o.data.ingredients[0]),i=[e(a)({},o.data.ingredients[0])],v.modalIngr.innerHTML=(0,f.default)(i),(c=document.querySelector(".ingr-backdrop")).classList.remove("is-hidden"),document.querySelector(".ingr-icon-close").addEventListener("click",(function(){c.classList.add("is-hidden")})),d=document.querySelector(".ingr-btn__remove"),s=document.querySelector(".ingr-btn__add"),d.style.display="none",s.addEventListener("click",(function(){S.push(o.data.ingredients[0]),localStorage.setItem("ingridients",JSON.stringify(S)),s.style.display="none",d.style.display="block"})),d.addEventListener("click",(function(){S.pop(),localStorage.setItem("ingridients",JSON.stringify(S)),d.style.display="none",s.style.display="block"}));case 18:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()),(E=document.querySelector(".backdrop")).classList.remove("is-hidden"),document.body.style.overflow="hidden",q=document.querySelector(".tablet-btn-add"),_=document.querySelector(".tablet-btn-remove"),q.style.display="none",q.addEventListener("click",(function(){var e=JSON.parse(localStorage.getItem("favorites"));e.push(c.drinks[0]),localStorage.setItem("favorites",JSON.stringify(e)),_.style.display="block",q.style.display="none",v.cardsContainerEl.innerHTML=(0,d.default)(e);var t=document.querySelectorAll(".card-btn__add"),n=!0,r=!1,o=void 0;try{for(var i,a=t[Symbol.iterator]();!(n=(i=a.next()).done);n=!0){i.value.style.display="none"}}catch(e){r=!0,o=e}finally{try{n||null==a.return||a.return()}finally{if(r)throw o}}})),_.addEventListener("click",(function(e){console.log("remove btn");var t=JSON.parse(localStorage.getItem("favorites"));t=t.filter((function(t){return t.idDrink!==e.target.id})),localStorage.setItem("favorites",JSON.stringify(t)),_.style.display="none",q.style.display="block",v.cardsContainerEl.innerHTML=(0,d.default)(t);var n=document.querySelectorAll(".card-btn__add"),r=!0,o=!1,i=void 0;try{for(var a,l=n[Symbol.iterator]();!(r=(a=l.next()).done);r=!0){a.value.style.display="none"}}catch(e){o=!0,i=e}finally{try{r||null==l.return||l.return()}finally{if(o)throw i}}t.length||(v.cardsContainerEl.innerHTML=s())})),E.addEventListener("click",(function(e){e.target.classList.contains("backdrop")&&(E.classList.add("is-hidden"),document.body.style.overflow="auto")})),document.querySelector(".cocktail-icon-close").addEventListener("click",(function(){E.classList.add("is-hidden"),document.body.style.overflow="auto"}))):window.innerWidth<768&&(h.innerHTML=(0,u.default)(w),x=document.querySelector(".coctail"),document.querySelector(".cocktail-ingridients-list").addEventListener("click",function(){var t=e(i)(e(l).mark((function t(n){var r,o,i,c,d,s;return e(l).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if("LI"!==n.target.nodeName){t.next=18;break}return r=n.target.textContent,console.log(r),t.next=5,g(r);case 5:o=t.sent,console.log(o.data.ingredients[0]),i=[e(a)({},o.data.ingredients[0])],v.modalIngr.innerHTML=(0,p.default)(i),(c=document.querySelector(".ingr-backdrop")).classList.remove("is-hidden"),document.querySelector(".ingr-icon-close").addEventListener("click",(function(){c.classList.add("is-hidden")})),d=document.querySelector(".ingr-btn__remove"),s=document.querySelector(".ingr-btn__add"),d.style.display="none",s.addEventListener("click",(function(){var e=JSON.parse(localStorage.getItem("ingridients"));e||(e=[]),e.push(o.data.ingredients[0]),localStorage.setItem("ingridients",JSON.stringify(e)),s.style.display="none",d.style.display="block"})),d.addEventListener("click",(function(){S.pop(),localStorage.setItem("ingridients",JSON.stringify(S)),d.style.display="none",s.style.display="block"}));case 18:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()),x.style.transform="translateX(0%)",document.querySelector(".mobile-icon-close").addEventListener("click",(function(){x.style.transform="translateX(-150%)"})),C=document.querySelector(".modal-btn-add"),I=document.querySelector(".modal-btn-remove"),C.style.display="none",C.addEventListener("click",(function(){var e=JSON.parse(localStorage.getItem("favorites"));e.push(c.drinks[0]),localStorage.setItem("favorites",JSON.stringify(e)),I.style.display="block",C.style.display="none",v.cardsContainerEl.innerHTML=(0,d.default)(e);var t=document.querySelectorAll(".card-btn__add"),n=!0,r=!1,o=void 0;try{for(var i,a=t[Symbol.iterator]();!(n=(i=a.next()).done);n=!0){i.value.style.display="none"}}catch(e){r=!0,o=e}finally{try{n||null==a.return||a.return()}finally{if(r)throw o}}})),I.addEventListener("click",(function(e){var t=JSON.parse(localStorage.getItem("favorites"));t=t.filter((function(t){return t.idDrink!==e.target.id})),localStorage.setItem("favorites",JSON.stringify(t)),I.style.display="none",C.style.display="block",v.cardsContainerEl.innerHTML=(0,d.default)(t);var n=document.querySelectorAll(".card-btn__add"),r=!0,o=!1,i=void 0;try{for(var a,l=n[Symbol.iterator]();!(r=(a=l.next()).done);r=!0){a.value.style.display="none"}}catch(e){o=!0,i=e}finally{try{r||null==l.return||l.return()}finally{if(o)throw i}}t.length||(v.cardsContainerEl.innerHTML=s())})));case 14:case"end":return t.stop()}}),t)}))),k.apply(this,arguments)}}();
//# sourceMappingURL=favorites.45e182ce.js.map