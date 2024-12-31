document.querySelectorAll('.values-button').forEach(button => {
    button.addEventListener('click', () => {
        // Create and show modal
        const modal = document.createElement('div');
        modal.className = 'modal';
        modal.innerHTML = `
            <div class="modal-content">
                <button class="modal-close">×</button>
                <h2>For the love of the game</h2>
                <p>Your modal content here...</p>
            </div>
        `;
        document.body.appendChild(modal);
        
        // Close button functionality
        modal.querySelector('.modal-close').addEventListener('click', () => {
            modal.remove();
        });
    });
}); 

// Get the navbar and hero elements
const navbar = document.querySelector('.navbar');
const hero = document.querySelector('.hero');

// Function to handle scroll
function handleScroll() {
    // Get the hero section's bottom position
    const heroBottom = hero.offsetTop + hero.offsetHeight;
    
    // Check if we've scrolled past the hero
    if (window.scrollY > heroBottom - 100) { // -100 to trigger slightly before
        navbar.classList.add('visible');
    } else {
        navbar.classList.remove('visible');
    }
}

// Add scroll event listener
window.addEventListener('scroll', handleScroll);

// Run once on page load
handleScroll(); 