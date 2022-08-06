let a_min = -1
let a_max = -100
let b_min = 1
let b_max = 100
let c_min = -1
let c_max = 1000
let A = a_min + Math.floor(Math.random() * 100);
let b = b_min + Math.floor(Math.random() * 100);
let c = c_min + Math.floor(Math.random() * 100);

console.log(((-1) * b) + (Math.sqrt(Math.pow(b, 2) - (4 * A * c)))) / (2 * A);
console.log(((-1) * b) - (Math.sqrt(Math.pow(b, 2) - (4 * A * c)))) / (2 * A);