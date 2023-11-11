const menuButton = document.querySelector('#menu');
const navi = document.querySelector('nav');

const darkModeButton = document.querySelector('#dark-mode');
const main = document.querySelector('main');
const largerBody = document.querySelector('body');

menuButton.addEventListener('click', ()=>{
    navi.classList.toggle('open');
    menuButton.classList.toggle('open');
});

darkModeButton.addEventListener('click', ()=>{
    
    main.classList.toggle('mode');
    darkModeButton.classList.toggle('mode');

    if (visualViewport.width >= 640){
    
    main.classList.toggle('mode');
    largerBody.classList.toggle('mode');

    }
});


// darkModeButton.addEventListener('click', ()=>{
    
//     if (darkModeButton.textContent.includes('🌙')){

//         darkModeButton.textContent = '☀️';
//         main.style.background = 'black';
//         main.style.color = 'aliceblue';
       
//     } else{
//         darkModeButton.textContent = '🌙';
//         main.style.background = 'white';
//         main.style.color = '#184477';
//     }

// });

