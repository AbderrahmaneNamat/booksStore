export function renderFooter() {
  return `
    <footer class="footer">
      <div class="footer-container">

        <div class="footer-column">
          <h3>BookStore</h3>
          <p>Your gateway to knowledge, imagination, and inspiration.</p>
        </div>

        <div class="footer-column">
          <h4>Quick Links</h4>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/books">Books</a></li>
            <li><a href="/categories">Categories</a></li>
            <li><a href="/contact">Contact</a></li>
          </ul>
        </div>

        <div class="footer-column">
          <h4>Categories</h4>
          <ul>
            <li>Fantasy</li>
            <li>Manga</li>
            <li>Romance</li>
            <li>Personal Development</li>
          </ul>
        </div>

        <div class="footer-column">
          <h4>Follow Us</h4>
          <div class="social-links">
            <a href="#">Facebook</a>
            <a href="#">Instagram</a>
            <a href="#">Twitter</a>
          </div>
        </div>

      </div>

      <div class="footer-bottom">
        <p>© 2026 BookStore. All rights reserved.</p>
      </div>
    </footer>
  `;
}
