const filterInput = document.getElementById("filter");

const todoForm = document.getElementById("todo-form");

filterInput.addEventListener("focus",function(e){
    console.log(e);
    console.log(e.target); // Focus olayı gerçekleştiğinde nerede oldugunu gösterir.
    console.log(e.target.placeholder); // Focus olayı gerçekleştiğinde placeholder da ne yazıdıgını getırır.
    console.log(e.target.className); // Focus olayı gerçekleştiğinde class'ı getirir.

    //console.log("asd");
});

todoForm.addEventListener("submit",submitForm);

function submitForm(e){
    console.log("Submit eventi");

    e.preventDefault(); // Burada aslında buttona bastıgımızda sayfanın yenılenmesını engellıyoruz. Aynı sayfa da kalmasını saglıyoruz.
}