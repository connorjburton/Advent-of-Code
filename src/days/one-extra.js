let retriveLocalFile = require('../helpers/retrive-local-file');

class DayOneExtra {
	constructor(options) {	
		retriveLocalFile('.SANTASMOVES', function(response) {
			this.commands = this.parseCommands(response);
			this.run();
		}, this);
	}

	run() {
		let level = 0;
		let key = 0;
		for(let i = 0; i <= this.commands.length; i++) {
			key++;
			level += (this.commands[i] === '(') ? 1 : -1;
			if(level < 0) break;
		}
		
		console.log('Day One Extra: ' + key);
		return key;
	}

	parseCommands(config) {
		return config.split('');
	}
}

module.exports = DayOneExtra;

/**
 * Now, given the same instructions, find the position of the first character that causes him to enter the basement (floor -1). The first character in the instructions has position 1, the second character has position 2, and so on.
 * For example:
 * ) causes him to enter the basement at character position 1.
 * ()()) causes him to enter the basement at character position 5.
 * What is the position of the character that causes Santa to first enter the basement?
 */