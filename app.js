// ===============================
// STUDENT 360 APP
// ===============================

// LOGIN FUNCTION

function login() {

    let name = document.getElementById("name").value;
    let department = document.getElementById("department").value;
    let email = document.getElementById("email").value;
    let regno = document.getElementById("regno").value;
    let phone = document.getElementById("phone").value;
    let year = document.getElementById("year").value;
    let password = document.getElementById("password").value;

    if(name=="" || department=="" || email=="" || regno=="" || phone=="" || year=="" || password==""){

        alert("Please fill all details.");
        return false;

    }

    if(password!="1234"){

        alert("Invalid Password");
        return false;

    }

    localStorage.setItem("name",name);
    localStorage.setItem("department",department);
    localStorage.setItem("email",email);
    localStorage.setItem("regno",regno);
    localStorage.setItem("phone",phone);
    localStorage.setItem("year",year);

    window.location="header.html";

    return false;

}



// ===============================
// SHOW PAGE
// ===============================

function showPage(page){

let pages=document.querySelectorAll(".page");

pages.forEach(function(item){

item.style.display="none";

});

document.getElementById(page).style.display="block";

}



// ===============================
// LOAD PROFILE
// ===============================

window.onload=function(){

if(document.getElementById("profileName")){

document.getElementById("profileName").innerHTML=
localStorage.getItem("name");

document.getElementById("profileDept").innerHTML=
localStorage.getItem("department");

document.getElementById("profileEmail").innerHTML=
localStorage.getItem("email");

document.getElementById("profileReg").innerHTML=
localStorage.getItem("regno");

document.getElementById("profilePhone").innerHTML=
localStorage.getItem("phone");

document.getElementById("profileYear").innerHTML=
localStorage.getItem("year");

}

showPage("dashboard");

loadStudents();

loadAttendance();

loadMarks();

}



// ===============================
// LOGOUT
// ===============================

function logout(){

if(confirm("Do you want to Logout?")){

localStorage.clear();

window.location="index.html";

}

}
// ===============================
// LOAD STUDENT TABLE
// ===============================

function loadStudents(){

let table=document.getElementById("studentTable");

if(!table) return;

table.innerHTML="";

for(let i=1;i<=120;i++){

table.innerHTML+=`

<tr>

<td>92252511${100+i}</td>

<td>Student ${i}</td>

<td>CSE</td>

<td>${(i%4)+1} Year</td>

<td>

<button class="btn">Edit</button>

<button class="btn">Delete</button>

</td>

</tr>

`;

}

}



// ===============================
// LOAD ATTENDANCE
// ===============================

function loadAttendance(){

let table=document.getElementById("attendanceTable");

if(!table) return;

table.innerHTML="";

for(let i=1;i<=120;i++){

let status=Math.random()>0.2?"Present":"Absent";

let color=status=="Present"?"green":"red";

table.innerHTML+=`

<tr>

<td>92252511${100+i}</td>

<td>Student ${i}</td>

<td>CSE</td>

<td>${(i%4)+1} Year</td>

<td style="color:${color};font-weight:bold;">

${status}

</td>

</tr>

`;

}

}



// ===============================
// LOAD MARKS
// ===============================

function loadMarks(){

let table=document.getElementById("marksTable");

if(!table) return;

table.innerHTML="";

for(let i=1;i<=120;i++){

let java=Math.floor(Math.random()*41)+60;
let python=Math.floor(Math.random()*41)+60;
let dbms=Math.floor(Math.random()*41)+60;

let total=java+python+dbms;

table.innerHTML+=`

<tr>

<td>92252511${100+i}</td>

<td>Student ${i}</td>

<td>CSE</td>

<td>${java}</td>

<td>${python}</td>

<td>${dbms}</td>

<td>${total}</td>

</tr>

`;

}

}



// ===============================
// SEARCH STUDENT
// ===============================

function searchStudent(){

let input=document.querySelector(".search");

if(!input) return;

let filter=input.value.toUpperCase();

let table=document.getElementById("studentTable");

let tr=table.getElementsByTagName("tr");

for(let i=0;i<tr.length;i++){

let td=tr[i].getElementsByTagName("td")[1];

if(td){

let value=td.textContent;

tr[i].style.display=value.toUpperCase().indexOf(filter)>-1?"":"none";

}

}

}



// ===============================
// ADD STUDENT
// ===============================

function addStudent(){

alert("Add Student feature coming soon.");

}
// ===============================
// LIVE DATE & TIME
// ===============================

function updateDateTime() {

    let now = new Date();

    let options = {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric"
    };

    let date = now.toLocaleDateString("en-IN", options);
    let time = now.toLocaleTimeString("en-IN");

    let box = document.getElementById("datetime");

    if (box) {
        box.innerHTML = date + " | " + time;
    }

}

setInterval(updateDateTime, 1000);



// ===============================
// DASHBOARD CARD UPDATE
// ===============================

function updateDashboard() {

    let totalStudents = document.getElementById("totalStudents");
    let totalTeachers = document.getElementById("totalTeachers");
    let attendance = document.getElementById("attendancePercent");
    let totalExams = document.getElementById("totalExams");

    if(totalStudents) totalStudents.innerHTML = "120";
    if(totalTeachers) totalTeachers.innerHTML = "15";
    if(attendance) attendance.innerHTML = "85%";
    if(totalExams) totalExams.innerHTML = "08";

}

updateDashboard();



// ===============================
// EDIT STUDENT
// ===============================

function editStudent(name){

    alert("Edit Student : " + name);

}



// ===============================
// DELETE STUDENT
// ===============================

function deleteStudent(name){

    let ok = confirm("Delete " + name + " ?");

    if(ok){

        alert(name + " Deleted Successfully");

    }

}



// ===============================
// ANNOUNCEMENT POPUP
// ===============================

function showAnnouncement(){

    alert(
        "📢 Welcome to Student 360\n\nSemester Exams start on 10 July 2026."
    );

}



// ===============================
// PAGE LOAD
// ===============================

window.addEventListener("load", function(){

    showAnnouncement();

});
function logout(){

localStorage.clear();

window.location.href="logout.html";

}