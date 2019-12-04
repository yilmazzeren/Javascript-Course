
// Fetch api ajax yerine kullanabileceğimiz alternatif bir asenkron veri alma ve veri verme 

// function getTextFile(){

//     fetch("example.txt")
//     .then(function(response){
//         console.log(response);
//     }).catch(function(err){
//         console.log(err);
//     })

// }

// getTextFile();

// Yukarıda ki kodda fetch api bana bir tane Response objesi verir. Buranın içinde text ve json fonksiyonları var. Response.text ile alabiliriz.



// İlk başta fetch apidan bize bir response geldi.

//-------Text----------
function getTextFile(){

    fetch("example.txt")

    .then(function(response){
         return response.text() // response'un text özelliğini döndürdük. Then içinde return yaptıgımız ıcın yine bu bize promise olarak gelecek.
    .then(function(data){
        console.log(data); // example txt almış olduk
    });
        
    }).catch(function(err){
        console.log(err);
    })

}


getTextFile();

//-------Json------
function getJsonFile () {

    fetch("example.json")

    .then(function(response1){
        return response1.json()
    .then(function(data1){
        console.log(data1);
    });    
    }).catch(function(err){
        console.log(err);
    })
}

getJsonFile();


// ---------dışarda alma-------

function getExternalApi () {

    fetch("https://api.exchangeratesapi.io/latest")
    .then(function(response3){
        return response3.json()
    .then(function(data3){
        console.log(data3.rates.TRY);
    });
    }).catch(function(err){
        console.log(err);
    })
}

getExternalApi();
