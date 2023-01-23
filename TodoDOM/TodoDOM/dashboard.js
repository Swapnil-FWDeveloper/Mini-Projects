let LSData = JSON.parse(localStorage.getItem("todo")); // Step:- 2
if (LSData === null) {
  LSData = []; // Step:- 3
}
// Getting data from LS
let tbodyEl = document.querySelector("tbody");
let filterSel = document.getElementById("filter");

Display(LSData);
filterSel.addEventListener("change", () => {
  // [];
  if (filterSel.value === "") {
    Display(LSData);
  } else {
    let filtered = LSData.filter((element, index) => {
      if (element.priority === filterSel.value) {
        return true;
      } else {
        return false;
      }
    });
    Display(filtered);
  }
});
// data === LSdata
function Display(data) {
  tbodyEl.innerHTML = null;
  data.forEach((element, index) => {
    let tr = document.createElement("tr");

    let td1 = document.createElement("td");
    td1.innerText = element.task;

    let td2 = document.createElement("td");
    td2.innerText = element.priority;

    let td3 = document.createElement("td");
    td3.innerText = "Del";
    td3.addEventListener("click", () => {
      LSData = LSData.filter((el, i) => {
        if (index === i) {
          return false;
        } else {
          return true;
        }
      });
      localStorage.setItem("todo", JSON.stringify(LSData));
      Display(LSData);
    });

    tr.append(td1, td2, td3);
    tbodyEl.append(tr);
  });
}
