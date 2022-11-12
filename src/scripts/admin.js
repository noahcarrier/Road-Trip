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

// updates the laws for the state
function updateLaws(dirId, desc) {
    console.log("adding for " + dirId + " new law: " + desc);
    let lawCount = 1;
    let i = 1;
    let data;
    // loop finds appropriate database directory to add law description
    for(i = 1; i != 0; i++) {
        // get the data contained at law directory i
        var currentLaw = firebase.database().ref('state-info/' + dirId + '/laws/law' + i);
        currentLaw.on('value', (snapshot) => {
            data = snapshot.val();
            console.log(data);
        });

        // if the data is empty, i represents the directory number to add description
        if(data == "" || data == null) {
            lawCount = i;
            i = -1; // this breaks out of loop
        }
    }
    // lawCount now represents the correct directory to insert description
    firebase.database().ref('state-info/' + dirId + '/laws/law' + lawCount).set({
        description: desc,
    });
}

// updates appropriate data in database when submit is clicked
adminSubmit.addEventListener("click", function(e){
    console.log("you want to update " + adminDataField.value);
    if(adminDataField.value == "dbLandmark") {
        updateLandmark(adminStateDd.value, adminNameEntry.value, adminDescEntry.value);
    } else if(adminDataField.value == "dbLaws") {
        updateLaws(adminStateDd.value, adminDescEntry.value);
    }
});