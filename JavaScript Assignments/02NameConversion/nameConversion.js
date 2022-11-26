const input = document.getElementById('text');
const convert= document.getElementById('convert-btn');
// console.dir(input);
// console.dir(convert);
let globalName;
input.addEventListener('change', (event)=>{
  globalName=event.target.value;

})

function toPascalCase (str) {
    if (/^[a-z\d]+$/i.test(str)) {
      return str.charAt(0).toUpperCase() + str.slice(1);
    }
    return str.replace(
      /([a-z\d])([a-z\d]*)/gi,
      (g0, g1, g2) => g1.toUpperCase() + g2.toLowerCase()
    ).replace(/[^a-z\d]/gi, '');
  }

  function toCamelCase(str) {
    return str.replace(/(?:^\w|[A-Z]|\b\w)/g, function(word, index) {
      return index === 0 ? word.toLowerCase() : word.toUpperCase();
    }).replace(/\s+/g, '');
  }

  const snakeCase = string => {
    string = string.replace(/\W+/g, " ").toLowerCase().split(' ').join('_');

    if (string.charAt(string.length - 1) === '_') {
        return string.substring(0, string.length - 1);
    }

    return string;
}

const toKebabCase = str =>
  str &&
  str
    .match(/[A-Z]{2,}(?=[A-Z][a-z]+[0-9]*|\b)|[A-Z]?[a-z]+[0-9]*|[A-Z]|[0-9]+/g)
    .map(x => x.toLowerCase())
    .join('-');

    

convert.addEventListener('click',() =>{

// const ps = document.querySelectorAll('p')
// console.dir(ps);
const ps= document.querySelectorAll('p');

ps.forEach((p,i)=>{
  switch(i){
    case 0:
    return  p.innerText= toCamelCase(globalName)
    case 1:
      return p.innerText= toPascalCase(globalName)
    case 2:
      return p.innerText= snakeCase(globalName)
    case 3:
      return p.innerText=snakeCase(globalName)
    case 4:
      return p.innerText= toKebabCase(globalName)
    case 5:
      return p.innerText= toKebabCase(globalName)
  }})
});

// ps.forEach((p,i)=> {
//     switch(i){
//         case 0: 
//         return p.innerText =toCamelCase(globalName)
//         case 1: 
//         return p.innerText = toPascalCase(globalName)
//         case 2: 
//         return p.innerText = snakeCase(globalName)
//         case 3: 
//         return p.innerText = snakeCase(globalName)
//         case 4: 
//         return p.innerText = toKebabCase(globalName)
//         case 5: 
//         return p.innerText = toKebabCase(globalName)
        
//         default:
//             break;
//     }
// })



