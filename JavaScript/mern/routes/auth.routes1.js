const {Router} = require('express'); // роутер из экспресс
const bcrypt = require('bcryptjs'); // шифрование
const config = require('config');
const jwt = require('jsonwebtoken');
const {check, valodationResult} = require('express-validator'); // валидация полей на экспрессе
const User = require('../models/User') // подключение модели
const router = Router() // создание роутера

// /api/auth/register
router.post(
  '/register',
  [ // middleware массив для валидации
    check('email', 'Некорректный email').isEmail(), //если ошибка, то выводит сообщение
    check('password', 'Минимальная длина пароля 6 символов')
      .isLength({ min: 6 }) // валидация
  ],
   async (req, res) => { // endpoint
  try {
    const errors = validationResult(req) // валидация входящего поля реквест
    // обрабатываем валидацию
    if (!errors.isEmpty()) { // если есть какие-то ошибки, возвращаем их на фронт
      return res.status(400).json({
        errors: errors.array(),
        message: 'Некорректные данные при регистрации'
      }) // обработка исключения
    }

    const {email, password} = req.body //получаем поля логин и пароль из реквеста боди (c фронта)

    const candidate = await User.findOne({ email }) //проверка на уникальность почты
    // ждем, пока база проверяется

    if (candidate) { // если нашллись слвпадения
      return res.status(400).json({ message: 'Такой пользователь уже существует' })
    }

    const hashedPassword = await bcrypt.hash(password, 12) // шифрование пароля
    const user = new User({ email, password: hashedPassword }) // создание пользователя после шифрования пароля

    await user.save() // ждем, пока юзер сохранится

    res.status(201).json({ message: 'Пользователь создан' })

  } catch (e) {
    res.status(500).json({ message: 'Что-то пошло не так, попробуйте снова' })
  }
})
// /api/auth/login
router.post(
  '/login',
  [
    check('email', 'Введите корректный email').normalizeEmail().isEmail(),
    //приводим к нормальному емейлу и добавляем валидатор isEmail
    check('password', 'Введите пароль').exists() // валидатор на существование пароля
  ],
  async (req, res) => {
    try {
      const errors = validationResult(req) // валидация входящего поля реквест
      // обрабатываем валидацию
      if (!errors.isEmpty()) { // если есть какие-то ошибки, возвращаем их на фронт
        return res.status(400).json({
          errors: errors.array(),
          message: 'Некорректные данные при входе в систему'
        }) // обработка исключения
      }

      const {email, password} = req.body // получаем из рек.боди поля мейл и пасс

      const user = await User.findOne({ email }) // ищем пользователя по емейлу

      if (!user) {
        return res.status(400).json({ message: 'Пользователь не найден' });
      }

      const isMatch = await bcrypt.compare(password, user.password) // сравниваем захешированные пароли

      if (!isMatch) {
        return res.status(400).json({ message: 'Неверный пароль, попробуйте снова' });
      }

      const token = jwt.sign(// создаем токен
        // передаем параметры
        {userId: user.id }, // объект с данными, которые будут зашифрованы в jwt токене, можно добавить и другие, например имя
        config.get('jwtSecret'),
        { expiresIn: '1h' } // через сколько токен закончит свое существование
      )

      res.json({ token, userId: user.id })

    } catch (e) {
      res.status(500).json({ message: 'Что-то пошло не так, попробуйте снова' })
    }
})

module.exports = router
