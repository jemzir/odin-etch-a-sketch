const canvas = document.querySelector('#canvas');

for (let i = 0; i < 256; i +=1) {
    const box = canvas.appendChild(document.createElement('div'));
    box.classList.add('box')
};

function random(num) {
    return Math.floor(Math.random()*(num+1));
}

const boxes = document.querySelectorAll('.box');

const resetBtn = document.querySelector('#reset');

resetBtn.addEventListener('click', () => {
    for (i = 0; i < boxes.length; i +=1) {
        boxes[i].setAttribute('style', `background: none`);
    };
    for (i = 0; i < boxes.length; i +=1) {
        boxes[i].addEventListener('mouseover', (e) => {
            e.target.setAttribute('style', `background: rgb(${random(255)}, ${random(255)}, ${random(255)}`);
            console.log(e.target);
            });
        };
});

const colorBtn = document.querySelector('#color-choice');

function singleColor() {
    randomColor = `rgb(${random(255)}, ${random(255)}, ${random(255)}`;
    for (i = 0; i < boxes.length; i +=1) {
        boxes[i].addEventListener('mouseover', (e) => {
            e.target.setAttribute('style', `background: ${randomColor}`);
            console.log(e.target);
            });
        };
}

colorBtn.addEventListener('click', singleColor);

const rainbowBtn = document.querySelector('#rainbow');
rainbowBtn.addEventListener('click', rainbowColor);

function rainbowColor() {
    for (i = 0; i < boxes.length; i +=1) {
        boxes[i].addEventListener('mouseover', (e) => {
            e.target.setAttribute('style', `background: rgb(${random(255)}, ${random(255)}, ${random(255)}`);
            console.log(e.target);
            });
        };
}