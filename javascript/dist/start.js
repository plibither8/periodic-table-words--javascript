"use strict";
exports.__esModule = true;
var readline = require('readline');
var table = require('console.table');
var symbols = require('./symbols');
var check = require('./check');
var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
var symbolNameObject = symbols.symAndName;
var main = check.check;
function startFunction() {
    rl.question("\nPlease enter a string: ", function (userInput) {
        var sanitisedInput = userInput.replace(/ +/g, "");
        if (/^[a-zA-Z]+$/.test(sanitisedInput)) {
            var result = main(sanitisedInput);
            var wordFormed = result[1];
            if (result[0]) {
                var outputTable = [];
                console.log("\n" + userInput + " is possible.\n");
                for (var i = 0; i < wordFormed.length; i++) {
                    wordFormed[i] = wordFormed[i].charAt(0).toUpperCase() + wordFormed[i].slice(1);
                }
                console.log(wordFormed.join(" ") + "\n");
                for (var i = 0; i < wordFormed.length; i++) {
                    var tempObject = { "Symbol": wordFormed[i], "Element": symbolNameObject[wordFormed[i]] };
                    outputTable.push(tempObject);
                }
                console.table(outputTable);
            }
            else {
                console.log("\n" + userInput + " is not possible.");
            }
            rl.close();
        }
        else {
            console.log("String must be only alphabetic! Try again.");
            startFunction();
        }
    });
}
exports.start = startFunction;
