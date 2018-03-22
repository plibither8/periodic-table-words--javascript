declare const require: any;

const symbols = require('./symbols');
const sortedSymbols = symbols.sorted;

function checkFunction(str: string): [boolean, string[]] {

    str = str.toLowerCase();
    let strlen: number = str.length;
    let symlenArr: number[] = [];
    let wordFormed: string[] = [];
    let possible: boolean = false;

    if (str.indexOf("q") > -1 || str.indexOf("j") > -1) return ([false, []]);

    function check(position: number, symlen: number[], onlyTwo: boolean): any {
        // console.log(wordFormed)

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
                    position = position + 2;
                    check(position, symlen, false);
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
                                
                                // console.log(k, oneLetter, sortedSymbols[oneLetter][j], str.charAt(_position))
                                symlen.length = k;
                                wordFormed.length = k;
                                // console.log(symlen, wordFormed)
                                symlen.push(2);
                                wordFormed.push(oneLetter + sortedSymbols[oneLetter][j]);
                                // console.log(wordFormed);

                                if (_position + 1 < strlen) {
                                    _position = _position + 1;
                                    // console.log("reacher");
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

export const check = checkFunction;