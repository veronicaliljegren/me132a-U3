"use strict";
// Väljer element baserat på vad användaren sökt på
let selectElement = (selectElement) => {
    return document.querySelector(selectElement);
}

//Rensar innehållet efter sökresultatet
let clearResults = () => {
    selectElement(".student-result").innerHTML = "";
}

function GetResultsStudent (){
    let search = selectElement("#student").value;
    //Rensar innehållet vid varje "anrop" för att inte ha kvar gammal sökning
    clearResults();


//Om input har har ett högre värde än 0 kör denna koden
    if ( search.length > 0) {
     for (let i = 0; i < DATABASE.students.length; i++){
          if( DATABASE.students[i].lastName.toLocaleLowerCase().includes(search.toLocaleLowerCase())){
               selectElement(".student-result").innerHTML += `
              <div class = "box">
              <h2>${DATABASE.students[i].firstName} ${DATABASE.students[i].lastName} (total:)</h2>
              <p> Courses </p>
              <div id = "grid"></div>
              <div id = "box"></div>
              </div>
            `;
            }
        }
    }
}

selectElement("#student").addEventListener("keyup", GetResultsStudent);
