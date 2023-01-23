let taskForm = document.querySelector("form");
let taskInp = document.getElementById("task");
let prioritySel = document.getElementById("priority");
// Till this line is just form catching

let todoArray = JSON.parse(localStorage.getItem("todo")); // Step:-2

if (todoArray === null) {
  todoArray = []; // Step:- 3
}
// Getting data from LS

taskForm.addEventListener("submit", (e) => {
  e.preventDefault();
  let formData = {
    task: taskInp.value,
    priority: prioritySel.value,
  };
  todoArray.push(formData);
  localStorage.setItem("todo", JSON.stringify(todoArray)); // Step:-1
});
