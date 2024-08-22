export default class TodoList {
    constructor(todos, deleteTodo, toggleDone) {
        this.todos = todos;
        this.deleteTodo = deleteTodo;
        this.toggleDone = toggleDone;
    }

    render() {
        const ul = document.createElement("ul");
        ul.id = "todoList";
        ul.innerHTML = this.todos
            .map(
                (todo, index) => `
		<li class="todoItem ${todo.done ? "done" : ""}" data-index="${index}">
			<p>${todo.text}</p>
			<button class="completeBtn">완료</button>
			<button class="deleteBtn">삭제</button>
		</li>
		`
            )
            .join("");

        // 이벤트 위임
        ul.onclick = (e) => {
            const li = e.target.closest("li");
            if (!li) return;
            const index = li.dataset.index;
            if (e.target.classList.contains("deleteBtn")) {
                this.deleteTodo(index);
            } else if (e.target.classList.contains("completeBtn")) {
                this.toggleDone(index);
            }
        };

        return ul;
    }
}
