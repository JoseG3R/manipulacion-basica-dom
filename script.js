//h1 h1 {color:red}
//.parrafo {...}
//#pid {...}
const h1 = document.querySelector('h1');
const form = document.querySelector('form');
const input1 = document.querySelector('#calculo1');
const input2 = document.querySelector('#calculo2');
const btn = document.querySelector('#btnCalcular');
const result = document.querySelector('#result');

form.addEventListener('mouseover',sumarInputValue);

function sumarInputValue(event) {
    console.log({event});
    event.preventDefault();
    const suma = parseInt(input1.value) + parseInt(input2.value);
    result.innerText = "Resultado "+suma;
    console.log();
}