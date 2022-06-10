const container = document.getElementById('container');
const pixelLabel = document.getElementById('pixelLabel');
const pixelInput = document.getElementById('pixelSize');
let pixelSize = 16;
let mouseDown = 0;
pixelLabel.innerText =`Pixel Size : ${pixelSize}`
pixelInput.value = pixelSize;
pixelInput.onchange = function(){
    console.log(this.value)
    pixelSize = this.value;
    createGrid(pixelSize);
}

function vw(v) {
    var w = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
    return (v * w) / 100;
  }

window.addEventListener('mousedown',e =>{
    mouseDown=1;
})
window.addEventListener('mouseup',e=>{
    mouseDown=0;
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
            if(mouseDown>0){
                drawable.style.backgroundColor='black';
            }
        })
        container.appendChild(drawable);
    }
}

createGrid(pixelSize);


