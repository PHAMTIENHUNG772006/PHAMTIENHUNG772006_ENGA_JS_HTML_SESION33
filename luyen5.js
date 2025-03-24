let employees = [
    { name: "Nguyễn Văn A", position: "Developer" },
    { name: "Trần Thị B", position: "Designer" },
    { name: "Phạm Văn C", position: "Project Manager" },
  ];
  let currentPage = 1;
  let recordsPerPage = 5;
  
  function renderTable() {
    let table = document.querySelector("#employeeTable");
    table.innerHTML = "";
    let start = (currentPage - 1) * recordsPerPage;
    let end = start + recordsPerPage;
    let paginatedItems = employees.slice(start, end);
  
    paginatedItems.forEach((emp, index) => {
      let row = `<tr>
              <td>${start + index + 1}</td>
              <td>${emp.name}</td>
              <td>${emp.position}</td>
          </tr>`;
      table.innerHTML += row;
    });
    // localStorage.setItem(JSON.stringify("employees",employees))
    renderPagination();
  }
  
  let btnPagesElement = document.querySelector("#btnPages");
  let btnPrevElement = document.querySelector("#btnPrev");
  let btnNextElement = document.querySelector("#btnNext");
  let totalPage = Math.ceil(employees.length / recordsPerPage);
  
  function renderPagination() {
    let totalPage = Math.ceil(employees.length / recordsPerPage);
    let pagesDiv = document.querySelector("#pages");
    pagesDiv.innerHTML = "";
  
    for (let i = 1; i <= totalPage; i++) {
      let btn = document.createElement("button");
      btn.textContent = i;
      btn.className = i === currentPage ? "active" : "";
      btn.addEventListener("click", function () {
        currentPage = i;
        renderTable();
      });
      pagesDiv.appendChild(btn);
  }
    btnNextElement.disabled = currentPage === totalPage;
    btnPrevElement.disabled = currentPage === 1;
    btnPagesElement.addEventListener("click", function () {
      let name = document.querySelector("#inputName").value;
      let position = document.querySelector("#jobInput").value;
      if (name && position) {
        employees.push({ name, position });
        document.getElementById("nameInput").value = "";
        document.getElementById("jobInput").value = "";
        renderTable();
      } else {
        alert("Vui lòng nhập đầy đủ thông tin!");
      }
    });
    btnPrevElement.addEventListener("click", function () {
      if (currentPage > 1) {
        currentPage--;
        renderTable();
      }
    });
    btnNextElement.addEventListener("click", function () {
      if (currentPage < totalPage) {
        currentPage++;
        renderTable();
      }
    });
  }
  
  renderTable();
  