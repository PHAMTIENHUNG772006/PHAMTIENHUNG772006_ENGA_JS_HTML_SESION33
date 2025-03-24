let courses = [
  {
    id: 1,
    content: 'Learn Javascript Session 1',
    dueDate: '2023-04-17',
    status: 'Pending',
    assignedTo: 'Anh Bách',
  },
  {
    id: 2,
    content: 'Learn Javascript Session 2',
    dueDate: '2023-04-17',
    status: 'Pending',
    assignedTo: 'Lâm th',
  },
  {
    id: 3,
    content: 'Learn CSS Session 1',
    dueDate: '2023-04-17',
    status: 'Pending',
    assignedTo: 'Hiếu Ci Ớt Ớt',
  }
]; 


let taskLocal = JSON.parse(localStorage.getItem("task")) || [];

let listTask = courses; 

function renderData() {
  let tbody = document.querySelector("#tbody");
  tbody.innerHTML = "";
  listTask.forEach((task, index) => {
    tbody.innerHTML += `
      <tr>
        <td>${index + 1}</td>
        <td>${task.content}</td>
        <td>${task.dueDate}</td>
        <td>${task.status}</td>
        <td>${task.assignedTo}</td>
        <td id="box-button">
          <button class="edit" data-id="${task.id}">Sửa</button>
          <button class="delete" data-id="${task.id}">Xoá</button>
        </td>
      </tr>
    `;
  });


  document.querySelectorAll(".delete").forEach(button => {
    button.addEventListener("click", deleteTask);
  });

  document.querySelectorAll(".edit").forEach(button => {
    button.addEventListener("click", editTask);
  });
}

function deleteTask(event) {
  let taskId = event.target.getAttribute("data-id");
  listTask = listTask.filter(task => task.id != taskId);
  localStorage.setItem("task", JSON.stringify(listTask));
  renderData();
}

function editTask(event) {
  let taskId = event.target.getAttribute("data-id");
  let task = listTask.find(task => task.id == taskId);
  
  if (task) {
    document.querySelector("#content").value = task.content;
    document.querySelector("#date").value = task.dueDate;
    document.querySelector("#select").value = task.status;
    document.querySelector("#name").value = task.assignedTo;


    listTask = listTask.filter(task => task.id != taskId);
    localStorage.setItem("task", JSON.stringify(listTask));
    renderData();
  }
}

let form = document.querySelector("#taskForm");
form.addEventListener("submit", function(event) {
  event.preventDefault();
  let content = document.querySelector("#content").value.trim();
  let date = document.querySelector("#date").value;
  let select = document.querySelector("#select").value;
  let userName = document.querySelector("#name").value.trim();

  if (!content || !date || !select || !userName) {
    alert("Dữ liệu không được để trống");
    return;
  }

  let task = {
    id: listTask.length ? listTask[listTask.length - 1].id + 1 : 1,
    content,
    dueDate: date,
    status: select,
    assignedTo: userName,
  };

  listTask.push(task);
  localStorage.setItem("task", JSON.stringify(listTask));
  renderData();

  document.querySelector("#taskForm").reset();
});

renderData();