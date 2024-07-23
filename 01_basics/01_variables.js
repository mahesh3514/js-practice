const accountId= 54321
let accountEmail= "mahesh@gmail.com"
var accountPassword= "123456"
accountCity= "Pune"
let accountState;

/*
Perfer not to use "var" 
Because of issue in block scope & functional scope 
*/


// accountId= 2    value change not allowed for const variables

//We can change the the values of let, var variables
accountEmail= "rajesh@gmail.com"
accountPassword= "25365544"
accountCity= "Mumbai"


console.log(accountId)
console.table([accountId, accountEmail, accountPassword, accountCity, accountState])