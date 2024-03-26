#! /usr/bin/env node
import inquirer from "inquirer";

console.log("\n\tWELCOME TO CODE WITH MINAHIL - CLI-NUMBER GUESSING GAME\n");


const randomNumber = Math.floor(Math.random() * 5 + 1);

const answer = await inquirer.prompt([
    {name: "userGuessedNumber",
type: "number",
message: "Enter your guess number(number limit 1 to 5):",}
]);

if(answer.userGuessedNumber === randomNumber ){
    console.log("Congratulations ! you guess a correct number.");

}else{
    console.log("sorry, You guess a wrong number.");
}