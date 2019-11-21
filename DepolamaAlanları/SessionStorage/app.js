/*
 Session Storage mantığı Application kısmında key ve value degerlerını bır seyler eklerız. Fakat burada degerler bız sayfayı kapattıgımızda ya da yeniledğimizde gider. Local storage de ise kayıtlı tutulur. Bu yüzden Local daha kullanışlıdır.
*/


// İnputlar

const key = document.querySelector("#key");
const valuee = document.querySelector("#value");
const delKey = document.querySelector("#delKey");

// Buttonlar

const add = document.querySelector("#add");
const del = document.querySelector("#del");
const clear = document.querySelector("#clear");


add.addEventListener("click",addItem);
del.addEventListener("click",deleteItem);
clear.addEventListener("click",clearItems);

function addItem(e){
    sessionStorage.setItem(key.value,valuee.value);
    // Ekle butonuna bastıgımızda inputlara girilen degerler Key ve Value kısmına eklenir.
};

function deleteItem(e){
    sessionStorage.removeItem(delKey.value);
    // Sil butonuna bastıgımızda inputlara girilen degerler Key ve Value kısmından silinir.
};

function clearItems(e){
    sessionStorage.clear();
    //Hepsini sil buttonuna bastığımızda tüm herşey silinir.
};