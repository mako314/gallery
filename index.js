alert('test')

const btn = document.querySelector('.btn');
const outpost = document.querySelector('.output');
const url = 'http://localhost:3000/heroes';

btn.onclick = () => {
    getData();
}

function getData() {
    fetch(url)
    .then(rep => rep.json())
    .then(data =>{
        console.log(data);
    })

}
