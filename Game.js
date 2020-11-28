import Pokemon from "./Pokemon.js";
import { pokemons } from "./pokemons.js";
import { random, countBtn } from "./utils.js";

class Game {
    reset = () => {
        const buttons = document.querySelectorAll('.control .kickButton');
        buttons.forEach(item => item.remove());
        const logs = document.querySelectorAll('#logs p');
        logs.forEach(item => item.remove());
        this.start();
    }

    start = () => {
        const pokemon1 = pokemons[random(pokemons.length - 1)];
        const pokemon2 = pokemons[random(pokemons.length - 1)];
        this.init(pokemon1, 'player1');
        this.init(pokemon2, 'player2');
    }

    init = (pokemon, selector) => {
        const $controlPlayer = document.querySelector(`.control-${selector}`);

        const player = new Pokemon({
            ... pokemon,
            selector: selector,
        });
                
        player.renderHP();
        player.renderImg();
        player.renderName();
        player.attacks.forEach(item => {
            const $btn = document.createElement('button');
            $btn.classList.add('button');
            $btn.classList.add('kickButton');
            $btn.innerText = item.name;
            const btnCount = countBtn(item.maxCount, $btn);
            $btn.addEventListener('click', () => {
                btnCount();
                player.changeHP(random(item.maxDamage, item.minDamage))
            });
        
            $controlPlayer.appendChild($btn);
        });
    }
}

export default Game;