const symbolNameObject = { "Ac": "Actinium", "Ag": "Silver", "Al": "Aluminium", "Am": "Americium", "Ar": "Argon", "As": "Arsenic", "At": "Astatine", "Au": "Gold", "B": "Boron", "Ba": "Barium", "Be": "Beryllium", "Bh": "Bohrium", "Bi": "Bismuth", "Bk": "Berkelium", "Br": "Bromine", "C": "Carbon", "Ca": "Calcium", "Cd": "Cadmium", "Ce": "Cerium", "Cf": "Californium", "Cl": "Chlorine", "Cm": "Curium", "Cn": "Copernicium", "Co": "Cobalt", "Cr": "Chromium", "Cs": "Cesium", "Cu": "Copper", "Db": "Dubnium", "Ds": "Darmstadtium", "Dy": "Dysprosium", "Er": "Erbium", "Es": "Einsteinium", "Eu": "Europium", "F": "Fluorine", "Fe": "Iron", "Fl": "Flerovium", "Fm": "Fermium", "Fr": "Francium", "Ga": "Gallium", "Gd": "Gadolinium", "Ge": "Germanium", "H": "Hydrogen", "He": "Helium", "Hf": "Hafnium", "Hg": "Mercury", "Ho": "Holmium", "Hs": "Hassium", "I": "Iodine", "In": "Indium", "Ir": "Iridium", "K": "Potassium", "Kr": "Krypton", "La": "Lanthanum", "Li": "Lithium", "Lr": "Lawrencium", "Lu": "Lutetium", "Lv": "Livermorium", "Mc": "Moscovium", "Md": "Mendelevium", "Mg": "Magnesium", "Mn": "Manganese", "Mo": "Molybdenum", "Mt": "Meitnerium", "N": "Nitrogen", "Na": "Sodium", "Nb": "Niobium", "Nd": "Neodymium", "Ne": "Neon", "Nh": "Nihonium", "Ni": "Nickel", "No": "Nobelium", "Np": "Neptunium", "O": "Oxygen", "Og": "Oganesson", "Os": "Osmium", "P": "Phosphorus", "Pa": "Protactinium", "Pb": "Lead", "Pd": "Palladium", "Pm": "Promethium", "Po": "Polonium", "Pr": "Praseodymium", "Pt": "Platinum", "Pu": "Plutonium", "Ra": "Radium", "Rb": "Rubidium", "Re": "Rhenium", "Rf": "Rutherfordium", "Rg": "Roentgenium", "Rh": "Rhodium", "Rn": "Radon", "Ru": "Ruthenium", "S": "Sulfur", "Sb": "Antimony", "Sc": "Scandium", "Se": "Selenium", "Sg": "Seaborgium", "Si": "Silicon", "Sm": "Samarium", "Sn": "Tin", "Sr": "Strontium", "Ta": "Tantalum", "Tb": "Terbium", "Tc": "Technetium", "Te": "Tellurium", "Th": "Thorium", "Ti": "Titanium", "Tl": "Thallium", "Tm": "Thulium", "Ts": "Tennessine", "U": "Uranium", "V": "Vanadium", "W": "Tungsten", "Xe": "Xenon", "Y": "Yttrium", "Yb": "Ytterbium", "Zn": "Zinc", "Zr": "Zirconium" };

const sortedSymbolsObject = {

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

export const sorted = sortedSymbolsObject;
export const symAndName = symbolNameObject;