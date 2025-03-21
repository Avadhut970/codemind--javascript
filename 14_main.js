 // Change the color of the h1 element
const result = document.querySelector("h1");
result.style.color = "blue";

// Change the color of the h2 element with id 'tec'
const result1 = document.querySelector("#tec");
result1.style.color = "red";

// Correct the issue of selecting and removing the element with id 'agile'
let a = document.querySelector("#miss");
let b = document.getElementById("agile");
a.removeChild(b);
