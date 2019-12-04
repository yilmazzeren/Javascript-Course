
class Requests{

    get(url){

        return new Promise((resolve,reject)=>{

            fetch(url)
            .then(response => response.json())
            .then(data=> resolve(data))
            .catch(err=> reject(err));

        })
    }

    post(url,data){
        return new Promise((resolve,reject)=>{

            fetch(url,{
                method: 'POST',
                body: JSON.stringify(data),
                headers: {
                  "Content-type": "application/json; charset=UTF-8"
                }
              })
              .then(response=> response.json())
              .then(data=> resolve(data))
              .catch(err=> reject(err));
        })
       
    }

    put(url,data){

        return new Promise((resolve,reject)=>{

            fetch(url,{
                method: 'PUT',
                body: JSON.stringify(data),
                headers: {
                  "Content-type": "application/json; charset=UTF-8"
                }
              })
              .then(response=> response.json())
              .then(data=> resolve(data))
              .catch(err=> reject(err));
        })
       
    }

    delete(url){
        return new Promise((resolve,reject)=>{

            fetch(url,{
                method: 'DELETE'
              })
            .then(response => resolve("Başarılı"))
            .catch(err=> reject(err));

        })
    }

}

const request = new Requests();

//----------GET--------

request.get("https://jsonplaceholder.typicode.com/albums")
.then(albums=> console.log(albums))
.catch(err => console.log(err));



//--------POST---------

request.post("https://jsonplaceholder.typicode.com/albums",{userId:2,title:"Yılmaz"})
.then(albums=> console.log(albums))
.catch(err=> console.log(err));



//----------PUT---------

request.put("https://jsonplaceholder.typicode.com/albums/1",{userId:1,title:"zeren"})
.then(album => console.log(album))
.catch(err => console.log(err));


//-----------DELETE----------

request.delete("https://jsonplaceholder.typicode.com/albums/1")
.then(message=> console.log(message))
.catch(err => console.log(err));
