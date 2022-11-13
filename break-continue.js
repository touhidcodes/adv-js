const array = [1, 2, 3, 4, 5, 6, 7, 8, 9];
console.log(array);

//break
for (let i = 0; i < array.length; i++) {
  if ([i] > 5) {
    break;
  }
  //console.log(array[i]);
}

for (let i = 0; i < array.length; i++) {
  console.log(array[i]);
  if ([i] < 0) {
    continue;
  }
  console.log(array[i]);
}
