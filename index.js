// FUNCTIONAL ARRAY

/*
nombreDelArray.método(function(elementoiterador, indice){
...resto de nuestra lógica
})

*/

// FOREACH
const numbers = [1, 2, 3, 4, 5]
numbers.forEach(function (element) {
  console.log(element - 1)
})

// devuelve solo el indice
numbers.forEach(function (number, numberIndex) {
  console.log(numberIndex)
})

function showNumbers(number, numberIndex) {
  console.log('Number', number, 'Index', numberIndex)
}

numbers.forEach(showNumbers)

numbers.forEach(function (num, i) {
  console.log(i + '- ' + num * 3)
})

// Solo números pares
numbers.forEach(function (number, idx) {
  if (number % 2 === 0) {
    console.log(idx + '- ' + number)
  }
})

// Suma de elementos mayores a un número
const numbers2 = [1, 4, 15, 56, 2, 8, 9]
const cut = 7

function sumOfSelected(array, cutter) {
  let suma = 0
  array.forEach(function (number, i) {
    if (number > cutter) {
      console.log(i + ' ' + 'Number: ' + number)
      suma += number // suma = suma + number
      //console.log('SUMA: ', suma)
    }
  })
  return suma
}
let corte = 1
console.log(sumOfSelected(numbers2, cut))

console.log(sumOfSelected(numbers, corte))

// for ... of
//Structure
/*
for (element of array/string){
  statement
}
*/
let numeros = [1, 4, 15, 56, 2, 8, 9]
for (number of numeros) {
  let suma = 0
  if (number > 10) {
    suma += number
  }
  return suma
}

const frutas = ['manzana', 'banana', 'cereza']
for (const fruta of frutas) {
  console.log(fruta)
}
const nombre = 'Pedro'
for (letra of nombre) {
  console.log(letra)
}

let numbers3 = [1, 4, 15, 56, 2, 8, 9]
// Iteramos por cada elemento
// Almacenamos el que cumpla ser par en un array
// Cuando esté todo iterado, devolvemos el array
function keepEven(array) {
  let arrayEven = []
  for (num of array) {
    if (num % 2 === 0) {
      arrayEven.push(num)
    }
  }
  return arrayEven
}

console.log(keepEven(numbers3))

// MAP

const numbers4 = [1, 2, 3, 4, 5]

const newArray = numbers4.map(function (num) {
  return num * 5
})

console.log(newArray)

// Reformating existing array
const streamers = [
  {name: 'Rubius', followers: 1000000, peekView: 550000},
  {name: 'elxokas', followers: 500000, peekView: 120000},
  {name: 'auronplay', followers: 2000000, peekView: 770000},
]

function reformat(element) {
  const output = {
    /* name: element.name, data: {followers: element.followers, peekView: element.peekView} */
  }

  output.name = element.name
  output.data = {followers: element.followers, diaryView: element.peekView / 30}

  return output
}

const formattedStreamers = streamers.map(reformat)

console.log(formattedStreamers)

const fruits = [
  {fruit: 'manzana', price: 2},
  {fruit: 'fresa', price: 4},
  {fruit: 'plátano', price: 1},
]

let totalPrice = fruits.map(function (fruta, idx) {
  totalPrice = [
    // primer iteración:   { fruit: 'manzana', price: 2.16 },
    // segundo iteración:   {fruit: 'fresa', price: 4.32},
    // tercera iteración: {fruit: 'plátano', price: 1.08}
  ]

  if (fruta.price > 1) {
    fruta.price = fruta.price + (fruta.price * 8) / 100
    console.log(fruta.fruit)

    return fruta
  }
  console.log(fruta.fruit)
})

console.log(totalPrice)

const fruits = [
  {fruit: 'manzana', price: 2},
  {fruit: 'fresa', price: 4},
  {fruit: 'plátano', price: 1},
]

let totalPrice = fruits.map(function (fruta, idx) {
  totalPrice = [
    // primer iteración:   { fruit: 'manzana', price: 2.16 },
    // segundo iteración:   {fruit: 'fresa', price: 4.32},
    // tercera iteración: {fruit: 'plátano', price: 1.08}
  ]

  fruta.price = fruta.price + (fruta.price * 8) / 100
  return fruta
})

console.log(totalPrice)

const numbers5 = [1, 2, 3, 4, 5, 6, 7, 8]

const lessThanFive = numbers5.filter(function (number) {
  if (number < 5) {
    return true
  } else {
    return false
  }
})

// Devuelve los numeros a partir de 5
// Devuelve true en los valores que sea menores que 5

console.log(lessThanFive)

const array = [1, 4, ['hola', 'adios'], {name: 'Adam'}, 'fin']

console.log(
  array.filter(function (e) {
    return e > 1
  })
)

// FILTER

const cart = [
  {name: 'tomato', price: 4.99, amount: 2},
  {name: 'milk', price: 2.99, amount: 5},
  {name: 'water', price: 1.49, amount: 6},
]

function productsCheaperThan(products, euro) {
  const lessThanValue = products.filter(function (product, i) {
    // Acceder al precio del producto sobre el que iteramos
    //console.log(product.price)
    // Comprobar si el precio es menor que el parámetro "price"
    return product.price < euro
  })
  // Devolver la variable que almacena el filtrado
  return lessThanValue
}

console.log(productsCheaperThan(cart, 3))

// SORT

const numeritos = [1, 2, 100, 4, 50, 5]

numeritos.sort(function (a, b) {
  return a - b
})

console.log(numeritos)

const result = numeritos.reduce(function (accumulator, currentValue) {
  /* 
  let suma = 0 (indice inicial que por defecto es 0)
  suma = accumulator (es suma) + currentValue
  */

  return accumulator - currentValue
})

console.log(result)

const resultado = numeritos.reduce(function (accumulator, currentValue) {
  if (currentValue % 2 === 0) {
    return accumulator + currentValue
  } else {
    return accumulator
  }
}, 0)

console.log(resultado) // 156
