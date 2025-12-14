const textElement = document.getElementById("typing-text");
const textToType = "Développeur Web polyvalent";
const typingSpeed = 100;
const erasingSpeed = 50;
const pauseTime = 2000;

let charIndex = 0;
let isDeleting = false;

function typeEffect() {
    const currentText = textToType;

    if (!isDeleting) {
        textElement.textContent = currentText.substring(0, charIndex + 1);
        charIndex++;

        if (charIndex === currentText.length) {
            isDeleting = true;
            setTimeout(typeEffect, pauseTime);
            return;
        }
    } else {
        textElement.textContent = currentText.substring(0, charIndex - 1);
        charIndex--;

        if (charIndex === 0) {
            isDeleting = false;
        }
    }

    setTimeout(typeEffect, isDeleting ? erasingSpeed : typingSpeed);
}

document.addEventListener('DOMContentLoaded', typeEffect);

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});