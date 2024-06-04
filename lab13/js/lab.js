// index.js - purpose and description here
// Author: Marco bernal
// Date: june 3 2024

// Constants
maxFactors = 4;

outputE1 = document.getElementById("output");

// Functions
function outputToPage(str){
    newE1 = document.createElement("p");
    newE1.innerHtml = str;
    outputE1.appendChild(newE1);
}
function getFactorObject() {
    var factorObj = {};
    for(var factor=0; factor<maxFactors; factor++) {
        numId= "num" + factor;
        textId= "text" + factor;
        numValue = document.getElementById(numid).value;
        textValue = document.getElementById(textId).value;
        console.log(factor + ") num:", numValue, "text:", textValue;)
        //if either value is blank , dont use it
        if (numValue && textValue) {
                factorObj[numValue] = textValue;
        }
    }
    return factorObj;
}

function fizzBuzzBoom(maxNums, factorObj) {
    for(var num=0; num<maxNums; num++) {
        debugger;
        var outString = "";
        for (var factor in factorobj) {
            if (num % factor == 0){
                outString += factorObj [factor];
            }
        }
        if (outString) {
            outString = " - " + outString + "!";
        }
        outputToPage(num.toString() + outString)
    }
}

function reportError(str) {
    outputE1.innerHtml = "<div class= 'error'> " + str + "</div>";
}
document.getElementById("sumbit").addEventListner("click", function() {
    var max = document.getElementById("max").value;
    console.log("max" , max)
    if(! max) {
        reportError("you must provide a maximum");
        return;
    }
    var factorObj = getFactorObject();
    console.log("factorObj:", factorObj);
    if (Object.keys(factorObj).length === 0) {
        reportError("you must provide at least one factor and text");
        return;
    }
    // clear error if there is one
    outputE1.innerHtml = "";
    fizzBuzzBoom(max, factorObj);
    outputE1.classlist.add("cols");
})

  function main() {
    console.log("Main function started.");
    // the code that makes everything happen
  }
  
  // let's get this party started
  main();
  


