declare const process: any;
declare const require: any;

const readline = require('readline');
const symbols = require('./symbols');
const check = require('./check');

let rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
const symbolNameObject = symbols.symAndName;
const main = check.check;

function startFunction(): void {

    rl.question("\nPlease enter a string: ", function (userInput) {

        let sanitisedInput: string = userInput.replace(/ +/g, "");

        if (/^[a-zA-Z]+$/.test(sanitisedInput)) {

            let result: [boolean, string[]] = main(sanitisedInput);
            let wordFormed: string[] = result[1];

            if (result[0]) {

                console.log("\n" + userInput + " is possible.\n");
                for (let i = 0; i < wordFormed.length; i++) {
                    wordFormed[i] = wordFormed[i].charAt(0).toUpperCase() + wordFormed[i].slice(1);
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
            console.log("String must be only alphabetic! Try again.");
            startFunction();
        }

    });

}

export const start = startFunction;