"use strict";

//Global variabel för sökrutan
let inputCourse = document.getElementById("courses");

//global variabel för att komma åt lärarna i databasen
let allTeachers = DATABASE.teachers;

// Funktioner för att rensa searchboxen när sidan uppdateras

window.onload = function() {
    document.getElementById("courses").value = "";
};

//Funktion för att kunna skriva både små och stora bokstäver
function findCoursesByTitle() {
    let course = DATABASE.courses.filter((course) =>
    course.title.toLowerCase().includes(inputCourse.value.toLowerCase())
    );
    return course;
}

//funktion för att skapa kursen med information 

function renderCourse(course) {
    let divCourse = document.createElement("div");

    let courseDiv = document.getElementById("student-result");
    courseDiv.appendChild(divCourse);

    divCourse.classList.add("course")

    divCourse.innerHTML =`
    <div>${course.title} Total ${course.totalCredits} credits </div>
    <div id=teacher>Teacher:</div>
    `;
}

function allTeacherInfo(id) {
    let course = DATABSE.courses[i];
    let teachersNames = allTeachers.map((teacher) =>
    teacher.firstName + "" + teacher.lastName + "" + `(${teachers.post})`);
    let teachers = [];

    for (let i = 0; i < teachersNames.length; i++) {
        if(course.teachers.some((value) => value == i)){
            let div = document.createElement("div");
            let info = div.innerHTML = `<p>${teachersNames[i]} </p>`
        }
    }
    return teachers.toString().split(",").join("");
}


//funktion som ska gå igenom varje kurs och lägger till HTML på webbplatsen
function renderCourses(courses){
    courses.forEach((course) => {
        renderCourse(course);
    });
}

//function som hittar kursansvarig
function courseResponsible(id) {
    let course = DATABASE.courses[i];
    let teachersNames = allTeachers.map((teacher) => teacher.firstName + " + teacher.lastName + " +`(${teacher.post})`);
    let res = course.courseResponsible;
    return teachersNames[res];
}
//info om lärarna
function allTeacherInfo(id){
    let course = DATABASE.courses[i];
    let teachersNames = allTeachers.map((teacher) => teacher.firstName + "" + teacher.lastName + "" + `(${teacher.post})`);
    let teachers = [];

    for (let i = 0; i < teachersNames.length; i++){
        if(course.teachers.some((value) => value == i)) {
            let div = document.createElement("div");
            let info = div.innerHTML = `<p>${teachersNames[i]}</p>`
                teachers.push(info);
        }
    }
    return teachers.toString().split(",").join("");
}

//student info


   //funktion för att hitta lärare
   function allCourseTeachers (id) {
    let course = DATABASE.courses[i];
    let teachersNames = allTeachers.map((teacher) =>
    teacher.firstName + "" + teacher.lastName + "" + `(${teacher.post})`);
    let teachers = [];
    for (let i = 0; i < teachers.length; i++){
        if(course.teachers.some((value) => value == i)){
            let div = document.createElement("div");
            let content = div.innerHTML = `<p>${teachersNames[i]}</p>`
             teachers.push(content);
        }
    }
    return teachers.toString().split(".").join("");
}

//funktion för att hitta studenterna för varje kurs
function allCourseStudents(id){
    let courseId = DATABASE.courses[i].courseId;
    let students = [];
        for (let student of allStudents){
            console.log(courses.courseId, courseId)
            if(courses.courseId == courseId){
                students.push(student);
            }
        }
}


//     for (let i = 0; i < foundTeachers.length; i++){
//         let foundTeacher = foundTeachers[i];

//         let teacherName = document.createElement("div");
//         teacherName.classList.add("teacher");
//         divCourse.appendChild(teacherName);

//         teacherName.innerHTML = foundTeacher.firstName + lastName;

//         for ( let i = 0; i < foundTeachers.length; i++) {
//             let course = DATABASE.courses[i];
//         }
//     }
// }



// //funktion för att hitta studenterna för varje kurs

// function allCOurseStudents(id) {
//     let courseId = DATABASE.courses[i].courseId;
//     let students = [];
//     for (let student of allStudents)
// }

//event-listener för att köra funktionen och filtrera genom kurserna varje gång sök trycks
inputCourse.addEventListener("keyup", function() {
    let course = findCoursesByTitle();
    let coursesDiv = document.getElementById("student-result");

    coursesDiv.innerHTML = "";
    renderCourses(course);


    if(inputCourse.value == 0) {
        coursesDiv.innerHTML = "";

    }
});