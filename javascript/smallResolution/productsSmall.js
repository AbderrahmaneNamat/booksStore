export function productsSmall() {
  const test = document.querySelector(".test");
  const filter = document.querySelector(".filter-container");
  const filterSmall = document.querySelector(".filter-container-small");
  const exit = document.querySelector(".exit-button-container");

  if (!test || !filter || !filterSmall || !exit) return;

  test.addEventListener("click", () => {
    filter.classList.add("nonactive");
    filterSmall.classList.add("enter-active");
    document.body.classList.add("no-scroll"); // 🔒 lock scroll
  });

  exit.addEventListener("click", () => {
    filter.classList.remove("nonactive");
    filterSmall.classList.remove("enter-active");
    document.body.classList.remove("no-scroll"); // 🔓 unlock scroll
  });
}
