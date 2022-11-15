var AL = 0;
var AZ = 1;
var AR = 2;
var CA = 3;
var CO = 4;
var CT = 5;
var DE = 6;
var FL = 7;
var GA = 8;
var ID = 9;
var IL = 10;
var IN = 11;
var IA = 12;
var KS = 13;
var KY = 14;
var LA = 15;
var ME = 16;
var MD = 17;
var MA = 18;
var MI = 19;
var MN = 20;
var MS = 21;
var MO = 22;
var MT = 23;
var NE = 24;
var NV = 25;
var NH = 26;
var NJ = 27;
var NM = 28;
var NY = 29;
var NC = 30;
var ND = 31;
var OH = 32;
var OK = 33;
var OR = 34;
var PA = 35;
var RI = 36;
var SC = 37;
var SD = 38;
var TN = 39;
var TX = 40;
var UT = 41;
var VT = 42;
var VA = 43;
var WA = 44;
var WV = 45;
var WI = 46;
var WY = 47;

// document elements
const stateSelect = document.querySelector("#stateSelect");
// temporary add button i added just to test script - delete later
const tempAdd = document.querySelector("#tempAdd");

// Toggle all the state buttons to invisible
for(let i = 0; i < 48; i++) {
    //stateToggle(appropriate id);
}

// Not sure if this array will be necessary, keeping it around just in case
var stateVisibility = new Array(48);
for (let i = 0; i < 48 ; i++) {
    stateVisibility[i] = false;
}

// Adds a state to the trip
function addState(stateId) {
    console.log("adding state" + stateId + " to trip");
    // stateToggle(stateId);
    /*
    stateVisibility[trip[counter]] = true;
    console.log("Visibility of state " + stateId + " is " + stateVisibility[trip[counter]]);
    */
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

