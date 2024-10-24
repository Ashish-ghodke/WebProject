// JavaScript for future functionality (e.g., form validation)
document.addEventListener("DOMContentLoaded", () => {
    console.log("Document loaded. You can add more functionality here.");
});
document.addEventListener("DOMContentLoaded", function() {
    const coachImages = document.querySelectorAll('.coach-image');
    const coachDetails = document.querySelectorAll('.coach-details');
    
    function checkVisibility() {
        coachImages.forEach((image, index) => {
            const rect = image.getBoundingClientRect();
            if (rect.top < window.innerHeight) {
                image.classList.add('show');
                coachDetails[index].classList.add('show');
            }
        });
    }
    
    // Listen for scroll events
    window.addEventListener('scroll', checkVisibility);
    
    // Run on page load in case the section is already visible
    checkVisibility();
});
