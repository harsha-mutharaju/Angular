// 8. declare array of employees & groupBy employees-name
//     sample output: {
// 		'sanjay' : [{},{}],
// 		'alok' : [{}]
// 	}

let employees = [
    { eId: 101, name: 'sanjay', sal: 5000, gender: 'male' },
    { eId: 104, name: 'sanjay', sal: 8000, gender: 'female' },
    { eId: 103, name: 'sanjay', sal: 7000, gender: 'male' },
    { eId: 102, name: 'sita', sal: 9000, gender: 'female' },
    { eId: 105, name: 'deepak', sal: 8000, gender: 'male' }
  ];


  let newGroup = employees.reduce((acc , emp) => {
    if(!acc[emp.name]){
        acc[emp.name] = [];
    }
    acc[emp.name].push(emp);
    return acc;
  },{});
  console.log(newGroup);