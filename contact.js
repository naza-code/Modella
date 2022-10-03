const form= document.getElementById('form');
const input= document.querySelector('input');
const button=document.getElementById('button');
const error= document.getElementById('error');
const success= document.getElementById('success');
const names= document.getElementById('names');
const surname= document.getElementById('surname');
const email= document.getElementById('email');
const message= document.getElementById('message');


button.addEventListener('click', addtext)

function addtext(e){

  // const value= input.value;

  
  if(names.value===""|| surname.value===""|| email.value===""||message.value===''){
   console.log('ada')

    error.style.display="block";

    setTimeout(function(){
      error.style.display="none"
    }, 2000)
  }else{
    success.style.display="block";

    setTimeout(function(){
      success.style.display="none"
    }, 2000)

    names.value=""
    email.value=""
    surname.value=""
    message.value=""
    
  }

  e.preventDefault()

  
  
 
}