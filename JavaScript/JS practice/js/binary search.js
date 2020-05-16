'use strict'
function binarySearch(array, item) {
  let low = 0;
  let high = (array.length)-1;
  let mid = (low + high)/2;
  let guess = array[mid];
  while (low <= high) {
      if (guess == item) {
        let str = "Число " + array[mid] + " имеет индекс " + mid;
        return (str);
      }
      if (guess > item) {
        high = mid - 1;
      } else if (guess < item) {
        low = mid + 1;
      } else {
         let a='none';
         return a;
      }
      mid = Math.floor((low + high)/2);
      guess = array[mid];
}}
let myList = [1, 3, 5, 7, 10];
alert(binarySearch(myList, 3));
