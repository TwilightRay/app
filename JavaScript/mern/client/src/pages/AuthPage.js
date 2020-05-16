import React, {useEffect, useState} from 'react'
import {useHttp} from '../hooks/http.hook'
import {useMessage} from '../hooks/message.hook' // функция для вывода сообщений
// import {AuthContext} from '../context/AuthContext'

export const AuthPage = () => {
  // const auth = useContext(AuthContext)
  const message = useMessage()
  const {loading, request, error, clearError} = useHttp()
  const [form, setForm] = useState({ // хук useState, stateform и метод setform
    email: '', password: ''
    // state будет объектом из двух полей
  })

  useEffect( () => { // hook
    message(error)
    clearError()
  }, [error, message, clearError])

  useEffect(() => {
  window.M.updateTextFields()
}, [])

  const changeHandler = event => { // нативный js event
    setForm({...form, [event.target.name]: event.target.value})
    // разворачиваем объект form спредом
    // и определяем, какое поле именно мы меняем
    // обращаемся к динамическому ключу event.target.name
    // и передаем в него event.target.value
  }

  const registerHandler = async () => { // регистрация логина
    try {
      const data = await request('/api/auth/register', 'POST', {...form})
      // получаем данные и ждем возвращения функции реквест с необходимыми параметрами
      // второй параметр метод пост
      // третий данные, передаваемые на сервер
      message(data.message)
    } catch (e) {} // обработка ошибок
  }

  // const loginHandler = async () => {
  //   try {
  //       const data = await request('/api/auth/login', 'POST', {...form})
  //       auth.login(data.token, data.userId)
  //   } catch (e) {}
  // }

  return (
    <div className="row">
        <div className="col s6 offset-s3">
          <h1>Сократи Ссылку</h1>
          <div className="card blue darken-1">
            <div className="card-content white-text">
              <span className="card-title">Авторизация</span>
              <div>

                <div className="input-field">
                  <input
                    placeholder="Введите email"
                    id="email"
                    type="text"
                    name="email"
                    className="yellow-input"
                    value={form.email}
                    onChange={changeHandler}
                  />
                  <label htmlFor="email">Email</label>
                </div>

                <div className="input-field">
                  <input
                    placeholder="Введите пароль"
                    id="password"
                    type="password"
                    name="password"
                    className="yellow-input"
                    value={form.password}
                    onChange={changeHandler}
                  />
                  <label htmlFor="email">Пароль</label>
                </div>

              </div>
            </div>
            <div className="card-action">
              <button
                className="btn yellow darken-4"
                style={{marginRight: 10}}
                disabled={loading}
                >
                  Войти
                </button>
                <button
                  className="btn grey lighten-1 black-text"
                  onClick={registerHandler}
                  disabled={loading}
                  >
                    Регистрация
                  </button>
                </div>
              </div>
            </div>
          </div>
        )
      }
