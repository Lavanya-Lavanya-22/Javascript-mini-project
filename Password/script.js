let eyeicon = document.getElementById("eyeicon");
let password = document.getElementById("password");
let h1text = document.getElementById("h1-text");

eyeicon.onclick = function () {
    if (password.value == "") {
        h1text.textContent = "Please Enter the Password";
    } else {
        if (password.type == "password") {
            password.type = "text";
            eyeicon.src = "view.png";
            h1text.textContent = "Password is Shown";
        } else {
            password.type = "password";
            eyeicon.src = "invisible.png";
            h1text.textContent = "Password is Hidden";
        }
    }
};
