// Объекты
const person = {
    name: 'Vladimir',
    age: 22,
    isProframmer: true,
    languages: ['ru', 'en', 'de'],
    'complex key': 'Complex Value',
    ['key_' + (1 + 3)]: 'Computed Key', // можно вычислять и менять ключи
    greet1: function () { // эта функция является методом
        },
    greet() { // эту функцию теперь можно создавать вот так
        console.log('greet from person')
    },
    greet2: () => 'Hi',
    key: 'key',
    hasWife: false,
    info() {
        console.log('this: ', this)
        console.info('Информация про человека по имени:', this.name) // this является
        // самим объектом person
    }
}

console.log(person.name) // к названию ключа можно обратиться вот так
console.log(person['age']) // а можно так
console.log(person)
console.log(person.greet2())

person.age++ // возраст  стал больше
person.languages.push('by')

delete person['key_4']
delete person['key']
delete person['greet1']
delete person['greet']
delete person['complex key']
console.log(person)

// Деструктуризация
// const name = person.name
// const age = person.age
// const languages = person.languages

const {name, age: personAge = 10, languages} = person // можно присвоить значения из
// объекта переменным с таким же названием, а можно поменять название, но все
// равно присвоить нужное значение. Даже можно ставить значения по умолчанию, если их там нет
console.log(name, personAge, languages)

for (let key in person) {
    if (person.hasOwnProperty(key)) { // Проверка на свойство, которое
        // не находится в прототипе для избежания ошибок
        console.log('key: ', key)
        console.log('value: ', person[key])
    }
}

const keys = Object.keys(person) // более современный способ получения ключей объекта,
// записывает все ключи в массив. Не заходит в прототип
console.log(keys)
keys.forEach(key => { // итерация по массиву
    console.log('key: ', key)
    console.log('value: ', person[key])
})

Object.keys(person).forEach(key => {
    console.log('key: ', key)
    console.log('value: ', person[key])
})

// Context
person.info()

const logger = {
    keys() { // метод объекта
        console.log('Object keys:', Object.keys(this))
    },

    keysAndValues() {
        Object.keys(this).forEach(key => { // у стрелочной ф-ии нет своего контекста
            console.log(`"${key}": ${this[key]}`)
        })

        // const self = this // сохранение контекста
        // Object.keys(this).forEach(function(key) {
        //     console.log(`"${key}": ${this[key]}`)
        // }.bind()) // исправление ошибки с собственным контекством функции
    },

    withParams(top = false, between = false, bottom = false) {
        if (top) {
            console.log('--------- Start ---------')
        }
        Object.keys(this).forEach((key, index, array) => {
            console.log(`"${key}": ${this[key]}`)
            if (between && index != array.length - 1) {
                console.log('-------------------------')
            }
        })
        if (bottom) {
            console.log('---------- End ----------')
        }
    }
}

const bound = logger.keys.bind(person) // привязываем функцию к bound и создаем новую,
// теперь можно выводить любую функцию, потому что this становится значением,
// передаваемым в bind
bound()

logger.keys.call(person) // биндит эту функцию и сразу вызывает, а не создает новую
logger.keysAndValues.call(person)
logger.keysAndValues.call(logger)
logger.keysAndValues.call({a: 1, b: 2, c: 3})
logger.withParams.call(person, true, true, true)
logger.withParams.apply(person, [true, true, true]) // всегда передает 2 параметра,
// второй параметр является масивом



