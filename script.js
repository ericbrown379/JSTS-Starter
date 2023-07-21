// var h1Element = document.querySelector('h1');

// h1Element.style.color ='blue';
// var isYellow = true;
// var bodyElement = document.querySelector('body');

// setInterval(function() {
// if(isYellow){
//     bodyElement.style.backgroundColor = 'white';
// } else{
//     bodyElement.style.backgroundColor = 'yellow';
// } 
// isYellow = ! isYellow;
// }, 1000);

///Selectors
//document.getElementById('Methods');

// 1.document.getElementById();
// document.getElementsByClassName();
// document.getElementsByTagName();
// document.querySelector();
// var selectWithId = document.getElementById("oakParagraph");
// console.log(selectWithId);

// var selectWithClassName = document.getElementsByClassName("background");
// console.log(selectWithClassName);

// var selectWithTagName = document.getElementsByTagName("h1");
// console.log(selectWithTagName);

// var selectWithQuery = document.querySelectorAll(".background");
// console.log(selectWithQuery);

/////////////////////////////////////////Manpulation Methods /////////////////////////////////////////////////////////////

//What can be manupulated
//1. Change a elemnet style
//2. Adding or removing CSS classes with JavaScript
//3. Change the content of a tag
//4. Change Attributes(href, src)

// var divToManupulate = document.querySelector(".background")

// divToManupulate.style.height = '50px';
// divToManupulate.style.width = '400px';
// divToManupulate.style.backgroundColor = 'red';
// divToManupulate.style.fontSize = '30px';
// divToManupulate.style.border = '50px solid black';

// var paragragph = document.querySelector("#oakParagraph");
// divToManupulate.classList.add("addClass");
// divToManupulate.classList.remove("addClass");
// console.log(paragragph.innerHTML);

///DOM EVENT Handlers////
// var button = document.querySelector("#btn1");
// var title = document.querySelector("OakTitle");
// button.addEventListener("click",()=>{
//     console.log("You clicked the button");
//     title.style.backgroundColor = red;
// });

// var listParent = document.querySelector('u1');


///////////////Quiz Soluti=on//////


var listItems = document.querySelector("li");
// console.log(listItems);

// for(var i = 0; i < listItems.length; i++){
//     listItems[i].addEventListener('click',() => {
//       this.style.color = 'white';
//     })
// }


// listItems.array.forEach(item => {
//     item.addEventListener("click",() =>{
//         this.style.color = 'white';
//     })
    
// });

var firstToDoItem = document.querySelector('.todoItem');
firstToDoItem.addEventListener('mouseover', () => {
    firstToDoItem.style.backgroundColor = 'blue';
})