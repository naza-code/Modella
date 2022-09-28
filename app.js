const reviews=[
  {
    id:1,
    name: 'Pooja James',
    model:'INDIAN MODEL',
    info:'I have been with modella for years, and i must say, modella helped me to be confident in myown skin',
    // img: 'https://unsplash.com/photos/Dy4-Fer7zwc',
    
    
  },

  {
    id:2,
    name: 'Mufasaa Johnson',
    model:' BRITISH MODEL',
    info:'I have worked with Modella for a year now, and i have to say this is one of the best modelling agencies i have worked with',
    // img: 'https://unsplash.com/photos/BGMuQUY91w4',
    // img:'https://www.google.com/search?q=cloudinary+images&sxsrf=ALiCzsZJn8-ymBMM6j3U3ycibi0_Ri39Xw:1660997488225&source=lnms&tbm=isch&sa=X&ved=2ahUKEwjWp4jqsdX5AhXZuKQKHWDBCUQQ_AUoAXoECAEQAw&biw=1360&bih=663&dpr=1#imgrc=C_oVhlS2EflaMM'
    
  },
  {
    id:3,
    name: 'Ijeoma Williams',
    model:'NIGERIAN MODEL',
    info:'Modella does not discriminate the color of your skin. I am proud to be a part of Modella',
    // img: 'https://unsplash.com/photos/nimElTcTNyY',
  },
  {
    id:4,
    name: 'Tobi Amusan',
    model:'AMERICAN MODEL',
    info:'All i can say is, Modella is home',
    // img: 'https://unsplash.com/photos/nmuyqgSOpEE',
  },


]


const img=document.querySelector('.imageperson');
const name=document.getElementById('name'); 
const model=document.getElementById('model');
const info=document.getElementById('info');

const previousbutton=document.querySelector('.previousbtn');
const nextbutton=document.querySelector('.nextbtn');

let currentitem=0;


window.addEventListener('DOMContentLoaded', loadDocument);
function loadDocument(e){
  console.log('shake and bake')
  showPerson(currentitem);

}


function showPerson(person){
  const item=reviews[person];
  // img.src=item.img;
  name.textContent=item.name;

  model.textContent=item.model;
  info.textContent=item.info;
  

}

nextbutton.addEventListener('click', showHuman);

function showHuman(){
  currentitem++
  if(currentitem>reviews.length-1){
   currentitem=0
  }
  showPerson(currentitem);
}


previousbutton.addEventListener('click', showModel);

function showModel(){
  currentitem--
  if(currentitem< 0){
   currentitem= reviews.length-1
  }
  showPerson(currentitem);
}