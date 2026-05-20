function login(){

    const users = JSON.parse(localStorage.getItem("users")) || [];
    const input = document.getElementById("loginInput").value.trim();
    const password = document.getElementById("loginPassword").value.trim();
    const found = users.find(user =>
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
    }
    else{

        msg.innerText = "Invalid Email / Phone or Password";
        msg.className ="text-red-600 text-center mt-3 font-bold";

    }
}