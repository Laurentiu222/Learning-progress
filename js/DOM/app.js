// // //Dom Manipulation


// // //GetElementById()
// // const title = document.getElementById('main-heading');
// // console.log(title);



// // //GetElementsByClassName()
// // // const listItem = document.getElementsByClassName('list-items');

// // // console.log(listItem);



// // //getElementsByTagName()
// // const listItem = document.getElementsByTagName('li');

// // console.log(listItem); 



// // //quaerySelector()
// // // const container = document.querySelector('div');

// // // console.log(container);



// // //quaerySelectorAll()
// // const container = document.querySelectorAll('div');

// // console.log(container);


// //CSS styleing using JS

// // const title = document.querySelector('#main-heading');

// // title.style.color='red';

// // console.log(title);
// //Inline styleing does not work on multiple Items at the same time so we need to create a loop.
// // const listItems = document.querySelectorAll('.list-items');
// // for(i=0;i<listItems.length;i++){
// // listItems[i].style.fontSize = '2rem';
// // }
// // console.log(listItems);

// // //Creating Elements

//  const ul = document.querySelector('ul');
// const li = document.createElement('li');
// //Adding Elements
// ul.append(li);
// //Modifying the text

// // const firstListItem = document.querySelector('.list-items');

// // console.log(firstListItem.innerText);
// // console.log(firstListItem.textContent);
// // console.log(firstListItem.innerHTML);
// li.innerText = 'X-Men';
// //Modifying Atributes and Classes
// // li.setAttribute('id', 'main-heading');
// // li.removeAttribute('id');

// // const title= document.querySelector('#main-heading');

// // console.log(title.getAttribute('id'));

// li.classList.add('list-items');

// console.log(li.classList.contains('list-items'));

// //Remove Elements

// li.remove();
//--------------------------------------------------------------
//Travel the DOM


//Parent Node Traversal
 //let ul = document.querySelector('ul');

//  console.log(ul.parentNode.parentNode);
//  console.log(ul.parentElement.parentElement);
  // const html = document.documentElement;
  // console.log(html.parentNode);
  // console.log(html.parentElement);

//Child Node Traversal
//console.log(ul.childNodes);//Indentation is caounted too so from a 5 li we get 11 in the console
//console.log(ul.firstChild);
//console.log(ul.lastChild);

//ul.childNodes[1].style.backgroundColor = "red";
// console.log(ul.children);
// console.log(ul.firstElementChild);
// console.log(ul.lastElementChild);

//Sibling Node Traversal
//H1 is the previous sibling and if we serach for the next sibling the output will be null in this case because there is nothing after the ul
// let ul = document.querySelector('ul');
// const div = document.querySelector('div');
// console.log(div.childNodes);
// console.log(ul.previousElementSibling);
// console.log(ul.nextElementSibling);

//------------------------------------------------------------

//Event Listeners
//Adding functionality to web page by listening to different events such as click or scroll

//Element.addEventListner("click" , function);

// const button2 = document.querySelector('.btn-2');

// function alertBtn() {
//   alert('I also Love JavaScript!');
// }

// button2.addEventListener("click", alertBtn);

// //Mouseover

// const newBackgorundColor = document.querySelector('.btn-3');

// function changColor(){
//   newBackgorundColor.style.backgroundColor = "blue";
// }
// newBackgorundColor.addEventListener("mouseover", changColor);

// const revealBtn = document.querySelector('.reveal-btn');

// const hiddenContent = document.querySelector('.hidden-content');

// function revealContent(){

//   if(hiddenContent.classList.contains('reveal-btn')){
//     hiddenContent.classList.remove('reveal-btn');
//   }else{
//     hiddenContent.classList.add('reveal-btn');
//   }
// }
// revealBtn.addEventListener("click", revealContent);

//---------------------------------------------------------------------------
//Event Propagation
// window.addEventListener("click", function(){
//   console.log("Window");},false);

// document.addEventListener("click", function(){
//   console.log("Document");},false);

// document.querySelector(".div2").addEventListener("click", function(e){
//     e.stopPropagation();
//   console.log("DIV 2");},{once: true});

// document.querySelector(".div1").addEventListener("click", function(){
//   console.log("DIV 1");},false);

// document.querySelector(".button").addEventListener("click", function(e){
//   e.preventDefault();
//   console.log(e.target.innerText='Clicked');},false);

//---------------------------------------------------------------------------
//Event Delegation

//It allows users to append a SINGLE event listener to a perent  element that adds it to all of its present AND future desendats that match a selector.

// document.querySelector('#football').addEventListener('click', function(e){
//   console.log("Football is clicked");
//   const target = e.target;
//   if(target.matches('li')){
//     target.style.color = "red";
//   }
// });

// document.querySelector('#basketball').addEventListener('click', function(e){
//   console.log("basketball is clicked");
//   const target = e.target;
//   if(target.matches('li')){
//     target.style.color = "red";
//   }
// });

// document.querySelector('#boxing').addEventListener('click', function(e){
//   console.log("boxing is clicked");
//   const target = e.target;
//   if(target.matches('li')){
//     target.style.color = "red";
//   }
// });

// document.querySelector('#tennis').addEventListener('click', function(e){
//   console.log("tennis is clicked");
//   const target = e.target;
//   if(target.matches('li')){
//     target.style.color = "red";
//   }
// });

// document.querySelector('#golf').addEventListener('click', function(e){
//   console.log("golf is clicked");
//   const target = e.target;
//   if(target.matches('li')){
//     target.style.color = "red";
//   }
// });
//Short versione
document.querySelector('#sports').addEventListener('click', function(e){
    console.log(e.target.getAttribute('id') + ' is clicked');
    const target = e.target;
    if(target.matches('li')){
      target.style.color = "red";
    }
})

const sports = document.querySelector('#sports');
const newSport = document.createElement('li');

newSport.innerText = 'Rugby';
newSport.setAttribute('id', 'rugby');

sports.appendChild(newSport);
