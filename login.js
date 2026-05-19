function login(){

    let users = JSON.parse(localStorage.getItem("users")) || [];

    let input = document.getElementById("loginInput").value.trim();
    let password = document.getElementById("loginPassword").value.trim();

    let found = users.find(user =>
        (user.email === input || user.phonenumber === input) &&
        user.password === password
    );

    if(found){
        localStorage.setItem(
            "currentUser",
            found.firstname
        );

        window.location.href =
        "succes.html";

        // alert("Login Successful");
        // msg.innerText = "";
    }
    else{

        msg.innerText = "Invalid Email / Phone or Password";
        msg.className ="text-red-600 text-center mt-3 font-bold";

    }
}