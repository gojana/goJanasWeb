"use strict";

//ZhongLi
let character = "ZhongLi";
let characterLvl = 80;
let charDmg = 2609;
let critDmg = 2.02;
let eleDmg = 0.688;
let setDmg = 0.2;
let skillDmg = 7.7;
let hp = 20000;
let totalDmg;
let enemyLvl = 88;
let reduction;

totalDmg = charDmg * (1 + eleDmg + setDmg);
totalDmg = totalDmg * skillDmg + (hp * 33) / 100;
reduction = (100 + characterLvl) / (100 + characterLvl + (100 + enemyLvl));
totalDmg = totalDmg * critDmg;
totalDmg = totalDmg * reduction;

console.log(
  `el daño de ${character} es: ${totalDmg} and the reduction is : ${
    Math.trunc(reduction * 100) - 100
  } % and therefore this is a test`
);

//Albedo

character = "Albedo";
charDmg = 2209;
critDmg = 2.0;
eleDmg = 0.21;
setDmg = 1.2;
skillDmg = 5.14;

totalDmg = charDmg * skillDmg;
totalDmg = totalDmg * (1 + eleDmg + setDmg);
reduction = (100 + characterLvl) / (100 + characterLvl + (100 + enemyLvl));
totalDmg = totalDmg * critDmg;
totalDmg = totalDmg * reduction;

console.log(
  `el daño de ${character} es: ${totalDmg} and the reduction is : ${
    Math.trunc(reduction * 100) - 100
  } %`
);
