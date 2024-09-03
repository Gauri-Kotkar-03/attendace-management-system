
const classes = [
    {
        CourseName: "Computer Engineering",
        inputClass: "BE",
        desc: "Final Year Computer Engineering class",
       
    },
    {
        CourseName: "Mechanical Engineering",
        inputClass: "BE",
        desc: "Final Year Mechanical Engineering class",
    }
    
];

// Function to load students into the table
function loadClassList() {
    const classTableBody = document.getElementById('classTableBody');

    classes.forEach(classed => {
        const newRow = document.createElement('tr');

        newRow.innerHTML = `
            <td>${classed.CourseName}</td>
            <td>${classed.inputClass}</td>
            <td>${classed.desc}</td>
        `;

        classTableBody.appendChild(newRow);
    });
}

// Call the function to load students when the page loads
document.addEventListener('DOMContentLoaded', loadClassList);