export const chosedItemEmpty = () => {
  if (!localStorage.getItem("carts-item")) {
    return `<div>0 Item added to cart</div>`;
  }
  return renderCartItems();
};

export const likedItemEmpty=()=>{
    if(!localStorage.getItem("liked-item")){
        return `<div>0 liked added to cart </div>`
    }
    return renderLikedItems();
}

export function UserCartsPage(){

    return `
    <div class="usercarts-wrapper">
        <div class="usercarts-items-container">
            <div class="usercarts-item-chosedItem active">chosedItem</div>
            <div class="usercarts-item-likedItem">LikedItem</div>
        </div>
        <div class="chosedItem-body">
            ${chosedItemEmpty()}
        </div>
        <div class="likedItem-body">
            ${likedItemEmpty()}

        </div>
    </div> 
    `
}

export function UsercartsFunction(){
    let chosedItemTitle=document.querySelector(".usercarts-item-chosedItem")
    let likedItemTitle=document.querySelector(".usercarts-item-likedItem")
    let chosedItemBody = document.querySelector(".chosedItem-body")
    let likedItemBody = document.querySelector(".likedItem-body")
    chosedItemTitle.addEventListener("click" , ()=>{
        chosedItemTitle.classList.add("active")
        if(likedItemTitle) likedItemTitle.classList.remove("active")
        chosedItemBody.style.opacity=1;
        likedItemBody.style.opacity=0;

    })
    likedItemTitle.addEventListener("click" , ()=>{
        likedItemTitle.classList.add("active")
        if(chosedItemTitle) chosedItemTitle.classList.remove("active")
        chosedItemBody.style.opacity=0;
        likedItemBody.style.opacity=1;
    })
}

const fakeCartItems = [
  { id: 1, title: "Atomic Habits", price: 18, qty: 1 },
  { id: 2, title: "Deep Work", price: 19, qty: 1 }
];

const fakeLikedItems = [
  { id: 3, title: "Rich Dad Poor Dad" },
  { id: 4, title: "Harry Potter" }
];


const data=JSON.parse(localStorage.getItem("carts-item"))

console.log(data)
function renderCartItems() {
    return`
    <div>
    
    ${data.map(item => `
        <div class="cart-item">
          <div class="img-container">
            <img src="/imgs/manga-manhwa-section/manhwa/nobless.jpg"/>
          </div>
          <div class="details-container">
            <span>${item.name}</span>
            <span>$${item.finalPrice}</span>
          </div>
          <div class="quantity-container">
            <div class="sub">-</div>
            <div class="quantity">0</div>
            <div class="addic">+</div>
          </div>
        
        <button class="delete-cart" data-delete="${item.idSection}">Delete</button>
        </div>
        `).join("")};
        </div>
        `
}



function renderLikedItems() {
    return`
    <div>
  ${fakeLikedItems.map(item => `
    <div class="liked-item">
      <span>${item.title}</span>
      <button class="delete-liked" data-id="${item.id}">Delete</button>
    </div>
  `).join("")};
    </div>

  `
}


