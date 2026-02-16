function login(){
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    if(username === "" || password === ""){
        alert("Enter Username & Password");
    } else {
        localStorage.setItem("username", username);
        window.location.href = "career.html";
    }
}

function loadUser(){
    var user = localStorage.getItem("username");
    if(user){
        document.getElementById("welcomeUser").innerText = "Welcome, " + user;
    }
}

function logout(){
    localStorage.clear();
    window.location.href = "index.html";
}

function toggleMode(){
    document.body.classList.toggle("dark-mode");
}

function getCareer(){
    var q1 = document.getElementById("q1").value;
    var q2 = document.getElementById("q2").value;
    var q3 = document.getElementById("q3").value;

    var result = "";

    if(q1==="" || q2==="" || q3===""){
        result = "Please answer all questions.";
    }
    else if(q1==="Engineering"){
        result = "Software Engineer / Civil Engineer / AI Developer";
    }
    else if(q1==="Medical"){
        result = "Doctor / Nurse / Medical Researcher";
    }
    else if(q1==="Arts"){
        result = "Graphic Designer / Animator / Content Creator";
    }

    var box = document.getElementById("resultBox");
    box.innerHTML = result;
    box.style.display = "block";
}