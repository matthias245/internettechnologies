/**
 * Einführung Java Script.
 * @author Hias
 */

/**
 * Variable a used for addition.
 */
var a = 3;
/**
 * Variable b used for addition.
 */
var b = 30;

/**
 * Array including all students.
 */
var students = ["Benedikt", "Matthias", "Mattis", "Stefan", "Marcel", "Bohdan"]

/**
 * New Map.
 */
 let fruits = new Map([
    ["apples", 500],
    ["bananas", 300],
    ["oranges", 200]
  ]);


let c = a+b;
console.log("\n--------------------------------");
console.log(a + " + " + b + " = " + c);
console.log("Ein normales Array: " + students[0] + " " + students[1]);
console.log("Das Gewicht eines Apfels: " + fruits.get("apples"));
console.log("--------------------------------\n");
