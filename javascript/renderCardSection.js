export function renderCardSection(categoryBook, title, gifSrc) {
  return `
  <div class="card-wrapper">
    <div class="card-container">

      <img src="${gifSrc}" class="img-box" alt="manga animation" />

      <div class="text-box">
        <div class="first-text">"${categoryBook}"</div>

        <div class="second-text">
          <div class="one">${title}</div>
          <div class="two"></div>
        </div>
      </div>

    </div>
  </div>
  `;
}
