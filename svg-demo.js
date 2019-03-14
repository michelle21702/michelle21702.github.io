 console.log('loaded svg-demon.js');

 let draw = SVG('drawing'). size (480,480);
let rect = draw.rect(100,100).fill('purple')
iv id="drawing">
    <svg xmlnbs="http://www.w3.org/2000/svg" version="1.1"
 xmlns:xlink="http://www.w3.org/1999/xlink" width="300" heigth="300">
    <rect width="100" fill="#f06"></rect>
 </svg>
 </div>
 var draw = SVG('drawing').size('100', '100%')

if (SVG.supported){
    var draw = SVG('drawing')
    var rect = draw.rect(100,100)
} else {
    alert('SVG not supported')
}
