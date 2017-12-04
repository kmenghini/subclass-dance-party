var makeBlinkyDancer = function(top, left, timeBetweenSteps) {
  //this = Object.create(makeBlinkyDancer.prototype)
  console.log('constructor');
  // this.oldStep = this.constructor.prototype.step;
  console.log(this.constructor.prototype)
  this.oldStep = this.constructor.prototype.step;
  console.log('old step' + this.oldStep)
  makeDancer.apply(this, arguments);
  // we plan to overwrite the step function below, but we still want the superclass step behavior to work,
  // so we must keep a copy of the old version of this function
  console.log(this);

//  console.log(this)

};

makeBlinkyDancer.prototype = Object.create(makeDancer.prototype);
makeBlinkyDancer.prototype.contructor = makeBlinkyDancer;

makeBlinkyDancer.prototype.step = function() {
  // call the old version of step at the beginning of any call to this new version of step
    console.log('new step method');
    console.log(this);
  this.oldStep();

  // toggle() is a jQuery method to show/hide the <span> tag.
  // See http://api.jquery.com/category/effects/ for this and
  // other effects you can use on a jQuery-wrapped html tag.
  this.$node.toggle();
};
