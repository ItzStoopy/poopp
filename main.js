song="";
function setup(){
    canvas= createCanvas (600,500);
    canvas.center();
    video=createCapture(VIDEO);
    video.hide();
}
function preload(){
    song= loadSound("The FitnessGram Pacer Test [EARRAPE] (1).mp3");
}
function play1()
{
song.play();
}
function draw(){
    image(video, 0, 0, 600, 500);
}