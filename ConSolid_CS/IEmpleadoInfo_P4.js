//Principio de Segregación de Interfaz (ISP)
//ninguna clase debería ser forzada a implementar interfaces o métodos que no va a utilizar

// Interfaces segregadas para empleados
// Interfaz para la información del empleado
class EmpleadoInfo {
  constructor(nombre, salario) {
    this.nombre = nombre;
    this.salario = salario;
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
}

// Interfaz para el cálculo del pago
class CalculadoraDePago {
  static calcularPago(salario) {
    return salario * 0.85; // Suponiendo un descuento del 15%
  }
}

// Implementación de las interfaces
class Empleado extends EmpleadoInfo {
  calcularPago() {
    return CalculadoraDePago.calcularPago(this.salario);
  }
}

// Ejemplo de uso
const empleado1 = new Empleado("Juan", 50000);
console.log(empleado1.calcularPago()); // Imprime 42500
