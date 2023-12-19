const prevBtn = document.getElementById('prev-btn');
const nextBtn = document.getElementById('next-btn');
let slides = document.getElementsByClassName('slides');

prevBtn.addEventListener('click', scroll);
nextBtn.addEventListener('click', scroll);

let slideIndex = 1;
showSlides(slideIndex);

// prev/next controls
function scroll(event) {
    let direction = 0;
    if (event.target.id === 'prev-btn') {
        direction = -1;
    } else if (event.target.id === 'next-btn') {
        direction = 1;
    }
    slideIndex += direction;
    showSlides(slideIndex);
}

function showSlides(index) {
    //if at the last slide and scrolling forward, go to first image
    if (index > slides.length) {
        slideIndex = 1;
    }

    //if at the first slide and scrolling backward, go to last image
    if (index < 1) {
        slideIndex = slides.length;
    }

    //for the length of the slideshow, next slide is not displayed
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

    //current slide is displayed
    slides[slideIndex - 1].style.display = "block";
}