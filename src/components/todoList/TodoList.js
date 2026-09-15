import DB from "../../DB.js";
import Todo from "../todo/Todo.js";

export default class TodoList {
  constructor(data) {
    this.domElement = document.querySelector(data.el);
    DB.setApiUrl(data.apiUrl);
    this.todos = [];
    this.loadTodos();
  }
  async loadTodos() {
    const todos = await DB.findAll();
    this.todos = [...todos.map((data) => new Todo(data))];
    console.table(this.todos);
  }
}