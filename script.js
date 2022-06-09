const container = document.getElementById('container');
console.log(window.innerHeight);
console.log(window.innerWidth);
window.addEventListener('resize',e=>{
    filling(calculateArea());
});
//console.log(winArea);
function calculateArea(){
    let winArea = Math.floor((window.innerHeight*window.innerWidth)/256);
    console.log(winArea);
    return winArea;
}
function filling(winArea){
    container.innerHTML='';
    for(let i=0;i<=winArea;i++){
        let drawer = document.createElement('div');
        drawer.style.width='16px';
        drawer.style.height='16px';
        drawer.style.backgroundColor='black';
        container.appendChild(drawer);
    }
}

filling(calculateArea());
