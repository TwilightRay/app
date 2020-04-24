//модель для создания пользователя
const {Schema, model, Types} = require('mongoose'); // достаем поля из монгус скема и модел

const schema = new Schema({ // создаем скему через конструктор классов
  email: {type: String, required: true, unique: true}, //поля для работы пользователя
  // required - обязательное поле, unique - уникальный
  password: {type: String, required: true},
  links: [{ type: Types.ObjectId, ref: 'Link' }] // ref - к какой коллекции привязываемся
  // Link - модель
  // можно добавить еще поля
})

module.export = model('User', schema) // ехпорт из файла результат работы
// ф-ии модел по схеме скима
