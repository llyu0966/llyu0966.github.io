var canvas = document.querySelector('canvas');
var cx = canvas.getContext('2d');

function drawBubble(cx, x, y, w, h, radius)
{
  var r = x + w;
  var b = y + h;
  cx.beginPath();
  cx.strokeStyle="black";
  cx.lineWidth="2";
  cx.moveTo(x+radius, y);
  cx.lineTo(x+radius/2, y-10);
  cx.lineTo(x+radius * 2, y);
  cx.lineTo(r-radius, y);
  cx.quadraticCurveTo(r, y, r, y+radius);
  cx.lineTo(r, y+h-radius);
  cx.quadraticCurveTo(r, b, r-radius, b);
  cx.lineTo(x+radius, b);
  cx.quadraticCurveTo(x, b, x, b-radius);
  cx.lineTo(x, y+radius);
  cx.quadraticCurveTo(x, y, x+radius, y);
  cx.stroke();
}

function textInfo(cx, text1, w, h)
{
    cx.font = "15px Arial";
    cx.fillText(text1, w, h);
}

//create empty array
var text = [];
text.length = 4;
text[1] = "I wanted to stop, but I could ";
text[2] = "only be exist when I'm walking. ";
text[3] = "I really hope to have someone ";
text[4] = "to give me a hug. "

var j = 1;
setInterval(function(){ 
    cx.clearRect(300, 130, 240, 120); 
    drawBubble(cx, 300,150,220, 90, 20);
    textInfo(cx, text[j], 310, 180);
    textInfo(cx, text[j+1], 310, 200);
    
    j=j+2;
    if( j >= 4){
        j = 1;
    }
}, 3000)


canvas.width = window.innerWidth;
canvas.height = window.innerHeight*0.8;

//create empty array
var images = [];
images.length = 48;

//push the images into array

for(var i = 1 ; i < images.length ; i++){
    images[i] = new Image();
    images[i].src = 'girl/tile' + (i-1).toString() + '.png';
}
var i = 1;
setInterval(function(){
    i++;
    if( i >= 48){
        i = 1;
    }
    cx.clearRect(100,100,200,200);
    cx.drawImage(images[i],100,100,200,200);
}, 100)
