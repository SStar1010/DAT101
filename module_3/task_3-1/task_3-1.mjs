"use strict";
import { initPrintOut, printOut, newLine } from "../../common/script/utils.mjs";
initPrintOut(document.getElementById("txtOut"));

printOut("--- Part 1, 2, 3 ----------------------------------------------------------------------------------------");
/* Put your code below here!*/
printOut("Task 1, 2 and 3");
let wakeUpTime = 8 ;
if (wakeUpTime == 7) {
  printOut("I can take the bus to school.");
} else if(wakeUpTime == 8){
  printOut("I can take train to school.")
}else{
  printOut("I have to use car to school.");
}
printOut(newLine);

printOut("--- Part 4, 5 --------------------------------------------------------------------------------------------");
/* Put your code below here!*/
let part4Int = -3;
if (part4Int < 0){
  printOut("Negative");
} else if(part4Int > 0){
  printOut("Positive");
} else if(part4Int == 0){
  printOut("Zero");
}

printOut(newLine);

printOut("--- Part 6 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
const imgSize = Math.floor(Math.random() * 8) + 1;
printOut("Image size: " + imgSize.toString());
if(imgSize >= 4){
  printOut("Thank you!");
}else {
  printOut("Your image is to small");
}
printOut(newLine);

printOut("--- Part 7 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
printOut("Image size: " + imgSize.toString());
if(imgSize < 4){
  printOut("Your image is to small");
}else if(imgSize >= 6){
  printOut("Your image is too big");
}else {
  printOut("Thank you!");
}

printOut(newLine);

printOut("--- Part 8 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
const monthList =["January", "February", "March", "April", "May",
  "Jun", "July", "August", "September", "October", "November", "December"];
const noOfMonth = monthList.length;
const monthName = monthList[Math.floor(Math.random() * noOfMonth)];
printOut(monthName.toString())
if(monthName.includes("r")){
  printOut("You must take vitamin D!");
}else{
  printOut("You do not need to take vitamin D");
}
printOut(newLine);

printOut("--- Part 9 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
var daysInMonth = 0;
if(monthName == "January"){
  daysInMonth = 31;
}else if(monthName == "February"){
  daysInMonth = 28;
}else if(monthName == "March"){
  daysInMonth = 31;
}else if(monthName == "April"){
  daysInMonth = 30;
}else if(monthName == "May"){
  daysInMonth = 31;
}else if(monthName == "Jun"){
  daysInMonth = 30;
}else if(monthName == "July"){
  daysInMonth = 31;
}else if(monthName == "August"){
  daysInMonth = 31;
}else if(monthName == "September"){
  daysInMonth = 30;
}else if(monthName == "October"){
  daysInMonth = 31;
}else if(monthName == "November"){
  daysInMonth = 30;
}else if(monthName == "December"){
  daysInMonth = 31;
}
if(daysInMonth > 0){
  printOut("Number of days in " + monthName + " is: " + daysInMonth.toString());
}else{
  printOut("No Data");
}
printOut(newLine);

/* Task 10*/
printOut("--- Part 10 ---------------------------------------------------------------------------------------------");
/* Put your code below here!*/

if(monthName == "March" || monthName == "May"){
  printOut("Gallery closed");
}else if(monthName == "April"){
  printOut("Open next door");
}else{
  printOut("Gallery open");
}

printOut(newLine);
