'use strict'
// Доделать
function recLength(arr, n){
  n = n || 0;
  if (arr==[]) return n;
  return recLength(arr.splice(1, 1), n++);
}
alert(recLength([78, 'element', 244, 'item']));
