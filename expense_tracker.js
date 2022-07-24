var currentMonth = document.getElementById('current-month'); 
var amountLeft = document.getElementById('amount-left');
var expenseType = document.getElementById('expense-type');
var description = document.getElementById('description');
var amount = document.getElementById('amount');
var submitBtn = document.getElementById('submit-button');
var expenses = document.getElementById('expenses');
var amountInvested = document.getElementById('amount-invested');
var amountSpent = document.getElementById('amount-spent');

var budget = 0; 

var salary = 0; 
var investment = 0; 
var shopping = 0; 

/* Displaying current month and year */
var currentDate = new Date();
var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
currentMonth.innerHTML = months[currentDate.getMonth()] + " " + currentDate.getFullYear();  

/* Calculating and Displaying amount left for expenses in this month */

submitBtn.addEventListener('click',function(){
    var x = document.createElement("LI");
    var p1 = document.createElement("P");
    var p2 = document.createElement("P");
    var t1 = document.createTextNode(description.value);   
    var t2 = document.createTextNode(amount.value);   
    if(expenseType.value == "salary"){
        salary += parseInt(amount.value);   
        p2.style.color = 'green'; 
    }else if(expenseType.value == "investment"){
        investment += parseInt(amount.value); 
        p2.style.color = 'orange';
    }else{
        shopping += parseInt(amount.value);
        p2.style.color = 'red'; 
    } 
    p1.appendChild(t1); 
    p2.appendChild(t2);
    x.appendChild(p1);
    x.appendChild(p2);  
    expenses.appendChild(x);
    budget = salary - investment - shopping;
    amountLeft.innerHTML = budget;  
    amountInvested.innerHTML = investment; 
    amountSpent.innerHTML = shopping; 
});

