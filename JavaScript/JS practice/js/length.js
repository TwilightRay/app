'use strict'
// Доделать

function recLength(arr, n){
  console.log(arr);
  if (arr===[]) return n;
  return {
    console.log(arr.splice(1,1));
    recLength(arr.splice(1, 1), n++);}
}
alert(recLength([78, 'element', 244, 'item'], 1));
