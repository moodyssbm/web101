$(document).ready(function() {
  $('.button').mouseenter(function() {
    $(this).fadeTo('fast', 1);
  });
  $('.button').mouseleave(function() {
    $(this).fadeTo('fast', 0.5);
  });
});
