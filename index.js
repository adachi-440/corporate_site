//#region Sliders
const slider = document.querySelector('.awards__carousel');
let mouseDown = false;
let startX;
let scrollLeft;

let dot1 = document.querySelector('.dot1');
let dot2 = document.querySelector('.dot2');
let dot3 = document.querySelector('.dot3');
const dots = [dot1, dot2, dot3];

let slideWidth = 576;
let startPos = 270;

slider.addEventListener('mousedown', e => {
    mouseDown = true;
    slider.classList.add('active');
    startX = e.pageX - slider.offsetLeft;
    scrollLeft = slider.scrollLeft;
});


slider.addEventListener('mouseleave', ()=>{
    mouseDown = false;
    slider.classList.remove('active');
})

slider.addEventListener('mouseup', ()=>{
    mouseDown = false;
    slider.classList.remove('active');
})

slider.addEventListener('mousemove',(e) =>{
    if(!mouseDown) return; //if not mouse down then do nothing
    e.preventDefault();
    const x = e.pageX - slider.offsetLeft;
    const walk = (x - startX) * 2;
    slider.scrollLeft = scrollLeft - walk;
});



slider.addEventListener('scroll', e =>{

    if(slider.scrollLeft <= startPos){
        dot1.classList.add('dot-active');
        dot2.classList.remove('dot-active');
        dot3.classList.remove('dot-active');
    }else if(startPos < slider.scrollLeft && slider.scrollLeft <= startPos+slideWidth*2/3){
        dot1.classList.remove('dot-active');
        dot2.classList.add('dot-active');
        dot3.classList.remove('dot-active');
    }else{
        dot1.classList.remove('dot-active');
        dot2.classList.remove('dot-active');
        dot3.classList.add('dot-active');
    }
})
//#endregion