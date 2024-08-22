import Currency from "./Currency.js";
import SwapBtn from "./SwapBtn.js";

export default function Container(calculate) {
    this.render = () => {
        const div = document.createElement("div");
        div.classList.add("container");

        const currency_1 = new Currency("one");
        const swapBtn = new SwapBtn();
        const currency_2 = new Currency("two");
        div.appendChild(currency_1.render());
        div.appendChild(swapBtn.render());
        div.appendChild(currency_2.render());

        const currencyEl_one = div.querySelector("#currency-one");
        const currencyEl_two = div.querySelector("#currency-two");
        const amountEl_one = div.querySelector("#amount-one");
        const amountEl_two = div.querySelector("#amount-two");
        const swap = div.querySelector("#swap");

        currencyEl_one.onchange = calculate;
        amountEl_one.oninput = calculate;
        currencyEl_two.onchange = calculate;
        amountEl_two.oninput = calculate;

        swap.onclick = () => {
            const temp = currencyEl_one.value;
            currencyEl_one.value = currencyEl_two.value;
            currencyEl_two.value = temp;

            const tempAmount = amountEl_one.value;
            amountEl_one.value = amountEl_two.value;
            amountEl_two.value = tempAmount;

            calculate();
        };

        return div;
    };
}
