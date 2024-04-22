//Principio de responsabilidad Única (SRP)
//una clase debe tener una única responsabilidad bien definida y encapsulada.

// Clase para el cálculo del pago
class CalculadoraPago {
  calcularPago(salario) {
    return salario * 0.85; // descuento del 15%
  }
}

const salarioEmpleado1 = 50000;
const calculadora = new CalculadoraPago();
console.log(calculadora.calcularPago(salarioEmpleado1));

