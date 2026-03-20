const searchInput = document.getElementById("search-input");
const resultsList = document.getElementById("results-list");

function fuzzySearch(query) {
  return PRODUCTS.filter(item =>
    item.name.toLowerCase().includes(query.toLowerCase())
  );
}

searchInput.addEventListener("input", () => {
  const query = searchInput.value.trim();

  if (!query) {
    resultsList.innerHTML = "";
    return;
  }

  const results = fuzzySearch(query);

  renderResults(results);
});

function renderResults(items) {
  resultsList.innerHTML = "";

  items.forEach(item => {
    const div = document.createElement("div");
    div.className = "glass result-card fade-in";

    div.innerHTML = `
      <h3>${item.name}</h3>
      <p>${item.shop}</p>
      <p>₹${item.price} • ${item.distance}</p>
      <small>⭐ ${item.rating}</small>
    `;

    resultsList.appendChild(div);
  });
}
