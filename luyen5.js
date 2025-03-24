let employees =  [
            { name: "Nguyễn Văn A", position: "Developer" },
            { name: "Trần Thị B", position: "Designer" },
            { name: "Phạm Văn C", position: "Project Manager" }
        ];
       let employeelocal =  JSON.parse(localStorage.getItem("employees")) || [];

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

            localStorage.setItem("employees", JSON.stringify(employees));
            renderPagination();
        }

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

            document.querySelector("#btnNext").disabled = currentPage === totalPage;
            document.querySelector("#btnPrev").disabled = currentPage === 1;
        }

        document.querySelector("#btnAdd").addEventListener("click", function () {
            let name = document.querySelector("#nameInput").value.trim();
            let position = document.querySelector("#jobInput").value.trim();

            if (!name || !position) {
                alert("Vui lòng nhập đầy đủ thông tin!");
                return;
            }

            employees.push({ name, position });

            document.querySelector("#nameInput").value = "";
            document.querySelector("#jobInput").value = "";

            currentPage = Math.ceil(employees.length / recordsPerPage);
            renderTable();
        });

        document.querySelector("#btnPrev").addEventListener("click", function () {
            if (currentPage > 1) {
                currentPage--;
                renderTable();
            }
        });

        document.querySelector("#btnNext").addEventListener("click", function () {
            let totalPage = Math.ceil(employees.length / recordsPerPage);
            if (currentPage < totalPage) {
                currentPage++;
                renderTable();
            }
        });

        renderTable();
    