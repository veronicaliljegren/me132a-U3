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

//funktion för att skapa div med kursens information 
function renderCourse(courses) {
    let divCourse = document.createElement("div");

    let courseDiv = document.getElementById("student-result");
    courseDiv.appendChild(divCourse);

    divCourse.classList.add("course")

    divCourse.innerHTML =`
    <div>${courses.title} <br> 
    Total ${courses.totalCredits} credits </div>
    <div id=teacher>Teacher: ${infoTeacher(courses)}</div> 
    <div id=courseResponsible> Course Responsible: ${findResponsible(courses)}</div>
    <div id=students>Students: ${findStudents(courses)}</div>
    `;
}


//funktion som ska gå igenom varje kurs och lägger till HTML på webbplatsen
function renderCourses(courses){
    courses.forEach((course) => {
        renderCourse(course);
    });
}

// function courseResponsible(id){
//     let course = DATABASE.courseId[id];
//     let teachersNames = allTeachers.map((teacher) => teacher.firstName + " " + teacher.lastName + " " + `${teacher.post})`);
//     let resp = course.courseResponsible;
//     return teachersNames[resp];
//  }

//function som hittar kursansvarig för den sökta kursen
 function findResponsible (courses) {
     let responsibleBox = [];
    for (let i = 0; i < DATABASE.teachers.length; i++) {
        let div = document.createElement ("div")
         if (DATABASE.teachers[i].teacherId == courses.courseResponsible){
            let text = div.innerHTML =`
            <h2>${DATABASE.teachers[i].firstName} ${DATABASE.teachers[i].lastName} (${DATABASE.teachers[i].post})</h2>`
             responsibleBox.push(text);
        }
    }

    return responsibleBox.toString().split(",").join("");
 }

 //info om lärarna
function infoTeacher (courses){
    let teacherBox = [];
    for (let i = 0; i < DATABASE.teachers.length; i++){
         let div = document.createElement ("div");
            if (DATABASE.teachers[i].teacherId == courses.teachers[0]) {
                let text = div.innerHTML = 
                `<h4>${DATABASE.teachers[i].firstName} ${allTeachers[i].lastName}</h4>`
                teacherBox.push(text);
            } else if (DATABASE.teachers[i].teacherId == courses.teachers[1]) {
                let text = div.innerHTML = 
                `<h4>${DATABASE.teachers[i].firstName} ${allTeachers[i].lastName}</h4>`
                teacherBox.push(text);
            } else if (DATABASE.teachers[i].teacherId == courses.teachers[2]) {
                let text = div.innerHTML = 
                `<h4>${DATABASE.teachers[i].firstName} ${allTeachers[i].lastName}</h4>`
                teacherBox.push(text);
            }
         }
            return teacherBox.toString().split(",").join("");
        }
    




function findStudents(courses){
    let studentBox = [];
    for (let i = 0; i < DATABASE.students.length; i++){
        let div = document.createElement("div");
        for (let x = 0; x < DATABASE.students[i].courses.length; x++){
            if (DATABASE.students[i].courses[x].courseId == courses.courseId && DATABASE.students[i].courses[x].passedCredits == courses.totalCredits){
                let text = div.innerHTML =`
                <div class="done"><h4>${DATABASE.students[i].firstName} ${DATABASE.students[i].lastName} (${DATABASE.students[i].courses[x].passedCredits} Credits)</h4>
                <p>${DATABASE.students[i].courses[x].started.semester} ${DATABASE.students[i].courses[x].started.year}</p></div>`
                studentBox.push(text);
            }else if (DATABASE.students[i].courses[x].courseId == courses.courseId && DATABASE.students[i].courses[x].passedCredits < courses.totalCredits){
                let text = div.innerHTML =`
                <div class="not-done"><h4>${DATABASE.students[i].firstName} ${DATABASE.students[i].lastName} (${DATABASE.students[i].courses[x].passedCredits} Credits)</h4>
                <p>${DATABASE.students[i].courses[x].started.semester} ${DATABASE.students[i].courses[x].started.year}</p></div>`
                studentBox.push(text);
            }
        }
    }
    return studentBox.toString().split(",").join("");
}



//     let course = DATABASE.courses[i];
//     let teachersNames = allTeachers.map((teacher) => teacher.firstName + " " + teacher.lastName + " " + `(${teacher.post})`);
//     let teachers = [];

//     for (let i = 0; i < teachersNames.length; i++){
//         if(course.teachers.some((value) => value == i)) {
//             let div = document.createElement("div");
//             let info = div.innerHTML = `<p>${teachersNames[i]}</p>`
//                 teachers.push(info);
//         }
//     }
//     return teachers.toString().split(",").join(" ");
// }

//student info


//    //funktion för att hitta lärare
//    function allCourseTeachers (course) {
//     let courses = DATABASE.courses[i];
//     let teachersNames = allTeachers.map((teacher) =>
//     teacher.firstName + " " + teacher.lastName + " " + `(${teacher.post})`);
//     let teachers = [];
//     for (let i = 0; i < teachers.length; i++){
//         if(courses.teachers.some((value) => value == i)){
//             let div = document.createElement("div");
//             let content = div.innerHTML = `<p>${teachersNames[i]}</p>`
//              teachers.push(content);
//         }
//     }
//     return teachers.toString().split(".").join("");
// }

//funktion för att hitta studenterna för varje kurs


// function allCourseStudents(course){
//     let courseId = DATABASE.courses[i].courseId;
//     let students = [];
//         for (let student of allStudents){
//             console.log(course.courseId. courseId)
//             if(course.courseId == courseId){
//                 students.push(student);
//             }
//         }
// }


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

// function allCourseStudents(id) {
//     let courseId = DATABASE.courses[i].courseId;
//     let students = [];
//     for (let student of allStudents)
// }

// event-listener för att köra funktionen och filtrera genom kurserna varje gång sök trycks
inputCourse.addEventListener("keyup", function() {
    let course = findCoursesByTitle();
    let coursesDiv = document.getElementById("student-result");

    coursesDiv.innerHTML = "";
    renderCourses(course);


    if(inputCourse.value == 0) {
        coursesDiv.innerHTML = "";

    }
});

