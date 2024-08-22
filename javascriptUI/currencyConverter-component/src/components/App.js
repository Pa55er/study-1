import Container from "./Container.js";
import Rate from "./Rate.js";

export default function App() {
    this.getList = async () => {
        const res = await fetch("https://open.exchangerate-api.com/v6/latest");
        const rates = await res.json();
        const list = rates.rates;
        return list;
    };

    this.calculate = () => {
        const currencyEl_one = document.getElementById("currency-one");
        const currencyEl_two = document.getElementById("currency-two");
        const amountEl_one = document.getElementById("amount-one");
        const amountEl_two = document.getElementById("amount-two");
        const rateEl = document.getElementById("rate");
        const currency_one = currencyEl_one.value;
        const currency_two = currencyEl_two.value;

        const rate_one = parseFloat(
            currencyEl_one.options[currencyEl_one.selectedIndex].getAttribute(
                "data-rate"
            )
        );

        const rate_two = parseFloat(
            currencyEl_two.options[currencyEl_two.selectedIndex].getAttribute(
                "data-rate"
            )
        );

        const rate = rate_two / rate_one;
        rateEl.innerText = `1 ${currency_one} = ${rate.toFixed(
            4
        )} ${currency_two}`;

        amountEl_two.value = (amountEl_one.value * rate).toFixed(2);
    };

    this.optionList = async () => {
        const currencyEl_one = document.getElementById("currency-one");
        const currencyEl_two = document.getElementById("currency-two");
        const list = await this.getList();
        for (let key in list) {
            const option1 = document.createElement("option");
            const option2 = document.createElement("option");
            option1.value = key;
            option1.innerText = key;
            option1.setAttribute("data-rate", list[key]);
            option2.value = key;
            option2.innerText = key;
            option2.setAttribute("data-rate", list[key]);
            currencyEl_one.appendChild(option1);
            currencyEl_two.appendChild(option2);

            if (key === "USD") {
                option1.selected = true;
            }
            if (key === "KRW") {
                option2.selected = true;
            }
        }
        this.calculate();
    };

    this.render = () => {
        const app = document.getElementById("app");
        app.innerHTML = `
			<h1>환율계산기</h1>
			<p>통화와 금액을 선택하세요</p>
		`;

        const container = new Container(this.calculate);
        const rate = new Rate();
        app.appendChild(container.render());
        app.appendChild(rate.render());

        this.optionList();
    };
}
