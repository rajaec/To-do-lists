function addTask() {
  const taskInput = document.getElementById("taskInput");
  const taskList = document.getElementById("taskList");

  if (taskInput.value.trim() === "") {
      alert("Please enter a task!");
      return;
  }

  const li = document.createElement("li");
  li.innerHTML = `
      <span>${taskInput.value}</span>
      <button onclick="removeTask(this)">Delete</button>
  `;
  taskList.appendChild(li);

  taskInput.value = "";
}

function removeTask(button) {
  const li = button.parentElement;
  li.remove();
}
