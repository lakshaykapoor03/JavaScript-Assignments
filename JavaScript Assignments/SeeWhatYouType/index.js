const input= document.getElementById("input");
const output= document.getElementById("output");


const seeType= ()=>{
     output.innerHTML=input.value;
        // output.innerHTML=input.target.value;
        
}

input.addEventListener("keypress",seeType)



// let input = document.querySelector('#input');
//   let info = document.querySelector('#info');
// function eventController(event) {
//   info.innerHTML = event.target.value;
// }
// input.addEventListener('keypress', eventController, false)

