"use strict"
//Global variabel
let input = document.getElementById("student");

// Funktioner 
// Funktioner för att rensa searchboxen när sidan uppdateras

window.onload = function(){
    document.getElementById("student").value = "";
};

function findStudentsByLastName(){
    let student = DATABASE.students.filter((student) =>
    student.lastName.toLowerCase().includes(input.value.toLowerCase())
    );
    return student;
}
//Funktion för att "skapa" en student och dess information

function renderStudent (student){
    let div = document.createElement("div");

    let studentsDiv = document.getElementById("wrapper");
    studentsDiv.appendChild(div);

    let credits = totalCredits(student);
    let foundCourses = findCourseById(student);

    div.classList.add("student");

    div.innerHTML =`
    <div>${student.firstName} ${student.lastName} (Total: ${credits} credit) </div>
    <div id=courses> Courses:</div>
    `;

    for(let i = 0; i < foundCourses.length;i++){
        let foundCourse = foundCourses[i];
        // let passedCredits = DATABASE.student[i].courses[i].passedCredits;

        let titleCourse = document.createElement("div");
        titleCourse.classList.add("course");
        div.appendChild(titleCourse);

        titleCourse.innerHTML = foundCourse.title;

        for(let i = 0; i < foundCourses.length; i++){
            let student = DATABASE.students[i];
        }
    let passedCredits = student.courses[i].passedCredits;
    let semester = student.courses[i].started.semester;
    let year = student.courses[i].started.year;

    let courseInfo = document.createElement("p");
    titleCourse.appendChild(courseInfo);
    courseInfo.innerText = semester + "" + year + "" + "(" + passedCredits + "" + "credits" + ")";

    if (passedCredits == foundCourse.totalCredits){
        let course = courseInfo.parentElement;
        course.style.backgroundColor = "blue";
    }
  }
}

function renderStudents(students){
    students.forEach((student) => {
        renderStudent(student);
    });
}
// funktion som loopar igenom varje student för att addera HTML till webbsidan
function totalCredits(student){
    let credit = [];
    for (let course of student.courses){
        credit.push(course.passedCredits);
    }
    let totalSum = 0;
    for(let i = 0; i < credit.length; i++){
        totalSum += credit[i];
    }
    return totalSum;
}

//funktion som räknar ut totala högskolepoäng för studenterna

function totalCredits(student) {
    let credit = [];
    for (let course of student.courses){
        credit.push(course.passedCredits);
    }
    let totalSum = 0;
    for (let i = 0; i < credit.length; i++) {
        totalSum += credit[i];
    }
    return totalSum;
}

//funktion för att hitta kurserna baserat på deras kursId

function findCourseById(student){
    let foundCourses = [];
    for (let i = 0; i < student.courses.length; i++) {
        foundCourses.push(
            DATABASE.courses.find((courses) => {
                return courses.courseId == student.courses[i].courseId;
            })
        );
    }
    return foundCourses;
}

//Event listeners- som varje gång går igenom funktionerna för att filtrera genom studenterna varje gång en tangent trycks ner

input.addEventListener("keyup", function(){
    let student = findStudentsByLastName();
    let studentsDiv = document.getElementById("student");

    studentsDiv.innerHTML = "";
    renderStudents(student);

    if (input.value == 0) {
        studentsDiv.innerHTML = "";
    }
});


