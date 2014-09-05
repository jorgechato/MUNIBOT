var five = require('johnny-five');
var board = new five.Board();

var LEDPIN = 13;
 
board.on("ready", function(){
  var led = new five.Led(LEDPIN);
  led.strobe();
});