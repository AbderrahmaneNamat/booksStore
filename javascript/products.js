import { products } from "./data.js";

export function ProductsPage(selectedCategory = "all", selectedTime = "all") {

  const filtered = products.filter(p => {
    const matchCategory =
      selectedCategory === "all" || p.categories.includes(selectedCategory);
    const matchTime =
      selectedTime === "all" || p.lastUpdate === selectedTime;
    return matchCategory && matchTime;
  });

  const categories = ["all", ...new Set(products.flatMap(p => p.categories))];
  const times = ["all", ...new Set(products.map(p => p.lastUpdate))];

  return `
    <!-- Filter bar -->
    <div class="filter-container">
      <div class="filter-group">
        <label>Category</label>
        <select id="categoryFilter">
          ${categories.map(cat => `
            <option value="${cat}" ${cat === selectedCategory ? "selected" : ""}>
              ${cat}
            </option>
          `).join("")}
        </select>
      </div>

      <div class="filter-group">
        <label>Last Update</label>
        <select id="timeFilter">
          ${times.map(t => `
            <option value="${t}" ${t === selectedTime ? "selected" : ""}>
              ${t}
            </option>
          `).join("")}
        </select>
      </div>

      <button class="filter-button">Filter</button>
    </div>
    <!-- Filter bar small resolution -->
    <div class="filter-container-small">
      <div class="exit-button-container">Exit</div>
      <div class="filter-container">

      <div class="filter-group">
        <label>Category</label>
        <select id="categoryFilter">
          ${categories.map(cat => `
            <option value="${cat}" ${cat === selectedCategory ? "selected" : ""}>
              ${cat}
            </option>
          `).join("")}
        </select>
      </div>

      <div class="filter-group">
        <label>Last Update</label>
        <select id="timeFilter">
          ${times.map(t => `
            <option value="${t}" ${t === selectedTime ? "selected" : ""}>
              ${t}
            </option>
          `).join("")}
        </select>
      </div>
    </div>



      <button class="filter-button">Filter</button>
    </div>
    <!-- Products -->
    <div class="products-container">
      ${filtered.map(p => `
        <div class="product-card">
          <div class="product-image">
            <img src="/imgs/2.jpg" alt="${p.name}">
          </div>

          <div class="product-body">
            <h5>${p.name}</h5>

            <div class="category-container">
              ${p.categories.map(c => `<span>${c}</span>`).join("")}
            </div>

            <a href="#product/${p.id}" class="view-btn">View</a>
          </div>
        </div>
      `).join("")}
    </div>
  `;
}
