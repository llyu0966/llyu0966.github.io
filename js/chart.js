const c = document.getElementById('chartCanvas');
let ctc = c.getContext('2d');

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
            ctc.save();
            ctc.fillStyle = fruit[i].color;
            ctc.fillRect(100*i, 600-30*fruit[i].quantity, 100, 30*fruit[i].quantity);
            ctc.restore();
            ctc.save();
            ctc.fillStyle = "#FFF8DC";
            ctc.font = "20px Georgia";
            ctc.fillText(fruit[i].name, 100*i+10, 550);
            ctc.fillText(fruit[i].quantity, 100*i+10, 580);
            ctc.restore();
        }

        ctc.save();
        ctc.font = "20px Verdana";
        ctc.fillText("A Bar Chart by", 300, 100);
        ctc.font = "italic 20px Verdana";
        ctc.fillText("Liyu Lin", 455, 100);
        ctc.restore();
