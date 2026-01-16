

import { login, renderAuth } from "./login.js";
import { ProductPage } from "./product.js";
import { ProductsPage } from "./products.js";
import { ul } from "./renderCountriesSection.js";

import { renderHomePage } from "./renderHomePage.js";

import { SliderBooks } from "./SliderBooks.js";
import { initMobileFilter } from "./smallResolution/mobileFilter.js";
import { ReductionItemsButtonsController } from "./ReductionItemsSection.js";
import { getTimeLeftInMonth, NewYearReduction, StepsHandler, textLength } from "./NewYearReduction.js";
import { books } from "./data.js";
import { SearchResult } from "./SearchResult.js";
import { UsercartsFunction, UserCartsPage } from "./UserCartsPage.js";


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
  const product = books.booksSection.find(book => book.id === idp);

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
  // Searching
let isSearching=false;
const searchInput = document.querySelector(".search-container input");
searchInput.addEventListener(("input"), () =>{
  const value = searchInput.value
  if(value.length>0){
    isSearching=true;
    app.innerHTML=SearchResult(value)
  }
  else{
    isSearching=false
    router()

  }

})

// Router

function router() {
  if(isSearching) return;
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
    else if(hash === "#carts"){
      app.innerHTML=UserCartsPage()
       UsercartsFunction()

  }
   else if (hash === "#login") {
    renderAuth()
  }
  else {

    app.innerHTML=renderHomePage();
    ul()
    SliderBooks("third-section")
    SliderBooks("fourth-section")
    initMobileFilter()
    ReductionItemsButtonsController()
  const pad = (n) => String(n).padStart(2, '0')
   document.documentElement.style.setProperty(
    "--text-length",`${textLength}ch`
   );
   StepsHandler()

    setInterval(()=>{
      const timer=document.querySelector(".timer-container")
      if(!timer) return;
      const {days,hours,minutes,seconds}=getTimeLeftInMonth()
      timer.innerHTML=`
      <div class="timer">${days}<span>D</span>  ${pad(hours)}<span>H</span> ${pad(minutes)}<span>M</span> ${pad(seconds)}<span>S</span></div>
      `
    },1000)




    
    // =======books listening=====  deleted
    //   const observer=new IntersectionObserver((entries)=>{
      // entries.forEach((entrie)=>{
        //   if(entrie.isIntersecting && entrie.target.classList.contains("booksReduction-wrapper")){
          //       const categories = document.querySelectorAll(
            //         ".booksReduction-wrapper .book-categories .book-categorie");
            
            //       categories.forEach((cat) => {
    //         cat.classList.add("activecategory");
    //       });
    //     } 
    //   })
    // })
    // const booksSection=document.querySelector(".booksReduction-wrapper")
    // if(booksSection){
      //   observer.observe(booksSection)
      // }
    }
  } 
  
  
  window.addEventListener("hashchange", router);
  window.addEventListener("load", router);
  
  // carts listener
   
      document.addEventListener("click", (e) =>{
      console.log(e.target)
      if(e.target.closest(".add-cart")){
        const idSection=e.target.dataset.id
        console.log(e.target.dataset.id)
        let allbooks=Object.values(books).flat()
        let bookFounded=allbooks.find((book)=>book.idSection === idSection)
        if(bookFounded){
          const existedBook=userCarts.find((exist)=>exist.idSection === idSection)  
            if(existedBook){
              console.log("alreadyexist")
            }      
            if(!existedBook){
              userCarts.push({...bookFounded})
              localStorage.setItem("carts-item",JSON.stringify(userCarts))
              console.log(userCarts)
            }
        }
      }
      

    })

  // delete cart from chosed carts

  document.addEventListener("click", (e)=>{
    if(e.target.closest("delete-cart")){
      selectedItem =e.target.dataset.delete;
      
    }
  })
  
  export const  userCarts=JSON.parse(localStorage.getItem("carts-item"))||[]
  
  















