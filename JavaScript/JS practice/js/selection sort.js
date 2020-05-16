'use strict'
function search(arr) {
  let smallest = arr[0];
  let smallestIndex = 0;
  arr.forEach((item, i) => {
    if (arr[i] < smallest){
      smallest = arr[i];
      smallestIndex = i;
    }
  });
  return (smallestIndex);
}
function selectionSort(arr) {

  let newArr = [];
  while (arr.length!=0) {
    search(arr);
    let smallestIndex = search(arr);
    newArr.push(arr[smallestIndex]);
    arr.splice(smallestIndex, 1);
  }
  return newArr;
}
alert (selectionSort([5, 3, 6, 2, 10]));
