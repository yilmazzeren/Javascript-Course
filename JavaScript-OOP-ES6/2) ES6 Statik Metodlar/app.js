// Static Metodlar
// Obje olusturmadan fonk kullanmak ısteyebılırız.

class Matematik {

    sqrt(x){
        console.log(x*x);
    }

    static cube(x) {
        console.log(x*x*x);
    }
}

// cube fonksiyonunu kullanmak mecburen obje olusturmamız gerekıyor.
// const math = new Matematik();
// //console.log(math);

// math.cube(5);

Matematik.cube(6); // Obje olusturmadan kullandık
// Static olarak olusturdugumuz ıcın artık bır obje uzerınden kullanamayız bu fonksıyonu. Çünkü static olarak olusturdugmuz bu fonk class'ın prototype'ine yazılmıyor.

const kare = new Matematik();
kare.sqrt(4);
//Matematik.sqrt(4); Bu şekilde kullanmayız cunku statıc degıl