const xTile = '<div class="mark x">X</div>';
const oTile = '<div class="mark o">O</div>';

export default class GameView {
  updateBoard(game) {
    for (let i = 0; i < game.board.length; i++) {
      let tile = document.querySelector(`.tile[data-index='${i}']`);

      tile.innerHTML =
        game.board[i] === "x" ? xTile : game.board[i] === "o" ? oTile : "";
    }
    this.updatePlayerTurn(game);
  }

  updateTail(game, i) {
    document.querySelector(`.tile[data-index='${i}']`).innerHTML =
      game.board[i] === "x" ? xTile : game.board[i] === "o" ? oTile : "";
    this.updatePlayerTurn(game);
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

  showWinner(player) {
    let popUp = document.querySelector(".pop-up");
    let winnerDetails = document.querySelector(".winner-details");
    let winner = player === "x" ? "player-1" : "player-2";

    popUp.classList.add("show");

    winnerDetails.innerHTML = `<h2 class="${winner}">Winner is ${
      player === "x" ? "Player 1" : "Player 2"
    }</h2>`;
  }

  showTie() {
    document.querySelector(".pop-up").classList.add("show");
    document.querySelector(
      ".winner-details"
    ).innerHTML = `<h2 class="tie">Tie!</h2>`;
  }

  hidePopUp() {
    console.log("called");
    document.querySelector(".pop-up").classList.contains("show")
      ? document.querySelector(".pop-up").classList.remove("show")
      : "";
  }
}
