// variables for html elements
const adminStateDd = document.querySelector("#adminStateDd");
const adminDataField = document.querySelector("#adminDataField");
const adminContBtn = document.querySelector("#adminContBtn");
const adminNameEntry = document.querySelector("#adminNameEntry");
const adminDescEntry = document.querySelector("#adminDescEntry");
const adminSubmit = document.querySelector("#adminSubmit");
// variables for div containers
const adminNameDiv = document.querySelector("#adminNameDiv");
const adminDescDiv = document.querySelector("#adminDescDiv");


// hiding the data entry fields initially
fieldToggle(adminNameDiv);
fieldToggle(adminDescDiv);
fieldToggle(adminSubmit);

// reference database
const db = firebase.database();

// toggles a field to be shown or hidden
function fieldToggle(field) {
    if(field.style.display === "none") {
        field.style.display = "block";
    } else {
        field.style.display = "none";
    }
}

// when continue is clicked, display appropriate entry fields
adminContBtn.addEventListener("click", function(e){
    if(adminDataField.value == "dbLandmark") {
        fieldToggle(adminNameDiv);
    }
    fieldToggle(adminDescDiv);
    fieldToggle(adminSubmit);
}); 

// Updates the landmark for the state
function updateLandmark(dirId, lmName, lmDesc){
    console.log("updating " + dirId + " landmark to " + lmName);
    var update = {};
    update['state-info/' + dirId + '/landmark/name'] = lmName;
    update['state-info/' + dirId + '/landmark/description'] = lmDesc;

    return firebase.database().ref().update(update);
}

// Updates the law for the state
function updateLaw(dirId, desc) {
    console.log("updating " + dirId + " law to " + desc);
    var update = {};
    update['state-info/' + dirId + '/law/description'] = desc;

    return firebase.database().ref().update(update);
}

// Updates appropriate data in database when submit is clicked
adminSubmit.addEventListener("click", function(e){
    if(adminDataField.value == "dbLandmark") {
        updateLandmark(adminStateDd.value, adminNameEntry.value, adminDescEntry.value);
        fieldToggle(adminDescDiv);
        fieldToggle(adminNameDiv);
    } else if(adminDataField.value == "dbLaws") {
        updateLaw(adminStateDd.value, adminDescEntry.value);
        fieldToggle(adminDescDiv);
    }
    fieldToggle(adminSubmit);

    adminDescEntry.value = "";
    adminNameEntry.value = "";
});

