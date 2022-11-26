const input = document.getElementsByClassName("input");
const button = document.querySelector("button");
const container= document.querySelector(".container");
console.dir(container);
console.dir(button);
console.dir(input);
const editButton=  document.getElementsByClassName("editButton");
const deleteButton=  document.getElementsByClassName("deleteButton");



//whenever we getElementByClassName it always comes with an array and we can see that by console.dir(). 
//Example console.dir(input).


// container.appendChild(span)
// container.appendChild(div);
// div.appendChild(span);

function addToList(){


    var div = document.createElement("div");

//     container.appendChild(span)
// span.innerHTML= input[0].value;





// const editBtn= document.createElement("button")
// editBtn.classList.add("editButton")
// div.classList.add("editButton")




div.innerHTML= `<span class="item_input">${input[0].value}</span>
<button class="editButton" >Edit</button>
<button class="deleteButton" >Delete</button>
`;
container.appendChild(div);

input[0].value="";
}


button.addEventListener("click", addToList)
