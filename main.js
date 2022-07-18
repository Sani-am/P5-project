function preload(){
}

function setup() {
    canvas = createCanvas(500,400);
    canvas.position(70,200);
    video = createCapture(VIDEO);
    video.hide();
}

function draw() {
    image(video,100,80,300,250);

    image(video,100,80,300,250);

    stroke(153, 211, 255);
    fill(153, 211, 255);
    
    circle(40,40,50);
    circle(460,40,50);
    circle(40,360,50);
    circle(460,360,50);


    stroke(153, 155, 255);
    fill(153, 155, 255);

    rect(63, 27, 375, 25);
    rect(63, 347, 375, 25);
    rect(27, 63, 25, 275);
    rect(448, 63, 25, 275);

    stroke(171,179,255);
    fill(171,252,255)

    ellipse(90, 80, 55, 55);
    ellipse(410, 80, 55, 55);
    ellipse(90, 320, 55, 55);
    ellipse(410, 320, 55, 55);
}
  


function take_snapshot(){
    save("frame.png");
}