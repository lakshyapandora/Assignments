/*
  Implement a class `Todo` having below methods
    - add(todo): adds todo to list of todos
    - remove(indexOfTodo): remove todo from list of todos
    - update(index, updatedTodo): update todo at given index
    - getAll: returns all todos
    - get(indexOfTodo): returns todo at given index
    - clear: deletes all todos

  Once you've implemented the logic, test your code by running
*/

class Todo {
    Todo(){
      this.todoList = [];
    }

    add(todo){
      this.todoList.push(todo);
    }

    remove(indexOfTodo){
      this.todoList.remove(indexOfTodo);
    }

    update(index,updatedTodo){
      this.todoList[index] = updatedTodo;
    }

    getAll(){
      return this.todoList;
    }

    get(indexOfTodo){
      return this.todoList[indexOfTodo];
    }

    clear(){
      while(this.todoList.length)
      this.todoList.pop();
    }
}

module.exports = Todo;
