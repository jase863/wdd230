const menuButton = document.querySelector('#menu');
const navi = document.querySelector('nav');

let day = new Date();

const banner = document.querySelector("#banner");
const bannerButton = document.querySelector("#banner-close");

const darkModeButton = document.querySelector('#dark-mode');
const main = document.querySelector('main');
const largerBody = document.querySelector('body');

menuButton.addEventListener('click', ()=>{
    navi.classList.toggle('open');
    menuButton.classList.toggle('open');
});


if (day.getDay() === 1 || day.getDay() === 2 || day.getDay() === 3){
    banner.style.display = "block";
    bannerButton.style.display = "block";
}
bannerButton.addEventListener('click', ()=>{
    banner.style.display = "none";
    bannerButton.style.display = "none";
});
