const renderProjects = (projList) => {
    const list = projList.getList();
    const main = document.querySelector('.main');
    for (let i = 0; i < list.length; i++) {
        const proj = document.createElement('div')
        proj.classList.add('project');
        proj.textContent = list[i].getTitle();
        const open = document.createElement('button');
        open.textContent = "Open"
        open.classList.add('openBtn');
        main.appendChild(proj);
    }
}

export {renderProjects}