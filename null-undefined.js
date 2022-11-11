//get undefined by:
//write undefined value
//not define let/const value
//no return in function
//not pass any parameter
//find value which not define in object
//find value which not exist in array

let fun = undefined;
console.log(fun);

let x;
console.log(x);

function add(num1, num2) {
  const number = num1 + num2;
  //return number;
}

const result = add(4, 5);
console.log(result);

const result2 = add(4);
console.log(result2);

const obj = { name: "x", phone: 334 };
console.log(obj.salary);

let arr = [2, 3, 4, 5, 5];
console.log(arr[11]);
