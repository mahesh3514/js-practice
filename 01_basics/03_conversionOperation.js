let score= "33"
// let score= "33abcd"      //If Trying to convert in number (value is NAN)
// let score= "Mahesh"      //If Trying to convert in number (value is NAN)
// let score= null      //If Trying to convert in number (value is 0)
// let score= undefined      //If Trying to convert in number (value is NAN)
// let score= true      //If Trying to convert in number (value is 1)
// let score= false      //If Trying to convert in number (value is 0)

//-------------firstly validate data type of score using 2 methods-------
console.log(typeof score)
console.log((typeof score));

//----------Conversion Operation (value to Number)------------------

let valueInNumber= Number(score)
console.log(typeof valueInNumber)
console.log(valueInNumber)


//-------------Conversion Operation (value to boolean)------------------

let isLoggedIn= 1  //If Trying to convert in boolean (value is true)
// let isLoggedIn= 0  //If Trying to convert in boolean (value is false)
// let isLoggedIn= ""  //If Trying to convert in boolean (value is False)
// let isLoggedIn= "Mahesh"  //If Trying to convert in boolean (value is true)

let booleanIsLoggedIn= Boolean(isLoggedIn)
console.log(booleanIsLoggedIn);


//-------------Conversion Operation (value to String)------------------

let someNumber= 33  //If Trying to convert in String (value is 33- but its typeOf string)

let stringSomeNumber= String(someNumber)
console.log(stringSomeNumber);
console.log(typeof stringSomeNumber);