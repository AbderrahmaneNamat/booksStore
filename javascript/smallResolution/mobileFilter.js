// mobileFilter.js
export function initMobileFilter() {
  document.addEventListener("click", e => {
    const overlay = document.querySelector(".filter-container-small");

    if (!overlay) return;

    // OPEN
    if (e.target.id === "openFilterBtn") {
      overlay.classList.add("enter-active");
      document.body.classList.add("no-scroll");
    }

    // CLOSE
    if (e.target.id === "closeFilterBtn") {
      overlay.classList.remove("enter-active");
      document.body.classList.remove("no-scroll");
    }
  });
}
