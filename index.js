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


const slides = document.getElementById("slides");
const counter = document.getElementById("counter");
const totalSlides = slides.children.length;
let currentIndex = 0;

function updateSlider() {
  slides.style.transform =`translateX(-${currentIndex * 100}%)`;
  counter.textContent = `${currentIndex + 1} / ${totalSlides}`;
}

function nextSlide() {
  currentIndex = (currentIndex + 1) % totalSlides;
  updateSlider();
}

function prevSlide() {
  currentIndex = (currentIndex - 1 + totalSlides) % totalSlides;
  updateSlider();
}

document.getElementById("next").addEventListener("click", nextSlide);
document.getElementById("prev").addEventListener("click", prevSlide);

updateSlider();
