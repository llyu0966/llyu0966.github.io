var config = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,
    backgroundColor: '#FFFFFF',
    parent: 'phaser-example',
    scene: {
        preload: preload,
        create: create
    }
};

var game = new Phaser.Game(config);

function preload ()
{
    this.load.image('orange', 'https://llyu0966.github.io/mypic/orange.png');
    this.load.image('apple', 'https://llyu0966.github.io/mypic/apple.png');
    this.load.image('banana', 'https://llyu0966.github.io/mypic/banana.png');
    this.load.image('basket', 'https://llyu0966.github.io/mypic/basket.png');
    this.load.image('background', 'https://llyu0966.github.io/mypic/background.jpg');
}

function create ()
{
    this.add.image(500, 320, 'background');
    // Create some draggable fruits
    var or = this.add.image(100, 100, 'orange').setInteractive();
    var ba = this.add.image(100, 270, 'banana').setInteractive();
    var ap = this.add.image(100, 450, 'apple').setInteractive();
    // A fruit basket
    var basket = this.add.image(500, 200, 'basket').setInteractive();

   this.input.setDraggable(ap);
   this.input.setDraggable(or);
   this.input.setDraggable(ba);
   this.input.setDraggable(basket);
   
  
  // A drop zone
  var zone = this.add.zone(500, 200, 300, 300).setRectangleDropZone(300, 300);


  this.input.on('dragstart', function (pointer, gameObject) {

        this.children.bringToTop(gameObject);

    }, this);

    this.input.on('drag', function (pointer, gameObject, dragX, dragY) {

        gameObject.x = dragX;
        gameObject.y = dragY;

    });

    this.input.on('dragenter', function (pointer, gameObject, dropZone) {

        graphics.clear();
        graphics.lineStyle(2, 0x00ffff);
        graphics.strokeRect(zone.x - zone.input.hitArea.width / 2, zone.y - zone.input.hitArea.height / 2, zone.input.hitArea.width, zone.input.hitArea.height);

    });

    this.input.on('dragleave', function (pointer, gameObject, dropZone) {

        graphics.clear();
        graphics.lineStyle(2, 0xffff00);
        graphics.strokeRect(zone.x - zone.input.hitArea.width / 2, zone.y - zone.input.hitArea.height / 2, zone.input.hitArea.width, zone.input.hitArea.height);

    });

    this.input.on('drop', function (pointer, gameObject, dropZone) {

        gameObject.x = dropZone.x;
        gameObject.y = dropZone.y;

        gameObject.input.enabled = false;

    });

    this.input.on('dragend', function (pointer, gameObject, dropped) {

        if (!dropped)
        {
            gameObject.x = gameObject.input.dragStartX;
            gameObject.y = gameObject.input.dragStartY;
        }

    });
   
}