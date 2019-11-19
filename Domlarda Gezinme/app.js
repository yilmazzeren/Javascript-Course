let value;


const todoList = document.querySelector(".list-group");
//Class'ı list-group-item olan elemanın 2. child'ı çağırılır.
const todo = document.querySelector(".list-group-item:nth-child(2)");
const cardrow = document.querySelector(".card.row");


value = todoList;
value = todo;
value = cardrow;


// Child Nodes - Text Dahil gelir.

value = todoList.childNodes;
value = todoList.childNodes[0];

// Children - Element gelir.

value = todoList.children; // Yani 4 todo geldi burada.
value = todoList.children.length; // --> 4
value = todoList.children[todoList.children.length - 1]; // Burda son todo geldi. 
value = todoList.children[2].textContent = "Değişti"; // Text değiştirdik.

value = cardrow;
value = cardrow.children;
value = cardrow.children[2].children[1].textContent = "Burasıda Değişti";


value = todoList;
value = todoList.firstElementChild; // İlk elementi seçtik. Todo 1.
value = todoList.lastElementChild; // Son elemnti seçtik. Todo 4;
value = todoList.childElementCount; // Todo list eleman sayısı verir.



value = cardrow;
value = cardrow.parentElement; // Burada cardrow'un bir üstü seçilir. Anne gibi düşünülebilir.
value = cardrow.parentElement.parentElement; // Burada body seçildi.


// Element Kardeşleri

value = todo; // Todo 2
value = todo.previousElementSibling; // Bir önceki kardeşini seçer. --> Todo 2
value = todo.nextElementSibling; // Bir sonraski kardeşi seçer. --> Todo 3
value = todo.previousElementSibling.previousElementSibling; // null gelir. Çünkü bir önce kardeşi bulunmuyor.


console.log(value);