// Setler -- Kümeler

const myset = new Set();

myset.add(100);
myset.add(100); // eklemez ama hata da vermez
myset.add(3.14);
myset.add("Yılmaz");
myset.add(true);
myset.add([1,2,3]);
myset.add({a:1,b:2});

const myset2 = new Set([100,3.14,"Yılmaz"]);

console.log(myset);
console.log(myset2);

// Size
console.log(myset.size); // eleman sayısını verir

// Delete

myset.delete("Yılmaz");
console.log(myset);

// Has --> değer küme de var mı ?

console.log(myset.has("Yılmaz"));
console.log(myset.has([1,2,3])); // Farklı objeler oldugu ıcın false dondurur.

// For Each

myset.forEach(function(value){
    console.log(value);
})

// For Of --> forEach ileaynı

for(let value of myset){
    console.log(value);
}

// Set'lerden Array oluşturma
const array = Array.from(myset);

console.log(array);

















