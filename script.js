"use strict";

const inputElement = document.getElementById("input");
const addBtn = document.getElementById("add");
const ulElement = document.querySelector("ul");

const tasks = [];

addBtn.addEventListener("click", (event) => {
  event.preventDefault();

  // get user value
  const givenValue = inputElement.value.trim();

  // return if value is empty
  if (givenValue.length === 0) {
    return;
  }

  // add values to tasks array
  tasks.unshift(givenValue);
  displayTasks();

  // reset input value
  inputElement.value = "";
});

const displayTasks = () => {
  ulElement.innerHTML = "";

  tasks.forEach((task, index, array) => {
    const liElement = document.createElement("li");
    const spanElement = document.createElement("span");
    const buttonElement = document.createElement("button");

    spanElement.textContent = task;
    buttonElement.textContent = "Delete Task";
    buttonElement.className = "btn";

    buttonElement.addEventListener("click", () => {
      deleteTask(index);
    });

    liElement.insertAdjacentElement("afterbegin", spanElement);
    liElement.insertAdjacentElement("beforeend", buttonElement);

    ulElement.insertAdjacentElement("afterbegin", liElement);
  });
};

const deleteTask = (index) => {
  tasks.splice(index, 1);
  displayTasks();
};
