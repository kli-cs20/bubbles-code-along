// Bubbles Objects (Associative Arrays with Properties/key:value pairs)
let cnv = document.getElementById("myCanvas");
let ctx = cnv.getContext("2d");
cnv.width = 800;
cnv.height = 600;

// Create an array of random bubble objects
let bubbles = createRandomBubbleArray(100);
console.log(bubbles);

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

// EVENTS


