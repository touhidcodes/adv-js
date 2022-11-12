//Double equal (==) check only value not type
//Triple equal (===) check only value and type

const first = 2;
const second = "2";

if (first == second) {
  console.log("The conditon is true");
} else {
  console.log("The conditon is false");
}

if (first === second) {
  console.log("The conditon is true");
} else {
  console.log("The conditon is false");
}

//[1 = true, 0 = false]
// 0 == false [true]
// 1 == false [false]
//0 === false [false, type not same]

const num = 0;
const statement = false;

if (num == statement) {
  console.log("The conditon is true");
} else {
  console.log("The conditon is false");
}
