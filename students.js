"use strict"
//Global variabel
let input = document.getElementById("searchbox");

// Funktioner 
// Funktioner för att rensa searchboxen när sidan uppdateras

window.onload = function(){
    document.getElementById("searchbox").value = "";
};

function findStudentLastName(){
    let student = DATABASE.students.filter((student) =>
    
    student,lastName.toLowerCase().includes(input.value.toLowerCase())
    );
    return student;
}
//Funktion för att "skapa" en student och dess information

function renderStudent (student){
    let div = document.createElement ("div");

    let credits = totalCredits(student);

    let coursesFound = findCourseById(student);

    div.classList.add("student");

    div.innerHTML = `<div>${student.firstName} ${student.lastName} (Total: ${credits} credit) </div><div id=courses> Courses:</div>`;

    for(let i = 0; i < foundCourses.length;i++){
        let foundCourses = foundCourses [i];
        // let passedCredits = DATABASE.student[i].courses[i].passedCredits;

        let titleCourse = document.createElement("div");
        titleCourse.classList.add("course");
        div.appendChild(titleCourse);

        titleCourse.innerHTML = coursesFound.title;

        for(let i = 0; i < coursesFound.length; i++){
            let student = DATABASE.students[i];
        }
    let creditsPassed = student.courses[i].creditsPassed;
    let semester = student.courses[i].started.semester;
    let year = student.courses[i].started.year;

    let courseInfo = document.createElement("p");
    courseTitle.appendChild(courseInfo);
    courseInfo.innerText = semester + "" + year + "" + "(" + passedCredits + "" + "credits" + ")";

    if (passedCredits == coursesFound.totalCredits){
        let course = courseInfo.parentElement;
        course.style.backgroundColor = "blue";
    }
  }
}



