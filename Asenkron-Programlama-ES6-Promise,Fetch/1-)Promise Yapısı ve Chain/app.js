// // Promise objesi döndüren fonksiyon
// function getData(data){
//     // Promise objesi döndürme
//     return new Promise(function(resolve,reject){

//         setTimeout(function() {
           
//             resolve("Olumlu sonuç");

//         },10000);

//     });

    
// }

// console.log(getData("Merhaba")); // 10 saniye beklemezsen Promise açarsak pending durumda ldugunu görebiliriz. Eğer beklerse ve açarsak status değerinin resolved ve value degeının "Olumlu sonuç" oldugunu görebılırız.

/*---------------------------------------------------- */

// function getData(data){
//     // Promise objesi döndürme
//     return new Promise(function(resolve,reject){

//         setTimeout(function() {
           
//             reject("Olumsuz sonuç");

//         },5000);

//     });

    
// }

// console.log(getData("Merhaba")); // Status rejected value ise olumsuz sonuc olur.

/*---------------------------------------------------- */

// function getData(data){
//     // Promise objesi döndürme
//     return new Promise(function(resolve,reject){

//         setTimeout(function() {
           
//             resolve("Olumlu sonuç");

//         },5000);

//     }); 
// }

// getData("Merhaba").then(function(response){
//     console.log(response);
// })
// // 5saniye sonra olumlu sonuc yazar consoleda.

/*---------------------------------------------------- */

// function getData(data){
//     // Promise objesi döndürme
//     return new Promise(function(resolve,reject){

//         setTimeout(function() {
           
//             reject("Olumsuz sonuç");

//         },5000);

//     }); 
// }

// getData("Merhaba").catch(function(err){
//     console.log(err);
// })
// // 5saniye sonra olumsuz sonuc yazar consoleda.

/*---------------------------------------------------- */

// function getData(data){
//     // Promise objesi döndürme
//     return new Promise(function(resolve,reject){

//         setTimeout(function() {
           
//             if(typeof data==="string"){
//                 // Olumlu
//                 resolve(data);

//             }else{
//                 //Olumsuz
//                 reject(new Error("Lütfen string bir değer girin"));
//             }
           

//         },5000);

//     }); 
// }

// // getData(455).then(function(response){
// //     console.log("Gelen değer: " + response);
// // }).catch(function(err){
// //     console.error(err);
// // })

// // Arrow func ile yazımı

// getData(455)
// .then(response => console.log("Gelen değer: " + response))
// .catch(err => console.error(err));


/*-------------------------------------------------------- */

function addTwo(number){
    return new Promise(function(resolve,reject){
        setTimeout(() => {
            
            if(typeof number==="number"){

                resolve(number+2);
            }else{
                reject(new Error("Lütfen bir sayı girin"));
            }

        },3000);
    });
}

addTwo(10)
.then(response => {
    console.log(response);
    return response + 2;
}).then(function(response2){
    console.log(response2);
})
.catch(err => console.error(err));
// 1 tane catch ancak bırden cok then kullanabılırız.





