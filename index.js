document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();

        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);

        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop,
                behavior: 'smooth'
            });
        }
    });
});

document.addEventListener("DOMContentLoaded", function() {
    const fadeOutDelay = 5000; // 5 seconds
    const introSection = document.getElementById('intro-section');
    setTimeout(function() {
        introSection.classList.add('fade-out');
        introSection.addEventListener('transitionend', function() {
            introSection.classList.add('hidden');
        });
    }, fadeOutDelay);
});

const darkModeToggle = document.getElementById('dark-mode-toggle');
const body = document.body;

darkModeToggle.addEventListener('click', () => {
    body.classList.toggle('dark-mode');
    if (body.classList.contains('dark-mode')) {
        // If dark mode is enabled, store the preference in local storage
        localStorage.setItem('darkMode', 'enabled');
    } else {
        // If light mode is enabled, remove the preference from local storage
        localStorage.removeItem('darkMode');
    }
});

