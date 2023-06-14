export default function() {

  const forestAudio = new Audio("../audio/Floresta.wav")
  const rainAudio = new Audio("../audio/Chuva.wav")
  const coffeeAudio = new Audio("../audio/Cafeteria.wav")
  const fireAudio = new Audio("../audio/Lareira.wav")

  function pressForestAudioButton() {
    forestAudio.play();
    rainAudio.pause();
    coffeeAudio.pause();
    fireAudio.pause();
  }

  function pressRainAudioButton() {
    rainAudio.play();
    forestAudio.pause();
    coffeeAudio.pause();
    fireAudio.pause();
  }

  function pressCoffeeAudioButton() {
    coffeeAudio.play();
    forestAudio.pause();
    rainAudio.pause();
    fireAudio.pause();
  }

  function pressFireAudioButton() {
    fireAudio.play();
    forestAudio.pause();
    rainAudio.pause();
    coffeeAudio.pause();
  }

  return {
    pressCoffeeAudioButton,
    pressFireAudioButton,
    pressForestAudioButton,
    pressRainAudioButton
  }

}