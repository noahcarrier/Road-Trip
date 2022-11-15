// document elements
const stateSelect = document.querySelector("#stateSelect");
// temporary add button i added just to test script - delete later
const tempAdd = document.querySelector("#tempAdd");

// Toggle all the state buttons to invisible
for(let i = 0; i < 48; i++) {
    //stateToggle(appropriate id);
}


// Adds a state to the trip
function addState(stateId) {
    console.log("adding state" + stateId + " to trip");
}

// Toggles a state button visible or invisible
function stateToggle(state) {
    if(state.style.display === "none") {
        state.style.display = "block";
    } else {
        state.style.display = "none";
    }
}

var trip = new Array();
let counter = -1;

// Updates trip array and unhides state
tempAdd.addEventListener("click", function(e){
    counter++;
    trip[counter] = Number(stateSelect.value);
    addState(trip[counter]);
});

done_btn.addEventListener("click", function() {
    localStorage.setItem("yourTrip", trip);
    
    window.location.href='trip.html';
});

