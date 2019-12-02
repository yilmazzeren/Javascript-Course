
document.getElementById("ajax").addEventListener("click",getAllEmployees);

function getAllEmployees(){

    const xhr = new XMLHttpRequest();

    xhr.open("GET","employees.json",true);

    xhr.onload = function(){
        let list = document.getElementById("employees"); // tbody çağırma
        if(this.status===200){
         // console.log(typeof this.responseText); //string 
         // console.log(JSON.parse(this.responseText)); // arraye çevirdik

         const employees = JSON.parse(this.responseText);
         employees.forEach(function(employee){
             list.innerHTML += `
             <tr>
                <td>${employee.name}</td>
                <td>${employee.departman}</td>
                <td>${employee.salary}</td>
             </tr

             ` 
         })
        }
    }
    
    xhr.send();
};

