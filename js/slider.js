
let slides = document.querySelectorAll('.slide');
let indicatorsContainer = document.getElementById('indicators');
let currentIndex = 0;

slides.forEach((_, index) => {
    let dot = document.createElement('span');
    dot.classList.add('dot');
    if (index === currentIndex) dot.classList.add('active'); 
    dot.addEventListener('click', function() {
        changeSlide(index);
    });
    indicatorsContainer.appendChild(dot);
});

let dots = document.querySelectorAll('.dot');

slides[currentIndex].classList.add('active');

document.getElementById('next').addEventListener('click', function() {
    changeSlide('next');
});

document.getElementById('prev').addEventListener('click', function() {
    changeSlide('prev');
});

function changeSlide(directionOrIndex) {
    slides[currentIndex].classList.remove('active');
    dots[currentIndex].classList.remove('active');

    if (typeof directionOrIndex === 'number') {
        currentIndex = directionOrIndex;
    } else {
        if (directionOrIndex === 'next') {
            currentIndex = (currentIndex + 1) % slides.length;
        } else if (directionOrIndex === 'prev') {
            currentIndex = (currentIndex - 1 + slides.length) % slides.length;
        }
    }

    slides[currentIndex].classList.add('active');
    dots[currentIndex].classList.add('active');
}



setInterval(function() {
    changeSlide('next');
}, 3000); 
