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
  
  // let's get this party started
  main();
  // This function generates numbers from 1 to 200 and applies FizzBuzzBoom logic to each number
function fizzBuzzBoom() {
    let oneLongString = ''; // Initialize an empty string to accumulate results

    // Loop through numbers from 1 to 200
    for (let num = 1; num <= 200; num++) {
        let output = ''; // Initialize an empty string for the current number's output

        // Check for multiples of 3, 5, and 7
        if (num % 3 === 0) {
            output += 'Fizz';
        }
        if (num % 5 === 0) {
            output += 'Buzz';
        }
        if (num % 7 === 0) {
            output += 'Boom';
        }

        // If the output string is empty, it means the number is not a multiple of 3, 5, or 7
        if (output === '') {
            output = num;
        }

        // Append the current result to the long string with a line break
        oneLongString += output + '<br>';
    }

    // Set the HTML content of the output div to the accumulated results
    $('#output').html(oneLongString);
}

// Call the function to execute FizzBuzzBoom logic and display results
fizzBuzzBoom();
