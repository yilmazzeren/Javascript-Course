// PROTOTYPE

/* Oluşturulan bir objenin özellikleri vardır. Bu özelliklerdeb biriside prototype'dır.
Aslında prototype'da bir objedir. Bir constructor yazdığımızda prototype otomatik olarak gelir.
*/

const obje = new Object(); // En temel object'dir. Bunu yazdırırsak içi boş ama proto objesi bulunur.
obje.name = "Yılmaz"; // Objeye name özelliği ekledik
console.log(obje);

const obje2 = new Object(); // Başka bir obje ürettiğimiz zamanda prototype'da aynı özellikleri alır.
console.log(obje2);



function Employee (name,age){
    this.name = name;
    this.age = age;

    this.showInfos = function(){
        console.log("Bilgiler Gösteriliyor..");
    };
    this.toString = function(){
        console.log("Bu bir Employee Objesi");
    }
}

const emp = new Employee("Yılmaz",26);
console.log(emp);

// Örneğin

console.log(emp.toString);

/*
    Mesela burada toString metodu zaten proto onjesi içinde tanımlı bır fonk. Ama bız bunu kendı constructor'ımızda yazdıgımız ıcın bu isimde. Js bunu bize en temel objeden miras almıyor da direk kendi constructorımızdan getırıyor.
*/