const faqData = [
  {
    id: 1,
    question: "Who are we?",
    answer:
      "We enable upscaling careers through flexible, interactive and collaborative learning. We believe in building learning communities by bringing together mentors, young minds, and creators.",
  },
  {
    id: 2,
    question: "What do we do?",
    answer:
      "Building learning communities with Our Affordable & Competent Courses",
  },
  {
    id: 3,
    question: "Are the community classes boring?",
    answer: "No, not at all!!!",
  },
];

// const accordianBody;
const faqs = [];

function showFaq() {
  
}

function createFaq() {
  
}

function btnStatusUpdate() {
  
}

const buttons= document.querySelectorAll("button")
const allH3 = document.querySelectorAll("h3");
const allH2 = document.querySelectorAll("h2");
// const button1= document.querySelector("#btn1")
// const button2= document.querySelector("#btn2")

// const button3= document.querySelector("#btn3")

// const ans1= document.querySelector("#answer1")

// const ans2= document.querySelector("#answer2")

// const ans3= document.querySelector("#answer3")


function myFunction(elem) {
  // console.log(elem.style.display);
  if (elem.style.display === "none") {
    elem.style.display = "block";
  } else {
    elem.style.display = "none";
  }
  console.log("hdiuidud");
}

// button1.addEventListener('click', () => myFunction(ans1))
// button2.addEventListener('click', () => myFunction(ans2))
// button3.addEventListener('click', () => myFunction(ans3))
console.log(buttons, allH3);

// buttons.forEach((btn, index) =>{
//   debugger
//   allH2[index].innerHTML = faqData[index].question
//   allH3[index].innerHTML = faqData[index].answer
//   btn.addEventListener('click', () => myFunction(allH3[index]))
// })

buttons.forEach((btn,index)=>{
  allH3[index].innerHTML= faqData[index].answer
  allH2[index].innerHTML= faqData[index].question
  btn.addEventListener('click',()=> myFunction(allH3[index]))
})