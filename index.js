const pot = document.querySelectorAll('.pot1');
const greenGuy = document.querySelectorAll('.leprechaun');
const score = document.querySelector('#score');
const timer = document.querySelector('#timer');
const start = document.querySelector('#start');
const end = document.querySelector('#end');

let randnumber = Math.round(Math.random() * 10);
if (randnumber === 1) {
  let imageElement = document.getElementById("leprechaun-image");
  imageElement.src = "./Assets/leprechaun.webp";
  imageElement.style.display = "block";
}
