import { books } from "./data.js";

export function renderBooksSection(title, section) {
  return `
    <div class="${section} third-section">
      
      <!-- Header -->
      <div class="third-section-part1">
        <div class="section-title">${title}</div>
        <div class="see-all">See All &gt;</div>
      </div>

      <!-- Slider -->
      <div class="slider-wrapper">
        <button class="slider-btn left" aria-label="Scroll left">&lt;</button>

        <div class="third-section-part2">
          ${books.reductionsItemBy50per.map(
              (ele,id) => `
            <div key="${id+1}" class="third-section-book-box">
              
              <img 
                loading="lazy"
                src="${ele.cover}"
                alt="Cover of ${ele.title}"
                class="book-cover"
              />

              <!-- Hover Overlay -->
              <div class="item-content">
                <div class="title">${ele.title}</div>
                <div class="category">${ele.category}</div>
                <div class="author">${ele.author}</div>

                <div class="prix-container">
                  <div class="price-initial">$${ele.priceInitial}</div>
                  <div class="price-final">$${ele.priceFinal}</div>
                </div>

                <div class="action-buttons ">
                  <button class="add-cart" data-id=${ele.idSection}>Add to Cart</button>
                  <button class="favorite" aria-label="Add to favorites">❤</button>
                </div>
              </div>

              <!-- Bottom Title Bar -->
              <div class="p2">${ele.title}</div>
            </div>
          `
            )
            .join("")}
        </div>

        <button class="slider-btn right" aria-label="Scroll right">&gt;</button>
      </div>
    </div>
  `;
}
