//  ceo = 2200;
//  manager = 1800;
//  cto = 1800;
//  developer = 1500;
//  default = 1000;


// Crea una funzione denominata calculateSalary che accetta un parametro di input 
// e calcola e restituisce lo stipendio corrispondente. È necessario 
// utilizzare l' switchistruzione switch. Per ogni ruolo lo stipendio corrispondente è il seguente:



function calculateSalary(role) {
  switch (role) {
    case "ceo": 
    return role = 2200;
    break; 
    case "manager":
      return role = 1800;
    break;
    case "cto": 
      return role = 1800;
      break;
    case "developer":
      return role = 1500
      break;
    default : 
      return role = 1000;
  }  
}
let role = "manager"
const ceoSalary = calculateSalary('ceo');
const managerSalary = calculateSalary('manager');
const ctoSalary = calculateSalary('cto');
const developerSalary = calculateSalary('developer');
const otherSalary = calculateSalary('other');

console.log(ceoSalary);
console.log(managerSalary);
console.log(ctoSalary);
console.log(developerSalary);
console.log(otherSalary);