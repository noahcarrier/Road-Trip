// login information
const username = document.querySelector("#url_user");
const password = document.querySelector("#url_pass");
const signup_btn = document.querySelector("#signup_btn");
const login_return = document.querySelector("#login_return");

// reference database
const db = firebase.database();



// send information to the database when user clicks login
signup_btn.addEventListener("click", function(e){
    console.log("inside database user-credentials update function");

    if(username.value == "" || password.value == ""){
        alert("Please enter a valid username and password.");
    } else {
        db.ref("/user-credentials/").push({
            username: username.value,
            password: password.value,
        });
    }

    username.value = "";
    password.value = "";

    alert("Account successfully created!");

    // line that breaks entire function: 
   // window.location.replace("index.html");
});

// sends user back to login page on click
login_return.addEventListener("click", function(e){
    window.location.replace("login.html");
});



// separate event listener for same login_btn click to send user to login page, also buggy
/*
signup_btn.addEventListener("click", function(e){
    console.log("inside window change function")
    window.location.replace("index.html");
});
*/

// db.ref("/user-credentials/").child ...

