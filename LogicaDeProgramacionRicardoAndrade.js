//No cambiar el nombre de la función ordenarNumeros
let a = parseFloat(prompt("Ingresa el primer número: "));
let b = parseFloat(prompt("Ingresa el segundo número: "));
let c = parseFloat(prompt("Ingresa el tercer número: "));

function ordenarNumeros(num1, num2, num3) {

  let mayor;
  let centro;
  let menor;
  
  //Definir numero mayor
  if (num1 >= num2 && num1 >= num3){
    mayor = num1;
  }
    else if (num2 >= num1 && num2 >= num3){
        mayor = num2;
    }
    else{
        mayor = num3;
    }

  //Definir numero menor
  if(num1 <= num2 && num1 <= num3){
    menor = num1;
  }
    else if (num2 <= num1 && num2 <= num3){
    menor = num2;  
    }
    else{
        menor = num3;
    }

//Definir el numero del medio (el que queda)
 if (num1 !== mayor && num1 !== menor) {
    centro = num1;
  } else if (num2 !== mayor && num2 !== menor) {
    centro = num2;
  } else {
    centro = num3;
  }
    
  

// No modificar el código debajo de esta línea
  return {
    mayor,
    centro,
    menor,
    ordenMayorAMenor: [mayor, centro, menor],
    ordenMenorAMayor: [menor, centro, mayor],
  };
}

resultado = ordenarNumeros(a, b, c)

console.log(resultado);