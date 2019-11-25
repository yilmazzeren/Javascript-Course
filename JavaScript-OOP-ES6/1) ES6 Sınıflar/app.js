// Syntactic Sugar

//Eski yöntem ile

// function Employee(name,age,salary){
//     this.name = name;
//     this.age = age;
//     this.salary=salary;
// }

// Employee.prototype.showInfos = function (){
//     console.log("İsim: " + this.name + " Yaş: " + this.age + " Maaş: " + this.salary);
// }

// const emp = new Employee("yılmaz",25,4000);
// console.log(emp);

//YENİ YÖNTEM

class Employee {

    constructor(name,age,salary){
        this.name = name;
        this.age = age;
        this.salary = salary;
    }
    showInfos(){
        console.log("İsim: " + this.name + " Yaş: " + this.age + " Maaş: " + this.salary);
    }

}

const emp = new Employee("yılmaz",26,4000);
//console.log(emp);

emp.showInfos();
