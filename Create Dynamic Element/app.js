const newlink = document.createElement("a"); // a elementi oluşturulur.
const cardbody = document.getElementsByClassName("card-body")[1]; // Card body'nin 1. indexi çağırıldı.

newlink.className="btn btn-secondary"; // Class ekleme
newlink.href="https://google.com"; // href ekleme
newlink.target="_blank"; // Farklı sekmede açma
newlink.appendChild(document.createTextNode("Google"));// a elementine text eklendi
cardbody.appendChild(newlink); // a elementi card-body' eklendi

newlink.remove(); // silme
//console.log(newlink);