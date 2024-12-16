import { initPrintOut, printOut, newLine } from "../common/script/utils.mjs";
initPrintOut(document.getElementById("txtOut"));
printOut("Test");
const x = [1, 2, 3];
function printX() {
    for (let index = 0 ;index < x.length; index++){
        const elementInX = x[index];
        printOut(elementInX.toString());
        printOut
    }
}
printX();
printOut("------------");
x.push(4, 5);
printX();