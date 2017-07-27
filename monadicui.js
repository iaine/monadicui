/**
* Porting the Raphael.js versin on Monadic Visualisation to HTML5
* Requires being put onto a canvas element. 
*/

function calculateAngle(k, length) {
   0 + (k * (1 / length) * 2 * Math.PI);
}

function calculateCosine(angle) {
  Math.round(250 + ((200) * Math.cos(angle)));
}

// calculate the arc from the centre for the y value
function calculateSine(angle) {
  Math.round(250 + ((200) * Math.sin(angle)));
}

//set the circle size. 
//todo: make this configurable. 
var SIZE = 40;

// the public function that it called. 
// Currently draws a set of circles 
function draw(coords, canvasID) {
  //var img = document.getElementById(jsID);
  //canvas div as the base
  var cnvs = document.getElementById(canvasID);
  
  cnvs.style.position = "absolute";
  /*cnvs.style.left = img.offsetLeft + "px";
  cnvs.style.top = img.offsetTop + "px";*/
  cnvs.style.left = "10px";
  cnvs.style.top = "10px";
  var _length = coords.length();
  k = 0;
  for (var i in coords) {
    k++;
    var angle = calculateAngle(k, _length);
    var ctx = cnvs.getContext("2d");
    ctx.beginPath();
    //use sine and cosine to calculate the x, y. 
    ctx.arc(calculateSine(angle), calculateSine(angle), SIZE, 0, 2 * Math.PI, false);
    ctx.lineWidth = 3;
    ctx.strokeStyle = '#00ff00';
    ctx.stroke();
  }
}
