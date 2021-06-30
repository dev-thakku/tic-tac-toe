import Game from "./Game.js";
import GameView from "./GameView.js";

const startButton = document.querySelector(".btn-primary");
const closeButton = document.querySelector(".close-button");
const restartButton = document.querySelector(".restart-button");
const tiles = document.querySelectorAll(".tile");
const board = document.querySelector(".board-container");

let game = new Game();
let gameView = new GameView();

startButton.addEventListener("click", () => {
  game = new Game();
  gameView.updateBoard(game);
  board.classList.add("show");
});

closeButton.addEventListener("click", () => {
  board.classList.remove("show");
});

restartButton.addEventListener("click", () => {
  game = new Game();
  gameView.updateBoard(game);
});

tiles.forEach((tile) => {
  tile.addEventListener("click", () => {
    console.log(tile.dataset.index);
    game.makeMove(tile.dataset.index);
    gameView.updateBoard(game);
  });
});
