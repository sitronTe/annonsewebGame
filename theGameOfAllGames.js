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

var plate = {
	"width" : 250,
	"height" : 20,
	"x" : board.width/2,
	"y" : board.height - 30
}

var mouse = {
	"x" : 400,
}

var context;

function testRun() {
	var c = document.getElementById("gameBoard");
	context = c.getContext("2d");
	c.addEventListener('mousemove', function (evt) {mouse.x = evt.clientX;}, false);
	setInterval(tick, 10);
}

function tick() {
	move();
	draw();
	movePlate();
}

function move() {
	ball.x += ball.dx;
	var newY = ball.y - ball.dy;
	if(ball.y < plate.y && newY >= plate.y){
		if(ball.x > plate.x && ball.x < plate.x + plate.width){
			ball.dy = -ball.dy;
			ball.y -= 2 * ball.dy;
		}
	}
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

function movePlate(){
	if(mouse.x >= plate.width/2 && mouse.x <= board.width - plate.width/2){
		plate.x = mouse.x - plate.width/2;
	}
}

function draw() {
	context.clearRect(0, 0, board.width, board.height);
	context.beginPath();
	context.fillStyle = "#ff0000";
	context.arc(ball.x, ball.y, ball.r, 0, Math.PI * 2, true);
	context.closePath();
	context.fill();
	context.fillStyle = "#00eeee";
	context.fillRect(plate.x, plate.y, plate.width, plate.height);
}