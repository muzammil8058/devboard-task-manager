const API_URL = '/api/tasks';

async function loadTasks() {
    const res = await fetch(API_URL);
    const tasks = await res.json();
    renderTasks(tasks);
}

function renderTasks(tasks) {
    const todo = document.getElementById('todo-column');
    const inprog = document.getElementById('inprogress-column');
    const done = document.getElementById('done-column');

    [todo, inprog, done].forEach(col => col.innerHTML = '');

    tasks.forEach(task => {
        const card = document.createElement('div');
        card.className = 'task-card';
        card.innerHTML = `
            <strong>${task.title}</strong>
            <small>${task.priority} ${task.dueDate || ''}</small>
            <p>${task.description || ''}</p>
            <button data-action="move" data-id="${task.id}" data-status="TODO">To-do</button>
            <button data-action="move" data-id="${task.id}" data-status="IN_PROGRESS">In Progress</button>
            <button data-action="move" data-id="${task.id}" data-status="DONE">Done</button>
            <button data-action="delete" data-id="${task.id}">Delete</button>
        `;

        if (task.status === 'IN_PROGRESS') {
            inprog.appendChild(card);
        } else if (task.status === 'DONE') {
            done.appendChild(card);
        } else {
            todo.appendChild(card);
        }
    });
}

// handle new task form
document.getElementById('task-form').addEventListener('submit', async (e) => {
    e.preventDefault();
    const title = document.getElementById('title').value;
    const description = document.getElementById('description').value;
    const priority = document.getElementById('priority').value;
    const dueDate = document.getElementById('dueDate').value;

    await fetch(API_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ title, description, priority, dueDate })
    });

    e.target.reset();
    loadTasks();
});

// handle move/delete buttons
document.getElementById('board').addEventListener('click', async (e) => {
    if (e.target.tagName !== 'BUTTON') return;

    const id = e.target.getAttribute('data-id');
    const action = e.target.getAttribute('data-action');

    if (action === 'delete') {
        await fetch(`${API_URL}/${id}`, { method: 'DELETE' });
    } else if (action === 'move') {
        const status = e.target.getAttribute('data-status');

        // get current task from server to keep other fields
        const res = await fetch(API_URL);
        const tasks = await res.json();
        const task = tasks.find(t => t.id == id);
        if (!task) return;

        task.status = status;

        await fetch(`${API_URL}/${id}`, {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(task)
        });
    }

    loadTasks();
});

loadTasks();
