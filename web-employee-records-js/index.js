let form = document.querySelector("form").addEventListener("submit", addData)
let department = document.getElementById("filter")
.addEventListener("change", filterRecords);

let recordData = []

function addData() {
    event.preventDefault();
    let name = document.getElementById("name").value;
    let employee_id = document.getElementById("employee_id").value;
    let department = document.getElementById("department").value;
    let experience = document.getElementById("experience").value;
    let email = document.getElementById("email").value;
    let mobile = document.getElementById("mobile").value;

    let role;

    if(experience >= 5) {
        role = "Senior"
    } else if(experience < 5 && experience >= 2) {
        role = "Junior"
    } else if(experience <= 1) {
        role = "fresher"
    }

    let obj = {
        name,
        employee_id,
        experience,
        department,
        email,
        mobile,
        role,
    };
    recordData.push(obj)
    showTable(recordData);
  

}

function showTable(recordData) {
    document.querySelector("tbody").innerHTML = "";

    recordData.forEach(function (ele,index) {
    let row = document.createElement("tr");
    let col1 = document.createElement("td");
    col1.innerHTML = ele.name;
    let col2 = document.createElement("td");
    col2.innerHTML = ele.employee_id;
    let col3 = document.createElement("td");
    col3.innerHTML = ele.department;
    let col4 = document.createElement("td");
    col4.innerHTML = ele.experience;
    let col5 = document.createElement("td");
    col5.innerHTML = ele.email;
    let col6 = document.createElement("td");
    col6.innerHTML = ele.mobile;
    let col7 = document.createElement("td");
    col7.innerHTML = ele.role;
    let col8 = document.createElement("td");
    col8.innerHTML = "Delete";
    col8.addEventListener("click", function () {
        removeRow(ele, index)
    });
    
    col8.style.backgroundColor = "gray";
    col8.style.color = "white";
    row.append(col1,col2,col3,col4,col5,col6,col7,col8);
    document.querySelector("tbody").append(row);
    });
}

function removeRow(ele,index){
    recordData.splice(index, 1);
    showTable(recordData);
}

function filterRecords() {
    let val = document.getElementById("filter").value;
    if (val !== "") {
        let arr = recordData.filter((ele) => ele.department === val)
      return showTable(arr)
    }
    return showTable(recordData)
}