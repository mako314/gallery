let heroCollection = document.querySelector("#heroes")

console.log(heroCollection)

fetch('http://127.0.0.1:3000/heroes', {
    method: 'GET',
    headers: {
        'Accept': 'application/json',
    },
})
   .then(response => response.json())
   .then(hero => {
    for (let i = 0; i < hero.length; i++){
        let currentHero = hero[i]; 

        //Create an image placeholder to house the images after your run through the loop
        let imgPlaceHolder = document.createElement("img")
        imgPlaceHolder.setAttribute("id",[i])

        //Adds the image key : value pairs from our fetch
        imgPlaceHolder.src = currentHero.image

        //Create a plaveholder for the hero Names
        let heroName = document.createElement("h4")
        heroName.setAttribute("class","hero-names")

        //Adds the hero name key : value pairs from our fetch

        heroName.textContent = currentHero.name

        heroCollection.appendChild(heroName)
        heroCollection.appendChild(imgPlaceHolder)

    }
   })