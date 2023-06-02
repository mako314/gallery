//alert('test')

const btn = document.querySelector('.btn');
const outpost = document.querySelector('.output');
const url = 'http://localhost:3000/heroes';

onclick = () => {
    getData();
}
function getData() {
    fetch(url)
    .then(rep => rep.json())
    .then(data =>{
        outData(data);
    })

}
function outData(value) {
    console.log(value);
    let html = '';
    value.forEach((ele,ind) =>{
        console.log(ele);
        html += `<div>${ind+1}. ${ele.name} ${ele.image} ${ele.likes} ${ele.id}</div>`

}) 
}

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

