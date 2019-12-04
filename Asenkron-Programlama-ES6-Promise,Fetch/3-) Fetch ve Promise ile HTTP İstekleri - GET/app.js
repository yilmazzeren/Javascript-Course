
class Requests{
    // Burada constructor 'a gerek yok çünkü herhangi bir objeye gerek yok window üzerinde bir fetch fonk kullanılacak.


    get(url) { // Get Request


        return new Promise(function(resolve,reject){

            fetch(url)
            .then(response => response.json())
            .then(data => resolve(data))
            .catch(err => reject(err));

        });

        

        /*
            Şimdi ilk başta fetch fonksiyonu içine url göderiyoruz. Fetch fonk bize bu url'ye gore bir json objesi döneecek.  Bizde bu objeyi then ile yakalıyoruz.
            Then kullanımı;
            Fetch bize bir tane response dönüyordu. Bizde bu response içinde bir json objesi dönüyor birzde bunu alıyoruz.

        */
    }
}

const request = new Requests();


request.get("https://jsonplaceholder.typicode.com/albums")
.then(albums => {

    console.log(albums);
    
})
.catch(err=> console.log(err));

//console.log(albums); Asenkron durum undefined gelir


