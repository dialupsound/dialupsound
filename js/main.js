(function() {

  var dialUpSound = new Audio('audio/dialup.mp3');

  $(dialUpSound)
    .on('timeupdate', function() {
      var time = this.currentTime,
          $aol = $('.aol');
      if (time < 28) {
        $aol.removeClass('connecting connected');
      } else if (time < 29) {
        $aol.removeClass('connected').addClass('connecting');
      } else {
        $aol.removeClass('connecting').addClass('connected');
      }
    })
    // iOS doesn't respect .loop, this is a workaround
    .on('ended', function() {
      this.play();
    })
    .on('play', function() {
      $('.overlay').remove();
    });
  
  dialUpSound.play();

  // iOS needs a user action to initiate audio
  $(document).on('touchstart', function() {
    dialUpSound.play();
    $(document).off('touchstart');
    return false;
  });

})();