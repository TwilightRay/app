import React, {useState} from 'react'

export const AuthPage = () => {
  const [form, setForm] = useState({ // хук useState, stateform и метод setform
    email: '', password: ''
    // state будет объектом из двух полей
  })

  const changeHandler = event => { // нативный js event
    setForm({...form, [event.target.name]: event.target.value})
    // разворачиваем объект form спредом
    // и определяем, какое поле именно мы меняем
    // обращаемся к динамическому ключу event.target.name
    // и передаем в него event.target.value
  }

  

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
          onChange={changeHandler}
          />
          <label htmlFor="password">Пароль</label>

          </div>
        </div>
        <div className="card-action">
          <button
          className="btn yellow darken-4"
          style={{marginRight: 10}}>
          Войти
          </button>
          <button className="btn grey lighten-1 black-text">Регистрация</button>
        </div>
      </div>
      </div>
      </div>
    </div>
  )
}
