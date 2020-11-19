const $btn = document.getElementById('btn-kick');
const $btnEnemy = document.getElementById('btn-kick-enemy');

const character = {
    name: 'Pikachu',
    defaultHP: 100,
    demageHP: 100,
    elHP: document.getElementById('health-character'),
    elProgressbar: document.getElementById('progressbar-character'),
}
const enemy = {
    name: 'Charmander',
    defaultHP: 100,
    demageHP: 100,
    elHP: document.getElementById('health-enemy'),
    elProgressbar: document.getElementById('progressbar-enemy'),
}

$btn.addEventListener('click', function () {
    const persons = [character, enemy];
    const power = 20;
    kick(persons, power);
});

$btnEnemy.addEventListener('click', function () {
    const persons = [enemy];
    const power = 30;
    kick(persons, power);
});

function kick(persons, power) {
    console.log('Kick');
    for(let i = 0; i < persons.length; i++) {
        changeHP(random(power), persons[i]);
    }
}

function init() {
    console.log('Start Game!');
    renderHP(character);
    renderHP(enemy);
}

function renderHP(person) {
    renderHPLife(person);
    renderProgressHP(person);
}

function renderHPLife(person) {
    person.elHP.innerText = person.demageHP + '/' + person.defaultHP;
}

function renderProgressHP(person) {
    person.elProgressbar.style.width = person.demageHP + '%'
}

function changeHP(count, person) {
    if (person.demageHP < count) {
        person.demageHP = 0;
        alert('Бедный ' + person.name + ' проиграл бой!');
        $btn.disabled = true;
    } else {
        person.demageHP -= count;
    }

    renderHP(person)
}

function random(num) {
    return Math.ceil(Math.random() * num)
}

init();