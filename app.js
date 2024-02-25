// chapter no 4
// Q1
var firstName = "Ghulam ", lastName ="Mustafa", age =18;
document.write("<h1>"+ "My name is "+firstName+lastName +"and my age is "+age +"</h1>")
// Q2 legal variable
var name1="firstName" ,age1="age12345" ,name2="lastname",Student="isStudent",_counter="myvar";
document.write("<h1>" +"Legal variable names:"+"</br>"+"1) "+_counter+"</br>"+"2) "+ name1 +"</br>"+"3) "+ age1 +"</br>"+"4) "+name2+"</br>"+"5) "+Student+"</br>"+"</br>"+"This is legal variable names"+
"</h1>")
//Q2 illegal variable
var name1="1) @name",name2="2) 123name",name3="3) first Name",name4="4) %name",number="5) 012345456";
document.write("<h1>"+"illegal variable names"+"</br>"+name1+"</br>"+name2+"</br>"+name3+"</br>"+name4+"</br>"+number+"</br>"+"</br>"+"this is illegal variable names."+"</h1>")
// Q3
var a= "“Rules for naming JS variables”",b="Variable names can only contain",c="Variables must begin with a",d="Variable names are case",e="Variable names should not be JS";
document.write(b+"</br>"+"numbers $ and _. for example $my_1stVariable"+"</br>"+c+"letter $ or_.for exanple $name _name or name"+"</br>"+d+" sensitive"+"</br>"+e+" keywords")
// chapter no 5
// Q1
var number1 = parseInt(prompt("Enter the first number"));
var number2 = parseInt(prompt("Enter the second number"));
var sum = number1 + number2;
document.write("<h1>Sum of "+number1 + "and "+ number2 +" is "+ sum+ "</h1>")
// Q2
var ticketPrice = 600;
var numberOfTickets = 5;
var totalCost = ticketPrice * numberOfTickets;
console.log("Total cost of buy 5 tickets to a movie is "+ totalCost+ " PKR");
// Q3
var number = prompt( "Enter table Number")
document.write("<h1>" + number +" x 1 ="+ number * 1+ "</br> </h1>")
document.write("<h1>" + number +" x 2 ="+ number * 2+ "</br> </h1>")
document.write("<h1>" + number +" x 3 ="+ number * 3+ "</br> </h1>")
document.write("<h1>" + number +" x 4 ="+ number * 4+ "</br> </h1>")
document.write("<h1>" + number +" x 5 ="+ number * 5+ "</br> </h1>")
document.write("<h1>" + number +" x 6 ="+ number * 6+ "</br> </h1>")
document.write("<h1>" + number +" x 7 ="+ number * 7+ "</br> </h1>")
document.write("<h1>" + number +" x 8 ="+ number * 8+ "</br> </h1>")
document.write("<h1>" + number +" x 9 ="+ number * 9+ "</br> </h1>")
document.write("<h1>" + number +" x 10 ="+ number * 10+ "</br> </h1>")
// Q4
var celsiusTemperature = 25;
var fahrenheitTemperature = (celsiusTemperature * 9/5) + 32;
console.log( celsiusTemperature+" °C is"+fahrenheitTemperature+" °F");
var fahrenheitTemp = 77;
var celsiusTemp = (fahrenheitTemp - 32) * 5/9;
console.log(fahrenheitTemp+" °F is" +celsiusTemp+" °C");
// Q5

var priceItem1 = 10;
var priceItem2 = 20;
var quantityItem1 = 2;
var quantityItem2 = 1;
var shippingCharges = 5;

var totalCostItem1 = priceItem1 * quantityItem1;
var totalCostItem2 = priceItem2 * quantityItem2;

var totalCostItems = totalCostItem1 + totalCostItem2;

var finalTotal = totalCostItems + shippingCharges;

console.log("Total cost of item 1: $" + totalCostItem1);
console.log("Total cost of item 2: $" + totalCostItem2);
console.log("Total cost of all items: $" + totalCostItems);
console.log("Total cost including shipping charges: $" + finalTotal);
// Q6


var totalMarks = 500;
var marksObtained = 420;

var percentage = (marksObtained / totalMarks) * 100;

document.write( "<br>"+"<br>"+"Total Marks: " + totalMarks + "<br>");
document.write("Marks Obtained: " + marksObtained + "<br>");
document.write("Percentage: " + percentage.toFixed(2) + "%");
// Q7
var usDollars = 5;
var saudiRiyals = 20;
var usDollarsToPKR = usDollars * 279.13;
var saudiRiyalsToPKR = saudiRiyals * 74.51;
var totalPKR = usDollarsToPKR + saudiRiyalsToPKR;

console.log("Total amount in Pakistani Rupees: " + totalPKR);
// Q8
var initialNumber =5, Multiply =10, number=2
var result = initialNumber * Multiply
var result1 =result /number
console.log(result1)
// Q9
var currentYear =2024,birthYear = 2006;
var age1 = currentYear - birthYear;
var  age2 = age1 - 1;
console.log("The current year "+ age1 +" or "+ age2+" years old");
// Q10
var radius = 20;
var circumference = 2 * 5 * radius;
var area = 5 * 6 * radius * 2;
console.log("The circumference is "+ circumference.toFixed(2));
console.log("The area is "+ area.toFixed(2));
// Q11
var favoriteSnack = "chocolates",currentAge = 18,maxAge = 50,amountPerDay = 2;
var yearsRemaining = maxAge - currentAge;
var daysRemaining = yearsRemaining * 365;
var totalAmountNeeded = daysRemaining * amountPerDay;
console.log(`You will need ${totalAmountNeeded} ${favoriteSnack} to last you until the ripe old age of ${maxAge}`);
// chapter no 6
// Q1
var a= 5 , b= 2
var result = --a - --b + ++b +b--;  
console.log("The result is "+result)