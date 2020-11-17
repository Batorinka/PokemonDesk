const firstRow = prompt('Введите первую фразу:');
const secondRow = prompt('Введите вторую фразу:');
const char = prompt('Какую букву найти?')

function getRow(firstRow, secondRow, char) {
    return (getQuantityA(firstRow, char) > getQuantityA(secondRow, char)) ? firstRow : secondRow;
}

alert('В фразе "' + getRow(firstRow, secondRow) + '" больше всего букв ' + char);

function getQuantityA(word, char) {
    let result = 0;
    for (let i = 0; i < word.length; i++) {
        if (word.charAt(i) === char) result++;
    }
    return result;
}