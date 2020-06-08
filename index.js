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

// RELATIONAL OPERATORS

let example1 = 10
let example2 = 15

// Prints false
console.log(example1 >= example2)

// Prints false
console.log(example1 === example2)

// Prints true
console.log(example1 != example2)

// RELATIONAL OPERATORS PRACTICE

let promo1 = 'SaveAlot'
let promo2 = 'Friyay'

// Prints false
console.log(promo1 === promo2)

// INCREMENT AND DECREMENT

let example1 = 1
example1++
// Prints 2
console.log(example1)

let example2 = 1
example1--
// Prints 0
console.log(example2)

let example3 = 1
example3 += 5
// Prints 6
console.log(example3)
example3 *= 2
//Prints 12
console.log(example3)

// INCREMENT DECREMENT PRACTICE
let quantity = 2
const customerAnswer = Math.random() >= 0.5
if (customerAnswer == true) {
  quantity++
}

// Prints true or false
console.log(`Customer answered `, customerAnswer)
//Prints updated quantity based on customerAnswer
console.log(`Quantity `, quantity)

// CONTROL FLOW

let number = parseInt((Math.random() * 10) / 2)

if (number === 3) {
  console.log(`${number} runs`)
} else if (number === 4) {
  console.log(`${number} runs`)
} else {
  console.log(`${number} doesn't run`)
}

// USER AGE PRACTICE

let age = 18

if (age <= 12) {
  console.log(`Child`)
} else if (age >= 19) {
  console.log(`Teenager`)
} else {
  console.log(`Adult`)
}

// SWITCH STATEMENTS

let studentAnswer = 'A'

switch (studentAnswer) {
  case 'A':
    console.log('A is wrong')
    break
  case 'B':
    console.log('B is wrong')
    break
  case 'C':
    console.log('C is correct')
    break
  default:
    console.log('Not a real answer')
}

// Prints A is wrong
console.log(studentAnswer)

// SWITCH STATEMENT PRACTICE

let userType = 'shopper'

switch (userType) {
  case 'shopper':
    console.log('Upgrade to super shopper?')
    break
  case 'super shopper':
    console.log("You're the best!")
    break
  default:
    console.log('Upgrade to shopper?')
}

// Prints Upgrade to super shopper?
console.log(userType)

// FOR LOOPS

let total = 0

for (let i = 0; i < 5; i++) {
  // Prints 0, then 1, then 2, then 3, then 4
  console.log(i)
  total += i
}
// Prints 10
console.log(total)

let numArray = [10, 20, 30, 40, 50, 60, 70, 80]

for (let i = 0; i < numArray.length; i++) {
  // Prints each element in the numArray
  console.log(numArray[i])
  total += numArray[i]
}

// Prints 370
console.log(total)

// FOR LOOP PRACTICE

let cartItems = [
  { quantity: 1, price: 5 },
  { quantity: 3, price: 4 },
  { quantity: 10, price: 1 }
]

let totalPrice = 0

for (let cartItem of cartItems) {
  totalPrice += cartItem.price * cartItem.quantity
}

totalPrice *= 1.08
// Prints 29.160000000000004
console.log(totalPrice)

// Another way to write the for-loop above
// for (let i = 0; i < cartItems.length; i++) {
//   totalPrice += cartItems[i].quantity * cartItems[i].price
// }

// WHILE AN DO WHILE LOOPS

let count = 0

do {
  count++
  if (count >= 20) {
    break
  }
} while (false)

console.log(count)

// WHILE AND DO WHILE PRACTICE

let updates = 0

while (updates < 10) {
  console.log(updates)
  updates++
}
console.log('No longer tracking the user')

// A function is a set of instructions
// It's a way to store code and reuse it

function add (num1, num2) {
  return num1 + num2
}

add(10, 6)

// FUNCTION PRACTICE

const cartItems = [
  { quantity: 1, price: 5 },
  { quantity: 3, price: 4 },
  { quantity: 10, price: 1 }
]

function getUserCredentials (firstName, lastName, email) {
  let person = `Name: ${firstName} ${lastName}, Email: ${email}`
  return person
}

function getPreTaxTotal (items) {
  let total = 0
  for (let item of items) {
    total += item.quantity * item.price
  }
  return total
}

function getTaxedTotal (total) {
  return (total *= 1.08)
}

getUserCredentials('Jessica', 'Triana', 'jessica.triana.tx@gmail.com')
getPreTaxTotal(cartItems)
getTaxedTotal(getPreTaxTotal(cartItems))
