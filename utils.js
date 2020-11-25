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