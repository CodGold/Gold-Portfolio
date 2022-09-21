function revealMyInfo(myName, className, color, animationName) {
  let htmlElement = document.querySelector(className);

  htmlElement.innerHTML = myName;
  htmlElement.style.color = color;

  htmlElement.style.animationDuration = "1s";

  if (animationName === "bgFadeOut") {
    htmlElement.style.animationName = animationName;
  } else if (animationName === "slideIn") {
    htmlElement.style.animationName = animationName;
  } else if (animationName === "heartBeat") {
    htmlElement.style.animationName = animationName;
  }
}
