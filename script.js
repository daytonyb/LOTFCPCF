document.addEventListener('DOMContentLoaded', () => {
    
    const exploreButton = document.getElementById('exploreBtn');

    if (exploreButton) {
        exploreButton.addEventListener('click', () => {
            // Smooth scroll down to the info cards on the homepage
            const infoSection = document.querySelector('.info-section');
            if (infoSection) {
                infoSection.scrollIntoView({ behavior: 'smooth' });
            } else {
                // If the info section isn't there (like on chapter pages), go to chapter 1
                window.location.href = 'ch1.html';
            }
        });
    }

});