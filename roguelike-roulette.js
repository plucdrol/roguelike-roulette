var fastGames = ['20XX','ISAAC','NECRODANCER','DEAD CELLS','DOWNWELL','GUNGEON','FLINTHOOK','NUCLEAR THRONE','RISK OF RAIN','ROGUE LEGACY','SPELUNKY','ZIGGURAT'];

var roulette = function() {
	return arguments[Math.floor(Math.random() * (arguments.length  + 1))];
}
