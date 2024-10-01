// Function to update particles.js based on screen width
function updateParticles() {
    var width = window.innerWidth;
    var particleCount;
    var valueArea;

    // Adjust particle count and area based on window width
    if (width > 2400) {
        particleCount = 100;
        valueArea = 1400;
    } else if (width > 1200) {
        particleCount = 205;
        valueArea = 1000;
    } else {
        particleCount = 700;
        valueArea = 800;
    }

    // Initialize Particles.js for the background effect
    if (window.pJSDom && window.pJSDom.length > 0) {
        window.pJSDom[0].pJS.fn.vendors.destroypJS();
        window.pJSDom = [];
    }

    particlesJS("particles-js", {
        "particles": {
            "number": {
                "value": particleCount,
                "density": {
                    "enable": true,
                    "value_area": valueArea
                }
            },
            "color": {
                "value": "#66FCF1"
            },
            "shape": {
                "type": "circle",
                "stroke": {
                    "width": 0,
                    "color": "#000000"
                },
                "polygon": {
                    "nb_sides": 5
                }
            },
            "opacity": {
                "value": 0.5,
                "random": false
            },
            "size": {
                "value": 3,
                "random": true
            },
            "line_linked": {
                "enable": true,
                "distance": 150,
                "color": "#66FCF1",
                "opacity": 0.4,
                "width": 1
            },
            "move": {
                "enable": true,
                "speed": 2,
                "direction": "none",
                "random": false,
                "straight": false,
                "out_mode": "out",
                "bounce": false,
                "attract": {
                    "enable": false,
                    "rotateX": 600,
                    "rotateY": 1200
                }
            }
        },
        "interactivity": {
            "detect_on": "canvas",
            "events": {
                "onhover": {
                    "enable": true,
                    "mode": "grab"
                },
                "onclick": {
                    "enable": true,
                    "mode": "push"
                },
                "resize": true
            }
        },
        "retina_detect": true
    });
}

// Initial setup for particles.js
updateParticles();

// Update particle count when the window is resized
window.addEventListener('resize', updateParticles);

// Handle scroll to reverse gradient
window.addEventListener('scroll', function() {
    var body = document.body;
    var scrollHeight = window.pageYOffset;

    // Set a scroll threshold to trigger the gradient reversal
    var scrollThreshold = 100;

    if (scrollHeight > scrollThreshold && !body.classList.contains('gradient-reversed')) {
        body.classList.remove('gradient-original');
        body.classList.add('gradient-reversed');
    } else if (scrollHeight <= scrollThreshold && body.classList.contains('gradient-reversed')) {
        body.classList.remove('gradient-reversed');
        body.classList.add('gradient-original');
    }
});
document.addEventListener('DOMContentLoaded', function() {
    // Select all sidebar links that have a data-section attribute
    const links = document.querySelectorAll('.sidebar-links li a[data-section]');
    const homeScreen = document.getElementById('home-screen');

    // Function to smoothly switch between sections with a fade effect
    function switchSection(sectionId) {
        console.log('Switching to section: ', sectionId); // Debugging line

        // Fade out the currently visible section
        const currentActive = document.querySelector('.screen.active');
        if (currentActive) {
            currentActive.classList.add('fade-out');
            // Ensure the current section becomes hidden after the fade-out completes
            setTimeout(() => {
                currentActive.classList.remove('active', 'fade-out');
                currentActive.classList.add('hidden');
                currentActive.style.display = 'none'; // Ensure display is set to none
            }, 500); // Match this duration with the CSS transition
        }

        // Fade in the new section
        setTimeout(() => {
            const selectedSection = document.getElementById(sectionId);
            if (selectedSection) {
                console.log(`Fading in section: ${sectionId}`); // Debugging log
                selectedSection.classList.remove('hidden');
                selectedSection.classList.add('fade-in');
                selectedSection.style.display = 'block'; // Explicitly force display

                // After fade-in, set the section as active
                setTimeout(() => {
                    selectedSection.classList.add('active');
                    selectedSection.classList.remove('fade-in');
                }, 500); // Match this duration with the CSS transition
            }
        }, 500); // Delay the fade-in until the fade-out completes
    }

    // Add click event listeners to sidebar links that switch sections
    links.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault(); // Prevent default anchor behavior
            const sectionId = this.getAttribute('data-section'); // Get the target section ID
            switchSection(sectionId); // Smoothly switch to the clicked section
        });
    });

    // Close section functionality when close button is clicked
    document.querySelectorAll('.close-btn').forEach(button => {
        button.addEventListener('click', function() {
            const section = this.closest('.screen'); // Get the section container
            section.classList.add('fade-out');
            setTimeout(() => {
                section.classList.remove('active', 'fade-out');
                section.classList.add('hidden');
                section.style.display = 'none'; // Ensure it's hidden

                // Switch back to the home screen after closing the section
                homeScreen.classList.remove('hidden');
                homeScreen.classList.add('fade-in');
                homeScreen.style.display = 'block'; // Ensure the home screen is displayed
                setTimeout(() => {
                    homeScreen.classList.add('active');
                    homeScreen.classList.remove('fade-in');
                }, 500); // Ensure the home screen also fades in properly
            }, 500); // Match this duration with the CSS transition
        });
    });
});
