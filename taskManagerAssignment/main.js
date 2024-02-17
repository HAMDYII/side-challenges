let form = document.querySelector(".form");

let input = form.querySelector(".input");

let submit = form.querySelector(".sub-btn");

let taskList = document.querySelector(".task-list");

taskList.style.cssText =
  " width:350px; min-height:35px; display:flex; align-items: center; flex-direction: column";

document.body.style.cssText = "display:flex;";

input.style.cssText =
  "outline:none; border:none; background-color:#ccc; border-radius:50px 0 0 50px; height:45px; width:300px; color:#4d4d4d; padding:0 41px 0 15px";

submit.style.cssText =
  "background-color: #FC4F00; border: none; outline: none; border-radius: 50px; height:45px; color:white;margin-left: -40px; padding:0 10px;";

submit.value = "Add Task";

let i = 0;

let j = 0;

function addTask() {
  if (input.value === "") {
    createPopUp();
  } else {
    let task = document.createElement("li");
    taskList.appendChild(task);
    let text = document.createElement("text");
    task.setAttribute("class", "task-text");
    text.innerHTML = input.value;
    task.appendChild(text);
    let remover = document.createElement("span");
    remover.setAttribute("class", "task-remover");
    task.appendChild(remover);
    remover.innerHTML = "\u00d7";

    task.setAttribute("class", `task`);
  }
  input.value = "";
  saveData();
}

input.addEventListener("keypress", function (e) {
  if (e.key === "Enter") {
    addTask();
  } else if (e.key === "Enter" && input.value === "") {
    createPopUp();
  }
});

taskList.addEventListener(
  "click",
  function (e) {
    if (e.target.tagName === "TEXT") {
      e.target.parentElement.classList.toggle("checked");
      saveData();
    } else if (e.target.className === "task-remover") {
      e.target.parentElement.remove();
      saveData();
    }
  },
  false
);

function saveData() {
  window.localStorage.setItem("data", taskList.innerHTML);
}

function showDate() {
  taskList.innerHTML = window.localStorage.getItem("data");
}

showDate();

function createPopUp() {
  let popUp = document.createElement("div");
  popUp.setAttribute("class", "popUp");
  document.body.prepend(popUp);
  let popUpContent = document.createTextNode("You Must Enter a Task");
  popUp.appendChild(popUpContent);
  let sign = document.createElement("span");
  sign.setAttribute("class", "sign");
  let signContent = document.createTextNode("i");
  sign.appendChild(signContent);
  popUp.prepend(sign);

  setTimeout(function () {
    popDel();
  }, 3000);
}

addEventListener("click", function (e) {
  let popUp = document.querySelector(".popUp");
  if (e.target !== submit) {
    popUp.remove();
  }
});

function popDel() {
  let popUp = document.querySelector(".popUp");
  popUp.remove();
}

// setTimeout(function popDel() {
//   let popUp = document.querySelector(".popUp");
//   popUp.remove();
// }, 1000);

// function popDel() {
//   let popUp = document.querySelector(".popUp");
//   popUp.remove();
// }
