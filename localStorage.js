localStorage.setItem("number",10);

localStorage.setItem("userName","phạm tiến hưng");

let users = {
    id: 1,
    userName: "hưng",
    class: 12,
};


//lưu trữ dữ liệu
localStorage.setItem("user", JSON.stringify(users));

//lấy dữ liệu từ localStorage
let numberLocal = localStorage.getItem("number");
console.log("numberLocal : ",numberLocal);

let userLocal = localStorage.getItem("user");

console.log("userLocal : ",userLocal);
let userPared = JSON.parse(userLocal);
console.log("userLocal : ",userPared);


// xoá một key trên local
localStorage.removeItem("userName");

// xoá tất cả key trên local
localStorage.clear();

