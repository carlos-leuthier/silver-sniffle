// Initialize Parse
Parse.initialize("f0NI4KMivyW7SCJ1FLv2ZuPkHzv1iYRv0fmjru28", "fTsenOesVRwdO56gtx9VAE3gLBLQdeBAHXx3ZWTu");
Parse.serverURL = "https://parseapi.back4app.com/";
   
const inputElement = document.getElementById("tex");
  const buttonElement = document.getElementById("btn");
    const ulElement = document.getElementById("lis");
        const SelectElement = document.getElementById("op")

let tarefas = [];

buttonElement.onclick = ev => {
  ev.preventDefault();


  if (inputElement.value) {
    
      const textElement = document.createElement("span");
    textElement.innerHTML = inputElement.value;

      const btnElement = document.createElement("button");
    btnElement.innerHTML = "Remover";

    const btncon = document.createElement('input');
    btncon.type = "checkbox";
    btncon.id = "check";
    

    const liElement = document.createElement("li");
      liElement.appendChild(textElement);
      liElement.appendChild(btnElement);
      liElement.appendChild(btncon);
    

    btnElement.onclick = () => {
      ulElement.removeChild(liElement)  
    }
    
    btncon.onclick = () => {
        textElement.style.textDecoration = 'line-through';
    } 
 

ulElement.appendChild(liElement);
    inputElement.value = "";

    
   }
    
  }