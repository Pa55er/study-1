export default class TodoInput {
    constructor(addTodo) {
        this.addTodo = addTodo;
    }

    render() {
        const div = document.createElement("div");
        div.id = "todoInput";
        div.innerHTML = `
			<input
				type="text"
				id="newTodo"
				placeholder="오늘의 할일을 추가하세요"
			/>
			<button id="todoAdd">추가하기</button>
		`;

        const newTodoInput = div.querySelector("#newTodo");
        const todoAddBtn = div.querySelector("#todoAdd");

        todoAddBtn.onclick = () => {
            const inputText = newTodoInput.value.trim();
            if (inputText === "") {
                alert("할일을 입력해주세요");
                newTodoInput.focus();
                return;
            } else {
                this.addTodo(inputText);
                newTodoInput.value = "";
                newTodoInput.focus();
            }
        };

        return div;
    }
}
