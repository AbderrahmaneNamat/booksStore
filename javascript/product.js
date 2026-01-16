import { books } from "./data.js";
import { renderBooksSection } from "./renderBooksSection.js";

export function ProductPage(idp) {
  const book = books.booksSection.find(book => book.id === idp);

  if (!book) return `<p>Product not found</p>`;

  return `
    <section class="product-page-wrapper">
      <div class="product-page-container">

        <!-- IMAGE -->
        <div class="product-page-part1">
          <div class="img-container">
            <img src="${book.image}" alt="${book.name}">
          </div>
        </div>

        <!-- DETAILS -->
        <div class="product-details1-part2">
          <h1 class="book-name">${book.name}</h1>

          <div class="meta">
            <div class="book-date-pub">
              <span>Publication:</span> ${book.publication || "2023"}
            </div>
            <div class="book-rating">⭐ ${book.rating || "4.8"} / 5</div>
          </div>
            <div class="book-categories-container">
            ${book.categories.map((categorie)=>`<div class="book-categorie">${categorie}</div>`).join("")}
            </div>
          <div class="product-prix-container">
            <span class="product-prix-initial">$${book.priceInitial}</span>
            <span class="product-prix-final">$${book.priceFinal}</span>
          </div>

          <div class="quantity-addCart-container">
            <div class="quantity-container">
              <button class="moins">-</button>
              <span class="quantity">1</span>
              <button class="plus">+</button>
            </div>

            <button data-id="" class="product-add-cart">Add to Cart</button>
          </div>
        </div>

      </div>

      <!-- EXTRA DETAILS -->
      <div class="product-details2">
        <p><strong>Author:</strong> ${book.author}</p>
        <p><strong>Publisher:</strong> ${book.publisher || " NOT MENTIONED"}</p>
        <p class="description">${book.description || ""}</p>
      </div>
      <div>
        ${renderBooksSection()}
        <div></div>
      </div>
    </section>
  `;
}
