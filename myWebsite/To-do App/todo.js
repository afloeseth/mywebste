function createTask(event) {
  event.preventDefault();
  const input = document.querySelector("#todoInput");
  const list = document.querySelector("#todoList");
  const checkbox = document.createElement("input");
  const newItem = document.createElement("li");
  const span = document.createElement("span");

  const button = document.createElement("button");
  if (input.value != "") {
    newItem.appendChild(checkbox);
    newItem.appendChild(span);
    newItem.appendChild(button);
    span.innerText = input.value;
    button.classList.add("delete");
    button.textContent = "x";
    checkbox.type = "checkbox";
    checkbox.addEventListener("change", function (e) {
      span.style.textDecoration = e.target.checked ? "line-through" : "none;";
    });

    button.addEventListener("click", function (e) {
      newItem.remove();
    });
    list.appendChild(newItem);
    input.value = "";
    return false;
  } else {
    window.alert("Input task");
  }
}
const form = document.querySelector("form");
form.addEventListener("submit", createTask);
