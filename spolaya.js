


let bg = document.getElementById("bg");
let moon = document.getElementById("moon");
let clouds = document.getElementById("clouds");
let trees = document.getElementById("trees");
let text = document.getElementById("text");
window.addEventListener('scroll', function(){
    var value = window.scrollY;

    bg.style.top = value * 1 + 'px';
    moon.style.left = value * 3 + 'px';
    clouds.style.left = -value * 2 + 'px';
    trees.style.top = value * 0.5 + 'px';
    text.style.left = -value * 1 + 'px';

})