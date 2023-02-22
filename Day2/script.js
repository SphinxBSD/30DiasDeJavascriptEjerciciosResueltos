let challenge = "30 Days Of JavaScript";
let challenge2 = " 30 Days Of JavaScript ";
let companies = "Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon";
let sentence = "You cannot end a sentence with because because because is a conjunction";

console.log(challenge);
console.log("Longitud de la cadena: " + challenge.length);
console.log("En mayusculas: " + challenge.toUpperCase());
console.log("En minusculas: " + challenge.toLowerCase());
console.log(challenge.substring(0, 2));
console.log(challenge.substring(3, challenge.length));
console.log(challenge.includes("Script"));
console.log(challenge.split(" "));
console.log(companies.split(", "));
console.log(challenge.replace("JavaScript", "Python"));
console.log(challenge.charAt(15));
console.log(challenge.charCodeAt("J"));
console.log(challenge.indexOf("a"));
console.log(challenge.lastIndexOf("a"));
console.log("El indice es: " + sentence.indexOf("because"));
console.log("El indice es: " + sentence.lastIndexOf("because"));
console.log("El indice es: " + sentence.search("because"));

let challenge3 = challenge2.trim();
let concatenacion = "";

console.log(challenge3);
console.log(challenge.startsWith("30"));
console.log(challenge.endsWith("Script"));
console.log(concatenacion.concat("30 Days of ", "JavaScript"));
console.log(challenge.repeat(2));
