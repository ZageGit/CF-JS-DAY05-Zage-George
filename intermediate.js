console.log(employees);

let heading = document.getElementById("heading").children;

let keys = Object.keys(employees[0]);

for (let i = 0; i < heading.length; i++) {
  heading[i].textContent = keys[i];
}

console.log(heading);
