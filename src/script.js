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
        document.body.style.overflow = 'hidden';
    }

    function closeModal() {
        modal.classList.remove('active');
        document.body.style.overflow = '';
    }

    if (closeBtn) {
        closeBtn.addEventListener('click', closeModal);
    }

    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            closeModal();
        }
    });

    // 1. PDF Card interaction (Slim Snippet)
    const activePdfCard = document.getElementById('activePdfCard');
    if (activePdfCard) {
        activePdfCard.addEventListener('click', function() {
            this.style.transform = 'scale(0.96)';
            setTimeout(() => {
                this.style.transform = 'scale(1)';
                openModal('W3', 'Metabolic Reset Phase', 'Oct 15 - Oct 21', 'Focus on high protein.');
            }, 150);
        });
    }

    // 2. Weekly Slim interaction
    const dayDots = document.querySelectorAll('.day-dot');
    dayDots.forEach(dot => {
        dot.addEventListener('click', function() {
            if (this.classList.contains('pending')) {
                this.classList.remove('pending');
                this.classList.add('logged');
            }
        });
    });

    // 3. History Grid Cards interaction
    const historyCards = document.querySelectorAll('.history-card');
    historyCards.forEach(card => {
        card.addEventListener('click', function() {
            const week = this.querySelector('.g-week').innerText;
            const date = this.querySelector('.g-date').innerText;
            
            const status = this.getAttribute('data-status');
            const title = this.getAttribute('data-title');
            const summary = this.getAttribute('data-summary');
            
            this.style.transform = 'scale(0.95)';
            setTimeout(() => {
                this.style.transform = 'scale(1)';
                if (status !== 'Upcoming') {
                    openModal(week, title, date, summary);
                } else {
                    alert(`${week} plan is not yet available.`);
                }
            }, 150);
        });
    });

    // 4. Dismiss Clinical Reminder
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
});
