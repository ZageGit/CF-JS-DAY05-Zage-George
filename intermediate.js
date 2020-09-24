console.log(employees);

let heading = document.getElementById("heading").children;

for (let i = 0; i < employees.length; i++) {
  let keys = Object.keys(employees[i]);

  for (let i = 0; i < heading.length; i++) {
    heading[i].textContent = "test";
    console.log(heading[i]);
  }
}
