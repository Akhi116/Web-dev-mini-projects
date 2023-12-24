const todo = JSON.parse(localStorage.getItem('todo')) ||[];

renderTodoList();

function renderTodoList() {

  let todoListHtml = '';

  todo.forEach((listValueObj) => {
    const { name, dueDate } = listValueObj;
    const html = `
    <div>${name}</div> 
    <div>${dueDate}</div>
    <button class="delete-btn js-delete-btn">
        Delete</button>
    `;
    todoListHtml += html;
  });
  
  
  const list = document.querySelector('.js-list');
  list.innerHTML = todoListHtml;

  document.querySelectorAll('.js-delete-btn')
    .forEach((deleteButton, index) => {
      deleteButton.addEventListener('click', () => {
        todo.splice(index,1);
        renderTodoList();
        saveToStorage();
    });
  });
  
}

document.querySelector('.js-add-btn')
  .addEventListener('click', () => addToArray());

function addToArray() {
  const inputElem = document.querySelector('.js-todo-name');
  const name = inputElem.value;

  const dateElement = document.querySelector('.js-date');
  const dueDate = dateElement.value;

  todo.push({ name, dueDate }); // same as name:name, dueDate : dueDate as they have same names

  inputElem.value = '';
  dateElement.value = '';

  renderTodoList();

  saveToStorage();
}

function saveToStorage(){
  localStorage.setItem('todo', JSON.stringify(todo));
}

function handleKeyDown(event) {
  if (event.key === 'Enter') {
    addToArray();
  }
}