const endpoint = "https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json";
const cities=[];
fetch(endpoint).then(response=>{return (response.json())})
.then(data=>cities.push(...data));
console.log(cities);

function findmatch(word,cities)
{
     return cities.filter((elem)=>{
        const regex=new RegExp(word,'gi');
        return elem.city.match(regex) || elem.state.match(regex);
     })
}
function display()
{
    const matchedcity=findmatch(this.value,cities);
    const html=matchedcity.map(elem=>{
        const regex=new RegExp(this.value,'gi');
        const cityname=elem.city.replace(regex,`<span class="hl">${this.value}</span>`)
        const statename=elem.state.replace(regex,`<span class="hl">${this.value}</span>`)
        return `
        <li>
        <span>${cityname},${statename}</span>
        <span>${elem.population}</span>
        </li>
        `;
    }).join('');
    ul.innerHTML=html;
}
const ul=document.querySelector("ul");
const search=document.querySelector("input");
search.addEventListener("change",display);
search.addEventListener("keyup",display);
