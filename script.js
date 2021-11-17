
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


// let officeEmployees = [
//     {
//         employee: 'Shoukat Memon',
//         Job: 'Executive Engineer',
//         age: '30',
//         Address: 'Tando Allahyar',   
//     },
//     {
//         employee: 'Naeem Zaidi',
//         job: 'Assistant Engineer',
//         age: '30',
//         Address: 'Tando Allahyar',
//     },
//     {
//         employee: 'Aijaz Malik',
//         job: 'Senior Engineer',
//         age: '30',
//         Address: 'Tando Allahyar',
//     },
//     {
//         employee: 'Muhammad Sajid',
//         job: 'Sub-Engineer',
//         age: '30',
//         Address: 'Tando Allahyar',
//     },
//     {
//         employee: 'Abdul Qadir',
//         job: 'Head Draightsman',
//         age: '30',
//         Address: 'Tando Allahyar',
//     },
//     {
//         employee: 'Abdul Jabbar',
//         job: 'Head Clerk',
//         age: '30',
//         Address: 'Tando Allahyar',
//     },
// ];




let renderTable = (items, elementId) => {
    let conatiner = document.getElementById(elementId)
    conatiner.innerHTML = '';

    let table = document.createElement('table');
    table.classList.add('table', 'table-striped', 'table-hover');
    conatiner.appendChild(table);
    
    
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
    
        deleteButton.onclick = () => {
            // console.log(index);
           students.splice(index, 1);
            renderTable(students, 'project');
        }

    
            //ADD BUTTON//
        let addButtononTd = document.createElement('td');
        let addButton = document.createElement('Button');
        addButton.classList.add('btn', 'btn-primary');
        addButton.innerText = 'Edit';
        addButtononTd.appendChild(addButton);
        row.appendChild(addButtononTd);
    

        addButton.onclick = () => {
            document.getElementById('Inputfname').value = student.fname;
            document.getElementById('Inputlname').value = student.lname;
            document.getElementById('inputAge').value = student.age;
            document.getElementById('inputDesig').value = student.desig;
            document.getElementById('inputTeacherN').value = student.teacherN;
            document.getElementById('inputAddress').value = student.address;

        }
    })   
}
        renderTable(students, 'project');





let myForm = document.getElementById('myForm');

myForm.addEventListener('submit', (e) => {

    e.preventDefault();

        let fname = document.getElementById('Inputfname').value
            // console.log(fname);
        let lname = document.getElementById('Inputlname').value
            // console.log(lname);
        let age = document.getElementById('inputAge').value
            // console.log(age);
        let desig = document.getElementById('inputDesig').value
            // console.log(desig);
        let teacherN = document.getElementById('inputTeacherN').value
            // console.log(teacherN);
        let address = document.getElementById('inputAddress').value
            // console.log(address);

            let item = {fname, lname, age, desig, teacherN, address};
            console.log(item);
            students.push(item);
            renderTable(students, 'project');
})


// let secondTable = document.createElement('table');
// secondTable.classList.add('table', 'table-striped');
// mainTable.appendChild(secondTable);

// let secondThead = document.createElement('thead');
// secondTable.appendChild(secondThead);

// let secondTbody = document.createElement('tbody');
// secondTable.appendChild(secondTbody);
