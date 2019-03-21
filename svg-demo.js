console.log('loaded svg-demo.js');
var draw = SVG('drawing').size(100000, 300000);


function drawFlower(x, y) {
    console.log('hi')
    var ellipse = draw.ellipse(60,50).fill(' #ffb3b3').move(x+12,y+97)
    var ellipse = draw.ellipse(60,50).fill(' #ffb3b3').move (x+38,y+59)
    var ellipse = draw.ellipse(63,50).fill(' #ffb3b3').move (x+72,y+61)
    var ellipse = draw.ellipse(60,50).fill(' #ffb3b3').move (x+98,y+97)
    var ellipse = draw.ellipse(60,50).fill(' #ffb3b3').move (x+38,y+136)
    var elliipse = draw.ellipse(60,50).fill(' #ffb3b3').move (x+86,y+129)
    var ellipse = draw.ellipse(50,50).fill(' #ffffb3').move(x+58,y+100)
}


drawFlower(0, 0)
drawFlower(200, 150)
drawFlower(460, 70)
drawFlower(10, 400)
drawFlower(400, 500)
drawFlower(70, 240)
drawFlower(470, 260)
drawFlower(600, 400)
drawFlower(630, 140)

var ellipse = draw.ellipse(150,100).fill('#ffff80').move (400,0)

function moveBee (){
    console.log("bye")
}
ellipse.click(moveBee)

