function CanvasShade() {
  
  var c = document.querySelector('[data-js-target-script="canvas-shade"]');
  var $ = c.getContext('2d');
  var col = function(x, y, r, g, b) {
    $.fillStyle = "rgb(" + r + "," + g + "," + b + ")";
    $.fillRect(x, y, 1,1);
  }
  var R = function() {
    return(Math.floor(192 + 64*Math.cos( (x*x-y*y)/300 + t )) );
  }
  var G = function(x, y, t) {
    return(Math.floor(192 + 64 * Math.sin((x * x * Math.cos(t / 4) + y * y * Math.sin(t / 3)) / 300)) - 100);
  }
  var B = function() {
    return(Math.floor(0 + 64*Math.sin( 5*Math.sin(t/9) + ((x-100)*(x-100)+(y-100)*(y-100))/1100) ) - 125);
  }
  var t = 0; var x; var y;
  var run = function() {
    for(x = 0; x <= 35; x++) {
      for(y = 0; y <= 35; y ++) {
        col(x, y, R(x, y, t), G(x, y, t), B(x, y, t));
      }
    }
    t = t + 0.04;
    window.requestAnimationFrame(run);
  }
  run();
}


export default CanvasShade