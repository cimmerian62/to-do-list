import { projList } from "./projList"

const saveToLocalStorage = () => {
    const list = JSON.stringify(projList.getList());
    localStorage.setItem('list', list);
}

export { saveToLocalStorage }