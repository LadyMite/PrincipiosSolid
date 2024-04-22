//Principio abierto-cerrado (OCP)
//las clases y módulos deben diseñarse de manera que se puedan extender para agregar nuevas funcionalidades 
//sin necesidad de modificar su código existente. 

// Interfaz para empleados
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

  // Método abstracto para calcular el pago
  calcularPago() {
    throw new Error("Método calcularPago() debe ser implementado en las clases hijas.");
  }
}

// Clase hija para empleados fijos
class EmpleadoFijo extends Empleado {
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
    return this.salario * 0.85 + this.bono;
  }
}

// Clase hija para empleados por hora
class EmpleadoPorHora extends Empleado {
  constructor(nombre, salario, horasTrabajadas) {
    super(nombre, salario);
    this.horasTrabajadas = horasTrabajadas;
  }

  getHorasTrabajadas() {
    return this.horasTrabajadas;
  }

  setHorasTrabajadas(horasTrabajadas) {
    this.horasTrabajadas = horasTrabajadas;
  }

  calcularPago() {
    return this.salario * this.horasTrabajadas;
  }
}

const empleadoFijo1 = new EmpleadoFijo("Juan", 50000, 10000);
const pagoEmpleadoFijo1 = empleadoFijo1.calcularPago();
console.log(pagoEmpleadoFijo1);

const empleadoPorHora1 = new EmpleadoPorHora("María", 15, 160);
const pagoEmpleadoPorHora1 = empleadoPorHora1.calcularPago();
console.log(pagoEmpleadoPorHora1);
