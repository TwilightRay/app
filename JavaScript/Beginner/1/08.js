// Работа с DOM
const heading = document.getElementById('hello')  // документ - объект,
// представляющий дом-дерево
// const heading2 = document.getElementsByTagName('h2')[0]
// const heading2 = document.getElementsByClassName('h2-class')
const heading2 = document.querySelector('h2') // css - по названия тега
const heading21 = document.querySelector('.h2-class') // селекторы - по классу
const heading22 = document.querySelector('#sub-hello') // возвращает всегда 1 эл-т
const heading3 = heading2.nextElementSibling
const h2List = document.querySelectorAll('h2')

console.log(h2List[1]) // получаем элемент из массива селектора
console.log(heading3)
console.log(heading21)
console.log(heading22)

console.dir(heading.textContent)
console.dir(heading.id)
console.log(heading)

styles = {
    color: ['darkblue', 'darkyellow', 'darkgreen', 'darkred', 'darkorange'] ,
    backgroundColor: ['lightblue', 'lightyellow', 'lightgreen', 'lightred', 'lightorange']
}

function addStylesTo(node, text, color = 'darkblue', fontSize = '3rem') {
    node.textContent = text
    node.style.color = color
    node.style.textAlign = 'center'
    node.style.backgroundColor = 'lightblue'
    node.style.padding = '1rem'
    node.style.display = 'block'
    node.style.width = '100%'
    // falsy: ';, indefined, null, 0, false
    if (fontSize) {
        node.style.fontSize = fontSize
    }
}

const link = heading3.querySelector('a')

link.addEventListener('click', () => {
    event.preventDefault() // отменяем переход по ссылке и оставляем только клик
    console.log('click', event.target.getAttribute('href'))
    const url = event.target.getAttribute('href')

    window.location = url
})

setTimeout(() => {
    addStylesTo(heading, 'New text for heading 1', 'darkred', '3rem')
}, 1000)
setTimeout(() => {
    addStylesTo(heading2, 'Some text for head 2', 'darkorange', '2rem')
}, 2000)
setTimeout(() => {
    addStylesTo(link, 'Another text for h2', 'darkgreen', '1.5rem')
}, 3000)

heading.onclick = () => {
    if (heading.style.color !== 'darkred') {
        heading.style.color = 'darkred'
        heading.style.backgroundColor = 'tomato'
    } else {
        heading.style.color = 'darkorange'
        heading.style.backgroundColor = 'lightyellow'
    }
}

heading22.addEventListener('dblclick', () => {
    if (heading21.style.color === 'darkorange') {
        heading21.style.color = 'darkred'
        heading21.style.backgroundColor = 'tomato'
    } else {
        heading21.style.color = 'darkorange'
        heading21.style.backgroundColor = 'lightyellow'
    }
})

