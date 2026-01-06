import { products } from "./data.js";

export function ProductPage(idp){
    const product=products.find(book=>book.id ===idp)
return `
    <div class="product-page product-wrapper">
       <div class=" product-container ">
            <div class="item">
                <div class="part1">
                    <img src="/javascript/img1.jpg" alt="" />
                </div>
                <div class="part2">
                <h1>${product.name}</h1>
                    <div class="categorie-container"> ${product.categories.map((category)=>`<div>${category}</div>`).join("/")}</div>

                    <div class="price-container">
                        <div class="initPrice"> $${product.priceInitial}</div>
                        <div class="finPrice">$${product.priceFinal}</div>
                    </div>
                    <div>
                    <div class="cart-actions">
                        <div class="quantity-control">
                            <button class="qty-btn minus">−</button>
                            <span class="qty-value">1</span>
                            <button class="qty-btn plus">+</button>
                         </div>

                        <button class="add-cart-btn">Add to Cart</button>
                    </div>

                </div>
            </div>
       </div>

    </div>
  `;
}