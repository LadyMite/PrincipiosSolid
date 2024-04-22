//Principio de Inversión de Dependencias (DIP)
//las clases de alto nivel no deberían depender de clases de bajo nivel específicas
// Definición de la interfaz para el cálculo del pago
class CalculadoraDePago {
  calcularPago(salario) {
    throw new Error('Método calcularPago debe ser implementado.');
  }
}

// Implementación concreta de la calculadora de pago
class CalculadoraDePagoPorDefecto extends CalculadoraDePago {
  calcularPago(salario) {
    return salario * 0.85; // Suponiendo un descuento del 15%
  }
}

// Clase Empleado que depende de la interfaz CalculadoraDePago
class Empleado {
  constructor(nombre, salario, calculadora) {
    this.nombre = nombre;
    this.salario = salario;
    this.calculadora = calculadora;
  }

  getNombre() {
    return this.nombre;
  }

  setNombre(nombre) {
    this.nombre = nombre;
  }

  getSalario() {
    return this.salario;
  }

  setSalario(salario) {
    this.salario = salario;
  }

  calcularPago() {
    return this.calculadora.calcularPago(this.salario); // Utiliza la calculadora de pago
  }
}

// Ejemplo de uso con la implementación por defecto de la calculadora de pago
const calculadoraPorDefecto = new CalculadoraDePagoPorDefecto();
const empleado1 = new Empleado("Juan", 50000, calculadoraPorDefecto);
console.log(empleado1.calcularPago()); // Imprime 42500

  