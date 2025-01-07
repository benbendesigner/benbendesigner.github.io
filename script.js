document.querySelector('.hamburger').addEventListener('click', function() {
    document.querySelector('.nav-links').classList.toggle('active');
    
    // Optional: Animate hamburger to X
    this.classList.toggle('active');
});

// Close menu when clicking outside
document.addEventListener('click', function(e) {
    if (!e.target.closest('.nav-container')) {
        document.querySelector('.nav-links').classList.remove('active');
        document.querySelector('.hamburger').classList.remove('active');
    }
}); 