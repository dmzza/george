$(function() {
canvas = document.getElementById("starry-night");
sky = canvas.getContext("2d");
HEIGHT = canvas.clientHeight;
WIDTH = canvas.clientWidth;
MAX_RADIUS = 4;

sky.beginPath();
stars = new Array(500);
for (var i = stars.length - 1; i >= 0; i--) {
  x = Math.floor(Math.random()*WIDTH);
  y = Math.floor(Math.random()*HEIGHT);
  radius = Math.floor(Math.random()*MAX_RADIUS)+1;
  stars[i] = sky.arc(x,y,radius,0,2*Math.PI);
};
sky.fillStyle="#EEE";
sky.fill();

});
