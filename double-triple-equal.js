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
