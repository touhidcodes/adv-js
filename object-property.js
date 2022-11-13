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
