const sliderEl = document.querySelector('.slider')
const slideEl = document.querySelectorAll('.slide')
const prevBtn = document.querySelector('.prev')
const nextBtn = document.querySelector('.next')
let currentIndex = 0

function showSlide(index){
    const offset = -100 * index
    sliderEl.style.transform = `translateX(${offset}%)`
}

function goNext() {
    currentIndex = (currentIndex + 1) % slideEl.length
    showSlide(currentIndex)
}

function goPrev(){
    currentIndex = (currentIndex - 1 + slideEl.length) % slideEl.length
    showSlide(currentIndex)
}

prevBtn.addEventListener('click', goPrev)
nextBtn.addEventListener('click', goNext)

showSlide(currentIndex)