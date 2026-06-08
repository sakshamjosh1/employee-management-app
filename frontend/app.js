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
                <button onclick="deleteEmployee(${emp.id})">
                    Delete
                </button>
            </td>
        </tr>
        `;
    });
}

document
.getElementById("employeeForm")
.addEventListener("submit", async (e) => {

    e.preventDefault();

    const employee = {
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        department: document.getElementById("department").value,
        salary: Number(
            document.getElementById("salary").value
        )
    };

    await fetch(API_URL, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(employee)
    });

    loadEmployees();
});

async function deleteEmployee(id) {

    await fetch(`${API_URL}/${id}`, {
        method: "DELETE"
    });

    loadEmployees();
}

loadEmployees();