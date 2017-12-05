$(document).ready(function() {
  window.dancers = [];

  $('.addDancerButton').on('click', function(event) {
    /* This function sets up the click handlers for the create-dancer
     * buttons on dancefloor.html. You should only need to make one small change to it.
     * As long as the "data-dancer-maker-function-name" attribute of a
     * class="addDancerButton" DOM node matches one of the names of the
     * maker functions available in the global scope, clicking that node
     * will call the function to make the dancer.
     */

    /* dancerMakerFunctionName is a string which must match
     * one of the dancer maker functions available in global scope.
     * A new object of the given type will be created and added
     * to the stage.
     */
    var dancerMakerFunctionName = $(this).data('dancer-maker-function-name');
    // get the maker function for the kind of dancer we're supposed to make
    var dancerMakerFunction = window[dancerMakerFunctionName];

    // make a dancer with a random position

    var dancer = new dancerMakerFunction(
      $('body').height() * Math.random(),
      $('body').width() * Math.random(),
      Math.random() * 1000
    );
    $('body').append(dancer.$node);
    window.dancers.push(dancer);
  });

  $('.lineupButton').on('click', function(event) {
    var screenY = $(window).height();
    var numOfDancers = window.dancers.length;
    var spaceBetweenDancers = screenY / numOfDancers;
    window.dancers.forEach(function(dancer, index) {
      dancer.stopAnimation();
      dancer.lineup(spaceBetweenDancers * index);
    });
  });
  $('.danceButton').on('click', function(event) {
    var vertDancers = Math.floor(Math.sqrt(window.dancers.length / 2) + 1)
    var horizDancers = window.dancers.length / (2 * vertDancers);
    var vertSpacing= $(window).height() / vertDancers;
    var horizSpacing = $(window).width() / horizDancers;
    var indices = [];
    for (var i = 0; i < vertDancers; i++) {
      for (var j = 0; j < horizDancers; j++) {
        indices.push([i, j]);
        indices.push([i, j]);
      }
    }
    indices.push([$(window).width() / 2, $(window).height() / 2]);
    window.dancers.forEach(function(dancer, index) {
      console.log(vertSpacing, horizSpacing)
      dancer.stopAnimation();
      dancer.dance((vertSpacing * indices[index][0]) + vertSpacing / 2, (horizSpacing * indices[index][1]) + horizSpacing / 2 , index);

    })
  });
  // $('.dancerhead').on('click', function(event) {
  //   console.log('here')
  //   this.nextHead();
  // });

});
