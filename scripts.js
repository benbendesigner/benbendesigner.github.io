// Create intersection observer
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        // Add visible class when element enters viewport
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            // Optional: stop observing after animation
            observer.unobserve(entry.target);
        }
    });
}, {
    threshold: 0.1 // Trigger when 10% of element is visible
});

// Observe all elements with fade-in class
document.addEventListener('DOMContentLoaded', () => {
    const elements = document.querySelectorAll('.fade-in');
    elements.forEach(el => observer.observe(el));
}); 