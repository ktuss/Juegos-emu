const female = document.getElementById("female");
const male = document.getElementById("male");

let connected = false;

function connectSpheres() {
  if (connected) return;

  connected = true;

  female.style.transform = "translateX(80px)";
  male.style.transform = "translateX(-80px)";

  setTimeout(() => {
    showHeart();
  }, 500);
}

function showHeart() {
  const heart = document.createElement("div");
  heart.innerHTML = "💖";
  heart.style.position = "absolute";
  heart.style.left = "50%";
  heart.style.top = "50%";
  heart.style.transform = "translate(-50%, -50%)";
  heart.style.fontSize = "40px";
  heart.style.animation = "pop 0.5s ease";

  document.querySelector(".container").appendChild(heart);
}

female.addEventListener("click", connectSpheres);
male.addEventListener("click", connectSpheres);
