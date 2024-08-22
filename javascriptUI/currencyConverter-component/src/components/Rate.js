export default function Rate() {
    this.render = () => {
        const div = document.createElement("div");
        div.classList.add("rate");
        div.id = "rate";

        return div;
    };
}
