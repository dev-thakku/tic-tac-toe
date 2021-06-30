const xTile = '<div class="mark x">X</div>';
const oTile = '<div class="mark o">O</div>';

export default class GameView {
  updateBoard(game) {
    
    for (let i = 0; i < game.board.length; i++) {
      let tile = document.querySelector(`.tile[data-index='${i}']`);

      tile.innerHTML =
        game.board[i] === "x" ? xTile : game.board[i] === "o" ? oTile : "";
    }
    this.updatePlayerTurn(game)
  }

  updatePlayerTurn(game) {
    if (game.player === "x") {
        document.querySelector(".info-2").classList.remove("active");
        document.querySelector(".info-1").classList.add("active");
    } else {
        document.querySelector(".info-1").classList.remove("active");
        document.querySelector(".info-2").classList.add("active");
    }
  }
}
