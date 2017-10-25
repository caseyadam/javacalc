//Mr. Snow Video #3 
var box = document.getElementById('display');

function toScreen(x){
  //the += sign here allows you to add multiple #'s to screen 
  box.value+=x;
  if(x==='c'){
    box.value='';
  }
}

//How to evaluate function when you click equal sign 
//eval is a built in function
function answer(){
  x=box.value;
  x=eval(x);
  box.value=x;
}

function power(){
  x=box.value;
  x=eval(x*x);
  box.value=x;
}

function backspace(){
  var num = box.value;
  var len = num.length-1;
  var newNum = num.substring(0,1);
  box.value = newNum;
}