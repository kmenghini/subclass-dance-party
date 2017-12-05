let Dancer = function (top, left, timeBetweenSteps) {
  this.heads = ['partyparrot.gif', 'lemon.png', 'cucco.gif', 'angrybird.gif'];
  this.$node = $('<span class="dancer"><img class="dancerhead"></span>');
  this.getRandomHead();
  this.step(timeBetweenSteps);
  this.setPosition(top, left);
};

Dancer.prototype.step = function(timeBetweenSteps) {
  // the basic dancer doesn't do anything interesting at all on each step,
  // it just schedules the next step
  setTimeout(this.step.bind(this, timeBetweenSteps), timeBetweenSteps);
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

Dancer.prototype.dance = function(top, left) {
  var styleSettings = {
    top: top,
    left: left
  };
  this.$node.animate(styleSettings);
  this.orbit();

}

Dancer.prototype.orbit = function() {
  var orbitCSS = {
    '@-webkit-keyframes myOrbit': {
        'from': { '-webkit-transform': 'rotate(0deg) translateX(150px) rotate(0deg)' },
        'to':   { '-webkit-transform': 'rotate(360deg) translateX(150px) rotate(-360deg)' }
    },
    '@-moz-keyframes myOrbit' {
        'from': { '-moz-transform': 'rotate(0deg) translateX(150px) rotate(0deg)' },
        'to':   { '-moz-transform': 'rotate(360deg) translateX(150px) rotate(-360deg)' }
    },
    '@-o-keyframes myOrbit': {
        'from': { '-o-transform': 'rotate(0deg) translateX(150px) rotate(0deg)' },
        'to':   { '-o-transform': 'rotate(360deg) translateX(150px) rotate(-360deg)' }
    },
    '@keyframes myOrbit': {
        'from': { 'transform': 'rotate(0deg) translateX(150px) rotate(0deg)' },
        'to':   { 'transform': 'rotate(360deg) translateX(150px) rotate(-360deg)' }
    }
  }
  this.$node.css(orbitCSS);
}
