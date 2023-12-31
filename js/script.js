function updateParticles() {
  var width = window.innerWidth;
  var particleCount;
  var valueArea;

  // Assuming 1200px is the normal width at 100% zoom
  // Adjust these values based on your site's layout and desired particle behavior
  if (width <= 1200) {  // <= 100% zoom
      particleCount = 175;
      valueArea = 800; // Normal particle density
  } else if (width <= 2400) {  // <= 50% zoom
      particleCount = 150;  // Slightly lower particle count
      valueArea = 1000;     // Larger area per particle
  } else if (width <= 3600) {  // <= 33% zoom
      particleCount = 125;   // Further reduced particle count
      valueArea = 1200;     // Even larger area per particle
  } else {  // <= 25% zoom or lower
      particleCount = 100;   // Minimal particle count
      valueArea = 1400;     // Max area per particle
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
              "value": "#54585A"
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
              "color": "#ffffff",
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
