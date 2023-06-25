document.addEventListener("DOMContentLoaded", () => fetchData);
//this will show if I have connected my files together correctly
const url = 'http://localhost:3000/heroes'
function fetchData() {
    fetch(url)
    .then((resp)=> resp.json())
    .then((data) => console.log(data))
}
