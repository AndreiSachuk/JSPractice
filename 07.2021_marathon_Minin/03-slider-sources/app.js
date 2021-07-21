const upBtn = document.querySelector('.up-button');
const downBtn = document.querySelector('.down-button');

const sidebar = document.querySelector('.sidebar');
const mainSlide = document.querySelector('.main-slide');
const slidesCount = mainSlide.querySelectorAll('div').length;

const container = document.querySelector('.container')

sidebar.style.top = `-${(slidesCount - 1) * 100}vh`;

let activSlideIndex = 0;

document.addEventListener('keydown', (event) => {
    if (event.key === 'ArrowUp')
        chSlide('up');
    else if (event.key === 'ArrowDown')
        chSlide('down');
});




upBtn.addEventListener('click', () => {
    chSlide('up');
})

downBtn.addEventListener('click', () => {
    chSlide('down');
})

function chSlide(direction) {
    if (direction === 'up') {
        activSlideIndex++;
        if (activSlideIndex === slidesCount)
            activSlideIndex = 0
    } else if (direction === 'down') {
        activSlideIndex--;
        if (activSlideIndex < 0)
            activSlideIndex = slidesCount - 1;
    }

    const heigh = container.clientHeight;

    mainSlide.style.transform = `translateY(-${activSlideIndex * heigh}px)`
    sidebar.style.transform = `translateY(${activSlideIndex * heigh}px)`
}