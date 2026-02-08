let editRow = null;

function saveEmployee() {
    let name = document.getElementById("fullName").value;
    let code = document.getElementById("empCode").value;
    let salary = document.getElementById("salary").value;
    let city = document.getElementById("city").value;

    if (name === "") {
        alert("Full name is required");
        return;
    }

    if (editRow === null) {
        addEmployee(name, code, salary, city);
    } else {
        updateEmployee(name, code, salary, city);
    }

    clearForm();
}

function addEmployee(name, code, salary, city) {
    let table = document.getElementById("employeeTable");
    let row = table.insertRow();

    row.insertCell(0).innerText = name;
    row.insertCell(1).innerText = code;
    row.insertCell(2).innerText = salary;
    row.insertCell(3).innerText = city;
    row.insertCell(4).innerHTML =
        `<button onclick="editEmployee(this)">Edit</button>
         <button onclick="deleteEmployee(this)">Delete</button>`;
}

function editEmployee(btn) {
    editRow = btn.parentElement.parentElement;

    document.getElementById("fullName").value = editRow.cells[0].innerText;
    document.getElementById("empCode").value = editRow.cells[1].innerText;
    document.getElementById("salary").value = editRow.cells[2].innerText;
    document.getElementById("city").value = editRow.cells[3].innerText;
}

function updateEmployee(name, code, salary, city) {
    editRow.cells[0].innerText = name;
    editRow.cells[1].innerText = code;
    editRow.cells[2].innerText = salary;
    editRow.cells[3].innerText = city;
}

function deleteEmployee(btn) {
    let row = btn.parentElement.parentElement;
    row.remove();
    clearForm();
}

function clearForm() {
    document.getElementById("fullName").value = "";
    document.getElementById("empCode").value = "";
    document.getElementById("salary").value = "";
    document.getElementById("city").value = "";
    editRow = null;
}
