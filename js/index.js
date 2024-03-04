let elForm = document.getElementById('form');
let elInput = document.getElementById('input');
let elList = document.getElementById('list');

let allTodo = [];

function renderElements(arr) {
  elList.innerHTML = null;

  for (let i = 0; i < arr.length; i++) {
    let elLi = document.createElement('li');
    let elCheckbox = document.createElement('input');
    let elSpan = document.createElement('span');
    let elEditBtn = document.createElement('button');
    let elDeleteBtn = document.createElement('button');

    elCheckbox.setAttribute('type', 'checkbox');
    elSpan.textContent = arr[i].text;
    elEditBtn.textContent = 'Edit';
    elDeleteBtn.textContent = 'Delete';

    elLi.appendChild(elCheckbox);
    elLi.appendChild(elSpan);
    elLi.appendChild(elEditBtn);
    elLi.appendChild(elDeleteBtn);

    elList.appendChild(elLi);
  }
}

function addTodo(event) {
  event.preventDefault();

  let todo = {
    id: new Date().getTime(),
    text: elInput.value,
    isCompleted: false,
  };

  allTodo.push(todo);

  elInput.value = null;

  renderElements(allTodo);
}

elForm.addEventListener('submit', addTodo);
