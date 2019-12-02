// Set Timeout

setTimeout(function(){     // 2sn sonra naber gelir.
    console.log("naber");
},2000)


// Set Interval 
// 1 sn aralıklar ile bu fonk ıcınde ki komutu çalıştırır.

    let i = 0;
    let value=setInterval(() => {
        i++;
        console.log("sayı",i);
    }, 1000);



// Clear Interval (durdurmak için)

document.getElementById("btn").addEventListener("click",function(){
    clearInterval(value);
});