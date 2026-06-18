// NO 1: Input: [[1, 2, 3], [4, 5], [6, 7, 8, 9]] Output: [1, 2, 3, 4, 5, 6, 7, 8, 9]

// const array = [
//     [1, 2, 3],
//     [4, 5,],
//     [6, 7, 8, 9],
// ];

// function flattenArray(array) {
//   return array.reduce((result, subArray) => {
//     return result.concat(subArray);
//   }, []);
// }

// console.log(flattenArray([[1, 2, 3], [4, 5], [6, 7, 8, 9]])
// );


// No 2
// const result = findSharedElements(
//   [1, 2, 3, 4],
//   [3, 4, 5],
//   [3, 4, 5, 6]
// );

// function findSharedElements(arr1, arr2, arr3) {
//   return arr1.filter(
//     item => arr2.includes(item) && arr3.includes(item)
//   );
// }

// console.log(result);

function uniqueElements(arr) {
  const result = [];

  for (let i = 0; i < arr.length; i++) {
    if (!result.includes(arr[i])) {
      result.push(arr[i]);
    }
  }

  return result.sort((a, b) => a - b);
}


console.log(
  uniqueElements([1, 3, 2, 3, 4, 5, 4, 2, 5, 6])
);

// NO 4

// function kebabToCamel(str) {
//   return str.replace(/-([a-z])/g, (_, letter) => letter.toUpperCase());
// }

// console.log(kebabToCamel("hello-there"));
