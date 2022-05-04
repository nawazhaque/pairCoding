//Easy(1)
function splitOddAndEven(numbers) {
    let odd = [1,3,5,7,9];
    let even = [0,2,4,6,8];
  
    for (let i = 0; i < numbers.length; i++) {
      if (numbers[i] % 2 === 0) {
        // number is even
        even.push(numbers[i]);
      } else {
        // number is not even (=odd)
        odd.push(numbers[i]);
      }
    }
  
    // create an object with the odd and even array in it
    const returnObject = {
      odd,
      even,
    };
  
    return returnObject;
  }

  console.log(splitOddAndEven([]));

  //Easy(2)

  function checkPrime(numbersP) {
      let newArray = [1,2,3,4,5,6,7,8,9];
      let primeNum = [2,3,5,7];

      for (let i = 0; i < numbersP.length; i++) {
          if (numbersP[i] === 1, 4, 6, 8, 9) {
          // number is not prime
        newArray.push(numbersP[i]);
      } else {
          //number is prime
          primeNum.push(numbersP[i]);
      }
      const returnObj = {
        newArray,
        primeNum,
    };
    return returnObj;
  }
}
  console.log(checkPrime([2,3]));

  //Medium(1)

  function vowelChecker(x) {
    // vowelChecker will grab the first letter 
    var firstChar = x.toLowerCase().charAt(0);

    // Then check if that first letter is a vowel.
    if (firstChar === "a" || firstChar === "e" || firstChar === "i" || firstChar === "o" || firstChar === "u") {
        // If so
        console.log('This is a vowel.');
    } else {
        // If not
        console.log('This is not a vowel.');
    }
}
vowelChecker('r');

//Medium(2)

function Compare(str1, str2){
  if (str1.length !== str2.length) {
     return false
  }

 return str1.toLowerCase().split("").sort().join("") === str2.toLowerCase().split("").sort().join("")
}

console.log(Compare("Boy hello", "Hello boy"));
console.log(Compare("Things are good", "Dogs eat ants")) ;

//Medium(3)

function gcd_two_numbers(x, y) {
  if ((typeof x !== 'number') || (typeof y !== 'number')) 
    return false;
  x = Math.abs(x);
  y = Math.abs(y);
  while(y) {
    var t = y;
    y = x % y;
    x = t;
  }
  return x;
}

console.log(gcd_two_numbers(28, 14));

class Car {
  constructor (make, model, year, mileage, color){
    this.make = make;
    this.model = model;
    this.year = year;
    this.mileage = mileage;
    this.color = color;   
  }
  drivetoWork() {
    console.log(`old mileage: ${bmw.mileage} | new mileage: ${bmw.mileage + 33}`)
  }

  driveAroundTheWorld() {
    console.log(`old mileage: ${bmw.mileage} | new mileage: ${bmw.mileage + 24000}`)
  }

  runErrands() {
    console.log(`old mileage: ${bmw.mileage} | new mileage: ${bmw.mileage + 30}`)
  }
}

var bmw = new Car ('BMW', 'M4', 2022, 1000, 'Green');

bmw.drivetoWork();
bmw.driveAroundTheWorld();
bmw.runErrands();

//Hard 

function checkbalance(str) {
  let par = 0;
  let curly = 0;
  let square = 0;

  for (let char of str) {
    switch (char) {
      case "(":
        par++;
        break;

      case ")":
        par--;
        break;
      case "{":
        curly++;
        break;

      case "}":
        curly--;
        break;
      case "[":
        square++;
        break;

      case "]":
        square--;
        break;
    }
  }
  return curly === 0 && par === 0 && square === 0;
}

console.log(checkbalance("(hello)"));