(function(name){
    console.log("merhaba " + name);    // Tanımlandıgı yerde çalışan fonk (IIFE)
})("Yılmaz");

const database = {
    host : "localhost",
    add : function(){
        console.log("Eklendi");
    },

    get : function(){
        console.log("Elde edildi");
    },
    update : function(id){
        console.log(`Id : ${id} Güncellendi`);
    },
    delete: function(id){
        console.log(`Id: ${id} Silindi`);
    },
}

console.log(database.host);
database.add();
database.get();
database.update(22);
database.delete(30);
