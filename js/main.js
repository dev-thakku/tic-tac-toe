let startButton = document.querySelector(".btn-primary");
let board = document.querySelector(".board-wrapper");

startButton.addEventListener("click", (e) => {
    e.preventDefault();
    board.classList.add("show");
})