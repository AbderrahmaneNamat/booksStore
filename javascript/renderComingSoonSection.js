export function renderComingSoongSection(){
const CommingSoonBooks = [
  {
    id: 1,
    title: "Mastering JavaScript",
    categories: ["programming"],
    author: "John Doe",
    language: "en",
    cover: "/imgs/comingsoon/programming1.jpg",
    priceInitial: 39.99,
    priceFinal: 29.99
  },
  {
    id: 2,
    title: "The Art of Motivation",
    categories: ["motivation", "development"],
    author: "Jane Smith",
    language: "en",
    cover: "/imgs/comingsoon/motivation1.jpg",
    priceInitial: 29.99,
    priceFinal: 19.99
  },
  {
    id: 3,
    title: "Fantasy Worlds: A Beginner's Guide",
    categories: ["fantasia"],
    author: "Emily Clarke",
    language: "en",
    cover: "/imgs/comingsoon/fantasie1.jpg",
    priceInitial: 34.99,
    priceFinal: 25.99
  },
  {
    id: 4,
    title: "Programmation Avancée en Python",
    categories: ["programming"],
    author: "Marc Dupont",
    language: "fr",
    cover: "/imgs/comingsoon/programming-fr1.jpg",
    priceInitial: 39.99,
    priceFinal: 29.99
  },
  {
    id: 5,
    title: "Motivation et Développement Personnel",
    categories: ["motivation", "development"],
    author: "Claire Dubois",
    language: "fr",
    cover: "/imgs/comingsoon/motivation-fr1.jpg",
    priceInitial: 32.99,
    priceFinal: 23.99
  },
  {
    id: 6,
    title: "Univers Fantastiques pour Enfants",
    categories: ["fantasia"],
    author: "Jean Moreau",
    language: "fr",
    cover: "/imgs/comingsoon/fantasia-fr1.jpg",
    priceInitial: 28.99,
    priceFinal: 19.99
  }
];

    return `
    <div class="comingsoon-text-container">
      <div class="comingsoon-text">ComingSoon</div>
    </div>
    <div class="comingSoon-wrapper padding-y-sm">
    <div class="overlay-comingsoon"></div>
        <div class="comingSoon-container">
            ${CommingSoonBooks.map((book)=>`<div class="item">
                  <img src="${book.cover}"/>
                  <div class="item-content-comingSoon">
                    <div class="categories">${book.categories.map((c)=>`<span class="category">${c}</span>`).join("/")}</div>
                    <div class="title">${book.title}</div>
                  </div>
                    <div class="overlay"></div>
                    </div>`).join("")}
        </div>
          <div class="bottom-shapes"></div>
    </div>
    `
}