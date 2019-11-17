
const name = "Yılmaz ZEREN";
const department = "Bilişim";
const salary = 4000;


// const a = "İsim: " + name + "\n"+ "Departman: " + department+"\n"+ "Maaş:" + salary;
// console.log(a);

// const a=`İsim: ${name}\nDepartman:${department}\nMaaş:${salary}`;
// console.log(a);


const html = `
        <ul>
          <li>${name}</li>
          <li>${department}</li>
          <li>${salary}</li>        
        </ul>
             `;
document.body.innerHTML=html;