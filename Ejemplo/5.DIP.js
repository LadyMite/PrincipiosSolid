class MySqlConnection {
    connect() { /* */ }
}

class PasswordReminder {
    constructor() {
        this.dbConnection = new MySQLConnection();
    }
}

// Refactorizando de acuerdo al principio de inversión de dependencia
class MySqlConnection {
    connect() { /* */ }
}
class PostgreSqlConnection {
    connect() { /* */ }
}

class PasswordReminder {
    constructor(connection) {
        this.dbConnection = connection
    }
}