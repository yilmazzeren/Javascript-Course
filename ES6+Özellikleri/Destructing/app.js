// Destructing


// Eski yöntem
let number1,number2;

arr = [100,200,300,400];

number1=arr[0];
number2=arr[1];


// Destructing

[number3,number4] = arr; // sırası ile 0. ve 1. index de ki değeri alırlar. 100/200
console.log(number1,number2,number3,number4);


// obje destructing

const numbers = {
    a:10,
    b:20,
    c:30,
    d:40,
    e:50
}    
const {a,b,c} = numbers;
console.log(a,b,c);

// Function destruction

const getLangs = () => ["Python","Java","C++"];

const [lang1,lang2,lang3] = getLangs();

console.log(lang1,lang2,lang3);

// obje

const person = {
    name:"Yılmaz ZEREN",
    year:1993,
    salary: 4000,
    showInfos : () =>console.log("Bilgiler Gösteriliyor")
}

const{name:isim,year:yil,salary:maas,showInfos:bilgileriGoster}=person;

console.log(isim,yil,maas);











