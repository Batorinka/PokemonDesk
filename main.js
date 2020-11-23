function $getElById(id) {
    return document.getElementById(id);
}

const $btn = $getElById('btn-kick');
const $btnEnemy = $getElById('btn-kick-enemy');

const character = {
    name: 'Pikachu',
    defaultHP: 200,
    demageHP: 100,
    elHP: $getElById('health-character'),
    elProgressbar: $getElById('progressbar-character'),
    kick,
    changeHP,
    renderHP,
    renderHPLife,
    renderProgressHP,
}
const enemy = {
    name: 'Charmander',
    defaultHP: 150,
    demageHP: 100,
    elHP: $getElById('health-enemy'),
    elProgressbar: $getElById('progressbar-enemy'),
    kick,
    changeHP,
    renderHP,
    renderHPLife,
    renderProgressHP,
}

function kick(power) {
    console.log('Kick!');
    this.changeHP(random(power));
}

const thunderJoltClickCounter = clickCounter('Thunder Jolt', 6);
$btn.addEventListener('click', function () {
    const power = 20;

    let canKick = thunderJoltClickCounter();
    if (!canKick) this.disabled = true;

    enemy.kick(power);
});

const swanPowerClickCounter = clickCounter('Swan Power', 1);
$btnEnemy.addEventListener('click', function () {
    const power = 30;

    let canKick = swanPowerClickCounter();
    if (!canKick) this.disabled = true;

    character.kick(power);
});

function init() {
    console.log('Start Game!');
    character.renderHP();
    enemy.renderHP();
}

function clickCounter(btnName, limit) {
    let counter = 0;

    return function () {
        counter++;
        
        renderKickQuantityToLog(counter, limit, btnName);

        if (counter === limit) return false; //TODO

        return true;
    }
}

function renderKickQuantityToLog(counter, limit, btnName) {
    const msg = `${counter} из ${limit} ударов ${btnName}`;
    addToLog(msg);
}

function renderHP() {
    this.renderHPLife(this);
    this.renderProgressHP(this);
}

function renderHPLife() {
    this.elHP.innerText = this.demageHP + '/' + this.defaultHP;
}

function renderProgressHP() {
    this.elProgressbar.style.width = (this.demageHP / this.defaultHP * 100) + '%'
}

function changeHP(count) {
    this.demageHP -= count;

    if (this.demageHP <= 0) {
        this.demageHP = 0;
        alert('Бедный ' + this.name + ' проиграл бой!');
    }

    const log = this === enemy ? generateLog(this, character, count) : generateLog(this, enemy, count);
    addToLog(log);

    this.renderHP()
}

function addToLog($msg) {
    const $logs = document.querySelector('#logs');
    const $p = document.createElement('p');
    $p.innerText = $msg;
    $logs.insertBefore($p, $logs.children[0]);
}

const random = (num) => Math.ceil(Math.random() * num);


function generateLog(firstPerson, secondPerson, count) {
    const { name, demageHP, defaultHP } = firstPerson;

    const logs = [
        `${name} вспомнил что-то важное, но неожиданно ${secondPerson.name}, не помня себя от испуга, ударил в предплечье врага.`,
        `${name} поперхнулся, и за это ${secondPerson.name} с испугу приложил прямой удар коленом в лоб врага.`,
        `${name} забылся, но в это время наглый ${secondPerson.name}, приняв волевое решение, неслышно подойдя сзади, ударил.`,
        `${name} пришел в себя, но неожиданно ${secondPerson.name} случайно нанес мощнейший удар.`,
        `${name} поперхнулся, но в это время ${secondPerson.name} нехотя раздробил кулаком \<вырезанно цензурой\> противника.`,
        `${name} удивился, а ${secondPerson.name} пошатнувшись влепил подлый удар.`,
        `${name} высморкался, но неожиданно ${secondPerson.name} провел дробящий удар.`,
        `${name} пошатнулся, и внезапно наглый ${secondPerson.name} беспричинно ударил в ногу противника`,
        `${name} расстроился, как вдруг, неожиданно ${secondPerson.name} случайно влепил стопой в живот соперника.`,
        `${name} пытался что-то сказать, но вдруг, неожиданно ${secondPerson.name} со скуки, разбил бровь сопернику.`
    ];

    return logs[random(logs.length) - 1] + ` -${count}, [${demageHP}/${defaultHP}]`;
}


init();