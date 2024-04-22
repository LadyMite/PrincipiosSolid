function calculateSalary(employee) {
    let salary = employee.hoursWorked * employee.hourlyRate;
    let report = 'xd';
    console.log(report);
    return salary;
}

//SRP
function calculateSalary(employee) {
    return employee.hoursWorked * employee.hourlyRate;
}

function generateReport(employee, salary) {
    let report = 'XD';
    console.log(report);
}
