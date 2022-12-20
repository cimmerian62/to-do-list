function Project(title, arr) {
    this.title = title;
    this.arr = arr;
};
Project.prototype.delTask = function(index) {
  this.arr.splice(index, 1);
};
Project.prototype.addTask = function(obj) {
  this.arr.push(obj);
};

export { Project }