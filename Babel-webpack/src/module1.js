// module.exports.test1 = function test1() {
//     console.log("Test1");
// }

// // Bunu export ettiğimiz için başka dosyalarda bunu import ederek kullanabiliriz.

// module.exports.test2 = function test2() {
//     console.log("test2");
// }

// İki tane fonk oluşturmak istersek module.exports.key vermemız laızm bu sekılde bıze bır obje doner.
/*
    {test1: ƒ, test2: ƒ}
    test1: ƒ test1()
    test2: ƒ test2()
    __proto__: Object
*/

// // Yukarıda ki kullanım daha gzel bir şekilde;

// module.exports = {
//     name:"Yılmaz",
//     test1 : function () {
//         console.log("test1");
//     },
//     test2: function () {
//         console.log("test2");
//     },

//     person : {
//         name:"Yılmaz",
//         mail: "yilmazzeren93@gmail.com"
//     }
// }





// ES6 Moduls



// Biz bir tane değişkeni export etmek istersek;

export const name = "Yılmaz"; // Yani export ile bunu dış dünyaya aktar gibi düşünebiliriz. Bunlar obje olarak aktarılır.

export function denemee () {
    console.log("Test Fonksiyonu");
}

export class Person2 {
    static Deneme () {
        console.log("Person testi");
    }
}

export const employee = {
    name: "Yılmaz",
    salary : 4000
}


// Mesela bir değişken oluşturduk ama sonradan export etmek istiyoruz. Çünkü bize lazım olabilir. O zaman ise

const denemeVal ="Deneme değeri";
export default denemeVal;















