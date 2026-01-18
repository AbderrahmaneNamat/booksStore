/* =========================
   STORAGE HELPERS
========================= */
const getStorageData = (key) => {
  try {
    const data = JSON.parse(localStorage.getItem(key));
    return Array.isArray(data) ? data : [];
  } catch {
    return [];
  }
};

const setStorageData = (key, value) => {
  localStorage.setItem(key, JSON.stringify(value));
};

/* =========================
   EMPTY STATE RENDERERS
========================= */
export const chosenItemEmpty = () => {
  const carts = getStorageData("carts-item");
  return carts.length
    ? renderCartItems(carts)
    : `<div class="empty">Your cart is empty</div>`;
};

export const likedItemEmpty = () => {
  const liked = getStorageData("carts-liked");
  return liked.length
    ? renderLikedItems(liked)
    : `<div class="empty">No liked items yet</div>`;
};

/* =========================
   PAGE TEMPLATE
========================= */
export function UserCartsPage() {
  return `
    <div class="usercarts-wrapper">

      <div class="usercarts-tabs">
        <button class="tab chosen active">Cart</button>
        <button class="tab liked">Liked</button>
      </div>

      <div class="chosen-body visible">
        ${chosenItemEmpty()}
      </div>

      <div class="liked-body hidden">
        ${likedItemEmpty()}
      </div>

    </div>
  `;
}

/* =========================
   PAGE LOGIC
========================= */
export function UserCartsFunction() {
  const chosenTab = document.querySelector(".tab.chosen");
  const likedTab = document.querySelector(".tab.liked");
  const chosenBody = document.querySelector(".chosen-body");
  const likedBody = document.querySelector(".liked-body");

  chosenTab.onclick = () => switchTab(true);
  likedTab.onclick = () => switchTab(false);

  function switchTab(isCart) {
    chosenTab.classList.toggle("active", isCart);
    likedTab.classList.toggle("active", !isCart);

    chosenBody.classList.toggle("visible", isCart);
    chosenBody.classList.toggle("hidden", !isCart);

    likedBody.classList.toggle("visible", !isCart);
    likedBody.classList.toggle("hidden", isCart);
  }

  attachCartListeners();
}

/* =========================
   CART RENDER
========================= */
function renderCartItems(items) {
  return `
    <div class="cart-list">
      ${items.map(item => `
        <div class="cart-item">
          <img src="${item.image || "/imgs/default.jpg"}" alt="${item.name}">

          <div class="details">
            <span class="title">${item.name}</span>
            <span class="price">$${item.finalPrice}</span>
          </div>

          <div class="quantity">
            <button data-action="dec" data-id="${item.idSection}">−</button>
            <span class="text-black">${item.quantity || 1}</span>
            <button data-action="inc" data-id="${item.idSection}">+</button>
          </div>

          <button class="delete-cart" data-id="${item.idSection}">
            Delete
          </button>
        </div>
      `).join("")}
    </div>
  `;
}

/* =========================
   LIKED RENDER
========================= */
function renderLikedItems(items) {
  return `
    <div class="liked-list">
      ${items.map(item => `
        <div class="liked-item">
          <span>${item.title}</span>
          <button class="delete-liked" data-id="${item.idSection}">
            Delete
          </button>
        </div>
      `).join("")}
    </div>
  `;
}

/* =========================
   EVENT HANDLERS
========================= */
function attachCartListeners() {
  document.addEventListener("click", (e) => {
    const id = e.target.dataset.id;

    /* Delete cart */
    if (e.target.classList.contains("delete-cart")) {
      let carts = getStorageData("carts-item").filter(i => i.idSection !== id);
      setStorageData("carts-item", carts);
      document.querySelector(".chosen-body").innerHTML = chosenItemEmpty();
    }

    /* Delete liked */
    if (e.target.classList.contains("delete-liked")) {
      let liked = getStorageData("carts-liked").filter(i => i.idSection !== id);
      setStorageData("carts-liked", liked);
      document.querySelector(".liked-body").innerHTML = likedItemEmpty();
    }

    /* Quantity change */
    if (e.target.dataset.action) {
      let carts = getStorageData("carts-item");
      const item = carts.find(i => i.idSection === id);
      if (!item) return;

      if (e.target.dataset.action === "inc") item.quantity++;
      if (e.target.dataset.action === "dec" && item.quantity > 1) item.quantity--;

      setStorageData("carts-item", carts);
      document.querySelector(".chosen-body").innerHTML = chosenItemEmpty();
    }
  });
}
