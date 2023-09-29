const inputElement = document.querySelector(".new-task-input");
const addTaskButton = document.querySelector(".new-task-button");
const TasksContainer = document.querySelector(".tasks-container");
const listTasks = [];
let id = 0;

function addTask(){
    const taskItemContainer = document.createElement("div");
    taskItemContainer.classList.add("task-item");

    const taskContent = document.createElement("p");
    taskContent.innerText = inputElement.value;
    taskContent.id = id

    taskItemContainer.appendChild(taskContent);

    TasksContainer.appendChild(taskItemContainer);
    if(inputElement.value != ""){
        listTasks.push(inputElement.value);
    }
    inputElement.value = "";
    id++
}

addTaskButton.addEventListener("click", () => addTask());
