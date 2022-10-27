const taskFactory = (title, desc, dueDate, priority) => {
    const editTask = function(title, desc, dueDate, priority) {
        this.title = title;
        this.desc = desc;
        this.dueDate = dueDate;
        this.priority = priority;
    }

  return { title, desc, dueDate, priority, editTask };
};

export { taskFactory }