import { books } from "./data.js";

export function ProductsPage(selectedCategory = "all", selectedTime = "all") {

  const filtered = books.booksSection.filter(p => {
    const matchCategory =
      selectedCategory === "all" || p.categories.includes(selectedCategory);
    const matchTime =
      selectedTime === "all" || p.lastUpdate === selectedTime;
    return matchCategory && matchTime;
  });

  const categories = ["all", ...new Set(books.booksSection.flatMap(p => p.categories))];
  const times = ["all", ...new Set(books.booksSection.map(p => p.lastUpdate))];

  const renderOptions = (items, selected) =>
    items.map(v =>
      `<option value="${v}" ${v === selected ? "selected" : ""}>${v}</option>`
    ).join("");

  return `
    <!-- DESKTOP FILTER -->
    <div class="filter-container desktop-filter">
      <div class="filter-group">
        <label>Category</label>
        <select data-filter="category">
          ${renderOptions(categories, selectedCategory)}
        </select>
      </div>

      <div class="filter-group">
        <label>Last Update</label>
        <select data-filter="time">
          ${renderOptions(times, selectedTime)}
        </select>
      </div>

      <button class="filter-button" data-action="apply-filter">Filter</button>
    </div>

    <!-- MOBILE FILTER BUTTON -->
    <div class="mobile-filter-bar">
      <button id="openFilterBtn" class="mobile-filter-btn">
        ☰ Filters
      </button>
    </div>

    <!-- MOBILE FILTER OVERLAY -->
    <div class="filter-container-small">
      <div class="exit-button-container" id="closeFilterBtn">✕</div>

      <div class="filter-container mobile-filter">
        <div class="filter-group">
          <label>Category</label>
          <select data-filter="category">
            ${renderOptions(categories, selectedCategory)}
          </select>
        </div>

        <div class="filter-group">
          <label>Last Update</label>
          <select data-filter="time">
            ${renderOptions(times, selectedTime)}
          </select>
        </div>

        <button class="filter-button" data-action="apply-filter">
          Apply Filters
        </button>
      </div>
    </div>

    <!-- PRODUCTS -->
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
