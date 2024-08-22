export default function Currency(text) {
    this.render = () => {
        const div = document.createElement("div");
        div.classList.add("currency");
        div.innerHTML = `
		<select id="currency-${text}"></select>
		<input
			type="number"
			id="amount-${text}"
			placeholder="0"
			${text === "one" ? 'value="1"' : ""}
		/>
	`;

        return div;
    };
}
