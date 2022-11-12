//MAP works on element, index, array

//Square numbers by loop
const numbers = [2, 4, 6, 7, 8, 5, 9];
const output = [];

for (let i = 0; i < numbers.length; i++) {
  const element = numbers[i];
  const result = element * element;
  output.push(result);
}

console.log(output);

//MAP numbers by function
function square(element) {
  return element * element;
}

const display = square(numbers);

const Square = (element) => element * element;

//Square numbers by MAP
const result = numbers.map(function (element) {
  return element * element;
});

console.log(result);

//Filter number
const bigger = numbers.filter((element) => element > 5);

console.log(bigger);
