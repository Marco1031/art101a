// index.js - purpose and description here
// Author: Marco Bernal
// Date: may 19, 2024

// Constants

// Functions
// click listener

$("#submit").click(function(){
    const userName = $("#user-name").val();
    let sortedName = sortNames(userName);
    let anagramedName = anagram(sortedName);
    $("#output").html('<div class= "text"><p> Your name in alpabetical order: ' + sortedName + "</p></div>");
    $("#output").append('<div class= "text"><p> Here is a new name for you: ' + anagramedName + "</p></div>");
});

// takes user input and converts the entire thing to lowercase, then sorts alphabetically
function sortNames(userName){
    console.log("userName = ", userName);
    var nArray = userName.split('');
    for(let i = 0; i < userName.length; i++){
        let temp = nArray[i];
        temp = temp.toLowerCase();
        nArray[i] = temp;
        console.log(nArray[i]);
    }
    console.log("nameArray= ", nArray);
    var nArraySort = nArray.sort();
    console.log("nameArraySort =", nArraySort);
    var nSorted = nArraySort.join('');
    console.log("nameSorted =", nSorted);
    return nSorted;
} 
  //takes the sorted name and creates an anagram
  function anagram(name){
    let characters = name.split('');
    for(let i = characters.length - 1; i>0; i--){
        const j = Math.floor(Math.random() * (i+1));
        [characters[i], characters[j]] = [characters[j], characters[i]]; 
    }
    for(let i = 0; i < characters.length; i==){
        if(i == 0 || characters[i-1] == ''){
            let charTemp = characters[i];
            charTemp = charTemp.toUppercase();
            characters[i] = charTemp;
            console.log(characters[i]);
        }
    }
    return characters.join('');
  }

  function main() {
  
  }
  
  // let's get this party started
  main();