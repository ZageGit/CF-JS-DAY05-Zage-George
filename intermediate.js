console.log(employees);

//reaching the table heading columns
let heading = document.getElementById("heading").children;
//reaching the keys that we need to populate the heading columns
let keys = Object.keys(employees[0]);
//reaching the table
let table = document.getElementsByTagName("tbody")[0];

//loop to populate the heading columns
for (let i = 0; i < heading.length; i++) {
  heading[i].textContent = keys[i];
}

//loop to populate the rest of the table
for (let i = 0; i < employees.length; i++) {
  let row = document.createElement("tr");
  row.classList.add("content");
  for (let j = 0; j < keys.length; j++) {
    let column = document.createElement("td");
    column.innerText = employees[i][keys[j]];
    row.appendChild(column);
    row.setAttribute("id", employees[i].uniqueID);
  }
  console.log(row);
  table.appendChild(row);
}
