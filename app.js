const nextBtn = document.querySelector('.next');
const prevBtn = document.querySelector('.prev');
const slideRow = document.querySelector('.slideRow');
const slides = document.querySelectorAll('.slide')

// console.log(nextBtn);
// console.log(slides);

let counter = 0;

nextBtn.addEventListener('click', nextSlide);
function nextSlide() {
    counter++;
    if(counter > slides.length - 1){
        counter = 0
    }
    carouselSlide();
}

prevBtn.addEventListener('click', prevSlide);
function prevSlide() {
    counter--;
    if(counter < 0)[
        counter = slides.length - 1
    ]
    carouselSlide();
}

function carouselSlide(){
    slides.forEach((slide) => {
        slide.style.transform = `translateX(-${counter * 100}%)`
    })
}