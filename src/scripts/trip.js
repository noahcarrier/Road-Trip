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

var stateVisibility = new Array();
for (let i = 0; i < 48 ; i++) {
    stateVisibility[i] = false;
}

var trip = new Array();
trip = localStorage.getItem("yourTrip");

console.log(trip);

for (let i = 0; i < trip.length; i++) {
    stateVisibility[trip[i]] = true;
    console.log(trip[i] + " is true!");
}

console.log(stateVisibility);


if (stateVisibility[AL] === false) {
    document.getElementById('ALinfo').style.display = 'none';
}
if (stateVisibility[AZ] === false) {
    document.getElementById('AZinfo').style.display = 'none';
}
if (stateVisibility[AR] === false) {
    document.getElementById('ARinfo').style.display = 'none';
}
if (stateVisibility[CA] === false) {
    document.getElementById('CAinfo').style.display = 'none';
}
if (stateVisibility[CO] === false) {
    document.getElementById('COinfo').style.display = 'none';
}
if (stateVisibility[CT] === false) {
    document.getElementById('CTinfo').style.display = 'none';
}
if (stateVisibility[DE] === false) {
    document.getElementById('DEinfo').style.display = 'none';
}
if (stateVisibility[FL] === false) {
    document.getElementById('FLinfo').style.display = 'none';
}
if (stateVisibility[GA] === false) {
    document.getElementById('GAinfo').style.display = 'none';
}
if (stateVisibility[ID] === false) {
    document.getElementById('IDinfo').style.display = 'none';
}
if (stateVisibility[IL] === false) {
    document.getElementById('ILinfo').style.display = 'none';
}
if (stateVisibility[IN] === false) {
    document.getElementById('INinfo').style.display = 'none';
}
if (stateVisibility[IA] === false) {
    document.getElementById('IAinfo').style.display = 'none';
}
if (stateVisibility[KS] === false) {
    document.getElementById('KSinfo').style.display = 'none';
}
if (stateVisibility[KY] === false) {
    document.getElementById('KYinfo').style.display = 'none';
}
if (stateVisibility[LA] === false) {
    document.getElementById('LAinfo').style.display = 'none';
}
if (stateVisibility[ME] === false) {
    document.getElementById('MEinfo').style.display = 'none';
}
if (stateVisibility[MD] === false) {
    document.getElementById('MDinfo').style.display = 'none';
}
if (stateVisibility[MA] === false) {
    document.getElementById('MAinfo').style.display = 'none';
}
if (stateVisibility[MI] === false) {
    document.getElementById('MIinfo').style.display = 'none';
}
if (stateVisibility[MN] === false) {
    document.getElementById('MNinfo').style.display = 'none';
}
if (stateVisibility[MS] === false) {
    document.getElementById('MSinfo').style.display = 'none';
}
if (stateVisibility[MO] === false) {
    document.getElementById('MOinfo').style.display = 'none';
}
if (stateVisibility[MT] === false) {
    document.getElementById('MTinfo').style.display = 'none';
}
if (stateVisibility[NE] === false) {
    document.getElementById('NEinfo').style.display = 'none';
}
if (stateVisibility[NV] === false) {
    document.getElementById('NVinfo').style.display = 'none';
}
if (stateVisibility[NH] === false) {
    document.getElementById('NHinfo').style.display = 'none';
}
if (stateVisibility[NJ] === false) {
    document.getElementById('NJinfo').style.display = 'none';
}
if (stateVisibility[NM] === false) {
    document.getElementById('NMinfo').style.display = 'none';
}
if (stateVisibility[NY] === false) {
    document.getElementById('NYinfo').style.display = 'none';
}
if (stateVisibility[NC] === false) {
    document.getElementById('NCinfo').style.display = 'none';
}
if (stateVisibility[ND] === false) {
    document.getElementById('NDinfo').style.display = 'none';
}
if (stateVisibility[OH] === false) {
    document.getElementById('OHinfo').style.display = 'none';
}
if (stateVisibility[OK] === false) {
    document.getElementById('OKinfo').style.display = 'none';
}
if (stateVisibility[OR] === false) {
    document.getElementById('ORinfo').style.display = 'none';
}
if (stateVisibility[PA] === false) {
    document.getElementById('PAinfo').style.display = 'none';
}
if (stateVisibility[RI] === false) {
    document.getElementById('RIinfo').style.display = 'none';
}
if (stateVisibility[SC] === false) {
    document.getElementById('SCinfo').style.display = 'none';
}
if (stateVisibility[SD] === false) {
    document.getElementById('SDinfo').style.display = 'none';
}
if (stateVisibility[TN] === false) {
    document.getElementById('TNinfo').style.display = 'none';
}
if (stateVisibility[TX] === false) {
    document.getElementById('TXinfo').style.display = 'none';
}
if (stateVisibility[UT] === false) {
    document.getElementById('UTinfo').style.display = 'none';
}
if (stateVisibility[VT] === false) {
    document.getElementById('VTinfo').style.display = 'none';
}
if (stateVisibility[VA] === false) {
    document.getElementById('VAinfo').style.display = 'none';
}
if (stateVisibility[WA] === false) {
    document.getElementById('WAinfo').style.display = 'none';
}
if (stateVisibility[WV] === false) {
    document.getElementById('WVinfo').style.display = 'none';
}
if (stateVisibility[WI] === false) {
    document.getElementById('WIinfo').style.display = 'none';
}
if (stateVisibility[WY] === false) {
    document.getElementById('WYinfo').style.display = 'none';
} 
