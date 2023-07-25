// Lesson 3 Exercise - Supersimpledev(YouTube)

//STRING

//.3a-.3b-.3c

"My name is: Timothy";

//.3d

"Total cost: $" +
  (5 +
    3) //.3e
  `Total cost: $${5 + 3}`;

//.3f

alert(`Total cost: $${5 + 3}`);

//.3g  Concatenation

"Total cost: $" + (599 + 295) / 100;
"Total cost: $8.94" //.3h Interpolation
`Total cost: $${(599 + 295) / 100}`;
("Total cost: $8.94");

//.3i

alert(`Total cost: $${(599 + 295) / 100}`);

//.3j

alert(`Total cost: $${(599 + 295) / 100}
Thank you, come again!`);

//.3k
`Items (${2 + 2}): $${(2095 * 2 + 799 * 2) / 100}`;

//.3l

`Shipping & handling: $${(499 + 499) / 100}`//.3m

`Total before tax: $${(2095 * 2 + 799 * 2 + 499 * 2) / 100}`//.3n

`Estimated tax(${0.1 * 100}): $${
  Math.round((2095 * 2 + 799 * 2 + 499 * 2) * 0.1) / 100
}`;
