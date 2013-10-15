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
  var stars = new Array(400);
  canvas.width  = window.innerWidth;
  canvas.height = window.innerHeight;
  var devicePixelRatio = window.devicePixelRatio || 1,
      backingStoreRatio = sky.webkitBackingStorePixelRatio ||
                          sky.mozBackingStorePixelRatio ||
                          sky.msBackingStorePixelRatio ||
                          sky.oBackingStorePixelRatio ||
                          sky.backingStorePixelRatio || 1,
      ratio = devicePixelRatio / backingStoreRatio;
  if(devicePixelRatio !== backingStoreRatio) {
    canvas.width  = window.innerWidth * 2;
    canvas.height = window.innerHeight * 2 + 100;
    canvas.style.width = window.innerWidth + 'px';
    canvas.style.height = (window.innerHeight + 100) + 'px';
    sky.scale(2,2);
  }
  HEIGHT = canvas.clientHeight;
  WIDTH = canvas.clientWidth;
  MAX_RADIUS = 1.5;
  SPEED = 0.2;

  for (var i = stars.length - 1; i >= 0; i--) {
    x = Math.floor(Math.random()*WIDTH);
    y = Math.floor(Math.random()*HEIGHT);
    radius = Math.random()*MAX_RADIUS+0.1;
    stars[i] = {
      'x': x,
      'y': y,
      'radius': radius
    };
  };

  var render = function() {
    // Clear the sky
    sky.clearRect(0, 0, WIDTH, HEIGHT);
    sky.fillStyle="#EEE";

    // Draw the stars
    for (var i = stars.length - 1; i >= 0; i--) {
      star = stars[i];

      star.x -= SPEED * star.radius;
      star.y -= SPEED * star.radius;
      if(star.x < 0) {
        star.x = WIDTH;
      } else if(star.y < 0) {
        star.y = HEIGHT;
      }
      sky.beginPath();
      sky.arc(star.x, star.y, star.radius, 0, 2*Math.PI);
      sky.fill();
      sky.closePath();
    }

    // Redraw
    requestAnimationFrame(render);
  };

  render();
});

