document.addEventListener('DOMContentLoaded', init);

let canvas, ctx, output;
let vegetables, corn, cucumber, tomato, potato, mushroom;
let cornImg, cucumberImg, tomatoImg, potatoImg, mushroomImg;

var SpeechRecognition = SpeechRecognition || webkitSpeechRecognition;
var SpeechRecognitionEvent = SpeechRecognitionEvent || webkitSpeechRecognitionEvent;

var recognition = new SpeechRecognition();
recognition.continuous = false;
recognition.lang = 'en-US';

function init()
{
    canvas = document.getElementById('canvas');
    ctx = canvas.getContext('2d');

    loadVegetableImages();
    defineVegetables();

    output = document.getElementById('output');

    speakButton = document.getElementById('speak');
    speakButton.addEventListener('click', toggleSpeak);
}

function loadVegetableImages()
{
    cornImg = new Image();
    cornImg.src = 'images/corn.png';

    cucumberImg = new Image();
    cucumberImg.src = 'images/cucumber.png';

    tomatoImg = new Image();
    tomatoImg.src = 'images/tomato.png';

    potatoImg = new Image();
    potatoImg.src = 'images/potato.png';

    mushroomImg = new Image();
    mushroomImg.src = 'images/mushroom.png';
}

function defineVegetables()
{
    corn = {
        name: 'Corn',
        x: 100,
        y: 100,
        img: cornImg
    };
    
    cucumber = {
        name: 'Cucumber',
        x: 100,
        y: 150,
        img: cucumberImg
    };
    
    tomato = {
        name: 'Tomato',
        x: 100,
        y: 200,
        img: tomatoImg
    };
    
    potato = {
        name: 'Potato',
        x: 100,
        y: 250,
        img: potatoImg
    };
    
    mushroom = {
        name: 'mushroom',
        x: 100,
        y: 300,
        img: mushroomImg
    };

    vegetables = {
        'corn': corn,
        'cucumber': cucumber,
        'tomato': tomato,
        'potato': potato,
        'mushroom': mushroom
    }
}

function toggleSpeak(e)
{
    text = e.target.textContent;
    if(text === 'Speak')
    {
        e.target.textContent = 'Stop';
        recognition.start();
    }
    else if(text === 'Stop')
    {
        e.target.textContent = 'Speak';
        recognition.abort();
    }
}

recognition.onresult = (e) =>
{
    res = e.results[0][0].transcript.toLowerCase();
    if(res == 'about')
    {
        author = 'Liyu Lin, CISC 3610 MW3 Spring 2021';
        output.textContent = author;
        textToSpeech(author);
    }
    else if(res == 'help')
    {
        help = 'Say a name of the object on the screen. Say about, to hear about the program.';
        output.textContent = help;
        textToSpeech(help);
    }
    else if(vegetables[res] != undefined)
    {
        vegetable = `Displaying ${res} on the screen...`
        displayVegetable(vegetables[res]);
        output.textContent = vegetable;
        textToSpeech(vegetable);
    }
    else
    {
        nomatch = "What you said didn't match anything.";
        output.textContent = nomatch;
        textToSpeech(nomatch);
    }
}

function displayVegetable(vegetable)
{
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.fillText(vegetable.name, canvas.width / 2, canvas.height / 2 - 50);
    ctx.drawImage(vegetable.img, (canvas.width / 2) - 150, canvas.height / 2, 266, 237);
}

function textToSpeech(text)
{
    window.speechSynthesis.speak(new SpeechSynthesisUtterance(text));
}

recognition.onspeechend = () => recognition.stop();

recognition.onerror = (e) => console.error(`Error occurred in recognition: ${e.error}`);
