 const ball = document.querySelector("#watch");

let position = 0;

//speed
const speed = 100; //px per sec
const framerate = 60; //frames per sec

let last;

function step() {
    const now = performance.now();
    //difference = delta on now and last now, and if last exist it uses last or it uses 0 if last does not exist
    const delta = now - last || 0;

    last = now;
// The 1000 / delta gives the perfect speed at all conditions
    position += speed / (1000 / delta);
    if (position > 200) {
        position = 0;

    }
    
    ball.style.transform = `translateX(${position}px)`;
    requestAnimationFrame(step);
}

step();
