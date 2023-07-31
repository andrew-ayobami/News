const burgerOpen = document.querySelector('.open-menu');
const burgerClose = document.querySelector('.close-menu');
const body = document.querySelector('#body');

const navSlide = () => {
    const nav = document.querySelector('.nav-bar');
    burgerOpen.addEventListener('click', () => {
        nav.classList.toggle('openNav');
    })

    burgerClose.addEventListener('click', () => {
        nav.classList.toggle('openNav');
    })
    
}

navSlide(); 

const changeColor = () => {
    burgerOpen.addEventListener('click', () => {
        body.classList.add('colorChange');
    })

    burgerClose.addEventListener('click', () => {
        body.classList.remove('colorChange');
    })
}

changeColor();



// const navSlider = () => {
//     const nav = document.querySelector('.nav-bar');
//     const burgerClose = document.querySelector('.close-menu');
//     burgerClose.addEventListener('click', () => {
//         nav.classList.toggle('openNav');
//     })
// }

// navSlider();

