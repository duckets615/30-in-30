const hours = document.querySelector('.hour');
const minute = document.querySelector('.minutes');
const second = document.querySelector('.seconds');
const btn = document.querySelector('.btn');
const secHand = second.querySelector('hr');
const minHand = minute.querySelector('hr');
const hourHand = hours.querySelector('hr');
// const btn = document.querySelector('.btn');

const tick = 360 / 60; 
const tickHour = 360 / 12;
let sec = 0;
let min = 0;
let hour = 0;
let segdeg = 270;
let mindeg = 270;
let hourdeg = 270;

hourHand.style.transform = `rotate(${hourdeg += 6}deg)`
secHand.style.transform = `rotate(${segdeg += 6}deg)`
minHand.style.transform = `rotate(${mindeg += 30}deg)`

function timer() {

    if (min === 60 && sec === 60) {
        minHand.style.transform = `rotate(${mindeg += tick % 360}deg)`
        secHand.style.transform = `rotate(${segdeg += tick % 360}deg)`

    }
    
    
    hourHand.style.transform = `rotate(${hourdeg += tickHour % 360}deg)`
}

btn.addEventListener('click', () => timer())