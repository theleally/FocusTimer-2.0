import {
  buttonPlay,
  buttonStop,
  buttonPlus,
  buttonMinus,
  forest,
  rain,
  coffee,
  fire
} from "./elements.js";

export default function({timer, sound}) {

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