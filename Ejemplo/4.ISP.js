class Product {
    constructor() { /* */ }

    getDetails() { /* */ }
    saveToDb() {/* */ }
    displayInFrontEnd() { /* */ }
}

// DigitalProduct no necesita el método saveToDb(),
// sin embargo, lo hereda sin poder evitarlo
// Se viola el principio de segregación de la interfaz

class DigitalProduct extends Product{
    // Se hereda el método innecesario saveToDb()}
}

// ---- //
// Refactorizando siguiendo este principio

class Product {
    constructor() { /* */ }

    getDetails() { /* */ }
    displayInFrontEnd() { /* */ }
}

class PhysicalProduct extends Product {
    constructor() {
        super()
    }
    saveToDb() { /* */ }
}

class DigitalProduct extends Product{
    // No se hereda el método innecesario saveToDb()
}