// Http status
// 200 : OK 
// 403 : Forbidden
// 404 : Not Found
// 505 : Internal Server Error

//   Ready State
// Holds the status of the XMLHttpRequest.
// 0: request not initialized
// 1: server connection established
// 2: request received
// 3: processing request
// 4: request finished and response is ready

// Example txt dosyasından text ı alıp div içine yazma. Sayfa yenilenmeden..

// Buttonu seçme

document.getElementById("btn").addEventListener("click",function(){

    // XMLHttpRequest

    const xhr = new XMLHttpRequest();
    //console.log(xhr);

    




    // Eski yöntem
    // xhr.onreadystatechange = function(){
    //     //console.log(this.readyState);
    //     /*
    //         Xhr içindeki readyState değiştikçe bu fonk çalışır.
    //         this burada xhr gösterir. 
    //         çıktı;
    //         1 --> Server ile bağlantı sağlandı
    //         2 --> isteğimiz işleme alındı
    //         3 --> isteğimiz alındı ve işlenmeye başladı
    //         4 --> İsteğimiz bitti ve response elimzi geldi.
    //     */
    //    //console.log(this.status); çıktısı 0 ve 200 olur.

    //     if (this.status == 200 && this.readyState == 4){
    //         // Yukarıda ki koşul response hazır demek
    //         console.log(this.responseText);
    //         // responseText xhr içinde blunan bir özellik text almaya yarar.
    //     }
    // }


    // Response'miz hazır oldugunda çalışacak yeni yöntem
    xhr.onload = function(){
        //console.log(this.readyState); // 4 gelir.
        if(this.status ===200){
            const bilgi = this.responseText;
            const div  = document.getElementById("ajax");
            div.textContent=bilgi;
        }
    }

    xhr.onprogress = function () { 
        // readyStateimiz 3 oldugunda çalışacak fonks.
        console.log("Process İşleniyor.", this.readyState) ;
    }

    // Bağlantı sağlamamız gerekiyor. open ile.
    // Hangi request yapacagımızı belırtmelıyız. Burada GET request yapalım. Yani exapmle.txt den bilgimizi alalım.

    xhr.open("GET","example.txt",true);
    
    // Burada ilke değer requestin ne oldugu.
    // İkinci değer nereden aldıgımız.
    // Üçüncü değer asenkron mu senkron mu ? Eger true yazarsak asenkron

    // Artık requseti send ile gönderelim.
    // Sadece deger almak ıstedıgımız ıcın send ın ıcıne bır sey yazmıyoruz
    xhr.send();
 
});