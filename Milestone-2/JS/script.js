/* MILESTONE 2
Per ogni numero, data una ul nel DOM, aggiungete un elemento html li con il numero 
o la stringa corretta (seguendo le regole della Milestone 1). */

// ciclo for per numeri da 1 a 100
const Fizz = 'Fizz';
const Buzz = 'Buzz';
const FizzBuzz = 'FizzBuzz';
const mainList = document.querySelector('.unordered_numbers');

for (let i = 1; i <= 100; i++) {
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
}
