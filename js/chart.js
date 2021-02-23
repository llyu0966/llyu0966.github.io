var canvas = document.getElementById("ChartCanvas");
        
var ctx = canvas.getContext("2d");

        
var fruit = [
                {name:"Apple", quantity:20, color:"#DC143C"},
                {name:"Orange", quantity:10, color:"#FF7F50"},
                {name:"Banana", quantity:15, color:"#FFD700"},
                {name:"Kiwi", quantity:3, color:"#008000"},
                {name:"Blueberry", quantity:5, color:"191970"},
                {name:"Grapes", quantity:8, color:"#4B0082"}
             ];
        
for(i = 0; i < 6; i++)
{
   ctx.save();
   ctx.fillStyle = fruit[i].color;
   ctx.fillRect(100*i, 600-30*fruit[i].quantity, 100, 30*fruit[i].quantity);
   ctx.restore();
   ctx.save();
   ctx.fillStyle = "#FFF8DC";
   ctx.font = "20px Georgia";
   ctx.fillText(fruit[i].name, 100*i+10, 550);
   ctx.fillText(fruit[i].quantity, 100*i+10, 580);
   ctx.restore();
 }

ctx.save();
ctx.font = "20px Verdana";
ctx.fillText("A Bar Chart by", 300, 100);
ctx.font = "italic 20px Verdana";
ctx.fillText("Liyu Lin", 455, 100);
ctx.restore();
