// JavaScript code for handling task management functionality

document.addEventListener("DOMContentLoaded", function () {
  const taskList = document.getElementById("task-ul");
  const addTaskBtn = document.getElementById("add-task-btn");

  addTaskBtn.addEventListener("click", function () {
    const taskName = document.getElementById("task-name").value;
    const developerName = document.getElementById("developer-name").value;
    const dueDate = document.getElementById("due-date").value;

    // Create a new task item
    const taskItem = document.createElement("li");
    taskItem.innerHTML = `
            <span>${taskName}</span>
            <span>${developerName}</span>
            <span>${dueDate}</span>
            <div class="progress-bar"></div>
            <button class="complete-btn">Complete</button>
        `;

    // Add the task item to the task list
    taskList.appendChild(taskItem);

    // Clear input fields
    document.getElementById("task-name").value = "";
    document.getElementById("developer-name").value = "";
    document.getElementById("due-date").value = "";
  });
});

// Task object structure
function Task(name, developer, dueDate) {
  this.name = name;
  this.developer = developer;
  this.dueDate = dueDate;
  this.status = "Pending"; // Default status
}

const taskList = []; // Array to store tasks

// Function to add a task
function addTask() {
  const taskName = document.getElementById("task-name").value;
  const developerName = document.getElementById("developer-name").value;
  const dueDate = document.getElementById("due-date").value;

  if (taskName && developerName && dueDate) {
    const task = new Task(taskName, developerName, dueDate);
    taskList.push(task);
    displayTasks();
    clearInputs();
  } else {
    alert("Please fill in all fields.");
  }
}

// Function to display tasks in the task list
function displayTasks() {
  const taskUl = document.getElementById("task-ul");
  taskUl.innerHTML = ""; // Clear existing content

  for (const task of taskList) {
    const li = document.createElement("li");
    li.textContent = `${task.name} - ${task.developer} - Due: ${task.dueDate} - Status: ${task.status}`;
    taskUl.appendChild(li);
  }
}

// Function to clear input fields after adding a task
function clearInputs() {
  document.getElementById("task-name").value = "";
  document.getElementById("developer-name").value = "";
  document.getElementById("due-date").value = "";
}

// Event listener for the "Add Task" button
const addTaskBtn = document.getElementById("add-task-btn");
addTaskBtn.addEventListener("click", addTask);
