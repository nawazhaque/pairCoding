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
    if ("aeiouAEIOU".indexOf(x) != -1) {
      return `${x} is a vowel.`;
    } else {
      return `${x} is not a vowel.`;
    }
  }
  console.log(vowelChecker("e"));

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

// Medium 4

class Car {
  constructor (make, model, year, mileage, color){
    this.make = make;
    this.model = model;
    this.year = year;
    this.mileage = mileage;
    this.color = color;   
  }
  drivetoWork() {
    this.mileage += 33;
    console.log(`old mileage: ${this.mileage - 33} | new mileage: ${this.mileage}`)
  }

  driveAroundTheWorld() {
    this.mileage += 24000;
    console.log(`old mileage: ${this.mileage - 24000} | new mileage: ${this.mileage}`)
  }

  runErrands() {
    this.mileage += 30;
    console.log(`old mileage: ${this.mileage - 30} | new mileage: ${this.mileage}`)
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