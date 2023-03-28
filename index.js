let timeUp = false;
let score = 0;
let timeLeft = 300;
let elem = document.getElementById('countdown');
let startButton = document.getElementById("start-button");

startButton.addEventListener("click", startGame);

function startGame() {
  let timerId = setInterval(countdown, 1000);
  
  function countdown() {
    if (timeLeft == -1) {
        clearInterval(timerId);
        timesUp();
    } else {
        elem.innerHTML = timeLeft;
        timeLeft--;
    }
  }

  function timesUp() {
    alert("Time's up!");
  }

  function showLeprechaun() {
    let randnumber = Math.floor(Math.random() * 10) + 1;
    console.log(randnumber);
    let imageElement = document.getElementById("leprechaun-image" + randnumber);
    imageElement.src = "./Assets/leprechaun.webp";
    imageElement.style.display = "block";
    
    setTimeout(function() {
      imageElement.style.display = "none";
    }, 1000);
    
    imageElement.addEventListener("click", function() {
      score++;
      updateScore();
      console.log("Clicked Him");
    });
  }

  function updateScore() {
    document.getElementById("score").textContent = score;
  }

  updateScore();
  setInterval(showLeprechaun, 1500);
}