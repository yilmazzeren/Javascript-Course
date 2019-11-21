//input eventleri

const filter = document.getElementById("filter");

document.addEventListener("DOMContentLoaded",load);//sayfadaki tüm document yüklendikten sonra eventimiz çalışır.

function load(e){
    console.log("Sayfa Yüklendi");
}

//Focus eventi bi alana focus oldugumuzda çalışır

filter.addEventListener("focus",focusRun);

function focusRun(e){
    console.log(e.type);
}

//blur eventi. odaktan çıkınca çalışır

filter.addEventListener("blur",blurRun);

function blurRun(e){
    console.log(e.type);
}

//Paste eventi. herhangi bir yerden yazı vs yapıştırıldığında çalışır.


filter.addEventListener("paste",pasteRun);

function pasteRun(e){
    console.log(e.type);
}

//Copy Eventi. sayfadan bir yazı kopyalandığında çalışır

filter.addEventListener("copy",copyRun);

function copyRun(e){
    console.log(e.type);

}

//Cut Eventi yazı kesildiğinde çalışır.
filter.addEventListener("cut",cutRun);

function cutRun(e){
    console.log(e.type);
}

//Select Eventi. yazı seçildiğinde çalışır
filter.addEventListener("select",selectRun);

function selectRun(e){
    console.log(e.target.value); //input içine yazılan text'i seçtiğimzde çalışır.
    console.log(e.type);
}