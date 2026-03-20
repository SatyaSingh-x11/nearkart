/* =========================
   HERO TEXT ROTATION
========================= */
const words=["Milk","Groceries","Medicines","Chargers","Snacks"];let i=0;
setInterval(()=>{const el=document.getElementById("changing-text");if(!el)return;el.style.opacity=0;setTimeout(()=>{i=(i+1)%words.length;el.textContent=words[i];el.style.opacity=1},300)},2000);


/* =========================
   READ MORE SYSTEM
========================= */
const readBtn=document.getElementById("read-more-btn");
const readBox=document.getElementById("read-box");
if(readBtn&&readBox){
readBtn.addEventListener("click",()=>{
readBox.classList.toggle("expanded");
readBtn.textContent=readBox.classList.contains("expanded")?"↑ Show Less ↑":"↓ Read More ↓";
});
}


/* =========================
   FAKE LIVE SEARCH DEMO
========================= */
const fakeInput=document.getElementById("fake-search");
const demoResults=document.getElementById("demo-results");

if(fakeInput&&demoResults){
setTimeout(()=>{
fakeInput.value="Milk";
setTimeout(()=>{
demoResults.innerHTML=`<div class="card">Milk - ₹28 • 0.5km ⭐4.5</div><div class="card">Milk - ₹30 • 1km ⭐4.2</div>`;
},800);
},1200);
}


/* =========================
   COUNTER ANIMATION
========================= */
const counters=document.querySelectorAll(".count");
counters.forEach(counter=>{
let target=+counter.getAttribute("data-target")||+counter.getAttribute("data");
let count=0;
let speed=40;
let interval=setInterval(()=>{
count+=target/50;
if(count>=target){
counter.textContent=target;
clearInterval(interval);
}else{
counter.textContent=Math.floor(count);
}
},speed);
});


/* =========================
   TESTIMONIAL AUTO SCROLL
========================= */
const slider=document.querySelector(".testimonials")||document.querySelector(".test");
if(slider){
setInterval(()=>{
slider.scrollLeft+=200;
if(slider.scrollLeft>=slider.scrollWidth-slider.clientWidth){
slider.scrollLeft=0;
}
},2500);
}


/* =========================
   SCROLL REVEAL ANIMATION
========================= */
const observer=new IntersectionObserver(entries=>{
entries.forEach(entry=>{
if(entry.isIntersecting){
entry.target.classList.add("show");
}
});
},{threshold:0.2});

document.querySelectorAll("section,.card").forEach(el=>{
el.classList.add("hidden");
observer.observe(el);
});


/* =========================
   BUTTON MICRO INTERACTION
========================= */
document.querySelectorAll("button").forEach(btn=>{
btn.addEventListener("click",()=>{
btn.style.transform="scale(0.9)";
setTimeout(()=>{btn.style.transform="scale(1)"},150);
});
});


/* =========================
   SMOOTH SCROLL NAV (FUTURE)
========================= */
document.querySelectorAll("a[href^='#']").forEach(anchor=>{
anchor.addEventListener("click",function(e){
e.preventDefault();
document.querySelector(this.getAttribute("href"))?.scrollIntoView({behavior:"smooth"});
});
});


/* =========================
   LOGO BLINK EXTRA CONTROL
========================= */
setInterval(()=>{
const logo=document.querySelector("header h2");
if(logo){
logo.style.opacity="0";
setTimeout(()=>logo.style.opacity="1",200);
}
},10000);


/* =========================
   HERO PARALLAX FEEL
========================= */
window.addEventListener("scroll",()=>{
let scroll=window.scrollY;
const hero=document.querySelector("section");
if(hero){
hero.style.transform=`translateY(${scroll*0.1}px)`;
}
});
