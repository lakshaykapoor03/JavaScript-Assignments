// let compScore=0;
// let userScore=0;

// const userScoreVal = document.getElementById("userScoreVal");
// const compScoreVal= document.getElementById("compScoreVal");
// const resultUserStat= document.getElementById("result-user-stat");
// const resultCompStat= document.getElementById("result-comp-stat");
// const resultFinalStat= document.getElementById("result-final-stat");

// const rock= document.getElementById("r");
// const paper= document.getElementById("p");
// const scissor= document.getElementById("s");

// const choice= document.querySelectorAll(".choice")

// let compChoice;
// let userChoice;



// const computerChoice=()=>{
//     const compRandom= Math.floor(Math.random()*3)+1

// let compMsg;

// if (compRandom===1){
//     compMsg= "Computer:Rock";
//     resultCompStat.innerhtml=compMsg;
//     return (compChoice="r")
// }

// else if (compRandom===2){
//     compMsg= "Computer:Paper";
//     resultCompStat.innerhtml=compMsg;
//     return (compChoice="p")
// }

// else if (compRandom===3){
//     compMsg= "Computer:Scissor";
//     resultCompStat.innerhtml=compMsg;
//     return (compChoice="s")
// }
// };

// const computerWon=()=>{
//     compScoreVal.innertext= Number(compScoreVal.innertext) + 1;
//     return "Computer Won";
// }

// const userWon=()=>{
//     userScoreVal.innertext= Number(userScoreVal.innertext) + 1;
//     return "User Won";
// }



// const findAnswer = (userChoice, computerChoice) =>{
//     if(
//         (userChoice=="r" && computerChoice==="r")||
//         (userChoice=="p" && computerChoice==="p")||
//         (userChoice=="s" && computerChoice==="s")
//     ){
//         return "Match Draw";
//     }

//     if (userChoice ==="r" && computerChoice ==="p"){
//         return computerWon();
//     } else if  (userChoice ==="r" && computerChoice ==="s"){
//         return userWon();
//     } else if(userChoice ==="p" && computerChoice ==="r"){
//         return userWon();
//     } else if(userChoice ==="p" && computerChoice ==="s"){
//         return computerWon();
//     } else if(userChoice ==="s" && computerChoice ==="r"){
//         return computerWon();
//     } else if(userChoice ==="s" && computerChoice ==="p"){
//         return userWon();
//     }
// };



// choice.forEach((elem) => {
//     elem.addEventListener("click", ()=>{
//         computerChoice()



//         let usermsg;
//         userChoice = elem.getAttribute("id");
//         if(userChoice == "r"){
//             usermsg="User:Rock"
//         }
//         else if(userChoice == "p"){
//             usermsg="User:Paper"
//         }
//         else if(userChoice == "s"){
//             usermsg="User:Scissor"
//         }
//         resultUserStat.innerHTML= usermsg;
    

//     const result= findAnswer(userChoice, compChoice);
//     resultFinalStat.innerHTML= "Winer:" + result;
// });
// });
const input= document.querySelector("input")
console.dir (input);
console.log(input.value);
const age = document.getElementsByClassName("desc")
const span= document.querySelectorAll("span")
console.log(span);

// console.dir(age);
// console.dir(input);
function calcAge(){
var dob=new Date(input.value).getFullYear()
var dob2 = new Date().getFullYear();
var month= new Date(input.value).getMonth()
var month2= new Date().getMonth()
var date= new Date(input.value).getDate()
var date2= new Date().getDate()

age[0].innerText= (`Your age is: ${dob2-dob}`),
span[0].innerText= dob2-dob
span[1].innerText= month2-month

if(span[1].innerText<0){
    span[1].innerText= 12+Number(span[1].innerText)
}
else{
    span[1].innerText=  span[1].innerText
}
span[2].innerText= date2-date
};

    input.addEventListener("change", calcAge)

// console.log(dob2.getFullYear()-dob.getFullYear()); 




// var month_diff = Date.now() - dob.getTime();
// console.log(month_diff);
// var age_dt = new Date(month_diff); 
// console.log(age_dt);
// var year = age_dt.getUTCFullYear();
// console.log(year);
// var age = Math.abs(year - 1970);
// console.log(age);







