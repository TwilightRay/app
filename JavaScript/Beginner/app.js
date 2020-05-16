// Number
const num = 42 // integer
const float = 42.42 // float
const pow = 10e3 // pow(10, 3) = 1000
console.log(pow)

console.log('MAX ', Number.MAX_SAFE_INTEGER) // максимальное значение int
console.log('Math.pow 53', Math.pow(2, 53) - 1) // подсчет максимального значения int
console.log('MIN ', Number.MIN_SAFE_INTEGER)
console.log('MAX_VALUE', Number.MAX_VALUE)
console.log('Number.MIN_VALUE', Number.MIN_VALUE)
console.log('+Infinity', Number.POSITIVE_INFINITY)
console.log('-Infinity', Number.NEGATIVE_INFINITY)
console.log('2 / 0', 2 / 0)
console.log(Number.NaN)
const weird = 2 / undefined
console.log(isNaN(weird)) // true
console.log(Number.isNaN(42)) // false
console.log(isFinite(Infinity)) // заканчивается ли число - false
console.log(isFinite(42)) // true

const stringInt = '40'
const stringFloat = '40.42'
// перевод строки в число
console.log(Number.parseInt(stringInt) + 2)
console.log(Number(stringInt) + 2)
console.log(+stringInt + 2)

console.log(0.4 + 0.2) // 0.6000000000001
console.log(+(0.4 + 0.2).toFixed(1)) // передаем кол-во знаков после запятой - 1
console.log(parseFloat(((0.4 + 0.2).toFixed(1))))

// BigInt
let bigI = Number.MAX_SAFE_INTEGER + 9999999999
console.log(BigInt(bigI))
console.log(90071992547409919999999n)

// Math
console.log(Math.E)
console.log(Math.PI)

console.log(Math.sqrt(25))
console.log(pow(5, 3))
console.log(Math.abs(-42))
console.log(max(42, 12, 23, 1, 422))
console.log(min(42, 12, 23, 1, 422))
console.log(Math.floor(4.9)) // округдение в меньшую сторону
console.log(Math.ceil(4.9)) // округление к большему
console.log(Math.round(4.9)) // округление к близжайшему целому
console.log(Math.trunc(4.9)) // удаляет дробные знаки
console.log(Math.sin(1/3))
console.log(Math.random())
