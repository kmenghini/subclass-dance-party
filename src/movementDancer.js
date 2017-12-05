let MovementDancer = function(top, left, timeBetweenSteps) {
  Dancer.apply(this, arguments);
  this.move(timeBetweenSteps * 10);
};

MovementDancer.prototype = Object.create(Dancer.prototype);
MovementDancer.prototype.constructor = MovementDancer;

MovementDancer.prototype.move = function(time) {
  var x = Math.floor(Math.random() * $(window).width());
  var y = Math.floor(Math.random() * $(window).height());
  var styleSettings = {
    'top': y,
    'left': x
  };
  this.$node.animate(styleSettings, time, 'linear', this.move.bind(this, time));
};

window.MovementDancer = MovementDancer;
