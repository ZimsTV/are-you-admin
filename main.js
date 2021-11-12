"use strict";
//1
let age = prompt("Скільки Вам років ?");

if (age >=18){
  alert ("Вхід дозволено.");
} else {
  alert("Доступ заборонено!");
}

//2
let name1 = "Віталька";
let name2 = "Gambit";

let names = prompt("Як Вас звати?");

if (names === name1 ){
  alert( "Ваш рівень доступу  - 'Каченя'");
} else if (names === name2 ){
  alert("Ваш рівень доступу  - 'Сосиска'");
} else if (names) {
  alert("Доступ закритий ,геть звідси !");
}

//3
let you = " ты ";
let not = " не ";
let admin =" адмiн ";

let dogs = confirm('Вам подобаються цуценята?');
let functions = confirm ('2 більше 3?');

if (dogs === true && functions ===false ){
  alert ( you  + not  +  admin);
} else if (dogs === false && functions === true){
  alert( you + admin);
} else if (dogs === false && functions === false){
  alert (not + you +admin);
} else if (dogs === true && functions === true){
  alert (admin + you);
}

//4
alert 
("Дайте , будь ласка, два розміри сторін прямокутника в цифоровому еквіваленті.");
let LeftRIght = prompt("Розмір бокових сторін прямокутника?", 15);
let UpDown = prompt(" Розмір верхньої та нижньої сторін" , 8);

if (LeftRIght === UpDown){
  alert ("Вибачте, але це квадрат.");
} else if (LeftRIght !== UpDown){
  alert((Number(LeftRIght) + Number (UpDown)) * 2);
}







































































































//© 2021 ZimsTV