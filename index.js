const form = document.querySelector("#todo-form");

form.addEventListener("submit", addItem);

function addItem(event) {
  event.preventDefault();
  console.log(event)

  const {target} = event;

  const [todoInput] = target;
  const list = document.querySelector("#todo-list");
  const li = document.createElement('li')
  li.textContent = todoInput.value.trim;
  list.append(li)
}
