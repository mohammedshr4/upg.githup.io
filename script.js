const audio = new Audio("short-beep.mp3");

const buttons = document.querySelectorAll("button");
buttons.forEach(button => {
  button.addEventListener("click", () => {
    audio.play();
  });
});