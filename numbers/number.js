var canvas = document.querySelector('canvas');
var c = canvas.getContext('2d');


canvas.width = window.innerWidth;
canvas.height = window.innerHeight*0.5;

//create empty array
var images = [];
images.length = 11;

//push the images into array

for(var i = 1 ; i < images.length; i++){
    images[i] = new Image();
    images[i].src = 'numbers/tile0' + (i-1).toString() + '.png';
}

window.onload = function() {
	this.c.drawImage(images[1],100,100,200,200);
}

function startCount() {
	
	var i = 1;

	setInterval(function(){
    	if( i <= 10){
			c.clearRect(100,100,500,200);
        	c.drawImage(images[i],100,100,200,200);
		} else if (i == 11) {
			c.clearRect(100,100,500,200);
			c.drawImage(images[2],100,100,200,200);
			c.drawImage(images[1],300,100,200,200);
		} 
		i++;
		
	}, 500);
}
