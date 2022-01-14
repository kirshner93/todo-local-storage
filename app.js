const list = document.querySelector('input');
const todos = document.querySelector('ul');
document.querySelector('button').addEventListener('click', validate);
document.addEventListener('DOMContentLoaded', loadList);



function createEl(text) {
  let el = document.createElement('li');
  el.innerText = text;
  el.addEventListener('click', removeLi)
  todos.append(el);
  
  

  
}

function validate() {
  if (list.value.trim()) {
    
    saveLocal(list.value);
    createEl(list.value);
    list.value = ''
    
  }
  
}

function removeLi(e) {
  this.removeEventListener('click', removeLi)
  this.remove()
  removeTodo(this.innerText)
}

function removeTodo(names) {
  const taskLS = JSON.parse(localStorage.getItem('task'));

  localStorage.setItem('task',
  JSON.stringify(taskLS.filter(el => el != names)))
}

function saveLocal(task) {
  const taskLS =JSON.parse(localStorage.getItem('task')) || [];
  localStorage.setItem('task', JSON.stringify([...taskLS, task]))
}

function loadList() {
  
  const taskLS = JSON.parse(localStorage.getItem('task'));
  if (taskLS) {
    taskLS.forEach(el => {
      createEl(el)
      
    });
    
  }
}


