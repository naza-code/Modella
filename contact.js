const form= document.getElementById('form');
const input= document.querySelector('input');
const button=document.getElementById('button');
const error= document.getElementById('error');
const success= document.getElementById('success');


button.addEventListener('click', addtext)

function addtext(){

  const value= input.value;
  if(value===''){
    error.style.display="block";

    setTimeout(function(){
      error.style.display="none"
    }, 2000)
  }else{
    success.style.display="block";

    setTimeout(function(){
      success.style.display="none"
    }, 2000)

    // input.value=''
    // input.value=""
    // input.value=""
    
  }

  
  
 
}