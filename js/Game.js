export default class Game {
  constructor() {
    this.player = "x";
    this.board = new Array(9).fill(null);
  }

  makeMove(i) {
    if (this.board[i] || this.isEndofGame()) return;
    this.board[i] = this.player;
    const winningCombination = this.findWinningCombination();
    if (!winningCombination) this.nextTurn();
  }

  nextTurn() {
    this.player = this.player === "x" ? "o" : "x";
  }

  isEndofGame() {
    if (this.isTie()) return true;
    const winningCombination = this.findWinningCombination();
    console.log(winningCombination);
    if (winningCombination) {
      console.log("isEndofGame>>> true");
      return true;
    }
    return false;
  }

  isTie() {
    return !this.board.includes(null);
  }

  findWinningCombination() {
    const winningCombinations = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [6, 4, 2],
    ];

    for (const combination of winningCombinations) {
      let [a, b, c] = combination;
      if (
        this.board[a] &&
        this.board[a] == this.board[b] &&
        this.board[a] == this.board[c]
      )
        return combination;
    }
    return null;
  }
}
