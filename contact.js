
document.getElementById("myform").addEventListener("submit", function(event) {
    event.preventDefault(); 

    const isNameValid = a();
    const isEmailValid = b();
    const isSubjectValid = c();

    if (isNameValid && isEmailValid && isSubjectValid) {
        
        saveToLocalStorage();
        if (confirm("Confirm submission?")) {
            alert("Submitted");
            document.getElementById("myform").reset();
        }
    }
});

function a() {
    let name = document.getElementById("name").value.trim();
    if (!/^[a-zA-Z\s]+$/.test(name)) {
        document.getElementById("a").innerHTML = "Invalid Name";
        return false;
    } else {
        document.getElementById("a").innerHTML = "";
        return true;
    }
}

function b() {
    let email = document.getElementById("email").value;
    if (!/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-z]{2,}$/.test(email)) {
        document.getElementById("b").innerHTML = "Invalid Email";
        return false;
    } else {
        document.getElementById("b").innerHTML = "";
        return true;
    }
}

function c() {
    let sub = document.getElementById("subject").value;
    if (sub == "") {
        document.getElementById("c").innerHTML = "Please enter a subject.";
        return false;
    } else {
        document.getElementById("c").innerHTML = "";
        return true;
    }
}

function saveToLocalStorage() {
    const formData = {
        name: document.getElementById("name").value.trim(),
        email: document.getElementById("email").value,
        subject: document.getElementById("subject").value,
        message: document.getElementById("message").value,
    };

    
    let entries = JSON.parse(localStorage.getItem("contactFormEntries")) || [];
    entries.push(formData);

    localStorage.setItem("contactFormEntries", JSON.stringify(entries));
    console.log("Form data saved to localStorage:", formData);
}

