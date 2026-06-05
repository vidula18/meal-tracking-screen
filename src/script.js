document.addEventListener('DOMContentLoaded', () => {
    // 1. Mock CTA button interaction
    const btnPrimary = document.querySelector('.btn-primary');
    if (btnPrimary) {
        btnPrimary.addEventListener('click', function() {
            // Simple animation for feedback
            this.style.transform = 'scale(0.96)';
            setTimeout(() => {
                this.style.transform = 'scale(1)';
                alert("This would navigate to the full detailed meal plan view.");
            }, 150);
        });
    }

    // 2. Weekly Bubbles interaction
    const dayBubbles = document.querySelectorAll('.day-bubble');
    dayBubbles.forEach(bubble => {
        bubble.addEventListener('click', function() {
            if (this.classList.contains('pending')) {
                // Mock logging a pending day
                this.classList.remove('pending');
                this.classList.add('logged');
                const indicator = this.querySelector('.bubble-indicator');
                indicator.innerHTML = '<i class="fa-solid fa-check"></i>';
                indicator.style.backgroundColor = 'var(--success-bg)';
                indicator.style.color = 'var(--success-color)';
                indicator.style.border = 'none';
            }
        });
    });

    // 3. History Cards interaction
    const historyCards = document.querySelectorAll('.history-card');
    historyCards.forEach(card => {
        card.addEventListener('click', function() {
            const week = this.querySelector('.history-week').innerText;
            const status = this.querySelector('.history-status').innerText;
            
            // Simple click animation
            this.style.transform = 'scale(0.98)';
            setTimeout(() => {
                this.style.transform = 'translateY(-2px)'; // Return to hover state essentially
                if (status !== 'Upcoming') {
                    alert(`Opening details for ${week}`);
                } else {
                    alert(`${week} plan is not yet available.`);
                }
            }, 150);
        });
    });
});
