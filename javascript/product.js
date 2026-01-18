import { books } from "./data.js";
import { renderBooksSection } from "./renderBooksSection.js";

export function ProductPage(idSection) {
  const allbooks=Object.values(books).flat()
  const book = allbooks.find(book => book.idSection === idSection);
  console.log(book)
  let quantity=book.quantity
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
            <span class="product-prix-initial" id="product-prix-initial">$${book.priceInitial}</span>
            <span class="product-prix-final" id="product-prix-final">$${book.priceFinal}</span>
          </div>

          <div class="quantity-addCart-container">
            <div class="quantity-container">
              <button class="moins" id="product-page-moins">-</button>
              <span class="quantity" id="product-page-quantity">${quantity}</span>
              <button class="plus " id="product-page-plus" >+</button>
            </div>

            <button  class="product-add-cart add-cart" data-id=${idSection}>Add to Cart</button>
          </div>
        </div>

      </div>

      <!-- EXTRA DETAILS -->
      <div class="product-details2">
        <p><strong>Author:</strong> ${book.author || " NOT MENTIONED"}</p>
        <p><strong>Publisher:</strong> ${book.publisher || " NOT MENTIONED"}</p>
        <p class="description">${book.description || ""}</p>
      </div>
      <div>
        ${renderBooksSection("More Like This")}
        <div></div>
      </div>
    </section>
  `;

}

export function moinsHandler() {
  const minusBtn = document.getElementById("product-page-moins");
  const quantityEl = document.getElementById("product-page-quantity");
  const priceInitialEl = document.getElementById("product-prix-initial");
  const priceFinalEl = document.getElementById("product-prix-final");
  if(!minusBtn) return ;
  if(!quantityEl) return ;
  if(!priceInitialEl) return ;
  if(!priceFinalEl) return ;
  
  const unitPriceI = Number(priceInitialEl.textContent.replace("$", ""));
  const unitPriceF = Number(priceFinalEl.textContent.replace("$", ""));

  minusBtn.addEventListener("click", () => {
    let quantity = Number(quantityEl.textContent);

    if (quantity > 1) {
      quantity--;
      quantityEl.textContent = quantity;
      priceInitialEl.textContent = "$" + (unitPriceI * quantity).toFixed(2);
      priceFinalEl.textContent = "$" + (unitPriceF * quantity).toFixed(2);
    }
  });
}

export function plusHandler() {
  const plusBtn = document.getElementById("product-page-plus");
  const quantityEl = document.getElementById("product-page-quantity");
  const priceInitialEl = document.getElementById("product-prix-initial");
  const priceFinalEl = document.getElementById("product-prix-final");

  if(!plusBtn) return;
  if(!quantityEl) return;
  if(!priceInitialEl) return;
  if(!priceFinalEl) return;
  const unitPriceI = Number(priceInitialEl.textContent.replace("$", ""));
  const unitPriceF = Number(priceFinalEl.textContent.replace("$", ""));

  plusBtn.addEventListener("click", () => {
    let quantity = Number(quantityEl.textContent);

    if (quantity < 50) {
      quantity++;
      quantityEl.textContent = quantity;
      priceInitialEl.textContent = "$" + (unitPriceI * quantity).toFixed(2);
      priceFinalEl.textContent = "$" + (unitPriceF * quantity).toFixed(2);
    }
  });
}

