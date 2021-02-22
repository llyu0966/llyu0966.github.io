var c = document.getElementById("myCanvas");
var ctx = c.getContext("2d");

//Draw cloud
ctx.beginPath();
ctx.moveTo(170, 80);
ctx.bezierCurveTo(130, 100, 130, 150, 230, 150);
ctx.bezierCurveTo(250, 180, 320, 180, 340, 150);
ctx.bezierCurveTo(420, 150, 420, 120, 390, 100);
ctx.bezierCurveTo(430, 40, 370, 30, 340, 50);
ctx.bezierCurveTo(320, 5, 250, 20, 250, 50);
ctx.bezierCurveTo(200, 5, 150, 20, 170, 80);
ctx.closePath();
ctx.lineWidth = 5;
ctx.fillStyle = '#8ED6FF';
ctx.fill();
ctx.strokeStyle = '#0000ff';
ctx.stroke();
ctx.fillStyle = "#FF0000";
ctx.font="20px Veranda";
ctx.fillText("Cloud",200,120);

//Draw sun
ctx.beginPath();
ctx.fillStyle = "yellow";
ctx.arc(480, 80, 50, 0, Math.PI * 2, true); // Outer circle
ctx.fill();
ctx.closePath();
ctx.fillStyle = "#FF0000";
ctx.font="20px Veranda";
ctx.fillText("Sun",460,80);

ctx.fillStyle = "#FF0000";
ctx.fillRect(112.5,230,175,70);

// Draw triangle
ctx.fillStyle="#A2322E";
ctx.fillRect(142.5,180,30,50);
ctx.beginPath();
ctx.moveTo(112.5,230);
ctx.lineTo(285,230);
ctx.lineTo(199,200);
ctx.closePath();
ctx.fill();

//windows
ctx.fillStyle="#663300";
ctx.fillRect(125,240,35,50);
ctx.fillStyle="#0000FF";
ctx.fillRect(127,242,13,23);
ctx.fillRect(143,242,13,23);
ctx.fillRect(143,267,13,21);
ctx.fillRect(127,267,13,21);

//door
ctx.fillStyle = "#754719";
ctx.fillRect(180,253,30,47);

//door knob
ctx.beginPath();
ctx.fillStyle = "#F2F2F2";
ctx.arc(205,275,3,0,2*Math.PI);
ctx.fill();
ctx.closePath();

//Text on the Right
ctx.font="20px Veranda";
ctx.fillText("Hello",230,260);
ctx.font="10px Veranda";
ctx.fillText("Welcome to",230,275);
ctx.fillText("My House",230,285);

