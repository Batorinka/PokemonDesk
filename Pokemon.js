import { random, disableBtn, addToLog } from "./utils.js";

class Selectors {
    constructor(name) {
        this.elHP = document.getElementById(`health-${name}`);
        this.elProgressbar = document.getElementById(`progressbar-${name}`);
    }
}

class Pokemon extends Selectors {
    constructor({ name, hp, type, selector }) {
        super(selector);
        this.name = name;
        this.hp = {
            current: hp,
            total: hp,
        };
        this.type = type;

        this.renderHP();
    }

    changeHP = (count) => {
        this.hp.current -= count;

        const log = this.generateLog(count);
        addToLog(log);

        if (this.hp.current <= 0) {
            this.hp.current = 0;
            alert('Бедный ' + this.name + ' проиграл бой!');

            disableBtn();
            
        }
    
        this.renderHP()
    }


    renderHP = () => {
        this.renderHPLife();
        this.renderProgressHP();
    }
    
    renderHPLife = () => {
        this.elHP.innerText = this.hp.current + '/' + this.hp.total;
    }
    
    renderProgressHP = () => {
        const procent = this.hp.current / (this.hp.total / 100);
        this.elProgressbar.style.width = procent + '%';
    }
    
    generateLog = (count) => {
        const logs = [
            `${this.name} вспомнил что-то важное, но неожиданно #Противник, не помня себя от испуга, ударил в предплечье врага.`,
            `${this.name} поперхнулся, и за это #Противник с испугу приложил прямой удар коленом в лоб врага.`,
            `${this.name} забылся, но в это время наглый #Противник, приняв волевое решение, неслышно подойдя сзади, ударил.`,
            `${this.name} пришел в себя, но неожиданно #Противник случайно нанес мощнейший удар.`,
            `${this.name} поперхнулся, но в это время #Противник нехотя раздробил кулаком \<вырезанно цензурой\> противника.`,
            `${this.name} удивился, а #Противник пошатнувшись влепил подлый удар.`,
            `${this.name} высморкался, но неожиданно #Противник провел дробящий удар.`,
            `${this.name} пошатнулся, и внезапно наглый #Противник беспричинно ударил в ногу противника`,
            `${this.name} расстроился, как вдруг, неожиданно #Противник случайно влепил стопой в живот соперника.`,
            `${this.name} пытался что-то сказать, но вдруг, неожиданно #Противник со скуки, разбил бровь сопернику.`
        ];
    
        return logs[random(logs.length) - 1] + ` -${count}, [${this.hp.current}/${this.hp.total}]`;
    }
}

export default Pokemon;