NoseX = 0;
NoseY = 0;
difference = 0;
rightWristX = 0;
leftWristX = 0;

function setup(){
    video = createCapture(VIDEO);
    video.size(550, 550);

    canvas = createCanvas(550, 550);
    canvas.position(560, 150);

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on("pose", gotPoses);
}

function draw(){
    background("#03fcb5");
    document.getElementById("square_side").innerHTML = "Width and height of a square shall be :- "+difference+" px";
    fill("#59b4ff");
    stroke("#ffffff");
    square(NoseX, NoseY, difference);
}
function modelLoaded(){
    console.log("PoseNet modalLoaded");
}
function gotPoses(results){
    if(results.length > 0){
        console.log(results);
        NoseX = results[0].pose.nose.x;
        NoseY = results[0].pose.nose.y;
        console.log("NoseX" + NoseX + " NoseY" + NoseY);

        rightWristX = results[0].pose.rightWrist.x;
        leftWristX = results[0].pose.leftWrist.x;
        difference = floor(leftWristX-rightWristX);

        console.log("Left Wrist X = "+leftWristX+" Right Wrist Y"+rightWristX+" difference"+difference+" px");
    }
}