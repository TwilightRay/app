const title = 'hello'

const isVisible = () => Math.random() > 0.5;

const template = `
  ${isVisible() ? `<p>Visible</p>` : ''}
 <h1 id='test' style="color: red">${title}</h1>`

console.log(template);

//Methods
const str = 'Hello';

console.log(str.startsWith('He'));//начинается с
console.log(str.startsWith('e'));
console.log(str.endsWith('lo'));//заканчивается этим
console.log(str.endsWith('e'));

console.log(str.includes( 'llo' ));//есть ли такая подстрока

console.log(str.repeat(3));//повторить строчку 3 раза

console.log(str.trim());//удалить пробелы слева и справа
console.log(str.trimStart());//удалить пробел слева
console.log(str.trimEnd());//удалить пробел справа

console.log(str.padStart(10, '.'));// минимальная длина строки 10 симв,
//слева прибавляются пробелы или то, что указано после  .....Hello
console.log(str.padEnd(8, '.'));//с конца Hello...
