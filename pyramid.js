

const canvasWidth = 90000;
const canvasHeight = 7000;
let draw = SVG('drawing').size(canvasWidth, canvasHeight);
let blockHeigth = 50
let blockWidth = 100
draw.rect(blockWidth, blockHeigth);
draw.stroke('#000');
draw.fill('#e6e6ff')

var rect = draw.rect(100,50). fill('#e6e6ff').move (100,0)
var rect= draw.rect(100,50). fill('#e6e6ff').move (200,0)
var rect= draw.rect(100,50).fill ('#e6e6ff').move (300,0)
var rect= draw.rect(100,50).fill ('#e6e6ff').move (400,0)

for (let i = 0; i < 20; i++)
    console.log("hey") 

if (blockHeigth >9) {

}