// STRING METHODS

let firstName = 'Jessica'
let lastName = 'Triana'
const fullName = `${firstName} ${lastName}`

// Prints Jessica Triana
console.log(firstName + ' ' + lastName)

// Prints Jessica Triana
console.log(`${firstName} ${lastName}`)

// Prints 14
console.log(`${firstName} ${lastName}`.length)

// Prints JESSICA TRIANA
console.log(`${firstName} ${lastName}`.toUpperCase())

// Prints all jessica triana
console.log(`${firstName} ${lastName}`.toLowerCase())

// Prints Jessica Triana (without the preceding spaces)
console.log(`           ${firstName} ${lastName}`.trim())

// Prints ["Jessica", "Triana"]
console.log(`${firstName} ${lastName}`.split(' '))

// NUMBER METHODS

let example = 7.77

// Prints 7
console.log(parseInt(example))

// Prints 7.77
console.log(parseFloat(example))

// Prints 7.7700 (the amount of decimal places you set)
console.log(example.toFixed(4))

// EXAMPLES OF NUMBER METHODS

let example1 = parseInt('Hello 33 World 22')
// Prints NaN
console.log(example1)

let example2 = parseFloat('44 Dylan 33')
// Prints 44
console.log(example2)

let example3 = (55.3333).toFixed(0)
// Prints "55"
console.log(example3)

let example4 = (200.0).toFixed(2)
// Prints "200.00"
console.log(example4)

// BOOLEAN VALUES

let example1 = false
// Prints false
console.log(Boolean(example1))

let example2 = true
// Prints false
console.log(Boolean(example2))

let example3 = null // Developer uses null to set a placeholder
// Prints false
console.log(Boolean(example3))

let example4 = undefined
// Prints false
console.log(Boolean(example4))

let example5 = ''
// Prints false
console.log(Boolean(example5))

let example6 = NaN
// Prints false
console.log(Boolean(example6))

let example7 = -5
// Prints true
console.log(Boolean(example7))

let example8 = 0
// Prints false
console.log(Boolean(example8))

// A function is a set of instructions
