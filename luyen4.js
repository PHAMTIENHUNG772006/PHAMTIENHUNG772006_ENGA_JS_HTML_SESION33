let inputElement = document.querySelector("#input");
        let btnElement = document.querySelector("#btnAdd");
        let ulElement = document.querySelector("#toDoList");

        // Lấy dữ liệu từ Local Storage
        let tasks = JSON.parse(localStorage.getItem("list")) || [];

        function saveToLocalStorage() {
            localStorage.setItem("list", JSON.stringify(tasks));
        }

        function renderList() {
            ulElement.innerHTML = "";
            tasks.forEach((task, index) => {
                let li = document.createElement("li");
                li.textContent = task;

                let span = document.createElement("span");
                span.textContent = "Xoá";
                span.className = "close";
                span.addEventListener("click", function () {
                    tasks.splice(index, 1);
                    saveToLocalStorage();
                    renderList();
                });

                li.appendChild(span);
                ulElement.appendChild(li);
            });
        }

        btnElement.addEventListener("click", function () {
            let inputValue = inputElement.value.trim();

            if (inputValue === "") {
                alert("Dữ liệu không được để trống");
                return;
            }

            tasks.push(inputValue);
            saveToLocalStorage();
            renderList();
            inputElement.value = "";
            inputElement.focus();
        });

        // Hiển thị danh sách khi tải trang
        renderList();