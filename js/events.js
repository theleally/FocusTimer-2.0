import {
  body,
  timerDisplay,
  buttonPlay,
  buttonStop,
  buttonPlus,
  buttonMinus,
  buttonLightMode,
  buttonDarkMode,
  forest,
  rain,
  coffee,
  fire
} from "./elements.js";

export default function({timer, sound}) {

  buttonLightMode.addEventListener("click", function() {
    buttonDarkMode.classList.remove('hide')
    buttonLightMode.classList.add('hide')
    body.style.background = "#121214"
    timerDisplay.style.color = "#FFFFFF"
    forest.style.background = "#29292E"
    rain.style.background = "#29292E"
    coffee.style.background = "#29292E"
    fire.style.background = "#29292E"
  })

  buttonDarkMode.addEventListener("click", function() {
    buttonLightMode.classList.remove('hide')
    buttonDarkMode.classList.add('hide')
    body.style.background = "#FFFFFF"
    timerDisplay.style.color = "#323238"
    forest.style.background = "#E1E1E6"
    rain.style.background = "#E1E1E6"
    coffee.style.background = "#E1E1E6"
    fire.style.background = "#E1E1E6"
  })

  buttonPlay.addEventListener("click", function() {
    timer.countdown();
  })

  buttonStop.addEventListener("click", function() {
    timer.reset();
  })

  buttonPlus.addEventListener("click", function() {
    timer.plusFiveMinutes();
  })

  buttonMinus.addEventListener("click", function() {
    timer.minusFiveMinutes();
  })

  forest.addEventListener("click", function() {
    sound.pressForestAudioButton();
  })

  rain.addEventListener("click", function() {
    sound.pressRainAudioButton();
  })

  coffee.addEventListener("click", function() {
    sound.pressCoffeeAudioButton();
  })

  fire.addEventListener("click", function() {
    sound.pressFireAudioButton();
  })
}