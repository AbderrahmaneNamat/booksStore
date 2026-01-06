export function renderCountriesSection(){
    
    return `
    <div class="section">
        <div class="polygon-bg"></div>

        <div class="content">
            <h4>MOVIES BY</h4>
            <h1>COUNTRIES</h1>
            <ul id="country-list"></ul>
        </div>
    </div>

    `
}
export function ul(){
    const countries = [
  {
    name: "United States",
    code: "US",
    flag: "🇺🇸"
  },
  {
    name: "France",
    code: "FR",
    flag: "🇫🇷"
  },
  {
    name: "Germany",
    code: "DE",
    flag: "🇩🇪"
  },
  {
    name: "United Kingdom",
    code: "GB",
    flag: "🇬🇧"
  },
  {
    name: "Japan",
    code: "JP",
    flag: "🇯🇵"
  },
  {
    name: "Italy",
    code: "IT",
    flag: "🇮🇹"
  },
  {
    name: "Greece",
    code: "GR",
    flag: "🇬🇷"
  },
  {
    name: "Spain",
    code: "ES",
    flag: "🇪🇸"
  }
];

    let list=document.getElementById("country-list")
    countries.forEach((country)=>{
        const li =document.createElement("li")
        li.textContent=`${country.flag} ${country.name}`
        list.appendChild(li)
        li.style.zIndex="10"

    })

}