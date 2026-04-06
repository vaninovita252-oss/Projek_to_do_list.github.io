let taskCounter = 1;

function addTask() {
    const courseInput = document.getElementById('course-input');
    const descInput = document.getElementById('desc-input');
    const tableBody = document.getElementById('todo-body');

    if (courseInput.value.trim() === "" || descInput.value.trim() === "") {
        alert("Harap isi semua kolom!");
        return;
    }

    const row =dd document.createElement('tr');

    row.innerHTML = `
        <td>${taskCounter++}</td>
        <td><strong>${courseInput.value}</strong></td>
        <td>${descInput.value}</td>
        <td><button class="delete-btn" onclick="removeTask(this)">Hapus</button></td>
    `;

    tableBody.appendChild(row);
    
    // Reset input
    courseInput.value = "";
    descInput.value = "";
    courseInput.focus();
}

function removeTask(button) {
    const row = button.parentElement.parentElement;
    row.remove();
}

document.getElementById('desc-input').addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
        addTask();
    }
});