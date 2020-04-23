import {Question} from './question'
import {createModal, isValid} from './utils'
import './styles.css'
import {getAuthForm} from './auth'

const form = document.getElementById('form')
const modalBtn = document.getElementById('modal-btn')
const input = form.querySelector('#question-input')
const submitBtm = form.querySelector('#submit')

window.addEventListener('load', Question.renderList)
form.addEventListener('submit', submitFormHandker)
modalBtn.addEventListener('click', openModal)
input.addEventListener( 'input', () => {
  submitBtm.disabled = !isValid(input.value)
})

function submitFormHandker(event) {
  event.preventDefault()

  if (isValid(input.value)) {
    const question = {
      text: input.value.trim(),
      date: new Date().toJSON()
    }

    submitBtm.disabled = true
    // Async request to server to save question
    Question.create(question).then( () => {
      input.value = ''
      input.className = ''
      submitBtm.disabled = false
    })
  }
}


function openModal() {
  createModal('Авторизация', getAuthForm())
  document
  .getElementById('auth-form')
  .addEventListener('submit', authFormHandler, {once: true})
}

function authFormHandler(event) {
  event.preventDefault()

    const email = event.target.querySelector('#email').value
    const password = event.target.querySelector('#password').value

    authWithEmailAndPassword(email, password)
      .then(Question.fetch)
      .then(renderModalAfterAuth)
}

function renderModalAfterAuth(content) {
  console.log('Content', content);
}
