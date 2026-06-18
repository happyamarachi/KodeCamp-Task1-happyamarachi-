// NO 1: Input: [[1, 2, 3], [4, 5], [6, 7, 8, 9]] Output: [1, 2, 3, 4, 5, 6, 7, 8, 9]

const nums = [
    [1, 2, 3],
    [4, 5,],
    [6, 7, 8, 9],
];

function flattenNums(nums) {
  return nums.reduce((result, subNums) => {
    return result.concat(subNums);
  }, []);
}

console.log(flattenNums([[1, 2, 3], [4, 5], [6, 7, 8, 9]])
);


// NO 2: Input: [1, 2, 3, 4], [3, 4, 5], [3, 4, 5, 6]

// Output: [3, 4]

const scores = findSharedElements(
  [1, 2, 3, 4],
  [3, 4, 5],
  [3, 4, 5, 6]
);

function findSharedElements(arr1, arr2, arr3) {
  return arr1.filter(
    item => arr2.includes(item) && arr3.includes(item)
  );
}

console.log(scores);


// NO 3: Input: [1, 3, 2, 3, 4, 5, 4, 2, 5, 6]

// Output: [1, 2, 3, 4, 5, 6]

function uniqueElements(arr) {
  const result = [];

  for (let i = 0; i < arr.length; i++) {
    if (!result.includes(arr[i])) {
      result.push(arr[i]);
    }
  }

  return result.sort((a, b) => a - b);
}


console.log(uniqueElements([1, 3, 2, 3, 4, 5, 4, 2, 5, 6]));


// NO 4: Input: hello-there

// Output: helloThere

function kebabToCamel(str) {
  return str.replace(/-([a-z])/g, (_, letter) => letter.toUpperCase());
}

console.log(kebabToCamel("hello-there"));