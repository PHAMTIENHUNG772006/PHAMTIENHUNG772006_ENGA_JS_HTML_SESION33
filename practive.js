let inputElement = document.querySelector("#form-input");
let formElement = document.querySelector("#form");
let jobLocals = JSON.parse(localStorage.getItem("jobs"))|| [];
let listJobElement = document.querySelector("#list-job");
// lắng nghe sự kiện

formElement.addEventListener("submit",function(event){
    // ngăn chặn sự kiện mặc định
    event.preventDefault();
    // B1: lấy dữ liệu từ người dùng
    let inputValue = inputElement.value.trim();
    console.log(inputValue);
    

    // B2: validate dữ liệu đàu vào
    if(!inputValue){
        alert("tên công việc không được để trống");
    }
    // B3: lưu trữ dữ liệu trên localStorege
    //3.1 xác đinh các thông tin công việc
    let job = {
        id: Math.ceil(Math.random()*1000),
        jobName: inputValue,
        status: false,
    }
    //push công việc mới vào một mảng
    jobLocals.push(job)
    //3.2 lưu trữ trên local
    localStorage.setItem("jobs",JSON.stringify(job));
    // dọn dữ liệu tron input
    inputElement.value = "";

    console.log(job);
    // B4: lrender lại dữ liệu mới nhất
    renderData();
   
});
function renderData(){
    let jobhtmls = jobLocals.map((job,index) =>{
        return `
        <li
        class="list-group-item d-flex align-items-center border-0 mb-2 rounded justify-content-between"
        style="background-color: #f4f6f7"
        >
        <div>
            <input
            class="form-check-input me-2"
            type="checkbox"
            ${job.status === true ? "checked" : ""}
            checked
            />
            ${ job.status === true ? `<p>${job.jobName}</p>` : `${job.jobName}`}
        </div>
        <div>
            <a href="#!" class="text-info" title="Sửa công việc"
            ><i class="fas fa-pencil-alt me-3"></i>
            </a>
            <a href="#!"onclick(${index}) class="text-danger" title="Xóa công việc"
            ><i class="fas fa-trash-alt"></i>
            </a>
        </div>
        </li>
        `;
    });
    let convertArrayToString = jobhtmls.join("");
    
    listJobElement.innerHTML = convertArrayToString;
}
function handleDelete(index){
    // xoá công việc
    let newJobLocal = jobLocals.splice(index,1);
    console.log(newJobLocal);
    
}

renderData();