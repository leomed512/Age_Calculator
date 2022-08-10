document.querySelector("#formContainer").addEventListener("submit", checkSubmit);

function checkSubmit(event)
{
  event.preventDefault();
  if(document.getElementById("date").value.length > 0 && document.getElementById("month").value.length > 0 && document.getElementById("year").value.length > 0) {
    calculateAge();
  }
}


function calculateAge () {

    let d1 = document.querySelector('#date');
    let myDate = d1.value;
    let m1 = document.querySelector('#month');
    let myMonth = m1.value;
    let y1 = document.querySelector('#year');
    let myYear = y1.value;

    let currentDate = new Date;
    let d2 = currentDate.getDate();
    let m2 = 1 + currentDate.getMonth();
    let y2 = currentDate.getFullYear();
    let monthLenght = [31,28,31,30,31,30,31,31,30,31,30,31];

    if (myDate > d2) {
        d2 = d2 + monthLenght[m2-1];
        m2 = m2 - 1
    }

    if (myMonth > m2) {
        m2 = m2 + 12;
        y2 = y2-1;
    }

    let d = d2 - myDate;
    let  m = m2 - myMonth;
    let y = y2 - myYear;

    let text1 = document.querySelector('#displayAge');   

    if (m > 0) {
        text1.innerText = `Your age is ${y} years, ${m} months and ${d} days`;  
    } else {
        text1.innerText = `Your age is ${y} years and ${d} days`;   
    }
    
    text1.classList.add("animate__animated", "animate__bounceIn");

    let hideButton = document.querySelector('.submitButton');
    hideButton.classList.add("d-none");

}

