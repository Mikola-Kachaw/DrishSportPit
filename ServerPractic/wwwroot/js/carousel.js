var slidePosition = 2;

function SlideShow(n) {
    var i;
    var slides = document.getElementsByClassName("Containers");
    if (n > slides.length) { slidePosition = 1 }
    if (n < 1) { slidePosition = slides.length }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
        slides[i].classList.remove('fade'); // удаляем анимации, чтобы избежать конфликтов
    }
    slides[slidePosition - 1].style.display = "block";
    slides[slidePosition - 1].classList.add('fade'); // добавляем анимацию к текущему слайду
}

SlideShow(slidePosition);

function plusSlides(n) {
    let currentSlide = slidePosition;
    SlideShow(slidePosition += n);

    // Прерываем текущую анимацию и моментально переходим к следующему или предыдущему слайду
    let slides = document.getElementsByClassName("Containers");
    if (currentSlide > 0 && currentSlide <= slides.length) {
        slides[currentSlide - 1].style.opacity = 0;
    }
    if (slidePosition > 0 && slidePosition <= slides.length) {
        slides[slidePosition - 1].style.opacity = 1;
        slides[slidePosition - 1].classList.add('fade');
    }
}

function autoSlide() {
    plusSlides(1); // вызываем функцию для перехода к следующему слайду
    setTimeout(autoSlide, 10000); // вызываем эту же функцию снова через 10 секунд
}

// Запускаем автоматическую смену слайдов
autoSlide();

// Инициализация начального состояния слайдов из Blazor
function initSlides() {
    slidePosition = 1;
    SlideShow(slidePosition);
}

// Запуск автоматической смены слайдов из Blazor
function startAutoSlide() {
    autoSlide();
}
