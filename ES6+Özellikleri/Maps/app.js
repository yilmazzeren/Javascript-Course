// Mapler - Key - Value  Her key'e karşılık bir değer bulunuyor
// key ve value burda herhangi bir veri tipi olabilir.

let myMap = new Map(); // Oluşturma

console.log(typeof myMap); // Object

const key1= "Yılmaz";
const key2= {a:10,b:20};
const key3= ()=>2;

// map'e atama SET
myMap.set(key1,"String değer");
myMap.set(key2,"Object Literal Değer");
myMap.set(key3,"Function Değer");

// map'den alma GET

console.log(myMap.get(key1)); // key1 'e karşılık string değer yazımız geldi.
console.log(myMap.get(key2)); // key2' e karşılıkObject Literak değer yazımız geldi.
console.log(myMap.get(key3));

console.log(myMap);

// Map Boyutu

console.log(myMap.size); // 3 değeri gelir.



const cities = new Map();
cities.set("Ankara",5);
cities.set("İstabul",15);
cities.set("İzmir",4);

// For Each ile mapde gezinme

cities.forEach(function(value,key){
    console.log(key,value);
});

// For of ile gezinme

for( let [key,value] of cities){ // Destructing yapısı gibi
    console.log(key,value);
}

//Maps Keys ==> Sadece keyleri alma

for(let key of cities.keys()){
    console.log(key);
}

// Maps Values ==> Sadece value alma

for (let value of cities.values()){
    console.log(value);
}



// Array'den MAp oluşturma

const array = [["key1","value1"],["key2","value2"]];

const lastMap = new Map(array);
//key1'e karşlık gelen değer value1,key2 value2 olur 
console.log(lastMap);


// Map'ten Array oluşturma

const sehirler = new Map();

sehirler.set("tokat",3);
sehirler.set("sivas",5);
sehirler.set("amasya",6);

const dizi = Array.from(sehirler);
console.log(dizi);

















































