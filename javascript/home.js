import { renderAuth } from "./login.js";
import {  moinsHandler, plusHandler, ProductPage } from "./product.js";
import { ProductsPage } from "./products.js";
import { ul } from "./renderCountriesSection.js";
import { renderHomePage } from "./renderHomePage.js";
import { SliderBooks } from "./SliderBooks.js";
import { initMobileFilter } from "./smallResolution/mobileFilter.js";
import { ReductionItemsButtonsController } from "./ReductionItemsSection.js";
import {
  getTimeLeftInMonth,
  StepsHandler,
  textLength
} from "./NewYearReduction.js";
import { books } from "./data.js";
import { SearchResult } from "./SearchResult.js";
import { UserCartsFunction, UserCartsPage } from "./UserCartsPage.js";

/* =========================
   GLOBAL STATE
========================= */
const app = document.getElementById("app");
let isSearching = false;

export const userCarts =
  JSON.parse(localStorage.getItem("carts-item")) || [];

export const likedCarts =
  JSON.parse(localStorage.getItem("carts-liked")) || [];
/* =========================
   STORAGE HELPERS
========================= */
const saveCarts = () => {
  localStorage.setItem("carts-item", JSON.stringify(userCarts));
};
const saveLikeCarts=()=>{
  localStorage.setItem("carts-liked",JSON.stringify(likedCarts))
}
/* =========================
   PRODUCTS LOGIC
========================= */
function showProducts(category = "all", time = "all") {
  app.innerHTML = ProductsPage(category, time);

  const filterBtn = document.querySelector(".filter-button");
  if (!filterBtn) return;

  filterBtn.addEventListener("click", () => {
    const selectedCategory =
      document.getElementById("categoryFilter")?.value || "all";
    const selectedTime =
      document.getElementById("timeFilter")?.value || "all";
    showProducts(selectedCategory, selectedTime);
  });
}

function showProduct(idSection) {
  console.log(idSection)
  const allBooks=Object.values(books).flat()
  const product = allBooks.find(
    (book) => book.idSection === idSection
  );
  console.log(allBooks)
  if (!product) {
    app.innerHTML = "<p>Product not found.</p>";
    return;
  }

  app.innerHTML = ProductPage(idSection);
}

/* =========================
   SEARCH
========================= */
const searchInput = document.querySelector(".search-container input");

if (searchInput) {
  searchInput.addEventListener("input", () => {
    const value = searchInput.value.trim();

    if (value.length > 0) {
      isSearching = true;
      app.innerHTML = SearchResult(value);
    } else {
      isSearching = false;
      router();
    }
  });
}

/* =========================
   ROUTER
========================= */
function router() {
  if (isSearching) return;

  window.scrollTo({ top: 0, behavior: "instant" });
  
  const hash = window.location.hash || "#home";

  if (hash.startsWith("#product/")) {
    const idSection= hash.split("/")[1];
    console.log(idSection)
    showProduct(idSection);
    moinsHandler()
  plusHandler()

    return;
  }

  if (hash.startsWith("#products")) {
    showProducts();
    return;
  }

  if (hash === "#carts") {
    app.innerHTML = UserCartsPage();
    UserCartsFunction();
    return;
  }

  if (hash === "#login") {
    renderAuth();
    return;
  }

  /* ===== HOME ===== */
  app.innerHTML = renderHomePage();
  ul();
  SliderBooks("third-section");
  SliderBooks("fourth-section");
  initMobileFilter();
  ReductionItemsButtonsController();

  document.documentElement.style.setProperty(
    "--text-length",
    `${textLength}ch`
  );

  StepsHandler();
  initCountdown();
}

window.addEventListener("hashchange", router);
window.addEventListener("load", router);

/* =========================
   COUNTDOWN TIMER
========================= */
function initCountdown() {
  const pad = (n) => String(n).padStart(2, "0");

  setInterval(() => {
    const timer = document.querySelector(".timer-container");
    if (!timer) return;

    const { days, hours, minutes, seconds } =
      getTimeLeftInMonth();

    timer.innerHTML = `
      <div class="timer">
        ${days}<span>D</span>
        ${pad(hours)}<span>H</span>
        ${pad(minutes)}<span>M</span>
        ${pad(seconds)}<span>S</span>
      </div>
    `;
  }, 1000);
}

/* =========================
   CART LISTENER
========================= */
document.addEventListener("click", (e) => {
  const addBtn = e.target.closest(".add-cart");
  if (!addBtn) return;

  const idSection = addBtn.dataset.id;
  console.log(idSection)
  if (!idSection) return;

  const allBooks = Object.values(books).flat();
  const book = allBooks.find(
    (b) => b.idSection === idSection
  );

  if (!book) return;

  const exists = userCarts.find(
    (item) => item.idSection === idSection
  );

  if (exists) {
    const activeBtnExistInCart=document.querySelector(".exist-tocart")
    if(!activeBtnExistInCart) return;
    activeBtnExistInCart.style.display="block"
    setTimeout(()=>{
      activeBtnExistInCart.style.display="none"
      
    },1000)
    
    return;
  }

  userCarts.push({ ...book, quantity: 1 });
  saveCarts();
  console.log("Added tocart:", book);
});

/* =========================
   GLOBAL FILTER LINK
========================= */
window.filterProducts = function (category) {
  window.location.hash = `#products/${category}`;
};


/* =========================
   LIKE LISTENER
========================= */
document.addEventListener("click", (e)=>{
  let btnLike=e.target.closest(".liked-cart")
  if (!btnLike) return;
  let allBooks=Object.values(books).flat()
    const idLikedItem=e.target.dataset.id
    if(!idLikedItem) return ;
    const foundBook=allBooks.find((ele)=>ele.idSection === idLikedItem)
    console.log(foundBook)
    if(!foundBook) return;
    const likeBookExist=likedCarts.find((ele)=>ele.idSection === idLikedItem)
    if(likeBookExist){
      console.log("element exist in liked Cart")
    }
    likedCarts.push( {...foundBook})
    saveLikeCarts()
    

})


/* =========================
   SPACESHIP LISTENER
========================= */
function spaceShipHandler(){
  let spaceShip=document.querySelector(".spaceship-wrapper")
  window.addEventListener("scroll", ()=>{
    if(window.scrollY > innerHeight){
      spaceShip.style.opacity=1
    }
    else{
      spaceShip.style.opacity=0
    }
  })
  spaceShip.addEventListener("click", (e)=>{
    window.scrollTo(
      {
        top:0,
        behavior:"smooth"
      }
    )
  })
}
spaceShipHandler()


