// Declarar variables
let i = 1;
let resultadoDiv = document.getElementById('resultado');

do {
    i = parseFloat(prompt("Ingrese un número mayor que 100"));
} while (i <= 100);

resultadoDiv.innerText = `El número ingresado es: ${i}`;
