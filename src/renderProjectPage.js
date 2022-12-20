import { renderPage } from "./renderPage";
import { renderTasks } from "./renderTasks";
import { taskFactory } from "./taskFactory";
import { saveToLocalStorage } from "./saveTolocalStorage";

const renderProjectPage = (proj) => {
    const content = document.querySelector('.content');
    content.textContent = "";

    content.innerHTML += '<div class="taskModal">\n'+
                            '<button id="close-modal">X</button>\n' +
                              '<div>\n'+
                                '<form action="" class="task-form">\n'+
                                    '<div>\n'+
                                      '<label for="title">Title: </label>\n'+
                                      '<input type="text" id="title" name="title" required placeholder=" ">\n'+
                                  '</div>\n'+
                                  '<div>\n'+
                                      '<label for="desc">Description:</label>\n'+
                                      '<textarea id="desc" name="desc" maxlength="85"></textarea>\n'+
                                  '</div>\n'+
                                  '<div>\n'+
                                      '<label for="taskDate">Due Date:</label>\n'+
                                      '<input type="date" id="taskDate" name="taskDate">\n'+
                                  '</div>\n'+
                                  '<div>\n'+
                                     '<label for="priority">Priority: </label>\n'+
                                    '<select id="priority" name="priority">\n'+
                                        '<option value="high">High</option>\n'+
                                        '<option value="medium">Medium</option>\n'+
                                        '<option value="low">Low</option>\n'+
                                    '</select>\n'+
                                  '</div>\n'+
                                 '<button type="submit" id="submit-btn">Submit</button>\n'+
                              '</form>\n'+
                              '</div>\n'+
                         '</div>\n'+
                         
                         '<div class="editTaskModal">\n'+
                            '<button id="close-edit-modal">X</button>\n' +
                              '<div>\n'+
                                '<form action="" class="edit-task-form">\n'+
                                    '<div>\n'+
                                      '<label for="edit-title">Title: </label>\n'+
                                      '<input type="text" id="edit-title" name="edit-title" required placeholder=" ">\n'+
                                  '</div>\n'+
                                  '<div>\n'+
                                      '<label for="edit-desc">Description:</label>\n'+
                                      '<textarea id="edit-desc" name="edit-desc" maxlength="85"></textarea>\n'+
                                  '</div>\n'+
                                  '<div>\n'+
                                      '<label for="edit-taskDate">Due Date:</label>\n'+
                                      '<input type="date" id="edit-taskDate" name="edit-taskDate">\n'+
                                  '</div>\n'+
                                  '<div>\n'+
                                     '<label for="priority">Priority: </label>\n'+
                                    '<select id="edit-priority" name="edit-priority">\n'+
                                        '<option value="high">High</option>\n'+
                                        '<option value="medium">Medium</option>\n'+
                                        '<option value="low">Low</option>\n'+
                                    '</select>\n'+
                                  '</div>\n'+
                                 '<button type="submit" id="edit-submit-btn">Submit</button>\n'+
                              '</form>\n'+
                              '</div>\n'+
                         '</div>\n'+

                         '<div class="taskViewModal">\n'+
                            '<button id="close-view-modal">X</button>\n' +
                            '<div>\n'+
                                '<div class="taskViewHolder">\n'+
                                    '<div class="taskViewLabel">Title: </div>\n'+
                                    '<div id="viewTitle"></div>\n'+
                                '</div>\n'+
                                '<div class="taskViewHolder">\n'+
                                    '<div class="taskViewLabel">Description: </div>\n'+
                                    '<p id="viewDesc"></p>\n'+
                                '</div>\n'+
                                '<div class="taskViewHolder">\n'+
                                    '<div class="taskViewLabel">Due Date: </div>\n'+
                                    '<div id="viewDueDate"></div>\n'+
                                '</div>\n'+
                                '<div class="taskViewHolder">\n'+
                                    '<div class="taskViewLabel">Priority: </div>\n'+
                                    '<div id="viewPriority"></div>\n'+
                                '</div>\n'+
                            '</div>\n'+
                         '</div>\n'+

                         '<div class="header">\n'+
                             '<div class="headerTitle">\n'+
                                 proj.title + " tasks" +
                             '</div>\n'+
                             '<div>\n'+
                                '<button id="add-task">Add Task</button>\n'+
                                '<button id="return">Return to Projects</button>\n'+
                            '</div>\n'+
                        '</div>\n'+
                        '<div class="main">\n'+
                        '</div>\n';



                            



    
    
/*

    const header = document.createElement('div');
    header.classList.add('header');

    const headerTitle = document.createElement('div');
    headerTitle.classList.add('headerTitle');
    headerTitle.textContent = proj.getTitle() + " tasks";

    const addTask = document.createElement('button');
    addTask.setAttribute('id', 'add-task');
    addTask.textContent = "Add Task";
    addTask.addEventListener('click', () => {
        taskModal.style.display = 'block';
    })
    
    const returnBtn = document.createElement('button');
    returnBtn.setAttribute('id', 'return');
    returnBtn.textContent = "Return to Projects"
    returnBtn.addEventListener('click', () => {
        renderPage();
    })

    const div = document.createElement('div');
    div.appendChild(addTask);
    div.appendChild(returnBtn);

    header.appendChild(headerTitle);
    header.appendChild(div);

    content.appendChild(header);

    const main = document.createElement('div');
    main.classList.add('main');

    content.appendChild(taskModal);
    content.appendChild(header);
    content.appendChild(main);
    */
   const taskModal = document.querySelector('.taskModal');
   const taskForm = document.querySelector('.task-form');

   const editTaskModal = document.querySelector('.editTaskModal');
   const closeEdit = document.getElementById('close-edit-modal');
   closeEdit.addEventListener('click', () => {
    editTaskModal.style.display = 'none';
})


   
    const addTask = document.getElementById('add-task')
    addTask.addEventListener('click', () => {
        taskModal.style.display = 'block';
    })

    const returnBtn = document.getElementById('return')
    returnBtn.addEventListener('click', () => {
        renderPage();
    })

    const closeModal = document.getElementById('close-modal');
    closeModal.addEventListener('click', () => {
        taskModal.style.display = 'none';
    })

    const taskViewModal = document.querySelector('.taskViewModal')
    

    const closeViewModal = document.getElementById('close-view-modal');
    closeViewModal.addEventListener('click', () => {
        taskViewModal.style.display = 'none';
    })
    

    taskForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        taskModal.style.display = 'none';


        const data = new FormData(e.target);

        const task = taskFactory(data.get("title"), data.get("desc"), data.get("taskDate"), data.get("priority"));
        proj.addTask(task);
        renderTasks(proj);
        taskForm.reset();
        saveToLocalStorage();

    })
    renderTasks(proj);
    

}

export {renderProjectPage}
