/*
Author: Harrison Canton
Date: 2.12.18
*/


var myNames = ["Thrall", "V", "Jungkook", "Min-Yoongi", "Jimin", "Fox Mcloud", "Falco Lombardi", "Patrick Clawson", "Kanye West", "Jacob"];
var hoursWorked = [30, 20, 25, 12 , 19, 17, 34, 42, 26, 66];
var hourlySalary = [9.25,6.25,8.75,6.00,7.40, 6.30, 5.95, 5.75, 10.00, 8.75];

function calcPay() {
  for (var i = 0; i < names.length; i++){
    var totalPay = ((hoursWorked[i] * hourlySalary[i]));
    document.write("<p>Employee " + myNames[i] + "worked" + hoursWorked[i] + " hours during the previous week, for total of $" + totalPay + " dollars at $" + hourlySalary[i] "per hour.</p>");
  }
}

calcPay();
