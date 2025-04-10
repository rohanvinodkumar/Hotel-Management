
        document.getElementById("myform").addEventListener("submit", function(event) {
            event.preventDefault();
        
            const isNameValid = a();
            const isEmailValid = b();
            const isphoneValid = c();
        
            if (isNameValid && isEmailValid && isphoneValid) {
                
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
        
    function c(){
        let num=document.getElementById("phone").value;
        if(!/^[0-9]{10,10}$/.test(num)){
            document.getElementById("c").innerHTML="Phone number must be 10 digits";
            return false;}
        else{
            document.getElementById("c").innerHTML="";
            return true;
            
        }}
        
        function saveToLocalStorage() {
            const formData = {
                name: document.getElementById("name").value.trim(),
                email: document.getElementById("email").value,
                phone: document.getElementById("phone").value,
                Roomrating:document.getElementById("q").value,
                Balconyrating:document.getElementById("w").value,
                RoomService:document.getElementById("e").value,
                EmployeeService:document.getElementById("r").value


            };
        
            
            let entries = JSON.parse(localStorage.getItem("feedbackFormEntries")) || [];
            entries.push(formData);
        
            localStorage.setItem("feedbackFormEntries", JSON.stringify(entries));
            console.log("Form data saved to localStorage:", formData);
        }
        
        