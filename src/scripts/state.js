// Invisible identifier element: grabs the correct state id from the hidden element on each state page.
const stateIdField = document.querySelector("#stateId");
const stateId = document.querySelector("#stateId").innerHTML;

// HTML fields to update:
const lawPara = document.querySelector("#" + stateId + "-law");
const lmName = document.querySelector("#" + stateId + "-lmName");
const lmDesc = document.querySelector("#" + stateId + "-lmDesc");

// Reference database
const db = firebase.database();

// Toggle invisible identifier to hidden.
fieldToggle(stateIdField);

function fieldToggle(field) {
    if(field.style.display === "none") {
        field.style.display = "block";
    } else {
        field.style.display = "none";
    }
}

// Call load functions to load in information from the database.
loadLaw(stateId, lawPara);
loadLandmark(stateId, lmName, lmDesc);

// Load in road law from database
function loadLaw(dirId, field) {
    console.log("loading law for " + dirId);
    let data;

    var law = firebase.database().ref('state-info/' + dirId + '/law');
    law.on('value', (snapshot) => {
        data = snapshot.val();
        console.log("loading data: " + data.description);
        // Update appropriate innerHTML:
        field.innerHTML = data.description;
    });
}

// Load the appropriate landmark.
function loadLandmark(dirId, nameField, descField) {
    let nameData, descData;

    var name = firebase.database().ref('state-info/' + dirId + '/landmark');
    name.on('value', (snapshot) => {
        nameData = snapshot.val();
        console.log("loading data: " + nameData.name);
        // Update appropriate innerHTML:
        nameField.innerHTML = nameData.name;
    });

    var desc = firebase.database().ref('state-info/' + dirId + '/landmark');
    desc.on('value', (snapshot) => {
        descData = snapshot.val();
        console.log("loading data: " + descData.description);
        // Update appropriate innerHTML:
        descField.innerHTML = descData.description;
    });
}