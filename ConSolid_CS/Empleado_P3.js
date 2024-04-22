//Principio de Sustitución de Liskov (L)
//los objetos de una superclase deben ser reemplazables por objetos de una subclase 
//sin afectar la corrección del programa

// Clase base Empleado
class Empleado {
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

  calcularPago() {
    return this.salario * 0.85; // Suponiendo un descuento del 15%
  }
}

class EmpleadoConBono extends Empleado {
  constructor(nombre, salario, bono) {
    super(nombre, salario);
    this.bono = bono;
  }

  getBono() {
    return this.bono;
  }

  setBono(bono) {
    this.bono = bono;
  }

  calcularPago() {
    return super.calcularPago() + this.bono; // Incluye el bono en el cálculo
  }
}

// Ejemplo de uso
const empleado1 = new EmpleadoConBono("Juan", 50000, 10000);
console.log(empleado1.calcularPago()); // Imprime 52500 (50000 * 0.85 + 10000)
