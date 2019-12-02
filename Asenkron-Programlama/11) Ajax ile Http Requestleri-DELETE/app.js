class Requests{

    constructor(){
        this.xhr = new XMLHttpRequest();
        
    }

    
    // Get Request

    get(url,callback){

        this.xhr.open("GET",url); // Bağlantı açık

        this.xhr.onload = () =>{
            //console.log(this); xhr ı gosterır
            if(this.xhr.status===200){
                callback(null,this.xhr.responseText); // isteğimiz bitti
            }else{
                // Hata durumu
                callback("Herhangi bir hata oluştu",null);
            }
        }


        this.xhr.send();
    }

    post(url,data,callback){

        this.xhr.open("POST",url); // Bağlantı açık
        this.xhr.setRequestHeader("Content-type","application/json"); // Api'a Json verisi göndermek için

        /*201 Oluşturuldu
            İstek başarılı oldu ve bunun sonucunda yeni bir kaynak oluşturuldu. Genellikle POST veya PUT isteklerinden sonra gönderilen yanıt budur.
        */
        this.xhr.onload = () =>{
            if(this.xhr.status===201){
                // Başarılı durumu
                callback(null,this.xhr.responseText);
            }else{
                //Hata
                callback("Herhangi bir hata oluştu",null);
            }
        }

        // Veriyi string olarak göndermemiz gerkiyor. Çünkü veri tranferi yapıyoruz.

        this.xhr.send(JSON.stringify(data));

    }

    put(url,data,callback){

        this.xhr.open("PUT",url); // Bağlantı açık
        this.xhr.setRequestHeader("Content-type","application/json"); // Api'a Json verisi göndermek için

        /*201 Oluşturuldu
            İstek başarılı oldu ve bunun sonucunda yeni bir kaynak oluşturuldu. Genellikle POST veya PUT isteklerinden sonra gönderilen yanıt budur.
        */
        this.xhr.onload = () =>{
            if(this.xhr.status===200){
                // Başarılı durumu
                callback(null,this.xhr.responseText);
            }else{
                //Hata
                callback("Herhangi bir hata oluştu",null);
            }
        }

        // Veriyi string olarak göndermemiz gerkiyor. Çünkü veri tranferi yapıyoruz.

        this.xhr.send(JSON.stringify(data));

    }

    delete(url,callback){

        this.xhr.open("DELETE",url); // Bağlantı açık

        this.xhr.onload = () =>{
            //console.log(this); xhr ı gosterır
            if(this.xhr.status===200){
                callback(null,"Veri silme işlemi başarılı"); 
                console.log(this.xhr.responseText);// Boş obje geldiğini görmem için koydum.
                // isteğimiz bitti
            }else{
                // Hata durumu
                callback("Herhangi bir hata oluştu",null);
            }
        }


        this.xhr.send();
    }

    

}

 const request = new Requests();

//  /*
//   {
//     "userId": 1,
//     "id": 1,
//     "title": "quidem molestiae enim"
//   },
//  */

// DELETE ile idsi 10 olan sildik. Bize boşbir ojbe döner cevap.
 request.delete("https://jsonplaceholder.typicode.com/albums/10",function(err,response){
     if(err===null){
         console.log(response);
     }else{
         console.log(err);
     }
 })


 