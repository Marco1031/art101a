// index.js - purpose and description here
// Author: Your Name
// Date:

// Constants

// Functions
// This function generates numbers up to the specified limit and applies FizzBuzzBoom logic to each number
$(document).ready(function() {
    function fizzBuzzBoom() {
        let stop = 200;  // Set your desired stopping point
        let factors = [
            { factor: 3, text: "Fizz!" },
            { factor: 5, text: "Buzz!" },
            { factor: 7, text: "Boom!" }
        ];

        let outputDiv = $("#output");
        outputDiv.empty(); // Clear previous output

        for (let num = 1; num <= stop; num++) {
            let output = '';
            factors.forEach(f => {
                if (num % f.factor === 0) {
                    output += f.text;
                }
            });

            if (output === '') {
                output = num;
            }

            outputDiv.append("<p>" + num + " - " + output + "</p>");
        }
    }

    // Run the function when the button is clicked
    $("#run").click(fizzBuzzBoom);

    // Call the function initially to display default output
    fizzBuzzBoom();
});

// this is an example function and this comment tells what it doees and what parameters are passed to it.
function myFunction(param1, param2) {
    // some code here
    // return results;
  }
  
  function main() {
    console.log("Main function started.");
    // the code that makes everything happen
  }
  
  // let's get this party started
  main();
  


