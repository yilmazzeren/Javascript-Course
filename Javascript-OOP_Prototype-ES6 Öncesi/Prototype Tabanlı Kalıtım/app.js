function Person(name,age) {
    this.name = name;
    this.age = age;

}
Person.prototype.ShowInfos = function(){
    console.log("isim: " + this.name + "yaş: " + this.age);
}

// const person = new Person("Yılmaz",26);
// console.log(person);

function Employee(name,age,salary){
    // this.name = name;
    // this.age = age;
    Person.call(this,name,age); // Call sayesınde tek satırda yaptık. Bu satır aslında Persondakı name ve age ı getırdı.
    this.salary = salary;
}
// Employee Personun prototype daki metodlarını miras alsın

Employee.prototype = Object.create(Person.prototype);

const emp = new Employee("Yılmaz",26,4000); // Employee constructordan bir tane obje oluşturduk.

console.log(emp);

emp.ShowInfos(); // Person'dan miras aldıgımızı gördük burada. Ama burda salary yazamadık.
console.log(emp.toString()); // Object'den aldıgı miras
Employee.prototype.toString = function(){
    console.log("mployee toStringi oldu artık.");
}
emp.toString(); // Artık Employee'nin bir protosu oldu burda

// Şimde de salary ekleyememiştik onu ekleyelim. Aslında bburda ben Person daki showInfosu kullanmak ıstemıyorum kendı fonks kullanmak istiyorum dememız gerekıyor.

// Overriding - İptal etme
Employee.prototype.showInfos = function() {
    console.log("İsim " + this.name + "Yaş : " + this.age + "Maaş : " + this.salary);
}
// Yani artık miras almadı kendı ıcındekı protosunda var ordan aldı.
emp.showInfos();
