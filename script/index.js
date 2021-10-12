import {Suma} from './Ejercicio1.js'
import {Multiplicacion} from './Ejercicio2.js'

let num1;
let num2;

let bntEJ1 = document.getElementById('Ej1')
let btnEj2 = document.querySelector('#Ej2')
let resultado = document.querySelector('#resultado')


bntEJ1.addEventListener('click', ()=>{

    num1 = Number(prompt('Ingrese Número 1'))
    num2 = Number(prompt('Ingrese Número 2'))
    console.log(Suma(num1,num2))
})

btnEj2.addEventListener('click', ()=>{
    let num1 = document.querySelector('#num1').value
   // num1 = Number(prompt('Ingrese Número 1'))
    num2 = Number(prompt('Ingrese Número 2'))
 
    resultado.innerHTML = `El resultado es ${Multiplicacion(num1,num2)}`

})


