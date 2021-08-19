noseX = 0;
noseY = 0;
rightwristX = 0;
difference = 0;
leftwristX = 0;


function setup(){
    canvas = createCanvas(550, 550);
    canvas.position(1100, 400);

    video = createCapture(VIDEO);
    video.size(550, 500);
    video.position(100, 400);

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPosses);


}

function modelLoaded(){
    console.log('PoseNet is Initialized!1!');
}

function draw(){
    background("#599eff");
    fill("#a159ff");
    stroke("#6259ff");
    square(noseX - 100, noseY - 100, difference);
}

function gotPosses(results){
    if (results.length > 0){
        console.log(results);
        noseX = results[0].pose.nose.x;
        noseY = results[0].pose.nose.y;
        console.log("nose x = " + noseX + " nose y = " + noseY);
        leftwristX = results[0].pose.leftWrist.x;
        rightwristX = results[0].pose.rightWrist.x;
        difference = floor(leftwristX - rightwristX);
        console.log("left wrist = " + leftwristX + "right wrist x = " + rightwristX + "difference = " + difference);
    }
}