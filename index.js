// Write your solution in this file!
const employee ={
    name:"Ryan",
    streetAddress:"Nairobi",
};
function updateEmployeeWithKeyAndValue(employee, key, value){
    const employee2 = {...employee};
    employee2[key] = value;
    return employee2;
}
function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value){
    const employee3 = employee;
    employee3[key] =  value;
    return employee3;
}
function deleteFromEmployeeByKey(employee2, key) {
      const employee3 = { ...employee2 };
    delete employee3[key];
    return employee3;
}
function destructivelyDeleteFromEmployeeByKey(employee, key) {
    delete employee[key];
    return employee;
}