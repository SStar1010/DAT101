"use strict";
import { initPrintOut, printOut, newLine } from "../../common/script/utils.mjs";
initPrintOut(document.getElementById("txtOut"));

printOut("--- Part 1 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
const ans1a = 2 + 3 * 2 - 4 * 6
const ans1b = 2 + 3 * ((2 - 4) * 6);
printOut("2 + 3 * 2 - 4 * 6 =");
printOut(ans1a.toString());
printOut("2 + 3 * ((2 - 4) * 6 =");
printOut(ans1b.toString());
printOut(newLine);

printOut("--- Part 2 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
const m = 25;
const mTcm = m * 100;
const cm = 34 + mTcm;
let inc = cm / 2.54;
inc = inc.toFixed(2);
printOut(inc.toString());
printOut(newLine);

printOut("--- Part 3 ----------------------------------------------------------------------------------------------");
/* Put your code below here! d*/
const dTh = 3 * 24;
const hTm = (12 + dTh) * 60;
const sTm = 45 / 60;
const min3 = 14 + hTm + sTm;

printOut(min3.toString());
printOut(newLine);

printOut("--- Part 4 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
const min4a = 6322.52;

let d4 = (min4a / 60)/ 24 ;
const d4l = d4 - Math.floor(d4);
d4 = Math.floor(d4);

let h4 = d4l * 24;
const h4l = h4 - Math.floor(h4);
h4 = Math.floor(h4);

let min4b = h4l * 60;
const min4l = min4b - Math.floor(min4b);
min4b = Math.floor(min4b);

let sec4 = (min4l * 60).toFixed(2);

printOut(min4a.toString() + " Minutter er tilsammen:")
printOut(d4.toString() + " Dager");
printOut(h4.toString() + " Timer");
printOut(min4b.toString() + " Minutter");
printOut(sec4.toString() + " sekunder");
printOut(newLine);

printOut("--- Part 5 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
const dollar = 54;
const kr = (dollar * (76 / 8.6)).toFixed();

printOut(dollar.toString() + " Dollar er");
printOut(kr.toString()+" kr");

printOut(newLine);

printOut("--- Part 6 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
const text6 = "There is much between heaven and earth that we do not understand.";
const posnr = 19;
const txtLength6 = text6.length;
const nrKar6 = text6.charAt(posnr);
const kar35t8 = text6.substr(34, 8);
const indexEarth = text6.indexOf("earth");

printOut("Text: " + text6 + newLine + newLine)
printOut(txtLength6.toString() + " er mengden karakterer");
printOut(nrKar6 +  " er karakter nr " + posnr.toString()); 
printOut("karakter 35 og 8 karakterer fremover: " + kar35t8);
printOut("index til \"earth\": " + indexEarth.toString());

printOut(newLine);

printOut("--- Part 7 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
printOut(
    "1. " + (5>3).toString() + newLine + newLine +
    "2. " + (7>=7).toString() + newLine + 
    "3. " + ("a">"b").toString() + newLine + 
    "4. " + ("1"<"a").toString() + newLine + 
    "5. " + ("2500"<"abcd").toString() + newLine + 
    "6. " + ("arne" != "thomas").toString() + newLine + 
    "7. " + ((2 == 5) == true).toString() + newLine + 
    "8. " + (("abcd" > "bcd") == false).toString()
);

printOut(newLine);

printOut("--- Part 8 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
const no1 = Number("254");
const no2 = Number("57.23");
const no3 = parseInt("25 kroner");

printOut(no1 + newLine + newLine + no2 + newLine + no3);

printOut(newLine);

printOut("--- Part 9 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
let r = Math.floor(Math.random() * 360) + 1;
printOut(r.toString());
printOut(newLine);

/* Task 10*/
printOut("--- Part 10 ---------------------------------------------------------------------------------------------");
/* Put your code below here!*/
const d10 = 131;
const w10 = Math.floor(d10 / 7);
const d10l = d10 % 7;

printOut(
    d10 + " dager er:" + newLine + newLine +
    w10 + " uker og " + d10l + " dager"
);
printOut(newLine);