//alert('test')

const btn = document.querySelector('.btn');
const outpost = document.querySelector('.output');
const url = 'http://localhost:3000/heroes';

//onclick = () => {
//    getData();
//}
fetch(url, {
    method: 'GET',
    headers: {
        'Accept': 'application/json',
    },
})
   .then(response => response.json())
   .then(response => console.log(response))

  
//function outData(value) {
    //console.log(value);
    //let html = '';
    //value.forEach((ele,ind) =>{
    //    console.log(ele);
  //      html += `<div>${ind+1}. ${ele.name} ${ele.image} ${ele.likes} ${ele.id}</div>`

// }) 
//}

function addData() {
    const name = document.getElementById("name").value;
    const image = document.getElementById("image").value;
};

let newData = {
        "heroName": name,
        "image": image,
        
      };
 console.log(newData);
  
    fetch('http://localhost:3000/heroes', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body : JSON.stringify(newData) // Convert the data to JSON string
  })
    .then(response => response.json())
    .then(data => {
      console.log('Data added/updated successfully:', data);
      
    })
    .catch(error => {
      console.error('Error:', error);
      //Will let me know that I have to fix something!
    })
    
    const preparedData = data.forEach(convertToHTML) //ReferenceError: Data is not defined!!!

    function convertToHTML(hero){
    const p = document.createElement('p')
    const img = document.createElement('img')
    const p2 = document.createElement('p')
    const div = document.createElement('div')
    
    p.textContent = hero.name
    img.src = hero.image
    p2.textContent = `Likes: ${hero.likes}`
    
    div.append(p, img, p2)
    jsonContainer.appendChild(div)
    }

    // JSON object to hold the data
let jsonData = {};

// Get the button element
const addButton = document.getElementById('addDataButton');

// Add an event listener to the button click event
addButton.addEventListener('click', function() {
  // Call a function to add data to the JSON object
  addDataToJSON();
});

// Function to add data to the JSON object
function addDataToJSON() {
  // Prompt the user to enter data
  const key = prompt('Enter a key:');
  const value = prompt('Enter a value:');

  // Check if key and value are non-empty
  if (key && value) {
    // Add the data to the JSON object
    jsonData[key] = value;

    // Log the updated JSON object to the console
    console.log(jsonData);
  } else {
    // Display an error message if either key or value is empty
    alert('Please enter valid information!');
  }

  // Add the data to the JSON object
  jsonData[key] = value;

  // Log the updated JSON object to the console
  console.log(jsonData);
}
console.log(btn);
console.log(outpost)

const container = document.getElementById("image");

jsonData.images.forEach(imageLink => {
  const imgElement = document.createElement("img");
  imgElement.src = imageLink;
  container.appendChild(imgElement);
});


