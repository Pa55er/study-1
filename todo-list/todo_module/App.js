import TodoInput from "./TodoInput.js";
import TodoList from "./TodoList.js";

export default class App {
    constructor() {
        this.todos = JSON.parse(localStorage.getItem("todos")) || [];
    }

    addTodo = (text) => {
        const newTodo = { text, done: false };
        this.todos = [newTodo, ...this.todos];
        this.saveAndRender();
    };

    saveAndRender = () => {
        localStorage.setItem("todos", JSON.stringify(this.todos));
        this.render();
    };

    deleteTodo = (index) => {
        this.todos.splice(index, 1);
        this.saveAndRender();
    };

    toggleDone = (index) => {
        this.todos[index].done = !this.todos[index].done;
        this.saveAndRender();
    };

    render = () => {
        const app = document.getElementById("app");
        app.innerHTML = "";

        const todoInput = new TodoInput(this.addTodo);
        const todoList = new TodoList(
            this.todos,
            this.deleteTodo,
            this.toggleDone
        );

        app.appendChild(todoInput.render());
        app.appendChild(todoList.render());
    };
}
