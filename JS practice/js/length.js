'use strict'
function recLength(arr, n){
  n = n || 0;
  if (arr==[]) return 0;
  else {
    arr.shift();
    return recLength(arr, n++);}
}
alert(recLength([78, 'element', 244, 'item']));
