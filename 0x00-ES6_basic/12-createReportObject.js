export default function createReportObject(employeesList) {
  this.allEmployees = () => {
    return { ...employeesList };
  };
  this.getNumberOfDepartments = () => {
    return Object.keys(employeesList).length;
  };
}
