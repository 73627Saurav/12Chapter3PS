let marks = {
  harry: 90,
  shubham: 9,
  lovish: 56,
  Monika: 4
}
console.log(Object.keys(marks))
// [ 'harry', 'shubham', 'lovish', 'Monika' ]
// it will give keys that are inside the object

console.log(Object.keys(marks).length)
// 4
// it will give length

console.log(Object.keys(marks)[0])
// harry

console.log(marks[Object.keys(marks)[0]])
// 90

// Problem No 1
for (let i = 0; i < Object.keys(marks).length; i++) {
  console.log("The marks of " + Object.keys(marks)[i] + " are " + marks[Object.keys(marks)[i]])
}
/* 
The marks of harry are 90
The marks of shubham are 9
The marks of lovish are 56
The marks of Monika are 4 */

// Problem No 2
for (let key in marks) {
  console.log("The marks of " + key + " are " + marks[key])
}
/* 
The marks of harry are 90
The marks of shubham are 9
The marks of lovish are 56
The marks of Monika are 4 */

// Problem No 3
let cn = 43
let i
while (i != cn) {
  console.log("Try again")
  i = prompt("Enter a number")
}
console.log("You have entered a correct number")

// Problem No 4
const mean = (a, b, c, d) => {
  return (a + b + c + d) / 4
}
console.log("mean: "+mean(4, 5, 6, 7))