// index.js - experiment and use arrays and object
// Author: Marco Bernal
// Date: April 28, 2024

// Constants
myTransport = ["driving","walking", "bus", "rides from friends"];
myMainRide = {
  make: "Volvo",
  model: "c70 t5",
  color: "black",
  year: 2007,
  age: function(){
    return 2024 - this.year;
  }
}
// Functions
myTransport.unshift(myMainRide.year + " " + myMainRide.make + " " + myMainRide.model);
// this is an example function and this comment tells what it doees and what parameters are passed to it.
function myFunction(param1, param2) {
  // some code here
  // return results;
}

function main() {
  document.writeln("kinds of transportation that I use: " + myTransport.join(", "), "<br>" );
  //delete myMainRide.fullkit;
  document.writeln("My Main Ride: <pre>" + JSON.stringify(myMainRide, null, "\t", "</pre>)"));
  // the code that makes everything happen
}

// let's get this party started
main();
