// İnternet üzerinde rest Api dan veri alma

document.getElementById("change").addEventListener("click",change); // Button seçme

function change(){

    const xhr = new XMLHttpRequest();

    xhr.open("GET","https://api.exchangeratesapi.io/latest");// Burada internet üzerinden bir istekte bulunacağımız için o adresi aldık.

    xhr.onload = function(){
        if(this.status===200){
            const response = JSON.parse(this.responseText); // obje olarak aldık
            
            //console.log(response.rates.TRY); //rates içinde try var onu alalım

            const rate = response.rates.TRY; // number
            const amount = Number(document.getElementById("amount").value); // string değer number'a çevirelim
            //console.log(typeof amount);

            document.getElementById("tl").value = amount*rate;
        }
    }


    xhr.send(); // requesti gönderme
}