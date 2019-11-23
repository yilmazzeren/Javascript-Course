// Spread Operator

const langs = ["Python","C++","Java","Php"];

console.log(langs[0],langs[1],langs[2],langs[3]); // ayrı ayrı yazma eski yöntem ile

console.log(...langs); // bu gösterim yukarda ki ile aynı


const langs2 = ["javascript","C#",...langs];

console.log(langs2);

const numbers = [1,2,3,4,5,6,7,8,9];

const [a,b] = numbers; // 1 ve 2 değerleri geldi
const [c,d,...numbers2] = numbers;

console.log(a,b);
console.log(...numbers2); // 3 den itibaren artık numbers2 nin içine gelmiş oldu.

const addNumaralar = (a,b,c) => console.log(a+b+c); // fonksiyon oluşturuldu.

const numaralar = [100,200,300];

addNumaralar(...numaralar); // fonksiyonun içine numaralar array'i aktarıldı.


