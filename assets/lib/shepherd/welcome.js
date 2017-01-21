(function() {
  var init, setupShepherd;

  init = function() {
    return setupShepherd();
  };

  setupShepherd = function() {
    var shepherd;
    shepherd = new Shepherd.Tour({
      defaults: {
        classes: 'shepherd-element shepherd-open shepherd-theme-arrows',
        showCancelLink: true
      }
    });
    shepherd.addStep('followup', {
      title: 'Hover the Menu of Jacob Way',
      text: 'You can choose the different version from hovering the memu.',
      attachTo: '#logo bottom',
      buttons: [
        {
          text: 'Done',
          action: shepherd.next
        }
      ]
    });
    return shepherd.start();
  };

  $(init);

}).call(this);
