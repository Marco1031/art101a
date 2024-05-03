// index.js - experimenting with functions
// Author: Marco Bernal
// Date: May 2, 2024

// Constants
let userName = window.prompt("Hi what's yer name");
// Functions
// Takes user inputed name and converts the entire thing lowercase and sort alphabetically
function sortNames(userName){
  console.log("username=", userName);
  var nArray = userName.split('');
  for(let i = 0; i < userName.length; i++){
    let temp = nArray[i];
    temp = temp.toLowerCase();
    nArray[i] = temp;
    console.log(nArray[i]);
  } 
  console.log("nameArray=", nArray);
  var nArraySort = nArray.sort();
  console.log("nameArraySort=", nArraySort);
  var nSorted = nArraySort.join('');
  console.log("nameSorted=", nSorted);
  return nSorted;
}
// this is an example function and this comment tells what it doees and what parameters are passed to it.
function myFunction(param1, param2) {
    // some code here
    // return results;
  }

  // Takes the sorted name and creates an anagram
  function anagram(name){
    let characters = name.split('');
    for(let i = characters.length - 1; i>0; i--){
      const j = Math.floor(Math.random() * (i+1));
      [ characters[i], characters[j]] = [characters[j],characters[i]];
    }
    for(let i =0; i < characters.length;i++){
      if(i == 0 || i == temp+1){
        let charTemp = characters[i];
        charTemp = charTemp.toUpperCase();
        characters[i] = charTemp;
        console.log(characters[i]);
      }
    }
    return characters.join('');
  }
  
  function main() {
    console.log(userName);
    console.log("Main function started.");
    let sortedName = sortNames(userName);
    let anagramedName = anagram(sortedName);
    document.writeln("I fixed your name: ", sortedName, "</br>");
    document.writeln('<div class="anagram">Here\'s your name as an anagram:<br>'+ anagramedName + '</div>');
  }
  
  // let's get this party started
  main();