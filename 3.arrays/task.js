function compareArrays(arr1, arr2) {
  let result = arr1.length === arr2.length && arr1.every((value, index) => value === arr2[index]);

  // Ваш код

  return result; // boolean
}


function advancedFilter(arr) {
  let resultArr = arr.filter((number) => number > 0).filter((number) => number % === 3).map();

  // Ваш код

  return resultArr; // array
}
