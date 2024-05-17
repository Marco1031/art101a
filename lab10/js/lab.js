// index.js - purpose and description here
// Author: Your Name
// Date:

// Constants

// Functions

// this is an example function and this comment tells what it doees and what parameters are passed to it.
function myFunction(param1, param2) {
    // some code here
    // return results;
  }
  
  function main() {
    console.log("Main function started.");
    // the code that makes everything happen
  }
  function generateRandomText() {
    const text = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat ";
    const min = 3;
    const max = 100;
    const randLen = Math.floor(Math.random() * (max - min + 1)) + min;
    // get random starting index to slice lorem ipsum text
    const randStart = Math.floor(Math.random() * (text.length - randLen + 1));
    // generate the random lorem ipsum like text
    return text.slice(randStart, randStart + randLen);
  }
  //click listner for button
  $("#make-convo").click(function() {
    console.log("click");
    const newText = generateRandomText();
    console.log(swap);
    if(swap == true){
        $("#output").append('<div class="text"><p>' + newText + '</p></div>');
        swap = false;
    }
    else{
        $("#output").append('<div class="text div-right" id="outgoing"><p>' + newText + '</p></div>');
        swap = true;
    }
  });
  // let's get this party started
  main();
