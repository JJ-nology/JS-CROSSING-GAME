const startButton = document.querySelector(".start-button");
const startContainer = document.querySelector(".start-container");
const gameWindow = document.querySelector(".game-window");
const playerCharacter = document.querySelector("#playerCharacter");
const vehicleList = document.querySelectorAll(".vehicle-list");

const startGame = () => {
  startContainer.classList.toggle("hide-this");
  gameWindow.classList.toggle("hide-this");
  playerCharacter.classList.toggle("hide-this");
};
const movePlayer = (yPosition) => {
  playerCharacter.style.top = `${Math.round(yPosition + 5)}px`;
};
// event listeners
startButton.addEventListener("click", startGame);
window.addEventListener("keydown", (event) => {
  // event.preventDefault();
  if (event.key === 37 || event.code === "ArrowDown") {
    console.log(event.key, event.code);
    currentPosition = playerCharacter.getBoundingClientRect().top;
    movePlayer(currentPosition);
  }
});
