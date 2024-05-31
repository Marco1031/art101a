// index.js - purpose and description here
// Author: Your Name
// Date:

// Constants

// Functions
// This function generates numbers up to the specified limit and applies FizzBuzzBoom logic to each number
function fizzBuzzBoom() {
    let stop = parseInt($("#stop").val());
    let factors = [
        { factor: parseInt($("#factor1").val()), text: $("#text1").val() },
        { factor: parseInt($("#factor2").val()), text: $("#text2").val() },
        { factor: parseInt($("#factor3").val()), text: $("#text3").val() },
        { factor: parseInt($("#factor4").val()), text: $("#text4").val() }
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

        outputDiv.append("<p>" + output + "</p>");
    }
}

// Run the function when the button is clicked
$("#run").click(fizzBuzzBoom);

// Call the function initially to display default output
fizzBuzzBoom();

  function main() {
    console.log("Main function started.");
    // the code that makes everything happen
  }
  
  // let's get this party started
  main();
  


