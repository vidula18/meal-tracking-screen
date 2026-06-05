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

    // 2. Week Switcher Interaction
    const weekBtns = document.querySelectorAll('.week-btn');
    weekBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            const status = this.getAttribute('data-status');
            const week = this.getAttribute('data-week');
            const title = this.getAttribute('data-title');
            const summary = this.getAttribute('data-summary');
            
            // Mock dynamic dates based on week
            const dates = {
                'W1': 'Oct 1 - Oct 7',
                'W2': 'Oct 8 - Oct 14',
                'W3': 'Oct 15 - Oct 21',
                'W4': 'Oct 22 - Oct 28'
            };
            
            this.style.transform = 'scale(0.95)';
            setTimeout(() => {
                this.style.transform = 'scale(1)';
                if (status !== 'Upcoming') {
                    openModal(week, title, dates[week], summary);
                } else {
                    alert(`${week} plan is not yet available.`);
                }
            }, 150);
        });
    });

    // 3. Nutritionist Card
    const connectBtn = document.querySelector('.btn-connect-clean');
    if (connectBtn) {
        connectBtn.addEventListener('click', function() {
            this.style.transform = 'scale(0.98)';
            setTimeout(() => {
                this.style.transform = 'scale(1)';
                alert('Opening WhatsApp to chat with Dr. Orika...');
            }, 150);
        });
    }
});
