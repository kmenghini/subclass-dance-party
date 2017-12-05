let BlinkyDancer = function(top, left, timeBetweenSteps) {
  this.oldStep = Dancer.prototype.step;
  Dancer.apply(this, arguments);
};

BlinkyDancer.prototype = Object.create(Dancer.prototype);
BlinkyDancer.prototype.constructor = BlinkyDancer;

BlinkyDancer.prototype.step = function(timeBetweenSteps) {
  this.oldStep(timeBetweenSteps);
  this.$node.toggleClass('hide');
};

window.BlinkyDancer = BlinkyDancer;
