const startButton = document.querySelector(".start-button");
const startContainer = document.querySelector(".start-container");
const gameWindow = document.querySelector(".game-window");
const playerCharacter = document.querySelector("#playerCharacter");
const vehicleList = document.querySelector(".vehicle-list");
const carListItems = document.querySelector("img");
let playerSpeed = 5;
let carSpeed = 5;
let carList = [];
let startLeftPos = 0;
const maxRightPos = gameWindow.getBoundingClientRect().right;
// let gameOn = true;
let margin = 0;
//move player down the page
const movePlayer = (yPosition) => {
  console.log(yPosition);
  playerCharacter.style.top = `${yPosition + playerSpeed}px`;
};
//move each car
const make = () => {};
//create vehicles
const createCar = () => {
  const car = document.createElement("img");
  car.src = `./assets/${Math.ceil(Math.random() * 2)}.png`;
  car.alt = "picture of a car";
  car.style.position = "absolute";
  car.style.top = gameWindow.getBoundingClientRect().top;
  car.style.left = startLeftPos;
  car.offsetLeft = "40vw";
  car.offsetTop = "100px";
  carList.push(car);
  return;
};

//start the game
const startGame = () => {
  startContainer.classList.toggle("hide-this");
  gameWindow.classList.toggle("hide-this");
  playerCharacter.classList.toggle("hide-this");
  // move car

  var margin = 0;

  let w = window.innerWidth;
  const moveEachVehicle = (timestamp) => {
    if (margin > w) {
      margin = 0;
      carListItems.style.marginLeft = margin + "px";
    } else {
      carListItems.style.marginLeft = margin + "px";
    }
    margin += 1;

    requestAnimationFrame(moveEachVehicle);
  };
  requestAnimationFrame(moveEachVehicle);
  window.addEventListener("keydown", (event) => {
    if (event.key === 37 || event.code === "ArrowDown") {
      currentPosition = playerCharacter.offsetTop;
      movePlayer(currentPosition);
    }
  });
};

// event listeners
startButton.addEventListener("click", startGame);
