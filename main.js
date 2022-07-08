let cnv = document.getElementById("myCanvas");
let ctx = cnv.getContext("2d");
cnv.width = 800;
cnv.height = 600;

ellipse(200, 400, 30, 50, Math.PI / 4, 0, Math.PI, "fill");

let imgEl = document.getElementById("testImg");
image(imgEl, 200, 200, 90, 100);

stroke("blue")
lineWidth(5);
triangle(10, 30, 10, 200, 350, 275, "stroke")

fill("pink");
font("36px Arial");
lineWidth(25);
text("Hello World", 300, 300, "fill");

fill("purple");
rect(500, 300, 150, 125, "fill");
