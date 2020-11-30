export const random = (max, min = 0) => Math.ceil(Math.random() * (max- min)) + min;

export const disableBtn = () => {
    const $buttons = document.querySelectorAll('.button');
    $buttons.forEach( function(button) {
        button.disabled = true;
    });
}

export const addToLog = ($msg) => {
    const $logs = document.querySelector('#logs');
    const $p = document.createElement('p');
    $p.innerText = $msg;
    $logs.insertBefore($p, $logs.children[0]);
}

export const countBtn = (count = 6, el) => {
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