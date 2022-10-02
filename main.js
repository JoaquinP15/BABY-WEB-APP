function preload(){

}

function setup(){
    canvas = createCanvas(400, 600);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(400, 600);
    video.hide();

    posenet = ml5.poseNet(video, modelLoaded);
    posenet.on('pose',gotResults);
}

function draw(){
    image(video,0, 0, 400, 600);
}

function modelLoaded(){

}

function gotResults{
    
}