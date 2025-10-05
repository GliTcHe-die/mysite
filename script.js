const typingTextEl = document.querySelector('.typing-text');

const nameToType = "Gangster Chindo";  // غير هذا إلى الاسم الذي تريده
const typingSpeed = 150;
const erasingSpeed = 100;
const delayBetween = 2000;  // المدة التي يبقى فيها النص الكامل قبل أن يُمحى

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

// ابدأ التأثير بعد تحميل الصفحة
document.addEventListener('DOMContentLoaded', () => {
  setTimeout(typeEffect, 500);
});
