const addBtn = document.querySelector('.btn');
const taskList = document.querySelector('.list');

const taskNameInput = document.querySelector('.task-name');
const taskDateInput = document.querySelector('.task-date');
const taskDiffInput = document.querySelector('.task-difficulty');

const totalSpan = document.querySelector('.total');
const progressSpan = document.querySelector('.progress');
const doneSpan = document.querySelector('.done');

let taskData = [];

function updateCounters() {
  totalSpan.textContent = `${taskData.length} Task`;
  progressSpan.textContent = `${taskData.filter(t => t.status === 'In Progress').length} In progress`;
  doneSpan.textContent = `${taskData.filter(t => t.status === 'Done').length} Done`;
}

function createTaskElement(task) {
  const taskDiv = document.createElement('div');
  taskDiv.classList.add('task');

  taskDiv.innerHTML = `
    <h4>${task.name}</h4>
    <div class="task-info">
      <span><strong>Date:</strong> ${task.date}</span>
      <span><strong>Difficulty:</strong> ${task.difficulty}</span>
    </div>
    <div class="task-status">
      <select>
        <option value="Not Started" ${task.status === 'Not Started' ? 'selected' : ''}>Not Started</option>
        <option value="In Progress" ${task.status === 'In Progress' ? 'selected' : ''}>In Progress</option>
        <option value="Done" ${task.status === 'Done' ? 'selected' : ''}>Done</option>
      </select>
    </div>
  `;

  const select = taskDiv.querySelector('select');
  select.addEventListener('change', (e) => {
    task.status = e.target.value;
    updateCounters();
  });

  return taskDiv;
}

addBtn.addEventListener('click', () => {
  const name = taskNameInput.value.trim();
  const date = taskDateInput.value;
  const difficulty = taskDiffInput.value;

  if (!name || !date || !difficulty) {
    alert("Please fill out all fields.");
    return;
  }

  const newTask = {
    name,
    date,
    difficulty,
    status: 'Not Started'
  };

  taskData.push(newTask);

  const taskElement = createTaskElement(newTask);
  taskList.appendChild(taskElement);

  taskNameInput.value = '';
  taskDateInput.value = '';
  taskDiffInput.value = 'Medium';

  updateCounters();
});

