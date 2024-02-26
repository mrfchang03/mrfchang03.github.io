document.addEventListener("DOMContentLoaded", function() {
    document.querySelector('.learn-more-button').addEventListener('click', function(e) {
      e.preventDefault(); // Prevent the default anchor behavior
  
      const projectsSection = document.querySelector('#projects-section');
      projectsSection.style.display = 'block'; // Make the projects section visible
  
      // Add a slight delay before scrolling to ensure the layout adjusts
      setTimeout(() => {
        projectsSection.scrollIntoView({
          behavior: 'smooth',
          block: 'start' // Adjust as needed ('start', 'center', 'end')
        });
      }, 100); // Adjust delay as needed
    });
  });
  