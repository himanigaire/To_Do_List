let tasks = [];

// Display the tasks to the task list
function displayTasks() {
    const taskList = document.getElementById('taskList');
    taskList.innerHTML = '';

    tasks.forEach((task, index) => {
        const li = document.createElement('li');

        // Add the 'completed' class if the task is completed
        if (task.completed) {
            li.classList.add('completed');
        }

        li.innerHTML = `
            <div class="task">
                <input type="checkbox" ${task.completed ? 'checked' : ''} onchange="tickButtonCheck(${index})">
                <span>${task.text}</span>
            </div>
            <button class="delete-btn" onclick="deleteTask(${index})">Delete</button>
        `;
        taskList.appendChild(li);
    });
}

// Add a new task
function addTask() {
    const taskInput = document.getElementById('taskInput');
    const taskText = taskInput.value.trim();

    if (taskText !== '') {
        tasks.push({ text: taskText, completed: false });
        taskInput.value = '';
        displayTasks();
    }
}

// Tick or undo the completion status of a task
function tickButtonCheck(index) {
    tasks[index].completed = !tasks[index].completed;
    displayTasks();
}

// Delete a task
function deleteTask(index) {
    tasks.splice(index, 1);
    displayTasks();
}

// Clear all tasks
function clearTasks() {
    tasks = [];
    displayTasks();
}
