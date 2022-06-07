/* MILESTONE 3
Per ogni numero, dato un container nel DOM, appendi un elemento html con il numero 
o la stringa corretta.
Applica uno stile differente a seconda del valore dell'indice per i multipli di 3, 
per i multipli di 5 e per i valori che sono sia multipli di 3 che di 5 
(seguendo le regole della Milestone 1). */

const Fizz = 'Fizz';
const Buzz = 'Buzz';
const FizzBuzz = 'FizzBuzz';
const squareContainer = document.querySelector('.square_container');

for (let i = 1; i <= 100; i++) {
  if (i % 3 === 0 && i % 5 === 0) {
    const newBox = FizzBuzz;
    squareContainer.innerHTML += `<div class="box salmon_bg">${newBox}</div>`;
  } else if (i % 3 === 0) {
    const newBox = Fizz;
    squareContainer.innerHTML += `<div class="box green_bg">${newBox}</div>`;
  } else if (i % 5 === 0) {
    const newBox = Buzz;
    squareContainer.innerHTML += `<div class="box yellow_bg">${newBox}</div>`;
  } else {
    const newBox = i;
    squareContainer.innerHTML += `<div class="box blue_bg">${newBox}</div>`;
  }
}
