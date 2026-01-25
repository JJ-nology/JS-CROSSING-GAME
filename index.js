const startButton = document.querySelector(".start-button");
const startContainer = document.querySelector(".start-container");
const gameWindow = document.querySelector(".game-window");
const endZone = document.querySelector(".end-zone");
const playerCharacter = document.querySelector("#playerCharacter");
const carListItems = document.querySelectorAll("li");
const levelDisplay = document.querySelector(".level-display");
const instructions = document.querySelector(".instructions");

let gameCount = 1;
let animationID;
let playerSpeed = 5;
let carSpeed = 5;
let carList = [];
//eventlistener function
const keyDown = (event) => {
  if (event.key === 37 || event.code === "ArrowDown") {
    currentPosition = playerCharacter.offsetTop;
    movePlayer(currentPosition);
  }
};
//move player down the page
const movePlayer = (yPosition) => {
  if (yPosition < endZone.getBoundingClientRect().top) {
    playerCharacter.style.top = `${yPosition + playerSpeed}px`;
  } else if (yPosition >= endZone.getBoundingClientRect().top - 10) {
    // player in endzone
    levelUp();
  }
  // collision detection between player and all cars
  carListItems.forEach((vehicle) => {
    let player = playerCharacter.getBoundingClientRect();
    let car = vehicle.getBoundingClientRect();

    if (
      player.x <= car.x + car.width &&
      player.x + player.width >= car.x &&
      player.y <= car.y + car.height &&
      player.y + player.height >= car.y
    ) {
      gameOver(gameCount);
    }
  });
};
// reset player
const resetPlayer = () => {
  playerCharacter.style.top = "140px";
};
// player levels up
const levelUp = () => {
  gameCount += 1;
  levelDisplay.textContent = gameCount;
  resetPlayer();
  continueGame();
  playerSpeed *= 1.2;
  carSpeed *= 1.2;
};
// gameOver
const gameOver = (gameCount) => {
  // cancel animation and event listeners, reset player, display gamecount and message
  cancelAnimationFrame(animationID);
  window.removeEventListener("keydown", keyDown);
  resetPlayer();
  gameCount === 1
    ? (instructions.innerHTML =
        "Wow, Not even once? Better luck next time. Click on Let's go to try again")
    : (instructions.innerHTML = `Welldone! you helped Pengoo across ${gameCount} times.  Click on Let's go to play again`);
  startContainer.classList.toggle("hide-this");
  gameWindow.classList.toggle("hide-this");
  playerCharacter.classList.toggle("hide-this");
};
//create vehicles
const createCar = (top) => {
  const newElement = document.createElement("li");
  const car = document.createElement("img");
  car.src = `./assets/${Math.ceil(Math.random() * 10)}.png`;
  car.alt = "picture of a car";
  car.style.position = "absolute";
  car.style.top = gameWindow.getBoundingClientRect().top;
  car.offsetLeft = "0vw";
  car.offsetTop = `${top}`;
  //append child etc
  return;
};
// continue game
const continueGame = (gamecount) => {
  // move car
  const viewPortWidth = window.innerWidth;
  let startLeftPos = Math.floor(Math.random() * viewPortWidth);
  const moveEachVehicle = (timestamp) => {
    carListItems.forEach((car) => {
      if (startLeftPos >= viewPortWidth) {
        startLeftPos = 0;
        car.style.marginLeft = startLeftPos + "px";
      } else {
        car.style.marginLeft = startLeftPos + "px";
      }
      startLeftPos += 1;
    });
    requestAnimationFrame(moveEachVehicle);
  };
  animationID = requestAnimationFrame(moveEachVehicle);
  //event listener
  window.addEventListener("keydown", keyDown);
};

//start the game
const startGame = () => {
  startContainer.classList.toggle("hide-this");
  gameWindow.classList.toggle("hide-this");
  playerCharacter.classList.toggle("hide-this");
  continueGame();
};

// event listeners
startButton.addEventListener("click", startGame);
