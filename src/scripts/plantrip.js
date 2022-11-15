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

// trip = {FL, GA, SC, NC, VA, TN};
// trip[0] = FL;
// console.log(trip[0]);

/*
for (let i = 0; i < trip.length; i++) {
    stateVisibility[trip[i]] = true;
} */

// console.log(stateVisibility);


/*
if (!stateVisibility[AL]) {
    document.getElementById('ALinfo').style.display = 'none';
}
if (!stateVisibility[AK]) {
    document.getElementById('AKinfo').style.display = 'none';
}
if (!stateVisibility[AZ]) {
    document.getElementById('AZinfo').style.display = 'none';
}
if (!stateVisibility[AR]) {
    document.getElementById('ARinfo').style.display = 'none';
}
if (!stateVisibility[CA]) {
    document.getElementById('CAinfo').style.display = 'none';
}
if (!stateVisibility[CO]) {
    document.getElementById('COinfo').style.display = 'none';
}
if (!stateVisibility[CT]) {
    document.getElementById('CTinfo').style.display = 'none';
}
if (!stateVisibility[DE]) {
    document.getElementById('DEinfo').style.display = 'none';
}
if (!stateVisibility[FL]) {
    document.getElementById('FLinfo').style.display = 'none';
}
if (!stateVisibility[GA]) {
    document.getElementById('GAinfo').style.display = 'none';
}
if (!stateVisibility[ID]) {
    document.getElementById('IDinfo').style.display = 'none';
}
if (!stateVisibility[IL]) {
    document.getElementById('ILinfo').style.display = 'none';
}
if (!stateVisibility[IN]) {
    document.getElementById('INinfo').style.display = 'none';
}
if (!stateVisibility[IA]) {
    document.getElementById('IAinfo').style.display = 'none';
}
if (!stateVisibility[KS]) {
    document.getElementById('KSinfo').style.display = 'none';
}
if (!stateVisibility[LA]) {
    document.getElementById('LAinfo').style.display = 'none';
}
if (!stateVisibility[ME]) {
    document.getElementById('MEinfo').style.display = 'none';
}
if (!stateVisibility[MD]) {
    document.getElementById('MDinfo').style.display = 'none';
}
if (!stateVisibility[MA]) {
    document.getElementById('MAinfo').style.display = 'none';
}
if (!stateVisibility[MI]) {
    document.getElementById('MIinfo').style.display = 'none';
}
if (!stateVisibility[MN]) {
    document.getElementById('MNinfo').style.display = 'none';
}
if (!stateVisibility[MS]) {
    document.getElementById('MSinfo').style.display = 'none';
}
if (!stateVisibility[MO]) {
    document.getElementById('MOinfo').style.display = 'none';
}
if (!stateVisibility[MT]) {
    document.getElementById('MTinfo').style.display = 'none';
}
if (!stateVisibility[NE]) {
    document.getElementById('NEinfo').style.display = 'none';
}
if (!stateVisibility[NV]) {
    document.getElementById('NVinfo').style.display = 'none';
}
if (!stateVisibility[NH]) {
    document.getElementById('NHinfo').style.display = 'none';
}
if (!stateVisibility[NJ]) {
    document.getElementById('NJinfo').style.display = 'none';
}
if (!stateVisibility[NM]) {
    document.getElementById('NMinfo').style.display = 'none';
}
if (!stateVisibility[NY]) {
    document.getElementById('NYinfo').style.display = 'none';
}
if (!stateVisibility[NC]) {
    document.getElementById('NCinfo').style.display = 'none';
}
if (!stateVisibility[ND]) {
    document.getElementById('NDinfo').style.display = 'none';
}
if (!stateVisibility[OH]) {
    document.getElementById('OHinfo').style.display = 'none';
}
if (!stateVisibility[OK]) {
    document.getElementById('OKinfo').style.display = 'none';
}
if (!stateVisibility[OR]) {
    document.getElementById('ORinfo').style.display = 'none';
}
if (!stateVisibility[PA]) {
    document.getElementById('PAinfo').style.display = 'none';
}
if (!stateVisibility[RI]) {
    document.getElementById('RIinfo').style.display = 'none';
}
if (!stateVisibility[SC]) {
    document.getElementById('SCinfo').style.display = 'none';
}
if (!stateVisibility[SD]) {
    document.getElementById('SDinfo').style.display = 'none';
}
if (!stateVisibility[TN]) {
    document.getElementById('TNinfo').style.display = 'none';
}
if (!stateVisibility[TX]) {
    document.getElementById('TXinfo').style.display = 'none';
}
if (!stateVisibility[UT]) {
    document.getElementById('UTinfo').style.display = 'none';
}
if (!stateVisibility[VT]) {
    document.getElementById('VTinfo').style.display = 'none';
}
if (!stateVisibility[VA]) {
    document.getElementById('VAinfo').style.display = 'none';
}
if (!stateVisibility[WA]) {
    document.getElementById('WAinfo').style.display = 'none';
}
if (!stateVisibility[WV]) {
    document.getElementById('WVinfo').style.display = 'none';
}
if (!stateVisibility[WI]) {
    document.getElementById('WIinfo').style.display = 'none';
}
if (!stateVisibility[WY]) {
    document.getElementById('WYinfo').style.display = 'none';
} */