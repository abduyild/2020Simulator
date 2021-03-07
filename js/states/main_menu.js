function MainMenuState() {}

var oneThirdHeight = windowy / 3;


MainMenuState.prototype = {
  create: function() {

    // initializing the mainMenuSplash again and animating it.

    var mainMenuSplash = game.add.sprite(centerx, oneThirdHeight, 'ballerlogo');
    mainMenuSplash.anchor.setTo(0.5,0.5);
    mainMenuSplash.scale.setTo(0.4,0.4);

    // assigning relative mainMenuSplash position to a variable for easy access

    var logoPositionX = mainMenuSplash.position.x;
    var logoPositionY = mainMenuSplash.position.y;


    // creating the menu options, credits to mddub

    var menuOptions = [
      {name: 'select_level', yOffset: 220},
    ];

    var menuSprites = {}; // to be filled with menu sprite objects

    menuOptions.forEach(
      function(option) {
        var sprite = game.add.sprite(logoPositionX, logoPositionY + option.yOffset, option.name);
        sprite.anchor.setTo(0.5, 0.5);
        sprite.scale.setTo(0.4);
        sprite.alpha = 0;
        sprite.inputEnabled = true;
        game.add.tween(sprite).to({alpha: 1}, 1000, Phaser.Easing.Quadratic.InOut, true);
        menuSprites[option.name] = sprite;
      });

    function fadeOutMenu(stateToStart) {
        this.game.state.start(stateToStart);
    }

    function selectLevel() {
		
	  this.game.state.start('level_round');
    }


    menuSprites.select_level.events.onInputDown.add(selectLevel, this);

  },


};