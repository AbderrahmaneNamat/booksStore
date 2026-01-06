export function SliderBooks(sectionClass) {
  const section = document.querySelector(`.${sectionClass}`);
  if (!section) return;

  const slider = section.querySelector(".part2");
  const btnLeft = section.querySelector(".slider-btn.left");
  const btnRight = section.querySelector(".slider-btn.right");


  const item = slider.querySelector(".item");
 btnLeft.addEventListener("click", () => {
    slider.scrollLeft -= item.clientWidth;
  });

  btnRight.addEventListener("click", () => {
    slider.scrollLeft += item.clientWidth;
  });   
}
