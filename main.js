// Animation Intro

// Setup Canvas and Graphics Context
let cnv = document.getElementById("myCanvas");
let ctx = cnv.getContext("2d");
cnv.width = 900;
cnv.height = 750;

// Global Variables
let mouseIsPressed;
let mouseX, mouseY;
let size = 5;

// Main Program Loop (60 FPS)
requestAnimationFrame(loop);
function loop() {
  // Update Variables

  // Draw a circle if mouseIsPressed
  if (mouseIsPressed) {
    ctx.fillStyle = "black";
    ctx.beginPath();
    ctx.arc(mouseX, mouseY, 3.5, 0, 2 * Math.PI);
    ctx.fill();
  }

  requestAnimationFrame(loop);
}

// Event Stuff
document.addEventListener("mousedown", mousedownHandler);
document.addEventListener("mouseup", mouseupHandler);
document.addEventListener("mousemove", mousemoveHandler);
document.addEventListener("keydown", keydownHandler);

function mousedownHandler(event) {
  console.log(event);
  mouseIsPressed = true;
}

function mouseupHandler() {
  mouseIsPressed = false;
}

function mousemoveHandler(event) {
  let cnvRect = cnv.getBoundingClientRect();
  mouseX = event.x - cnvRect.x;
  mouseY = event.y - cnvRect.y;
  // console.log(event);
}

function keydownHandler(event) {
  if (event.code == "Space") {
    //Draw a background
    ctx.fillStyle = "white";
    ctx.fillRect(0, 0, cnv.width, cnv.height);
  } else if (event.code == "ArrowUp") {
    size++;
  } else if (event.code == "ArrowDown") {
    size--;
  }
}

document.getElementById("btn").addEventListener("click", btnClicked);

function btnClicked() {
  let statement = document.getElementById("output");

  let randNum = Math.random();
  if (randNum < 0.05) {
    statement.innerHTML = "Draw a house";
  } else if (randNum < 0.1) {
    statement.innerHTML = "Draw a pizza slice";
  } else if (randNum < 0.15) {
    statement.innerHTML = "Draw a pine tree";
  } else if (randNum < 0.2) {
    statement.innerHTML = "Draw a soccer ball";
  } else if (randNum < 0.25) {
    statement.innerHTML = "Draw a snowflake";
  } else if (randNum < 0.3) {
    statement.innerHTML = "Draw a lake";
  } else if (randNum < 0.35) {
    statement.innerHTML = "Draw a mountain";
  } else if (randNum < 0.4) {
    statement.innerHTML = "Draw a plane";
  } else if (randNum < 0.45) {
    statement.innerHTML = "Draw the nike logo";
  } else if (randNum < 0.5) {
    statement.innerHTML = "Draw a smart-phone";
  } else if (randNum < 0.55) {
    statement.innerHTML = "Draw a Canadian flag";
  } else if (randNum < 0.6) {
    statement.innerHTML = "Draw a bridge";
  } else if (randNum < 0.65) {
    statement.innerHTML = "Draw an apple ";
  } else if (randNum < 0.7) {
    statement.innerHTML = "Draw a bear";
  } else if (randNum < 0.75) {
    statement.innerHTML = "Draw a fish";
  } else if (randNum < 0.8) {
    statement.innerHTML = "Draw a city skyline";
  } else if (randNum < 0.85) {
    statement.innerHTML = "Draw the earth";
  } else if (randNum < 0.9) {
    statement.innerHTML = "Draw a fire";
  } else if (randNum < 0.95) {
    statement.innerHTML = "Draw pasta";
  } else if (randNum < 1) {
    statement.innerHTML = "Draw a boat";
  }
}
document.getElementById("clockbtn").addEventListener("click", clockbtnClicked);

function clockbtnClicked() {
  const timerElement = document.getElementById("timer");

  function startCountdown() {
    let time = 15;

    const countdown = setInterval(() => {
      timerElement.textContent = time;

      if (time == 0) {
        clearInterval(countdown);
        timerElement.classList.add("red");
      }

      time--;
    }, 1000);
  }
  startCountdown();
}

document.getElementById("btn2").addEventListener("click", btn2Clicked);

function btn2Clicked() {
  let randNums = Math.random();

  if (randNums < 0.2) {
    document.getElementById("status").style.backgroundColor = "green";
    document.getElementById("status").innerHTML = "Nicely drawn";
  } else if (randNums < 0.4) {
    document.getElementById("status").style.backgroundColor = "green";
    document.getElementById("status").innerHTML =
      "Wow, what an amazing drawing!";
  } else if (randNums < 0.6) {
    document.getElementById("status").style.backgroundColor = "red";
    document.getElementById("status").innerHTML = "Terrible work!";
  } else if (randNums < 0.8) {
    document.getElementById("status").style.backgroundColor = "red";
    document.getElementById("status").innerHTML = "Looks bad";
  } else {
    document.getElementById("status").style.backgroundColor = "yellow";
    document.getElementById("status").innerHTML = "I'm not sure what that is?!";
  }
}

document
  .getElementById("icon-undo")
  .addEventListener("click", iconundobtnClicked);

function iconundobtnClicked() {
  location.reload();
}
