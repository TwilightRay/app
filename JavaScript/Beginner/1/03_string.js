const name = 'Владимир'
const age = '22'

function getAge() {
  return age
}

const output = `Привет, уменя зовут ${name} и мой возраст ${getAge() < 20 ? 'мало' : getAge()} года`
console.log(output)

const out = `
  <title></title>
  <script src="app.js" charset="utf-8"></script>
`
console.log(out)

console.log(name.length)
console.log(name.toUpperCase())
console.log(name.toLowerCase())
console.log(name.charAt(2))
console.log(name.indexOf('ди'))
console.log(name.startsWith('Влад'))
console.log(name.endsWith('Ир'))
console.log(name.repeat(3))
const string = '     Vladimir     '
console.log(string.trim())
console.log(string.trimLeft())
console.log(string.trimRight())

function logPerson(s, name, age) {
  if (age < 0) {
    age = 'Еще не родился'
  }
  return `${s[0]}${name}${s[1]}${age}${s[2]}`
}

const output1 = logPerson`Имя: ${name}, Возраст: ${age}`
console.log(output1)
