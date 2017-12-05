let AngryDancer = function(top, left, timeBetweenSteps) {
  Dancer.apply(this, arguments);
  this.launchIn();
  // this.hopAround();
};

AngryDancer.prototype = Object.create(Dancer.prototype);
AngryDancer.prototype.constructor = AngryDancer;

AngryDancer.prototype.move = function(time) {
  var x = Math.floor(Math.random() * $(window).width());
  var y = Math.floor(Math.random() * $(window).height());
  var styleSettings = {
    'top': y,
    'left': x
  };
  this.$node.animate(styleSettings, time, 'linear', this.move.bind(this, time));
};

AngryDancer.prototype.launchIn = function() {
  var yMax = $(window).height();
  var xMax = $(window).width() - 100;
  var startX = Math.floor(Math.random() * -100);
  // var staryY = Math.floor(Math.random() * (yMax))
  var startY = yMax - Math.floor(Math.random() * 300);
  var ang = Math.floor(Math.random() * 35) + 35;
  var endY = yMax -200 - Math.floor(Math.random() * 100); 
  var endX = Math.floor(Math.random() * xMax);
  this.bezier(startX, startY, endX, endY, ang);
};

AngryDancer.prototype.hopAround = function() {
  var hops = Math.floor(Math.random() * 6);
  for (var i = 0; i < hops; i++) {
    console.log(this.$node);
    var coords = this.$node.position();
    var moveX = Math.floor(Math.random() * 20) * Math.floor(((Math.random() * 1.5) -1));
    var ang = Math.floor(Math.random() * 60) + 30;
    var len = Math.random();
    this.bezier(coords.left, coords.top, coords.left + moveX, coords.top, ang, len);
  }
  var wait = Math.floor(Math.random() * 2000) + 1500;
  setTimeout(this.hopAround, wait);
};

AngryDancer.prototype.step = function() {
  //override default stepping behavior of Dancer
  return;
};

AngryDancer.prototype.bezier = function (startX, startY, endX, endY, ang, len) {
  var length = len || 0.5;
  var bezier_params = {
    start: {
      x: startX,
      y: startY,
      angle: -1 * ang
    },
    end: {
      x: endX,
      y: endY,
      angle: ang,
      length: len
    }
  }
  this.$node.animate({ path: new $.path.bezier(bezier_params) });
};


window.AngryDancer = AngryDancer;
