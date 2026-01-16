
const text="3 BOOKS INSTEAD OF  ONLY WITH THE PRICE OF ONE"
const pad = (n) => String(n).padStart(2, '0')
export const textLength=text.length;

export const NewYearReduction=(days=0,hours=0,minutes=0,seconds=0)=>{
    
    return `
        <div class="newYearReduction-wrapper">
            <div class="newYearReduction-container">
                <div class="part1">
                    <div class="img-container">
                        <img src="/imgs/newYearSection/book1.webp" class="nmb1"/>
                        <img src="/imgs/newYearSection/book2.jpg" class="nmb2"/>
                        <img src="/imgs/newYearSection/book3.jpg" class="nmb3"/>
                    </div>
                </div>
                <div class="part2">
                    <div class="text-container">
                        <div>Celebrate New Year</div>
                        <div class="text-appear-by-steps">${text}</div>
                    </div>
                    <div class="timer-container">
                    <div class="timer">${days}<span>D</span>  ${pad(hours)}<span>H</span> ${pad(minutes)}<span>M</span> ${pad(seconds)}<span>S</span></div>
                    </div>   
                </div>
            </div>
        </div>
    `
}
export function getTimeLeftInMonth(){
    const now =new Date()  
    const endOfMonth=new Date(now.getFullYear(),now.getMonth()+1 , 0, 23, 59, 59)
    const diff=endOfMonth - now
    const days = Math.floor(diff / (1000 * 60 * 60 * 24))
    const hours = Math.floor((diff / (1000 * 60 * 60)) % 24)
    const minutes = Math.floor((diff / (1000 * 60)) % 60)
    const seconds = Math.floor((diff / 1000) % 60)

    return {
        days:days,
        hours: hours,
        minutes: minutes,
        seconds: seconds
    }
}

export function StepsHandler(){
    const textEl=document.querySelector(".text-appear-by-steps")
    if(textEl){
        const chars=textEl.textContent.length
        textEl.style.setProperty("--chars", chars);

    }
    
}