console.clear();

// 카운터 만들기

class Counter {
    #count;
    constructor(count) {
        if (count < 0 || isNaN(count)) {
            this.#count = 0;
        } else {
            this.#count = count;
        }
    }

    get value() {
        return this.#count;
    }

    inc() {
        this.#count++;
    }

    dec() {
        if (this.#count <= 0) {
            console.log("0이라서 더이상 못 낮춤!");
        } else {
            this.#count--;
        }
    }
}

const counter = new Counter(0);
counter.inc(); // 1씩 증가
counter.inc();
counter.inc();
counter.inc();
counter.inc();
counter.inc();
console.log(counter.value);
