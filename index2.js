document.addEventListener("DOMContentLoaded", () => fetchData);
//this will show if I have connected my files together correctly
const url = 'http://localhost:3000/heroes';

function fetchData() {
    fetch(url)
    .then((resp)=> resp.json())
    .then((data) => console.log(data))
}

fetch(url, {
    method: 'GET',
    headers: {
        'Accept': 'application/json',
    },
})
   .then(response => response.json())
   .then(response => console.log(response))

//Trying to figure out how to display my json on the DOM
const renderHeroList = heroes => {
    const li = document.createElement('li')
    const h3 = document.createElement('h3')
    const hName = document.createElement('p')
    const img = document.createElement('img')
    const btn = document.createElement('button')
    
    h3.textContent = heroes.hName
    hName.textContent = 'Name: ${heroes.name}'
    btn.textContent = 'Like'

    img.src = heroes.imageUrl
    li.className = 'list-li'
}