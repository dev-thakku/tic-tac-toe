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
    if (game.findWinningCombination()) {
      console.log("winner>>", game.player);
    } else handleTileClick(tile.dataset.index);
  });
});

const handleTileClick = (i) => {
  console.log(i);
  game.makeMove(i);
  gameView.updateTail(game, i);
};
