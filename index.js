const durationInput = document.querySelector('#duration');
const startButton = document.querySelector('#start');
const pauseButton = document.querySelector('#pause');
const circle = document.querySelector('circle');

const parimeter = circle.getAttribute('r') * 2 * Math.PI;
circle.setAttribute('stroke-dasharray', parimeter);

let currentOffset = 0;
const timer = new Timer(durationInput, startButton, pauseButton , {
    onStart() {
        console.log('Timer started');
    },

    onTick() {
        circle.setAttribute('stroke-dashoffset', currentOffset);
        currentOffset = currentOffset - 50;
    },

    onPausue() { 
        console.log('Timer is paused');
    },

    onComplete() {
        console.log('Timer is completed');
    }
});
