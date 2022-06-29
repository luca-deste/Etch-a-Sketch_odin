const container = document.getElementById('container');
const pixelLabel = document.getElementById('pixelLabel');
const pixelInput = document.getElementById('pixelSize');
const ColorInput = document.getElementById('color');
const clearBtn = document.getElementById('clearBtn');
const rgbBtn = document.getElementById('rgbBtn');
const opBtnPlus = document.getElementById('shadowPlusBtn');
const opBtnMinus = document.getElementById('shadowMinusBtn');
const contSpan = document.getElementById('contSpan');
const contBorder = document.getElementById('contBorder');
let rgbMode = 0;
let color = ColorInput.value;
let pixelSize = 16;
let opacity = 1;
let colorState = ColorInput.value;


opBtnPlus.onclick = function(){
    console.log('opBtnPlus');
    if(opacity<1){
        opacity+=0.1;
        opacity=opacity.toFixed(1);
        opacity = parseFloat(opacity);
        console.log(opacity);
    }
}
opBtnMinus.onclick = function(){
    console.log('opBtnMinus');
    if(opacity>0){
        opacity-=0.1;
        opacity=opacity.toFixed(1);
        opacity = parseFloat(opacity);
        console.log(opacity);
        console.log(typeof(opacity))
    }
}

pixelLabel.innerText =`Pixel Size : ${pixelSize}`
pixelInput.value = pixelSize;
pixelInput.onchange = function(){
    pixelSize = this.value;
    pixelLabel.innerText =`Pixel Size : ${pixelSize}`
    createGrid(pixelSize);
}
ColorInput.onchange = function(){
    color = this.value;
}
clearBtn.onclick = function(){
    createGrid(pixelSize);
    opacity = 1;
}
rgbBtn.onclick = function(){
    if(rgbMode){
        rgbMode--;
        contSpan.classList.toggle('contSpan');
        contBorder.classList.toggle('contNormalBorder');
        contBorder.classList.toggle('contRgbBorder');
        ColorInput.value = colorState;
        color = colorState;
    } else {
        colorState = ColorInput.value;
        console.log(colorState);
        rgbMode++;
        contSpan.classList.toggle('contSpan');
        contBorder.classList.toggle('contNormalBorder');
        contBorder.classList.toggle('contRgbBorder');
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
    let width = vw(40);
    let square = (width/pixelSize)-2;
    for(let i=0;i<pxl*pxl;i++){
        let drawable = document.createElement('div');
        drawable.style.border='1px solid #F0F0F0';
        drawable.style.width=`${square}px`;
        drawable.style.height=`${square}px`;
        drawable.classList.add('hover');
        drawable.style.zIndex = 11;
        drawable.style.backgroundColor='white';
        drawable.addEventListener('mouseover',e => {
            if(e.buttons == 1 || e.buttons == 3){
                if(rgbMode){
                    let randomColor = Math.floor(Math.random()*16777215).toString(16);
                    color = `#${randomColor}`;
                }
                drawable.style.opacity=opacity;
                drawable.style.backgroundColor=color;
                
            }
        })
        drawable.addEventListener('mousedown',e => {
            if(rgbMode){
                let randomColor = Math.floor(Math.random()*16777215).toString(16);
                color = `#${randomColor}`
            }
            drawable.style.opacity=opacity;
            drawable.style.backgroundColor=color;
            
        })

        container.appendChild(drawable);
    }
}

createGrid(pixelSize);


