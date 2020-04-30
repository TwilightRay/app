const express = require('express') // подключение пакета
const config = require('config');
const mongoose = require('mongoose'); // подключаем mongoDB

const app = express() // будущий сервер

app.use(express.json({ extended: true })) // middleware

app.use('/api/auth', require('./routes/auth.routes')) // передаем роут

const PORT = config.get('port') || 5000 // берем из файла значение

async function start() {
  try { // если нет ошибок
    await mongoose.connect(config.get('mongoUri'), { // ждем, пока промис не завершится
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true
    })
    app.listen(PORT, () => console.log(`App has been started on port ${PORT}...`))
    // порт и call back
  } catch (e) { // обработка исключений
    console.log('Server error ', e.message);
    process.exit(1)
  }
}

start()
