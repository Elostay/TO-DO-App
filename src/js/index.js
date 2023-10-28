import imgDeleteLink from '../images/bin.png';
import imgTick from '../images/tick.png';

// const formEl = document.getElementById('task-form');
// const inputEl = document.querySelector('input');
// const list = document.getElementById('task-list');
// let tasks = JSON.parse(localStorage.getItem('tasks')) || [];
// // let completedTasks = JSON.parse(localStorage.getItem('completedTasks')) || [];

// // const statusList = document.querySelector('.status-tasks');

// formEl.addEventListener('submit', btnHandler);
// // statusList.addEventListener('click', statusBtnHandler);

// function btnHandler(e) {
//   e.preventDefault();

//   const task = inputEl.value.trim();
//   if (task !== '') {
//     tasks.push(task);
//     inputEl.value = '';

//     renderTasks();

//     localStorage.setItem('tasks', JSON.stringify(tasks));
//   }
// }
// function renderTasks(e) {
//   //   list.innerHTML = '';
//   const markup = tasks
//     .map((task, index) => {
//       return `
//   <li class="task">
// 	<input class="checkbox visually-hidden" data-checkbox-id="${index}" id="user-privacy${index}" type="checkbox" name="user-privacy" value="true" />
// 	<label class="label" for="user-privacy${index}">
// 		<span class="checkbox-box-svg">
// 			<img class="checkbox-svg visually-hidden" src="${imgTick}" width="10" height="8">
// 		</span>
// 	</label>
// 	<textarea class="change-task" name="" rows="1" cols="" placeholder="" style="resize:none">${task}</textarea>

//  		<button class="delete-task" type="button" data-index ="${index}">
// 		<img class="checkbox-svg" src="${imgDeleteLink}" width="10" height="8">

//  		</button>
// 		</li>`;
//     })
//     .join('');

//   list.innerHTML = markup;
//   const deletebtn = document.querySelectorAll('.delete-task');
//   deletebtn.forEach(btn => btn.addEventListener('click', removeTask));

//   const checkboxes = document.querySelectorAll('.checkbox');
//   checkboxes.forEach(checkbox =>
//     checkbox.addEventListener('click', toggleTick)
//   );
//   const changeTasks = document.querySelectorAll('.change-task');
//   changeTasks.forEach(task => task.addEventListener('change', changedTask));
// }
// function changedTask(e) {
//   const changedTask = e.target.value.trim();
//   const previousTask = e.target.defaultValue;
//   const localStorageData = localStorage.getItem('tasks');
//   const parsedData = JSON.parse(localStorageData);
//   const indexOfOldTask = parsedData.findIndex(
//     element => element === previousTask
//   );
//   parsedData.splice(indexOfOldTask, 1, changedTask);
//   console.log(parsedData);

//   localStorage.setItem('tasks', JSON.stringify(parsedData));
// }
// function toggleTick(e) {
//   const hiddenImg = e.target.nextElementSibling.querySelector('.checkbox-svg');
//   hiddenImg.classList.toggle('visually-hidden');
// }
// function removeTask(e) {
//   const taskTextContent =
//     e.target.closest('.delete-task').previousElementSibling.textContent;
//   console.log(taskTextContent);
//   const taskIndex = tasks.findIndex((element, index, array) => {
//     return element === taskTextContent;
//   });

//   tasks.splice(taskIndex, 1);

//   e.target.closest('.task').remove();

//   localStorage.setItem('tasks', JSON.stringify(tasks || []));
// }
// function saveCheckboxed() {
//   // Отримуємо всі чекбокси на сторінці
//   const checkboxes = document.querySelectorAll('input[type="checkbox"]');

//   // Додаємо обробник події для кожного чекбоксу
//   checkboxes.forEach(checkbox => {
//     checkbox.addEventListener('change', function () {
//       // Отримуємо ідентифікатор чекбоксу
//       const checkboxId = this.id;
//       // Зберігаємо статус checked в локальне сховище
//       localStorage.setItem(checkboxId, this.checked);
//     });

//     // Відновлюємо статус checked при завантаженні сторінки
//     const savedStatus = localStorage.getItem(checkbox.id);
//     if (savedStatus !== null) {
//       checkbox.checked = savedStatus === 'true';
//     }
//   });
// }
// renderTasks();
// function statusBtnHandler(e) {
//   const currentBtn = e.target.dataset.status;
//   const checkboxes = document.querySelectorAll('input[type="checkbox"]');

//   switch (currentBtn) {
//     case 'all':
//       renderTasks();
//       console.log('all');
//       break;
//     case 'active':
//       console.log('active');
//       break;
//     case 'completed':
//       handleCompleted(checkboxes);
//       break;
//   }
// }
// function handleCompleted(checkboxes) {
//   renderCompletedTasks(checkboxes);
// }
// function renderCompletedTasks(checkboxes) {
//   list.innerHTML = '';
//   const array = [...checkboxes].reduce((array, checkbox) => {
//     if (checkbox.checked) {
//       const closestTask = checkbox.closest('.task');

//       array.push(closestTask);
//     }
//     return array;
//   }, []);
//   array.forEach(el => {
//     list.appendChild(el.cloneNode(true));
//   });
//   const checkboxesImg = document.querySelectorAll('.checkbox');
//   checkboxesImg.forEach(checkbox =>
//     checkbox.addEventListener('click', toggleTick)
//   );

//   const deletebtn = document.querySelectorAll('.delete-task');
//   deletebtn.forEach(btn => btn.addEventListener('click', removeCompletedTask));

//   const changeTasks = document.querySelectorAll('.change-task');
//   changeTasks.forEach(task => task.addEventListener('change', changedTask));
// }
// function removeCompletedTask(e) {
//   const taskTextContent =
//     e.target.closest('.delete-task').previousElementSibling.textContent;

//   tasks.splice(taskTextContent, 1);

//   e.target.closest('.task').remove();

//   localStorage.setItem('completedTasks', JSON.stringify(tasks || []));
// }
const formEl = document.getElementById('task-form');
const inputEl = document.querySelector('input');
const list = document.getElementById('task-list');
let tasks = JSON.parse(localStorage.getItem('tasks')) || [];

formEl.addEventListener('submit', btnHandler);

function btnHandler(e) {
  e.preventDefault();

  const task = inputEl.value.trim();
  if (task !== '') {
    tasks.push({ task: task, checked: false });
    inputEl.value = '';

    renderTasks();

    localStorage.setItem('tasks', JSON.stringify(tasks));
  }
}

function renderTasks() {
  const markup = tasks
    .map((taskObj, index) => {
      const { task, checked } = taskObj;
      return `
            <li class="task">
                <input class="checkbox visually-hidden" data-checkbox-id="${index}" id="user-privacy${index}" type="checkbox" name="user-privacy" value="true" ${
        checked ? 'checked' : ''
      }/>
                <label class="label" for="user-privacy${index}">
                    <span class="checkbox-box-svg">
                        <img class="checkbox-svg ${
                          checked ? '' : 'visually-hidden'
                        }" src="${imgTick}" width="10" height="8">
                    </span>
                </label>
                <textarea class="change-task" name="" rows="1" cols="" placeholder="" style="resize:none">${task}</textarea>
                <button class="delete-task" type="button" data-index ="${index}">
                    <img class="checkbox-svg" src="${imgDeleteLink}" width="10" height="8">
                </button>
            </li>`;
    })
    .join('');

  list.innerHTML = markup;

  const deletebtn = document.querySelectorAll('.delete-task');
  deletebtn.forEach(btn => btn.addEventListener('click', removeTask));

  const checkboxes = document.querySelectorAll('.checkbox');
  checkboxes.forEach(checkbox =>
    checkbox.addEventListener('change', toggleTick)
  );

  const changeTasks = document.querySelectorAll('.change-task');
  changeTasks.forEach(task => task.addEventListener('change', changedTask));
}

function changedTask(e) {
  const changedTask = e.target.value.trim();
  const previousTask = e.target.defaultValue;
  const localStorageData = JSON.parse(localStorage.getItem('tasks'));
  const indexOfOldTask = localStorageData.findIndex(
    element => element.task === previousTask
  );

  localStorageData[indexOfOldTask].task = changedTask;

  localStorage.setItem('tasks', JSON.stringify(localStorageData));
}

function toggleTick(e) {
  const checkboxId = e.target.getAttribute('data-checkbox-id');
  tasks[checkboxId].checked = !tasks[checkboxId].checked;

  const hiddenImg = e.target.nextElementSibling.querySelector('.checkbox-svg');
  hiddenImg.classList.toggle('visually-hidden');

  localStorage.setItem('tasks', JSON.stringify(tasks));
}

function removeTask(e) {
  const taskIndex = parseInt(e.target.dataset.index);

  tasks.splice(taskIndex, 1);

  renderTasks();

  localStorage.setItem('tasks', JSON.stringify(tasks));
}

renderTasks();
