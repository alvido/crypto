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

  // Отображаем результат в отдельных элементах
  document.getElementById('days').innerHTML = days;
  document.getElementById('hours').innerHTML = hours;
  document.getElementById('minutes').innerHTML = minutes;
  document.getElementById('seconds').innerHTML = seconds;

  // Если обратный отсчет завершился, выводим сообщение
  if (distance < 0) {
    clearInterval(countdown);
    document.getElementById('days').innerHTML = "0";
    document.getElementById('hours').innerHTML = "0";
    document.getElementById('minutes').innerHTML = "0";
    document.getElementById('seconds').innerHTML = "0";
    document.getElementById('timer').innerHTML = "Таймер завершен!";
  }
}, 1000);

//

// textarea show //
document.addEventListener("DOMContentLoaded", function () {
  let openTextAreaButtons = document.querySelectorAll(".open-textarea");


  if (openTextAreaButtons) {
    openTextAreaButtons.forEach((button) => {
      button.addEventListener("click", function (e) {
        e.stopPropagation(); // Остановить всплытие события
        const nextHiddenArea = this.closest('label').nextElementSibling; // Получаем следующий элемент-сосед

        if (nextHiddenArea && nextHiddenArea.classList.contains("hidden-area")) {
          nextHiddenArea.classList.toggle("show"); // Переключаем класс 'show'
        }
      });
    });
  }
});


//

//
document.addEventListener("DOMContentLoaded", function () {
  const forms = document.querySelectorAll("form");

  forms.forEach(function (form) {
    form.addEventListener("submit", function (event) {
      let isValid = true;
      const requiredFields = form.querySelectorAll("[required]");

      requiredFields.forEach(function (field) {
        field.classList.remove("error");

        if (!validateField(field)) {
          isValid = false;
        }
      });

      if (!isValid) {
        event.preventDefault();
      }
    });
  });

  function validateField(field) {
    let isValid = true;

    // Проверка на заполненность для текстовых, email, number, tel и textarea
    if (["text", "email", "number", "tel"].includes(field.type) || field.tagName.toLowerCase() === "textarea") {
      if (!field.value.trim()) {
        field.classList.add("error");
        isValid = false;
      }
    }

    // Проверка для select
    if (field.tagName.toLowerCase() === "select") {
      if (field.value === "") {
        field.classList.add("error");
        isValid = false;

        const select2 = field.closest('form').querySelector('.select2');
        if (select2) {
          select2.classList.add('error');
        }
      } else {
        const select2 = field.closest('form').querySelector('.select2');
        if (select2) {
          select2.classList.remove('error');
        }
      }
    }

    // Проверка для радиокнопок
    if (field.type === "radio") {
      const radios = field.closest('form').querySelectorAll(`input[name="${field.name}"]`);
      let radioChecked = Array.from(radios).some(radio => radio.checked);

      if (!radioChecked) {
        radios.forEach(function (radio) {
          radio.classList.add("error");
        });
        isValid = false;
      } else {
        radios.forEach(function (radio) {
          radio.classList.remove("error");
        });
      }
    }

    return isValid;
  }
});

//