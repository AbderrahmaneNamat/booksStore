import { books } from "./data.js";

/* =========================
   DATA PREP
========================= */
const allBooks = Object.values(books).flat();

/* =========================
   SEARCH RESULT
========================= */
export function SearchResult(rawValue) {
  const value = rawValue.trim().toLowerCase();
  if (!value) return "";

  const matchedBooks = [];
  const categoryCount = {};

  allBooks.forEach((book) => {
    /* Match book name */
    if (book.name?.toLowerCase().includes(value)) {
      matchedBooks.push(book);
    }

    /* Match categories */
    book.categories?.forEach((cat) => {
      if (cat.toLowerCase().includes(value)) {
        categoryCount[cat] = (categoryCount[cat] || 0) + 1;
      }
    });
  });

  return `
    <div class="search-result-wrapper">
      <div class="search-result-title">
        Search <span>Results <i class="fa-solid fa-magnifying-glass"></i></span>
      </div>

      <div class="search-result-container">
        ${renderCategories(categoryCount)}
        ${renderBooks(matchedBooks)}
      </div>
    </div>
  `;
}

/* =========================
   CATEGORIES
========================= */
function renderCategories(counts) {
  if (!Object.keys(counts).length) return "";

  return `
    <section class="search-section">
      <h3>Categories <i class="fa-solid fa-tag"></i></h3>
      <div class="categories-list">
        ${Object.entries(counts)
          .map(
            ([cat, count]) => `
              <div class="category-pill">
                ${cat} <span>${count}</span>
              </div>
            `
          )
          .join("")}
      </div>
    </section>
  `;
}

/* =========================
   BOOKS
========================= */
function renderBooks(books) {
  if (!books.length) {
    return `<div class="search-empty">No books found</div>`;
  }

  return `
    <section class="search-section">
      <h3>Books <i class="fa-solid fa-book"></i></h3>
      <div class="founded-books-container">
        ${books.map(renderBookCard).join("")}
      </div>
    </section>
  `;
}

/* =========================
   BOOK CARD
========================= */
function renderBookCard(book) {
  return `
    <div class="founded-book-box">
      <div class="founded-overlay"></div>

      <div class="founded-book-details">
        <div class="book-title">${book.name}</div>
        <div class="book-author">${book.author || "Unknown author"}</div>

        <div class="book-categories">
          ${book.categories
            ?.map((cat) => `<span class="book-category">${cat}</span>`)
            .join("")}
        </div>

        <div class="view-container">
          <button class="view-btn">View</button>
        </div>
      </div>

      <div class="book-image">
        <img src="${book.image || "/imgs/newYearSection/book1.webp"}" />
      </div>

      <div class="book-name">
        ${book.name}
      </div>
    </div>
  `;
}
