// const person = {
//     age:25,

//     tellAge : function(){
//         // this-- person
//         console.log(this);
//         console.log(this.age);
//     }

//     // Burada ki this window objesini gösterir.
// }

// person.tellAge();


// ---------------------------------------------------------

// const person = {
//     age:25,

//     tellAge : function(){
//         // this-- person
//         console.log(this);
//         console.log(this.age);
//     }.bind(this)

//     // Bind this dedğimiz zaman artık person this kelimesi bizim person objemizi değil window objesini gösterir. Bu yüzden çıktı window objesi ve undefined olur.
// }

// person.tellAge();

// --------------------------------------------------
// Arrow func ile yazılımda yine aşşağıdaki this person objesibi göstermez bind ile yaptığımız gibi window objesini gösterir.

const person = {
    age:25,

    tellAge : () => {
        console.log(this);
        console.log(this.age);
    }
}

person.tellAge();