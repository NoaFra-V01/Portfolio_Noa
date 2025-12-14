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

const accordions = document.querySelectorAll('.but-item');

accordions.forEach(item => {
    const header = item.querySelector('.but-header');
    
    header.addEventListener('click', () => {
        accordions.forEach(otherItem => {
            if (otherItem !== item) {
                otherItem.classList.remove('active');
                otherItem.querySelector('.but-body').style.maxHeight = null;
            }
        });

        item.classList.toggle('active');
        
        const body = item.querySelector('.but-body');
        if (item.classList.contains('active')) {
            body.style.maxHeight = body.scrollHeight + "px";
        } else {
            body.style.maxHeight = null;
        }
    });
});


const ratio = .1; 
const options = {
  root: null,
  rootMargin: '0px',
  threshold: ratio
}

const handleIntersect = function (entries, observer) {
  entries.forEach(function (entry) {
    if (entry.intersectionRatio > ratio) {
      entry.target.classList.add('reveal-visible');
      observer.unobserve(entry.target);
    }
  });
}

const observer = new IntersectionObserver(handleIntersect, options);
document.querySelectorAll('.reveal').forEach(function (r) {
  observer.observe(r);
});