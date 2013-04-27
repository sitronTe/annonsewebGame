var ball = {
	"r" : 5,
	"x" : 400,
	"y" : 600,
	"dx" : 10,
	"dy" : 10
}

var board = {
	"width" : 800,
	"height" : 640
}

var context;

function testRun() {
	var c = document.getElementById("gameBoard");
	context = c.getContext("2d");
	context.fillStyle = "#444444";
	context.fillRect(0, 0, board.width, board.height);

	draw();
}

function draw() {
	context.beginPath();
	context.fillStyle = "#ff0000";
	context.arc(ball.x, ball.y, ball.r, 0, Math.PI * 2, true);
	context.closePath();
	context.fill();
}