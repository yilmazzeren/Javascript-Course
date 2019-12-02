// Callback Fonksiyonları



/*
    Aşağıda ki senaryoda öncelikle naber yazacak. Daha sonra 2 sanıye sonra Process 2 yazacak. Ve program çalışmaya başladıktan 3 sanıye sonra da Process 1 yazacak. Yani aslında burda bır asenkron işlem mevcut. Yani bu senaryoda işlemler birbirini beklemiyorlar.

*/

// function process1(){
//     setTimeout(function(){
//         console.log("Process 1")
//     },3000)
// }

// function process2(){
//     setTimeout(function(){
//         console.log("Process 2");
//     },2000)
// }

// process1();
// process2();
// console.log("naber");

// Peki process2 'nin process1 'den sonra çalışmasını istersek ?

/*
    aşağıdaki senaryoda 3 saniye sonra process 1 yazacak ve bundan 2 sanıye sonra da process 2 yazacak. Yani program toplamda min 5 saniye sürecek. Min dememde ki sebep belkı fonksiyon içindek işlemler de saniye alabılır yogunluga göre. 
    Bu nerde işime yarar? Mesela ben bir fonk bir yerden veri geldiği zaman çalıştırmak istiyorum.

*/
// function process1(callback){
//     setTimeout(function(){
//         console.log("Process 1")
//         callback();
//     },3000)
// }

// function process2(){
//     setTimeout(function(){
//         console.log("Process 2");
//     },2000)
// }

// process1(process2); // Process1'e process2'yi callback şeklinde göndermek gibi düşün.

const langs = ["Python","Javascript","C++"];

function addLang(lang,callback){
    setTimeout(function(){
        langs.push(lang); // Gönderdiğim lang'i yukarıda ki langs dizisine ekleme
        console.log("eklendi");
        callback();
    },2000)
}


function getAllLangs(){
    setTimeout(function(){
        langs.forEach(function(lang){
            console.log(lang)
        });
    },1000)
}

addLang("Java",getAllLangs);






