const startButton = document.querySelector(".start-button");
const startContainer = document.querySelector(".start-container");
const gameWindow = document.querySelector(".game-window");
const playerCharacter = document.querySelector("#playerCharacter");

const startGame = () => {
  startContainer.classList.toggle("hide-this");
  gameWindow.classList.toggle("hide-this");
  playerCharacter.classList.toggle("hide-this");
};

startButton.addEventListener("click", startGame);
