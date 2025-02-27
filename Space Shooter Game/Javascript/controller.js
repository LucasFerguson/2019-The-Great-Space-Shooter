/**
 * @class - Controller class for handling all Controller input
 */
class Controller {
    constructor() {

        this.keyCodes = [];
        this.keyChar = [];

        this.lastChar = 'a';
        this.char = 'a';

        this.pointer = createVector(0, 0);
    }

    /**
     * @function - Controller update function, Called for each keyup and keydown
     */
    update() {

        this.pointer.x = mouseX - windowWidth / 2 + viewport.pos.x;
        this.pointer.y = mouseY - windowHeight / 2 + viewport.pos.y;

        this.leftarrow = false;
        this.uparrow = false;
        this.rightarrow = false;
        this.downarrow = false;

        if (this.keyCodes[37] || this.keyCodes[65]) {
            this.leftarrow = true;
        }

        if (this.keyCodes[38] || this.keyCodes[87]) {
            this.uparrow = true;
        }

        if (this.keyCodes[39] || this.keyCodes[68]) {
            this.rightarrow = true;
        }

        if (this.keyCodes[40] || this.keyCodes[83]) {
            this.downarrow = true;
        }
    }

    /**
     * @function - Render what Keys are pressed
     */
    render() {
        let start = 65;
        let end = 90; // 222
        let pos = 0;

        fill(255);
        for (var i = start; i <= end; i++) {
            pos++;
            text(this.keyCodes[i], 0, 10 * pos + 50);
            text(this.keyChar[i], 40, 10 * pos + 50);
        }
    }


    /**
     * @function - Controller setup function
     */
    setup() {
        this.keyCodes = []; // You could also use an array
        for (var i = 0; i <= 222; i++) {
            this.keyCodes[i] = false;
        }

        this.keyChar = [];
        for (var i = 0; i <= 222; i++) {
            this.keyChar[i] = "-";
        }

        this.keyChar[8] = "backspace";
        this.keyChar[9] = "tab";
        this.keyChar[13] = "enter";
        this.keyChar[16] = "shift";
        this.keyChar[17] = "ctrl";
        this.keyChar[18] = "alt";
        this.keyChar[19] = "pause/break";
        this.keyChar[20] = "caps lock";
        this.keyChar[27] = "escape";
        this.keyChar[32] = "space";
        this.keyChar[33] = "page up";
        this.keyChar[34] = "page down";
        this.keyChar[35] = "end";
        this.keyChar[36] = "home";
        this.keyChar[37] = "left arrow";
        this.keyChar[38] = "up arrow";
        this.keyChar[39] = "right arrow";
        this.keyChar[40] = "down arrow";
        this.keyChar[45] = "insert";
        this.keyChar[46] = "delete";

        this.keyChar[48] = "0";
        this.keyChar[49] = "1";
        this.keyChar[50] = "2";
        this.keyChar[51] = "3";
        this.keyChar[52] = "4";
        this.keyChar[53] = "5";
        this.keyChar[54] = "6";
        this.keyChar[55] = "7";
        this.keyChar[56] = "8";
        this.keyChar[57] = "9";

        this.keyChar[65] = "a";
        this.keyChar[66] = "b";
        this.keyChar[67] = "c";
        this.keyChar[68] = "d";
        this.keyChar[69] = "e";
        this.keyChar[70] = "f";
        this.keyChar[71] = "g";
        this.keyChar[72] = "h";
        this.keyChar[73] = "i";
        this.keyChar[74] = "j";
        this.keyChar[75] = "k";
        this.keyChar[76] = "l";
        this.keyChar[77] = "m";
        this.keyChar[78] = "n";
        this.keyChar[79] = "o";
        this.keyChar[80] = "p";
        this.keyChar[81] = "q";
        this.keyChar[82] = "r";
        this.keyChar[83] = "s";
        this.keyChar[84] = "t";
        this.keyChar[85] = "u";
        this.keyChar[86] = "v";
        this.keyChar[87] = "w";
        this.keyChar[88] = "x";
        this.keyChar[89] = "y";
        this.keyChar[90] = "z";
    }
}

onkeydown = onkeyup = function (e) {
    e = e || event; // to deal with IE
    controller.keyCodes[e.keyCode] = e.type == 'keydown';
    /* insert conditional here */
    controller.update();
}