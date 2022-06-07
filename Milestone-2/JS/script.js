/* MILESTONE 2
Per ogni numero, data una ul nel DOM, aggiungete un elemento html li con il numero 
o la stringa corretta (seguendo le regole della Milestone 1). */

// ciclo for per numeri da 1 a 100
const Fizz = 'Fizz';
const Buzz = 'Buzz';
const FizzBuzz = 'FizzBuzz';

for (let i = 1; i <= 100; i++) {
  if (i % 3 === 0 && i % 5 === 0) {
    console.log(FizzBuzz);
  } else if (i % 3 === 0) {
    console.log(Fizz);
  } else if (i % 5 === 0) {
    console.log(Buzz);
  } else {
    console.log(i);
  }
}
