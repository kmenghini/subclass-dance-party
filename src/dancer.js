let Dancer = function (top, left, timeBetweenSteps) {
  this.heads = ['partyparrot.gif', 'lemon.png', 'cucco.gif', 'angrybird.gif'];
  this.$node = $('<span class="dancer"><img class="dancerhead"></span>');
  this.stepHandler;
  this.getRandomHead();
  this.step(timeBetweenSteps);
  this.setPosition(top, left);
};

Dancer.prototype.step = function(timeBetweenSteps) {
  // the basic dancer doesn't do anything interesting at all on each step,
  // it just schedules the next step
  this.stepHandler = setTimeout(this.step.bind(this, timeBetweenSteps), timeBetweenSteps);
};

Dancer.prototype.setPosition = function(top, left) {
  // Use css top and left properties to position our <span> tag
  // where it belongs on the page. See http://api.jquery.com/css/
  var styleSettings = {
    top: top,
    left: left
  };
  this.$node.css(styleSettings);
};

Dancer.prototype.getRandomHead = function() {
  let rand = Math.floor(Math.random() * (this.heads.length));
  this.head = './heads/' + this.heads[rand];
  this.$node.find('img').attr('src', this.head);
};

Dancer.prototype.nextHead = function() {
  var index = (this.heads.indexOf(this.head) + 1) % this.heads.length;
  this.head = './heads/' + this.heads[index];
  this.$node.find('img').attr('src', this.head);
};

Dancer.prototype.lineup = function(top) {
  var styleSettings = {
    top: top,
    left: '100px',
  };
  this.$node.animate(styleSettings);
};

Dancer.prototype.dance = function(top, left, index) {
  var styleSettings = {
    top: top,
    left: left
  };
  this.$node.animate(styleSettings);
  this.orbit(index);

}

Dancer.prototype.orbit = function(index) {
  if (index % 2 === 0) {
    this.$node.addClass('revOrbit');
  }
  else {
    this.$node.addClass('orbit');
  }
}

Dancer.prototype.stopAnimation = function() {
  this.$node.stop();
  $('.hide').removeClass('hide');
  clearTimeout(this.stepHandler);
  this.$node.removeClass('orbit');
  this.$node.removeClass('revOrbit');
}
