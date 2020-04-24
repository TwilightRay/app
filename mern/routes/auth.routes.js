const {Router} = require('express'); // роутер из экспресс
const User = require('../models/User') // подключение модели
const router = Router() // создание роутера

// /api/auth/register
router.post('/register', async (req, res) => { // endpoint
  try {

    const {email, password} = req.body //получаем поля логин и пароль из реквеста боди (c фронта)


  } catch (e) {
    res.status(500).json({ message: 'Что-то пошло не так, попробуйте снова' })
  }
})
// /api/auth/login
router.post('/login', async (req, res) => {

})

module.exports = router
