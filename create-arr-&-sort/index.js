const arr = [
  {name: 'Ann', age: 17},
  {name: 'Rupert', age: 18},
  {name: 'Joe', age: 21},
  {name: 'Janine', age: 27},
  {name: 'Bill', age: 32},
  {name: 'Jane', age: 19},
  {name: 'Max', age: 35},
];

function sortArray(arr, func) {
  let result = [...arr]
  for (j=0; j < result.length; j++){
    for (let i = 0; i < result.length -1; i++){
      if (func(result[i], result[i + 1])) {

        const temp = result[i]
        result[i] = result[i + 1]
        result[i + 1] = temp
      }
    }
  }
  return result
}

console.log('Before sorting:', arr)
console.log('After sorting:', sortArray(arr, function(A, B){
  return A.age > B.age
}));
