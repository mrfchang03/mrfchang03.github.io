document.addEventListener("DOMContentLoaded", function() {
    document.querySelector('.learn-more-button').addEventListener('click', function(e) {
      e.preventDefault(); // Prevent the default anchor behavior
  
      const projectsSection = document.querySelector('#projects-section');
      projectsSection.style.display = 'block'; // Make the projects section visible
  
      // Smoothly scroll to the projects section
      projectsSection.scrollIntoView({
        behavior: 'smooth'
      });
    });
  });
  