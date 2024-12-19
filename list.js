// list.js

// Get DOM elements
const taskInput = document.getElementById('taskInput');
const addButton = document.getElementById('addButton');
const todoList = document.getElementById('todoList');

// Add Task function
function addTask() {
  // Get the input value
  const taskText = taskInput.value.trim();

  if (taskText === "") {
    alert("Please enter a task.");
    return;
  }

  // Create a new list item (li)
  const li = document.createElement('li');

  // Create a text node for the task
  const taskContent = document.createTextNode(taskText);
  li.appendChild(taskContent);

  // Create a "Delete" button
  const deleteButton = document.createElement('button');
  deleteButton.textContent = 'Delete';
  deleteButton.addEventListener('click', deleteTask);

  // Add the delete button to the li
  li.appendChild(deleteButton);

  // Create a "Complete" button to mark task as done
  const completeButton = document.createElement('button');
  completeButton.textContent = 'Complete';
  completeButton.addEventListener('click', toggleComplete);

  // Add the complete button to the li
  li.appendChild(completeButton);

  // Append the new li to the ul
  todoList.appendChild(li);

  // Clear the input field
  taskInput.value = '';
}

// Delete Task function
function deleteTask(event) {
  const taskItem = event.target.parentElement;
  todoList.removeChild(taskItem);
}

// Toggle Complete function (mark as done)
function toggleComplete(event) {
  const taskItem = event.target.parentElement;
  taskItem.classList.toggle('completed');
}

// Add event listener for the Add Task button
addButton.addEventListener('click', addTask);

// Allow pressing 'Enter' to add task
taskInput.addEventListener('keypress', function (e) {
  if (e.key === 'Enter') {
    addTask();
  }
});