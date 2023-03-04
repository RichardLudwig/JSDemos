function modulusList(x) { // parameter x is modulus for list elements
  let modulusList = []; // declare empty list
  let newList = Array.from(Array(1000), (_, i) => i + 1); // generates list of 1000 numbers and assigns list value to newList variable

  for(let j = 0; j < newList.length; j++) { // loop through newList elements
    if (newList[j] % x == 0) { // if newList element mod x is 0
      modulusList.push(newList[j]); // assign element to modulusList
    }
  }

  return console.log(modulusList); // return console log output of modulusList with filtered elements from newList
}
let randomNumber = Math.floor((Math.random() * 100) + 1); // generate random number between 1 and 100
modulusList(randomNumber); // generate modulusList with arg randomNumber