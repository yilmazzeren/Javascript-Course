// Ajax,callback, Http requests

class Requests{

    constructor(){
        this.xhr = new XMLHttpRequest();
        
    }

    
    // Get Request

    get(url,callback){

        this.xhr.open("GET",url); // Bağlantı açık

        this.xhr.onload = function(){
            //console.log(this); xhr ı gosterır
            if(this.status===200){
                callback(null,this.responseText); // isteğimiz bitti
            }else{
                // Hata durumu
                callback("Herhangi bir hata oluştu",null);
            }
        }


        this.xhr.send();
    }

}

const request = new Requests();
request.get("https://jsonplaceholder.typicode.com/albums",function(err,response){
    if(arr===null){
        // Başarılı
        console.log(response);
    }else{
        // Hata
        console.log(err);
    }
});

//ID=51 olan gelmesi için

// request.get("https://jsonplaceholder.typicode.com/albums/51",function(err,response){
//     if(arr===null){
//         // Başarılı
//         console.log(response);
//     }else{
//         // Hata
//         console.log(err);
//     }
// });

