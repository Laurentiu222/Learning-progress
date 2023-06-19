//Variables

let openBtn= document.getElementById('open-btn');
let modalConteiner = document.getElementById('model-conateiner');
let coloseBtn = document.getElementById('close-btn');


//Event Listeners

openBtn.addEventListener('click', function(){
  modalConteiner.style.display='block';
})

coloseBtn.addEventListener('click', function(){
  modalConteiner.style.display='none';
})

window.addEventListener('click', function(e){
  if(e.target === modalConteiner){
    modalConteiner.style.display = 'none';
  }
})