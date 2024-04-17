var SelectedRow = null;
function ADDtoweb() {
  const InputName = document.getElementById("InputName").value;
  const InputEmail = document.getElementById("InputEmail").value;
  const numericInput = document.getElementById("numericInput").value;
  const mySelect = document.getElementById("mySelect").value;
  if (InputName == "" || InputEmail == "" || numericInput == "") {
    alert("Please fill all the fields");
  } else {
    if (SelectedRow == null) {
      var table = document.getElementById("tableme");

      var newrow = document.createElement("tr");
      console.log(newrow);
      newrow.innerHTML =
        "<td>" +
        InputName +
        "</td><td>" +
        InputEmail +
        "</td><td>" +
        numericInput +
        "</td><td>" +
        mySelect +
        "</td><td>" +
        '<a href="#" class="btn btn-warning btn-sm edit" onClick="edit_row(this)">Edit</a>' +
        '<a href="#" class="btn btn-danger btn-sm delete" onClick="delete_row(this)">Delete</a>' +
        "</td>";

      table.appendChild(newrow);
      SelectedRow == null;
    } else {
      SelectedRow.children[0].textContent = InputName;
      SelectedRow.children[1].textContent = InputEmail;
      SelectedRow.children[2].textContent = numericInput;
      SelectedRow.children[3].textContent = mySelect;
      SelectedRow == null;
      alert("The infos are edited");
    }
    clearallfields();
  }
}

// delete the data
// document.querySelector("#student-list").addEventListener("click", (e) => {
//   alert("I am an alert box!");
//   target = e.target;
//   if (target.classList.contains("delete")) {
//     target.parentElement.parentElement.remove();
//   }
// });
function delete_row(e) {
  e.parentNode.parentNode.parentNode.removeChild(e.parentNode.parentNode);
}
function edit_row(e) {
  alert("This is being edited");
  target = e.target;

  console.log("COndtion has started");
  // SelectedRow = target.parentElement.parentElement;
  document.getElementById("InputName").value =
    SelectedRow.children[0].textContent;
  document.getElementById("InputEmail").value =
    SelectedRow.children[1].textContent;
  document.getElementById("numericInput").value =
    SelectedRow.children[2].textContent;
  document.getElementById("mySelect").value =
    SelectedRow.children[3].textContent;
}
function clearallfields() {
  document.querySelector("#InputName").value = "";
  document.querySelector("#InputEmail").value = "";
  document.querySelector("#numericInput").value = "";
  document.querySelector("mySelect").value = "";
}
