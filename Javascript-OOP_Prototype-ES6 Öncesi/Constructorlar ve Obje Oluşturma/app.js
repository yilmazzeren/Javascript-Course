
// Büyük harf ile başlaması önemli fonksiyonun
function Employee(){ // Yapısı fonksiyon yapmış olduk. Constructor

    this.name = "Yılmaz";
}

// Bu Fonksiyondan obje üretme

//const date = new Date(); Aslında burda new dediğimiz zaman Date isimli bir fonksiyon var ve bunun ıcınde this.name  gibi özellikler var.

const emp1 = new Employee(); // Employee'den bir tane obje oluşturmuş oluyorum.
const emp2 = new Employee();

// Burada aslında bır tane yapıcı fonksyion yazdık ve ondan objeler ürettik.
console.log(emp1,emp2);

// Yukarıda ki yöntem çokta mantıklı değil. Çünkü ürettiğimiz yapıcı fonksiyondan hangi obje üretirsek name özelliği yılmaz olacak. Buda mantıksız.

function Employee2(name,age,salary){
    this.name = name;
    this.age = age;
    this.salary = salary;

    this.showInfos = function(){
        console.log(this.name,this.age,this.salary);
    }
}

const emp3 = new Employee2("yılmaz",26,4000);
const emp4 = new Employee2("Mert",25,5000);

emp3.showInfos(); // yapıcı fonksiyonumuzun içinde bir function ürettik. Bunu da obje üzerinden çağırdık.
emp4.showInfos();

