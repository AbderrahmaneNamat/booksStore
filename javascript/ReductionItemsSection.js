import { books } from "./data.js";

export const ReductionItemsBy50percent = (id =1) => {

  return `
    <div class="booksReduction-wrapper">
      ${getBookCardHTML(id)}
    </div>
  `;
}



export function getBookCardHTML(id) {
  const book = books.reductionsItemBy50per.find(b => b.id === id);

  return `
        <div class="booksReduction-container">
                <div class="part1">
                    <img src="/imgs/newYearSection/book1.webp" alt="Book Cover" />
                    <div class="arrows-container">
                        <div class="left-arrow"><</div>
                        <div class="right-arrow">></div>
                    </div>
                </div>
                <div class="part2">
                    <div class="book-info">
                        <div  class="${book.id === id ? "book-card activecategory":"book-card"}" key="${book.id}"  >
                            <div class="book-title"><span>titre:</span>${book.title}</div>
                            <div class="book-author"><span>author's:</span>${book.author}</div>
                            <div class="book-categories">
                                ${book.categories.map((categorie)=>`<div class="book-categorie ${book.id === id ? " activecategory":""}">${categorie}</div>`).join("")}
                            </div>
                            <div class="book-meta">
                              <div><span>Year:</span> ${book.publicationYear}</div>
                              <div><span>Language:</span> ${book.language}</div>
                              <div><span>Pages:</span> ${book.pages}</div>
                              <div class="rating">
                                <span>Rating:</span> ⭐ ${book.rating}
                              </div>
                            </div>

                            <div class="book-prices">
                                <span class="original-price">$25</span>
                                <span class="discounted-price">$18</span>
                            </div>
                            <div class="view-item"><span>View</span></div>
                        </div>
                    </div>
                </div>
                <div class="part3 ">
                    <div class="text1">Books with up to 50% reduction</div>
                    <div class="text2">See All Books ></div>
                </div>
  
        </div>
  `;
}

export function ReductionItemsButtonsController() {
  let id = 1;

  document.addEventListener("click", (e) => {
    const wrapper = document.querySelector(".booksReduction-wrapper");
    if (!wrapper) return;

    const container = wrapper.querySelector(".booksReduction-container");

    if (e.target.classList.contains("left-arrow")) {
      id = id - 1 < 1 ? books.reductionsItemBy50per.length : id - 1;
      container.innerHTML = getBookCardHTML(id);
      activateCategories();
    }

    if (e.target.classList.contains("right-arrow")) {
      id = id + 1 > books.reductionsItemBy50per.length ? 1 : id + 1;
      container.innerHTML = getBookCardHTML(id);
      activateCategories();
    }
  });
}
