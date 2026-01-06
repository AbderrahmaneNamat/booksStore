class AppHeader extends HTMLElement{
    connectedCallback(){
        this.innerHTML=`
        <div class="header-wrapper">
        <header class="header-container">
             <a href="#" class="books-text">Books<span>Store</span></a>
             <nav >
                <a href="#products">Produicts</a>
                </nav>
                <div class="login text-light"><a href="#login">Login</a></div>

        </header>
        <div class="test">3</div>
        </div>
        `
    }
}
customElements.define("app-header",AppHeader)