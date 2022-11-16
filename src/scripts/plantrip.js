// document elements
const stateSelect = document.querySelector("#stateSelect");
const addBtn = document.querySelector("#addBtn");
// temporary add button i added just to test script - delete later

// Toggles a state button visible or invisible

var trip = new Array();
let counter = -1;

// Updates trip array and unhides state
addBtn.addEventListener("click", function(e){
    counter++;
    trip[counter] = Number(stateSelect.value);
    stateSelect.value = "blank";
});

done_btn.addEventListener("click", function() {
    localStorage.setItem("yourTrip", trip);
    
    window.location.href='trip.html';
});

