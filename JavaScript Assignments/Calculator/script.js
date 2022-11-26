// const input= document.getElementsByTagName("input")

// function insert(num){
//   input[0].value = input[0].value + num;
  
//   }
  
//   function equals(){
//     var exp = input[0].value ;
// if(exp)
// {
//   input[0].value  = eval(exp)
// }
      
//   }
  
//   function clean(){
//     input[0].value =" "; 
//   }
  
//   function back(){
//     var exp =   input[0].value ;
//     input[0].value  = exp.substring( 0, exp.length - 1);
//   }





  const input= document.getElementsByTagName("input")

  function insert(num){
    input[0].value= input[0].value + num ;
  }

  function equals(){
    var exp = input[0].value
    if(exp){
      input[0].value= eval(exp)
    }
  }

function clean(){
  input[0].value=" "
}

  function back(){
    var exp= input[0].value
    input[0].value= exp.substring(0, exp.length-1);
  }