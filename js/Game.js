export default class Game {
  constructor() {
    this.player = "x";
    this.board = new Array(9);
  }

  makeMove(i) {
    if (this.board[i]) return;
    this.board[i] = this.player;
    this.nextTurn();
  }

  nextTurn() {
    this.player = this.player === "x" ? "o" : "x";
  }
}
