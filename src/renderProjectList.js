import { projList } from "./projList";
import { renderProjectPage } from "./renderProjectPage";
import { saveToLocalStorage } from "./saveTolocalStorage";

const renderProjectList = () => {
    const list = projList.getList();
    const main = document.querySelector('.main');
    main.textContent = "";
    for (let i = 0; i < list.length; i++) {
        const proj = document.createElement('div')
        proj.classList.add('project');
        proj.setAttribute('id', i);

        const projTitle = document.createElement('div')
        projTitle.classList.add('projectTitle')
        projTitle.textContent = list[i].title;

        const open = document.createElement('button');
        open.textContent = "Open"
        open.setAttribute('id', "projOpenBtn");
        open.addEventListener('click', () => {
            renderProjectPage(list[i]);
        });

        const del = document.createElement('button');
        del.textContent = "Delete";
        del.setAttribute('id', "projDelBtn");
        del.addEventListener('click', () => {
            projList.delProj(i);
            renderProjectList();
            saveToLocalStorage();
        });

        const btnHolder = document.createElement('div')

        proj.appendChild(projTitle)

        btnHolder.appendChild(open);
        btnHolder.appendChild(del);

        proj.appendChild(btnHolder)

        main.appendChild(proj);

        



    }
}

export {renderProjectList}