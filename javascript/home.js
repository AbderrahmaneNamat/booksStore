

import { products } from "./data.js";
import { login, renderAuth } from "./login.js";
import { ProductPage } from "./product.js";
import { ProductsPage } from "./products.js";
import { ul } from "./renderCountriesSection.js";

import { renderHomePage } from "./renderHomePage.js";

import { SliderBooks } from "./SliderBooks.js";
import { productsSmall } from "./smallResolution/productsSmall.js";

const app = document.getElementById("app");

const categories = [
  { id: 0, category: "Strategie", icon: "img1.jpg", color: "#FF6B6B" },          // red-ish for strategy
  { id: 1, category: "Fitness", icon: "img2.jpg", color: "#4ECDC4" },            // teal for fitness
  { id: 2, category: "Developement Personnel", icon: "img3.jpg", color: "#967f25ff" }, // yellow for personal development
  { id: 3, category: "Programming", icon: "img4.jpg", color: "#6A4C93" },        // purple for programming
  { id: 4, category: "Romance", icon: "img5.jpg", color: "#FFB6C1" }             // pink for romance
];
const bestsellingBooks = [
  { id: 0, title: "Atomic Habits", author: "James Clear", category: "Developement Personnel", cover: "./1.jpg", color: "#FFD93D", priceInitial: 25, priceFinal: 18 },
  { id: 1, title: "The 7 Habits of Highly Effective People", author: "Stephen R. Covey", category: "Developement Personnel", cover: "7_habits.jpg", color: "#FFD93D", priceInitial: 30, priceFinal: 22 },
  { id: 2, title: "The Lean Startup", author: "Eric Ries", category: "Strategie", cover: "lean_startup.jpg", color: "#FF6B6B", priceInitial: 28, priceFinal: 20 },
  { id: 3, title: "Deep Work", author: "Cal Newport", category: "Programming", cover: "deep_work.jpg", color: "#6A4C93", priceInitial: 27, priceFinal: 19 },
  { id: 4, title: "The Da Vinci Code", author: "Dan Brown", category: "Romance", cover: "da_vinci_code.jpg", color: "#FFB6C1", priceInitial: 24, priceFinal: 17 },
  { id: 5, title: "The Power of Habit", author: "Charles Duhigg", category: "Developement Personnel", cover: "power_of_habit.jpg", color: "#FFD93D", priceInitial: 26, priceFinal: 20 },
  { id: 6, title: "Harry Potter and the Sorcerer's Stone", author: "J.K. Rowling", category: "Romance", cover: "harry_potter.jpg", color: "#FFB6C1", priceInitial: 32, priceFinal: 25 },
  { id: 7, title: "Rich Dad Poor Dad", author: "Robert Kiyosaki", category: "Strategie", cover: "rich_dad.jpg", color: "#FF6B6B", priceInitial: 29, priceFinal: 21 }
];


// =====FILTERING BY CATEGORIE && UPDATETIME
function showProducts(selectedCategory = "all", selectedTime = "all") {
  app.innerHTML = ProductsPage(selectedCategory, selectedTime);
  productsSmall();
  const filterButton = document.querySelector(".filter-button");
  if (filterButton) {
    filterButton.addEventListener("click", () => {
      const category = document.getElementById("categoryFilter").value;
      const time = document.getElementById("timeFilter").value;
      showProducts(category, time); 
    });
  }
}
// Render ProductsPage and attach filter listener
function showProduct(idp) {
  // Find the book/product by id
  const product = products.find(book => book.id === idp);

  if (!product) {
    app.innerHTML = "<p>Product not found.</p>";
    return;
  }

  // Render product page
          app.innerHTML = ProductPage(idp)
}


// For filter links in category dropdowns
window.filterProducts = function (category) {
  window.location.hash = `#products/${category}`;
};

// Router
function router() {
  const hash = window.location.hash;

  if (hash.startsWith("#product/")) {
    const parts = hash.split("/"); // e.g., #products/123
    const id = Number(parts[1]);
    console.log(id)

    // Check if id is a number or valid product id
    if (id && id !== "all") {
      showProduct(id); // Render single product page
    } else {
      showProducts(); // Render all products
    }

  } else if (hash === "#products") {
    showProducts();
  } 
   else if (hash === "#login") {
    renderAuth()
  }
  else {
    // Render slider & homepage
    app.innerHTML=renderHomePage();
    ul()
    SliderBooks("third-section")
    SliderBooks("fourth-section")
    productsSmall()
  }
} 


window.addEventListener("hashchange", router);
window.addEventListener("load", router);
