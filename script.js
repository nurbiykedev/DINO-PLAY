const dino = document.querySelector("#dino");
const cactus = document.querySelector("#cactus");

document.addEventListener("keydown", function (e) {
  jump();
});

function jump() {
  if (dino.classList != "jump") {
    dino.classList.add("jump");
  }
  setTimeout(function () {
    dino.classList.remove("jump");
  }, 800);
}

let isAlive = setInterval(function () {
  let dinoTop = parseInt(window.getComputedStyle(dino).getPropertyValue("top"));
  let cactusLeft = parseInt(
    window.getComputedStyle(cactus).getPropertyValue("left")
  );

  if (cactusLeft < 60 && cactusLeft > 0 && dinoTop >= 150) {
    alert("GAME OVER!");
  }
}, 10);
