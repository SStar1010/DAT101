"use strict";
import { initPrintOut, printOut, newLine } from "../../common/script/utils.mjs";
initPrintOut(document.getElementById("txtOut"));

printOut("--- Part 1 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
printOut(newLine)
for (let i = 1; i <= 10; i++) {
    document.getElementById("txtOut").innerHTML += i.toString() + ",";
}
printOut(newLine)
for (let i = 10; i >= 1; i--) {
    document.getElementById("txtOut").innerHTML += i.toString() + ",";
}
printOut(newLine);

printOut("--- Part 2 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
const NumberToGuess = Math.floor(Math.random() * 60) + 1;
let Guess2 = Math.floor(Math.random() * 60) + 1;
let i2 = 0;
while (Guess2 != NumberToGuess){
    Guess2 = Math.floor(Math.random() * 60) + 1;
    i2++;
}
printOut("It took this many tries: " + i2.toString());
printOut("To guess the number " + NumberToGuess.toString());
printOut(newLine);

printOut("--- Part 3 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
const NumberToGuess3 = Math.floor(Math.random() * 1000000) + 1;
let Guess3 = Math.floor(Math.random() * 1000000) + 1;
let i3 = 0;
const TidStart3 = Date.now();
while (Guess3 != NumberToGuess3){
    Guess3 = Math.floor(Math.random() * 1000000) + 1;
    i3++;
}
const TidSlutt3 = Date.now();
printOut("It took this many tries: " + i3.toString());
printOut("To guess the number " + NumberToGuess3.toString());
printOut((TidSlutt3 - TidStart3).toString() + "ms")
printOut(newLine);

printOut("--- Part 4 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
let divisorCount = 0;
let numberToCheck = 2; 
let foundPrimes = "";

while (numberToCheck <= 200) {
  divisorCount = 0; 
  for (let divisor = 2; divisor < numberToCheck; divisor++) {
    if ((numberToCheck % divisor) === 0) {
      divisorCount = divisorCount + 1;
    }
  }
  if (divisorCount === 0) {
    foundPrimes += numberToCheck.toString() + ",";
  }
  numberToCheck++; 
}
printOut(foundPrimes);
printOut(newLine);
printOut("--- Part 5 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/

let output5 = "";

for(let row = 1; row <= 7; row++){
    for (let i = 1; i <= 9; i++){
        output5 += " R" + row.toString() + "K" + i.toString();
    }
    output5 += "</br>";
}
printOut(output5);
printOut(newLine);

printOut("--- Part 6 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
let StudentGrades = "";
let grade = 0;
let allPoints = ""
let allPercents = ""

for(let i = 0; i < 5; i++){
    grade = Math.floor(Math.random()* 236) + 1;
    allPoints += grade.toString() + ", ";
    grade = grade/(236/100);
    allPercents += Math.floor(grade).toString() + "% ";
    if (grade < 40){
    StudentGrades += "F";
    }else if (grade < 52){
    StudentGrades += "E";
    }else if (grade < 64){
    StudentGrades += "D";
    }else if (grade < 76){
    StudentGrades += "C";
    }else if (grade < 88){
    StudentGrades += "B";
    }else{
    StudentGrades += "A";
    }
    StudentGrades += ", "
}
printOut("Points: " + allPoints);
printOut("Percents: " + allPercents);
printOut("Grades: " + StudentGrades);
printOut(newLine);

printOut("--- Part 7 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
let diceRoll = 0;
let Rolls = [];
let throws = 0;

while (true) {
    Rolls = [];
    throws++;
    for(let diceNo = 0; diceNo < 6; diceNo++ ){
        diceRoll = Math.floor(Math.random()*6) + 1;
        Rolls.push(diceRoll);
    }
    if (Rolls.sort((a, b) => a - b).join('') === '123456'){
        printOut(Rolls.toString());
        printOut("it took " + throws.toString() + " throws to get straight");
        break;
    }
}

printOut(newLine);

throws = 0;

while (true) {
    Rolls = [];
    throws++;
    for(let diceNo = 0; diceNo < 6; diceNo++ ){
        diceRoll = Math.floor(Math.random()*6) + 1;
        Rolls.push(diceRoll);
    }
    const counts = {};
    Rolls.forEach(die => {
        counts[die] = (counts[die] || 0) + 1;
    });
    if (Object.values(counts).every(count => count === 2)) {
        printOut(Rolls.toString())
        printOut("it took " + throws.toString() + "thows to get 3 pairs.");
        break;
    }
  }

printOut(newLine);

throws = 0;

while (true) {
    Rolls = [];
    throws++;
    for(let diceNo = 0; diceNo < 6; diceNo++ ){
        diceRoll = Math.floor(Math.random()*6) + 1;
        Rolls.push(diceRoll);
    }
    const counts = {};
    Rolls.forEach(die => {
        counts[die] = (counts[die] || 0) + 1;
    });
    if (Object.values(counts).some(count => count === 2) && Object.values(counts).some(count => count === 4)) {
        printOut(Rolls.toString());
        printOut("It took " + throws.toString() + " throws to get a tower.");
        break;
    }
}

printOut(newLine);

throws = 0;

while (true) {
    Rolls = [];
    throws++;
    for(let diceNo = 0; diceNo < 6; diceNo++ ){
        diceRoll = Math.floor(Math.random()*6) + 1;
        Rolls.push(diceRoll);
    }
    if (new Set(Rolls).size === 1) {
        printOut(Rolls.toString())
        printOut("It took " + throws.toString() + " throws to get a Yahtzee.");
        break;
    }
}
