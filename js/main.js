// Bubbles Objects (Associative Arrays with Properties/key:value pairs)
let cnv = document.getElementById("myCanvas");
let ctx = cnv.getContext("2d");
cnv.width = 800;
cnv.height = 600;

// Create an array of random bubble objects
let bubbles = [];
for (let n = 1; n <= 100; n++) {
    bubbles.push(newRandomBubble());
}

requestAnimationFrame(draw);
function draw() {
    // Fill Canvas
    background("black");

    // Move and Draw Bubbles
    for (let i = 0; i < bubbles.length; i++) {
        moveBubble(bubbles[i]);
        drawBubble(bubbles[i]);
    }


    requestAnimationFrame(draw);
}

function newBubble(initX, initY, initR, initColor) {
    return {
        x: initX,
        y: initY,
        r: initR,
        color: initColor
    };
}

function newRandomBubble() {
    return {
        x: randomInt(0, cnv.width),
        y: randomInt(0, cnv.height),
        r: randomInt(5, 35),
        color: randomRGB()
    };
}

function drawBubble(aBubble) {
    stroke(aBubble.color);
    circle(aBubble.x, aBubble.y, aBubble.r, "stroke");
}

function moveBubble(aBubble) {
    aBubble.x += randomInt(-3, 4);
    aBubble.y += randomInt(-3, 4);
}



