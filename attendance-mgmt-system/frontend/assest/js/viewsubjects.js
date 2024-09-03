
const subjects = [
    {
        SubjectName: "Software Engineering",
        inputSem: "5th",
        Desc: "Computer Engineering Sem 5th Subject",
        
    },
    {
        SubjectName: "Data Structure",
        inputSem: "3rd",
        Desc: "Computer Engineering Sem 3rd Subject",
       
    }
    
];

// Function to load students into the table
function loadSubjectList() {
    const subjectTableBody = document.getElementById('subjectTableBody');

    subjects.forEach(subject => {
        const newRow = document.createElement('tr');

        newRow.innerHTML = `
            <td>${subject.SubjectName}</td>
            <td>${subject.inputSem}</td>
            <td>${subject.Desc}</td>
            
        `;

        subjectTableBody.appendChild(newRow);
    });
}

// Call the function to load students when the page loads
document.addEventListener('DOMContentLoaded', loadSubjectList);