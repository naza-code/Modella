const buttons = document.querySelectorAll('.questionbtn');


buttons.forEach(function(btn){
   btn.addEventListener('click', showAnswer);

   function showAnswer(e){
   const questionresult= e.currentTarget.parentElement.parentElement;

   questionresult.classList.toggle('showtext')
    

  
   }
})
