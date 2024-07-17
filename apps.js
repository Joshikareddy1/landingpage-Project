document.addEventListener('DOMContentLoaded', function() {
  const taskForm = document.getElementById('taskForm');
  const taskList = document.getElementById('taskList');

  // Add new task
  taskForm.addEventListener('submit', function(event) {
    event.preventDefault();
    const newTaskInput = document.getElementById('newTask');
    const newTaskText = newTaskInput.value.trim();
    if (newTaskText !== '') {
      const taskItem = document.createElement('li');
      taskItem.innerHTML = `
        <input type="checkbox" class="taskCheckbox">
        <span>${newTaskText}</span>
        <button class="editButton">Edit</button>
        <button class="deleteButton">Delete</button>
      `;
      taskList.appendChild(taskItem);
      newTaskInput.value = '';
    }
  });

  // Mark task as completed
  taskList.addEventListener('click', function(event) {
    if (event.target.matches('.taskCheckbox')) {
      const taskText = event.target.nextElementSibling;
      if (event.target.checked) {
        taskText.classList.add('completed');
      } else {
        taskText.classList.remove('completed');
      }
    }
  });

  // Edit existing task
  taskList.addEventListener('click', function(event) {
    if (event.target.matches('.editButton')) {
      const taskText = event.target.previousElementSibling;
      const newText = prompt('Edit task:', taskText.textContent);
      if (newText != null) {
        taskText.textContent = newText.trim();
      }
    }
  });

  // Delete task
  taskList.addEventListener('click', function(event) {
    if (event.target.matches('.deleteButton')) {
      const taskItem = event.target.parentElement;
      taskList.removeChild(taskItem);
    }
  });
});
