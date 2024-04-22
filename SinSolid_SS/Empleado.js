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

const empleado1 = new Empleado("Juan", 50000);
console.log(empleado1.calcularPago()); // Imprime 42500
