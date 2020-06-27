// Ассинхронность
const timeout = setTimeout(() => {
    console.log('After timeout')
}, 100) // первый параметр ф-я callback, вторым количество миллисекунд
// (делим на 1000 и получаем секунды)

clearTimeout(timeout)

const interval = setInterval(() => {
    console.log('After interval')
}, 1000) // через какой промежуток времени нужно запускать данный интервал

clearInterval(interval)

const delay = (callback, wait = 1000) => {
    setTimeout(callback, wait)
}
delay(() => {
    console.log('After 2 seconds')
}, 1000)

const delay1 = (wait = 1000) => {
    const promise = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve()
        }, wait)
    })
    return promise
}

delay1(2500)
    .then(() => {
        console.log('After 2 seconds')
    })
    .catch(err => console.error('Error:', err)) // если произошла ошибка
    .finally(() => console.log('Finally'))

const getData = () => new Promise(resolve => resolve([
    1, 1, 2, 3, 5, 8, 13
]))

getData().then(data => console.log(data))

async function asyncExample() {
    await delay1(3000) // ждем, когда выполнится строчка
    await getData() // await может применяться только к ассинхронным ф-ям
}