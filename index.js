console.log("Bok!");

var i = {
    firstname: "Ismet",
    lastname: "Catovic",
    age: "18",
    phone: "102-222-23",
    fullname: function(){
        return this.firstname + " " + this.lastname;
    }
};


class Car{
    constructor(name, year){
        this.name = name;
        this.year = year;
    }
    age(){
        let date = new Date();
        return date.getFullYear - this.year;
    }
}

let myCar = new Car("Audi", 2003);

var enArai = ["Ismet", "Amela", "Edin", "Lamija"];
//Alert vid pop-up meddelanden.

var numArray = [100, 39, 28, 27, 12, 47, 56, 48, 33, 101, 1239];


var text = "";
var i;
for(i of enArai){
    text += i + "<br>";
}

var txt = "";
var j;
for(j of numArray){
    if(j > 40){
        txt += j + "<br>"
    }
}

    


function showCatovics(){
    document.getElementById("demo").innerHTML = text;
}

function whileTest(){
    document.getElementById("demo").innerHTML = txt;
}

//Console i console.
console.log(i.firstname + " is so many years old: " + i.age + ". Full name: " + i.fullname());

//var mbs = ["Ducati", "911"];
//cars.splice(3, 0, "MB", "Renault");
//var vehicles = cars.concat(mbs);

var nos = [40, 100, 1, 20];
//Numeric sorting lägst först

function ascendFunc(){
    nos.sort(function(a,b){return a-b});
    document.getElementById("show").innerHTML = nos;
}

function descendFunc(){
    nos.sort(function(a,b){return b-a});
    document.getElementById("show").innerHTML = nos;
}

function randomSort(){
    nos.sort(function(a,b){return 0.5 - Math.random()});
    document.getElementById("show").innerHTML = nos;
}

//Are all over 18?
var numbers = [45, 4, 9, 16, 25];
var all18 = numbers.every(myFunction);
document.getElementById("show").innerHTML = "All > 18 is " + all18;

function myFunction(value) {
return value > 18;
}


function getInfo(){
    var age = 17;
    var info;
if(age < 18){
    info = "Too young."
}
else if (age => 18){
    info = "Allowed."
}
document.getElementById("demo").innerHTML = "Decision: " + info;
}

function getDays(){
    var day;
    switch(new Date().getDay()){
        case 0:
            day = "Sunday";
            break;
        case 1:
            day = "Monday";
            break;
        case 2:
            day = "Tuesday";
            break;
        case 3:
            day = "Wednesday";
            break;
        case 4:
            day = "Thursday";
            break;
        case 5:
            day = "Friday";
            break;
        case 6:
            day = "Saturday";
    }
    document.getElementById("demo").innerHTML = "Today is: " + day;
}






///////////////////////////////////////////////////////////////////

function fisherYates(){
    
    for(i = nos.length() - 1; i > 0; i--){
        j = Math.floor(Math.random() * i)
        k = points[i]
        points[i] = points[j]
        points[j] = k
    }
}

function findMax(nos){
 return Math.max.apply(null, nos);
}

var maxx = findMax(nos);

function myArrayMax(arr) {
    var len = arr.length;
    var max = -Infinity;
    while (len--) {
      if (arr[len] > max) {
        max = arr[len];
      }
    }
    return max;
  }

  function myArrayMin(arr) {
    var len = arr.length;
    var min = Infinity;
    while (len--) {
      if (arr[len] < min) {
        min = arr[len];
      }
    }
    return min;
  }


var myNumbs = [18, 15, 23, 11, 100, 29, 1, 4];
var passedNumbs = myNumbs.filter(Ismet);
document.getElementById('show').innerHTML = "Numbers available: " + myNumbs.toString();
document.getElementById('result').innerHTML = "Numbers that surpassed test: " + passedNumbs;

function Ismet(value){
    return value > 18
    
}



/* Math...

Math.round(x);
Math.ceil(x);
Math.power(x);
Math.sqrt(x);
Math.abs(x,y);
Math.min/max();
Math.floor(Math.random() * 10);
Boolean(10 > 9);

*/
//Numeric sorting högst first
