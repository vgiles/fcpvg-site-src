let angle = 0;
let radius = 100;
function setup() {
    let cnv = createCanvas(600, 600);
    cnv.mousePressed(userStartAudio);
    // createCanvas(400, 400);
    mic = new p5.AudioIn();
    mic.start();
    angleMode(DEGREES); //tell p5 to use degrees instead of radians
}

function draw() {
    let micLevel = mic.getLevel();
    let cx = width/2;
    let cy = height/2;
    background(0);
    translate(0, 0); //set the new origin/point of rotation
    
    strokeWeight(3);
    stroke(255);
    // fill(255);
    if (micLevel > 0) {
        line(cx, cy, cx + cos(angle) * radius, cy + sin(angle) * radius);
        rotate(angle);
        angle = angle + (micLevel*10);
    } else {
        angle = 0;
        line(cx, cy, cx + cos(angle) * radius, cx + sin(angle) * radius);
        rotate(angle);
        
    }

    
}

