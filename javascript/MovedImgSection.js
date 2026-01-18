import { books } from "./data.js";

export function MovedImgSection(){
    return `
    <div class="movedImg-wrapper">
        
        <!-- FIRST ROW -->
        <div class="movedImg-track track-1">
            ${createItemsFirstRow()}
            ${createItemsFirstRow()}
        </div>

        <!-- SECOND ROW -->
        <div class="movedImg-track track-2">
            ${createItemsSecondRow()}
            ${createItemsSecondRow()}
        </div>

    </div>
    `
}
export function createItemsFirstRow(){
    return `
    
        ${books.manhwaBooks.map((ele,id)=>`
            <div class="movedImg-book-box">
                <div class="content-switch">
                    <div class="movedImg-book-img-container">
                        <img src="${ele.img}"/>
                    </div>
                    <div class="movedImg-book-desc-container">
                        <div class="movedImg-book-desc">
                        <div class="desc-name"><span>Name:</span>${ele.name}</div>
                        <div class="desc-author"><span>Author:</span>${ele.author}</div>
                        <div class="desc-year"><span>PublicationYear:</span>${ele.publicationYear}</div>
                        <div class="desc-rating"><span>Rating:</span>⭐${ele.rating}</div>
                        </div>
                    </div>
                </div>
            </div>
        `).join("")}

    `
}


export function createItemsSecondRow(){
    return `
    
        ${books.mangaBooks.map((ele,id)=>`
            <div class="movedImg-book-box">
                <div class="content-switch">
                    <div class="movedImg-book-img-container">
                        <img src="${ele.img}"/>
                    </div>
                    <div class="movedImg-book-desc-container">
                        <div class="movedImg-book-desc">
                        <div class="desc-name"><span>Name:</span>${ele.name}</div>
                        <div class="desc-author"><span>Author:</span>${ele.author}</div>
                        <div class="desc-year"><span>PublicationYear:</span>${ele.publicationYear}</div>
                        <div class="desc-rating"><span>Rating:</span>⭐${ele.rating}</div>
                        </div>
                    </div>
                </div>
            </div>
        `).join("")}

    `
}
