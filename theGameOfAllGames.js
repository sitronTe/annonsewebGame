var ball = {
	"r" : 5,
	"x" : 400,
	"y" : 600,
	"dx" : 1,
	"dy" : 1
}

var board = {
	"width" : 800,
	"height" : 640
}

var context;

function testRun() {
	var c = document.getElementById("gameBoard");
	context = c.getContext("2d");

	setInterval(tick, 10);
}

function tick() {
	move();
	draw();
}

function move() {
	ball.x += ball.dx;
	ball.y -= ball.dy;
}

function draw() {
	context.clearRect(0, 0, board.width, board.height);
	context.beginPath();
	context.fillStyle = "#ff0000";
	context.arc(ball.x, ball.y, ball.r, 0, Math.PI * 2, true);
	context.closePath();
	context.fill();
}