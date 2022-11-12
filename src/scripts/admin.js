/*
    for some reason, this script is not recognizing any of the variables properly--
    it's acting like i've used the wrong id name or something to that length.
    i was using the register.js script as a sort of template to get started since that section works properly.
*/

// variables
const state = document.querySelector("#state_select");
const adminSbt = document.querySelector("#admin_submit");

// reference database
const db = firebase.database();

// debugging: (this is printing an empty string for some reason)
console.log(state.value);

// simple function to test if the addEventListener is working - it is not :(
adminSbt.addEventListener("click", function(e){
    console.log("Admin submit clicked");
});

// redirect buttons
const aboutReturnAdmin = document.querySelector("#aboutpage");
const indexReturnAdmin = document.querySelector("#indexpage");
const loginReturnAdmin = document.querySelector("#loginpage");
const pickastateReturnAdmin = document.querySelector("#pickastatepage");
const registerReturnAdmin = document.querySelector("#registerpage");

// none of these are working either, i think they are null for some reason
aboutReturnAdmin.addEventListener("click", function(e){
    window.location.replace("about.html");
});

indexReturnAdmin.addEventListener("click", function(e){
    window.location.replace("index.html");
});

loginReturnAdmin.addEventListener("click", function(e){
    window.location.replace("login.html");
});

pickastateReturnAdmin.addEventListener("click", function(e){
    window.location.replace("pickastate.html");
});

registerReturnAdmin.addEventListener("click", function(e){
    window.location.replace("register.html");
});

