// Задание 1
let arr = [1,4,67,2];

function getArrayParams(arr) {
  let min = arr[0], max = arr[0], sum = 0, avg; // Почему Вадим присвоил массив к переменным
  for ( let i = 0; i < arr.length; i++) {
    if ( arr[i] > max) {
      max = arr[i];
    }
    if ( arr[i] < min) {
      min = arr[i];
    }
    sum +=  arr[i];
  }

  avg = Number((sum / arr.length).toFixed(2));
  // Ваш код

  return { min: min, max: max, avg: avg };
}

// Задание 2
function worker(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length[i]; i++) {
    sum += arr[i];
  }
  // Ваш код

  return sum;
}

function makeWork(arrOfArr, func) {
  let max;

  // Ваш кода
  // for ...

  return max;
}

// Задание 3
function worker2(arr) {
  // Ваш код
}
