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
    <div id = container>
    <div id=courseTitle> Courses Title:
    <h4> ${courses.title} (${courses.totalCredits} credits) </h4></div>
    <div id=teacher>Teacher: ${infoTeacher(courses)}</div> 
    <div id=courseResponsible> Course Responsible:${findResponsible(courses)}</div>
    </div>
    <div id=students>Students: <br> ${findStudents(courses)}</div>
    
    `;
}


//funktion som ska gå igenom varje kurs och lägger till HTML på webbplatsen
function renderCourses(courses){
    courses.forEach((course) => {
        renderCourse(course);
    });
}


//function som hittar kursansvarig för den sökta kursen
 function findResponsible (courses) {
     let responsibleBox = [];
    for (let i = 0; i < DATABASE.teachers.length; i++) {
        let div = document.createElement ("div")
         if (DATABASE.teachers[i].teacherId == courses.courseResponsible){
            let text = div.innerHTML =`
            <h4>${DATABASE.teachers[i].firstName} ${DATABASE.teachers[i].lastName} (${DATABASE.teachers[i].post})</h4>`
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
    

//Funktion som hittar studenterna som läst den sökta kursen
function findStudents(courses){
    let studentBox = [];
    for (let i = 0; i < DATABASE.students.length; i++){
        let div = document.createElement("div");
        for (let x = 0; x < DATABASE.students[i].courses.length; x++){
            if (DATABASE.students[i].courses[x].courseId == courses.courseId && DATABASE.students[i].courses[x].passedCredits == courses.totalCredits){
                let text = div.innerHTML =`
                <div class="done"><h4>${DATABASE.students[i].firstName} ${DATABASE.students[i].lastName} <br>(${DATABASE.students[i].courses[x].passedCredits} Credits)</h4>
                <p>${DATABASE.students[i].courses[x].started.semester} ${DATABASE.students[i].courses[x].started.year}</p></div>`
                studentBox.push(text);
            }else if (DATABASE.students[i].courses[x].courseId == courses.courseId && DATABASE.students[i].courses[x].passedCredits < courses.totalCredits){
                let text = div.innerHTML =`
                <div class="not-done"><h4>${DATABASE.students[i].firstName} ${DATABASE.students[i].lastName} <br> (${DATABASE.students[i].courses[x].passedCredits} Credits)</h4>
                <p>${DATABASE.students[i].courses[x].started.semester} ${DATABASE.students[i].courses[x].started.year}</p></div>`
                studentBox.push(text);
            }
        }
    }
    return studentBox.toString().split(",").join("");
}


//Event-listener för sökningen i input-fältet. att köra funktionen och filtrera genom kurserna varje gång sök trycks
inputCourse.addEventListener("keyup", function() {
    let course = findCoursesByTitle();
    let coursesDiv = document.getElementById("student-result");

    coursesDiv.innerHTML = "";
    renderCourses(course);


    if(inputCourse.value == 0) {
        coursesDiv.innerHTML = "";

    }
});

