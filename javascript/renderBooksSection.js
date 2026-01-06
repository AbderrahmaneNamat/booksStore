export function renderBooksSection(title, books, section) {
  return `
    <div class="${section} third-section">
      <div class="part1 text-primary">
        <div class="section-title">${title}</div>
        <div class="see-all">See All ></div>
      </div>

      <div class="slider-wrapper">
        <button class="slider-btn left">&lt;</button>

        <div class="part2 text-primary">
          ${books.map(ele => `
            <div class="item">
              <img loading="lazy" src="${ele.cover}" class="book-cover p1" />


              <div class="item-content ">
                <div class="title">${ele.title}</div>
                <div class="category">${ele.category}</div>
                <div class="author">${ele.author}</div>

                <div class="prix-container d-flex justify-content-between">
                  <div class="price-initial">$${ele.priceInitial}</div>
                  <div class="price-final">$${ele.priceFinal}</div>
                </div>

                <div class="action-buttons d-flex justify-content-between">
                  <button class="add-cart">Add to Cart</button>
                  <button class="favorite">❤</button>
                </div>
              </div>
              <div class="bg-primary p2">${ele.title}</div>
            </div>
                `).join("")}
        </div>

        <button class="slider-btn right">&gt;</button>
      </div>
    </div>
  `;
}
