
let MovementDancer = function(top, left, timeBetweenSteps) {
  //this.oldStep = Dancer.prototype.step;
  Dancer.apply(this, arguments);
  // this.$node = $('<span class="dancer"><img src="lemon.png"></span>');
};
MovementDancer.prototype = Object.create(Dancer.prototype);
MovementDancer.prototype.constructor = MovementDancer;

// BlinkyDancer.prototype.step = function(timeBetweenSteps) {
//   this.oldStep(timeBetweenSteps);
//   this.$node.toggle();
// };

window.BlinkyDancer = BlinkyDancer;
