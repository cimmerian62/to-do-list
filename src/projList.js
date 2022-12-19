const projList = function() {
    const arr = [];
    const addToList = (obj) => {
        arr.push(obj)
    }
    const getList = () => {
        return arr;
    }
    const delProj = (index) => {
        arr.splice(index, 1);
    }
    

    return { addToList, getList, delProj }


}();

export {projList}