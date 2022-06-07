/* MILESTONE 3
Per ogni numero, dato un container nel DOM, appendi un elemento html con il numero 
o la stringa corretta.
Applica uno stile differente a seconda del valore dell'indice per i multipli di 3, 
per i multipli di 5 e per i valori che sono sia multipli di 3 che di 5 
(seguendo le regole della Milestone 1). */

// ciclo for per numeri da 1 a 100
const Fizz = 'Fizz';
const Buzz = 'Buzz';
const FizzBuzz = 'FizzBuzz';

/* for (let i = 1; i <= 100; i++) {
  if (i % 3 === 0 && i % 5 === 0) {
    const newLi = `
  <li>${FizzBuzz}</li>
  `;
    mainList.innerHTML += newLi;
  } else if (i % 3 === 0) {
    const newLi = `
  <li>${Fizz}</li>
  `;
    mainList.innerHTML += newLi;
  } else if (i % 5 === 0) {
    const newLi = `
  <li>${Buzz}</li>
  `;
    mainList.innerHTML += newLi;
  } else {
    const newLi = `
  <li>${i}</li>
  `;
    mainList.innerHTML += newLi;
  }
} */
