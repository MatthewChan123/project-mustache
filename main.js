mouthX = 0;
mouthY = 0;
function preload() {
mustache = loadImage('https://i.postimg.cc/3x3QzSGq/m.png')
}
function setup() {
    canvas = createCanvas(300, 300);
    canvas.position(300, 2000);
    video = createCapture(VIDEO);
    video.size(300, 300);
    video.hide();
    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}
function draw() {
    image(video, 0, 0, 300, 300);
    image(mustache, mouthX, mouthY, 30, 30);
}
function take_snapshot() {
    save('your_picture.png')
}
function modelLoaded() {
    console.log("PoseNet is initialized");
}
function gotPoses(results) {
     if (results.length > 0) {
         console.log(results);
         mouthX = results[0].pose.mouth.x - 10;
         mouthY = results[0].pose.mouth.y - 10;
         console.log("mouth x = " + mouthX);
         console.log("mouth y = " + mouthY);
     }
}