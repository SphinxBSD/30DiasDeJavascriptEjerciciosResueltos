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

//Level 2
let quote1 = "There is no exercise better for the heart than reaching down and lifting people up.";
let quote2 =
  "Love is not patronizing and charity isn't about pity, it is about love. Charity and love are the same -- with charity you give love, so don't just give money but reach out your hand instead.";

let num10s = "10";
let num10i = 10;

console.log(typeof num10s);
console.log(typeof num10i);

let num10sInt = parseInt(num10s);
console.log(typeof num10sInt);

let word1 = "python";
let word2 = "jargon";
let wordsearched = "on";
let level2sentence = "I hope this course is not full of jargon.";

console.log(word1.includes(wordsearched) && word2.includes(wordsearched));
console.log(level2sentence.includes("jargon"));

console.log(parseInt(Math.random() * 100));
console.log(parseInt(Math.random() * 50) + 50);
console.log(parseInt(Math.random() * 255));

let palabra = "JavaScript";
console.log(palabra.charAt(parseInt(Math.random() * (palabra.length - 1))));

let numeros = [1, 2, 3, 4, 5];
let lim = 3;
let cadena = "";
for (let i = 0; i < numeros.length; i++) {
  let temp = 1;
  cadena = cadena + numeros[i] + "\t" + temp;
  for (let j = 0; j < lim; j++) {
    temp = temp * numeros[i];
    cadena = cadena + "\t" + temp;
  }
  cadena = cadena + "\n";
}
console.log(cadena);
let primero = sentence.indexOf("because");
let ultimo = sentence.lastIndexOf("because");
console.log(sentence.substring(primero, ultimo + 7));
