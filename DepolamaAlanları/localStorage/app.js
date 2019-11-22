// Local Storage --> silmezsek kalır

//SetItem --> değer atama

 localStorage.setItem("hareket","burpee"); // key hareket/  value burpee

 localStorage.setItem("tekrar",50);
// 50 değeride string olarak kaydedilir.


//Get Item --> Key'e göre değer alma

 const value = localStorage.getItem("tekrar");

console.log(typeof value); // string 


// Clear Local Storage 

localStorage.clear(); // localStorage temizleme.


// localStorage.setItem("hareket","burpee"); 

// localStorage.setItem("tekrar",50);

console.log(localStorage.getItem("sport"));// null değer gelir çünkü böyle bir değer girmedik.

if(localStorage.getItem("hareket")===null){
     console.log("sorguladıgınız verı bulunmuyor")
 }
 else{
     console.log("bulunuyor.")
 }



//Local Storage Array yazma

 const todos = ["todo 1","todo 2", "todo 3"]; // bu sekılde array olarak yazmaz. String olarak yazar.
 localStorage.setItem("todolar",todos);



 localStorage.setItem("todolar",JSON.stringify(todos)); // JSON ' ın bu özelliği sayesinde biz localstorage'a bır arrya ekleyebiliriz.



const array = localStorage.getItem("todolar"); // Bu şekilde hala string bir değer olarak görmekteyiz.
console.log(typeof array);



const array = JSON.parse(localStorage.getItem("todolar")); 
console.log(array);
 // Bu şekilde artık bir array elde ettik. JSON.parse burda arraya çevirdi.



// İnputa girilen değeri local Storage yazma

const form = document.getElementById("todo-form"); // form
const todoInput = document.getElementById("todo"); //input

form.addEventListener("submit",addTodo);

function addTodo(e){
    const value = todoInput.value;

    let todos;

    if(localStorage.getItem("todos")===null){ 
        todos=[];
    }
    else{
        todos=JSON.parse(localStorage.getItem("todos"));
    }

    todos.push(value); // value'yu arraya ekledık

    localStorage.setItem("todos",JSON.stringify(todos));
    e.prevenDefault();
}











