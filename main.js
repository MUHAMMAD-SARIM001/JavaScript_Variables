// Chp -3 Variable Illegal & legal------------>

// Question-1

// let x,y,z;

// Question-2

//    LEGAL VARIABLES

//    let fullname = "Muhammad SARIM";
//    let bio_Data = "No";
//    let $fullInfo =  "why?";
//    let Age123 = 18;
//    let  camelCase = "camel_Onth" ;
//    iLLEGAL VARIABLES

//    let @SARIM = "illegal";
//    let 123javaScript = "illegal" ;
//    let codeWith-Sarim =  "illegal";
//    let   const =  "illegal";
//    let full Name ="illegal" ;

// Question-3

// document.getElementById("demo").innerHTML =
//   " <h1> Rules For Naming javaScript</h1> <p>Variables Names Can Only Contain  Uppercase & lowercase alphabet (A to z)</p> <p> Variable names can include digits from (0 to 9), but cannot start with a digit </p> <p>  An UnderScore & A Dollar ($) Sign </p><p> Variable must begin with a alphabet, underscore or dollar sign</p> <p> Variables name are case-SENSITIVE</P> <p> Variables name Should Not Be javaScript keyWords";

// Chp -4 MATH EXPRESSIONS---------------->

// Question-1

// let num1 = 5
// let num2 = 10
// let sums = num1+num2
// document.getElementById("expressions").innerText = "Sum of " + num1 + " and " + num2 + " is " + sums;

// Question-2

// part-a

// let num1 = 5
// let num2 = 10
// let sums = num1-num2
// document.getElementById("subtraction").innerText = "Sum of " + num1 + " and " + num2 + " is " + sums;

// part-b

// let num1 = 5
// let num2 = 10
// let sums = num1*num2
// document.getElementById("multiplication").innerText = "Sum of " + num1 + " and " + num2 + " is " + sums;

// part-c

// let num1 = 5
// let num2 = 10
// let sums = num1/num2
// document.getElementById("division").innerText = "Sum of " + num1 + " and " + num2 + " is " + sums;

// part-d

// let num1 = 5
// let num2 = 10
// let sums = num1%num2
// document.getElementById("modulus").innerText = "Sum of " + num1 + " and " + num2 + " is " + sums;

// Question-3

// part-a

// let java_Number = 0

// part-b

// console.log("Value of the variable is:", java_Number);

// part-c

// java_Number = 5

// part-d

// console.log("Initial value is:", java_Number);

// part-e

// java_Number++;

// part-f

// console.log("Value After Increment is:", java_Number);

// part-g

// java_Number += 7

// part-h

// console.log("Value after adding 7 is:", java_Number)

// part-i

// java_Number--;

// part-j

// console.log("Value After Decrement is:", java_Number);

// part-k

// java_Number = java_Number % 3;

// part-l

// console.log("Value After Modulus is:", java_Number);

// Question-4

// let ticketPrice = 600
// let cost = ticketPrice * 5
//     document.getElementById("ticket").innerText = ("The Total Cost Of Buying 5 Tickets Is " + cost)
// alert(ticketPrice * buyingTickets)

// Question-5

// const number = 4;

// const tableContainer = document.getElementById("multiplication-table");

// let tableHTML = "";

// for (let i = 1; i <= 10; i++) {

//   tableHTML += `${number} x ${i} = ${number * i}<br>`;
// }

// tableContainer.innerHTML = tableHTML;

// Question-6

// let item_1_Price = 650;
// let Item_1_Quantity = 3;
// let item_2_Price = 100;
// let Item_2_Quantity = 7;
// let shippingCharges = 100;

// let totalAmount =
//   item_1_Price * Item_1_Quantity +
//   item_2_Price * Item_2_Quantity +
//   shippingCharges;

// document.write("<h1>Shopping Cart </h1>");

// document.write(`<p>price of item 1 is ${item_1_Price} </p>`);

// document.write(`<p> price of item 2 is  ${item_2_Price}`);

// document.write(`<p> Order Quantity of item 1 is ${Item_1_Quantity}`);
// document.write(`<p> Order Quantity of item 2 is ${Item_2_Quantity}`);
// document.write(`<p> Shipping Charges Is  ${shippingCharges}`);

// document.write(
//   `<p> ${item_1_Price} * ${Item_1_Quantity} + ${item_2_Price} * ${Item_2_Quantity} = ${totalAmount}</p>`
// );

// document.write(`<h2>Total Cost:  ${totalAmount} Rs  </h2>`);

// Question-8

// let totalMarks = 980;
// let marksObtained = 804;
// let percentage = (marksObtained / totalMarks) * 100;
// document.write("Percentage is" + percentage.toFixed(2));

// Question-9

// let usDollar = 10
// let Riyal = 25
// let dollarIntoPKR = 300;
// let RiyalIntoPKR = 70

// let totalConversion = (usDollar * dollarIntoPKR ) + (Riyal * RiyalIntoPKR) ;
// let totalAmount = totalConversion
// document.write("Total Currency In PKR is :" + totalAmount)

// Question-10

// let calculation = 2
// let addNumber = (( calculation + 5 ) * 10 ) / 2
// document.write(  "Total Calculation Answer is :" +`${addNumber}`)

// Question-11

// let currentYear = 2024
//  let birthYear = 2006

//  let Age = currentYear -  birthYear 
//   let possibleAge = Age - 2
//   document.write(` They Are Either  ${Age} Or ${possibleAge} `)

// Question-12

// let radiusoFaCircle = 20
// let pi = 3.142
// let circumFerence = 2 * pi * radiusoFaCircle;
// document.write(`The circumference is ${circumFerence.toFixed(2)}<br>`);


// let area = pi * radiusoFaCircle ** 2    ;
// document.write(`The area is ${area.toFixed(2)}`);


// Question-13

// let favouriteSnacks = "Kurkure"
// let Age = 18
// let maximunAge = 50
// let snacksPerDay = 5

// let remainingYears = maximunAge - Age
// let totalSnacks = remainingYears * 365 * snacksPerDay
// document.write(`you will need ${totalSnacks}  ${favouriteSnacks} to last you until the ripe  old age of ${maximunAge}`)

// Chp-6----------------->

// Question-4


// let userName = prompt("Please enter your name:");   
// document.write("Hello, " + userName + "! Welcome!");