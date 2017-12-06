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

  it('should have a lineup function', function() {
    expect(blinkyDancer.lineup).to.be.a.function;
  });

  it('lineup function should align all dancers to one side', function() {
    blinkyDancer2 = new BlinkyDancer(45, 30, timeBetweenSteps);
    angryDancer = new AngryDancer(60, 35, timeBetweenSteps);
    movementDancer = new MovementDancer(15, 80, timeBetweenSteps);

    blinkyDancer.lineup();
    blinkyDancer2.lineup();
    angryDancer.lineup();
    movementDancer.lineup();
    clock.tick(timeBetweenSteps * 1000);
    expect(blinkyDancer.$node.css('left')).to.be.equal('100px');
    expect(blinkyDancer2.$node.css('left')).to.be.equal('100px');
    expect(angryDancer.$node.css('left')).to.be.equal('100px');
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
    it('should have a move() function that animates its css top and left', function() {
      sinon.spy(movementDancer.$node, 'animate');
      movementDancer.move();
      expect(movementDancer.$node.animate.called).to.be.true;
    });
  });
});

describe('AngryDancer', function() {
  var angryDancer;
  beforeEach(function() {
    angryDancer = new AngryDancer(10, 20);
  });

  it('should have a jQuery $node object', function() {
    expect(angryDancer.$node).to.be.an.instanceof(jQuery);
  });

  it('should have a launchIn function that makes the dancer jump into the screen', function() {
    angryDancer.launchIn();
    expect(angryDancer.launchIn).to.be.a.function;
  });
  //
  // it('should have a launchIn() function that animates its css top and left', function() {
  //   sinon.spy(angryDancer.$node, 'animate');
  //   expect(angryDancer.$node.animate.called).to.be.true;
  // });

});
