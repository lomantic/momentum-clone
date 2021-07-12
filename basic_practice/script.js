//alert("hi");

console.log("ㅇㅅㅇ");
/*
const a=5;
const b=2;

console.log(a+b);
console.log(a/b);
*/
/*
let myName ="lomantic";
console.log(myName);

myName ="Lomantic";

console.log("New name is "+myName);
*/

/*
const catIsCute=true;
console.log(catIsCute);
const dogIsCrazy=false;
console.log(dogIsCrazy);
const alienExist =null;
console.log(alienExist);
let something;
console.log(something);
*/

/*
const number =[1,2,3,4,5,6,7,8,9];

console.log(number);
console.log(number[0]);


number.push(10);
console.log(number);
*/
/*
const player= {
    name:"nimo",
    age:14,
    points: 99999,
    iq:140
};


console.log(player);
console.log(player.name);

player.name = "Nimo";
console.log(player);

//
player.lastName = "cipalseki";
console.log(player);
*/

/*
function sayHello(nameOfPerson){
    console.log("hello! "+nameOfPerson);
}

sayHello("Nico");
sayHello("Jackson");
sayHello("hodu");
*/
/*
function plus(a,b){
    console.log(a+b);
}

plus(9,1);

const player ={
    name : "Jason",
    sayHello : function(otherName){
        console.log("Hello! "+otherName + " from "+player.name);
    }
};

console.log(player.name);

player.sayHello("Loman");
*/

/*
const calculator = {
    plus : function(a,b){
        console.log(a+b);
    },
    minus : function(a,b){
        console.log(a-b);
    },
    multiply : function(a,b){
        console.log(a*b);
    },
    divide: function(a,b){
        console.log(a/b);
    },
    powerOf: function(a,b){
        console.log(a**b);
    }
}

calculator.plus(1,1);
calculator.minus(1,1);
calculator.multiply(2,2);
calculator.divide(2,2);
calculator.powerOf(3,3);
*/

/*
const age = 22;
function addAge(age){
    ageNextYear = age+1;
    return ageNextYear;
}

console.log(addAge(age));
*/

/*

const age = prompt("your age : ");

console.log(age);
console.log(typeof age);

console.log(isNaN(parseInt(age)));

ageResult = isNaN(parseInt(age));

if(ageResult){
    console.log("Please write number");
}
else{
    console.log(age);
}
*/

//const title = document.getElementsByClassName("title");

//const title = document.querySelector(".title h1");

/*
console.log(title);

const titleAll = document.querySelectorAll(".title h1");

console.log(titleAll);
*/
/*
function handleMouseEnter(){
    title.style.color ="red";
}
function handleMouseLeave(){
    title.style.color ="black";
}

function handleTitleClick(){
    //title.style.color ="blue";
    console.log("title was clicked");
}

function handlerWindowResize(){
    document.body.style.backgroundColor = "tomato";
}

title.addEventListener("click",handleTitleClick);
title.addEventListener("mouseenter",handleMouseEnter);
title.addEventListener("mouseleave",handleMouseLeave);

window.addEventListener("resize",handlerWindowResize);
*/
/*
const h1 =document.querySelector("div.title:first-child h1 ");

function handleTitleClick(){
    const currentColor = h1.style.color;
    let newColor;
    if(currentColor ==="blue"){
        newColor ==="tomato";
    }
    else{
        newColor ="blue";
    }
}
*/

const h1 =document.querySelector("div.title:first-child h1 ");

function handleTitleClick(){
    //const clickedClass = "active";
    /*
    if(h1.classList.contains(clickedClass)){
        h1.classList.remove(clickedClass);
    }
    else{
        h1.classList.add(clickedClass);
    }
    */
    h1.classList.toggle(clickedClass);
}

h1.addEventListener("click",handleTitleClick);

