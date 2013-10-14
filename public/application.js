var requestAnimationFrame =  
  window.requestAnimationFrame ||
  window.webkitRequestAnimationFrame ||
  window.mozRequestAnimationFrame ||
  window.msRequestAnimationFrame ||
  window.oRequestAnimationFrame ||
  function(callback) {
    return setTimeout(callback, 1);
  };



$(function() {
  var canvas = document.getElementById("starry-night");
  var sky = canvas.getContext("2d");
  var stars = new Array(500);
  HEIGHT = canvas.clientHeight;
  WIDTH = canvas.clientWidth;
  MAX_RADIUS = 4;
  
  for (var i = stars.length - 1; i >= 0; i--) {
    x = Math.floor(Math.random()*WIDTH);
    y = Math.floor(Math.random()*HEIGHT);
    radius = Math.floor(Math.random()*MAX_RADIUS)+1;
    stars[i] = {
      'x': x,
      'y': y,
      'radius': radius
    };
  };

  var render = function() {
    sky.clearRect(0, 0, WIDTH, HEIGHT);
    sky.beginPath();

    for (var i = stars.length - 1; i >= 0; i--) {
      star = stars[i];

      sky.arc(star.x, star.y, star.radius, 0, 2*Math.PI);
    }

    sky.fillStyle="#EEE";
    sky.fill();
  };

  render();
});

