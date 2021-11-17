
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






// function addData (evnt) {
//     evnt.preventDefault();

//     let defineData = {
//         fname: document.getElementById('Inputfname').value,
//         lname: document.getElementById('Inputlname').value,
//         age: document.getElementById('inputAge').value,
//         desig: document.getElementById('inputDesig').value,
//         teacherN: document.getElementById('inputTeacherN').value,
//         address: document.getElementById('inputAddress').value,
//     }

//     defineData.push(students);
//     document.forms[0].reset();

//     console.warn('added', {students} );
//     let pre = document.querySelector('msg pre');
//     pre.textContent = '\n' + JSON.stringify(movies, '\t', 2)
// }

// document.addEventListener('btn', () => {
//     document.getElementById('submit').addEventListener('click', addData);
// });
   
 
            
    // function creatButton () {
    //     let addButton = document.querySelectorAll('td')
    //     for (let i = 0; i > student.length; i++) {
    //         console.log(tableButton[i]);
    //         var creatButton = document.createElement('button');
    //         creatButton.appendChild(document.createTextNode('Delete'));
    //         addButton[i].appendChild('btn');
    //     }
    // }


    
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
            Object.assign(students, item);
})
     