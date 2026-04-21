document.addEventListener('DOMContentLoaded', () => {
    
    const exploreButton = document.getElementById('exploreBtn');

    exploreButton.addEventListener('click', () => {
        // A thematic alert for the book
        alert("Listen to me! You got to let me speak! ...Let's analyze Piggy's character.");
        
        // Smooth scroll to the info cards
        document.querySelector('.info-section').scrollIntoView({ 
            behavior: 'smooth' 
        });
    });

});