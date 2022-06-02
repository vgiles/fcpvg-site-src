// so it turns out there's a way easier way to do this... but meh whatever.
const awesomeSauce = {
    32: 'spacebar',
    48: '0',
    49: '1',
    50: '2',
    51: '3',
    52: '4',
    53: '5',
    54: '6',
    55: '7',
    56: '8',
    57: '9',
    65: 'a',
    66: 'b',
    67: 'c',
    68: 'd',
    69: 'e',
    70: 'f',
    71: 'g',
    72: 'h',
    73: 'i',
    74: 'j',
    75: 'k',
    76: 'l',
    77: 'm',
    78: 'n',
    79: 'o',
    80: 'p',
    81: 'q',
    82: 'r',
    83: 's',
    84: 't',
    85: 'u',
    86: 'v',
    87: 'w',
    88: 'x',
    89: 'y',
    90: 'z'
};

// this just stops spacebar scrolling the window.
window.addEventListener('keydown', (e) => {  
    if (e.keyCode === 32 && e.target === document.body) {  
      e.preventDefault();  
    }  
  });

var displayText = 'Type your name, then press return/enter';
var fade = 255;
var fadeAmount = 1;
let superArray = [];
let dummyFrameRate = 25;
let fadeTime = 5*dummyFrameRate; // set fade time in seconds



function gameLoop() {
    fadeText();
    window.requestAnimationFrame(gameLoop);
}

function setup() {
    createCanvas(720, 400);
    frameRate(dummyFrameRate);
    // window.requestAnimationFrame(gameLoop);
    renderText();
    
}

function fadeText() {
    background(255);
    if (fade > 254) {
        fadeAmount = -1;
        fade += fadeAmount;
        fill(0,0,0,fade);
        textSize(32);
        text(displayText, 10, 30);
    } 
}
function renderText() {
    background(255);
    // let fade = 255;
    fill(0,0,0,fade);
    textSize(32);
    text(displayText, 10, 30);
    // fadeText();
    // fade = 255;
}

function draw() {
}

function keyPressed() {
    if (keyCode != RETURN) {
        superArray.push(awesomeSauce[keyCode]);
    }    
    if (keyCode === RETURN) {
        for (i = 0; i <= superArray.length; i++) {
            if (superArray[i] == 'spacebar') {
                superArray[i] = " ";
            }
        }
        // var idx = superArray.indexOf('spacebar');
        // if (idx !== -1) {
        //     superArray[idx] = " ";
        // }
        // superArray.split(superArray.length);
        displayText = superArray.join('');
        renderText();
        superArray = [];
    }
}