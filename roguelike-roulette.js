var fastGames = ['20XX','ISAAC','NECRODANCER','DEAD CELLS','DOWNWELL','GUNGEON','FLINTHOOK','NUCLEAR THRONE','RISK OF RAIN','ROGUE LEGACY','SPELUNKY','ZIGGURAT'];

var roulette = function() {
	var random = Math.random();
	var length = (arguments.length  + 1);
	var findex = Math.random() * (arguments.length  + 1);	
	var index = Math.floor(findex);
	console.log('random:		' + random);
	console.log('length:		' + length);
	console.log('float index:	' + findex);
	console.log('index:			' + index);
	return arguments[index];
}

console.log(roulette('20XX','ISAAC','NECRODANCER','DEAD CELLS','DOWNWELL','GUNGEON','FLINTHOOK','NUCLEAR THRONE'))