// Eski kalıtım işlemi

// function Person (name,age){
//     this.name = name;
//     this.age = age;

// }

// Person.prototype.showInfos = function(){
//     console.log("İsim: " + this.name + " Yaş: " +this.age);
// }

// function Employee(name,age,salary){
//     Person.call(this,name,age);
//     this.salary = salary;
// }

// Employee.prototype = Object.create(Person.prototype);
// Employee.prototype.toString = function(){
//     console.log("Employee fonksiyonu toString");
// }

// Employee.prototype.showInfos = function(){
//     console.log("İsim: " + this.name + " Yaş: " +this.age + " Maaş: " + this.salary);
// }

// const emp = new Employee("yılmaz",26,4000);



class Person { // SuperClass , Baseclass
    constructor (name,age){
        this.name = name;
        this.age = age;
    }

    showInfos(){
        console.log("İsim: " + this.name + " Yaş: " +this.age );
    }
}

// extends ile Person daki tüm metodlar Employee gelmiş olur.

class Employee extends Person { // DerivedClass ,SubClass , ChildClass
    constructor(name,age,salary) {
        super(name,age); // Person'un constructor'ını kullanmıs oluyoruz
        // Aslında eskı yontemdekı Person.call ın aynısı
        this.salary = salary;
    }
    // Kendi showInfos yazmak ıstersek
    showInfos(){ // Overriding
        console.log("İsim: " + this.name + " Yaş: " +this.age + " Maaş: " + this.salary);
    }
    raiseSalary(amount) {
        this.salary+=amount;
    }

}

const emp = new Employee("Yılmaz",26,4000);
emp.showInfos();
emp.raiseSalary(500);
emp.showInfos();