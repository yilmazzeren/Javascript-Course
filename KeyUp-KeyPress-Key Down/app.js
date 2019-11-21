//Klavye Eventleri
const header = document.querySelector(".card-header");
const todoInput = document.querySelector("#todo");

todoInput.addEventListener("keyup",changeText);

function changeText(e){
    header.textContent = e.target.value;
    // target nerede oldugumuzu gösterir. Value ıse ınputtakı tum degerlerı alır. Burada yazdıgımız sey card-header'ı değiştirir
    // console.log(e.target.value);
}
//keypress --> Sadece harf ve sayılar.
document.addEventListener("keypress",run);

function run(e){
    // console.log(e.which);
    console.log(e.key);
}

//keydown --> klavyede ki tüm tuşlar
document.addEventListener("keydown",run);

function run(e){
    // console.log(e.which);
    console.log(e.key);
}

//keyup tuşu bıraktıgımız anda

document.addEventListener("keyup",run);

function run(e){
    // console.log(e.which);
    console.log(e.key);
}


