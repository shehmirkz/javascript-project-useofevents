
let students = [
    {
        fname: 'Shahmir',
        lname: 'hussain',
        age: 30,
        desig: 'internee',
        teacherN: 'Muhammad Furqan',
        address: 'Karachi',
    },
    {
        fname: 'Muhammad',
        lname: 'Shaheem',
        age: 24,
        desig: 'React Native Developer',
        teacherN: 'Muhammad Farhan',
        address: 'Karachi',
    },
    {
        fname: 'Muhammad',
        lname: 'Shaheer',
        age: 19,
        desig: 'Student in Inter',
        teacherN: 'Abdul Samad',
        address: 'Karachi',
    },
    {
        fname: 'Muhammad',
        lname: 'Huzefa',
        age: 5,
        desig: 'Student',
        teacherN: 'Qari Sahab',
        address: 'Karachi',
    },
    {
        fname: 'Abdul',
        lname: 'Hadi',
        age: 6,
        desig: 'Student',
        teacherN: 'Ali',
        address: 'Karachi',
    },
    {
        fname: 'Anas',
        lname: 'Khanzada',
        age: 28,
        desig: 'Civil Engineer',
        teacherN: 'Muhammd Furqan',
        address: 'Karachi',
    },
    {
        fname: 'Ali',
        lname: 'Gabol',
        age: 21,
        desig: 'UI Developer',
        teacherN: 'Qasim',
        address: 'Karachi',
    }

];


let officeEmployees = [
    {
        employee: 'Shoukat Memon',
        Job: 'Executive Engineer',
        age: '30',
        Address: 'Tando Allahyar',   
    },
    {
        employee: 'Naeem Zaidi',
        job: 'Assistant Engineer',
        age: '30',
        Address: 'Tando Allahyar',
    },
    {
        employee: 'Aijaz Malik',
        job: 'Senior Engineer',
        age: '30',
        Address: 'Tando Allahyar',
    },
    {
        employee: 'Muhammad Sajid',
        job: 'Sub-Engineer',
        age: '30',
        Address: 'Tando Allahyar',
    },
    {
        employee: 'Abdul Qadir',
        job: 'Head Draightsman',
        age: '30',
        Address: 'Tando Allahyar',
    },
    {
        employee: 'Abdul Jabbar',
        job: 'Head Clerk',
        age: '30',
        Address: 'Tando Allahyar',
    },
];



let renderTable = (items, elementId) => {

    let mainTable = document.getElementById(elementId);

    let table = document.createElement('table');
    table.classList.add('table', 'table-striped', 'table-hover');
    mainTable.appendChild(table);
    
    
    let tableHead = document.createElement('thead');
    tableHead.classList.add('text-center');
    table.appendChild(tableHead);
    
    let tableBody = document.createElement('tbody');
    table.appendChild(tableBody);
    
    
    
    
    items.forEach((student, index) => {
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
}
renderTable(students, 'project');

renderTable(officeEmployees, 'testing');