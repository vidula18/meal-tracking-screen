// Interactivity for Meal Tracking Dashboard
document.addEventListener('DOMContentLoaded', () => {
    // Add micro-animations to meal cards
    const mealCards = document.querySelectorAll('.meal-card');
    
    mealCards.forEach(card => {
        card.addEventListener('click', function() {
            // Simple pulse animation on click
            this.style.transform = 'scale(0.98)';
            setTimeout(() => {
                this.style.transform = 'translateY(-2px)';
            }, 150);
        });
    });

    // Animate FAB button pulse occasionally to encourage interaction
    const fab = document.querySelector('.fab-button');
    setInterval(() => {
        if(!fab.matches(':hover')) {
            fab.style.transform = 'scale(1.05)';
            setTimeout(() => {
                fab.style.transform = 'scale(1)';
            }, 200);
        }
    }, 5000);
});
