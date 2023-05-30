let div = document.querySelector('.result');
let divErr = document.querySelector('.error');
let resultYear = document.querySelector('.resultYear');
let resultDay = document.querySelector('.resultDay');
let resultMonth = document.querySelector('.resultMonth');
let box = document.querySelector('.box');

function conta() {
let dia = parseInt(document.querySelector('.dia').value);
let mes = parseInt(document.querySelector('.mes').value);
let ano = parseInt(document.querySelector('.ano').value);
let line = document.querySelector('.line');
var today = new Date();
var todayYear = today.getFullYear();
var todayDay = today.getDate();
var todayMonth = today.getMonth() + 1;
var year =  todayYear - ano;
  
if(todayMonth >= mes){
  var month = todayMonth - mes;
}  else{
  year -= 1;
  var month =  (12 - mes) + todayMonth;
}
if(todayDay >= dia){
  var day = todayDay - dia;
}  else{
  year -= 1;
  var day = dia - todayDay;
}
     if(isNaN(dia) || isNaN(mes) || isNaN(ano)){
    div.style.display = "none";
    divErr.style.display = "block";
    divErr.innerHTML= "Prencha os campos corretamente!"
 } else if(dia > 31 || dia < 1 || mes > 12 || mes < 1 || ano > 2023){
    div.style.display = "none";
    divErr.style.display = "block";
   box.style.border = "none"
    divErr.innerHTML= "Prencha os campos corretamente!";
 }
  else {
    divErr.style.display = "none";
    div.style.display = "flex";
    box.style.borderRadius = "0 0 4rem 0"
    resultYear.innerHTML= year;
    resultMonth.innerHTML= month ;
    resultDay.innerHTML= day;
  }

}

function handleKeyPress(e){
 var key=e.keyCode || e.which;
  if (key==13){
     conta();
  }
}