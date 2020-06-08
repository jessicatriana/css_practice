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

// ARRAY METHODS

let example1 = [5, 7, 6]

// Prints 3
console.log(example1.length)

// Prints 5
console.log(example1[0])

// Prints undefined
console.log(example1[3])

example1.push(8, 9)
// Prints [5,7,6,8,9]
console.log(example1)

example1.pop()
// Prints [5,7,6,8]
console.log(example1)

example1[0] = 1
// Prints [1,7,6,8]
console.log(example1)

example1.forEach(element => {
  console.log(element)
})
// Prints each element in the array
console.log(example1)

// ARRAY PRACTICE

const products = ['toilet paper', 'bottled water', 'sanitizer']
products[0] = 'paper towels'
products.pop()
products.push('bleach')
console.log(products)

// OBJECTS

let example1 = {
  firstName: 'Jessica',
  lastName: 'Triana',
  address: {
    city: 'Austin',
    state: 'Texas'
  },
  age: 29,
  hobbies: ['hiking', 'traveling', 'kayaking']
}

// Prints Triana
console.log(example1.lastName)

example1.age++
// Prints 30
console.log(example1.age)

//Prints ["firstName", "lastName", "address", "age", "hobbies"]
console.log(Object.keys(example1))

// Prints ["Jessica", "Triana", {city: "Austin", state: "Texas"}, 30, ["hiking", "traveling", "kayaking"]]
console.log(Object.values(example1))

// Prints false
console.log(example1.hasOwnProperty('middleName'))

// OBJECTS CHALLENGE

const user = {
  firstName: 'Larry',
  lastName: 'Daniels'
}

user.address = {
  city: 'Dallas',
  state: 'Texas'
}

user.hobbies = ['swimming', 'biking', 'running']
user.goldMember = true

// ARITHMETIC OPERATORS

let example1 = 5 + 5 - (4 * 4) / 4
// Prints 6
console.log(example1)

let example2 = 5 % 2
// Prints 1 (the remainder of 5 / 2)
console.log(example2)

// ARITHMETIC PRACTICE

let banana = 0.5
let avocado = 1.25
let nectarines = 0.7

let totalPrice = banana + avocado + nectarines * 2
// Prints 3.15
console.log(totalPrice)

let averagePrice = totalPrice / 4
// Prints 0.7875
console.log(averagePrice)

let finalPrice = totalPrice - 0.5 //0.50 discount applied
// Prints 2.65
console.log(finalPrice)

// A function is a set of instructions
