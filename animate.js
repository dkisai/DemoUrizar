let aparecer = document.querySelectorAll('.aparecer');
function mostrarAparecerScroll(){
    let scrollTop = document.documentElement.scrollTop;
    for(var i=0; i<aparecer.length; i++){
        let alturaAparecer = aparecer[i].offsetTop;
        if(alturaAparecer - 500 < scrollTop){
            aparecer[i].style.opacity = 1;
        }
    }
}
window.addEventListener('scroll',mostrarAparecerScroll);


let animadoDer = document.querySelectorAll('.animarDer');
function mostrarAnimadoDerScroll(){
    let scrollTop = document.documentElement.scrollTop;
    for(var i=0; i<animadoDer.length; i++){
        let alturaAnimadoDer = animadoDer[i].offsetTop;
        if(alturaAnimadoDer - 500 < scrollTop){
            animadoDer[i].style.opacity = 1;
            animadoDer[i].classList.add('mostrarDer')
        }
    }
}
window.addEventListener('scroll',mostrarAnimadoDerScroll);

let animadoIzq = document.querySelectorAll('.animarIzq');
function mostrarAnimadoIzqScroll(){
    let scrollTop = document.documentElement.scrollTop;
    for(var i=0; i<animadoIzq.length; i++){
        let alturaAnimadoIzq = animadoIzq[i].offsetTop;
        if(alturaAnimadoIzq - 500 < scrollTop){
            animadoIzq[i].style.opacity = 1;
            animadoIzq[i].classList.add('mostrarIzq')
        }
    }
}
window.addEventListener('scroll',mostrarAnimadoIzqScroll);
