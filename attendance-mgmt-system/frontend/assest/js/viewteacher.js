
const teachers = [
    {
        firstName: "Rajesh",
        lastName: "Rane",
        email: "rajesh.rane@egmail.com",
        mobile: "1234567890",
        inputGender: "Male"
    },
    {
        firstName: "Anamika",
        lastName: "Bhosale",
        email: "anamika.bhosale@example.com",
        mobile: "0987654321",
        inputGender: "Female"
    }
    
];

// Function to load students into the table
function loadTeacherList() {
    const teacherTableBody = document.getElementById('teacherTableBody');

    teachers.forEach(teacher => {
        const newRow = document.createElement('tr');

        newRow.innerHTML = `
            <td>${teacher.firstName}</td>
            <td>${teacher.lastName}</td>
            <td>${teacher.email}</td>
            <td>${teacher.mobile}</td>
            <td>${teacher.inputGender}</td>
        `;

        teacherTableBody.appendChild(newRow);
    });
}

// Call the function to load students when the page loads
document.addEventListener('DOMContentLoaded', loadTeacherList);