var player;
var keyboard;

var pointer
var camera;

let img;
let c;

function preload() {
    // preload() runs once
    img = loadImage('./Assets/Images/Space Ship1.png');
}

function setup() {

    var cnv = createCanvas(windowWidth, windowHeight);

    camera = new Camera();

    player = new Player();
    keyboard = new Keyboard();
    keyboard.setup();

    pointer = createVector(0, 0);

}

function draw() {
    background(0, 0, 0);

    translate(windowWidth / 2, windowHeight / 2);

    // translate(-player.pos.x, -player.pos.y);

    // pointer.x = mouseX - windowWidth/2 + player.pos.x;
    // pointer.y = mouseY - windowHeight/2 + player.pos.y;

    translate(-camera.pos.x, -camera.pos.y);

    pointer.x = mouseX - windowWidth / 2 + camera.pos.x;
    pointer.y = mouseY - windowHeight / 2 + camera.pos.y;


    player.update();
    player.render();

    keyboard.update();
    keyboard.render();

    push();
    stroke(255);
    strokeWeight(2);
    point(pointer.x, pointer.y)
    pop();

    push();
    fill(51);
    stroke(51);
    strokeWeight(2);
    textSize(25);

    let fps = frameRate();
    textSize(20);
    text("fps = " + Math.round(fps), 50, windowHeight - 20);


    pop();

}

/**
 * @function text - wow text
 * @param {string} string
 * @param {number} x
 * @param {number} y
 */
function text(string, x, y) {}

class Camera {
    constructor() {
        this.pos = createVector(0, 0);
    }

    /**
     * @param {any} campos
     */
    update(campos) {
        this.pos = campos;
    }
}


class Player {
    constructor() {
        this.pos = createVector(0, 0);
        this.vel = createVector(0, 0);
        this.acc = createVector(0, 0);
        this.angle = 0;
        this.targetAngle = 0;

        this.scale = 25;
        this.width = this.scale;
        this.height = this.scale;
    }

    update() {

        let targetVector = p5.Vector.sub(pointer, this.pos);
        this.targetAngle = targetVector.heading();

        targetVector.div(4);

        let point = targetVector.add(this.pos);

        camera.update(point);

        this.angle = this.targetAngle;

        // if (this.angle < this.targetAngle) {
        //     this.angle++;
        // } else {
        //     this.angle--;  
        // }

        if (keyboard.uparrow) {
            let thrust = p5.Vector.fromAngle(radians(this.angle));
            // thrust = p5.Vector.mult(thrust, 10)
            this.vel.add(thrust);
        }

        this.vel.add(this.acc);
        this.pos.add(this.vel);
        this.acc.mult(0);

        this.vel.mult(0.95);

    }

    render() {
        angleMode(DEGREES);
        push();
        translate(this.pos.x, this.pos.y);
        angleMode(DEGREES);
        rotate(this.angle + 90);
        // console.log(this.angle);

        imageMode(CENTER);
        image(img, 0, 0, this.width, this.height);
        pop();
    }
}