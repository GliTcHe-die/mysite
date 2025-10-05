// typing effect
const typingTextEl = document.querySelector('.typing-text');
const nameToType = "Gangster Chindo";
const typingSpeed = 120;
const erasingSpeed = 80;
const delayBetween = 2000;

let charIndex = 0;
let isErasing = false;

function typeEffect() {
  if (!isErasing && charIndex <= nameToType.length) {
    typingTextEl.textContent = nameToType.slice(0, charIndex);
    charIndex++;
    setTimeout(typeEffect, typingSpeed);
  } else if (isErasing && charIndex >= 0) {
    typingTextEl.textContent = nameToType.slice(0, charIndex);
    charIndex--;
    setTimeout(typeEffect, erasingSpeed);
  } else {
    isErasing = !isErasing;
    setTimeout(typeEffect, delayBetween);
  }
}

document.addEventListener('DOMContentLoaded', () => {
  setTimeout(typeEffect, 500);
});

// toggle theme mode
const themeToggleBtn = document.getElementById('themeToggle');
themeToggleBtn.addEventListener('click', () => {
  document.body.classList.toggle('light-mode');
  const icon = themeToggleBtn.querySelector('i');
  if (document.body.classList.contains('light-mode')) {
    icon.classList.remove('fa-moon');
    icon.classList.add('fa-sun');
  } else {
    icon.classList.remove('fa-sun');
    icon.classList.add('fa-moon');
  }
});
