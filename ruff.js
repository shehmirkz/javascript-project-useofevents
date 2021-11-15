
var students = [
    {
        fname: 'Shahmir',
        lname: 'hussain',
        age: 30,
        designation: 'internee',
        teacherName: 'Muhammad Furqan',
    },
    {
        fname: 'Muhammad',
        lname: 'Shaheem',
        age: 24,
        designation: 'React Native Developer',
        teacherName: 'Muhammad Farhan'
    },
    {
        fname: 'Muhammad',
        lname: 'Shaheer',
        age: 19,
        designation: 'Student in Inter',
        teacherName: 'Abdul Samad',
    },
    {
        fname: 'Muhammad',
        lname: 'Huzefa',
        age: 5,
        designation: 'Student',
        teacherName: 'Qari Sahab',
    },
    {
        fname: 'Abdul',
        lname: 'Hadi',
        age: 6,
        designation: 'Student',
        teacherName: 'Ali',
    },
    {
        fname: 'Anas',
        lname: 'Khanzada',
        age: 28,
        designation: 'Civil Engineer',
        teacherName: 'Muhammd Furqan',
    },
    {
        fname: 'Ali',
        lname: 'Gabol',
        age: 21,
        designation: 'UI Developer',
        teacherName: 'Qasim',
    }

];


var tableHEading = document.getElementById('table-heading');

students.forEach(student => {
    let row = document.createElement('tr');
    table-tableHeading.appendChild(row);

    for(let data in student) {
        console.log(`${data}: ${student}`)
        let rows = document.createElement('td');
        row.innerText = student[data];
        row.appendChild(rows);
    }



})