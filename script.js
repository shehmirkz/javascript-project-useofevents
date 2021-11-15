
var students = [
    {
        fname: 'Shahmir',
        lname: 'hussain',
        age: 30,
        designation: 'internee',
        teacherName: 'Muhammad Furqan',
        address: 'Karachi',
    },
    {
        fname: 'Muhammad',
        lname: 'Shaheem',
        age: 24,
        designation: 'React Native Developer',
        teacherName: 'Muhammad Farhan',
        address: 'Karachi',
    },
    {
        fname: 'Muhammad',
        lname: 'Shaheer',
        age: 19,
        designation: 'Student in Inter',
        teacherName: 'Abdul Samad',
        address: 'Karachi',
    },
    {
        fname: 'Muhammad',
        lname: 'Huzefa',
        age: 5,
        designation: 'Student',
        teacherName: 'Qari Sahab',
        address: 'Karachi',
    },
    {
        fname: 'Abdul',
        lname: 'Hadi',
        age: 6,
        designation: 'Student',
        teacherName: 'Ali',
        address: 'Karachi',
    },
    {
        fname: 'Anas',
        lname: 'Khanzada',
        age: 28,
        designation: 'Civil Engineer',
        teacherName: 'Muhammd Furqan',
        address: 'Karachi',
    },
    {
        fname: 'Ali',
        lname: 'Gabol',
        age: 21,
        designation: 'UI Developer',
        teacherName: 'Qasim',
        address: 'Karachi',
    }

];

var mainTable = document.getElementById('project');

let table = document.createElement('table');
table.classList.add('table', 'table-striped', 'table-hover');
mainTable.appendChild(table);


let tableHead = document.createElement('thead');
table.appendChild(tableHead);

let tableBody = document.createElement('tbody');
table.appendChild(tableBody);




students.forEach((student, index) => {
    let row = document.createElement('tr');
    tableHead.appendChild(row);
    tableBody.appendChild(row);


    
    if (index === 0) {
        for(const key in student) {
        console.log(`${key}: ${student[key]}`);
        let heading = document.createElement('th');
        heading.innerText = key.toUpperCase();
        tableHead.appendChild(heading);
    }
}


    for(const value in student) {
        console.log(`${value}: ${student}`);
        let column = document.createElement('td');
        column.innerText = student[value];
        row.appendChild(column);
    }

        //DELETE BUTTON//
    let deleteButtonTd = document.createElement('td');
    let deleteButton = document.createElement('button');
    deleteButton.classList.add('btn', 'btn-danger');
    deleteButton.innerText = 'Delete';
    deleteButtonTd.appendChild(deleteButton);
    row.appendChild(deleteButtonTd);

    deleteButton.onclick = function () {
        tableBody.removeChild(row);
    }


        //ADD BUTTON//
    let addButtononTd = document.createElement('td');
    let addButton = document.createElement('Button');
    addButton.classList.add('btn', 'btn-primary');
    addButton.innerText = 'Add';
    addButtononTd.appendChild(addButton);
    row.appendChild(addButtononTd);


    addButton.onclick = function () {
        tableBody.appendChild(row);
    }




    



  
   

})