let startButton = document.querySelector(".btn-primary");
let closeButton = document.querySelector(".close-button");
let board = document.querySelector(".board-container");

const xTile = '<div class="mark x">X</div>';
const oTile = '<div class="mark o">O</div>';

startButton.addEventListener("click", (e) => {
    e.preventDefault();
    board.classList.add("show");
})

closeButton.addEventListener("click", (e) => {
    e.preventDefault();
    console.log(board);
    board.classList.remove("show");
})

document.querySelector('.tile[data-index="1"]').innerHTML = oTile;