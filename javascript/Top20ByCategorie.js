function Top20ByCategorie(){
    return `
    <div class="firstsection position-relative">
              <div class="cards-container"> 
                ${booksFirstSection.map((item)=>`<div class="card-f">
                  <img src="${item.img}"/>
                  <div class="title">${item.title}</div>
                  <div class="overlay"></div>
                </div>`).join("")}
                </div>
    </div>
    `
}
