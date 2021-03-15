var canvas = document.querySelector('canvas');
var c = canvas.getContext('2d');

function drawBubble(c, x, y, w, h, radius)
{
  var r = x + w;
  var b = y + h;
  c.beginPath();
  c.strokeStyle="black";
  c.lineWidth="2";
  c.moveTo(x+radius, y);
  c.lineTo(x+radius/2, y-10);
  c.lineTo(x+radius * 2, y);
  c.lineTo(r-radius, y);
  c.quadraticCurveTo(r, y, r, y+radius);
  c.lineTo(r, y+h-radius);
  c.quadraticCurveTo(r, b, r-radius, b);
  c.lineTo(x+radius, b);
  c.quadraticCurveTo(x, b, x, b-radius);
  c.lineTo(x, y+radius);
  c.quadraticCurveTo(x, y, x+radius, y);
  c.stroke();
}

function textInfo(c, text1, w, h)
{
    c.font = "15px Arial";
    c.fillText(text1, w, h);
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
    c.clearRect(300, 130, 240, 120); 
    drawBubble(c, 300,150,220, 90, 20);
    textInfo(c, text[j], 310, 180);
    textInfo(c, text[j+1], 310, 200);
    
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
    c.clearRect(100,100,200,200);
    c.drawImage(images[i],100,100,200,200);
}, 100)
