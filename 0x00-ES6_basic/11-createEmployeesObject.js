export default function createEmployeesObject(departmentName, employees) {
  let employeeObject = {
    [departmentName]: [...employees],
  };
  return employeeObject;
}
