function e(e){return e&&e.__esModule?e.default:e}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},o={},r=t.parcelRequired7c6;null==r&&((r=function(e){if(e in n)return n[e].exports;if(e in o){var t=o[e];delete o[e];var r={id:e,exports:{}};return n[e]=r,t.call(r.exports,r,r.exports),r.exports}var i=new Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(e,t){o[e]=t},t.parcelRequired7c6=r);var i=r("2shzp"),l=r("QG6gt");var a=e(r("1Gatq")).template({compiler:[8,">= 4.3.0"],main:function(e,t,n,o,r){return'<section class="no-cocktails section">\n\t<div class="no-cocktails-container container">\n\t\t<p class="no-cocktails-title">Favorite cocktails</p>\n\t\t<p class="no-cocktails-subtitle">You haven\'t added any favorite cocktails yet</p>\n\t</div>\n</section>'},useData:!0}),s=r("8EZAg"),c=r("aN9pz"),d=r("eT0hc"),y=r("iZbkS");const u={mobileFavorite:document.querySelector(".mobile-favorite"),mobileFavorites:document.querySelector(".mobile-favorites"),iconArrow:document.querySelector(".mobile-arrow"),formEl:document.querySelector(".header-form"),cardsContainerEl:document.querySelector(".cards-container"),cardsCaption:document.querySelector(".cards-title"),modalIngr:document.querySelector(".modal-ingr"),siteFavoriteHeaderWrapper:document.querySelector(".site-nav-favorite-wrapper"),favoriteHeaderWrapper:document.querySelector(".favorite-wrapper")};u.favoriteHeaderWrapper.style.display="none",u.siteFavoriteHeaderWrapper.addEventListener("mouseover",(()=>{u.favoriteHeaderWrapper.style.display="block"})),u.siteFavoriteHeaderWrapper.addEventListener("mouseout",(()=>{u.favoriteHeaderWrapper.style.display="none"})),u.mobileFavorite.addEventListener("click",(()=>{console.log("111"),u.mobileFavorites.classList.toggle("hide-show"),u.iconArrow.classList.toggle("rotate180")}));const p=e=>i.default.get(`https://www.thecocktaildb.com/api/json/v1/1/search.php?i=${e}`);let g=[];u.cardsCaption.style.display="none",window.addEventListener("load",(function(){if(f&&0!==f.length){const e=(0,l.default)(f);u.cardsCaption.style.display="block",u.cardsContainerEl.innerHTML=e;const t=document.querySelectorAll(".card-btn__add");for(let e of t)e.style.display="none"}else u.cardsContainerEl.innerHTML=a()})),u.cardsContainerEl.addEventListener("click",(function(e){const t=e.target.closest(".card");if(e.target.classList.contains("card-btn__remove")){f=f.filter((e=>e.idDrink!==t.id)),localStorage.setItem("favorites",JSON.stringify(f));t.children[2].children[2].style.display="none";t.children[2].children[1].style.display="block";const e=(0,l.default)(f);u.cardsContainerEl.innerHTML=e;const n=document.querySelectorAll(".card-btn__add");for(let e of n)e.style.display="none";if(0===f.length)return u.cardsCaption.style.display="none",void(u.cardsContainerEl.innerHTML=a())}})),u.cardsContainerEl.addEventListener("click",(async function(e){const t=e.target.closest(".card");if(e.target.classList.contains("card-btn__learn")){const e=t.children[1].textContent,{data:o}=await(n=e,i.default.get(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${n}`));console.log(o);const r={...o.drinks[0]},f=[];for(let e in r)e.includes("strIngredient")&&null!==r[e]&&f.push(r[e]);r.ingridients=f;const v=[{...r}];if(console.log(window.innerWidth),window.innerWidth>768){m.innerHTML=(0,c.default)(v);document.querySelector(".cocktail-ingridients-list").addEventListener("click",(async e=>{if("LI"===e.target.nodeName){const t=e.target.textContent;console.log(t);const n=await p(t);console.log(n.data.ingredients[0]);const o=[{...n.data.ingredients[0]}];u.modalIngr.innerHTML=(0,d.default)(o);const r=document.querySelector(".ingr-backdrop");r.classList.remove("is-hidden");document.querySelector(".ingr-icon-close").addEventListener("click",(()=>{r.classList.add("is-hidden")}));const i=document.querySelector(".ingr-btn__remove"),l=document.querySelector(".ingr-btn__add");i.style.display="none",l.addEventListener("click",(()=>{g.push(n.data.ingredients[0]),localStorage.setItem("ingridients",JSON.stringify(g)),l.style.display="none",i.style.display="block"})),i.addEventListener("click",(()=>{g.pop(),localStorage.setItem("ingridients",JSON.stringify(g)),i.style.display="none",l.style.display="block"}))}}));const e=document.querySelector(".backdrop");e.classList.remove("is-hidden"),document.body.style.overflow="hidden";const t=document.querySelector(".tablet-btn-add"),n=document.querySelector(".tablet-btn-remove");t.style.display="none",t.addEventListener("click",(()=>{const e=JSON.parse(localStorage.getItem("favorites"));e.push(o.drinks[0]),localStorage.setItem("favorites",JSON.stringify(e)),n.style.display="block",t.style.display="none",u.cardsContainerEl.innerHTML=(0,l.default)(e);const r=document.querySelectorAll(".card-btn__add");for(let e of r)e.style.display="none"})),n.addEventListener("click",(e=>{console.log("remove btn");let o=JSON.parse(localStorage.getItem("favorites"));o=o.filter((t=>t.idDrink!==e.target.id)),localStorage.setItem("favorites",JSON.stringify(o)),n.style.display="none",t.style.display="block",u.cardsContainerEl.innerHTML=(0,l.default)(o);const r=document.querySelectorAll(".card-btn__add");for(let e of r)e.style.display="none";o.length||(u.cardsContainerEl.innerHTML=a())})),e.addEventListener("click",(t=>{t.target.classList.contains("backdrop")&&(e.classList.add("is-hidden"),document.body.style.overflow="auto")}));document.querySelector(".cocktail-icon-close").addEventListener("click",(()=>{e.classList.add("is-hidden"),document.body.style.overflow="auto"}))}else if(window.innerWidth<768){m.innerHTML=(0,s.default)(v);const e=document.querySelector(".coctail");document.querySelector(".cocktail-ingridients-list").addEventListener("click",(async e=>{if("LI"===e.target.nodeName){const t=e.target.textContent;console.log(t);const n=await p(t);console.log(n.data.ingredients[0]);const o=[{...n.data.ingredients[0]}];u.modalIngr.innerHTML=(0,y.default)(o);const r=document.querySelector(".ingr-backdrop");r.classList.remove("is-hidden");document.querySelector(".ingr-icon-close").addEventListener("click",(()=>{r.classList.add("is-hidden")}));const i=document.querySelector(".ingr-btn__remove"),l=document.querySelector(".ingr-btn__add");i.style.display="none",l.addEventListener("click",(()=>{let e=JSON.parse(localStorage.getItem("ingridients"));e||(e=[]),e.push(n.data.ingredients[0]),localStorage.setItem("ingridients",JSON.stringify(e)),l.style.display="none",i.style.display="block"})),i.addEventListener("click",(()=>{g.pop(),localStorage.setItem("ingridients",JSON.stringify(g)),i.style.display="none",l.style.display="block"}))}})),e.style.transform="translateX(0%)";document.querySelector(".mobile-icon-close").addEventListener("click",(()=>{e.style.transform="translateX(-150%)"}));const t=document.querySelector(".modal-btn-add"),n=document.querySelector(".modal-btn-remove");t.style.display="none",t.addEventListener("click",(()=>{const e=JSON.parse(localStorage.getItem("favorites"));e.push(o.drinks[0]),localStorage.setItem("favorites",JSON.stringify(e)),n.style.display="block",t.style.display="none",u.cardsContainerEl.innerHTML=(0,l.default)(e);const r=document.querySelectorAll(".card-btn__add");for(let e of r)e.style.display="none"})),n.addEventListener("click",(e=>{let o=JSON.parse(localStorage.getItem("favorites"));o=o.filter((t=>t.idDrink!==e.target.id)),localStorage.setItem("favorites",JSON.stringify(o)),n.style.display="none",t.style.display="block",u.cardsContainerEl.innerHTML=(0,l.default)(o);const r=document.querySelectorAll(".card-btn__add");for(let e of r)e.style.display="none";o.length||(u.cardsContainerEl.innerHTML=a())}))}}var n}));let f=JSON.parse(localStorage.getItem("favorites"));const m=document.querySelector(".modal-cocktail");
//# sourceMappingURL=favorites.445e3513.js.map