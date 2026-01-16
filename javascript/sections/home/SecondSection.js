export const SecondSection = () => {
        const categories = [
      { id: 0, category: "Strategie", icon: "img1.jpg" },
      { id: 1, category: "Fitness", icon: "img2.jpg" },
      { id: 2, category: "Developement Personnel", icon: "img3.jpg" },
      { id: 3, category: "Programming", icon: "img4.jpg" },
      { id: 4, category: "Romance", icon: "img5.jpg" }
    ];
  return `
              <div class="second-section">
                  <div>
                    <div class="part1">
                      <div>Featured Categories</div>              
                      <div>See All Categories > </div>              
                    </div>
                    <div class="part2">
                    ${categories.map(ele => `
                    <div class="category-card">
                      <span class="category-text">${ele.category}</span>
                    </div>
                  `).join("")}                </div>
    
                  </div>
              </div>
              `;
}