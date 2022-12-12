!function(){function e(e){return e&&e.__esModule?e.default:e}var n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},r={},i=n.parcelRequired7c6;null==i&&((i=function(e){if(e in t)return t[e].exports;if(e in r){var n=r[e];delete r[e];var i={id:e,exports:{}};return t[e]=i,n.call(i.exports,i,i.exports),i.exports}var o=new Error("Cannot find module '"+e+"'");throw o.code="MODULE_NOT_FOUND",o}).register=function(e,n){r[e]=n},n.parcelRequired7c6=i);var o=i("bpxeT"),a=i("dDDEV"),l=i("2TvXO"),s=i("dIxxU"),c=i("l5bVx"),d=e(i("7jKnM")).template({1:function(n,t,r,i,o){var a,l=null!=t?t:n.nullContext||{},s=n.hooks.helperMissing,d="function",u=n.escapeExpression,p=n.lookupProperty||function(e,n){if(Object.prototype.hasOwnProperty.call(e,n))return e[n]};return'<article class="ingridient">\n\t<p class="ingridient-card-title">'+u((void 0===(a=null!=(a=p(r,"strIngredient")||(null!=t?p(t,"strIngredient"):t))?a:s)?"undefined":e(c)(a))===d?a.call(l,{name:"strIngredient",hash:{},data:o,loc:{start:{line:3,column:34},end:{line:3,column:51}}}):a)+'</p>\n\t<p class="ingridient-card-subtitle">'+u((void 0===(a=null!=(a=p(r,"strType")||(null!=t?p(t,"strType"):t))?a:s)?"undefined":e(c)(a))===d?a.call(l,{name:"strType",hash:{},data:o,loc:{start:{line:4,column:37},end:{line:4,column:48}}}):a)+'</p>\n\t<div class="ingridient-card-btn-wrapper">\n\t\t<button type="button" class="ingridient-btn ingridient-btn__learn">Learn more</button>\n\t\t<button type="button" class="ingridient-btn ingridient-btn__remove">Remove\n\t\t\t<svg width="15" height="15" class="ingridients-btn-icon">\n\t\t\t</svg>\n\t\t</button>\n\t</div>\n</article>\n'},compiler:[8,">= 4.3.0"],main:function(e,n,t,r,i){var o;return null!=(o=(e.lookupProperty||function(e,n){if(Object.prototype.hasOwnProperty.call(e,n))return e[n]})(t,"each").call(null!=n?n:e.nullContext||{},n,{name:"each",hash:{},fn:e.program(1,i,0),inverse:e.noop,data:i,loc:{start:{line:1,column:0},end:{line:14,column:9}}}))?o:""},useData:!0}),u=e(i("7jKnM")).template({compiler:[8,">= 4.3.0"],main:function(e,n,t,r,i){return'<section class="no-cocktails section">\n\t<div class="no-cocktails-container container">\n\t\t<p class="no-cocktails-title">Favorite ingredient</p>\n\t\t<p class="no-cocktails-subtitle">You haven\'t added any favorite ingredients yet</p>\n\t</div>\n</section>'},useData:!0}),p=i("6ia3e"),g=i("2iLY8"),f={mobileFavorite:document.querySelector(".mobile-favorite"),mobileFavorites:document.querySelector(".mobile-favorites"),iconArrow:document.querySelector(".mobile-arrow"),ingrContainer:document.querySelector(".ingridients-container"),ingrCaption:document.querySelector(".ingridients-title"),modalIngr:document.querySelector(".modal-ingr"),siteFavoriteHeaderWrapper:document.querySelector(".site-nav-favorite-wrapper"),favoriteHeaderWrapper:document.querySelector(".favorite-wrapper")};f.favoriteHeaderWrapper.style.display="none",f.siteFavoriteHeaderWrapper.addEventListener("mouseover",(function(){f.favoriteHeaderWrapper.style.display="block"})),f.siteFavoriteHeaderWrapper.addEventListener("mouseout",(function(){f.favoriteHeaderWrapper.style.display="none"})),f.mobileFavorite.addEventListener("click",(function(){f.mobileFavorites.classList.toggle("hide-show"),f.iconArrow.classList.toggle("rotate180")}));var y,m=document.querySelector(".div-icon-heart1"),v=document.querySelector(".div-icon-heart2"),h=document.querySelector(".div-icon-close"),b=(m.href.baseVal,v.href.baseVal),S=h.href.baseVal,w=JSON.parse(localStorage.getItem("ingridients"));function L(){var e=document.querySelectorAll(".ingridient-btn__remove svg"),n=!0,t=!1,r=void 0;try{for(var i,o=e[Symbol.iterator]();!(n=(i=o.next()).done);n=!0){i.value.innerHTML='<use class="use-heart1" href=\''.concat(b,"'></use>")}}catch(e){t=!0,r=e}finally{try{n||null==o.return||o.return()}finally{if(t)throw r}}}window.addEventListener("load",(function(){w&&0!==w.length?(f.ingrContainer.innerHTML=d(w),L()):(f.ingrCaption.style.display="none",f.ingrContainer.style.display="flex",f.ingrContainer.innerHTML=u())})),document.querySelector(".ingridients-container").addEventListener("click",(y=e(o)(e(l).mark((function n(t){var r,i,o,c,y,m,v,h,b;return e(l).wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(r=t.target.closest(".ingridient"),!t.target.classList.contains("ingridient-btn__learn")){n.next=22;break}return i=r.children[0].textContent,n.next=5,l=i,s.default.get("".concat("https://www.thecocktaildb.com/api/json/v1/1/search.php","?i=").concat(l));case 5:o=n.sent.data,c=[o.ingredients[0]],document.querySelector(".ingr-backdrop"),window.innerWidth<767?f.modalIngr.innerHTML=(0,g.default)(c):window.innerWidth>=768&&(f.modalIngr.innerHTML=(0,p.default)(c)),document.querySelector(".ingr-icon-close").innerHTML='<use class="use-heart1" href=\''.concat(S,"'></use>"),y=document.querySelector(".ingr-btn__add"),m=document.querySelector(".ingr-btn__remove"),y.style.display="none",m.addEventListener("click",(function(){y.style.display="block",m.style.display="none";var n=JSON.parse(localStorage.getItem("ingridients"));if(v=e(a)({},n.filter((function(e){return e.strIngredient===r.children[0].textContent}))),n=n.filter((function(e){return e.strIngredient!==r.children[0].textContent})),f.ingrContainer.innerHTML=d(n),L(),localStorage.setItem("ingridients",JSON.stringify(n)),!n.length)return f.ingrCaption.style.display="none",f.ingrContainer.style.display="flex",void(f.ingrContainer.innerHTML=u())})),y.addEventListener("click",(function(){y.style.display="none",m.style.display="block";var e=JSON.parse(localStorage.getItem("ingridients"));e.push(v[0]),localStorage.setItem("ingridients",JSON.stringify(e));var n=JSON.parse(localStorage.getItem("ingridients"));f.ingrContainer.innerHTML=d(n),L()})),(h=document.querySelector(".ingr-backdrop")).classList.remove("is-hidden"),document.querySelector(".ingr-icon-close").addEventListener("click",(function(){h.classList.add("is-hidden")})),n.next=34;break;case 22:if(!t.target.classList.contains("ingridient-btn__remove")){n.next=34;break}if(b=(b=JSON.parse(localStorage.getItem("ingridients"))).filter((function(e){return e.strIngredient!==r.children[0].textContent})),f.ingrContainer.innerHTML=d(b),L(),localStorage.setItem("ingridients",JSON.stringify(b)),b.length){n.next=34;break}return f.ingrCaption.style.display="none",f.ingrContainer.style.display="flex",f.ingrContainer.innerHTML=u(),localStorage.removeItem("ingridients"),n.abrupt("return");case 34:case"end":return n.stop()}var l}),n)}))),function(e){return y.apply(this,arguments)}))}();
//# sourceMappingURL=ingridients.08aff5d4.js.map