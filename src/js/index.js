// const refs = {
//   form: document.querySelector('.form'),
//   tasksBox: document.querySelector('.tasks-box'),
// };
// const { form, tasksBox, deleteTask } = refs;

// form.addEventListener('submit', addNewTask);
// tasksBox.addEventListener('click', handleTask);

// function addNewTask(e) {
//   e.preventDefault();

//   const userInput = e.target.elements.addTask.value.trim();
//   if (userInput === '') {
//     return alert('Веди щось нормальне');
//   }
//   createMarkup(userInput);
//   form.reset();
// }
// function createMarkup(userInput) {
//   const markup = `<li class="task">
// 	<input class="privacy-checkbox visually-hidden" id="user-privacy" type="checkbox" name="user-privacy" value="true" />
// 	<label class="privacy-label" for="user-privacy">
// 		<span class="checkbox-box-svg">
// 			<svg class="checkbox-svg" width="10" height="8">
// 				<use href="./images/icons.svg#stick"></use>
// 			</svg>
// 		</span>
// 	</label>
// 		${userInput}
// 		<button class="delete-task" type="button" onclick="">
// 			<svg class="icon-bin" width="10" height="8">
// 				<use href="./images/icons.svg#bin"></use>
// 			</svg>
// 		</button>
// </li>`;
//   tasksBox.insertAdjacentHTML('beforeend', markup);
//   const deleteBtns = document.querySelectorAll('.delete-task');
//   deleteBtns.forEach(deleteBtn => {
//     deleteBtn.addEventListener('click', deleteCurrentTask);
//   });
//   const checkboxBtns = document.querySelectorAll('.privacy-checkbox');
//   checkboxBtns.forEach(checkboxBtn => {
//     checkboxBtn;
//   });
// }
// function handleTask(e) {
//   const currentTask = e.target;
//   console.log(e.target);
// }
// function deleteCurrentTask(e) {
//   const currentTask = e.target.closest('.task');
//   currentTask.remove();
// }

import imgDeleteLink from '../images/bin.png';
import imgTick from '../images/tick.png';

const formEl = document.getElementById('task-form');
const inputEl = document.querySelector('input');
const list = document.getElementById('task-list');
let tasks = JSON.parse(localStorage.getItem('tasks')) || [];

formEl.addEventListener('submit', btnHandler);

function btnHandler(e) {
  e.preventDefault();

  const task = inputEl.value.trim();
  if (task !== '') {
    tasks.push(task);
    inputEl.value = '';

    renderTasks();

    localStorage.setItem('tasks', JSON.stringify(tasks));
  }
}

/*<li class="task">
// 	<input class="privacy-checkbox visually-hidden" id="user-privacy" type="checkbox" name="user-privacy" value="true" />
// 	<label class="privacy-label" for="user-privacy">
// 		<span class="checkbox-box-svg">
// 			<svg class="checkbox-svg" width="10" height="8">
// 				<use href="./images/icons.svg#stick"></use>
// 			</svg>
// 		</span>
// 	</label>
// 		${userInput}
// 		<button class="delete-task" type="button" onclick="">
// 			<svg class="icon-bin" width="10" height="8">
// 				<use href="./images/icons.svg#bin"></use>
// 			</svg>
// 		</button>
// </li> */

function renderTasks() {
  list.innerHTML = '';

  tasks.forEach((task, index) => {
    const markup = `
  <li class="task">
	<input class="privacy-checkbox visually-hidden" id="user-privacy" type="checkbox" name="user-privacy" value="true" />
	<label class="privacy-label" for="user-privacy">
		<span class="checkbox-box-svg">
			<img class="checkbox-svg" src="${imgTick}" width="10" height="8">
		</span>
	</label>
	${task}
 		<button class="delete-task" type="button" data-index ="${index}">
		<img class="checkbox-svg" src="${imgDeleteLink}" width="10" height="8">
 			
 		</button>
		</li>`;
    //  const liEl = document.createElement('li');
    //  const btn = document.createElement('button');
    //  const imgDelete = document.createElement('img');

    //  liEl.classList.add('task');

    //  btn.setAttribute('type', 'button');
    //  btn.classList.add('delete-task');

    //  imgDelete.setAttribute('src', imgDeleteLink);
    //  imgDelete.setAttribute('width', 20);
    //  imgDelete.setAttribute('height', 20);

    //  liEl.innerText = task;

    //  btn.dataset.index = index;

    list.insertAdjacentHTML('afterbegin', markup);
    const deletebtn = document.querySelector('.delete-task');
    deletebtn.addEventListener('click', removeTask);
    //  btn.prepend(imgDelete);
    //  liEl.appendChild(btn);
    //  list.prepend(liEl);
  });
}

function removeTask(e) {
  const taskIndex = e.target.dataset.index;

  tasks.splice(taskIndex, 1);
  renderTasks();
  localStorage.setItem('tasks', JSON.stringify(tasks));
}

renderTasks();
