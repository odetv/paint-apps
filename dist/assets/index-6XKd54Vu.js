(function(){const c=document.createElement("link").relList;if(c&&c.supports&&c.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))d(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const h of s.addedNodes)h.tagName==="LINK"&&h.rel==="modulepreload"&&d(h)}).observe(document,{childList:!0,subtree:!0});function u(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function d(r){if(r.ep)return;r.ep=!0;const s=u(r);fetch(r.href,s)}})();const o=document.querySelector("canvas"),E=document.querySelectorAll(".tool"),m=document.querySelector("#fill-color"),v=document.querySelector("#size-slider"),L=document.querySelectorAll(".colors .option"),f=document.querySelector("#color-picker"),S=document.querySelector(".clear-canvas"),k=document.querySelector(".save-img"),t=o.getContext("2d");let n,l,p,g=!1,i="brush",y=5,a="#000";const w=()=>{t.fillStyle="#FFFFFF",t.fillRect(0,0,o.width,o.height),t.fillStyle=a};window.addEventListener("load",()=>{o.width=o.offsetWidth,o.height=o.offsetHeight,w()});const x=e=>{if(!m.checked)return t.strokeRect(e.offsetX,e.offsetY,n-e.offsetX,l-e.offsetY);t.fillRect(e.offsetX,e.offsetY,n-e.offsetX,l-e.offsetY)},F=e=>{t.beginPath();let c=Math.sqrt(Math.pow(n-e.offsetX,2)+Math.pow(l-e.offsetY,2));t.arc(n,l,c,0,2*Math.PI),m.checked?t.fill():t.stroke()},X=e=>{t.beginPath(),t.moveTo(n,l),t.lineTo(e.offsetX,e.offsetY),t.lineTo(n*2-e.offsetX,e.offsetY),t.closePath(),m.checked?t.fill():t.stroke()},Y=e=>{g=!0,n=e.offsetX,l=e.offsetY,t.beginPath(),t.lineWidth=y,t.strokeStyle=a,t.fillStyle=a,p=t.getImageData(0,0,o.width,o.height)},q=e=>{g&&(t.putImageData(p,0,0),i==="brush"||i==="eraser"?(t.strokeStyle=i==="eraser"?"#FFFFFF":a,t.lineTo(e.offsetX,e.offsetY),t.stroke()):i==="rectangle"?x(e):i==="circle"?F(e):X(e))};E.forEach(e=>{e.addEventListener("click",()=>{document.querySelector(".options .active").classList.remove("active"),e.classList.add("active"),i=e.id})});v.addEventListener("change",()=>y=v.value);L.forEach(e=>{e.addEventListener("click",()=>{document.querySelector(".options .selected").classList.remove("selected"),e.classList.add("selected"),a=window.getComputedStyle(e).getPropertyValue("background-color")})});f.addEventListener("change",()=>{f.parentElement.style.background=f.value,f.parentElement.click()});S.addEventListener("click",()=>{t.clearRect(0,0,o.width,o.height),w()});k.addEventListener("click",()=>{const e=document.createElement("a");e.download=`${Date.now()}.jpg`,e.href=o.toDataURL(),e.click()});o.addEventListener("mousedown",Y);o.addEventListener("mousemove",q);o.addEventListener("mouseup",()=>g=!1);const P=document.getElementById("pixelX"),D=document.getElementById("pixelY"),T=document.getElementById("canvasWidth"),I=document.getElementById("canvasHeight"),B=o.width,C=o.height;T.innerText=`${B}`;I.innerText=` ${C} px`;o.addEventListener("mousemove",function(e){const c=o.getBoundingClientRect(),u=e.clientX-c.left,d=e.clientY-c.top;P.innerText=`${u},`,D.innerText=`${d} px`});