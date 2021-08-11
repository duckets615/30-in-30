const hours = document.querySelector('.hour');
const minute = document.querySelector('.minute');
const second = document.querySelector('.seconds');
const btn = document.querySelector('.btn');
const secHand = second.querySelector('hr');
// const btn = document.querySelector('.btn');

const tick = 360 / 60; 
const tickHour = 360 / 12;
let sec = 0;
let min = 0;
let hour = 0;
let segdeg = 0;
let mindeg = 0;
let hourdeg = 0;

function timer() {
    console.log(second);
    secHand.style.transform = `rotate(${segdeg += tick}deg)`
    // minute.style.transform = `rotate(${tick}deg)`
    // hour.style.transform = `rotate(${tickHour}deg)`
    console.log(segdeg)
}

btn.addEventListener('click', () => timer())