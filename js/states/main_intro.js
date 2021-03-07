function MainIntroState() {};

MainIntroState.prototype = {
  create: function() {
    // add main intro assets into the world
    this.tweenFadeState();
  },

  tweenFadeState: function() {
    this.game.add.tween({})
      .to({alpha: 1}, 2000)
      .onComplete.add(function() {
        this.game.state.start('main-menu');
      }, this);
  }
};