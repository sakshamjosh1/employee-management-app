let currentEmployeeId = null;

const API_URL = "http://127.0.0.1:8000/employees";

async function loadEmployees() {
    const response = await fetch(API_URL);
    const employees = await response.json();

    const table = document.getElementById("employeeTable");

    table.innerHTML = "";

    employees.forEach(emp => {
        table.innerHTML += `
        <tr>
            <td>${emp.id}</td>
            <td>${emp.name}</td>
            <td>${emp.email}</td>
            <td>${emp.department}</td>
            <td>${emp.salary}</td>
            <td>
                <button onclick="editEmployee(${emp.id}, '${emp.name}', '${emp.email}', '${emp.department}', ${emp.salary})">
                    Edit
                </button>

                <button onclick="deleteEmployee(${emp.id})">
                    Delete
                </button>
            </td>
        </tr>
        `;
    });
}

document.getElementById("employeeForm")
.addEventListener("submit", async (e) => {

    e.preventDefault();

    const employee = {
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        department: document.getElementById("department").value,
        salary: Number(document.getElementById("salary").value)
    };

    if (currentEmployeeId === null) {

        await fetch(API_URL, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(employee)
        });

    } else {

        await fetch(`${API_URL}/${currentEmployeeId}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(employee)
        });

        currentEmployeeId = null;

        document.querySelector("#employeeForm button").textContent =
            "Add Employee";
    }

    document.getElementById("employeeForm").reset();

    loadEmployees();
});

async function deleteEmployee(id) {

    await fetch(`${API_URL}/${id}`, {
        method: "DELETE"
    });

    loadEmployees();
}

function editEmployee(id, name, email, department, salary) {

    currentEmployeeId = id;

    document.getElementById("name").value = name;
    document.getElementById("email").value = email;
    document.getElementById("department").value = department;
    document.getElementById("salary").value = salary;

    document.querySelector("#employeeForm button").textContent =
        "Update Employee";
}

loadEmployees();