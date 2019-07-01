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

        let targetVector = p5.Vector.sub(controller.pointer, this.pos);
        this.targetAngle = targetVector.heading();

        targetVector.div(4);

        let point = targetVector.add(this.pos);

        viewport.update(point);

        this.angle = this.targetAngle;

        // if (this.angle < this.targetAngle) {
        //     this.angle++;
        // } else {
        //     this.angle--;  
        // }

        if (controller.uparrow) {
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