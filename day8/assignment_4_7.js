//7. add Dept info for each employee
// employees = [{eId: 101, name: "sanjay", sal: 5000, gender: "male" },
//     { eId: 104, name: "reena", sal: 8000, gender: "female" }]
// departments = [{ eId: 101, dept: "sales" },
//     { eId: 104, dept: "marketing" }]

let baseEmps = [
    { eId: 101, name: "sanjay", sal: 5000, gender: "male" },
    { eId: 104, name: "reena", sal: 8000, gender: "female" }
  ];
  
  let departments = [
    { eId: 101, dept: "sales" },
    { eId: 104, dept: "marketing" }
  ];

  let dept = new Map(departments.map(d=> [d.eId,d.dept]));

  let updatedEmployees = baseEmps.map(emp => ({...emp , dept: dept.get(emp.eId) }));

  console.log(updatedEmployees);