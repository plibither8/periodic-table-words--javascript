symbolNameObject = { "Ac": "Actinium", "Ag": "Silver", "Al": "Aluminium", "Am": "Americium", "Ar": "Argon", "As": "Arsenic", "At": "Astatine", "Au": "Gold", "B": "Boron", "Ba": "Barium", "Be": "Beryllium", "Bh": "Bohrium", "Bi": "Bismuth", "Bk": "Berkelium", "Br": "Bromine", "C": "Carbon", "Ca": "Calcium", "Cd": "Cadmium", "Ce": "Cerium", "Cf": "Californium", "Cl": "Chlorine", "Cm": "Curium", "Cn": "Copernicium", "Co": "Cobalt", "Cr": "Chromium", "Cs": "Cesium", "Cu": "Copper", "Db": "Dubnium", "Ds": "Darmstadtium", "Dy": "Dysprosium", "Er": "Erbium", "Es": "Einsteinium", "Eu": "Europium", "F": "Fluorine", "Fe": "Iron", "Fl": "Flerovium", "Fm": "Fermium", "Fr": "Francium", "Ga": "Gallium", "Gd": "Gadolinium", "Ge": "Germanium", "H": "Hydrogen", "He": "Helium", "Hf": "Hafnium", "Hg": "Mercury", "Ho": "Holmium", "Hs": "Hassium", "I": "Iodine", "In": "Indium", "Ir": "Iridium", "K": "Potassium", "Kr": "Krypton", "La": "Lanthanum", "Li": "Lithium", "Lr": "Lawrencium", "Lu": "Lutetium", "Lv": "Livermorium", "Mc": "Moscovium", "Md": "Mendelevium", "Mg": "Magnesium", "Mn": "Manganese", "Mo": "Molybdenum", "Mt": "Meitnerium", "N": "Nitrogen", "Na": "Sodium", "Nb": "Niobium", "Nd": "Neodymium", "Ne": "Neon", "Nh": "Nihonium", "Ni": "Nickel", "No": "Nobelium", "Np": "Neptunium", "O": "Oxygen", "Og": "Oganesson", "Os": "Osmium", "P": "Phosphorus", "Pa": "Protactinium", "Pb": "Lead", "Pd": "Palladium", "Pm": "Promethium", "Po": "Polonium", "Pr": "Praseodymium", "Pt": "Platinum", "Pu": "Plutonium", "Ra": "Radium", "Rb": "Rubidium", "Re": "Rhenium", "Rf": "Rutherfordium", "Rg": "Roentgenium", "Rh": "Rhodium", "Rn": "Radon", "Ru": "Ruthenium", "S": "Sulfur", "Sb": "Antimony", "Sc": "Scandium", "Se": "Selenium", "Sg": "Seaborgium", "Si": "Silicon", "Sm": "Samarium", "Sn": "Tin", "Sr": "Strontium", "Ta": "Tantalum", "Tb": "Terbium", "Tc": "Technetium", "Te": "Tellurium", "Th": "Thorium", "Ti": "Titanium", "Tl": "Thallium", "Tm": "Thulium", "Ts": "Tennessine", "U": "Uranium", "V": "Vanadium", "W": "Tungsten", "Xe": "Xenon", "Y": "Yttrium", "Yb": "Ytterbium", "Zn": "Zinc", "Zr": "Zirconium" };

sortedSymbols = {

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

def main(str):

    str = str.lower()
    strlen  = len(str)
    symlen = []
    wordFormed = []
    possible = False

    if ('q' in str or 'j' in str):
        return [False, []]

    def check(position, symlen, onlyTwo):

        charAt = str[position]

        for i in range(len(sortedSymbols[charAt])):

            if ((sortedSymbols[charAt][i] == "" and not onlyTwo) or sortedSymbols[charAt][i] == str[position + 1]):

                wordFormed.append(charAt + sortedSymbols[charAt][i])

                if (sortedSymbols[charAt][i] == "" and not onlyTwo):
                    symlen.append(1)
                    if (position == strlen - 1):
                        possible = True
                        return;
                    position += 1
                    check(position, symlen, False)
            
            elif (sortedSymbols[charAt][i] == str[position + 1]):
                symlen.append(2)
                if (position == strlen - 2):
                    possible = True;
                    return
                if (position + 2 < strlen):
                    position += 2
                    check(position, symlen, False)
            
            break
        
        origwordFormed = wordFormed[:]

        if (i == len(sortedSymbols[charAt]) - 1 and not onlyTwo and not possible):

            if (position - 1 >= 0 and symlen[len(symlen) - 1] == 1):
                symlen.pop()
                wordFormed.pop()
                check(position - 1, symlen, True)
            
            k = len(symlen) - 1
            while (k >= 0 and not possible):

                wordFormed = origwordFormed[:]

                if (symlen[k] == 1):

                    oneLetter = wordFormed[k]
                    _position = 1
                    for j in range(k):
                        _position += symlen[j]
                    
                    for j in range(len(sortedSymbols[oneLetter])):

                        if (sortedSymbols[oneLetter][j] == str[_position and not possible]):

                            symlen[:k]
                            wordFormed[:k]
                            symlen.append(2)
                            wordFormed.append(oneLetter + sortedSymbols[oneLetter][j])

                            if (_position + 1 < strlen):
                                _position = _position + 1
                                check(_position, symlen, False)
                
                k -= 1

    check(0, symlen, False)

    return [possible, wordFormed]

def start():

    userInput = raw_input("\nPlease enter a string: ")
    sanitisedInput = userInput.replace(" ", "")

    if(sanitisedInput.isalpha()):

        result = main(sanitisedInput)
        wordFormed = result[1]

        if(result[0]):

            print("\n" + userInput + " is possible.\n")
            for i in range(len(wordFormed)):
                wordFormed[i] = wordFormed[i].title()
            print(" ".join(wordFormed))
            for i in range(len(wordFormed)):
                print(wordFormed[i] + ": " + symbolNameObject[wordFormed[i]])
    
        else:
            print("\n" + userInput + " is not possible.")
            exit()
    
    else:
        print("String must be only alphabetic! Try again.")
        start()

start()
