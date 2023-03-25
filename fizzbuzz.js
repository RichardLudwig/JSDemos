function fizzbuzz() {
  let fizzbuzz = []; 
  let i = 1;
  while (i <= 101) {
    if (i % 5 == 0 && i % 3 == 0) {
      fizzbuzz.push("Fizz Buzz");
    }
    else if (i % 3 == 0) {
      fizzbuzz.push("Fizz");
    }
    else if (i % 5 == 0) {
      fizzbuzz.push("Buzz");
    } 
    
    if (!(i % 3 == 0 || i % 5 == 0 || i % 15 == 0)) {
      fizzbuzz.push(i);
    }
    i = i + 1;  
  }
  return fizzbuzz;
};

console.log(fizzbuzz());