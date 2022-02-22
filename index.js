// Write your solution in this file!
let employee = {name: "Kane", streetAddress: "13 Uppermiddle Street"}

function updateEmployeeWithKeyAndValue(employee, key, value) {
    let updatedEmployee = {...employee};
    updatedEmployee[key] = value;
    return updatedEmployee;
}

function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
    employee[key] = value;
    return employee; 
}

function deleteFromEmployeeByKey(employee, key) {
    let cloneEmpoyee = {...employee};
    delete cloneEmpoyee[key];
    return cloneEmpoyee;
}

function destructivelyDeleteFromEmployeeByKey(employee, key) {
    delete employee[key];
    return employee;
}


