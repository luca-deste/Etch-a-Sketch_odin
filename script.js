const container = document.getElementById('container');
const pixelLabel = document.getElementById('pixelLabel');
const pixelInput = document.getElementById('pixelSize');
const ColorInput = document.getElementById('color');
const clearBtn = document.getElementById('clearBtn');
const rgbBtn = document.getElementById('rgbBtn');
let rgbMode = 0;
let color = ColorInput.value;
let pixelSize = 16;
pixelLabel.innerText =`Pixel Size : ${pixelSize}`
pixelInput.value = pixelSize;
pixelInput.onchange = function(){
    console.log(this.value)
    pixelSize = this.value;
    pixelLabel.innerText =`Pixel Size : ${pixelSize}`
    createGrid(pixelSize);
}
ColorInput.onchange = function(){
    color = this.value;
}
clearBtn.onclick = function(){
    createGrid(pixelSize);
}
rgbBtn.onclick = function(){
    if(rgbMode){
        rgbMode--;
    } else {
        rgbMode++;
    }
    console.log(rgbMode)
}
function vw(v) {
    var w = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
    return (v * w) / 100;
  }

window.addEventListener('resize',e=>{
    createGrid(pixelSize);
})

function createGrid(pxl){
    container.innerHTML = '';
    let width = vw(50);
    let square = Math.floor(width/pixelSize)-2;
    for(let i=0;i<pxl*pxl;i++){
        let drawable = document.createElement('div');
        drawable.style.border='1px solid #F0F0F0';
        drawable.style.width=`${square}px`;
        drawable.style.height=`${square}px`;
        drawable.classList.add('hover');
        drawable.addEventListener('mouseover',e => {
            if(e.buttons == 1 || e.buttons == 3){
                if(rgbMode){
                    let randomColor = Math.floor(Math.random()*16777215).toString(16);
                    color = `#${randomColor}`
                }
                drawable.style.backgroundColor=color;
            }
        })
        drawable.addEventListener('mousedown',e => {
                drawable.style.backgroundColor=color;
        })

        container.appendChild(drawable);
    }
}

createGrid(pixelSize);


