String
var name= "Lakshay"

//boolean
var value=true;

var value=0;

2nd quesion

const firstName = "Lakshay";
const lastName =" Kapoor";
const maritalStatus = "Single";
const country = "India";
const age = 22;

//Interpolation method

console.log(`My fullName is ${firstName}${lastName} and i live in ${country} and my age is ${age} and I am ${maritalStatus}`);



3rd question

let str=("India Usa Canada Germany Japan")

let newStr=str.toUpperCase();

console.log(newStr);



//4th Question

const str="Hello, I am Lakshay Kapoor"
const subStr="llo"

console.log(str.includes(subStr));

const string="Hey there, hello everyone"
const subString="ytue"

console.log(string.includes(subString));


5th Question

const sentence="Hey there how are you doing today"

const newArr= sentence.split(" ")

console.log(newArr);

6th Question

const companies="Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon"

const newArr= companies.split(",")

console.log(newArr);

//7th Question
let text = "Hello there, my name is lakshay and i am writing java script";
let result = text.length;

console.log(result);


7th Question
let text = "Hello there, my name is lakshay and i am writing java script";
let result = text.lastIndexOf("script");

console.log(result);

// 8th Question
let text = "You cannot end a sentence with because because because is a conjunction";
let result = text.indexOf("because");

console.log(result);

//9th question

let text = "    Hello there, my nam is lakshay and i am writing java script ";
let result= text.trim()
console.log(result);

10th question
 let x;
 x=1;
 x=[1]
 x="1"

 console.log(1=="1");
 console.log(1===[1]);

11th Question

console.log( 4 === '4');



var year=new Date().getFullYear()
console.log(year);

// const date=new Date().getUTCMonth()
// console.log(date);

var date=new Date().getDate()
console.log(date);

const base= 2;
const height=2;

const area= base*height*0.5;
console.log(area);



function slope(y2,y1,x2,x1) {
    const m= (y2-y1) / (x2-x1);
    return m;
}

console.log(slope(2,1,2,1));


if(userAge>=18){
    console.log("You are old enough to drive");
}

else{
    console.log("You need to turn 18 to drive");

}

const userAge=18;
console.log(userAge>=18?"You can drive":"you cannot drive");


Question 19
const num=16;
console.log(num%2==0);

Question 17

console.log(new Date().toLocaleString("en-US"));



const date = Intl.DateTimeFormat('en-IN',{
    year:'numeric',
    month:'2-digit',
}).format(new Date());

console.log(date)

//Question 20

var grade=67;

if(grade>=80 &&grade<=100){
    console.log("A");}


else if(grade>=70 &&grade<80){
    console.log("B");}



else if(grade>=60 &&grade<70){
    console.log("C");}



else if(grade>=50 &&grade<60){
    console.log("D");}


else{
    console.log("F");}


    var grade=67;
    switch(grade){

        case (grade>=50 &&grade<60):
            console.log("A");
            break;

            case(grade>=60 &&grade<70):
            console.log("B");
            break;
    }


    Question 32

    question 12

    var date= new Date();
    console.log(Date.getFullYear());

    

var year=new Date().getFullYear()
console.log(year);

var month= new Date().getMonth();
console.log(month);

var date= new Date().getDate();
console.log(date);

var day= new Date().getDay();
console.log(day);

const d = new Date();
let day = d.getDay();

var hours= new Date().getHours();
console.log(hours);

var minutes= new Date().getMinutes();
console.log(minutes);


let ms =  Date.now();
console.log(Math.round(ms));


const secondsSinceEpoc = Math.round(Date.now() / 1000)
console.log(secondsSinceEpoc);
// is the same as

const now = new Date()  
const secondsSinceEpoch = Math.round(now.getTime() / 1000)
console.log(secondsSinceEpoch);



Question 19

var num= 36;

if (num%2==0) {
    console.log("even");
}

else{
    console.log("odd");
}

//Question 21

var month= "july";
switch (month){

    case ("september"||"october"||"november"):
    console.log("Season is Autumn");
    break;

    case ( "December"|| "January" || "February"):
        console.log("Winter");
        break;
    

    case ("March"|| "April" ||"May"):
        console.log("season is Spring");
        break;

        default:
        console.log("season is Summer");
    }

    function getDaysInMonth(year, month) {
        return new Date(year, month, 0).getDate();
      }

      console.log(getDaysInMonth(2022,4));

    const shoppingCart = ['Milk', 'Coffee', 'Tea', 'Honey']

    shoppingCart.unshift("Meat");
    console.log(shoppingCart);

    shoppingCart.push("Sugar");
     console.log(shoppingCart);

    shoppingCart.pop("Honey")
    console.log(shoppingCart);

    var yew = shoppingCart.slice(0,2)
    console.log(yew);

    shoppingCart.splice(2,1,"Green Tea")
    console.log(shoppingCart);

    Question 27

     const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24]

   
    // console.log(Math.min(...ages));
    // console.log(Math.max(...ages));

    const val= Math.abs(Math.max(...ages)- Math.min(...ages))
    console.log(val);

    
