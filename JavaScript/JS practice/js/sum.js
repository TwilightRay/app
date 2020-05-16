'use strict'
function sumCycle(arr){
   let total = 0;
   for (let x in arr) total += arr[x];
   return total;
}
alert(sumCycle([5, 1, 2, 3, 4]))

function sumRec(arr, sum){
  sum = sum || 0;
  if (arr.length) return sumRec(arr, sum+arr.shift());
  else return sum;
}
alert(sumRec([5, 1, 2, 3, 4]))
