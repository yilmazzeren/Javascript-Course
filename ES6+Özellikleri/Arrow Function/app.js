// ES6+ İle gelen kısa özellikler

const merhaba = function(){
    console.log("merhaba");
}
merhaba();

// Arrow function ile

const hi = () => {
    console.log("hi");
}
hi();

const hello = (firstName,lastName) =>console.log("hello");
hello("yılmaz","zeren");

const cube = function(x){
    return x*x*x;
}
console.log(cube(5));

// Arrow Function ile

const kare = x => x*x;
console.log(kare(10));