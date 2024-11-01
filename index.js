/* empty css                      */import{i as l,S as p}from"./assets/vendor-5ObWk2rO.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))r(t);new MutationObserver(t=>{for(const s of t)if(s.type==="childList")for(const i of s.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&r(i)}).observe(document,{childList:!0,subtree:!0});function e(t){const s={};return t.integrity&&(s.integrity=t.integrity),t.referrerPolicy&&(s.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?s.credentials="include":t.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(t){if(t.ep)return;t.ep=!0;const s=e(t);fetch(t.href,s)}})();const u="46843956-48321f6890b82a65cca7319ef",f="https://pixabay.com/api/";function m(n){const o=new URLSearchParams({key:u,q:n,image_type:"photo",orientation:"horizontal",safesearch:!0}),e=`${f}?${o}`;return fetch(e).then(r=>{if(!r.ok)throw new Error("Network response was not ok");return r.json()}).then(r=>(console.log(r),r.hits.length===0?(form.reset(),l.info({title:"No Results",message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"})):(console.log(r),console.log(r.hits)),r)).catch(r=>{l.error({title:"Error",message:"Failed to fetch images. Please try again later.",position:"topRight"}),console.error("There was a problem with the fetch operation:",r)})}const c=document.querySelector(".gallery");function h(n){const o=n.map(e=>`<li class="gallery-item">
	  <a class="gallery-link" href="${e.largeImageURL}">
		<img 
			class="gallery-image" 
			src="${e.webformatURL}" 
			alt="${e.tags}" 
			/>
        <div class="gallery-info">
        <p class="gallery-likes"><span>Likes:</span> ${e.likes}</p>
        <p class="gallery-views"><span>Views:</span> ${e.views}</p>
        <p class="gallery-comments"><span>Comments:</span> ${e.comments}</p>
        <p class="gallery-downloads"><span>Downloads:</span> ${e.downloads}</p>
      </div>    
	  </a>
    </li>
    `).join("");c.innerHTML="",c.insertAdjacentHTML("afterbegin",o)}let a;const g=document.querySelector(".form"),y=document.querySelector(".input");g.addEventListener("submit",d);function d(n){n.preventDefault();const o=y.value.trim();if(console.log(o),!o){l.error({title:"Error",message:"Please enter a search query...",position:"topRight"});return}m(o).then(e=>{h(e.hits),a?a.refresh():a=new p(".gallery a",{captions:!0,captionSelector:"img",captionType:"attr",captionsData:"alt",captionDelay:250})}).catch(e=>{console.error(e)})}
//# sourceMappingURL=index.js.map
