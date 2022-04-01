const myStudent = '{"name":"Hias","alter":21,"fach":"KIStudent"}';
const myObj = JSON.parse(myStudent);

x = myObj.name;
console.log("Name: " + x);

x = myObj['name'];
console.log("Name: " + x);