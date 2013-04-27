function testRun() {
	var c=document.getElementById("gameBoard");
	var ctx=c.getContext("2d");
	ctx.fillStyle="#444444";
	ctx.fillRect(0,0,800,640);
	 
	ball= gameBoard.getContext('2d');
	ball.beginPath();
	ball.fillStyle="#ff0000";
	ball.arc(400,600,5,0,Math.PI*2,true); 
	ball.closePath();
	ball.fill();
}