/* stampare con for numeri da 1 a 100 in console;

creare un if (multiplo di 3) {
    stampa fizz;
} else if (multiplo di 5){
    stampa Buzz;
} else if (multiplo di 3 e 5){
    stampa FizzBuzz;
} else{
    non stampare nulla;
}

per vedere se è un multiplo uso la formula: numeroA % numeroB = 0 allora è multiplo; */
let output = '';
const ulElement = document.querySelector('ul');
for (let i = 1; i <= 100; i++){

if (i % 3 === 0 && i % 5 === 0) {
    output = 'fizzBuzz'
} else if(i % 5 === 0){
    output = 'buzz'
} else if(i % 3 === 0){
    output = 'Fizz'
} else{
    output = i;
}
    console.log(output)
    
    const liElement = document.createElement('li');
    liElement.classList.add('list-item');
    liElement.append(output);

    ulElement.appendChild(liElement);
}

