import Pokemon from "./Pokemon.js";
import { random } from "./utils.js";

const player1 = new Pokemon({
    name: 'Pikachu',
    type: 'electric',
    hp: 500,
    selector: 'character',
});

const player2 = new Pokemon({
    name: 'Charmander',
    type: 'file',
    hp: 450,
    selector: 'enemy',
});

function $getElById(id) {
    return document.getElementById(id);
}

const $btn  = $getElById('btn-thunder-jolt');
const $btn2 = $getElById('btn-electro-ball');

const btnCountJolt = countBtn(10, $btn);
$btn.addEventListener('click', function () {
    btnCountJolt();
    player2.changeHP(random(60, 20));
});

const btnElectroBall = countBtn(10, $btn2);
$btn2.addEventListener('click', function () {
    btnElectroBall();
    player1.changeHP(random(100, 20));
});

function countBtn(count = 6, el) {
    const innerText = el.innerText;
    el.innerText = `${innerText} (${count})`;
    return function () {
        count--;
        if (count === 0) {
            el.disabled = true;
        }
        el.innerText = `${innerText} (${count})`;
        return count;
    }
}
