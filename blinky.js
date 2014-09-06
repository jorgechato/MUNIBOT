var five = require('johnny-five'),
	board = new five.Board(),
	led,
	toggleStat = false;
 
board.on("ready", function(){
	console.log("\nboard ready");
	led = new five.Led(13);

	setInterval(toggleLed, 200);

	function toggleLed(){
		toggleStat = !toggleStat;

		if(toggleStat) led.on();
		else led.off();
	}
});

console.log("\nwaitting for device to connect");