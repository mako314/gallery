//document.addEventListener("DOMContentLoaded", () => fetchData);
//this will show if I have connected my files together correctly
//var url = 'http://localhost:3000/heroes';

const myGallery = document.createElement("heroes-container");
const newDiv = document.createElement("div");
const para = document.createElement("p");

console.log(myGallery)

fetch ('http://localhost:3000/heroes' , {
    method: 'GET',
    headers: {'Accept' : 'application/json',
},
})
.then(response => response.json())
.then(heroes => {
    for (let i = 0; i < heroes.length; i++){
    let currentHeroes = heroes[i];  
    console.log(currentHeroes)

    let imgPlaceHolder = document.createElement("heroLink")
    imgPlaceHolder.setAttribute("id",[i])
    imgPlaceHolder.src = currentHeroes.image
    imgPlaceHolder.setAttribute("src", currentHeroes.image)
    newDiv.appendChild(heroes)
    console.log(imgPlaceHolder)
    myGallery.appendChild(imgPlaceHolder)



}})




//function fetchData() {
  //  fetch('http://localhost:3000/heroes')
    //.then((resp) => resp.json())
    //.then((data) => console.log(data))
//}

//fetch('http://localhost:3000/heroes', {
  //  method: 'GET',
    //headers: {
      //  'Accept': 'application/json',
 //   },
//})
  // .then(response => response.json())
   //.then(response => response.map(json => json));

   //var mainContainer = document.getElementById('heroes-container');
   //for (var i = 0; i < heroes.length; i++) { 
    //I forget what to put here...array...no....
   //}
   //var div = document.createElement('div');
   //div.innerHTML = 'ID:' + 'Name: ' + 'Image:';
   //mainContainer.appendChild(div);


  //Create an eventlistener to hear when the btn3 is clicked to display the JSON data
  //document.addEventListener('click btn3', function (){
    //fetch('http://localhost:3000/heroes', {
    //method: 'GET',
    //headers: {
      //  'Accept': 'application/json',
    //},
//})
  // .then(response => response.json())
  // .then(response => console.log(response));
  //}
  //);

   //function Error(error){
    //if (error.message === "")
   

//Trying to figure out how to display my json on the DOM
//const renderHeroList = heroes => {
  //  const li = document.createElement('li')
    //const h3 = document.createElement('h3')
    //const hName = document.createElement('p')
    //const img = document.createElement('img')
    //const btn = document.createElement('button')
    
    //h3.textContent = heroes.hName
    //hName.textContent = 'Name: ${heroes.name}'
    //btn.textContent = 'Like'

    //img.src = heroes.imageUrl
    //li.className = 'list-li'

    //Event listeners will be for removal till I figure out adding likes.
    //btn.addEventListener('click', () =>li.remove())

    //li.append(h3, img, btn)
    //document.querySelector('#heroes-list').append(li)

// Event handlers 
//function handleForm(e){
    //e.preventDefault()
    //Supposed To Build Hero List
    //const hero = {
       // name: e.target.name.value,
        //imageUrl:e.target.imageUrl.value,
        //Likes: e.target.likes.value,
        //myFavorite: e.target.myFavorite.value
  //  }
    //render heroList(hero)
//}

//Invoking functions
//renderHeader()
//renderFooter()
//..forEach()
//document.querySelector('#hero-list').addEventListener('submit', handleForm)

//const allHeroesButton = document.querySelector("#heroes-list");
//const heroesContainer = document.querySelector("#heroes-container");

//const renderAllHeroes = ({ array }) => {};

//function displayJSONDataArray() {
  //  const jsonContainer = document.getElementById("heroes-container");
    //heroes.forEach(item => {
      //  const itemContainer = document.createElement("div");
        //itemContainer.innerHTML = JSON.stringify(item, null, 2);
        //heroesContainer.appendChild(itemContainer);
    //});
//}

// Call the function to display JSON data array when the page loads
//window.onload = displayJSONDataArray;

