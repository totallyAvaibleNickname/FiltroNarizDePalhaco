mouseX = 0;
mouseY = 0;
function preload() {
  blueBall = loadImage('mtTriangulo.jpeg');
}
function setup() {
  canvas = createCanvas(300, 300);
  canvas.center();
  video = createCapture(VIDEO);
  video.size(300, 300);
  video.hide();
  poseNet = ml5.poseNet(video, modelLoaded);
  poseNet.on('pose', gotPoses);
}
function gotPoses(results) {
  if (results.length > 0) {
    console.log(results);
    mouseX = results[0].pose.nose.x -15 ;
    mouseY = results[0].pose.nose.y -15 ;
  }
}
function draw() {
  image(video, 0, 0, 300, 300);
  image(blueBall, mouseX, mouseY, 30, 30);
}
function takeSnapshot() {
  save('mtTriangulo.jpeg');
}
function modelLoaded() {
 console.log('poseNet foi iniciado'); 
}