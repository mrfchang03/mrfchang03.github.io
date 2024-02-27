$(document).ready(function() {
  var learnMoreButton = $('.learn-more-button');
  var originalPosition = learnMoreButton.offset().top; // Get the original top offset of the button

  learnMoreButton.click(function(e) {
      e.preventDefault(); // Prevent the default anchor behavior

      // Animate scrolling to the projects section
      $('html, body').animate({
          scrollTop: $('#projects-section').offset().top
      }, 3000, function() {
          // Callback after animation completes
          learnMoreButton.hide(); // Hide the button after scrolling down

      });
  });

  $(window).scroll(function() {
      var scrollPos = $(this).scrollTop(); // Get current scroll position

      // Show the button if user scrolls back up past the original position, hide otherwise
      if (scrollPos < originalPosition) {
          learnMoreButton.fadeIn();
      } else {
          learnMoreButton.fadeOut();
      }
  });
});
