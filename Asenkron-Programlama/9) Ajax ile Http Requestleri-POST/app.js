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

}

 const request = new Requests();

 /*
  {
    "userId": 1,
    "id": 1,
    "title": "quidem molestiae enim"
  },
 */

 request.post("https://jsonplaceholder.typicode.com/albums",{userId:2,title:"Yılmaz"},function(err,response){
     if(err===null){
         console.log(response);
     }else{
         console.log(err);
     }
 })

