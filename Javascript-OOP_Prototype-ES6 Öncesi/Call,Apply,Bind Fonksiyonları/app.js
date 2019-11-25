// Call, Apply , Bind

// İlk baş iki tane obje oluşturalım

const obj1 = {
    number1 : 10,
    number2 : 20
};

const obj2 = {
    number1 : 30,
    number2 : 40
};

// Br fonksiyon oluşturalım

function addNumbers(number3,number4){
    console.log(this.number1 +this.number2 + number3 + number4);
}

addNumbers(100,200); // çıktı NaN gelir. Çünkü burada this windowu gosterır oradada number1 ve number 2 yok. Global scope'dayız yani.

// call metodu ıle once obj1 e gore kullanalım
// ilk argüman olarak kesinlikle obje gondermeylıyz
addNumbers.call(obj1,100,200); // cıktı 330
// Bu işlemle addNumbers fonskiyonunda this.number1 ve thisnumber2 yerine obj deki number1 ve number2 gececek.

addNumbers.call(obj2,100,200);

// APPLY Kullanımı

addNumbers.apply(obj1,[100,200]);
addNumbers.apply(obj2,[100,200]);

//BIND Kullanımı Kopya fonksiyon üretir

function getNumberTotal(number3,number4){
    return this.number1+this.number2+number3+number4;
}

const copyFunc1 = getNumberTotal.bind(obj1);

console.log(copyFunc1(150,250));
