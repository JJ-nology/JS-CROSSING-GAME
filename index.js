const startButton = document.querySelector("#startButton");
const startContainer = document.querySelector(".start-container");
const gameWindow = document.querySelector(".game-window");
const levelDisplay = document.querySelector(".level-display");
const instructions = document.querySelector(".instructions");
const canvas = document.querySelector("#canvas");
const roadArea = document.querySelector(".road-area");

// Set up the game window
let carList = [];
let createSpeed = 2;
let carTiming;
let breakTiming;
let gameCount = 0;
const context = canvas.getContext("2d");

// Set up player character
const playerChar = {
  width: 50,
  height: 50,
  speed: 10,
  y: 0,
};
const resetPlayerchar = () => {
  playerChar.x = canvas.width / 2 - 25;
};
const levelUp = () => {
  gameCount += 1;
  levelDisplay.textContent = gameCount;
  playerChar.x = canvas.width / 2 - 25;
  playerChar.y = 0;
};

// Start the game
const startGame = () => {
  startContainer.classList.toggle("hide-this");
  gameWindow.classList.toggle("hide-this");
  // canvas set up
  canvas.width = roadArea.getBoundingClientRect().width;
  canvas.height = roadArea.getBoundingClientRect().height;
  // update player
  resetPlayerchar();
  playerChar.y = 0;
  document.addEventListener("keydown", moveplayerChar);
  carTiming = setInterval(createCar, 1000);
  breakTiming = setInterval(() => {
    clearInterval(carTiming);
    setTimeout(() => {
      carTiming = setInterval(createCar, 1000);
    }, 5000);
  }, 15000);
  updateGame();
};
// Move the playerChar
const moveplayerChar = (event) => {
  if (event.key === "ArrowDown" && playerChar.y <= canvas.height - 50) {
    playerChar.y += playerChar.speed;
  }
};
// Create a car
const createCar = () => {
  const car = {
    x: -50,
    y: Math.random() * canvas.height,
    width: 50,
    height: 50,
  };
  // keep cars out of the safe zone
  if (car.y > canvas.height - 60 || car.y < 60) {
    y = Math.random() * canvas.height;
  } else {
    carList.push(car);
  }
};
// Update the game
const updateGame = () => {
  context.clearRect(0, 0, canvas.width, canvas.height);
  // Draw playerChar
  context.fillStyle = "#e1e6e1";
  context.fillRect(
    playerChar.x,
    playerChar.y,
    playerChar.width,
    playerChar.height
  );
  // Draw cars
  context.fillStyle = "#e2725b";
  carList.forEach((car) => {
    context.fillRect(car.x, car.y, car.width, car.height);
    car.x += createSpeed;
    // check if player in endzone
    if (playerChar.y > canvas.height - 60) {
      levelUp();
    }
    // Check collision with playerChar
    if (
      car.x < playerChar.x + playerChar.width &&
      car.x + car.width > playerChar.x &&
      car.y < playerChar.y + playerChar.height &&
      car.y + car.height > playerChar.y
    ) {
      gameOver();
    }

    // Remove cars that are off the screen
    if (car.x > canvas.width) {
      carList = carList.filter((b) => b !== car);
    }
  });
  requestAnimationFrame(updateGame);
};
// Game over
const gameOver = () => {
  gameCount === 0
    ? (instructions.innerHTML =
        "Wow, Not even once? Better luck next time. Click on Let's play to try again")
    : (instructions.innerHTML = `Welldone! you helped Pengoo across ${gameCount} times. Click on Let's play to try again`);
  clearInterval(carTiming);
  clearInterval(breakTiming);
  document.removeEventListener("keydown", moveplayerChar);
  carList = [];
  startContainer.classList.toggle("hide-this");
  gameWindow.classList.toggle("hide-this");
  gameCount = 0;
};

// event listeners
startButton.addEventListener("click", startGame);
onresize = () => {
  canvas.width = roadArea.getBoundingClientRect().width;
  canvas.height = roadArea.getBoundingClientRect().height;
  resetPlayerchar();
};
