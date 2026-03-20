/* ================= HERO TEXT CHANGE ================= */
const words=["Milk","Groceries","Medicines","Chargers","Snacks"];
let i=0;
setInterval(()=>{
  const el=document.getElementById("changing-text");
  if(!el) return;
  el.style.opacity=0;
  setTimeout(()=>{
    i=(i+1)%words.length;
    el.textContent=words[i];
    el.style.opacity=1;
  },300);
},2000);


/* ================= FAKE SEARCH DEMO ================= */
const input=document.getElementById("fake-search");
const results=document.getElementById("demo-results");

if(input && results){
  setTimeout(()=>{
    input.value="Milk";
    setTimeout(()=>{
      results.innerHTML=`
        <div class="card">Nandini Milk ₹24 • 150m ⭐4.5</div>
        <div class="card">Heritage Milk ₹35 • 300m ⭐4.8</div>
        <div class="card">Aavin Milk ₹30 • 500m ⭐4.3</div>
      `;
    },800);
  },1200);
}


/* ================= COUNTER ANIMATION ================= */
document.querySelectorAll(".count").forEach(counter=>{
  let target=+counter.getAttribute("data-target");
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


/* ================= SCROLL REVEAL ================= */
const observer=new IntersectionObserver(entries=>{
  entries.forEach(entry=>{
    if(entry.isIntersecting){
      entry.target.classList.add("show");
    }
  });
},{threshold:0.2});

document.querySelectorAll(".section, .card, .hero-content, .hero-visual").forEach(el=>{
  el.classList.add("hidden");
  observer.observe(el);
});


/* ================= BUTTON MICRO INTERACTION ================= */
document.querySelectorAll("button").forEach(btn=>{
  btn.addEventListener("click",()=>{
    btn.style.transform="scale(0.9)";
    setTimeout(()=>btn.style.transform="scale(1)",150);
  });
});


/* ================= TESTIMONIAL AUTO SCROLL ================= */
const slider=document.querySelector(".testimonials");

if(slider){
  setInterval(()=>{
    slider.scrollLeft+=200;

    if(slider.scrollLeft >= slider.scrollWidth - slider.clientWidth){
      slider.scrollLeft=0;
    }
  },2500);
}


/* ================= READ MORE ================= */
const readBtn=document.getElementById("read-more-btn");
const readBox=document.getElementById("read-box");

if(readBtn && readBox){
  readBtn.addEventListener("click",()=>{
    readBox.classList.toggle("expanded");
    readBtn.textContent = readBox.classList.contains("expanded")
      ? "Show Less"
      : "Read More";
  });
}


/* ================= PARALLAX EFFECT ================= */
window.addEventListener("scroll",()=>{
  const scroll=window.scrollY;
  const bg=document.querySelector(".hero-bg");

  if(bg){
    bg.style.transform=`translateY(${scroll * 0.1}px)`;
  }
});


/* ================= FLOATING RANDOM MOTION ================= */
document.querySelectorAll(".floating-badge").forEach((el,i)=>{
  setInterval(()=>{
    el.style.transform=`translateY(${Math.sin(Date.now()/1000+i)*5}px)`;
  },100);
});
