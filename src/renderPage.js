import { projList } from "./projList";
import { projFactory } from "./projFactory";
import { renderProjectList } from "./renderProjectList";

const renderPage = () => {
    const content = document.querySelector('.content');
    content.textContent = "";

    const projModal = document.createElement('div');
    projModal.classList.add('projModal')

    const wrapper = document.createElement('div');
    
    const closeBtn = document.createElement('button');
    closeBtn.setAttribute('id', 'close-modal');
    closeBtn.textContent = "X";

    const inputDiv = document.createElement('div');

    const label = document.createElement('label');
    label.setAttribute('for', "projTitle");
    label.textContent = "Project Title:";

    const input = document.createElement('input');
    input.setAttribute("type", "text");
    input.setAttribute('id', 'projTitle');

    inputDiv.appendChild(label);
    inputDiv.appendChild(input);

    const submitButton = document.createElement('button');
    submitButton.setAttribute('id', 'projSubmit');
    submitButton.textContent = "Submit";

    wrapper.appendChild(closeBtn);
    wrapper.appendChild(inputDiv);
    wrapper.appendChild(submitButton);

    projModal.appendChild(wrapper);

    


    const header = document.createElement('div');
    header.classList.add('header');

    const headerTitle = document.createElement('div');
    headerTitle.classList.add('headerTitle');
    headerTitle.textContent = "Projects"

    const addBtn = document.createElement('button');
    addBtn.setAttribute('id', 'addBtn');
    addBtn.textContent = "Add Project";

    header.appendChild(headerTitle);
    header.appendChild(addBtn);

    const main = document.createElement('div');
    main.classList.add('main');

    content.appendChild(projModal);
    content.appendChild(header);
    content.appendChild(main);

    renderProjectList();


    addBtn.addEventListener('click', () => {
        projModal.style.display = 'block';
    })
    
    closeBtn.addEventListener('click', () => {
        projModal.style.display = 'none';
    })
    
    
    
    submitButton.addEventListener('click', () => {
        if (input.value) {
            
            projList.addToList(projFactory(input.value));
            input.value = "";
            projModal.style.display = 'none';
            renderProjectList();
        }
        
    })

    



}

export { renderPage }
















    







