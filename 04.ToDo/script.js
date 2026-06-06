// Fake Data Base Like Setup
const todos = [];

let currentFilter = "all"; // 'all', 'pending', 'completed'
let currentSort = "newest"; // 'newest', 'oldest'

const task = document.getElementById("taskInput");
const btnAdd = document.getElementById("btnAdd");
const todoList = document.getElementsByClassName("todo-list")[0];
const completedBtn = document.getElementById("completed");
const pendingBtn = document.getElementById("pending");
const allBtn = document.getElementById("all");
const sortBtn = document.getElementById("sort");
const taskCount = document.getElementById("taskCount");

function ShowTodoList() {
  let filteredData = todos.filter((i) => {
    if (currentFilter === "completed") return i.status === "Completed";
    if (currentFilter === "pending") return i.status === "Pending";
    return true;
  });

  filteredData.sort((a, b) => {
    const timeA = new Date(a.time).getTime();
    const timeB = new Date(b.time).getTime();

    if (currentSort === "newest") return timeB - timeA;
    if (currentSort === "oldest") return timeA - timeB;
    return 0;
  });

  taskCount.innerText = filteredData.length;

  if (filteredData.length === 0) {
    todoList.innerHTML = "<h2 class='no-tasks'>No Tasks Found</h2>";
    return;
  }

  let elements = "";
  filteredData.forEach((i) => {
    const completedClass = i.status === "Completed" ? "completed" : "";

    elements += `<div class="todo-card ${completedClass}" key="${i.id}"> 
      <div class="todo-left"> 
        <h3>${i.taskName}</h3> 
        <div class="todo-meta"> 
          <span class="meta"> 
            <i class="fa-regular fa-clock"></i> ${String(i.time).slice(0, 25)} 
          </span> 
          <span class='meta ${i.status.toLowerCase()}'> 
            <i class="fa-solid fa-circle-check"></i> ${i.status} 
          </span> 
        </div> 
      </div> 
      <div class="todo-actions"> 
        <button class="icon-btn check-btn" onclick="handelComplete(\`${i.id}\`)"> 
          <i class="fa-solid fa-check"></i> 
        </button> 
        <button class="icon-btn delete-btn" onclick="handelDelete(\`${i.id}\`)"> 
          <i class="fa-solid fa-trash"></i> 
        </button> 
      </div> 
    </div>`;
  });

  todoList.innerHTML = elements;
}

function handelComplete(id) {
  const todoItem = todos.find((i) => i.id === id);
  if (todoItem) {
    todoItem.status = todoItem.status === "Pending" ? "Completed" : "Pending";
    ShowTodoList();
  }
}

function handelDelete(id) {
  const index = todos.findIndex((i) => i.id === id);
  if (index !== -1) {
    todos.splice(index, 1);
    ShowTodoList();
  }
}

function updateFilterUI(activeBtn) {
  completedBtn.classList.remove("active-filter");
  pendingBtn.classList.remove("active-filter");
  allBtn.classList.remove("active-filter");
  activeBtn.classList.add("active-filter");
}

completedBtn.addEventListener("click", function () {
  currentFilter = "completed";
  updateFilterUI(completedBtn);
  ShowTodoList();
});

pendingBtn.addEventListener("click", function () {
  currentFilter = "pending";
  updateFilterUI(pendingBtn);
  ShowTodoList();
});

allBtn.addEventListener("click", function () {
  currentFilter = "all";
  updateFilterUI(allBtn);
  ShowTodoList();
});

sortBtn.addEventListener("change", function () {
  currentSort = sortBtn.value;
  ShowTodoList();
});

btnAdd.addEventListener("click", function () {
  if (task.value.trim().length != 0) {
    const newTask = {
      id: new Date().toISOString().replaceAll("-", "").replaceAll(":", ""),
      taskName: task.value.trim(),
      status: "Pending",
      time: new Date(),
    };
    todos.unshift(newTask);
    ShowTodoList();
  }
  task.value = "";
});

ShowTodoList();
