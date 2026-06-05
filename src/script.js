document.addEventListener('DOMContentLoaded', () => {
    const modal = document.getElementById('planModal');
    const closeBtn = document.querySelector('.close-modal-btn');
    
    // Elements to populate in modal
    const modalBadge = document.getElementById('modalPlanBadge');
    const modalTitle = document.getElementById('modalPlanTitle');
    const modalDate = document.getElementById('modalPlanDate');
    const modalSummary = document.getElementById('modalPlanSummary');

    function openModal(week, title, date, summary) {
        if (modalBadge) modalBadge.innerText = week;
        if (modalTitle) modalTitle.innerText = title;
        if (modalDate) modalDate.innerText = date;
        if (modalSummary) modalSummary.innerText = summary;
        modal.classList.add('active');
        document.body.style.overflow = 'hidden'; // Prevent background scrolling
    }

    function closeModal() {
        modal.classList.remove('active');
        document.body.style.overflow = ''; // Restore background scrolling
    }

    if (closeBtn) {
        closeBtn.addEventListener('click', closeModal);
    }

    // Close on overlay click
    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            closeModal();
        }
    });

    // 1. PDF Card interaction
    const activePdfCard = document.getElementById('activePdfCard');
    if (activePdfCard) {
        activePdfCard.addEventListener('click', function() {
            this.style.transform = 'scale(0.96)';
            setTimeout(() => {
                this.style.transform = 'scale(1)';
                openModal('Week 3', 'Metabolic Reset Phase', 'Oct 15 - Oct 21', 'Focus on high protein, moderate healthy fats, and low glycemic carbohydrates.');
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
            const date = this.querySelector('.history-date').innerText;
            
            // Read from data attributes instead of child nodes
            const status = this.getAttribute('data-status');
            const title = this.getAttribute('data-title');
            const summary = this.getAttribute('data-summary');
            
            // Simple click animation
            this.style.transform = 'scale(0.98)';
            setTimeout(() => {
                this.style.transform = 'scale(1)'; // Return to normal state
                if (status !== 'Upcoming') {
                    openModal(week, title, date, summary);
                } else {
                    alert(`${week} plan is not yet available.`);
                }
            }, 150);
        });
    });

    // 4. WhatsApp Card interaction
    const waCard = document.querySelector('.btn-whatsapp-card');
    if (waCard) {
        waCard.addEventListener('click', function() {
            this.style.transform = 'scale(0.96)';
            setTimeout(() => {
                this.style.transform = 'scale(1)';
                alert('Opening WhatsApp to chat with Dr. Orika...');
            }, 150);
        });
    }
    // 5. Dismiss Clinical Reminder
    const dismissBtn = document.getElementById('dismissReminder');
    const clinicalReminder = document.getElementById('clinicalReminder');
    if (dismissBtn && clinicalReminder) {
        dismissBtn.addEventListener('click', () => {
            clinicalReminder.style.opacity = '0';
            setTimeout(() => {
                clinicalReminder.style.display = 'none';
            }, 300);
        });
    }

    // 6. Habit Pills Toggle
    const habitPills = document.querySelectorAll('.habit-pill');
    habitPills.forEach(pill => {
        pill.addEventListener('click', function() {
            this.classList.toggle('active');
            const icon = this.querySelector('i');
            if (this.classList.contains('active')) {
                icon.className = 'fa-solid fa-check';
            } else {
                icon.className = 'fa-solid fa-plus';
            }
        });
    });

    // 7. Water Tracker
    const droplets = document.querySelectorAll('.droplet-btn');
    const waterProgressText = document.getElementById('waterProgressText');
    droplets.forEach((droplet, index) => {
        droplet.addEventListener('click', () => {
            // Fill this one and all before it, empty all after it
            let activeCount = index + 1;
            
            // If clicking the last active droplet, untoggle it
            if (droplet.classList.contains('active') && (index === droplets.length - 1 || !droplets[index+1].classList.contains('active'))) {
                activeCount = index;
            }

            droplets.forEach((d, i) => {
                if (i < activeCount) {
                    d.classList.add('active');
                } else {
                    d.classList.remove('active');
                }
            });

            if (waterProgressText) {
                waterProgressText.innerText = `${activeCount} / 8 Glasses`;
            }
        });
    });
});
