
const students = [
    {
        firstName: "Riddhi",
        lastName: "Shinde",
        email: "shinde.riddhi@gmail.com",
        mobile: "1234567890",
        courseName: "Computer Engineering",
        inputClass: "BE",
        inputGender: "Female"
    },
    {
        firstName: "Gauri",
        lastName: "Kotkar",
        email: "kotkar.gauri@gmail.com",
        mobile: "0987654321",
        courseName: "Information Technology",
        inputClass: "SE",
        inputGender: "Female"
    }
    
];

// Function to load students into the table
function loadStudentList() {
    const studentTableBody = document.getElementById('studentTableBody');

    students.forEach(student => {
        const newRow = document.createElement('tr');

        newRow.innerHTML = `
            <td>${student.firstName}</td>
            <td>${student.lastName}</td>
            <td>${student.email}</td>
            <td>${student.mobile}</td>
            <td>${student.courseName}</td>
            <td>${student.inputClass}</td>
            <td>${student.inputGender}</td>
        `;

        studentTableBody.appendChild(newRow);
    });
}

// Call the function to load students when the page loads
document.addEventListener('DOMContentLoaded', loadStudentList);