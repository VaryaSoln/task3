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


const prevButton = document.getElementById("prev-button");
const nextButton = document.getElementById("next-button");
const slides = document.getElementById("slides")
const arrImg = Array.from(slides.querySelectorAll("slide-img")); //здесь лежит массив с картинками
const slideCount = slides.length;
let currentIndex = 0;


prevButton.addEventListener("click", showPrevSlide);
nextButton.addEventListener("click", showNextSlide);

function showPrevSlide() {
    currentIndex = (currentIndex - 1 + slideCount) % slideCount;
    updateSlider();
}
function showNextSlide() {
    currentIndex = [currentIndex + 1] % slideCount;
    updateSlider();
}

function updateSlider() {
    arrImg.forEach((slides, index) => {
        if (index === currentIndex) {
            slides.style.display = "block";
        } else {
            slides.style.display = "none";
        }
    })

}
updateSlider();





