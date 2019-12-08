import {Person} from "./app1";
import {Employee} from "./app2";


Person.Test();
Employee.Test();

// Yani şimdi biz app1.js ve app2.js den ıkı tane class'ı export ettik. Bu export ettiğimiz dosylarıda index.js kullanıyor.
// Şimdi biz webpack'e diyecezki configuration dosayı oluşturarak. SEn bu index.js e bak ve export edilen dosyaları tek bir dosya halınde ortaya cıkar. 
console.log("dosya değiştii");

// CommonJs Modülleri

// const app = require("./module1"); // Export edilen yapılar app içine gelecek.

// console.log(app);

// //  app.test1();
// //  app.test2();

// console.log(app.name);
// console.log(app.person.mail);
// app.test1();
// app.test2();

//ES6 Modülleri

// import {denemee,Person2} from "./module1"; // bu şekile alabilriz.

// Person2.Deneme();
// denemee();

import * as atamak from "./module1";
console.log(atamak);
// Bu şekilde tüm modülleri atamak objesine atmış olduk burdan  kullanablırız.

atamak.Person2.Deneme();
atamak.denemee();

import asd from "./module1" ;
console.log(asd);

