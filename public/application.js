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
  var stars = new Array(300);
  HEIGHT = canvas.clientHeight;
  WIDTH = canvas.clientWidth;
  MAX_RADIUS = 3;
  SPEED = 0.3;
  
  for (var i = stars.length - 1; i >= 0; i--) {
    x = Math.floor(Math.random()*WIDTH);
    y = Math.floor(Math.random()*HEIGHT);
    radius = Math.random()*MAX_RADIUS+1;
    stars[i] = {
      'x': x,
      'y': y,
      'radius': radius
    };
  };

  var render = function() {
    // Clear the sky
    sky.clearRect(0, 0, WIDTH, HEIGHT);

    // Draw the stars
    sky.beginPath();
    for (var i = stars.length - 1; i >= 0; i--) {
      star = stars[i];

      star.x -= SPEED * star.radius;
      star.y -= SPEED * star.radius;
      if(star.x < 0) {
        star.x = WIDTH;
      } else if(star.y < 0) {
        star.y = HEIGHT;
      }
      sky.arc(star.x, star.y, star.radius, 0, 2*Math.PI);
    }
    sky.fillStyle="#EEE";
    sky.fill();

    // Redraw
    requestAnimationFrame(render);
  };

  render();
});

