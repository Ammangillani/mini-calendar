let date= document.getElementById("date");
let day= document.getElementById("day");
let month= document.getElementById("month");
let year= document.getElementById("year");

let weekdays = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]
let months =["January","Febuary","March","April","May","June","July","August","September","October","November","December"]
let today = new Date();

console.log(today);

date.innerHTML = today.getDate();
day.innerHTML = weekdays[today.getDay()];
month.innerHTML =months[ today.getMonth()];
year.innerHTML = today.getFullYear();


