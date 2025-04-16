// ripple-effect.js

function createRipple(x, y) {
  const ripple = document.createElement("span");

  const size = Math.max(window.innerWidth, window.innerHeight);
  ripple.style.width = ripple.style.height = `${size}px`;
  ripple.style.left = `${x - size / 2}px`;
  ripple.style.top = `${y - size / 2}px`;
  ripple.classList.add("ripple");

  document.body.appendChild(ripple);

  setTimeout(() => {
    ripple.remove();
  }, 600);
}

document.body.addEventListener("click", function (e) {
  createRipple(e.clientX, e.clientY);
});

document.body.addEventListener("touchstart", function (e) {
  const touch = e.touches[0]; // Get the first touch point
  createRipple(touch.clientX, touch.clientY);
});
