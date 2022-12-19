const renderTasks = (proj) => {
    
    const list = proj.getTasks();
    const main = document.querySelector('.main');
    main.textContent = "";
    const taskViewModal = document.querySelector('.taskViewModal')
    const taskViewTitle = document.getElementById('viewTitle')
    const taskViewDesc = document.getElementById('viewDesc')
    const taskViewDueDate = document.getElementById('viewDueDate')
    const taskViewPriority = document.getElementById('viewPriority')


    const editTaskModal = document.querySelector('.editTaskModal')
    const editTitle = document.getElementById('edit-title');
    const editDesc = document.getElementById('edit-desc');
    const editTaskDate = document.getElementById('edit-taskDate');
    const editPriority =document.getElementById('edit-priority');
    const editTaskForm = document.querySelector('.edit-task-form')



    
    for (let i = 0; i < list.length; i++) {
        const task = document.createElement('div')
        task.classList.add('task');
        

        const taskTitle = document.createElement('div')
        taskTitle.classList.add('taskTitle')
        taskTitle.textContent = list[i].title


        const open = document.createElement('button');
        open.textContent = "Open"
        open.classList.add('openBtn');
        open.addEventListener('click', () => {
            taskViewTitle.textContent = list[i].title;
            taskViewDesc.textContent = list[i].desc;
            taskViewDueDate.textContent = list[i].dueDate;
            taskViewPriority.textContent = list[i].priority;

            taskViewModal.style.display = 'block';

        })

        const edit = document.createElement('button');
        edit.textContent = "Edit"
        edit.classList.add('editBtn');
        edit.addEventListener('click', () => {
            editTitle.value = list[i].title;
            editDesc.value = list[i].desc;
            editTaskDate.value = list[i].dueDate;
            editPriority.value = list[i].priority;

            editTaskForm.addEventListener('submit', function editEvent(e) {
                e.preventDefault();

                const data = new FormData(e.target);
                list[i].title = data.get("edit-title");
                list[i].desc = data.get("edit-desc");
                list[i].dueDate = data.get("edit-taskDate")
                list[i].priority = data.get("edit-priority")
                editTaskModal.style.display = 'none';
                editTaskForm.removeEventListener('submit', editEvent)
                renderTasks(proj);

            })

            



            editTaskModal.style.display = 'block';

        })



        const del = document.createElement('button');
        del.textContent = "Delete"
        del.classList.add('delBtn');
        del.addEventListener('click', () => {
            proj.delTask(i);
            renderTasks(proj);
        })

        const div = document.createElement('div');
        div.appendChild(open);
        div.appendChild(edit);
        div.appendChild(del);

        task.appendChild(taskTitle)
        task.appendChild(div)
        main.appendChild(task);
    }
}

export {renderTasks}