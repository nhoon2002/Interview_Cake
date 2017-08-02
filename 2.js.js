// You have an array of integers, and for each index you want to find the product of every integer except the integer at that index.
// Write a function getProductsOfAllIntsExceptAtIndex() that takes an array of integers and returns an array of the products.

// var integers =   [1, 7, 3, 4];
//should return [84, 12, 28, 21];

// FIRST ATTEMPT: DIVISION, no zero integers
// function getProductsOfAllIntsExceptAtIndex(ar) {
//   //be careful of integers being 0
//   var product = 1;
//   var ar2 = [];
//   for(var i=0; i<ar.length; i++) {
//       product *= ar[i];
//   }
//
//   for(var i=0; i<ar.length; i++) {
//
//       ar2[i] = product/ar[i];
//
//   }
//
//
//
//
//
// console.log(ar2);
//   return ar2
//
//
// }

var integers = [1,2,3,4]
//SECOND ATTEMPT: NO DIVISION
//Each index is a product of all integers BEFORE and AFTER the index.
function getProductsOfAllIntsExceptAtIndex(ar) {
  var cache1 = 1;
  var cache2 = 1;
  var arrayExcept = [];

  for (var i = 0; i < ar.length; i++) {
    if(i > 0) {
      cache1 *= ar[i-1];

    }
    arrayExcept[i] = cache1;

  }

  for (var j=ar.length-1; j >= 0; j--) {
    if(j < ar.length-1) {
      cache2 *= ar[j+1]
    }
     arrayExcept[j] *= cache2;
  }

console.log(arrayExcept);
}

getProductsOfAllIntsExceptAtIndex(integers)
