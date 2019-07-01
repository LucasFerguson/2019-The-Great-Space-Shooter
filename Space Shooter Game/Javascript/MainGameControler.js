var player;
var controller;

var viewport;
var gameManager;


function preload() {
    // preload() runs once
    img = loadImage('./Assets/Images/Space Ship1.png');
}



function setup() {

    var cnv = createCanvas(windowWidth, windowHeight);

    gameManager = new GameManager();

    viewport = new Viewport();

    player = new Player();

    controller = new Controller();
    controller.setup();
}



function draw() {

    gameManager.update();





    background(0, 0, 0);

    translate(windowWidth / 2, windowHeight / 2);

    translate(-viewport.pos.x, -viewport.pos.y);

    // pointer.x = mouseX - windowWidth/2 + player.pos.x;
    // pointer.y = mouseY - windowHeight/2 + player.pos.y;

    // viewport.update();

    controller.update();
    controller.render();

    player.update();
    player.render();

    push();
    stroke(255);
    strokeWeight(2);
    point(controller.pointer.x, controller.pointer.y)
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



class GameManager {
    constructor() {
        this.gameRunning = false;
        this.running = "Menu";
    }

    update() {
        if (this.running == "Game") {
            runGameScene();
        }

        // if (this.running == "Menu") {
        //     runGameMenu();
        // }

        // if (this.running == "GameOver") {
        //     runGameOver();
        // }
    }

    run(scene) {
        this.running = scene;
    }


}













function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
}