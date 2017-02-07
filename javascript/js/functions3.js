(function() {
//Conditional statements
var year = 2016, msg = "In the ";
if (year > 2000) {
msg += "twenty-first century";
} else if (year > 1900) {
msg += "twentieth century";
} else {
msg += "very distant past.";
}
console.log(msg); // In the very distant past

//SWITCH
var order_size = "small";
switch (order_size) {
case "small":
alert("small");
break;
case "medium":
alert("medium");
break;
case "large":
alert("large");
break;
case "extra large":
alert("extra large");
break;
default:
alert("something else?");
}

var temp = 18,
msg = (temp > 10) ? "Today was warm" : "Today was cold";
console.log(msg);

//for loop
var names = ["Ringo", "John", "Paul", "George"];
for (var i = 0; i < names.length; i++) {
console.log("Say hello to " + names[i]);
}

//object
var person = {
name : "Jules Verne",
job : "Author",
year_of_birth: 1828,
year_of_death: 1905
},
prop;
for (prop in person) {
console.log("His " + prop + " is " + person[prop]);
}

//Greetings..
function getGreeting(hour) {
var msg;
if (hour < 12) {
msg = "Good Morning!";
} else if (hour < 17) {
msg = "Good Afternoon!";
} else {
msg = "Good Evening!";
}
return msg;
}
var message = getGreeting( 17 ); // 4 PM
alert(message); // Good Afternoon!


///PASSING ARGUMENTS...
function sum() {
var sum = 0, i;
for ( i = 0 ; arguments[i]; i++) {
sum += arguments[i];
}
return sum;
}
var sum1 = sum(1, 2),
sum2 = sum(100, 75, 40),
sum3 = sum(9, 1.4, 8, 2, 79, 3234, 6, 4, 5e3, 5);
console.log('SUM1', sum1); // 2
console.log('SUM2', sum2); // 215
console.log('SUM3', sum3); // 8348.4


}() );