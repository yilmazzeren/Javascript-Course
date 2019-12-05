
// ES6 ile gelen promisleri daha efektif şekilde kullanmak için geliştirilmiş.

async function test(data) {
    // async aslında bir fonksiyonun MUTLAKA bir promise dönecğini söyler.
    // Burada otamik olarak javascript datayı resolved a koyar.
    return data;

    /* 
    Aslında return data; dediğimizde js bu şekilde algılar.

    return new Promise((resolve,reject)=>{
        resolve(data);
    });
    */

   
}

test("merhaba").then(response=> console.log(response));


//--------------------------------------------------- 

async function deneme(data) {

    let promise = new Promise((resolve,reject)=>{

        setTimeout(()=>{

            resolve(data);
        },5000);
    });

    // Await ise bir promise'in resolve etmesini yani olumlu dönüş yapmasını sağlayan anahtar kelimedir. Await sadece async olan fonk içinde çalışır.
    
    let response = await promise; // Burada promise objemiz 5 saniye sonra resolve edecek. Burası ise 5 saniye bekleyecek ve alt satıra geçmez.
    
    console.log(response);
    console.log("naber");
}

deneme("naber 5 sanıye bekle benı");





async function testData (data) {

    let promise = new Promise((resolve,reject)=> {

        setTimeout(() => {
            if(typeof data==="string") {
                resolve(data);
            }else{
                reject(new Error("Lütfen string gir."))
            }
        },5000);

    });

    const response = await promise; // 5 sn sonra çalışır sonra aşşa iner

    return response; // resolve olmussa response olarak donelım


}


testData("Türkiye").then(data => console.log(data))
.catch(err=> console.error(err));


//-----------------



async function getCurrency (url) {
    const response = await fetch(url); // Response objesi


    const data = await response.json(); // Resolved ettiği zaman data artık buraada json objesi olur

    return data; // Return ile dönersek promise şeklinde döneriz. Bu sayede then ile alabiliriz.
}

getCurrency("https://api.exchangeratesapi.io/latest")
.then(response=> console.log(response));