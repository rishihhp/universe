document.addEventListener('DOMContentLoaded', () => {
    const navLinks = document.querySelectorAll('.nav-item');

    navLinks.forEach(link => {
        link.addEventListener('mouseenter', () => {
            // Remove the animation class first
            link.classList.remove('nav-bounce');
            
            // Force a reflow to restart the animation
            void link.offsetWidth;
            
            // Add the animation class back
            link.classList.add('nav-bounce');
        });

        link.addEventListener('mouseleave', () => {
            link.classList.remove('nav-hover');
            link.classList.remove('nav-bounce');
        });

        link.addEventListener('animationend', () => {
            link.classList.remove('nav-bounce');
        });
    });
}); 