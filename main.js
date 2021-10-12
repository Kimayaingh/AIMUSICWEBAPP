song = "";

rightWristX=0;
rightWristY=0;
leftWristX=0;
leftWristY=0;
function preload(){
    song = loadSound("1.mp3");
}

function setup(){
    canvas = createCanvas(600,500);
    canvas.center();

    video= createCapture(VIDEO);
    video.hide();

    poseNet = ml5.poseNet(video,modelLoaded);
    poseNet.on("pose",gotPoses);
}

function modelLoaded(){
    console.log("PoseNet is initialized");
}

function gotPoses(results){
if (results.length>0){

console.log(results);
rightWristX=results[0].pose.rightWrist.x;
rightWristY=results[0].pose.rightWrist.y;

leftWristX=results[0].pose.leftWrist.x;
leftWristY=results[0].pose.leftWrist.y;

console.log("Right Wrist X = " + rightWristX + "Right Wrist Y =" + rightWristY);
console.log("Left Wirst X =" + leftWristX + "Left wrist Y =" + leftWristY);
}


}


function draw(){
    image(video, 0 , 0 , 600, 500);
}

function play(){
    song.play();
    song.setVolume(0.7);
    song.rate(10.3);
}