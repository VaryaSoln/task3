/* Кейс-задача № 3
Создайте простой слайдер изображений.
➔	Создайте интерфейс с помощью HTML и CSS, состоящий из области отображения изображений и кнопок "вперед" и "назад";
➔	Стилизуйте интерфейс, чтобы он был привлекательным: добавьте рамки, тени, выберите подходящие цвета и шрифты;
➔	Реализуйте функционал смены изображений с помощью ванильного JavaScript и слушателей событий. 
При нажатии на кнопку "вперед" должно отображаться следующее изображение, при нажатии на кнопку "назад" - предыдущее;
➔	Добавьте функционал, который будет обеспечивать зацикливание слайдера, то есть после последнего 
изображения снова отображается первое, а перед первым - последнее;
➔	Дополните интерфейс возможностью отображения текущего номера изображения (например, "Изображение 1 из 5")
для удобства пользователя.
Ответом на задание будет ссылка на репозиторий GitHub, где хранится Ваша программа.
 */


const prevButton= document.getElementById("prev-button");
const nextButton= document.getElementById("next-button");
const sliderBox= document.getElementById("slider-box")
const arrImg = Array.from(sliderBox.querySelectorAll("img")); //здесь лежит массив с картинками

console.log(arrImg)


prevButton.addEventListener("click", showPrevSlide);
nextButton.addEventListener("click",showNextSlide);

function showPrevSlide(){

}


















/* 
// Получаем элементы слайдера
const slider = document.querySelector('.slider');
const prevButton = document.querySelector('.prev-button');
const nextButton = document.querySelector('.next-button');
const slides = Array.from(slider.querySelectorAll('img'));
const slideCount = slides.length;
let slideIndex = 0;

// Устанавливаем обработчики событий для кнопок
prevButton.addEventListener('click', showPreviousSlide);
nextButton.addEventListener('click', showNextSlide);

// Функция для показа предыдущего слайда
function showPreviousSlide() {
  slideIndex = (slideIndex - 1 + slideCount) % slideCount;
  updateSlider();
}

// Функция для показа следующего слайда
function showNextSlide() {
  slideIndex = (slideIndex + 1) % slideCount;
  updateSlider();
}

// Функция для обновления отображения слайдера
function updateSlider() {
  slides.forEach((slide, index) => {
    if (index === slideIndex) {
      slide.style.display = 'block';
    } else {
      slide.style.display = 'none';
    }
  });
}

// Инициализация слайдера
updateSlider();
 */