import { books } from "./data.js";

export function ProductsPage(selectedCategory = "all", selectedTime = "all") {
  const allbooks=Object.values(books).flat();



  return `
    <!-- DESKTOP FILTER -->
    <div class="filter-container desktop-filter">
        <div>All Products</div>
    </div>

    <!-- PRODUCTS -->
    <div class="products-container">
      ${allbooks.map(p => `
        <div class="product-card">
          <div class="product-image">
            <img src="${p.image}" alt="${p.name}">
          </div>

          <div class="product-body">
            <h5>${p.name}</h5>

            <div class="category-container">
              ${p.categories.map(c => `<span>${c}</span>`).join("")}
            </div>

            <a href="#product/${p.idSection}" class="view-btn">View</a>
          </div>
        </div>
      `).join("")}
    </div>
  `;
}
