function quickFade(element, enter, leave, thisOne) {
  if(thisOne){
    $(element).mouseenter(function() {
      $(this).fadeTo('fast', enter);
    });
    $(element).mouseleave(function() {
      $(this).fadeTo('fast', leave);
    });
  } else {
    $(element).mouseenter(function() {
      $(element).fadeTo('fast', enter);
    });
    $(element).mouseleave(function() {
      $(element).fadeTo('fast', leave);
    });
  }
}

$(document).ready(function() {
  quickFade('#selTrip img', 1, 0.25, true);
});
