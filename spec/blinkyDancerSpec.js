describe('blinkyDancer', function() {
  var blinkyDancer, clock;
  var timeBetweenSteps = 100;

  beforeEach(function() {
    clock = sinon.useFakeTimers();
    blinkyDancer = new BlinkyDancer(10, 20, timeBetweenSteps);
  });

  it('should have a jQuery $node object', function() {
    expect(blinkyDancer.$node).to.be.an.instanceof(jQuery);
  });

  it('should have a step function that makes its node blink', function() {
    sinon.spy(blinkyDancer.$node, 'toggleClass');
    blinkyDancer.step();
    expect(blinkyDancer.$node.toggleClass.called).to.be.true;
  });

  describe('dance', function() {
    it('should call step at least once per second', function() {
      sinon.spy(blinkyDancer, 'step');
      expect(blinkyDancer.step.callCount).to.be.equal(0);
      clock.tick(timeBetweenSteps); // ? it seems an extra tick is necessary...
      clock.tick(timeBetweenSteps);

      expect(blinkyDancer.step.callCount).to.be.equal(1);

      clock.tick(timeBetweenSteps);
      expect(blinkyDancer.step.callCount).to.be.equal(2);
    });
  });
});

describe('movementDancer', function() {
  var movementDancer;
  var timeBetweenSteps = 100;
  beforeEach(function() {
    clock = sinon.useFakeTimers();
    movementDancer = new MovementDancer(10, 20, timeBetweenSteps);
  });

  it('should have a jQuery $node object', function() {
    expect(movementDancer.$node).to.be.an.instanceof(jQuery);
  });

  it('should have a move function that makes the dancer move around', function() {

    movementDancer.move(timeBetweenSteps);
    expect(movementDancer.move).to.be.a.function;
  });

  describe('dance', function() {
    it('should call move() at least once in every ten seconds', function() {

      sinon.spy(movementDancer, 'move');
      expect(movementDancer.move.callCount).to.be.equal(0);
      clock.tick(timeBetweenSteps*100) ; // ? it seems an extra tick is necessary...
      clock.tick(timeBetweenSteps*100);
      console.log(movementDancer);

      expect(movementDancer.move.callCount).to.be.equal(1);

      clock.tick(timeBetweenSteps);
      expect(movementDancer.move.callCount).to.be.equal(2);
    });
  });
});
