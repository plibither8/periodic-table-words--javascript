declare const require: any;
declare const process: any;

const readline = require('readline');
let rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout
});

const symbolNameObject = { "Ac": "Actinium", "Ag": "Silver", "Al": "Aluminium", "Am": "Americium", "Ar": "Argon", "As": "Arsenic", "At": "Astatine", "Au": "Gold", "B": "Boron", "Ba": "Barium", "Be": "Beryllium", "Bh": "Bohrium", "Bi": "Bismuth", "Bk": "Berkelium", "Br": "Bromine", "C": "Carbon", "Ca": "Calcium", "Cd": "Cadmium", "Ce": "Cerium", "Cf": "Californium", "Cl": "Chlorine", "Cm": "Curium", "Cn": "Copernicium", "Co": "Cobalt", "Cr": "Chromium", "Cs": "Cesium", "Cu": "Copper", "Db": "Dubnium", "Ds": "Darmstadtium", "Dy": "Dysprosium", "Er": "Erbium", "Es": "Einsteinium", "Eu": "Europium", "F": "Fluorine", "Fe": "Iron", "Fl": "Flerovium", "Fm": "Fermium", "Fr": "Francium", "Ga": "Gallium", "Gd": "Gadolinium", "Ge": "Germanium", "H": "Hydrogen", "He": "Helium", "Hf": "Hafnium", "Hg": "Mercury", "Ho": "Holmium", "Hs": "Hassium", "I": "Iodine", "In": "Indium", "Ir": "Iridium", "K": "Potassium", "Kr": "Krypton", "La": "Lanthanum", "Li": "Lithium", "Lr": "Lawrencium", "Lu": "Lutetium", "Lv": "Livermorium", "Mc": "Moscovium", "Md": "Mendelevium", "Mg": "Magnesium", "Mn": "Manganese", "Mo": "Molybdenum", "Mt": "Meitnerium", "N": "Nitrogen", "Na": "Sodium", "Nb": "Niobium", "Nd": "Neodymium", "Ne": "Neon", "Nh": "Nihonium", "Ni": "Nickel", "No": "Nobelium", "Np": "Neptunium", "O": "Oxygen", "Og": "Oganesson", "Os": "Osmium", "P": "Phosphorus", "Pa": "Protactinium", "Pb": "Lead", "Pd": "Palladium", "Pm": "Promethium", "Po": "Polonium", "Pr": "Praseodymium", "Pt": "Platinum", "Pu": "Plutonium", "Ra": "Radium", "Rb": "Rubidium", "Re": "Rhenium", "Rf": "Rutherfordium", "Rg": "Roentgenium", "Rh": "Rhodium", "Rn": "Radon", "Ru": "Ruthenium", "S": "Sulfur", "Sb": "Antimony", "Sc": "Scandium", "Se": "Selenium", "Sg": "Seaborgium", "Si": "Silicon", "Sm": "Samarium", "Sn": "Tin", "Sr": "Strontium", "Ta": "Tantalum", "Tb": "Terbium", "Tc": "Technetium", "Te": "Tellurium", "Th": "Thorium", "Ti": "Titanium", "Tl": "Thallium", "Tm": "Thulium", "Ts": "Tennessine", "U": "Uranium", "V": "Vanadium", "W": "Tungsten", "Xe": "Xenon", "Y": "Yttrium", "Yb": "Ytterbium", "Zn": "Zinc", "Zr": "Zirconium" };

const sortedSymbols = {

	"a": ["c", "g", "l", "m", "r", "s", "t", "u"],
	"b": ["", "a", "e", "h", "i", "k", "r"],
	"c": ["", "a", "d", "e", "f", "l", "m", "n", "o", "r", "s", "u"],
	"d": ["b", "s", "y"],
	"e": ["r", "s", "u"],
	"f": ["", "e", "l", "m", "r"],
	"g": ["a", "d", "e"],
	"h": ["", "e", "f", "g", "o", "s"],
	"i": ["", "n", "r"],
	"k": ["", "r"],
	"l": ["a", "i", "r", "u", "v"],
	"m": ["c", "d", "g", "n", "o", "t"],
	"n": ["", "a", "b", "d", "e", "h", "i", "o", "p"],
	"o": ["", "g", "s"],
	"p": ["", "a", "b", "d", "m", "o", "r", "t", "u"],
	"r": ["a", "b", "e", "f", "g", "h", "n", "u"],
	"s": ["", "b", "c", "e", "g", "i", "m", "n", "r"],
	"t": ["a", "b", "c", "e", "h", "i", "l", "m", "s"],
	"u": [""],
	"v": [""],
	"w": [""],
	"x": ["e"],
	"y": ["", "b"],
	"z": ["n", "r"]

};

function main(str: string): [boolean, string[]] {
	
	str = str.toLowerCase();	
	let strlen: number = str.length;
	let symlenArr: number[] = [];
	let wordFormed: string[] = [];
	let possible: boolean = false;
	

	if (str.indexOf("q") > -1 || str.indexOf("j") > -1) return ([false, []]);

	function check(position: number, symlen: number[], onlyTwo: boolean): any {
		
		let charAt: string = str.charAt(position);
		
		for (let i: number = 0; i < sortedSymbols[charAt].length; i++) {

			if ((sortedSymbols[charAt][i] === "" && !onlyTwo) || sortedSymbols[charAt][i] === str.charAt(position + 1)) {
				
				wordFormed.push(charAt + sortedSymbols[charAt][i]);
				
				if (sortedSymbols[charAt][i] === "" && !onlyTwo) {
					symlen.push(1);
					if (position === strlen - 1) {
						possible = true;
						return;
					}
					check(++position, symlen, false);
				}
				
				else if (sortedSymbols[charAt][i] === str.charAt(position + 1)) {
					symlen.push(2);
					if (position === strlen - 2) {
						possible = true;
						return;
					}
					if (position + 2 < strlen) {
						position = position + 2;
						check(position, symlen, false);
					}
				}

				break;

			}

			let origwordFormed: string[] = wordFormed.slice();

			if (i === sortedSymbols[charAt].length - 1 && !onlyTwo && !possible) {
	
				if ((position - 1 >= 0) && symlen[symlen.length - 1] === 1) {
					symlen.pop();
					wordFormed.pop();
					check(position - 1, symlen, true);
				}

				for (let k: number = symlen.length - 1; k >= 0 && !possible; k--) {

					wordFormed = origwordFormed.slice();

					if (symlen[k] === 1) {

						let oneLetter: string = wordFormed[k];
						let _position: number = 1;
						for (let j: number = 0; j < k; j++) _position += symlen[j];
						
						for (let j: number = 1; j < sortedSymbols[oneLetter].length; j++) {

							if (sortedSymbols[oneLetter][j] === str.charAt(_position) && !possible) {
								
								symlen.length = k;
								wordFormed.length = k;
								symlen.push(2);
								wordFormed.push(oneLetter + sortedSymbols[oneLetter][j]);
								
								if (_position + 1 < strlen) {
									_position = _position + 1;
									check(_position, symlen, false);
								}

							}
						}
					}

				}

			}

		}

	}

	check(0, symlenArr, false);

	return [possible, wordFormed];

}

function start(): void {

	rl.question("\nPlease enter a string: ", function (userInput) {

		let sanitisedInput: string = userInput.replace(/ +/g, "");

		if (/^[a-zA-Z]+$/.test(sanitisedInput)) {

			let result: [boolean, string[]] = main(sanitisedInput);
			let wordFormed: string[] = result[1];

			if (result[0]) {

				console.log("\n" + userInput + " is possible.\n");
				for (let i = 0; i < wordFormed.length; i++) {
					wordFormed[i] =	wordFormed[i].charAt(0).toUpperCase() + wordFormed[i].slice(1);
				}
				console.log(wordFormed.join(" ") + "\n");
				for (let i = 0; i < wordFormed.length; i++) {
					console.log(wordFormed[i] + ": " + symbolNameObject[wordFormed[i]]);
				}

			} else {
				console.log("\n" + userInput + " is not possible.");
			}
			rl.close();

		} else {
			console.log("String must be only alphabetic without any spaces! Try again.");
			start();
		}

	});

}

start();