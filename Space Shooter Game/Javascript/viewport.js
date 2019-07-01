class Viewport {
    constructor() {
        this.pos = createVector(0, 0);
    }

    update(point) {
        this.pos = point;
    }

    /**
     * @param {Object} _pos - P5.js Vector
     */
    setpos(_pos) {
        this.pos = _pos;
    }
}


function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
}