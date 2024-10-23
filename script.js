const form = document.getElementById('taskForm');
const taskList = document.getElementById('taskList');

form.addEventListener('submit', async (e) => {
    e.preventDefault();
    const title = document.getElementById('taskTitle').value;

    const response = await fetch('/addTask', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ title }),
    });

    const tasks = await response.json();
    updateTaskList(tasks);
    form.reset();
});

async function fetchTasks() {
    const response = await fetch('/tasks');
    const tasks = await response.json();
    updateTaskList(tasks);
}

function updateTaskList(tasks) {
    taskList.innerHTML = '';
    tasks.forEach(task => {
        const li = document.createElement('li');
        li.className = 'list-group-item';
        li.textContent = task.title;
        taskList.appendChild(li);
    });
}

fetchTasks();