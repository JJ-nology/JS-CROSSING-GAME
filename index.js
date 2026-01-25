const startButton = document.querySelector(".start-button");
const startContainer = document.querySelector(".start-container");
const gameWindow = document.querySelector(".game-window");
const endZone = document.querySelector(".end-zone");
const playerCharacter = document.querySelector("#playerCharacter");
const vehicleList = document.querySelector(".vehicle-list");
const carListItems = document.querySelectorAll("li");
const levelDisplay = document.querySelector(".level-display");
let gameCount = 1;

let playerSpeed = 5;
let carSpeed = 5;
let carList = [];

//move player down the page
const movePlayer = (yPosition) => {
  if (yPosition < endZone.getBoundingClientRect().top) {
    // console.log(yPosition, endZone.getBoundingClientRect().top);
    playerCharacter.style.top = `${yPosition + playerSpeed}px`;
  } else if (yPosition >= endZone.getBoundingClientRect().top - 10) {
    // player in endzone
    levelUp();
  }
  carListItems.forEach((vehicle) => {
    let player = playerCharacter.getBoundingClientRect();
    let car = vehicle.getBoundingClientRect();

    if (
      player.x <= car.x + car.width &&
      player.x + player.width >= car.x &&
      player.y <= car.y + car.height &&
      player.y + player.height >= car.y
    ) {
      console.log("collision detected");
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
// continue game
const continueGame = (gamecount) => {
  // move car
  const viewPortWidth = window.innerWidth;
  const endZonePosition = gameWindow.getBoundingClientRect().top - 25;

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

      requestAnimationFrame(moveEachVehicle);
    });
  };
  requestAnimationFrame(moveEachVehicle);

  window.addEventListener("keydown", (event) => {
    if (event.key === 37 || event.code === "ArrowDown") {
      currentPosition = playerCharacter.offsetTop;
      movePlayer(currentPosition);
    }
  });
};

//start the game
const startGame = () => {
  startContainer.classList.toggle("hide-this");
  gameWindow.classList.toggle("hide-this");
  playerCharacter.classList.toggle("hide-this");
  // console.log(window.innerHeight, gameWindow.getBoundingClientRect().bottom);
  continueGame();
};

// event listeners
startButton.addEventListener("click", startGame);
