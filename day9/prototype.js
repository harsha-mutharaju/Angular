
    class Student {
        constructor(roll, name) {
            this.roll = roll;
            this.name = name;
        }
    }
    Student.prototype.clgName = 'Eureka';
    Student.prototype.clgAdd = 'knox ville';

    let std1 = new Student(101, 'Rohit');
    let std2 = new Student(102, 'yashwant');
    console.log(std1);
    console.log(std2);

    console.log(std1.roll, std1.name, std1.clgName);
    console.log(std2.roll, std2.name, std2.clgName);

    std1.clgName = 'Eureka Infotech'; 

    console.log(std1.roll, std1.name, std1.clgName);
    console.log(std2.roll, std2.name, std2.clgName);

    // how to print prototype prop even if a direct prop is present with the same name
    console.log(std1.__proto__.clgName)
