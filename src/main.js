import TodoList from "./components/todoList/TodoList";

new TodoList({
  el: "#app",
  title: "À FAIRE !",
  apiURL: "https://6aa920f72d442cb69d4971f8.mockapi.io/api/endpoint",
}).render();
