console.log(employees);

let heading = document.getElementById("heading").children;
let keys = Object.keys(employees[0]);
let table = document.getElementsByTagName("tbody")[0];

for (let i = 0; i < heading.length; i++) {
  heading[i].textContent = keys[i];
}

for (let i = 0; i < employees.length; i++) {
  let row = document.createElement("tr");
  row.classList.add("content");
  for (let j = 0; j < keys.length; j++) {
    let column = document.createElement("td");
    column.innerText = employees[i][keys[j]];
    row.appendChild(column);
  }
  console.log(row);
  table.appendChild(row);
}
