//let const not work outside of block and global recall
function add(first, second) {
  const sum = first + second;
  console.log(sum);

  if (sum > 9) {
    let mood = "happy";
    console.log(mood);
  }
  return sum;
}
const result = add(5, 5);

console.log(result);
//console.log(sum); [not work]
//console.log(mood); [not work]
