

let form = document.querySelector("form");

 form.addEventListener("submit",event =>{
     console.log(
         "saving value",form.elements.name.name
     );
     event.preventDefault();  // to intercep submit before submiting the form
 })



let nm = document.getElementById('name1');

// storing Data Client side
localStorage.setItem("username" ,"fff");
console.log(localStorage.getItem("username"));