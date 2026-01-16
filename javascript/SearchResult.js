import { books } from "./data.js"

const allBooks=Object.values(books).flat()


export function SearchResult(value){
    const counts=[]
  
    const filteredBooks=allBooks.filter((ele)=>ele.name.toLowerCase().includes(value.toLowerCase()) )
    filteredBooks.map((ele)=>console.log(ele.name))
    allBooks.forEach((book)=>{
        book.categories.forEach((categorie)=>{
            if(categorie.toLowerCase().includes(value.toLowerCase())){
                counts[categorie]=(counts[categorie] || 0) +1
            }
        })

    })
  console.log(counts)
    return `
        <div class="search-result-wrapper">
        <div class="search-resutl-text">Search<span>Result</span></div>
            <div class="search-result-container">
                <!-- Founded Categorie -->
                    ${foundedCategories(counts)}
                <!-- Founded Books -->
                    ${foundedBooks(filteredBooks)}
            </div>
        </div>
    `
}


export function foundedCategories(categoriesCount){
    return `
        <div class="founded-categorie-wrapper">
            <div class="founded-categorie-container">
                <div class="">Categorie Results </div>
                <div class="founded-categories-text-container">
                                    ${Object.entries(categoriesCount)
                    .map(
                        ([cat, count]) =>
                            `<div class="founded-categorie-count">${cat} |<span>${count}</span></div>`
                    )
                    .join("")}
                </div>
            </div>
        </div>
    `
}
export function foundedBooks(filteredBooks){
    return `
        <div class="founded-categorie-wrapper">
            <div class="">Books Results </div>
            <div class="founded-books-container">
                    ${filteredBooks.map((book,id)=>`<div key="${id}" class="founded-book-box">
                        <div class="founded-overlay"></div>
                        <div class="founded-book-details">
                            <div class="founded-book-details-text">${book.name}</div>
                            <div class="founded-book-details-author">${(book.author || "Not mentied")}</div>
                            <div class="founded-book-details-categories">${book.categories.map((cat)=>`<div class="book-categorie">${cat}</div>`).join("")}</div>
                            <div class="founded-book-details-view-container">
                                <div class="founded-book-details-view">view</div>
                            </div>
                        </div>
                        <div class="founded-book-img-container">
                            <img src="/imgs/newYearSection/book1.webp"/>
                        </div>
                        <div class="founded-book-name-container">
                            <div class="founded-book-name">${book.name}</div>
                        </div>
                        </div>`).join("")}
            </div>
        </div>
    `
}