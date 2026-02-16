let canvas = document.getElementById("my_canvas");
let context = canvas.getContext("2d");

const speed = 8;
let position = 0;
let moveSpeed = speed;
let radius = 30;

function moveBall() {
    if(position + radius > 1500) {
        moveSpeed = -speed;
    } else if(position - radius < 0) {
        moveSpeed = speed;
    }
    position += moveSpeed;
}

function drawBall() {
    context.clearRect(0, 0, 1500, 640);
    context.fillStyle = "#42875b";
    context.beginPath();
    context.arc(position, 350, radius, 0, 2 * Math.PI);
    context.fill();
}
function drawBall1() {
    context.clearRect(0, 0, 0, 640);
    context.fillStyle = "#36019e";
    context.beginPath();
    context.arc(position, 250, radius, 0, 2* Math.PI);
    context.fill();
}

function animate() {
    moveBall();
    drawBall();
    drawBall1();
    window.requestAnimationFrame(animate);
}

window.requestAnimationFrame(animate);