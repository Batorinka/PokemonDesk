import Pokemon from "./Pokemon.js";
import { random, countBtn } from "./utils.js";

class Game {
    getPokemons = async (random = false, id = 0, name = '') => {
        
        let url = 'https://reactmarathon-api.netlify.app/api/pokemons';
        
        if (name !== '') {
            url += '?name=' + name;
        } else if (id !== 0) {
            url += '?id=' + id;
        } else if (random) {
            url += '?random=' + random;
        }

        const responce = await fetch(url);
        const body = await responce.json();
        return body;
    }

    reset = () => {
        const buttons = document.querySelectorAll('.control .kickButton');
        buttons.forEach(item => item.remove());
        const logs = document.querySelectorAll('#logs p');
        logs.forEach(item => item.remove());
        this.start();
    }

    start = async () => {
        let pokemon1 = await this.getPokemons(true);
        let pokemon2 = await this.getPokemons(true);
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