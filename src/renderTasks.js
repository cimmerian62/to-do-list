const renderTasks = (proj) => {
    const list = proj.getArr();
    const main = document.querySelector('.main');
    for (let i = 0; i < list.length; i++) {
        const task = document.createElement('div')
        task.classList.add('task');
        proj.textContent = list[i].getTitle();
        const open = document.createElement('button');
        open.textContent = "Open"
        open.classList.add('openBtn');
        main.appendChild(proj);
    }
}

export {renderProjects}