// Christopher Aponte
// Project 3
//SDI-1311

// Variables
var myName = "Jared";
var cabName1 = "\"Checker\" Cab";
var cabName2 = "\"City\" Cab";
var area1 = "Disney";
var area2 = "Orlando Airport";
var cabStandArea;
var travelTime;
var todaysFleet;
var todaysGoal;

// Promt
todaysGoal = parseInt(prompt("what is the goal for today? ", " Enter a number from 5 - 15"));
    console.log(myName + "'s goal for today is " + todaysGoal + " cab calls.");
    
// Procedure
var dayLength = function(n) {
    if (n < 10) {
        console.log(myName + " will have a short day today.");
    }else {
        console.log(myName + " will have a long day today.");
    }
};// End Procedure

dayLength(todaysGoal);
console.log(" ");

// boolean Confirm
todaysFleet = confirm("will " + myName + " be driving the " + cabName1 + " fleet today?");

// Boolean function
var getWorkArea = function(cabs, value) {
    var DisneyArea;
    while (cabs > 0) {
        if (value === true) {
            console.log(cabs + " cabs are left, " + myName + " will call dispatch and try and reservea " + cabName1);
            DisneyArea = true;
        }else {
            DisneyArea = false;
        }
        cabs--;
    }
    return DisneyArea;
};// End Boolean Function

var todaysArea = getWorkArea(10, todaysFleet);
console.log(" ");

// Number Function
var getMilesToLocation = function(miles) {
    var milesToGo;
    for (i = 0; i <= miles; i ++) {
        milesToGo = miles - i;
        console.log(myName + " has " + milesToGo + " miles to go.");
        }
    return milesToGo;
};// End Number Function

travelTime = getMilesToLocation(17);
console.log(" ");

// String Function
var findCabStand = function(cab, area) {
    var cabStand;
    if (todaysFleet === true) {
        cab = cabName1;
        area = area1;
        cabStand = cab + ", " + area + ",";
    }else {
        cab = cabName2;
        area = area2;
        cabStand = cab + ", " + area + ",";
    }
    return cabStand;
};// End String Function

cabStandArea = findCabStand();

// Return Values

// Boolean
console.log("boolean: " + todaysArea);
// Number
console.log("number: " + travelTime);
// String
console.log("string: " + cabStandArea);
console.log(" ");

//Outputs

console.log("It is " + todaysFleet + " that " + myName + " will drive " + cabName1 + " today.");
console.log("It is " + todaysArea + " that " + myName + " will be working the " + area1 + " area today.");
console.log(myName + " has " + travelTime + " miles to go and is ready to make some money!");
console.log(myName + " will be waiting at the " + cabStandArea + " cabstand.");