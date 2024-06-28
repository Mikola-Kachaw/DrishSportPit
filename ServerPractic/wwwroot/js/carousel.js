var slidePosition = 2;

function SlideShow(n) {
  var i;
  var slides = document.getElementsByClassName("Containers");
  if (n > slides.length) {slidePosition = 1}
  if (n < 1) {slidePosition = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  slides[slidePosition-1].style.display = "block";
}

SlideShow(slidePosition);

function plusSlides(n) {
    let currentSlide = slidePosition; // сохраняем текущий слайд
    SlideShow(slidePosition += n);
  
    // Прерываем текущую анимацию и моментально переходим к следующему или предыдущему слайду
    document.querySelector('.Containers:nth-child(' + currentSlide + ')').classList.remove('fade');
    document.querySelector('.Containers:nth-child(' + currentSlide + ')').style.opacity = 0;
  
    // Восстанавливаем анимацию для нового слайда
    document.querySelector('.Containers:nth-child(' + slidePosition + ')').classList.add('fade');
  }

function autoSlide() {
    plusSlides(1); // вызываем функцию для перехода к следующему слайду
    setTimeout(autoSlide, 10000); // вызываем эту же функцию снова через 10 секунд
}

// Запускаем автоматическую смену слайдов
autoSlide();