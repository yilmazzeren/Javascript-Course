// Object.create() --> Bir obje oluştururken eğer prototype'ını baska bır objeden almak ıstıyorsak bu yontem kullanılır.

const obj = {
    test1: function(){
        console.log("test 1");
    },
    test2: function(){
        console.log("test 2");
    }
}

//console.log(obj);

const emp = Object.create(obj);



/* 
    Yukarıda ki işlemde aslında yaptıgımız emp isimi bir obje oluşturduk ve bu obje prototype ozellıgını obj'den aldı. Yani aslında bizim emp objemizin içinde şu anda obj objesının protosunu alıyor. Bu proto da test1 ve test2 fonskıyonu var onları da alıyor. Hatta obj objesı standart objeden proto ozellıgını alır emp bunu da alır.
*/

emp.test1();
emp.test2();

emp.name = "Yılmaz";
emp.age = 26;
console.log(emp);

// Daha kompleks bir yapıda deneyelim.

function Person (){ // Boş bir Person constructor oluşturduk.
    
}
// Daha sonra Person'ın prototype'ine deneme1 ve deneme2 isimi fonksiyon ekleyelım.
Person.prototype.deneme1 = function(){ 
    console.log("deneme1");
}
Person.prototype.deneme2 = function(){
    console.log("deneme2");
}

// Şimdide Calisanlar isimli constructor oluşturalım.

function Calisanlar(name,age) {
    this.name = name;
    this.age = age;
}
// Şimdi Calisanlar constructor'ı proto özelliğini Person constructor'dan alsın diyelim.
Calisanlar.prototype = Object.create(Person.prototype);

// Calisanlardan bir obje üretelim.
const calis = new Calisanlar("yılmaz",26);

calis.deneme1();
console.log(calis);


































