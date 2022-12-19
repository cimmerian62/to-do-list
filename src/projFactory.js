const projFactory = (title) => {
    const arr = []
    const addTask = (obj) => {
        arr.push(obj)
    }
    const getTasks = () => arr;

    const getTitle = () => title;

    const delTask = (index) => {
      arr.splice(index, 1);
  }

  return { addTask, getTasks, getTitle, delTask};
};

export { projFactory }