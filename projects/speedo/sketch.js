let img;
var radius = 115;
var angle = 0;
var speed = 0.05;
let defaultAngle = 120;
let sensitivity = 2.5;
let micSensitivityLevel = 0.001;
let slider;
let slider2;
// var steps = TWO_PI/360;


function setup() {  
    let cnv = createCanvas(windowWidth, windowHeight);
    cnv.mousePressed(userStartAudio);
    // createCanvas(400, 400);
    mic = new p5.AudioIn();
    mic.start();
    angleMode(DEGREES);  
    slider = createSlider(0.002, 1.0, 0.001, 0);
    slider.position(width/2, (height/2)+20);
    slider.style('width', '80px');
    slider2 = createSlider(1.0, 25.0, 0.25);
    slider2.position(width/2, (height/2)+40);
    slider2.style('width', '80px');
  }

function draw() {
    background(0);
    image(img, width/2 - (img.width/2), height/2 - (img.width/2), img.width, img.height); 
    textSize(14);
    fill(255);
    text("Microphone Sensitivity", width/2, height-(height-140) );
    // background(255);
    // expandCar();
    moveDial();
}

function moveDial() {
    let micSensitivityLevel = slider.value();
    let micLevel = mic.getLevel();
    let sensitivity = slider2.value();
    strokeWeight(10); 
    stroke(255, 200, 200, 130);
    let cx = width/2;
    let cy = height/2;
    // background(0);
    translate(cx, cy); //set the new origin/point of rotation
    strokeWeight(10);
    stroke(255, 140, 130, 100);
    // rotate(angle);
    // line(0, 0, 1 * radius, 1 * radius);
    if (micLevel > micSensitivityLevel) {
        angle = (angle + 1) * (micLevel*sensitivity);
        rotate(defaultAngle + angle);
        line(0, 0, 1 * radius, 1 * radius);
    } else {
        angle = (angle - 1) * micLevel;
        rotate(defaultAngle + angle);
        line(0, 0, 1 * radius, 1 * radius);
    }
//     if (micLevel > 0.02) {
//         line(cx, cy, cx + cos(angle) * radius, cy + sin(angle) * radius);
//         rotate(angle);
//         angle = angle + (micLevel*5);
//     } else {
//         angle = angle - (micLevel*5);
//         rotate(angle);
//         // angle = 0;
//         line(cx, cy, cx + cos(angle) * radius, cx + sin(angle) * radius);
        
        
//     }
    // angle = angle + 5;
}

function preload() {
  img = loadImage('./assets/speedometer.png');
}

function mousePressed() {
    if (getAudioContext().state != 'running') {
        getAudioContext().resume();
    }
}