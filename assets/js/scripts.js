// Burger Menu Open //
document.addEventListener("DOMContentLoaded", function () {
  // Выбираем бургер-кнопку и навигацию
  let burgerButton = document.getElementById("burgerButton");
  let navigation = document.querySelector(".navigation");
  let links = document.querySelectorAll(".navigation a");

  // Если бургер-кнопка существует, добавляем обработчик события
  if (burgerButton) {
    burgerButton.addEventListener("click", function (e) {
      e.stopPropagation(); // Остановка всплытия события
      burgerButton.classList.toggle("burger--active"); // Переключаем класс активности бургер-кнопки
      navigation.classList.toggle("navigation--active"); // Переключаем класс активности навигации
    });
  }

  links.forEach((link) => {
    link.addEventListener("click", function (e) {
      burgerButton.classList.remove("burger--active");
      navigation.classList.remove("navigation--active");
    });
  });
});
//

// Fixed header
$(document).ready(function () {
  var header = $(".header"),
    main = $(".main"),
    headerH = header.innerHeight(),
    scrollOffset = $(window).scrollTop();

  checkScroll(scrollOffset);

  $(window).on("scroll", function () {
    scrollOffset = $(this).scrollTop();
    checkScroll(scrollOffset);
  });

  function checkScroll(scrollOffset) {
    if (scrollOffset >= headerH) {
      header.addClass("fixed");
      main.css("padding-top", headerH); // Добавляем верхний отступ
    } else {
      header.removeClass("fixed");
      main.css("padding-top", 0); // Убираем верхний отступ
    }
  }
});
// Fixed header end

//
VANTA.WAVES({
  el: "#hero",
  mouseControls: true,
  touchControls: true,
  gyroControls: false,
  minHeight: 200.00,
  minWidth: 200.00,
  scale: 1.00,
  scaleMobile: 1.00,
  color: 0x150020,
  shininess: 50.00,
  waveHeight: 20.00,
  zoom: 0.7,
})
//

// speakers //
document.addEventListener("DOMContentLoaded", function () {
  let speakers = document.querySelectorAll(".speakers__list li");

  speakers.forEach((speaker) => {
    speaker.addEventListener("click", function (e) {
      this.classList.toggle("--active");
    });
  });
});
//

//timer
// Устанавливаем дату, до которой будет обратный отсчет
const targetDate = new Date('October 26, 2024 18:30:00').getTime();

// Обновляем таймер каждую секунду
const countdown = setInterval(() => {
  const now = new Date().getTime();
  const distance = targetDate - now;

  // Вычисляем дни, часы, минуты и секунды
  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Отображаем результат в элементе с id="countdown"
  document.getElementById('countdown').innerHTML =
    days + " д " + hours + " ч " + minutes + " м " + seconds + " с ";

  // Если обратный отсчет завершился, выводим сообщение
  if (distance < 0) {
    clearInterval(countdown);
    document.getElementById('countdown').innerHTML = "Таймер завершен!";
  }
}, 1000);
//


//

const year = new Date().getFullYear();
const fourthOfJuly = new Date(year, 6, 4).getTime();
const fourthOfJulyNextYear = new Date(year + 1, 6, 4).getTime();
const month = new Date().getMonth();

// countdown
let timer = setInterval(function () {

  // get today's date
  const today = new Date().getTime();

  // get the difference
  let diff;
  if (month > 6) {
    diff = fourthOfJulyNextYear - today;
  } else {
    diff = fourthOfJuly - today;
  }




  // math
  let days = Math.floor(diff / (1000 * 60 * 60 * 24));
  let hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  let minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
  let seconds = Math.floor((diff % (1000 * 60)) / 1000);

  // display
  document.getElementById("timer").innerHTML =
    "<div class=\"days\"> \
  <div class=\"numbers\">" + days + "</div>days</div> \
<div class=\"hours\"> \
  <div class=\"numbers\">" + hours + "</div>hours</div> \
<div class=\"minutes\"> \
  <div class=\"numbers\">" + minutes + "</div>minutes</div> \
<div class=\"seconds\"> \
  <div class=\"numbers\">" + seconds + "</div>seconds</div> \
</div>";

}, 1000);

//