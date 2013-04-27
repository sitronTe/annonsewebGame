var ball = {
	"r" : 5,
	"x" : 400,
	"y" : 600,
	"dx" : 3,
	"dy" : 3
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
	if (ball.x < 0 || ball.x > board.width) {
		ball.dx = -ball.dx;
		ball.x += 2 * ball.dx;
	}
	if (ball.y < 0 || ball.y > board.height) {
		ball.dy = -ball.dy;
		ball.y -= 2 * ball.dy;
	}
}

function draw() {
	context.clearRect(0, 0, board.width, board.height);
	context.beginPath();
	context.fillStyle = "#ff0000";
	context.arc(ball.x, ball.y, ball.r, 0, Math.PI * 2, true);
	context.closePath();
	context.fill();
}