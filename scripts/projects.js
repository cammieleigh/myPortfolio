//carousel code for the javascript portion found here: https://www.shecodes.io/athena/5675-creating-a-carousel-with-html-css-javascript


const slides = document.querySelectorAll('.projects');
let index = 0;

function prevSlide(){
    slides[index].classList.remove('active');
    index--;

    if(index < 0)
        index = slides.length -1;

    slides[index].classList.add('active');      
}

document.querySelector('.leftButton').addEventListener('click', e => {
    prevSlide();
});

function nextSlide(){
    slides[index].classList.remove('active');
    index++;

    if(index > slides.length -1)
        index = 0;

    slides[index].classList.add('active');      
}

document.querySelector('.rightButton').addEventListener('click', e => {
    nextSlide();
});
