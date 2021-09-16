canvas=document.getElementById('myCanvas');
ctx=canvas.getContext("2d");

Rover_width=100;
Rover_height=100;
background_image="mars.jpg";
rover_image="rover.png";
Rover_x=10;
Rover_y=10;

function add(){
    background_imgTag=new Image();
    background_imgTag.onload=uploadbackground
}

function uploadbackground(){
    ctx.drawImage(background_imgTag,0,0,canvas.width,canvas.height);
}

function uploadrover(){
    ctx.drawImage(rover_imgTag, Rover_x, Rover_y, Rover_width, Rover_height);
}
window.addEventListener("keydown",my_keydown)
