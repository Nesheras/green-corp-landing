const COLORS = ["255,108,80", "5,117,18", "29,39,57", "67,189,81"];
const BUBBLE_DENSITY = 100;

function generateDecimalBetween(left, right) {
    return (Math.random() * (right - left) + left).toFixed(2);
}

class Bubble {
    constructor(canvas) {
        this.canvas = canvas;

        this.getCanvasSize();
        this.init();
    }

    getCanvasSize() {
        this.canvasWidth = this.canvas.clientWidth;
        this.canvasHeight = this.canvas.clientHeight;
    }

    init() {
        this.color = COLORS[Math.floor(Math.random() * COLORS.length)];
        this.size = Math.random() * (50 - 1) + 1;
        this.alpha = (Math.random() * (10 - 5) + 5) / 10;
        this.translateX = Math.random() * this.canvasWidth;
        this.translateY = Math.random() * this.canvasHeight;
        this.velocity = generateDecimalBetween(20, 40);
        this.movementX = generateDecimalBetween(-2, 2) / this.velocity;
        this.movementY = generateDecimalBetween(1, 20) / this.velocity;
    }

    move() {
        this.translateX -= this.movementX;
        this.translateY -= this.movementY;

        if (this.translateY < 0 || this.translateX < 0 || this.translateX > this.canvasWidth) {
            this.init();
            this.translateY = this.canvasHeight;
        }
    }
}

class CanvasBackground {
    constructor(id) {
        this.canvas = document.getElementById(id);
        this.ctx = this.canvas.getContext("2d");
        this.dpr = window.devicePixelRatio;
        this.bubblesList = [];
    }

    start() {
        this.canvasSize();
        this.generateBubbles();
        this.animate();
    }

    canvasSize() {
        this.canvas.width = this.canvas.offsetWidth * this.dpr;
        this.canvas.height = this.canvas.offsetHeight * this.dpr;
        

        // Fix canvas to use correct width and height after scaling
        this.canvas.style.width = this.canvas.offsetWidth + 'px';
        this.canvas.style.height = this.canvas.offsetHeight + 'px';

        this.width = this.canvas.offsetWidth;
        this.height = this.canvas.offsetHeight;
    }

    generateBubbles() {
        for (let i = 0; i < BUBBLE_DENSITY; i++) {
            this.bubblesList.push(new Bubble(this.canvas));
        }
    }

    animate() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

        this.bubblesList.forEach(bubble => {
            bubble.move();
            this.ctx.beginPath();
            this.ctx.arc(bubble.translateX, bubble.translateY, bubble.size, 0, Math.PI * 2);
            this.ctx.fillStyle = `rgba(${bubble.color},${bubble.alpha})`;
            this.ctx.fill();
            
        });
        this.ctx.setTransform(1, 0, 0, 1, 0, 0);
        requestAnimationFrame(this.animate.bind(this));
}
}
const can = new CanvasBackground("orb-canvas");
can.start();


