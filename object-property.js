//Object using MAP
const students = [
  { id: 23, name: "Karim" },
  { id: 24, name: "Rahim" },
  { id: 25, name: "Babu" },
  { id: 6, name: "Salam" },
];
const output = [];

//for loop
for (let i = 0; i < students.length; i++) {
  element = students[i];
  output.push(element.name);
}

console.log(output);

//MAP
const names = students.map((s) => s.name);
const ids = students.map((s) => s.id);

console.log(names);
console.log(ids);

//filter
const bigger = students.filter((s) => s.id > 20);
const biggerOne = students.find((s) => s.id > 20);

console.log(bigger);
console.log(biggerOne);
