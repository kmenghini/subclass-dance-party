// var makeBlinkyDancer = function(top, left, timeBetweenSteps) {
//   var blinkyDancer = makeDancer(top, left, timeBetweenSteps);
//
//   // we plan to overwrite the step function below, but we still want the superclass step behavior to work,
//   // so we must keep a copy of the old version of this function
//
//   var oldStep = blinkyDancer.step;
//
//   blinkyDancer.step = function() {
//     // call the old version of step at the beginning of any call to this new version of step
//     oldStep();
//     // toggle() is a jQuery method to show/hide the <span> tag.
//     // See http://api.jquery.com/category/effects/ for this and
//     // other effects you can use on a jQuery-wrapped html tag.
//     blinkyDancer.$node.toggle();
//   };
//
//   return blinkyDancer;
// };

let BlinkyDancer = function(top, left, timeBetweenSteps) {
  console.log('Enterting blinky dancer constructor');
  // this.oldStep = this.step;
  // console.log(this.constructor);
  this.oldStep = Dancer.prototype.step;
  console.log(Dancer.prototype.step);
  Dancer.apply(this, arguments);
  // console.log(this)
  // console.log('oldstep', this.oldStep);
};
BlinkyDancer.prototype = Object.create(Dancer.prototype);
BlinkyDancer.prototype.constructor = BlinkyDancer;

BlinkyDancer.prototype.step = function(timeBetweenSteps) {
  console.log('Entering new Step')
  // console.log(this);
  this.oldStep(timeBetweenSteps);
  this.$node.toggle();
};
