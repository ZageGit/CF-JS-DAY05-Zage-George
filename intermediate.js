console.log(employees);

let heading = document.getElementById("heading").children;

let keys = Object.keys(employees[0]);

for (let i = 0; i < heading.length; i++) {
  heading[i].textContent = keys[i];
}

console.log(heading);

for (let i = 0; i < employees.length; i++) {
  let row = document.createElement("tr");
  console.log(employees[i]);
  for (let j = 0; j <= keys.length; j++) {
    let column = document.createElement("td");
    console.log(employees[i]);
    console.log(keys[j]);
    column.innerText = employees[i].keys[j];
    row.appendChild(column);
  }
  console.log(row);
  /*   let uniqueId = document.createElement("td")
  uniqueId.innerText = employees[i].keys[i] */
}
