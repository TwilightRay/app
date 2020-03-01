'use strict'
function sum(arr){
   let total = 0;
   for (let x in arr) total += arr[x];
   return total;
}
//alert(sum([5, 1, 2, 3, 4]))

function sumRec(arr){
  console.log(sumRec(arr));
  if (arr == []) return 0;
  return arr[0] + sumRec(arr.shift());
}
alert(sumRec([5, 1, 2, 3, 4]))
