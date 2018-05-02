var canvas;
var context;

var x = 0;
var y = 0;

var dx = 0;
var dy = 0;

var timer;

window.onload = function () {
    canvas = document.getElementById("Canvas");
    context = canvas.getContext("2d");
    drawMaze("maze1.png", 265, 5);

    window.onkeydown = processKey;

};

function drawMaze(mazeFile, startinX, startinY) {
    clearTimeout(timer);

    dx = 0;
    dy = 0;

    var imgMaze = new Image();
    imgMaze.onload = function () {

        canvas.width = imgMaze.width;
        canvas.height = imgMaze.height;

        context.drawImage(imgMaze, 0, 0)

        x = startinX;
        y = startinY;

        var imgFace = document.getElementById("face")
        context.drawImage(imgFace, x, y);
        context.stroke();

        er = setTimeout(redraw, 10);
    };

    imgMaze.src = mazeFile;
}

function processKey(e) {
    dx = 0;
    dy = 0;
    if (e.keyCode == 38) {
        dy = -1;
    }
    if(e.keyCode == 40) {
        dy = 1;
    }

    if (e.keyCode == 37) {
        dx = -1;
    }

    if (e.keyCode == 39) {
        dx = 1;
    }
}

function redraw() {
    if (dx != 0 || dy != 0){
        context.beginPath();
        context.fillStyle = "rgb(254, 244, 207)";
        context.rect(x, y, 15, 15);
        context.fill();

        x += dx;
        y += dy;

        var imgFace = document.getElementById("face");
        context.drawImage(face, x, y);

    }
    timer = setTimeout("redraw()", 10);
}