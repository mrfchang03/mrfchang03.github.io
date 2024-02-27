function updateParticles() {
    var width = window.innerWidth;
    var particleCount;
    var valueArea;

    // Correct the logical progression of window width checks
    if (width > 2400) {  
        particleCount = 100;  
        valueArea = 1400;     
    } else if (width > 1200) {  
        particleCount = 205;  
        valueArea = 1000;     
    } else {  // Simplify conditions for smaller widths
        particleCount = 700;  
        valueArea = 800;      
    }


    // Update Particles.js configuration
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
                "value": "#45A29E"
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
                "random": false,
                "anim": {
                    "enable": false,
                    "speed": 1,
                    "opacity_min": 0.1,
                    "sync": false
                }
            },
            "size": {
                "value": 3,
                "random": true,
                "anim": {
                    "enable": false,
                    "speed": 40,
                    "size_min": 0.1,
                    "sync": false
                }
            },
            "line_linked": {
                "enable": true,
                "distance": 110,
                "color": "#45A29E",
                "opacity": 0.4,
                "width": 1
            },
            "move": {
                "enable": true,
                "speed": 0.9,
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
            },
            "modes": {
                "grab": {
                    "distance": 140,
                    "line_linked": {
                        "opacity": 1
                    }
                },
                "bubble": {
                    "distance": 400,
                    "size": 40,
                    "duration": 2,
                    "opacity": 8,
                    "speed": 3
                },
                "repulse": {
                    "distance": 100,
                    "duration": 0.4
                },
                "push": {
                    "particles_nb": 2
                },
                "remove": {
                    "particles_nb": 6
                }
            }
        },
        "retina_detect": true
    });
}

// Initial setup
updateParticles();

// Update particle count when the window is resized
window.addEventListener('resize', updateParticles);
window.addEventListener('scroll', function() {
    var body = document.body;
    var scrollHeight = window.pageYOffset;
    
    // Set a scroll threshold to trigger the gradient reversal
    var scrollThreshold = 100;
  
    if (scrollHeight > scrollThreshold && !body.classList.contains('gradient-reversed')) {
      body.classList.remove('gradient-original');
      body.classList.add('gradient-reversed');
    }
  });