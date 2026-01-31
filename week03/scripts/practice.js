let firstName = 'Antonia';
let lastName = 'Francesca';
function myConcat( ) {
  let result = ""; // initialize list
  // iterate through arguments
  for (let i = 1; i < arguments.length; i++) {
    result += arguments[i] + separator;
  }
  return result;
}
myConcat(firstName, lastName)
console.log(myConcat(firstName, lastName))
