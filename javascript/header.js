
class AppHeader extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <div class="header-wrapper">
        <header class="header-container">
          <a href="#/" class="books-text">
            Books<span>Store</span>
          </a>
          <div class="search-container">
            <span class="search-icon">🔍</span>
            <input type="text" placeholder="Search books..." />
          </div>

          <nav class="desktop-nav">
            <a href="#products">Products</a>
          </nav>

          <div class="login text-light desktop-login">
            <a href="#login">Login</a>
            <!-- Use it in HTML -->

          </div>
           <div class="cart-icon">
            <a href="#carts">
             <i class="fa-solid fa-bag-shopping"></i>
            </a>
          </div>

          <!-- hamburger -->
          <button class="menu-toggle" aria-label="Open menu">
            ☰
          </button>
        </header>
      </div>

      <!-- MOBILE MENU OVERLAY -->
      <div class="menu-overlay">
        <nav class="menu-panel">
          <a href="#/">Home</a>
          <a href="#/products">Products</a>
          <a href="#/login">Login</a>
        </nav>
        
      </div>
    `;

    this.setupMenuLogic();
  }

  setupMenuLogic() {
    const toggleBtn = this.querySelector(".menu-toggle");
    const overlay = this.querySelector(".menu-overlay");

    // OPEN
    toggleBtn.addEventListener("click", () => {
      overlay.classList.add("active");
      document.body.classList.add("no-scroll");
    });

    // CLOSE on background click
    overlay.addEventListener("click", e => {
      if (e.target === overlay) {
        overlay.classList.remove("active");
        document.body.classList.remove("no-scroll");
      }
    });
  }
}

customElements.define("app-header", AppHeader);
