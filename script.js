// Wait for the HTML document to fully load before running the script
document.addEventListener('DOMContentLoaded', () => {
    
    // Find the button using its ID
    const exploreButton = document.getElementById('exploreBtn');

    // Add a click event listener to the button
    exploreButton.addEventListener('click', () => {
        alert("Thanks for checking out my project! Scroll down to learn more.");
        
        // Bonus: Smooth scroll to the info section
        document.querySelector('.info-section').scrollIntoView({ 
            behavior: 'smooth' 
        });
    });

});