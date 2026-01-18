export function SliderBooks() {
  const moveValue = 300;

  const slide = document.querySelector(".third-section-part2");
  const leftBtn = document.querySelector(".slider-btn.left");
  const rightBtn = document.querySelector(".slider-btn.right");

  if (!slide || !leftBtn || !rightBtn) return;

  function updateButtons() {
    console.log(slide.scrollLeft)
    leftBtn.disabled = slide.scrollLeft <= 0;
    rightBtn.disabled =
      slide.scrollLeft + slide.clientWidth >= slide.scrollWidth - 1;

    leftBtn.setAttribute("aria-disabled", leftBtn.disabled);
    rightBtn.setAttribute("aria-disabled", rightBtn.disabled);
  }

  rightBtn.addEventListener("click", () => {
    slide.scrollLeft += moveValue;
    updateButtons();
  });

  leftBtn.addEventListener("click", () => {
    slide.scrollLeft -= moveValue;
    updateButtons();
  });

   slide.addEventListener("scroll", updateButtons);
}
