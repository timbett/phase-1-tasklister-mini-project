document.addEventListener("DOMContentLoaded", () => {
  document.querySelector('form').addEventListener('submit', (e) => {
    e.preventDefault()
    newTask(e.target.new_task.value)
  })
});

function newTask(task) {
  let ul = document.getElementById('tasks')
  let li = document.createElement('li')
  ul.appendChild(li)
  li.innerHTML = `${task}  `;
  let btn = document.createElement('button');
  btn.addEventListener('click', removeToDoList)
  btn.innerHTML = 'X'
  li.appendChild(btn)


}

function removeToDoList(e) {
    e.target.parentNode.remove()
}