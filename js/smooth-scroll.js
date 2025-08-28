$(document).ready(function() {
  var learnMoreButton = $('.learn-more-button');
  var arrowContainer = $('.arrow-container');
  var originalPosition = learnMoreButton.offset().top;
  var scrolled = false; // Flag to track if the user has scrolled

  // Function to recalculate the original position of the learn more button
  function recalculateOriginalPosition() {
    originalPosition = learnMoreButton.offset().top;
    console.log("Recalculated Original Position:", originalPosition);
  }

  // Recalculate position when window is resized
  $(window).resize(recalculateOriginalPosition);

  // Smooth scroll to About Me section when clicking 'Learn More' button
  learnMoreButton.click(function(e) {
    e.preventDefault();
    $('html, body').animate({
      scrollTop: $('#about-me-section').offset().top
    }, 3000, function() {
      learnMoreButton.hide(); // Hide 'Learn More' button after scrolling
      arrowContainer.hide(); // Also hide the arrow container
    });
  });

  // Hide the 'Learn More' button and arrow when user starts to scroll manually
  $(window).scroll(function() {
    if (!scrolled) {
      learnMoreButton.hide();
      arrowContainer.hide();
      scrolled = true;
    }
  });

  // Recalculate the original position of the button on load
  recalculateOriginalPosition();
});

// Additional scroll logic for inverting the background gradient
window.addEventListener('scroll', function() {
  // Check if the page has been scrolled down from the top
  if (window.pageYOffset > 0) {
    document.body.classList.add('gradient-invert');
    $('.learn-more-button').hide(); // Hide the learn more button when the user starts to scroll
    $('.arrow-container').hide(); // Ensure the arrow is also hidden
  } else {
    document.body.classList.remove('gradient-invert');
    $('.learn-more-button').show(); // Show the learn more button when scrolled to the top
    $('.arrow-container').show(); // Show the arrow when scrolled to the top
  }
});
