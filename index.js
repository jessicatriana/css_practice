let firstName = 'Jessica'
let lastName = 'Triana'

// Pre-2015 Syntax
console.log(firstName + ' ' + lastName)

// Current Syntax
console.log(`${firstName} ${lastName}`)

// Prints 13
console.log(`${firstName} ${lastName}`.length());

// Prints all caps
console.log(`${firstName} ${lastName}`.toUpperCase());

// Prints all lowercase
console.log(`${firstName} ${lastName}`.toLowerCase());

// Prints the words without the preceding spaces
console.log(`           ${firstName} ${lastName}`.trim());

// Prints ["Jessica", "Triana"]
console.log(`${firstName} ${lastName}`.split(' '));

// A function is a set of instructions
