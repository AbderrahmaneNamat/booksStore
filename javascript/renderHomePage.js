
import { FounderSection } from "./FounderSection.js";

import {renderBooksSection} from "./renderBooksSection.js"
import { renderCardSection } from "./renderCardSection.js";
import { renderComingSoongSection } from "./renderComingSoonSection.js";
import { renderCountriesSection, ul } from "./renderCountriesSection.js";
export function renderHomePage(){
    const booksFirstSection = [
      {
        id: 1,
        title: "20 books to help be in adventure",
        img: "/imgs/firstSection/Adventure.jpg",
        category: "Adventure"
      },
      {
        id: 2,
        title: "20 books full of emotions",
        img: "/imgs/firstSection/drama.avif",
        category: "Drama"
      },
      {
        id: 3,
        title: "20 detective stories you must read",
        img: "/imgs/firstSection/detective.jpg",
        category: "Detective"
      },
      {
        id: 4,
        title: "20 fantasy worlds to explore",
        img: "/imgs/firstSection/fantasy.jpg",
        category: "Fantasy"
      }
    ];
    const categories = [
      { id: 0, category: "Strategie", icon: "img1.jpg" },
      { id: 1, category: "Fitness", icon: "img2.jpg" },
      { id: 2, category: "Developement Personnel", icon: "img3.jpg" },
      { id: 3, category: "Programming", icon: "img4.jpg" },
      { id: 4, category: "Romance", icon: "img5.jpg" }
    ];
    
const bestsellingBooks = [
  { id: 0, title: "Atomic Habits", author: "James Clear", category: "Developement Personnel", cover:"/imgs/1.jpg", color: "#FFD93D", priceInitial: 25, priceFinal: 18 },
  { id: 1, title: "The 7 Habits of Highly Effective People", author: "Stephen R. Covey", category: "Developement Personnel", cover: "/imgs/1.jpg", color: "#FFD93D", priceInitial: 30, priceFinal: 22 },
  { id: 2, title: "The Lean Startup", author: "Eric Ries", category: "Strategie", cover: "/imgs/2.jpg", color: "#FF6B6B", priceInitial: 28, priceFinal: 20 },
  { id: 3, title: "Deep Work", author: "Cal Newport", category: "Programming", cover: "/imgs/1.jpg", color: "#6A4C93", priceInitial: 27, priceFinal: 19 },
  { id: 4, title: "The Da Vinci Code", author: "Dan Brown", category: "Romance", cover: "/imgs/3.jpg", color: "#FFB6C1", priceInitial: 24, priceFinal: 17 },
  { id: 5, title: "The Power of Habit", author: "Charles Duhigg", category: "Developement Personnel", cover: "/imgs/2.jpg", color: "#FFD93D", priceInitial: 26, priceFinal: 20 },
  { id: 6, title: "Harry Potter and the Sorcerer's Stone", author: "J.K. Rowling", category: "Romance", cover: "/imgs/2.jpg", color: "#FFB6C1", priceInitial: 32, priceFinal: 25 },
  { id: 7, title: "Rich Dad Poor Dad", author: "Robert Kiyosaki", category: "Strategie", cover: "/imgs/3.jpg", color: "#FF6B6B", priceInitial: 29, priceFinal: 21 }
];
    return     `
      <!-- ===========FIRST SECTION========== -->

        <div class="firstsection position-relative">
          <div class="cards-container"> 
            ${booksFirstSection.map((item)=>`<div class="card-f">
              <img src="${item.img}"/>
              <div class="title">${item.title}</div>
              <div class="overlay"></div>
            </div>`).join("")}
            </div>
        </div>
      <!-- ==============SECOND SECTION=========== -->
          <div class="second-section">
              <div>
                <div class="part1">
                  <div>Featured Categories</div>              
                  <div>See All Categories > </div>              
                </div>
                <div class="part2">
                ${categories.map(ele => `
                <div class="category-card">
                  <span class="category-text">${ele.category}</span>
                </div>
              `).join("")}                </div>

              </div>
          </div>
${renderBooksSection("Most Englsih books",bestsellingBooks,"third-section")}
${renderBooksSection("Most Frensh books",bestsellingBooks,"fourth-section")}
${renderCardSection(
  "MANGA",
  "You're fascinated by Japanese culture",
  "/imgs/manga.gif"
)}


${renderBooksSection("Most Englsih books",bestsellingBooks,"third-section")}
${renderBooksSection("CommingSoon",bestsellingBooks,"third-section")}


  <div class="my-5">
    ${renderComingSoongSection()}
  </div>


${renderCardSection(
  "FANTASIE",
  "Enter worlds where imagination has no limits",
  "/imgs/fantasie.gif"
)}
${renderCountriesSection()}
${FounderSection}

`;


  }