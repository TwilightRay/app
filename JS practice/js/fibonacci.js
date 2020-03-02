'use strict'
function fib(n){
  console.log(n);
  if (n<0) return "The number must be greater than 0";
  if (n>1) return fib(n-1)+fib(n-2);
  return n;
}
fib(13);
