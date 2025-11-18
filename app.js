const users = [
  { name: "Alok", age: 25 },
  { name: "Alice", age: 30 },
  { name: "Bob", age: 26 },
  { name: "Charlie", age: 35 },
];

function sortingByAge(){
    return users.sort((a, b) => a.age - b.age);
}

console.log(sortingByAge());

module.exports = sortingByAge;