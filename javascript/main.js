let canvas = document.getElementById("canvas");
canvas.width = innerWidth;
canvas.height = innerHeight;
let ctx = canvas.getContext("2d");

ctx.fillStyle = "#000000";
ctx.fillRect(0, 0, innerWidth, innerHeight);

let colors = ["#a2708a", "#afdedc", "#5db7de"];

class Ball {
    constructor(x, y, r) {
        this.x = x;
        this.y = y;

        this.r = r;

        this.color = colors[Math.floor(Math.random()*colors.length)];

        this.velX = Math.random();
        this.velY = Math.random();
    }

    update() {
        this.x += this.velX;
        this.y += this.velY;

        if (this.x + this.r > innerWidth || this.x - this.r < 0) {
            this.velX = -this.velX;
        }
        if (this.y + this.r> innerHeight || this.y - this.r < 0) {
            this.velY = -this.velY;
        }
    }

    display() {
        ctx.fillStyle = this.color;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.r, 0, 2 * Math.PI);
        ctx.fill();
    }
}

let balls = [];

for (let i = 0; i < 100; i++) {
    let b = new Ball(Math.random()*innerWidth, Math.random()*innerHeight, Math.random()*20);
    balls.push(b);
}

setInterval(()=>{
    //reset background
    ctx.fillStyle = "#353238";
    ctx.fillRect(0, 0, innerWidth, innerHeight);
    for (let i = 0; i < balls.length; i++) {
        balls[i].update();
        balls[i].display();
    }
});