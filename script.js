/* =========================
   1. HERO TEXT CHANGING
========================= */

const words = ["Milk", "Groceries", "Medicines", "Chargers", "Snacks"];
let i = 0;

setInterval(() => {
  const el = document.getElementById("changing-text");
  if (!el) return;

  el.style.opacity = 0;

  setTimeout(() => {
    i = (i + 1) % words.length;
    el.textContent = words[i];
    el.style.opacity = 1;
  }, 300);

}, 2000);



/* =========================
   2. READ MORE EXPAND
========================= */

const readBtn = document.getElementById("read-more-btn");
const readBox = document.getElementById("read-box");

if (readBtn && readBox) {
  readBtn.addEventListener("click", () => {
    readBox.classList.toggle("expanded");

    if (readBox.classList.contains("expanded")) {
      readBtn.textContent = "↑ Show Less ↑";
    } else {
      readBtn.textContent = "↓ Read More ↓";
    }
  });
}



/* =========================
   3. FAKE SEARCH DEMO
========================= */

const fakeInput = document.getElementById("fake-search");
const demoResults = document.getElementById("demo-results");

if (fakeInput && demoResults) {
  setTimeout(() => {
    fakeInput.value = "Milk";

    setTimeout(() => {
      demoResults.innerHTML = `
        <div class="card">Milk - ₹28 • 0.5km ⭐4.5</div>
        <div class="card">Milk - ₹30 • 1km ⭐4.2</div>
      `;
    }, 1000);

  }, 1500);
}



/* =========================
   4. COUNTER ANIMATION
========================= */

const counters = document.querySelectorAll(".count");

counters.forEach(counter => {
  let target = +counter.getAttribute("data-target");
  let count = 0;

  let interval = setInterval(() => {
    count += target / 50;

    if (count >= target) {
      counter.textContent = target;
      clearInterval(interval);
    } else {
      counter.textContent = Math.floor(count);
    }

  }, 40);
});



/* =========================
   5. TESTIMONIAL AUTO SCROLL
========================= */

const slider = document.querySelector(".testimonials");

if (slider) {
  setInterval(() => {
    slider.scrollLeft += 200;

    // reset loop
    if (slider.scrollLeft >= slider.scrollWidth - slider.clientWidth) {
      slider.scrollLeft = 0;
    }

  }, 2500);
}



/* =========================
   6. SCROLL REVEAL ANIMATION
========================= */

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
    }
  });
});

document.querySelectorAll(".section, .card").forEach(el => {
  el.classList.add("hidden");
  observer.observe(el);
});



/* =========================
   7. GLOBAL HEADER & FOOTER
========================= */

function loadComponent(id, file) {
  fetch(file)
    .then(res => res.text())
    .then(data => {
      document.getElementById(id).innerHTML = data;
    });
}

// IMPORTANT: create these files later
loadComponent("header", "components/header.html");
loadComponent("footer", "components/footer.html");
