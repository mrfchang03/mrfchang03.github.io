$(document).ready(function() {
  var learnMoreButton = $('.learn-more-button');
  var arrowContainer = $('.arrow-container');
  var originalPosition = learnMoreButton.offset().top;
  var scrolled = false; // Flag to track if the user has scrolled

  function recalculateOriginalPosition() {
    originalPosition = learnMoreButton.offset().top;
    console.log("Recalculated Original Position:", originalPosition);
  }

  $(window).resize(recalculateOriginalPosition);

  learnMoreButton.click(function(e) {
    e.preventDefault();
    $('html, body').animate({
      scrollTop: $('#projects-section').offset().top
    }, 3000, function() {
      learnMoreButton.hide();
      arrowContainer.hide();
    });
  });

  $(window).scroll(function() {
    if (!scrolled) {
      learnMoreButton.hide();
      arrowContainer.hide();
      scrolled = true;
    }
  });

  recalculateOriginalPosition();
});

// Listen for scroll events on the window
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
