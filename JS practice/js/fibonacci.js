'use strict'
function fib(n){
  if (n<=1) return n;
  else return fib(n-1)+fib(n-2);
  return n;
}
alert(fib(5));
