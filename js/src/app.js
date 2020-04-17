import {Question} from './question'
import {isValid} from './utils'
import './styles.css'

const form = document.getElementById('form')
const input = form.querySelector('#question-input')
const submitBtm = form.querySelector('#submit')

form.addEventListener('submit', submitFormHandker)
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
