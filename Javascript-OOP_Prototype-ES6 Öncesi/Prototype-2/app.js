function Employee(name,age){
    this.name = name;
    this.age = age;
    this.showInfos = function(){
        console.log("İsim: "+this.name + " Yaş: "+this.age);
    }
}

const emp1 = new Employee("yılmaz",26);
const emp2 = new Employee("mert",25);

console.log(emp1);
console.log(emp2);

/*    fonksiyonumuzu constructorın içine yazdıgımızda 
      her yeni obje ürettiğimizde (emp1,emp2) belleğimizde showInfos fonksiyonundan bir tane daha oluyor
      çok sayıda üretceğimizde belleğimizde fazla bi doluluk olcak

      Ama biz metodumuzu prototype'ın İçine yazarsak belleğimizde sadece 1 tane yer kaplar. 
      Bütün objelerde aynı prototype'sahip oldugu için burdan miras alabilirler.

      Yani biz yukarda yazdıgımız shoInfos Fonksiyonunu prototype'ın ıcıne yazrsak bellekte fazladan yer kaplamayız.
*/

function Employee2(isim,yas){
    this.isim = isim;
    this.yas = yas;
}

Employee2.prototype.bilgileriGoster = function(){
    console.log("İsim: "+this.isim + " Yaş: "+this.yas);
}

const emp3 = new Employee2("ZEREN",26);
const emp4 = new Employee2("TOSUN",25);
console.log(emp3);
console.log(emp4);
