const jsonData = `
{
  "name": "Aleix Melon",
  "id": "E00245",
  "role": ["Dev", "DBA"],
  "age": 23,
  "doj": "11-12-2019",
  "married": false,
  "address": {
    "street": "32, Laham St.",
    "city": "Innsbruck",
    "country": "Austria"
  },
  "referred-by": "E0012"
}`;
const employeeObj = JSON.parse(jsonData);
console.log(typeof employeeObj);
console.log(employeeObj);

console.log(employeeObj.role[0]);

console.log(employeeObj.name.split(" ")[1]);

console.log(employeeObj.doj.split("-")[2]);




