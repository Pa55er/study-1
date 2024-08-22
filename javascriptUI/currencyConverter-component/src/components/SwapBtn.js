export default function SwapBtn() {
    this.render = () => {
        const div = document.createElement("div");
        div.classList.add("swap-rate-container");
        div.innerHTML = `
			<button class="btn" id="swap">바꾸기</button>
		`;

        return div;
    };
}
