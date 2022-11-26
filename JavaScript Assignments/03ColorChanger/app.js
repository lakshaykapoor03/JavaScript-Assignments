const butn = document.getElementById("button")
const bgc= document.getElementById("canvas")
console.dir(butn);
// butn.style.backgroundColor="blue";
// const changeColor = () => {
   
//     bgc.style.backgroundColor = "blue";

// // }

// let val="0123456789ABCDEF";
// console.log(Math.random()*16);

const randomColor=()=>{
    let val="0123456789ABCDEF";
    let cons="#";

    for(let i=0;i<6;i++){
        cons= cons + val[Math.floor(Math.random()*16)]
    }
    bgc.style.backgroundColor=cons;
};

// function changeColor(){
//     bgc.style.backgroundColor= randomColor();
// }

butn.addEventListener("click", randomColor);





butn.addEventListener("click", randomColor());




