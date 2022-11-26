const buttons= document.querySelectorAll("button")
const displayCounter= document.querySelector("#number");
let counter=1;

const increase= function(){   
// displayCounter.innerText=counter;
counter++;

displayCounter.innerText=counter;
}

const decrease= function(){   
// displayCounter.innerText=counter;
counter--;

displayCounter.innerText=counter;
}

buttons[1].addEventListener("click",increase);

buttons[0].addEventListener("click",decrease);
