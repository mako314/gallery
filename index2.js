document.addEventListener("DOMContentLoaded", () => fetchData);
//this will show if I have connected my files together correctly
const url = 'http://localhost:3000/heroes';

function fetchData() {
    fetch(url)
    .then((resp) => resp.json())
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

   //function Error(error){
    //if (error.message === "")
   

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

    //Event listeners will be for removal till I figure out adding likes.
    btn.addEventListener('click', () =>li.remove())

    li.append(h3, img, btn)
    document.querySelector('#heroes-list').append(li)
}
// Event handlers 
function handleForm(e){
    e.preventDefault()
    //Supposed To Build Hero List
    const hero = {
        name: e.target.name.value,
        imageUrl:e.target.imageUrl.value,
        Likes: e.target.likes.value,
        myFavorite: e.target.myFavorite.value
    }
    //render heroList(hero)
}

//Invoking functions
//renderHeader()
//renderFooter()
//..forEach()
//document.querySelector('#hero-list').addEventListener('submit', handleForm)


