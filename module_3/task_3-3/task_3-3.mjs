"use strict";
import { initPrintOut, printOut, newLine } from "../../common/script/utils.mjs";
initPrintOut(document.getElementById("txtOut"));

printOut("--- Part 1 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
function PrintDateToday(){
    const today = new Date();
    const dateOptions = { weekday:'long', year: 'numeric', month: 'long', day: 'numeric' };
    const DateNow = today.toLocaleString('no-NB', dateOptions);
    
    printOut(DateNow);


}
PrintDateToday()


printOut(newLine);

printOut("--- Part 2 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
function ReturnDateToday(){
    const today = new Date();
    const dateOptions = { weekday:'long', year: 'numeric', month: 'long', day: 'numeric' };
    const DateNow = today.toLocaleString('no-NB', dateOptions);
    
    return today;

}

function DaysTil2XKO(){
    const dateTodayObject = ReturnDateToday();
    const release = new Date("2025-05-14");
    const millisecondsLeft = release - dateTodayObject;
    const millisecondsInDay = 24 * 60 * 60 * 1000;
    const daysLeft = Math.floor(millisecondsLeft/millisecondsInDay);
    return daysLeft
    
    }
function printOutImg2xko(){
    const img2xko = document.createElement('img');
    img2xko.src = 'https://img.redbull.com/images/c_crop,w_1800,h_900,x_0,y_0/c_auto,w_1200,h_600/f_auto,q_auto/redbullcom/2024/6/12/hl5rky8qftuuodseayvf/2xko-ahri-and-ekko';
    img2xko.width = 600;
    document.getElementById('txtOut').appendChild(img2xko);
}

printOut("TODAYS DATE IS:");
PrintDateToday();
printOut(newLine);
printOutImg2xko();
printOut("ONLY " + DaysTil2XKO() + " DAYS LEFT! Before the fighting game set in Runtera 2XKO COMES OUT!!");
printOut(newLine);

printOut("--- Part 3 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
function CircleConverter(Radius){
    let Diameter = Radius * 2;
    let Circumference = Diameter * Math.PI;
    let Arial = Math.PI * Radius * Radius;
    printOut("Radius: " + Radius);
    printOut("Diameter: " + Diameter.toString());
    printOut("Circumference: " + Circumference.toString());
    printOut("Arial: " + Arial.toString());
}
CircleConverter(2);

printOut(newLine);

printOut("--- Part 4 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
function RectangleCal(Width, Height){
    let Arial = Width * Height;
    let Circumference = Width + Height;
    printOut("W: " + Width + " H: " + Height);
    printOut("Arial = " + Arial);
    printOut("Circumference = " + Circumference);
}
RectangleCal(4, 5);
printOut(newLine);

printOut("--- Part 5 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
function TemperatureConverter(Temperature, Type){
    let celsius, fahrenheit, kelvin;
    switch(Type.toLowerCase()){
        case 'celsius':
            celsius = Temperature;
            fahrenheit = Math.round(celsius * (9/5) + 32);
            kelvin = Math.round(celsius + 273.15);
            break;
        case 'kelvin':
            kelvin = Temperature;
            celsius = Math.round(kelvin - 273.15);
            fahrenheit = Math.round(celsius * (9/5) + 32);
            break;
        case 'fahrenheit':
            fahrenheit = Temperature;
            celsius = Math.round((fahrenheit - 32)*(5/9));
            kelvin = Math.round(celsius + 273.15);
            break;
    }
    printOut(Temperature + " " + Type + " is:")
    printOut(celsius + " Celsius");
    printOut(fahrenheit + " Fahrenheit");
    printOut(kelvin + " Kelvin");
    printOut(newLine);
}
TemperatureConverter(40, "Fahrenheit");
TemperatureConverter(20, "Celsius");

printOut(newLine);

printOut("--- Part 6 ----------------------------------------------------------------------------------------------");
function priceWithoutVAT(price, group){
    let vat;
    switch(group.toLowerCase()){
        case 'normal':
            vat = 25;
            break;
        case 'food':
            vat = 15;
            break;
        case 'hotel':
        case 'transport':
        case 'cinema':
            vat = 10;
            break;
        default:
            return "Unknown VAT group!";
    }
    const net = Math.round((100 * price)/(vat + 100));
    return(net);
}
printOut(priceWithoutVAT(100, "Normal").toString());
printOut(priceWithoutVAT(100, "Food").toString());
printOut(priceWithoutVAT(100, "hotel").toString());
printOut(priceWithoutVAT(100, "goblins").toString());

printOut(newLine);

printOut("--- Part 7 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
function CalculateSpeedDistanceTime(Speed, Distance, Time){
    let missingCount = [Speed, Distance, Time].filter(arg => arg === undefined || isNaN(arg)).length;

    if (missingCount > 1) {
        return NaN;
    }
    switch(Speed){
        case undefined:
            Speed = Distance/Time;
            return Speed;


        default:
            switch(Distance){
                case undefined:
                    Distance = Speed * Time;
                    return Distance;

                default:
                    switch(Time){
                        case undefined:
                            Time = Distance/Speed;
                            return Time;

                        default:
                            return NaN;
                    }
            }
    }
}
let speed, time, distance;
time = 100
distance= 40;
printOut(CalculateSpeedDistanceTime(speed, distance, time).toString())
printOut(newLine);

printOut("--- Part 8 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
function modifyString(text, maxSize, character, insertAfter) {
    if (text.length < maxSize) {
        let difference = maxSize - text.length;
        let newString = text;
        for (let i = 0; i < difference; i++) {
            if (insertAfter) {
                newString += character;
            } else {
                newString = character + newString;
            }
        }
        printOut(newString);
        return newString;

    }
}
modifyString("Hello World", 15, "*", true)
printOut(newLine);
 
printOut("--- Part 9 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
printOut("Replace this with you answer!");
printOut(newLine);

printOut("--- Part 10 ---------------------------------------------------------------------------------------------");
function factorial(n) {
    if (n === 0 || n === 1) {
        printOut("1");
        return;
    }
    let answer = 1; 
    let i = 1; 
    while (i <= n) {
        answer = answer * i; 
        i++;
    }

    printOut(answer.toString()); 
}


// Example usage
const number = 6;
factorial(number);

printOut(newLine);
