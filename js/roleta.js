function funcaoGirar(){

}

function funcaoGirar(){
    var min = 1024;
    var max = 9999;
    var graus = Math.floor(Math.random() * (max - min)) + min;
    document.getElementById('caixa').style.transform = "rotate("+graus+"deg)";
  }

  
  var elemento = document.getElementById('caixaprincipal');
  elemento.classList.remove('animate');

  setTimeout(function(){
    elemento.classList.add('animate');
  }, 5000);
  

  
//lista de tarefas//
  const inputElement = document.querySelector(".new-task-input");
const addTaskButton = document.querySelector(".new-task-button");
const tasksContainer = document.querySelector(".tasks-container");
const listTasks = [];
let id = 0;

function addTask(){
    const taskItemContainer = document.createElement("div");
    taskItemContainer.classList.add("task-item");

   const taskContent = document.createElement("p");
   taskContent.innerText = inputElement.value;
   taskContent.id = id
   
   taskItemContainer.appendChild(taskContent);

   tasksContainer.appendChild(taskItemContainer);
   if(inputElement.value != ""){
    listTask.push(inputElement.value);
   }

   inputElement.value = "";
   id++
}





function toggleContrast() {
  var formElement = document.getElementById("form")
  formElement.className = "high-contrast";
}

  addTaskButton.addEventListener("click", () => addTask());