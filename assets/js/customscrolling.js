function scrollToElement() {

    const targetElement = document.getElementById('scrollTarget');
    if (targetElement) {

        targetElement.scrollIntoView({
            behavior: 'smooth'
        });

    }
}


const links = document.querySelectorAll('a');
links.forEach(link => {
    link.addEventListener('click', (event) => {
        const targetId = link.getAttribute('href'); // Get the target section ID
        const targetSection = document.querySelector(targetId); // Find the target section
        if (targetSection) {
            event.preventDefault(); // Prevent default anchor behavior

            targetSection.scrollIntoView({
                behavior: 'smooth' // Use smooth scrolling
            });
        }
    });
});


var targetElement = document.getElementById("scrollTarget");
var hiddenElement = document.getElementById("hiddenElement");

// Add a scroll event listener
window.addEventListener("scroll", function() {
    var targetPosition = targetElement.getBoundingClientRect();

    // Check if the top of the target element is visible in the viewport
    if (targetPosition.top >= 0) {
        hiddenElement.style.display = "none"; // Show the element
    } else {
        hiddenElement.style.display = "block"; // Hide the element
    }
});