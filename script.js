document.getElementById('add-task-btn').addEventListener('click', addTask); //Add Task Button
document.getElementById('delete-selected-btn').addEventListener('click', deleteSelectedTasks); //Delete Selected Tasks Button

function addTask() { //Add Task Function
    const taskInput = document.getElementById('new-task-input');
    const taskText = taskInput.value.trim();
    if (taskText !== '') {
        const taskItem = createTaskItem(taskText);
        document.getElementById('todo-list').appendChild(taskItem);
        taskInput.value = '';
    }
}

function createTaskItem(taskText) {  //Create Task Item Function
    const taskItem = document.createElement('div');
    taskItem.className = 'todo-item';

    const taskCheck = document.createElement('div');
    taskCheck.className = 'form-check';

    const taskCheckbox = document.createElement('input');
    taskCheckbox.className = 'form-check-input';
    taskCheckbox.type = 'checkbox';

    const taskLabel = document.createElement('label');
    taskLabel.className = 'form-check-label';
    taskLabel.textContent = taskText;

    taskCheck.appendChild(taskCheckbox);
    taskCheck.appendChild(taskLabel);

    const deleteBtn = document.createElement('button');
    deleteBtn.className = 'btn btn-danger btn-sm';
    deleteBtn.textContent = 'Xóa';
    deleteBtn.addEventListener('click', () => taskItem.remove());

    const editBtn = document.createElement('button');
    editBtn.className = 'btn btn-primary btn-sm';
    editBtn.textContent = 'Chỉnh sửa';
    editBtn.addEventListener('click', () => editTask(taskItem, taskLabel));

    taskItem.appendChild(taskCheck);
    taskItem.appendChild(deleteBtn);
    taskItem.appendChild(editBtn);

    return taskItem;
}

function editTask(taskItem, taskLabel) {  //Edit Task Function
    const newTaskText = prompt('Chỉnh sửa nhiệm vụ của bạn', taskLabel.textContent);
    if (newTaskText !== null && newTaskText.trim() !== '') {
        taskLabel.textContent = newTaskText.trim();
    }
}

function deleteSelectedTasks() {   //Delete Selected Tasks Function
    const taskItems = document.querySelectorAll('.todo-item');
    taskItems.forEach(taskItem => {
        const checkbox = taskItem.querySelector('.form-check-input');
        if (checkbox.checked) {
            taskItem.remove();
        }
    });
}
