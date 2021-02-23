const canvas = document.getElementById('myCanvas');
let ctx = canvas.getContext('2d');

function init()
{
    window.requestAnimationFrame(draw);
}

function draw()
{
    // https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/globalCompositeOperation
    ctx.globalCompositeOperation = 'source-over';
    ctx.clearRect(0, 0, canvas.width, canvas.height); // clear canvas

    // Sky
    ctx.fillStyle = 'rgb(135, 206, 235)';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    ctx.save();

    // Sun
    ctx.beginPath();
    ctx.fillStyle = "yellow";
    ctx.shadowColor = 'rgb(255, 191, 0)';
    ctx.arc(480, 80, 50, 0, Math.PI * 2, true); // Outer circle
    ctx.fill();
    ctx.shadowColor = 'transparent';
    ctx.closePath();

    
    // Clouds
    drawCloud(canvas.width / 6, 150, 0.5);
    drawCloud(canvas.width / 12, 50, 0.45);
    drawCloud(canvas.width / 2.2, 100, 0.5);
    drawCloud(canvas.width / 1.65, 150, 0.6);

    // Ground
    ctx.fillStyle = '#228B22';
    ctx.fillRect(0, canvas.height - (canvas.height / 2), canvas.width, canvas.height / 2);

    
    // Trees
    drawTree(canvas.width * 0.85, canvas.height * 0.65);
    drawTree(canvas.width * 0.80, canvas.height * 0.58);
    drawTree(canvas.width * 0.72, canvas.height * 0.62);
    drawTree(canvas.width * 0.66, canvas.height * 0.65);
    drawTree(canvas.width * 0.63, canvas.height * 0.56);
    drawTree(canvas.width * 0.92, canvas.height * 0.61);
    drawTree(canvas.width * 0.12, canvas.height * 0.63);
    drawTree(canvas.width * 0.16, canvas.height * 0.50);
    drawTree(canvas.width * 0.2, canvas.height * 0.64);
    drawTree(canvas.width * 0.27, canvas.height * 0.52);
    drawTree(canvas.width * 0.25, canvas.height * 0.67);
    drawTree(canvas.width * 0.38, canvas.height * 0.58);

    // House
    drawHouse();

    window.requestAnimationFrame(draw);
}

function drawCloud(x, y, size)
{
    ctx.fillStyle = 'white';
    ctx.beginPath();
    ctx.arc(x, y, 60 * size, Math.PI * 0.5, Math.PI * 1.5);
    ctx.arc(x + (70 * size), y - (60 * size), 70 * size, Math.PI * 1, Math.PI * 1.85);
    ctx.arc(x + (152 * size), y - (45 * size), 50 * size, Math.PI * 1.37, Math.PI * 1.91);
    ctx.arc(x + (200 * size), y, 60 * size, Math.PI * 1.5, Math.PI * 0.5);
    ctx.fill();
}


function drawTree(x, y)
{
    let trunkWidth = 10;
    let trunkHeight = 30;
    let base = 25;

    // Trunk
    ctx.fillStyle = 'rgb(117,59,16)';
    ctx.fillRect(x, y, trunkWidth, trunkHeight);

    // Leaves
    for(let i = 0; i < 3; i++)
    {
        ctx.beginPath();
        ctx.moveTo(x, y - (base * i));
        ctx.lineTo(x + base + (base / 4), y - (base * i));
        ctx.lineTo(x + (base / 4) , y - (base * i) - (base * 1.5));
        ctx.lineTo(x - base, y - (base * i));
        ctx.lineTo(x, y - (base * i));
        ctx.closePath();
        ctx.fillStyle = 'rgb(0,100,0)';
        ctx.fill();
    }
}

function drawHouse()
{
ctx.fillStyle = "#FAEBD7";
ctx.fillRect(212.5,430,175,70);


// Draw triangle
ctx.fillStyle="#A2322E";
ctx.fillRect(242.5,380,30,50);
ctx.beginPath();
ctx.moveTo(212.5,430);
ctx.lineTo(385,430);
ctx.lineTo(299,400);
ctx.closePath();
ctx.fill();


//windows
ctx.fillStyle="#663300";
ctx.fillRect(225,440,35,50);
ctx.fillStyle="#00FFFF";
ctx.fillRect(227,442,13,23);
ctx.fillRect(243,442,13,23);
ctx.fillRect(243,467,13,21);
ctx.fillRect(227,467,13,21);


//door
ctx.fillStyle = "#754719";
ctx.fillRect(280,453,30,47);

//door knob
ctx.beginPath();
ctx.fillStyle = "#F2F2F2";
ctx.arc(305,475,3,0,2*Math.PI);
ctx.fill();
ctx.closePath();


//Text on the Right
ctx.fillStyle = "#8A2BE2";
ctx.font="20px Veranda";
ctx.fillText("Hello",330,460);
ctx.font="10px Veranda";
ctx.fillText("Welcome to",330,475);
ctx.fillText("My House",330,485);
}

init();
