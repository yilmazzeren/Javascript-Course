const person = {
    name:"yılmaz",
    age: 26,
    salary: 4000
};

const langs = ["Python","Javascript","Php","c#"];
const name = "Yılmaz";

// For in 
// Object üzerinde

for(let prop in person) {
    //console.log(prop);// burada sadece name,age,salary gelir
    console.log(prop,person[prop]); // değerlerde gelir
}

// Arraylerde

for(let index in langs) {
    console.log(index,langs[index]); // index değerleri karşısında langs içindekiler de gelir.
}

//for of
// Object

// for (let valur of person) {
//     console.log(value);
// } // for of da obje üzerinde olmaz

for (let value of langs) {
    console.log(value); // langs deki değerler gelir
}

// String

for (let character of name) {
    console.log(character); // yılmaz harfleri tek tek gelir
}