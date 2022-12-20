import { Project } from "./projFactory";
import { projList } from "./projList";



const getFromLocalStorage = () => {
    if(localStorage.getItem('list')){
        const list = JSON.parse(localStorage.list);

        list.forEach(element => {
            projList.addToList(new Project(element.title, element.arr));

        });
    }

}

export { getFromLocalStorage }