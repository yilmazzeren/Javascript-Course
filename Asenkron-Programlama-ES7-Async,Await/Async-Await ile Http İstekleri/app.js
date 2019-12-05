
// fetch fonskiyonu bize promise döndüreceği için fetch kullanarak yapalım.

/*
    Get için genel anlatım ;
    get fonksiyonunu async ile oluşturduğumuz için bize zaten bir promise döndürecek. Burada fetch fonk zie promise döndüreceği için isteğin resolved olma durumunu yani olumlu sonuçlanma durumunu biz aawit fetch ile bekleyebiliriz. Daha sonra bu olumlu sonu response değişkeni içinde saklayalım.  Response değişkeni içinde artık bir json objesi var bunuda data değişkenne atalım.


*/

class Request {

    async get(url){ // Get Request
        
        const response = await fetch(url); // Response Object
        const data = await response.json() // JSON Object
        return data;
    }
    async post(url,data){
        const response = await fetch(url,{
                    method: 'POST',
                    body: JSON.stringify(data),
                    headers: {
                      "Content-type": "application/json; charset=UTF-8"
                    }
                }); // Response Object

        const responsedata = await response.json();

        return responsedata;
        

    }

    async put(url,data){
        
        const response = await fetch(url,{
                    method: 'PUT',
                    body: JSON.stringify(data),
                    headers: {
                    "Content-type": "application/json; charset=UTF-8"
                    }
        
                }); // Response Object

        const responsedata = await response.json();

        return responsedata;

    }
    async delete(url){


        const response = await fetch('https://jsonplaceholder.typicode.com/albums/1', {
                method: 'DELETE'
                }); // Response Object
        

        return "Veri silme işlemi başarılı";

            

    }

}
const request = new Request();

// request.get("https://jsonplaceholder.typicode.com/albums")
// .then(albums => {
    
//     console.log(albums);
// })
// .catch(err => console.log(err));

// request.post("https://jsonplaceholder.typicode.com/albums",{userId:1,title:"Thriller"})
// .then(newAlbum => console.log(newAlbum))
// .catch(err => console.log(err));


request.put("https://jsonplaceholder.typicode.com/albums/10",{userId:10,title:"ylmz"})
.then(album => console.log(album))
.catch(err => console.log(err));



// request.delete("https://jsonplaceholder.typicode.com/albums/1")
// .then(message => console.log(message) )
// .catch(err => console.log(err));







