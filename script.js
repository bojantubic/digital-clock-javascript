function displayTime() {
  const date = new Date();
  let getHours = date.getHours();
  let getMinutes = date.getMinutes();
  let getSeconds = date.getSeconds();

  if (getHours < 10) {
    getHours = "0" + getHours;
  }

  if (getMinutes < 10) {
    getMinutes = "0" + getMinutes;
  }

  if (getSeconds < 10) {
    getSeconds = "0" + getSeconds;
  }

  document.querySelector(".hour").innerHTML = getHours;
  document.querySelector(".minute").innerHTML = getMinutes;
  document.querySelector(".second").innerHTML = getSeconds;
}

function changeBackground() {
  const date = new Date();
  let getHours = date.getHours();

  let background = document.querySelector(".background");
  let digit = document.querySelectorAll(".digit");

  if (getHours >= 0 && getHours < 6) {
    background.style.backgroundImage = "url(img-5.svg)";
    for (let i = 0; i < digit.length; i++) {
      digit[i].style.color = "#dbe2d7";
      digit[i].style.backgroundImage = "linear-gradient(180deg, rgba(78, 98, 145, 0.5), rgba(201, 153, 174, 0.5), rgba(39, 22, 65, 0.5))";
    }
  } else if (getHours > 6 && getHours < 9) {
    background.style.backgroundImage = "url(img-1.svg)";
    for (let i = 0; i < digit.length; i++) {
      digit[i].style.color = "#eadeb4";
      digit[i].style.backgroundImage = "linear-gradient(180deg, rgba(78, 98, 145, 0.5), rgba(201, 153, 174, 0.5), rgba(73, 150, 172, 0.5))";
    }
  } else if (getHours > 9 && getHours < 12) {
    background.style.backgroundImage = "url(img-2.svg)";
    for (let i = 0; i < digit.length; i++) {
      digit[i].style.color = "#57abbf";
      digit[i].style.backgroundImage = "linear-gradient(180deg, rgba(140, 213, 213, 0.5), rgba(194, 229, 195, 0.5), rgba(178, 211, 53, 0.5))";
    }
  } else if (getHours > 12 && getHours < 18) {
    background.style.backgroundImage = "url(img-3.svg)";
    for (let i = 0; i < digit.length; i++) {
      digit[i].style.color = "#d0eaf5";
      digit[i].style.backgroundImage = "linear-gradient(180deg, rgba(75, 162, 202, 0.5), rgba(136, 200, 223, 0.5), rgba(102, 142, 200, 0.5))";
    }
  } else if (getHours > 18 && getHours < 21) {
    background.style.backgroundImage = "url(img-4.svg)";
    for (let i = 0; i < digit.length; i++) {
      digit[i].style.color = "#f5cb57";
      digit[i].style.backgroundImage = "linear-gradient(180deg, rgba(218, 76, 61, 0.5), rgba(234, 125, 33, 0.5), rgba(95, 36, 66, 0.5))";
    }
  } else if (getHours > 21 && getHours <= 23) {
    background.style.backgroundImage = "url(img-5.svg)";
    for (let i = 0; i < digit.length; i++) {
      digit[i].style.color = "#dbe2d7";
      digit[i].style.backgroundColor = "linear-gradient(180deg, rgba(78, 98, 145, 0.5), rgba(201, 153, 174, 0.5), rgba(39, 22, 65, 0.5))";
    }
  }
}

displayTime();
changeBackground();

setInterval(() => {
  displayTime();
  changeBackground();
}, 1000);
