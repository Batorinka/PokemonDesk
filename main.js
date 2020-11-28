import Game from "./Game.js";

const game = new Game();

const resetBtn = document.getElementById(`reset`);
const startBtn = document.getElementById(`start`);

resetBtn.addEventListener('click', () => {
    game.reset()
});

startBtn.addEventListener('click', () => {
    game.start()
    start.disabled = true;
});
