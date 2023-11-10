const menuButton = document.querySelector('#menu');
const navi = document.querySelector('nav');

menuButton.addEventListener('click', ()=>{
    navi.classList.toggle('open');
    menuButton.classList.toggle('open');
});
